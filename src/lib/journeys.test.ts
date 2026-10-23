import { describe, expect, it } from "vitest";
import { places, placeValue } from "../data/places";
import { tours } from "../data/tours";
import {
  contactMessage,
  defaultFilters,
  destinationLabel,
  durationText,
  enquiryMessage,
  filterTours,
  formatPhone,
  journeyMessage,
  journeysEyebrow,
  phoneError,
  resultsSummary,
  type Enquiry,
  type Filters,
} from "./journeys";

const ids = (f: Partial<Filters>) =>
  filterTours(tours, { ...defaultFilters, ...f }).map((t) => t.id);
const byId = (id: string) => tours.find((t) => t.id === id)!;

describe("filterTours", () => {
  it("shows Kerala routes by default, including Kerala & Tamil Nadu ones", () => {
    const kerala = ids({});
    expect(kerala).toHaveLength(11);
    expect(kerala).toContain("south-temple-trail");
  });
  it("includes the Kerala routes under South India", () => {
    expect(ids({ region: "South" })).toEqual(ids({ region: "Kerala" }));
  });
  it("finds at least one route for every place in the picker", () => {
    for (const p of places) {
      const found = ids({
        region: p.region ?? "Kerala",
        destination: placeValue(p),
      });
      expect(found, p.name).not.toHaveLength(0);
    }
  });
  it("matches Houseboat through stays, cruises and experiences", () => {
    const found = ids({ destination: "Houseboat" });
    expect(found).toContain("kerala-houseboat");
    expect(found).toContain("kerala-kollam");
  });
  it("matches extra styles as well as the main one", () => {
    for (const id of ids({ region: "all", style: "Honeymoon" })) {
      const t = byId(id);
      expect([t.style, ...(t.styles ?? [])]).toContain("Honeymoon");
    }
  });
  it("splits durations at 5 days", () => {
    expect(
      ids({ region: "all", duration: "short" }).every(
        (id) => byId(id).days <= 5,
      ),
    ).toBe(true);
    expect(
      ids({ region: "all", duration: "long" }).every(
        (id) => byId(id).days >= 6,
      ),
    ).toBe(true);
  });
});

describe("labels", () => {
  it("shows place names rather than filter values", () => {
    expect(destinationLabel("Alappuzha")).toBe("Alleppey");
    expect(destinationLabel("Rajasthan")).toBe("Rajasthan");
    expect(
      resultsSummary(2, {
        ...defaultFilters,
        destination: "Alappuzha",
        style: "Family",
      }),
    ).toBe(
      "2 journey ideas in Kerala · Including Alleppey · Family · Select up to 3 to compare",
    );
  });
  it("names the collection above the grid", () => {
    expect(journeysEyebrow("Kerala")).toBe("YOUR KERALA STORY STARTS HERE");
    expect(journeysEyebrow("South")).toBe("YOUR SOUTH INDIA STORY STARTS HERE");
    expect(journeysEyebrow("all")).toBe("YOUR NEXT INDIA STORY STARTS HERE");
  });
  it("uses the singular for one night", () => {
    expect(durationText(byId("kerala-houseboat"))).toBe("2 days / 1 night");
    expect(durationText(byId("goa"))).toBe("4 days / 3 nights");
  });
});

describe("formatPhone / phoneError", () => {
  it("normalises Indian mobile numbers", () => {
    expect(formatPhone("+91", "98765 43210")).toBe("+91 98765 43210");
    expect(formatPhone("+91", "098765-43210")).toBe("+91 98765 43210");
    expect(formatPhone("+91", "91 98765 43210")).toBe("+91 98765 43210");
    expect(formatPhone("+91", "12345")).toBe("");
    expect(formatPhone("+91", "0987654321")).toBe("");
  });
  it("handles North American and other codes, and numbers typed with their own +code", () => {
    expect(formatPhone("+1", "(415) 555-0100")).toBe("+1 4155550100");
    expect(formatPhone("+971", "50 123 4567")).toBe("+971 501234567");
    expect(formatPhone("+91", "+44 7700 900123")).toBe("+447700900123");
    expect(formatPhone("+44", "123")).toBe("");
  });
  it("explains what is wrong", () => {
    expect(phoneError("+91", " ")).toBe(
      "Please add your phone number so we can reach you.",
    );
    expect(phoneError("+91", "123")).toBe(
      "Please enter your 10-digit mobile number.",
    );
    expect(phoneError("+1", "123")).toBe(
      "Please enter your 10-digit phone number.",
    );
    expect(phoneError("+44", "12")).toBe("Please check your phone number.");
    expect(phoneError("+91", "9876543210")).toBe("");
  });
});

describe("WhatsApp messages", () => {
  const houseboat = byId("kerala-houseboat");
  it("asks about one journey, with its link when there is one", () => {
    expect(
      journeyMessage(
        houseboat,
        "https://example.com/#journey=kerala-houseboat",
      ),
    ).toBe(
      [
        "Hi Canty Tours! I'm interested in the “An Overnight on Alleppey's Waterways” sample journey (2 days / 1 night).",
        "Route: Kochi → Alappuzha → Kochi",
        "https://example.com/#journey=kerala-houseboat",
        "",
        "Please share availability, pricing and inclusions.",
      ].join("\n"),
    );
    expect(journeyMessage(houseboat, "")).not.toContain("https://");
  });
  it("sends contact details, leaving out empty optional fields", () => {
    expect(
      contactMessage(
        houseboat,
        { name: "Asha", phone: "+91 98765 43210", email: "" },
        "",
      ),
    ).toBe(
      [
        "Hi Canty Tours! I'd like to personalise this journey.",
        "",
        "Journey: An Overnight on Alleppey's Waterways (2 days / 1 night)",
        "Route: Kochi → Alappuzha → Kochi",
        "",
        "Name: Asha",
        "Phone: +91 98765 43210",
        "",
        "Please get in touch to plan it with me.",
      ].join("\n"),
    );
  });
  it("builds the trip planner text", () => {
    const enquiry: Enquiry = {
      name: "Asha",
      destination: "Goa",
      date: "",
      tripLength: "2 days",
      occasion: "To discuss",
      travellers: "2 travellers",
      budget: "Let’s discuss",
      pace: "A bit of everything",
      notes: "From Pune",
    };
    expect(enquiryMessage(enquiry)).toBe(
      [
        "Hi Canty Tours! I'd like to plan a holiday with you.",
        "",
        "Name: Asha",
        "Destination: Goa",
        "Travel date: Flexible / to discuss",
        "Preferred trip length: 2 days",
        "Occasion: To discuss",
        "Travellers: 2 travellers",
        "Budget per person: Let’s discuss",
        "Travel style: A bit of everything",
        "Other details: From Pune",
        "",
        "Please share itinerary options, availability, pricing and inclusions.",
      ].join("\n"),
    );
  });
});
