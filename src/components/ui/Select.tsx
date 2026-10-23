import type { SelectHTMLAttributes } from "react";
import type { SelectOption } from "@/data/options";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: readonly SelectOption[];
};

/** Dropdown built from an options list. Unstyled: the surrounding field decides how it looks. */
export function Select({ options, ...props }: SelectProps) {
  return (
    <select {...props}>
      {options.map((o) =>
        typeof o === "string" ? (
          <option key={o}>{o}</option>
        ) : (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ),
      )}
    </select>
  );
}
