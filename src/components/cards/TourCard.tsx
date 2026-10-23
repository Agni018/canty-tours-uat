import { useRef, type CSSProperties } from "react";
import { Icon } from "@/components/ui/Icon";
import type { Tour } from "@/data/tours";
import { regionLabel } from "@/lib/journeys";
import { asset, cx } from "@/lib/utils";
import styles from "./TourCard.module.css";

type TourCardProps = {
  tour: Tour;
  /** Position in the grid; staggers the entrance animation. */
  index: number;
  /** Briefly highlights the card after a destination search. */
  found: boolean;
  compared: boolean;
  onCompareChange: (on: boolean) => void;
  onDetails: () => void;
};

/**
 * Journey card in the grid. The whole card opens the itinerary, except the compare checkbox
 * and except when the visitor has just selected text on it.
 */
export function TourCard({
  tour: t,
  index,
  found,
  compared,
  onCompareChange,
  onDetails,
}: TourCardProps) {
  const selectionAtPress = useRef("");

  return (
    <article
      id={`journey-${t.id}`}
      className={cx(styles.card, found && styles.found)}
      style={{ "--i": index } as CSSProperties}
      tabIndex={-1}
      aria-labelledby={`journey-title-${t.id}`}
      onPointerDown={() => {
        selectionAtPress.current = String(window.getSelection());
      }}
      onClick={(e) => {
        const target = e.target as Element;
        if (target.closest("label")) return;
        const selection = String(window.getSelection());
        const selecting =
          selection.trim() && selection !== selectionAtPress.current;
        if (!target.closest("button") && selecting) return;
        onDetails();
      }}
    >
      <div className={styles.photo}>
        <img
          src={asset(t.image)}
          alt={t.alt}
          loading="lazy"
          draggable={false}
        />
        <span className={styles.tag}>{t.style}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          {`${t.nights} ${t.nights === 1 ? "NIGHT" : "NIGHTS"} / ${t.days} DAYS   ·   ${regionLabel(t)}`}
        </p>
        <h3 id={`journey-title-${t.id}`}>{t.name}</h3>
        <p className={styles.route}>{t.route}</p>
        <p className={styles.desc}>{t.description}</p>
        <div className={styles.bottom}>
          <span className={styles.quote}>
            Made for you<small>Price on request</small>
          </span>
          <button type="button" className={styles.details}>
            View journey <Icon name="arrow" />
          </button>
        </div>
        <label className={styles.compare}>
          <input
            type="checkbox"
            checked={compared}
            onChange={(e) => onCompareChange(e.target.checked)}
          />{" "}
          Compare this journey
        </label>
      </div>
    </article>
  );
}
