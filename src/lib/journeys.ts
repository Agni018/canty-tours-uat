// Pure journey logic (filtering, labels, message text, phone checks). No React or DOM here,
// so it is unit-tested in journeys.test.ts.
import type {
  DurationFilter,
  RegionFilter,
  StyleFilter,
} from "../data/options";
import { places, placeValue } from "../data/places";
import type { Tour } from "../data/tours";

export type Filters = {
  region: RegionFilter;
  style: StyleFilter;
  duration: DurationFilter;
  /** Place picked in the "Where to?" picker or a destination card; "" when none. */
  destination: string;
};

export const defaultFilters: Filters = {
  region: "Kerala",
  style: "all",
  duration: "all",
  destination: "",
};

/** "South India" also lists Kerala routes; routes through several regions match each of them. */
export function matchesRegion(t: Tour, region: RegionFilter): boolean {
  const regions = t.regions ?? [t.region];
  return (
    region === "all" ||
    regions.includes(region) ||
    (region === "South" && regions.includes("Kerala"))
  );
}

/** "Houseboat" matches any route with a houseboat stay or cruise; other places match by name. */
export function matchesDestination(t: Tour, destination: string): boolean {
  if (!destination) return true;
  if (destination === "Houseboat")
    return (
      (t.experiences ?? []).includes("Houseboat") ||
      t.itinerary.some((day) => /houseboat/i.test(day))
    );
  return t.destination === destination || t.places.includes(destination);
}

export function filterTours(tours: Tour[], f: Filters): Tour[] {
  return tours.filter(
    (t) =>
      matchesRegion(t, f.region) &&
      (f.style === "all" ||
        t.style === f.style ||
        (t.styles ?? []).includes(f.style)) &&
      (f.duration === "all" ||
        (f.duration === "short" ? t.days <= 5 : t.days >= 6)) &&
      matchesDestination(t, f.destination),
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

/** Display name for a filter value: "Alappuzha" shows as "Alleppey". */
export function destinationLabel(destination: string): string {
  return places.find((p) => placeValue(p) === destination)?.name ?? destination;
}

export function journeysEyebrow(region: RegionFilter): string {
  if (region === "Kerala") return "YOUR KERALA STORY STARTS HERE";
  if (region === "South") return "YOUR SOUTH INDIA STORY STARTS HERE";
  return "YOUR NEXT INDIA STORY STARTS HERE";
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
    scope +
      (f.destination ? ` · Including ${destinationLabel(f.destination)}` : ""),
  ];
  if (f.style !== "all") parts.push(f.style);
  if (f.duration !== "all")
    parts.push(f.duration === "short" ? "Up to 5 days" : "6 days or more");
  return `${count} journey idea${count === 1 ? "" : "s"} ${parts.join(" · ")} · Select up to 3 to compare`;
}

export function regionLabel(t: Tour): string {
  if (t.regionLabel) return t.regionLabel;
  return t.region === "Kerala" ? "KERALA" : `${t.region.toUpperCase()} INDIA`;
}

/** "4 days / 3 nights", or "2 days / 1 night". */
export function durationText(t: Tour): string {
  return `${t.days} days / ${t.nights} ${t.nights === 1 ? "night" : "nights"}`;
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

/** WhatsApp message for the trip planner form. */
export function enquiryMessage(e: Enquiry): string {
  return [
    "Hi Canty Tours! I'd like to plan a holiday with you.",
    "",
    `Name: ${e.name}`,
    `Destination: ${e.destination}`,
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

/** "Ask on WhatsApp" message for one journey. `link` is the shareable journey URL, or "". */
export function journeyMessage(t: Tour, link: string): string {
  return [
    `Hi Canty Tours! I'm interested in the “${t.name}” sample journey (${durationText(t)}).`,
    `Route: ${t.route}`,
    ...(link ? [link] : []),
    "",
    "Please share availability, pricing and inclusions.",
  ].join("\n");
}

export type Contact = { name: string; phone: string; email: string };

/** Message from the "Personalise this journey" contact dialog. `phone` is already formatted. */
export function contactMessage(t: Tour, c: Contact, link: string): string {
  return [
    "Hi Canty Tours! I'd like to personalise this journey.",
    "",
    `Journey: ${t.name} (${durationText(t)})`,
    `Route: ${t.route}`,
    ...(link ? [link] : []),
    "",
    ...(c.name ? [`Name: ${c.name}`] : []),
    `Phone: ${c.phone}`,
    ...(c.email ? [`Email: ${c.email}`] : []),
    "",
    "Please get in touch to plan it with me.",
  ].join("\n");
}

/**
 * The phone number with its country code (e.g. "+91 98765 43210"), or "" if it doesn't look like
 * a phone number. A number typed with its own "+" code is used as typed.
 */
export function formatPhone(code: string, value: string): string {
  let digits = value.replace(/\D/g, "");
  if (value.trim().startsWith("+"))
    return digits.length >= 8 && digits.length <= 15 ? `+${digits}` : "";
  if (code === "+91") {
    if (digits.length === 11 && digits.startsWith("0"))
      digits = digits.slice(1);
    if (digits.length === 12 && digits.startsWith("91"))
      digits = digits.slice(2);
    return /^[1-9]\d{9}$/.test(digits)
      ? `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
      : "";
  }
  if (code === "+1") {
    if (digits.length === 11 && digits.startsWith("1"))
      digits = digits.slice(1);
    return digits.length === 10 ? `+1 ${digits}` : "";
  }
  return digits.length >= 4 && code.length - 1 + digits.length <= 15
    ? `${code} ${digits}`
    : "";
}

/** Validation message for the phone field, or "" when the number is usable. */
export function phoneError(code: string, value: string): string {
  if (!value.trim()) return "Please add your phone number so we can reach you.";
  if (formatPhone(code, value)) return "";
  if (code === "+91") return "Please enter your 10-digit mobile number.";
  if (code === "+1") return "Please enter your 10-digit phone number.";
  return "Please check your phone number.";
}
