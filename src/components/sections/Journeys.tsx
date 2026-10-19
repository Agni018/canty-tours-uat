"use client";

import { TourCard } from "@/components/cards/TourCard";
import { useJourneys } from "@/components/JourneyProvider";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextButton } from "@/components/ui/TextButton";
import { travelStyles } from "@/data/options";
import { whatsappLink } from "@/data/site";
import { tours } from "@/data/tours";
import { filterTours, isKeralaView, resultsSummary } from "@/lib/journeys";
import { cx } from "@/lib/utils";
import styles from "./Journeys.module.css";

/** Filterable journey grid with collection tabs, style chips and the compare checkboxes. */
export function Journeys() {
  const {
    filters,
    applyFilters,
    showRegion,
    resetFilters,
    compared,
    toggleCompare,
    showDetails,
  } = useJourneys();
  const matches = filterTours(tours, filters);
  const keralaView = isKeralaView(filters.region);

  return (
    <section id="journeys" className={cx(styles.section, "section")}>
      <div className="wrap">
        <SectionHeading
          eyebrow={
            keralaView
              ? "YOUR KERALA STORY STARTS HERE"
              : "YOUR NEXT INDIA STORY STARTS HERE"
          }
          eyebrowId="journey-eyebrow"
          title="A few days. A different rhythm."
          intro={
            <>
              Short escapes, family time and a little romance.
              <br />
              Compare sample routes, then make one your own.
            </>
          }
        />
        <div
          className={styles.scope}
          role="group"
          aria-label="Choose journey collection"
        >
          <button
            type="button"
            className={cx(styles.scopeButton, keralaView && styles.active)}
            aria-pressed={keralaView}
            onClick={() => showRegion("Kerala")}
          >
            Kerala journeys
          </button>
          <button
            type="button"
            className={cx(styles.scopeButton, !keralaView && styles.active)}
            aria-pressed={!keralaView}
            onClick={() => showRegion("all")}
          >
            All India journeys <span>↗</span>
          </button>
        </div>
        <div className={styles.filterRow}>
          <div
            className={styles.chips}
            role="group"
            aria-label="Filter journeys by style"
          >
            <Chip
              active={filters.style === "all"}
              onClick={() => applyFilters({ style: "all" })}
            >
              All styles
            </Chip>
            {travelStyles.map((s) => (
              <Chip
                key={s}
                active={filters.style === s}
                onClick={() => applyFilters({ style: s })}
              >
                {s}
              </Chip>
            ))}
          </div>
          <TextButton
            id="reset-filters"
            className={styles.reset}
            onClick={resetFilters}
          >
            Reset filters ↺
          </TextButton>
        </div>
        <p id="results-count" className={styles.resultsCount} role="status">
          {resultsSummary(matches.length, filters)}
        </p>
        <div className={styles.grid} id="tour-grid">
          {matches.map((t) => (
            <TourCard
              key={t.id}
              tour={t}
              compared={compared.includes(t.id)}
              onCompareChange={(on) => toggleCompare(t.id, on)}
              onDetails={() => showDetails(t.id)}
            />
          ))}
        </div>
        <div
          id="no-results"
          className={styles.empty}
          hidden={matches.length > 0}
        >
          <h3>Your next trip is still out there.</h3>
          <p>
            Try a wider search, or ask us to create a route around your plans.
          </p>
          <Button id="clear-empty" onClick={resetFilters}>
            Show Kerala journeys
          </Button>
        </div>
        <noscript>
          <p>
            To filter and compare journeys, please enable JavaScript. You can
            also{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener">
              ask Canty Tours for a Kerala itinerary on WhatsApp
            </a>
            .
          </p>
        </noscript>
        <p className="fineprint">
          Sample itineraries, made to be personalised. Prices, hotels,
          activities and availability are confirmed in your personalised
          quotation. Flights are not assumed to be included.
        </p>
      </div>
    </section>
  );
}
