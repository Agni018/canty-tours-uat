"use client";

import { useEffect } from "react";

/**
 * Registers public/sw.js, which keeps photos, scripts and fonts on the device between visits.
 * Production builds only: during development files change constantly and must not be kept.
 */
export function ServiceWorker() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      !("serviceWorker" in navigator)
    )
      return;
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    navigator.serviceWorker
      .register(`${base}/sw.js`, { scope: `${base}/` })
      .then(() => navigator.serviceWorker.ready)
      .then((registration) => {
        // Files this page loaded before the worker started; it keeps the hashed ones.
        const loaded = performance
          .getEntriesByType("resource")
          .map((entry) => entry.name);
        registration.active?.postMessage({ cache: loaded });
      })
      .catch(() => {
        // Without it the site still works; files just come from the network.
      });
  }, []);
  return null;
}
