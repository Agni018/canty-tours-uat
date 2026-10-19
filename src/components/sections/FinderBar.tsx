"use client";

import { useJourneys } from "@/components/JourneyProvider";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import {
  durationOptions,
  regionOptions,
  styleOptions,
  type DurationFilter,
  type RegionFilter,
  type StyleFilter,
} from "@/data/options";
import { cx } from "@/lib/utils";
import styles from "./FinderBar.module.css";

/** "Where to / kind of escape / time" bar under the hero. Changes apply on submit. */
export function FinderBar() {
  const { fields, setField, findJourneys } = useJourneys();

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
      <label>
        <span>WHERE TO?</span>
        <Select
          name="region"
          options={regionOptions}
          value={fields.region}
          onChange={(e) => setField("region", e.target.value as RegionFilter)}
        />
      </label>
      <label>
        <span>YOUR KIND OF ESCAPE</span>
        <Select
          name="style"
          options={styleOptions}
          value={fields.style}
          onChange={(e) => setField("style", e.target.value as StyleFilter)}
        />
      </label>
      <label>
        <span>TIME TO GET AWAY</span>
        <Select
          name="duration"
          options={durationOptions}
          value={fields.duration}
          onChange={(e) =>
            setField("duration", e.target.value as DurationFilter)
          }
        />
      </label>
      <Button type="submit" arrow className={styles.submit}>
        Find my journey
      </Button>
    </form>
  );
}
