"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useJourneys } from "@/components/JourneyProvider";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Select } from "@/components/ui/Select";
import {
  budgets,
  occasions,
  paces,
  travellerCounts,
  tripLengths,
} from "@/data/options";
import { whatsappLink } from "@/data/site";
import { enquiryMessage, type Enquiry } from "@/lib/journeys";
import { cx, scrollToSection } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import styles from "./TripForm.module.css";

/** Today as YYYY-MM-DD in the visitor's time zone, for the date input's min. */
function today(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

/** Trip planner. Builds a WhatsApp message for the visitor to send; nothing is stored. */
export function TripForm() {
  const { tripRequest, notify } = useJourneys();
  const destinationInput = useRef<HTMLInputElement>(null);
  const [destination, setDestination] = useState("Kerala");
  const [minDate, setMinDate] = useState<string>();
  const [messageUrl, setMessageUrl] = useState<string>();

  // Set on the client so a build-time date never goes stale.
  useEffect(() => setMinDate(today()), []);

  // "Plan a custom trip" (empty journey results) fills in the destination and brings the form up.
  useEffect(() => {
    if (!tripRequest) return;
    setDestination(tripRequest.destination);
    scrollToSection("plan");
    destinationInput.current?.focus({ preventScroll: true });
  }, [tripRequest]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (name: keyof Enquiry) => String(data.get(name) ?? "");
    const enquiry: Enquiry = {
      name: value("name").trim(),
      destination: value("destination").trim(),
      date: value("date"),
      tripLength: value("tripLength"),
      occasion: value("occasion"),
      travellers: value("travellers"),
      budget: value("budget"),
      pace: value("pace"),
      notes: value("notes").trim(),
    };
    if (!enquiry.name || !enquiry.destination) {
      notify("Please add your name and a destination idea.");
      return;
    }
    const url = whatsappLink(enquiryMessage(enquiry));
    window.open(url, "_blank", "noopener,noreferrer");
    setMessageUrl(url);
  }

  return (
    <form
      id="trip-form"
      className={cx(styles.form, "reveal")}
      onSubmit={handleSubmit}
    >
      <h3>Let’s make it yours.</h3>
      <p>Share a few details to start the conversation.</p>
      <div className={styles.grid}>
        <Field label="Your name">
          <input
            name="name"
            autoComplete="given-name"
            placeholder="What should we call you?"
            maxLength={80}
            required
          />
        </Field>
        <Field label="Where would you like to go?">
          <input
            ref={destinationInput}
            name="destination"
            id="plan-destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Kerala, or anywhere in India"
            maxLength={160}
            required
          />
        </Field>
        <Field label="When are you thinking?">
          <input name="date" type="date" id="travel-date" min={minDate} />
        </Field>
        <Field label="How long can you stay?">
          <Select name="tripLength" options={tripLengths} />
        </Field>
        <Field label="Who’s coming?">
          <Select name="travellers" options={travellerCounts} />
        </Field>
        <Field label="What’s the occasion?">
          <Select name="occasion" options={occasions} />
        </Field>
        <Field label="Budget per person">
          <Select name="budget" options={budgets} />
        </Field>
        <Field label="Your travel style">
          <Select name="pace" options={paces} />
        </Field>
        <Field label="Anything else?" full>
          <textarea
            name="notes"
            rows={2}
            maxLength={1000}
            placeholder="Departure city, houseboat or resort, must-see places, preferred stays…"
          />
        </Field>
      </div>
      <Button type="submit" variant="orange" arrow className={styles.submit}>
        Continue on WhatsApp
      </Button>
      <p className={styles.privacy}>
        Opens a prepared message for you to review and send. This site does not
        store your form details or make a booking.
      </p>
      <p id="form-status" role="status" className={styles.status}>
        {messageUrl && (
          <>
            Your message is ready. If WhatsApp did not open,{" "}
            <a
              href={messageUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              open your prepared message here <Icon name="arrow" />
            </a>
          </>
        )}
      </p>
    </form>
  );
}
