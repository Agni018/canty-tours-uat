# Copilot instructions

The full project rules are in `AGENTS.md` at the repository root. Read and follow it; it is the
single source of truth shared by Claude, Gemini, Copilot and other assistants.

Key points, in case `AGENTS.md` is not loaded:

- Next.js App Router + React + TypeScript (strict), static export (`output: "export"`), no backend.
- Reuse components in `src/components/ui/` (Button, TextButton, Chip, Select, Field, Modal,
  SectionHeading, Brand) before writing new ones.
- Styles: one `*.module.css` per component, tokens from `src/app/globals.css`, breakpoints
  1100/800/540px.
- Content in `src/data/`, pure logic in `src/lib/` with Vitest tests.
- Images via `asset()` and plain `<img>`. No new dependencies without the owner agreeing.
- Never invent prices, reviews or claims. Run `npm run check` before committing.
