"use client";

import { useJourneys } from "@/components/JourneyProvider";
import { Modal } from "@/components/ui/Modal";
import styles from "./PrivacyDialog.module.css";

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
        This website does not save your trip form to a database. Selecting
        “Continue on WhatsApp” passes the details you entered to WhatsApp in a
        prepared message. You choose whether to send it. WhatsApp’s own privacy
        terms apply.
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
        Bengal Tourism; Munnar: Vivek Kumar; Varkala: Nandu Vasudevan; Wayanad:
        Niranjan V S.
      </p>
      <h3>Journey ideas</h3>
      <p>
        Routes and durations are illustrative suggestions, not confirmed
        packages. Canty Tours must confirm operational availability, current
        prices and booking terms directly.
      </p>
    </Modal>
  );
}
