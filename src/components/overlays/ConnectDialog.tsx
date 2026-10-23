"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useJourneys } from "@/components/JourneyProvider";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { Modal } from "@/components/ui/Modal";
import { countryCodes, popularCountries } from "@/data/countryCodes";
import { phone as business, whatsappLink } from "@/data/site";
import {
  contactMessage,
  durationText,
  formatPhone,
  phoneError,
} from "@/lib/journeys";
import { journeyLinkForMessage } from "@/lib/utils";
import styles from "./ConnectDialog.module.css";

const popular = popularCountries.map((name) =>
  countryCodes.find((c) => c.name === name)!,
);

/**
 * "Personalise this journey": asks for a phone number (name and email optional) and opens
 * WhatsApp with them in a message to Canty Tours. Opens on top of the journey or compare dialog.
 */
export function ConnectDialog() {
  const { connectTour: t, openConnect } = useJourneys();
  const [code, setCode] = useState("+91");
  const [messageUrl, setMessageUrl] = useState<string>();
  const nameInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);

  // Each time it opens: clear the old status, and focus the first field on mouse/trackpad
  // devices (on phones that would pop the keyboard over the journey summary).
  useEffect(() => {
    if (!t) return;
    setMessageUrl(undefined);
    if (matchMedia("(pointer: fine)").matches) nameInput.current?.focus();
  }, [t]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!t || !phoneInput.current) return;
    const data = new FormData(e.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    phoneInput.current.setCustomValidity(
      phoneError(code, phoneInput.current.value),
    );
    if (!e.currentTarget.reportValidity()) return;
    const url = whatsappLink(
      contactMessage(
        t,
        {
          name: value("name"),
          email: value("email"),
          phone: formatPhone(code, phoneInput.current.value),
        },
        journeyLinkForMessage(t.id),
      ),
    );
    window.open(url, "_blank", "noopener,noreferrer");
    setMessageUrl(url);
  }

  return (
    <Modal
      id="connect-dialog"
      size="narrow"
      open={t !== null}
      onClose={() => openConnect(null)}
      labelledBy="connect-title"
      closeLabel="Close contact details"
    >
      <p className="eyebrow">PERSONALISE THIS JOURNEY</p>
      <h2 id="connect-title">Let’s make it yours.</h2>
      <p className={styles.journey}>
        {t ? `${t.name} · ${durationText(t)}` : ""}
      </p>
      <p>
        Share your details and we’ll help you shape this journey on WhatsApp.
      </p>
      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <Field
            label={
              <>
                Your name <span className={styles.optional}>(optional)</span>
              </>
            }
          >
            <input
              ref={nameInput}
              name="name"
              autoComplete="name"
              maxLength={80}
              placeholder="What should we call you?"
            />
          </Field>
          <Field
            label={
              <>
                Email <span className={styles.optional}>(optional)</span>
              </>
            }
          >
            <input
              name="email"
              type="email"
              autoComplete="email"
              maxLength={120}
              placeholder="you@example.com"
            />
          </Field>
          <Field
            full
            htmlFor="connect-phone"
            label={
              <>
                Phone number{" "}
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              </>
            }
          >
            <div className={styles.phoneRow}>
              {/* The native select sits invisibly over the code so it keeps the platform picker. */}
              <span className={styles.code}>
                <span aria-hidden="true">{code}</span>
                <Icon name="chevronDown" />
                <select
                  name="code"
                  aria-label="Country code"
                  autoComplete="tel-country-code"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    phoneInput.current?.setCustomValidity("");
                  }}
                >
                  <optgroup label="Popular">
                    {popular.map((c) => (
                      <option key={c.name} value={c.code}>
                        {`${c.name} (${c.code})`}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="All countries">
                    {countryCodes.map((c) => (
                      <option key={c.name} value={c.code}>
                        {`${c.name} (${c.code})`}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </span>
              <input
                ref={phoneInput}
                id="connect-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                maxLength={20}
                placeholder={code === "+91" ? "98765 43210" : "Phone number"}
                required
                onInput={(e) => e.currentTarget.setCustomValidity("")}
              />
            </div>
          </Field>
        </div>
        <Button type="submit" variant="orange" arrow className={styles.submit}>
          Connect on WhatsApp
        </Button>
        <p className={styles.privacy}>
          {`Opens WhatsApp with these details in a message to Canty Tours (${business.display}). Review it, then press send. This site does not store your details.`}
        </p>
        <p className={styles.status} role="status">
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
    </Modal>
  );
}
