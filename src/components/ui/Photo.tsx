import type { ImgHTMLAttributes } from "react";
import photos from "@/generated/photos.json";
import { asset, cx } from "@/lib/utils";
import styles from "./Photo.module.css";

type PhotoEntry = {
  width: number;
  height: number;
  variants: { file: string; w: number }[];
  placeholder: string;
};
const manifest: Record<string, PhotoEntry> = photos;

type PhotoProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "sizes" | "alt"
> & {
  /** The original in public/assets, e.g. "destinations/kollam.jpg". */
  src: string;
  alt: string;
  /** How wide the photo shows, e.g. "(max-width: 540px) 100vw, 400px"; the browser picks a copy. */
  sizes: string;
  /** For the largest photo on the first screen: loads first instead of lazily. */
  priority?: boolean;
};

/**
 * A photo from public/assets, served as the smallest WebP copy that fills its space (made by
 * `npm run images`). A blurred preview shows behind it until it arrives, so no box is ever empty.
 */
export function Photo({
  src,
  alt,
  sizes,
  priority,
  className,
  style,
  ...rest
}: PhotoProps) {
  const photo = manifest[src];
  if (!photo)
    throw new Error(`No WebP copies of "${src}": run \`npm run images\``);
  const largest = photo.variants.at(-1)!;
  return (
    <img
      src={asset(largest.file)}
      srcSet={photo.variants.map((v) => `${asset(v.file)} ${v.w}w`).join(", ")}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={alt}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? undefined : "async"}
      className={cx(styles.photo, className)}
      style={{ backgroundImage: `url("${photo.placeholder}")`, ...style }}
      {...rest}
    />
  );
}
