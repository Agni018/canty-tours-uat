import type { Tour } from "@/data/tours";
import { regionLabel } from "@/lib/journeys";
import { asset } from "@/lib/utils";
import styles from "./TourCard.module.css";

type TourCardProps = {
  tour: Tour;
  compared: boolean;
  onCompareChange: (on: boolean) => void;
  onDetails: () => void;
};

/** Journey card in the grid: photo, summary, "View journey" and a compare checkbox. */
export function TourCard({
  tour: t,
  compared,
  onCompareChange,
  onDetails,
}: TourCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        <img src={asset(`${t.image}.jpg`)} alt={t.alt} loading="lazy" />
        <span className={styles.tag}>{t.style}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          {`${t.nights} NIGHTS / ${t.days} DAYS \u00a0 · \u00a0 ${regionLabel(t)}`}
        </p>
        <h3>{t.name}</h3>
        <p className={styles.route}>{t.route}</p>
        <p className={styles.desc}>{t.description}</p>
        <div className={styles.bottom}>
          <span className={styles.quote}>
            Made for you<small>Price on request</small>
          </span>
          <button type="button" className={styles.details} onClick={onDetails}>
            View journey ↗
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
