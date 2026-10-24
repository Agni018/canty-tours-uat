import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import styles from "./IndiaCard.module.css";

type IndiaCardProps = {
  name: string;
  tagline: string;
  cta: string;
  image: string;
  alt: string;
  onClick: () => void;
};

/** Compact photo-and-text card for a destination outside Kerala. */
export function IndiaCard({
  name,
  tagline,
  cta,
  image,
  alt,
  onClick,
}: IndiaCardProps) {
  return (
    <button type="button" className={styles.card} onClick={onClick}>
      <span className={styles.media}>
        <Photo
          src={image}
          alt={alt}
          sizes="(max-width: 540px) 38vw, (max-width: 800px) 33vw, 200px"
        />
      </span>
      <span className={styles.text}>
        <small>{tagline}</small>
        <strong>{name}</strong>
        <span className={styles.cta}>
          {/* A no-break space keeps the arrow with the last word when the line wraps. */}
          {cta}&nbsp;
          <Icon name="arrow" />
        </span>
      </span>
    </button>
  );
}
