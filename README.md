# Canty Tours

Website for Canty Tours: Kerala-first holiday ideas, journeys across India, and a trip planner that
prepares a WhatsApp message. Business contact: +91 89216 11825.

Built with **Next.js (React + TypeScript)** and exported as a static site to GitHub Pages. There is
no backend: nothing is stored, and enquiries go to WhatsApp from the visitor's browser.

## Run it

Requires Node.js 20.9 or newer.

```sh
npm install      # once
npm run dev      # http://localhost:3000, reloads on save
```

| Command          | What it does                                           |
| ---------------- | ------------------------------------------------------ |
| `npm run dev`    | Local development server                               |
| `npm test`       | Unit tests (Vitest) for filtering and the enquiry text |
| `npm run format` | Format every file with Prettier                        |
| `npm run build`  | Type-check and export the static site to `out/`        |
| `npm run check`  | Format check + tests + build; the same checks CI runs  |

## Project structure

```
src/
  app/                  Next.js entry: layout (header, footer, fonts, metadata), home page,
                        journeys/[id]/ (one page per journey), global CSS, favicon
  components/
    ui/                 Reusable building blocks: Button, TextButton, Chip, Dropdown, Field,
                        Modal, SectionHeading, Brand, Icon
    cards/              TourCard, DestinationCard, IndiaCard
    sections/           One component per page section (Header, Hero, FinderBar, Journeys, …)
    overlays/           Dialogs, compare bar and toast
    JourneyProvider.tsx Shared state: filters (kept in the address), comparison, dialogs
  data/                 Content: tours, destinations, dropdown options, contact details,
                        testimonials (real ones only; the section is hidden while empty)
  lib/                  Pure logic (filtering, labels, WhatsApp text) and its tests
public/assets/          Photo originals (JPEG); npm run images makes the WebP copies served
scripts/images.mjs      Makes those copies (runs before dev and build)
```

Each component keeps its styles next to it in a `*.module.css` file (CSS Modules, scoped to that
component). `src/app/globals.css` holds only colour/font tokens, element defaults and a few shared
utility classes (`wrap`, `section`, `eyebrow`, `light`, `fineprint`).

## Common edits

- **Add or change a tour:** edit `src/data/tours.ts`. Put its photo in `public/assets/` (about
  1000–1200px wide) and set `image` to its path there, e.g. `"destinations/kollam.jpg"`.
  Record the published itinerary it was checked against in `source`.
- **Add a place to the "Where to?" picker:** `src/data/places.ts` (photo in
  `public/assets/destinations/`, with its credit). Make sure at least one tour visits it; a
  unit test checks this.
- **Change dropdown options:** `src/data/options.ts`; contact-form country codes:
  `src/data/countryCodes.ts`.
- **Change destination cards:** `src/data/destinations.ts`.
- **Change the phone/WhatsApp number:** `src/data/site.ts`.

## Deploy

Every push to `main` runs `.github/workflows/main.yml`: format check, tests, build, then deploy of
`out/` to GitHub Pages. Pull requests run the same checks without deploying.

One-time setting: **Settings → Pages → Source = GitHub Actions**. With the old "Deploy from a
branch" setting, GitHub also publishes the raw repository files and the two deploys overwrite each
other.

The site is served from a sub-path (`/canty-tours-uat`) on GitHub Pages; the workflow passes it to
the build as `BASE_PATH`. Image paths go through `asset()` in `src/lib/utils.ts` so they include it.

## Content sources

Routes are illustrative, with prices on request. No testimonials, performance claims, accreditation
or rates are fabricated. All quotes and bookings are handled directly with Canty Tours.

