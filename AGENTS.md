# AGENTS.md

Project rules for AI coding assistants (Claude Code, Gemini CLI, GitHub Copilot, Cursor, Codex)
and for any developer taking over. `CLAUDE.md`, `GEMINI.md` and `.github/copilot-instructions.md`
point here; edit this file only.

## What this is

Marketing site for Canty Tours, a Kerala-first travel company. A home page (destination cards, a
filterable journey grid, a compare dialog, a trip planner) and one page per journey with its
day-by-day route and an enquiry form. Enquiries open WhatsApp with a prepared message. No backend,
no database, no stored personal data.

## Stack

- Next.js (App Router) + React + TypeScript (strict), exported as static HTML (`output: "export"`)
- CSS Modules per component; design tokens in `src/app/globals.css`
- Vitest for unit tests, Prettier for formatting (default settings)
- Hosting: GitHub Pages via `.github/workflows/main.yml`

Don't add frameworks or libraries (Tailwind, UI kits, state libraries, CSS-in-JS) without the
owner agreeing first. Prefer what is already here.

## Commands

```sh
npm run dev      # local server at http://localhost:3000
npm test         # unit tests
npm run format   # Prettier
npm run check    # format check + tests + build — run before every commit
```

## Where things go

| Change                                | Place                                                 |
| ------------------------------------- | ----------------------------------------------------- |
| Tour content                          | `src/data/tours.ts`                                   |
| Journey pages (one per tour)          | `src/app/journeys/[id]/page.tsx`, `JourneyDetail.tsx` |
| Testimonials (real ones only)         | `src/data/testimonials.ts`                            |
| Dropdown options, filter types        | `src/data/options.ts`                                 |
| Destination cards                     | `src/data/destinations.ts`                            |
| "Where to?" picker places + credits   | `src/data/places.ts`                                  |
| Contact-form country codes            | `src/data/countryCodes.ts`                            |
| Phone / WhatsApp                      | `src/data/site.ts`                                    |
| Filtering, labels, message text       | `src/lib/journeys.ts` + `journeys.test.ts`            |
| Generic UI (buttons, fields, dialogs) | `src/components/ui/`                                  |
| Cards                                 | `src/components/cards/`                               |
| Page sections                         | `src/components/sections/`                            |
| Dialogs, bars, toasts                 | `src/components/overlays/`                            |
| Shared page state                     | `src/components/JourneyProvider.tsx`                  |
| Photos (JPEG originals)               | `public/assets/`, then `npm run images`               |

## Component rules

- Reuse `src/components/ui/` first: `Button` (variant, raised, small, arrow, href → link),
  `TextButton`, `Chip`, `Dropdown` (custom select; `boxed` inside forms; no native `<select>`),
  `Field` (labelled input or textarea), `Modal` (native dialog), `SectionHeading`, `Brand`,
  `Icon`. Extend one with a prop before creating a near-duplicate.
- Links between pages use `next/link` (`Button href`, `Brand` already do): it adds the base path.
- Links to a section use `SectionLink section="faq"` (add `page="/"` from another page) or
  `Button href="/" section="plan"`, never `#id` in an href: the address stays free of #, focus
  moves to the section, and from another page the section shows once the page has loaded.
