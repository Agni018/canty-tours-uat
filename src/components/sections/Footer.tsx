"use client";

import { useEffect, useState } from "react";
import { useJourneys } from "@/components/JourneyProvider";
import { Brand } from "@/components/ui/Brand";
import { SectionLink } from "@/components/ui/SectionLink";
import { TextButton } from "@/components/ui/TextButton";
import { phone, whatsappLink } from "@/data/site";
import { cx } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import styles from "./Footer.module.css";

export function Footer() {
  const { showRegion, setPrivacyOpen } = useJourneys();
  const [year, setYear] = useState<number>();
  // Set on the client so a build-time year never goes stale.
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className={styles.footer}>
      <div className={cx("wrap", styles.main)}>
        <Brand href="/" className={styles.brand} />
        <p>
          Kerala at heart.
          <br />
          Journeys across India.
        </p>
        <div>
          <span className={cx("eyebrow", styles.eyebrow)}>
            LET’S GO SOMEWHERE
          </span>
          <a href={`tel:${phone.tel}`}>
            {`${phone.display} `}
            <Icon name="arrow" />
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener">
            Chat on WhatsApp <Icon name="arrow" />
          </a>
        </div>
        <div className={styles.nav}>
          <SectionLink page="/" section="destinations">
            Discover Kerala
          </SectionLink>
          <SectionLink
            page="/"
            section="journeys"
            onClick={() => showRegion("Kerala")}
          >
            Kerala journey ideas
          </SectionLink>
          <SectionLink page="/" section="beyond-kerala">
            Beyond Kerala
          </SectionLink>
          <SectionLink page="/" section="faq">
            Good to know
          </SectionLink>
          <SectionLink page="/" section="plan">
            Plan your trip
          </SectionLink>
        </div>
      </div>
      <div className={cx("wrap", styles.bottom)}>
        <span>
          © <span id="year">{year}</span> Canty Tours. Kerala, at your pace.
        </span>
        <TextButton id="privacy-button" onClick={() => setPrivacyOpen(true)}>
          Privacy &amp; photo credits
        </TextButton>
        <SectionLink section="main">Back to top ↑</SectionLink>
      </div>
    </footer>
  );
}
