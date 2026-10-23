"use client";

import { useJourneys } from "@/components/JourneyProvider";
import { Button } from "@/components/ui/Button";
import { asset, cx } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import styles from "./Hero.module.css";

export function Hero() {
  const { showRegion } = useJourneys();

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <img
        src={asset("kerala.jpg")}
        alt="A traditional boat on Kerala’s palm-lined backwaters"
        className={styles.image}
        fetchPriority="high"
      />
      <div className={styles.shade} />
      <div className={styles.content}>
        <p className={cx("eyebrow light", styles.eyebrow)}>
          <span /> A LITTLE CLOSER TO GOD’S OWN COUNTRY
        </p>
        <h1 id="hero-heading">
          Kerala, at
          <br />
          <em>your pace.</em>
        </h1>
        <p>
          Tea hills in the morning. Backwaters by sundown.
          <br className={styles.desktop} /> Come find your kind of Kerala with
          Canty Tours.
        </p>
        <Button
          href="#journeys"
          variant="orange"
          arrow
          className={styles.cta}
          onClick={() => showRegion("Kerala")}
        >
          Explore Kerala journeys
        </Button>
        <a className={styles.secondary} href="#beyond-kerala">
          Looking for somewhere else in India? <Icon name="arrow" />
        </a>
      </div>
      <div className={styles.location}>
        <span className={styles.dot} />
        <div>
          KERALA BACKWATERS<small>Slow days on the water</small>
        </div>
        <span className={styles.number}>01 / GOD’S OWN COUNTRY</span>
      </div>
    </section>
  );
}