- One component per file, named export, PascalCase file name, props typed with a `type`.
- Add `"use client"` only to components that use state, effects or event handlers.
- Content belongs in `src/data/`, not hard-coded in components, when it is a list or repeats.
- Logic without React (filtering, formatting, message building) goes in `src/lib/` with a test.
- Show photos with `<Photo src="file.jpg" alt sizes>`, never a bare `<img>`: it serves the
  smallest WebP copy that fills the space and a blurred preview while it loads. `sizes` must say
  how wide the photo really shows at each breakpoint. Add `priority` only to the largest photo
  on the first screen. Not `next/image` (its optimisation doesn't work in a static export).
- Photos: add the JPEG original (about 1200px wide, or 1600px for full-screen) to
  `public/assets/`, then `npm run images` (it also runs before `dev` and `build`). It writes
  hashed WebP copies to `public/assets/generated/` and `src/generated/photos.json`; both are
  rebuilt from the originals and not committed. Use `asset("file")` for any other file URL.
- `public/sw.js` keeps hashed files (photo copies, `/_next/static/`) on the device, because
  GitHub Pages only allows a 10-minute cache. Never let it cache pages or unhashed files.
- Keep the static export working: no API routes, server actions, middleware, cookies or headers.
  A backend means removing `output: "export"` and changing hosting; discuss that first.

## Styling rules

- Each component has a `Name.module.css` next to it; class names in camelCase.
- Use the tokens in `src/app/globals.css`; no raw hex text colours or pixel font sizes in
  components:
  - Colour (palette rationale in `globals.css`): neutrals `--cream`, `--surface`, `--sand`,
    `--line` (decorative edges), `--control` (input and chip edges, 3:1); palm green `--ink`,
    `--ink-hover`, `--green-soft`, `--muted`; saffron and marigold `--orange`, `--orange-hover`,
    `--marigold`, `--accent-dark`, `--accent-light`; text on dark `--on-dark`, `--on-dark-muted`.
    For a tint, use `color-mix(in srgb, var(--token) N%, transparent)`, not a new hex value.
  - Depth: buttons are flat; only the one main action of a screen or dialog gets `raised`.
  - Type: `--text-label` (12px uppercase labels, with `--tracking-label`), `--text-xs` 13,
    `--text-sm` 14, `--text-base` 16 (body and form controls), `--text-lg` 18, then fluid
    headings `--text-xl`, `--text-h3`, `--text-h2`, `--text-h1`, `--text-display`.
  - Fonts: `--serif` (Playfair Display) for headings and card titles, `--sans` (Montserrat) for everything
    else. Both are loaded by `next/font` in `src/app/layout.tsx`; italics are real italics.
- Text is never smaller than 12px. The only exception is the logo lockup in `Brand`.
- Breakpoints are `max-width` 1100px, 800px and 540px. Put a component's media queries at the end
  of its own module file.
- Global utility classes (`wrap`, `section`, `eyebrow`, `light`, `fineprint`) come from
  `globals.css`. Don't add new globals for a single component.
- To restyle a child component from its parent, pass `className` and target it with two classes
  (`.parent .child`) so it wins over the child's own single-class rule. Avoid `!important`.
- Keep visible focus outlines.

## Motion rules

- Use the motion tokens: `--ease-out` for things arriving, `--ease-in` for things leaving;
  `--dur-fast` (hover/press), `--dur-base` (state changes, exits), `--dur-slow` (dialogs,
  panels), `--dur-reveal` (page-load and scroll reveals). Exits are faster than entrances.
- Animate only `transform` and `opacity` (plus colours for hover states).
- Add the global `reveal` class to a block to fade it up as it scrolls into view (CSS scroll
  timeline, no JavaScript). Put it on containers, not on every card. For a grid or list of
  cards use `stagger` on the container instead: its items rise one after another. A long,
  multi-row grid (the journey grid) lets each card use its own `view()` timeline, offset by
  column (see `TourCard.module.css`).
- Parallax: `parallax` on a photo at the top of a page (both heroes) makes it drift down slower
  than the page. Any box that clips a scroll-animated element must use `overflow: clip`, not
  `hidden`: `hidden` makes the box a scroll container and the animation follows it, not the page.
- No animation libraries (Framer Motion etc.): CSS scroll timelines run off the main thread,
  keep content in the HTML and simply don't animate in browsers without support.
- Cards share one motion set: lift 6px, a deeper shadow, a slow photo zoom (1.06) and the arrow
  nudging forward. Put hover effects inside `@media (hover: hover)` (touch screens would keep
  them after a tap) and repeat them on keyboard focus. Fade a shadow in with an extra layer's
  `opacity` rather than animating `box-shadow`; clip photos with a wrapper, not the card, so
  that shadow can show.
- Use one-shot animations with `backwards` fill so they never block hover transitions.
- `prefers-reduced-motion: reduce` turns all animation and transitions off in `globals.css`;
  never work around it, and never make content depend on an animation finishing.
- Keyframes used by a CSS Module must be defined in that module (names are scoped).

## Icons

- Use `<Icon name="arrow" />` (also `reset`, `spark`) instead of typing ↗ ↺ ✳: the fonts don't
  contain those glyphs, so they would render differently on every device. Add new icons as
  paths in `src/components/ui/Icon.tsx`. No emoji as icons.

## Content rules

- Prices are "on request". Never invent prices, reviews, testimonials, awards or guarantees.
- Routes are sample itineraries; keep the "confirmed in your quote" disclaimers.
- The trip form must not send or store data anywhere except the visitor's own WhatsApp message.
- Every image needs meaningful `alt` text; credit new photos in the README and privacy dialog.

## Before you finish

1. `npm run check` passes.
2. Look at the page at about 1440px, 800px and 390px wide (`npm run dev`).
3. Commit on a branch (never directly to `main`), one logical change per commit, message says
   what changed and why. Never commit `node_modules/`, `.next/`, `out/` or `.env*` files.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
