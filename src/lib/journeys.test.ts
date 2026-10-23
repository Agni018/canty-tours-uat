import { describe, expect, it } from "vitest";
import { places, placeValue } from "../data/places";
import { tours } from "../data/tours";
import {
  defaultFilters,
  destinationLabel,
  durationText,
  enquiryMessage,
  filterTours,
  filtersFromQuery,
  filtersToQuery,
  highlightList,
  journeyEnquiryMessage,
  journeyMessage,
  journeysEyebrow,
  relatedTours,
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

describe("filters in the address", () => {
  it("reads known filters and ignores anything else", () => {
    expect(
      filtersFromQuery("?region=North&style=Family&duration=nope&x=1"),
    ).toEqual({ region: "North", style: "Family" });
    expect(filtersFromQuery("?destination=%20Munnar%20")).toEqual({
      destination: "Munnar",
    });
    expect(filtersFromQuery("")).toEqual({});
  });
  it("writes only what differs from the default, keeping other parameters", () => {
    expect(filtersToQuery(defaultFilters, "")).toBe("");
    expect(
      filtersToQuery({ ...defaultFilters, style: "Family" }, "?utm_source=wa"),
    ).toBe("?utm_source=wa&style=Family");
    expect(filtersToQuery(defaultFilters, "?style=Family")).toBe("");
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

describe("journey pages", () => {
  it("lists the highlights one by one", () => {
    expect(highlightList(byId("kerala-waterfalls-hills"))).toEqual([
      "Waterfalls",
      "Tea country",
      "Periyar",
      "Houseboat",
    ]);
  });
  it("suggests other journeys from the same region, never the journey itself", () => {
    const t = byId("kerala-houseboat");
    const related = relatedTours(tours, t);
    expect(related).toHaveLength(3);
    expect(related.map((r) => r.id)).not.toContain(t.id);
    expect(related.every((r) => r.region === "Kerala")).toBe(true);
  });
});

describe("WhatsApp messages", () => {
  const houseboat = byId("kerala-houseboat");
  it("asks about one journey, with its link when there is one", () => {
    expect(
      journeyMessage(
        houseboat,
        "https://example.com/journeys/kerala-houseboat/",
      ),
    ).toBe(
      [
        "Hi Canty Tours! I'm interested in the “An Overnight on Alleppey's Waterways” sample journey (2 days / 1 night).",
        "Route: Kochi → Alappuzha → Kochi",
        "https://example.com/journeys/kerala-houseboat/",
        "",
        "Please share availability, pricing and inclusions.",
      ].join("\n"),
    );
    expect(journeyMessage(houseboat, "")).not.toContain("https://");
  });
  it("builds the enquiry from a journey's page", () => {
    expect(
      journeyEnquiryMessage(
        houseboat,
        {
          name: "Asha",
          date: "2026-12-20",
          occasion: "Honeymoon / couple",
          travellers: "2 travellers",
          budget: "Let’s discuss",
          notes: "",
        },
        "https://example.com/journeys/kerala-houseboat/",
      ),
    ).toBe(
      [
        "Hi Canty Tours! I'd like to plan the “An Overnight on Alleppey's Waterways” sample journey (2 days / 1 night).",
        "Route: Kochi → Alappuzha → Kochi",
        "https://example.com/journeys/kerala-houseboat/",
        "",
        "Name: Asha",
        "Travel date: 2026-12-20",
        "Occasion: Honeymoon / couple",
        "Travellers: 2 travellers",
        "Budget per person: Let’s discuss",
        "",
        "Please share availability, pricing and inclusions.",
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
