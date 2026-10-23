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

/** Shareable link that opens a journey's itinerary (#journey=<id>). */
export function journeyLink(id: string): string {
  return `${location.href.split("#")[0]}#journey=${id}`;
}

/**
 * Journey link for WhatsApp messages, or "" when the page isn't served over http(s):
 * a file:// link would expose the visitor's local folder.
 */
export function journeyLinkForMessage(id: string): string {
  return /^https?:$/.test(location.protocol) ? journeyLink(id) : "";
}
