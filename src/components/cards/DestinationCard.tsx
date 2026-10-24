import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import styles from "./DestinationCard.module.css";

type DestinationCardProps = {
  name: string;
  tagline: string;
  details: string;
  image: string;
  alt: string;
  onClick: () => void;
};

/** Large photo card for a Kerala destination. The first card in a grid spans wider on mobile. */
export function DestinationCard({
  name,
  tagline,
  details,
  image,
  alt,
  onClick,
}: DestinationCardProps) {
  return (
    <button type="button" className={styles.card} onClick={onClick}>
      <span className={styles.media}>
        <Photo
          src={image}
          alt={alt}
          sizes="(max-width: 540px) 82vw, (max-width: 800px) 40vw, 470px"
        />
      </span>
      <span className={styles.top}>{tagline}</span>
      <span className={styles.bottom}>
        <span>
          {name}
          <small>{details}</small>
        </span>
        <span className={styles.arrow}>
          <Icon name="arrow" />
        </span>
      </span>
    </button>
  );
}
