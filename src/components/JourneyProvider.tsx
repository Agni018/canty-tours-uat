"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { RegionFilter } from "@/data/options";
import { tours, type Tour } from "@/data/tours";
import {
  defaultFilters,
  planDestination,
  tourVisiting,
  type Filters,
} from "@/lib/journeys";
import { scrollToSection } from "@/lib/utils";

/** The finder's select values. They only reach the grid when filters are applied. */
type FinderFields = Omit<Filters, "destination">;

/** A tour picked with "Plan this trip"; TripForm prefills itself from it. */
export type PlannedTour = { tour: Tour; destination: string };

const MAX_COMPARE = 3;

function useJourneyState() {
  const [{ fields, filters }, setFilterState] = useState(() => {
    const { region, style, duration } = defaultFilters;
    return {
      fields: { region, style, duration } as FinderFields,
      filters: defaultFilters,
    };
  });
  const [compared, setCompared] = useState<string[]>([]);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [compareOpen, setCompareOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [plannedTour, setPlannedTour] = useState<PlannedTour | null>(null);
  const [toast, setToast] = useState({ message: "", visible: false });
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function notify(message: string) {
    setToast({ message, visible: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(
      () => setToast((t) => ({ ...t, visible: false })),
      3500,
    );
  }

  /** Updates finder fields and shows the result in the grid. The destination is kept unless given. */
  function applyFilters(changes: Partial<Filters>) {
    setFilterState((s) => {
      const { destination = s.filters.destination, ...fieldChanges } = changes;
      const nextFields = { ...s.fields, ...fieldChanges };
      return { fields: nextFields, filters: { ...nextFields, destination } };
    });
  }

  return {
    fields,
    filters,
    setField<K extends keyof FinderFields>(key: K, value: FinderFields[K]) {
      setFilterState((s) => ({ ...s, fields: { ...s.fields, [key]: value } }));
    },
    applyFilters,
    /** Finder submit: the finder has no destination control, so it clears the destination. */
    findJourneys() {
      applyFilters({ destination: "" });
      scrollToSection("journeys");
    },
    showDestination(destination: string) {
      const region = tourVisiting(tours, destination)?.region ?? "all";
      applyFilters({ destination, region, style: "all", duration: "all" });
      scrollToSection("journeys");
    },
    showRegion(region: RegionFilter) {
      applyFilters({ destination: "", region, style: "all", duration: "all" });
      scrollToSection("journeys");
    },
    resetFilters() {
      applyFilters(defaultFilters);
    },

    compared,
    /** Adds or removes a tour from the comparison; refuses a fourth one. */
    toggleCompare(id: string, on: boolean) {
      if (on && compared.length >= MAX_COMPARE) {
        notify("You can compare up to 3 journeys. Remove one to add another.");
        return;
      }
      setCompared((ids) => (on ? [...ids, id] : ids.filter((x) => x !== id)));
    },
    clearCompare() {
      setCompared([]);
    },

    detailTour: tours.find((t) => t.id === detailId) ?? null,
    showDetails: setDetailId,
    compareOpen,
    setCompareOpen,
    privacyOpen,
    setPrivacyOpen,

    plannedTour,
    planTour(id: string) {
      const tour = tours.find((t) => t.id === id);
      if (!tour) return;
      // Close dialogs synchronously: the trip form can't take focus while a modal is open.
      document
        .querySelectorAll("dialog[open]")
        .forEach((d) => (d as HTMLDialogElement).close());
      setPlannedTour({ tour, destination: planDestination(tour) });
    },

    toast,
    notify,
  };
}

const JourneyContext = createContext<ReturnType<typeof useJourneyState> | null>(
  null,
);

/** Holds the page's shared state: filters, comparison, open dialogs, planned tour and toast. */
export function JourneyProvider({ children }: { children: ReactNode }) {
  return <JourneyContext value={useJourneyState()}>{children}</JourneyContext>;
}

export function useJourneys() {
  const value = useContext(JourneyContext);
  if (!value)
    throw new Error("useJourneys must be used inside <JourneyProvider>");
  return value;
}
