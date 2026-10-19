"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cx } from "@/lib/utils";
import styles from "./Modal.module.css";

type ModalProps = {
  open: boolean;
  /** Called after the dialog closes (close button, Escape, backdrop click or code). */
  onClose: () => void;
  /** Id of the heading that names the dialog. */
  labelledBy: string;
  closeLabel: string;
  wide?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Native <dialog> shown as a modal, closed by its × button, Escape or a click on the backdrop. */
export function Modal({
  open,
  onClose,
  labelledBy,
  closeLabel,
  wide,
  id,
  className,
  children,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      id={id}
      className={cx(styles.modal, wide && styles.wide, className)}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(e) => {
        // A click on the dialog element itself outside its box is a click on the backdrop.
        const dialog = e.currentTarget;
        if (e.target !== dialog) return;
        const r = dialog.getBoundingClientRect();
        const outside =
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom;
        if (outside) dialog.close();
      }}
    >
      <button
        type="button"
        className={styles.close}
        aria-label={closeLabel}
        onClick={() => ref.current?.close()}
      >
        ×
      </button>
      {children}
    </dialog>
  );
}
