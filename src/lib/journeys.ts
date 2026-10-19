// Pure journey logic (filtering, labels, enquiry text). No React or DOM here, so it is unit-tested.
import type {
  DurationFilter,
  RegionFilter,
  StyleFilter,
} from "../data/options";
import type { Tour } from "../data/tours";

export type Filters = {
  region: RegionFilter;
  style: StyleFilter;
  duration: DurationFilter;
  /** Destination or place picked from a destination card; "" when none. */
  destination: string;
};

export const defaultFilters: Filters = {
  region: "Kerala",
  style: "all",
  duration: "all",
  destination: "",
};

/** Tours matching the filters. "South" also lists the Kerala tours. */
export function filterTours(tours: Tour[], f: Filters): Tour[] {
  return tours.filter(
    (t) =>
      (f.region === "all" ||
        t.region === f.region ||
        (f.region === "South" && t.region === "Kerala")) &&
      (f.style === "all" ||
        t.style === f.style ||
        (t.styles ?? []).includes(f.style)) &&
      (f.duration === "all" ||
        (f.duration === "short" ? t.days <= 5 : t.days >= 6)) &&
      (!f.destination ||
        t.destination === f.destination ||
        t.places.includes(f.destination)),
  );
}

/** First tour that visits a destination, used to pick the region for a destination card. */
export function tourVisiting(
  tours: Tour[],
  destination: string,
): Tour | undefined {
  return tours.find(
    (t) => t.destination === destination || t.places.includes(destination),
  );
}

/** True when the grid shows the Kerala collection (Kerala or South India). */
export function isKeralaView(region: RegionFilter): boolean {
  return region === "Kerala" || region === "South";
}

/** The line above the grid, e.g. "6 journey ideas in Kerala · Family · Select up to 3 to compare". */
export function resultsSummary(count: number, f: Filters): string {
  const scope =
    f.region === "all"
      ? "across India"
      : f.region === "Kerala"
        ? "in Kerala"
        : `in ${f.region} India`;
  const parts = [
    scope + (f.destination ? ` · Including ${f.destination}` : ""),
  ];
  if (f.style !== "all") parts.push(f.style);
  if (f.duration !== "all")
    parts.push(f.duration === "short" ? "Up to 5 days" : "6 days or more");
  return `${count} journey idea${count === 1 ? "" : "s"} ${parts.join(" · ")} · Select up to 3 to compare`;
}

export function regionLabel(t: Tour): string {
  return t.region === "Kerala" ? "KERALA" : `${t.region.toUpperCase()} INDIA`;
}

/** Trip-length option that fits a tour; values match `tripLengths` in data/options. */
export function tripLengthFor(days: number): string {
  if (days <= 4) return "3–4 days";
  if (days <= 6) return "5–6 days";
  if (days <= 8) return "7–8 days";
  return "9+ days";
}

/** Occasion option that fits a tour; values match `occasions` in data/options. */
export function occasionFor(t: Tour): string {
  if (t.style === "Family") return "Family holiday";
  if (t.style === "Honeymoon") return "Honeymoon / couple";
  return "To discuss";
}

/** Destination text the trip form shows after "Plan this trip". */
export function planDestination(t: Tour): string {
  return `${t.destination} — ${t.name}`;
}

export type Enquiry = {
  name: string;
  destination: string;
  date: string;
  tripLength: string;
  occasion: string;
  travellers: string;
  budget: string;
  pace: string;
  notes: string;
};

/** WhatsApp message for the trip form. `tour` is the sample route the visitor picked, if any. */
export function enquiryMessage(e: Enquiry, tour: Tour | null): string {
  return [
    "Hi Canty Tours! I'd like to plan a holiday with you.",
    "",
    `Name: ${e.name}`,
    `Destination: ${e.destination}`,
    ...(tour
      ? [
          `Sample route: ${tour.route}`,
          `Sample itinerary: ${tour.days} days / ${tour.nights} nights`,
        ]
      : []),
    `Travel date: ${e.date || "Flexible / to discuss"}`,
    `Preferred trip length: ${e.tripLength || "Flexible / to discuss"}`,
    `Occasion: ${e.occasion || "To discuss"}`,
    `Travellers: ${e.travellers}`,
    `Budget per person: ${e.budget}`,
    `Travel style: ${e.pace}`,
    ...(e.notes ? [`Other details: ${e.notes}`] : []),
    "",
    "Please share itinerary options, availability, pricing and inclusions.",
  ].join("\n");
}
