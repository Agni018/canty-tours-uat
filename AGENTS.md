# AGENTS.md

Project rules for AI coding assistants (Claude Code, Gemini CLI, GitHub Copilot, Cursor, Codex)
and for any developer taking over. `CLAUDE.md`, `GEMINI.md` and `.github/copilot-instructions.md`
point here; edit this file only.

## What this is

Marketing site for Canty Tours, a Kerala-first travel company. One page: destination cards, a
filterable journey grid, a compare dialog and a trip planner that opens WhatsApp with a prepared
message. No backend, no database, no stored personal data.

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

| Change                                | Place                                         |
| ------------------------------------- | --------------------------------------------- |
| Tour content                          | `src/data/tours.ts`                           |
| Dropdown options, filter types        | `src/data/options.ts`                         |
| Destination cards                     | `src/data/destinations.ts`                    |
| Phone / WhatsApp                      | `src/data/site.ts`                            |
| Filtering, labels, message text       | `src/lib/journeys.ts` + `journeys.test.ts`    |
| Generic UI (buttons, fields, dialogs) | `src/components/ui/`                          |
| Cards                                 | `src/components/cards/`                       |
| Page sections                         | `src/components/sections/`                    |
| Dialogs, bars, toasts                 | `src/components/overlays/`                    |
| Shared page state                     | `src/components/JourneyProvider.tsx`          |
| Photos                                | `public/assets/` (~1200px wide JPEG, <300 KB) |

## Component rules

- Reuse `src/components/ui/` first: `Button` (variant, small, arrow, href → link), `TextButton`,
  `Chip`, `Select` (options list), `Field` (labelled form control), `Modal` (native dialog),
  `SectionHeading`, `Brand`. Extend one with a prop before creating a near-duplicate.
- One component per file, named export, PascalCase file name, props typed with a `type`.
- Add `"use client"` only to components that use state, effects or event handlers.
- Content belongs in `src/data/`, not hard-coded in components, when it is a list or repeats.
- Logic without React (filtering, formatting, message building) goes in `src/lib/` with a test.
- Use `asset("file.jpg")` for image URLs (adds the GitHub Pages base path). Use `<img>`, not
  `next/image` (image optimisation doesn't work in a static export).
- Keep the static export working: no API routes, server actions, middleware, cookies or headers.
  A backend means removing `output: "export"` and changing hosting; discuss that first.

## Styling rules

- Each component has a `Name.module.css` next to it; class names in camelCase.
- Use the tokens: `var(--ink)`, `--cream`, `--muted`, `--orange`, `--line`, `--serif`, `--sans`.
- Breakpoints are `max-width` 1100px, 800px and 540px. Put a component's media queries at the end
  of its own module file.
- Global utility classes (`wrap`, `section`, `eyebrow`, `light`, `fineprint`) come from
  `globals.css`. Don't add new globals for a single component.
- To restyle a child component from its parent, pass `className` and target it with two classes
  (`.parent .child`) so it wins over the child's own single-class rule. Avoid `!important`.
- New text is at least 8px (a few older labels are 6–7px; raise them when you touch that
  component). Keep visible focus outlines and the reduced-motion rule.

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
