import { cx } from "@/lib/utils";
import styles from "./IntroStrip.module.css";

export function IntroStrip() {
  return (
    <div className={cx(styles.strip, "wrap")}>
      <span>Hills, backwaters &amp; beaches</span>
      <span className={styles.spark}>✳</span>
      <span>Room for your own rhythm</span>
      <span className={styles.spark}>✳</span>
      <span>A Kerala holiday shaped around you</span>
    </div>
  );
}
