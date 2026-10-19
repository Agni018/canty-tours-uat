import { describe, expect, it } from "vitest";
import { tours } from "../data/tours";
import {
  defaultFilters,
  enquiryMessage,
  filterTours,
  occasionFor,
  resultsSummary,
  tripLengthFor,
  type Enquiry,
} from "./journeys";

const ids = (f: Partial<typeof defaultFilters>) =>
  filterTours(tours, { ...defaultFilters, ...f }).map((t) => t.id);

describe("filterTours", () => {
  it("shows the six Kerala tours by default", () => {
    expect(ids({})).toHaveLength(6);
  });
  it("includes the Kerala tours under South India", () => {
    expect(ids({ region: "South" })).toEqual(ids({ region: "Kerala" }));
  });
  it("matches a destination through a tour's places", () => {
    expect(ids({ destination: "Wayanad" })).toEqual(["kerala-wayanad"]);
    expect(ids({ region: "all", destination: "Jaipur" })).toEqual([
      "rajasthan",
      "triangle",
    ]);
  });
  it("matches extra styles as well as the main one", () => {
    expect(ids({ style: "Family" })).toEqual([
      "kerala-classic",
      "kerala-family",
      "kerala-wayanad",
    ]);
  });
  it("splits durations at 5 days", () => {
    expect(
      ids({ region: "all", duration: "short" }).every(
        (id) => tours.find((t) => t.id === id)!.days <= 5,
      ),
    ).toBe(true);
    expect(
      ids({ region: "all", duration: "long" }).every(
        (id) => tours.find((t) => t.id === id)!.days >= 6,
      ),
    ).toBe(true);
  });
});

describe("labels", () => {
  it("summarises the active filters", () => {
    expect(
      resultsSummary(1, {
        ...defaultFilters,
        destination: "Munnar",
        style: "Honeymoon",
      }),
    ).toBe(
      "1 journey idea in Kerala · Including Munnar · Honeymoon · Select up to 3 to compare",
    );
    expect(
      resultsSummary(3, {
        ...defaultFilters,
        region: "West",
        duration: "long",
      }),
    ).toBe(
      "3 journey ideas in West India · 6 days or more · Select up to 3 to compare",
    );
  });
  it("prefills trip length and occasion from a tour", () => {
    expect([4, 5, 7, 9].map(tripLengthFor)).toEqual([
      "3–4 days",
      "5–6 days",
      "7–8 days",
      "9+ days",
    ]);
    const byId = (id: string) => tours.find((t) => t.id === id)!;
    expect(occasionFor(byId("kerala-family"))).toBe("Family holiday");
    expect(occasionFor(byId("kerala-honeymoon"))).toBe("Honeymoon / couple");
    expect(occasionFor(byId("goa"))).toBe("To discuss");
  });
});

describe("enquiryMessage", () => {
  const enquiry: Enquiry = {
    name: "Asha",
    destination: "Goa",
    date: "",
    tripLength: "5–6 days",
    occasion: "To discuss",
    travellers: "2 travellers",
    budget: "Let’s discuss",
    pace: "A bit of everything",
    notes: "",
  };
  it("builds the WhatsApp text, with the sample route when a tour was picked", () => {
    const goa = tours.find((t) => t.id === "goa")!;
    expect(enquiryMessage({ ...enquiry, notes: "From Pune" }, goa)).toBe(
      [
        "Hi Canty Tours! I'd like to plan a holiday with you.",
        "",
        "Name: Asha",
        "Destination: Goa",
        "Sample route: Panaji → Old Goa → South Goa",
        "Sample itinerary: 4 days / 3 nights",
        "Travel date: Flexible / to discuss",
        "Preferred trip length: 5–6 days",
        "Occasion: To discuss",
        "Travellers: 2 travellers",
        "Budget per person: Let’s discuss",
        "Travel style: A bit of everything",
        "Other details: From Pune",
        "",
        "Please share itinerary options, availability, pricing and inclusions.",
      ].join("\n"),
    );
    expect(enquiryMessage(enquiry, null)).not.toContain("Sample route");
  });
});
