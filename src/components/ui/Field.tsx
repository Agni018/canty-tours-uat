import type { ReactNode } from "react";
import { cx } from "@/lib/utils";
import styles from "./Field.module.css";

type FieldProps = { label: string; full?: boolean; children: ReactNode };

/** Labelled form control (input, Select or textarea) with the boxed form style. */
export function Field({ label, full, children }: FieldProps) {
  return (
    <label className={cx(styles.field, full && styles.full)}>
      {label}
      {children}
    </label>
  );
}
