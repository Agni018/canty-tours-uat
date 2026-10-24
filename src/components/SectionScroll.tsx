"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToSection, takePendingSection } from "@/lib/utils";

/**
 * After a SectionLink opens another page, shows the section it pointed to. That navigation skips
 * the usual jump to the top, so a missing section falls back to the top of the page.
 */
export function SectionScroll() {
  const pathname = usePathname();
  useEffect(() => {
    const section = takePendingSection();
    if (!section) return;
    if (!scrollToSection(section, { focus: true, instant: true }))
      window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
