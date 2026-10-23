"use client";

import { useJourneys } from "@/components/JourneyProvider";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import {
  durationOptions,
  styleOptions,
  type DurationFilter,
  type StyleFilter,
} from "@/data/options";
import { cx } from "@/lib/utils";
import { DestinationPicker } from "./DestinationPicker";
import styles from "./FinderBar.module.css";

/** "Where to / kind of escape / time" bar under the hero. Changes apply on submit. */
export function FinderBar() {
  const { fields, setFields, findJourneys } = useJourneys();

  return (
    <form
      id="finder"
      className={cx(styles.finder, "wrap")}
      aria-label="Find a journey"
      onSubmit={(e) => {
        e.preventDefault();
        findJourneys();
      }}
    >
      <DestinationPicker
        className={styles.field}
        labelClassName={styles.label}
      />
      <label className={styles.field}>
        <span className={styles.label}>YOUR KIND OF ESCAPE</span>
        <Select
          name="style"
          options={styleOptions}
          value={fields.style}
          onChange={(e) => setFields({ style: e.target.value as StyleFilter })}
        />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>TIME TO GET AWAY</span>
        <Select
          name="duration"
          options={durationOptions}
          value={fields.duration}
          onChange={(e) =>
            setFields({ duration: e.target.value as DurationFilter })
          }
        />
      </label>
      <Button type="submit" arrow className={styles.submit}>
        Find my journey
      </Button>
    </form>
  );
}
