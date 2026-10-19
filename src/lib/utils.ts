/** Joins class names, skipping falsy ones: cx("a", isOn && "b") */
export function cx(...names: (string | false | null | undefined)[]): string {
  return names.filter(Boolean).join(" ");
}

/** URL of a file in public/assets, including the GitHub Pages base path. */
export function asset(file: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/${file}`;
}

/** Scrolls a page section (by id) into view. */
export function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView();
}