Kerala and Tamil Nadu itineraries are original, condensed day-by-day summaries of published
Paradise Holidays routes, reviewed on 19 October 2026. They keep the published route order, key
activities and optional or time-dependent qualifications; no prices, guarantees, hotel, meal or
transport inclusions are transferred. Each tour's reference is its `source` in
`src/data/tours.ts`, and the list is shown in the site's privacy dialog. Every place in the
"Where to?" picker has at least one matching route; Alleppey matches Alappuzha routes, Houseboat
matches overnight and daytime houseboat routes, and the Kanyakumari, Madurai and Rameswaram routes
appear in both the Kerala and South India collections.

### Competitor comparison

- Paradise Holidays https://www.paradise-kerala.com/ : Kerala-first navigation, destination browsing, duration-based itinerary ideas, travel styles and planning FAQs. Applied with original Canty copy and sample routes, not competitor prices or business claims. Reviewed 12 October 2026.
- Route references: [4 days: Munnar and Alappuzha](https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/4days-3nights-alleppey-munnar-kerala-tour/), [5 days: Munnar, Thekkady and Alappuzha](https://www.paradise-kerala.com/tourpackage/Kerala-Tour-Packages/5days-4nights-Alleppey-Thekkady-Munnar/), [North Kerala options](https://www.paradise-kerala.com/tourpackage/North-Kerala-Tour-Packages/). Other routes are original suggested combinations.
- Planning references: Kerala Tourism’s [seasonal advice](https://www.keralatourism.org/faq/what-should-you-know-before-going-on-vacation-to-kerala), [Munnar access](https://www.keralatourism.org/munnar/location-munnar.php), [Wayanad access](https://www.keralatourism.org/campaigns/kerala365/wayanad-kerala), and [houseboat operator Q&A](https://www.keralatourism.org/travelcare/postdetails/view/14523). Routes require confirmation around actual arrival/departure times and current availability.

Earlier India-wide layout references:

- Thomas Cook https://www.thomascook.in/holidays/ : destination and traveller-interest browsing. Applied as region and style filters.
- SOTC https://www.sotc.in/holidays : custom holiday enquiry. Applied as a compact WhatsApp trip planner.
- Thrillophilia https://www.thrillophilia.com/countries/india/tours : scannable journey offerings. Applied as duration, route, itinerary and side-by-side comparison.

Original layout and copy; no competitor branding or proprietary descriptions copied. Earlier references checked 11 October 2026.

### Photos

Originals live in `public/assets/` (JPEG). The site never serves them directly: `npm run images`
(run automatically before `dev` and `build`) makes WebP copies at 320 to 1600px wide plus a tiny
blurred preview, and the `Photo` component lets each browser pick the smallest copy that fills
the space. After adding or replacing a photo, run `npm run images`.

"Where to?" picker photos are stored in `public/assets/destinations/`, resized to 960px wide with
camera metadata removed. Most come from Wikimedia Commons under CC BY-SA, CC BY or public domain;
photographer, licence and source page for each are in `src/data/places.ts` and shown in the
privacy dialog, as the licences require.

Downloaded from Unsplash, re-sized for the site, used under the [Unsplash License](https://unsplash.com/license):

- Munnar, Vivek Kumar: https://unsplash.com/photos/tea-gardens-on-munnar-hills-JS_ohjocm00
- Varkala, Nandu Vasudevan: https://unsplash.com/photos/BU0lMokk7tA
- Wayanad, Niranjan V S: https://unsplash.com/photos/mountains-covered-in-lush-green-vegetation-stand-tall-rTiBFR2c99c
- Kerala: https://images.unsplash.com/photo-1602216056096-3b40cc0c9944
- Rajasthan: https://unsplash.com/photos/LgQoL6eOdHs
- Ladakh, Vivek: https://unsplash.com/photos/MEaPZmSKyws
- Taj Mahal: https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f
- Goa, Arun Prakash: https://unsplash.com/photos/weeJiR-xXC0
- Sikkim, North Bengal Tourism: https://unsplash.com/photos/E6rnGEJnvYo

Typography: Playfair Display (headings) and Instrument Sans (text, labels, buttons) from Google Fonts, self-hosted at build time by `next/font`.
