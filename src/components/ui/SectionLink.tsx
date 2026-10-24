"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { scrollToSection, setPendingSection } from "@/lib/utils";

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  /** Id of the section to show, e.g. "faq". */
  section: string;
  /** Page the section is on, e.g. "/"; the current page when left out. */
  page?: string;
};

const samePath = (a: string, b: string) =>
  a.replace(/\/$/, "") === b.replace(/\/$/, "");

/**
 * Link to a section of a page that keeps the address clean (no #section). On the same page it
 * glides there; from another page it opens the page and shows the section once loaded (see
 * SectionScroll). Either way keyboard focus moves to the section. Without JavaScript it opens
 * the page at its top; a click with a modifier key (new tab) does the same.
 */
export function SectionLink({
  section,
  page,
  onClick,
  ...rest
}: SectionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const target = page ?? pathname;

  return (
    <Link
      href={target}
      onClick={(e) => {
        onClick?.(e);
        const newTab =
          e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
        if (e.defaultPrevented || newTab) return;
        e.preventDefault();
        if (samePath(target, pathname)) {
          scrollToSection(section, { focus: true });
          return;
        }
        setPendingSection(section);
        router.push(target, { scroll: false });
      }}
      {...rest}
    />
  );
}
