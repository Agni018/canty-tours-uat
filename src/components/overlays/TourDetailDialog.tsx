"use client";

import { useEffect, useState } from "react";
import { useJourneys } from "@/components/JourneyProvider";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Modal } from "@/components/ui/Modal";
import { TextButton } from "@/components/ui/TextButton";
import type { Tour } from "@/data/tours";
import { whatsappLink } from "@/data/site";
import { journeyMessage } from "@/lib/journeys";
import { asset, journeyLink, journeyLinkForMessage } from "@/lib/utils";
import styles from "./TourDetailDialog.module.css";

const DISCLAIMER =
  "This is a suggested route. Stays, activities, permits, transport, operating days and current availability must be confirmed in your quote. Price on request.";

/** Day-by-day itinerary for one journey, with previous/next through the journeys in the grid. */
export function TourDetailDialog() {
  const {
    detailTour: t,
    matches,
    showDetails,
    stepDetails,
    openConnect,
  } = useJourneys();
  const index = t ? matches.indexOf(t) : -1;

  // Start each journey at the top of the dialog.
  useEffect(() => {
    document.getElementById("detail-dialog")?.scrollTo(0, 0);
  }, [t]);

  return (
    <Modal
      id="detail-dialog"
      open={t !== null}
      onClose={() => {
        showDetails(null);
        // Closing a shared journey drops its link from the address bar.
        if (location.hash.startsWith("#journey="))
          history.replaceState(null, "", location.pathname + location.search);
      }}
      onKeyDown={(e) => {
        const plain = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
        if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && plain) {
          e.preventDefault();
          stepDetails(e.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      labelledBy="detail-title"
      closeLabel="Close journey details"
    >
      <div id="detail-content" className={styles.content}>
        {t && (
          <>
            {index > -1 && matches.length > 1 && (
              <div
                className={styles.nav}
                role="group"
                aria-label="Browse journeys"
              >
                <button
                  type="button"
                  aria-label="Previous journey"
                  onClick={() => stepDetails(-1)}
                >
                  <Icon name="chevronLeft" />
                </button>
                <button
                  type="button"
                  aria-label="Next journey"
                  onClick={() => stepDetails(1)}
                >
                  <Icon name="chevronRight" />
                </button>
                <span>{`Journey ${index + 1} of ${matches.length}`}</span>
              </div>
            )}
            <img
              className={styles.image}
              src={asset(t.image)}
              alt={t.alt}
              draggable={false}
            />
            <p className="eyebrow">
              {`SAMPLE JOURNEY · ${t.nights} ${t.nights === 1 ? "NIGHT" : "NIGHTS"} / ${t.days} DAYS`}
            </p>
            <h2 id="detail-title">{t.name}</h2>
            <p className={styles.route}>{t.route}</p>
            <p>{t.description}</p>
            <h3>Day-by-day itinerary</h3>
            <ol className={styles.days}>
              {t.itinerary.map((day, i) => (
                <li key={i}>
                  <strong>{`DAY ${i + 1}`}</strong>
                  <span>{day}</span>
                </li>
              ))}
            </ol>
            {t.notes && <p className={styles.notes}>{t.notes}</p>}
            <div className={styles.footer}>
              <h3>Make this route your own</h3>
              <p>{`${t.pace}. ${t.planningNote ? `${t.planningNote} ` : ""}${DISCLAIMER}`}</p>
            </div>
            <div className={styles.actions}>
              <Button arrow onClick={() => openConnect(t.id)}>
                Personalise this journey
              </Button>
              <Button
                variant="outline"
                arrow
                href={whatsappLink(
                  journeyMessage(t, journeyLinkForMessage(t.id)),
                )}
                target="_blank"
                rel="noopener"
              >
                Ask on WhatsApp
              </Button>
              <ShareButton tour={t} />
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

/** Shares the journey link: the share sheet on touch devices, otherwise copies it. */
function ShareButton({ tour }: { tour: Tour }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = journeyLink(tour.id);
    try {
      if (navigator.share && matchMedia("(pointer: coarse)").matches) {
        await navigator.share({ title: `${tour.name} · Canty Tours`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      // Cancelling the share sheet is not an error; anything else falls back to manual copy.
      if ((error as Error).name !== "AbortError")
        window.prompt("Copy this link to share the journey:", url);
    }
  }

  return (
    <TextButton className={styles.share} onClick={share}>
      {copied ? (
        <>
          Link copied <Icon name="check" />
        </>
      ) : (
        "Share this journey"
      )}
    </TextButton>
  );
}
