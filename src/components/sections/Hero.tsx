import { Photo } from "@/components/ui/Photo";
import { cx } from "@/lib/utils";
import { FinderBar } from "./FinderBar";
import styles from "./Hero.module.css";

/**
 * First screen: a full-bleed photo with the headline and the journey finder laid over it.
 * The header (see Header) is positioned over the top of this section.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.backdrop}>
        <Photo
          src="kerala.jpg"
          sizes="100vw"
          alt="A traditional boat on Kerala’s palm-lined backwaters"
          priority
          className="parallax"
        />
      </div>
      <div className={cx("wrap", styles.content)}>
        <p className={cx("eyebrow light", styles.eyebrow)}>
          <span /> A LITTLE CLOSER TO GOD’S OWN COUNTRY
        </p>
        <h1 id="hero-heading">
          Kerala, at
          <br />
          <span className={styles.accent}>your pace.</span>
        </h1>
        <p>
          Tea hills in the morning. Backwaters by sundown.
          <br className={styles.desktop} /> Come find your kind of Kerala with
          Canty Tours.
        </p>
      </div>
      <FinderBar />
    </section>
  );
}
