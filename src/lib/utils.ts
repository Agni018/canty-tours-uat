/** Joins class names, skipping falsy ones: cx("a", isOn && "b") */
export function cx(...names: (string | false | null | undefined)[]): string {
  return names.filter(Boolean).join(" ");
}

/** URL of a file in public/assets, including the GitHub Pages base path. */
export function asset(file: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/${file}`;
}

/**
 * Scrolls a page section (by id) into view, gliding unless the visitor prefers reduced motion.
 * With `focus`, keyboard focus moves there too, as following a link should. Returns false when
 * the section isn't on this page.
 */
export function scrollToSection(
  id: string,
  { focus = false, instant = false } = {},
): boolean {
  const target = document.getElementById(id);
  if (!target) return false;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: instant || reduced ? "instant" : "smooth",
  });
  if (focus) {
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }
  return true;
}

// Section to show once the next page has loaded (see SectionLink and SectionScroll). Kept in
// memory, not in the address: links between pages navigate within the app, so it survives.
let pendingSection: string | null = null;

/** Remembers a section for SectionScroll to show after a navigation. */
export function setPendingSection(id: string): void {
  pendingSection = id;
}

/** The remembered section, cleared so it is used once. */
export function takePendingSection(): string | null {
  const id = pendingSection;
  pendingSection = null;
  return id;
}

/** Path of a journey's page, for next/link (which adds the base path itself). */
export function journeyPath(id: string): string {
  return `/journeys/${id}/`;
}

/**
 * Full address of a journey's page, for WhatsApp messages and sharing, or "" when the page isn't
 * served over http(s): a file:// link would expose the visitor's local folder.
 */
export function journeyUrl(id: string): string {
  if (!/^https?:$/.test(location.protocol)) return "";
  return `${location.origin}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${journeyPath(id)}`;
}
