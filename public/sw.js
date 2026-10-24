// Keeps the site's photos, scripts, styles and fonts on the device after the first visit.
// GitHub Pages only lets browsers cache files for 10 minutes and can't be configured. These
// files never change once published (their names carry a hash of their content), so they are
// safe to serve from here for good. Pages and anything else go to the network as usual.
// Registered by components/ServiceWorker.tsx, in production builds only.

const CACHE = "canty-static-v1";
/** Old copies beyond this are dropped, oldest first, so the cache can't grow forever. */
const LIMIT = 250;

function isHashedFile(url) {
  return (
    url.origin === self.location.origin &&
    (url.pathname.includes("/assets/generated/") ||
      url.pathname.includes("/_next/static/"))
  );
}

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names.filter((n) => n !== CACHE).map((n) => caches.delete(n)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// The first page loads its files before this worker starts; it sends their addresses here so
// they are kept too (most come straight from the browser's own cache).
self.addEventListener("message", (event) => {
  const urls = (event.data?.cache ?? []).filter((u) =>
    isHashedFile(new URL(u)),
  );
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        Promise.all(
          urls.map(
            async (u) => (await cache.match(u)) || cache.add(u).catch(() => {}),
          ),
        ),
      ),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || !isHashedFile(new URL(request.url))) return;
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) {
        await cache.put(request, response.clone());
        const keys = await cache.keys();
        await Promise.all(
          keys.slice(0, keys.length - LIMIT).map((k) => cache.delete(k)),
        );
      }
      return response;
    }),
  );
});
