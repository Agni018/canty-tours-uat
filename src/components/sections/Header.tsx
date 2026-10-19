"use client";

import { useState } from "react";
import { useJourneys } from "@/components/JourneyProvider";
import { Brand } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import { phone } from "@/data/site";
import styles from "./Header.module.css";

/** Contact strip and main header with navigation; the menu collapses below 800px. */
export function Header() {
  const { showRegion } = useJourneys();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.topline}>
        <span>Kerala at heart. The rest of India within reach.</span>
        <a
          href={`tel:${phone.tel}`}
        >{`Let’s talk travel \u00a0 ${phone.display} ↗`}</a>
      </div>
      <header className={styles.header}>
        <Brand logo href="#" aria-label="Canty Tours home" />
        <button
          type="button"
          id="menu-toggle"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu ☰
        </button>
        <nav
          id="navigation"
          aria-label="Main navigation"
          className={menuOpen ? styles.open : undefined}
          onClick={(e) => {
            if ((e.target as Element).closest("a")) setMenuOpen(false);
          }}
        >
          <a href="#destinations">Discover Kerala</a>
          <a href="#journeys" onClick={() => showRegion("Kerala")}>
            Kerala journeys
          </a>
          <a href="#beyond-kerala">Beyond Kerala</a>
          <a href="#faq">Good to know</a>
        </nav>
        <Button href="#plan" small arrow className={styles.navCta}>
          Plan my trip
        </Button>
      </header>
    </>
  );
}
