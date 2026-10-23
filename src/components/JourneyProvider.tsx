"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { RegionFilter } from "@/data/options";
import { tours } from "@/data/tours";
import {
  defaultFilters,
  filterTours,
  tourVisiting,
  type Filters,
} from "@/lib/journeys";
import { scrollToSection } from "@/lib/utils";

/** A request for TripForm to fill in a destination and take focus. */
export type TripRequest = { destination: string };

const MAX_COMPARE = 3;

function useJourneyState() {
  // `fields` is what the finder shows; `filters` is what the grid shows. Picking in the finder
  // only changes `fields` until the visitor presses "Find my journey" or another filter control.
  const [{ fields, filters }, setFilterState] = useState({
    fields: defaultFilters,
    filters: defaultFilters,
  });
  // Bumped when the results should be scrolled to and pointed out (see Journeys).
  const [revealCount, setRevealCount] = useState(0);
  // Journey from a shared #journey=<id> link, waiting for its card to render.
  const [sharedId, setSharedId] = useState<string | null>(null);
  const [compared, setCompared] = useState<string[]>([]);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [connectId, setConnectId] = useState<string | null>(null);
  const [compareOpen, setCompareOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [tripRequest, setTripRequest] = useState<TripRequest | null>(null);
  const [toast, setToast] = useState({ message: "", visible: false });
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const matches = filterTours(tours, filters);

  function notify(message: string) {
    setToast({ message, visible: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(
      () => setToast((t) => ({ ...t, visible: false })),
      3500,
    );
  }

  /** Updates the finder and shows the result in the grid. */
  function applyFilters(changes: Partial<Filters>) {
    setFilterState((s) => {
      const next = { ...s.fields, ...changes };
      return { fields: next, filters: next };
    });
  }

  return {
    fields,
    filters,
    /** Tours currently shown in the grid, in order. */
    matches,
    /** Changes the finder without updating the grid yet. */
    setFields(changes: Partial<Filters>) {
      setFilterState((s) => ({ ...s, fields: { ...s.fields, ...changes } }));
    },
    applyFilters,
    revealCount,
    /** Finder submit: show the finder's choices and point out the results. */
    findJourneys() {
      applyFilters({});
      setRevealCount((n) => n + 1);
    },
    showDestination(destination: string) {
      const region = tourVisiting(tours, destination)?.region ?? "all";
      applyFilters({ destination, region, style: "all", duration: "all" });
      setRevealCount((n) => n + 1);
    },
    showRegion(region: RegionFilter) {
      applyFilters({ destination: "", region, style: "all", duration: "all" });
      scrollToSection("journeys");
    },
    resetFilters() {
      applyFilters(defaultFilters);
    },

    sharedId,
    setSharedId,
    /** Opens the journey named in a #journey=<id> link, widening the filters if it's hidden. */
    openSharedJourney() {
      const tour = tours.find((t) => location.hash === `#journey=${t.id}`);
      if (!tour) return;
      if (!filterTours(tours, filters).includes(tour)) {
        const inKerala = filterTours(tours, defaultFilters).includes(tour);
        applyFilters({
          ...defaultFilters,
          region: inKerala ? "Kerala" : "all",
        });
      }
      setSharedId(tour.id);
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
    /** Moves the open journey dialog to the previous (-1) or next (1) journey in the grid. */
    stepDetails(step: number) {
      const index = matches.findIndex((t) => t.id === detailId);
      if (index < 0 || matches.length < 2) return;
      setDetailId(matches[(index + step + matches.length) % matches.length].id);
    },
    /** "Personalise this journey" contact dialog; opens on top of any open dialog. */
    connectTour: tours.find((t) => t.id === connectId) ?? null,
    openConnect: setConnectId,
    compareOpen,
    setCompareOpen,
    privacyOpen,
    setPrivacyOpen,

    tripRequest,
    /** Fills the trip planner with a destination, scrolls to it and focuses it. */
    planTrip(destination: string) {
      setTripRequest({ destination });
    },

    toast,
    notify,
  };
}

const JourneyContext = createContext<ReturnType<typeof useJourneyState> | null>(
  null,
);

/** Holds the page's shared state: filters, comparison, open dialogs, trip requests and toast. */
export function JourneyProvider({ children }: { children: ReactNode }) {
  return <JourneyContext value={useJourneyState()}>{children}</JourneyContext>;
}

export function useJourneys() {
  const value = useContext(JourneyContext);
  if (!value)
    throw new Error("useJourneys must be used inside <JourneyProvider>");
  return value;
}
