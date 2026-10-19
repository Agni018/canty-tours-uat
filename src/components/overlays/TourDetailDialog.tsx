"use client";

import { useJourneys } from "@/components/JourneyProvider";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { asset } from "@/lib/utils";
import styles from "./TourDetailDialog.module.css";

const DISCLAIMER =
  "This is a suggested route. Stays, activities, permits, transport, operating days and current availability must be confirmed in your quote. Price on request.";

/** Day-by-day sample itinerary for one journey. */
export function TourDetailDialog() {
  const { detailTour: t, showDetails, planTour } = useJourneys();

  return (
    <Modal
      id="detail-dialog"
      open={t !== null}
      onClose={() => showDetails(null)}
      labelledBy="detail-title"
      closeLabel="Close journey details"
    >
      <div id="detail-content" className={styles.content}>
        {t && (
          <>
            <img
              className={styles.image}
              src={asset(`${t.image}.jpg`)}
              alt={t.alt}
            />
            <p className="eyebrow">
              {`SAMPLE JOURNEY · ${t.nights} NIGHTS / ${t.days} DAYS`}
            </p>
            <h2 id="detail-title">{t.name}</h2>
            <p className={styles.route}>{t.route}</p>
            <p>{t.description}</p>
            <h3>A possible itinerary</h3>
            <ol className={styles.days}>
              {t.itinerary.map((day, i) => (
                <li key={i}>
                  <strong>{`DAY ${i + 1}`}</strong>
                  <span>{day}</span>
                </li>
              ))}
            </ol>
            <div className={styles.footer}>
              <h3>Make this route your own</h3>
              <p>{`${t.pace}. ${t.planningNote ? `${t.planningNote} ` : ""}${DISCLAIMER}`}</p>
            </div>
            <Button arrow onClick={() => planTour(t.id)}>
              Personalise this journey
            </Button>
          </>
        )}
      </div>
    </Modal>
  );
}
