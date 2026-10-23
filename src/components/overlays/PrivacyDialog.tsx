"use client";

import { useJourneys } from "@/components/JourneyProvider";
import { Modal } from "@/components/ui/Modal";
import { places } from "@/data/places";
import { tours } from "@/data/tours";
import styles from "./PrivacyDialog.module.css";

const sourced = tours.filter((t) => t.source);

/** Privacy notes plus the photo credits and itinerary sources the licences and owner require. */
export function PrivacyDialog() {
  const { privacyOpen, setPrivacyOpen } = useJourneys();

  return (
    <Modal
      id="privacy-dialog"
      className={styles.privacy}
      open={privacyOpen}
      onClose={() => setPrivacyOpen(false)}
      labelledBy="privacy-title"
      closeLabel="Close privacy and credits"
    >
      <h2 id="privacy-title">Privacy &amp; credits</h2>
      <h3>Your trip details</h3>
      <p>
        This website does not save your enquiry to a database. Selecting “Send
        on WhatsApp” passes the details you entered to WhatsApp in a prepared
        message. You choose whether to send it. WhatsApp’s own privacy terms
        apply.
      </p>
      <p>
        Journey comparisons stay in this tab and reset when you reload. Hosting
        services may process routine technical request logs.
      </p>
      <h3>Photography</h3>
      <p>
        Destination photographs via{" "}
        <a href="https://unsplash.com" target="_blank" rel="noopener">
          Unsplash
        </a>
        . Kerala: photo-1602216056096-3b40cc0c9944; Rajasthan:
        photo-1578999935853-4ec5fa6c1f60; Ladakh: Vivek; Taj Mahal:
        photo-1576487248805-cf45f6bcc67f; Goa: Arun Prakash; Sikkim: North
        Bengal Tourism.
      </p>
      <details className={styles.credits}>
        <summary>“Where to?” photo credits</summary>
        <p>
          Photos are resized or cropped for display. Each image retains its
          linked license.
        </p>
        <ul>
          {places.map((p) => (
            <li key={p.name}>
              <a href={p.credit.sourcePage} target="_blank" rel="noopener">
                {p.name}
              </a>
              {` — ${p.credit.creator}. `}
              <a href={p.credit.licenseUrl} target="_blank" rel="noopener">
                {p.credit.license}
              </a>
              .
            </li>
          ))}
        </ul>
      </details>
      <h3>Journey ideas</h3>
      <p>
        Kerala and Tamil Nadu itineraries are concise, independently worded
        summaries of published Paradise Holidays routes, reviewed on 19 October
        2026.
      </p>
      <details className={styles.credits}>
        <summary>Itinerary sources</summary>
        <ul>
          {sourced.map((t) => (
            <li key={t.id}>
              {`${t.name}: `}
              <a href={t.source!.url} target="_blank" rel="noopener">
                {t.source!.title}
              </a>
            </li>
          ))}
        </ul>
      </details>
      <p>
        These are sample routes, not confirmed packages. Optional activities and
        resort-specific experiences must be agreed with Canty Tours, along with
        current availability, prices and booking terms.
      </p>
    </Modal>
  );
}
