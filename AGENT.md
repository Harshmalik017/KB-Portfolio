# AGENT.md
Guidance for AI coding agents working in this repo.
## Start here
Read `memory-bank/INDEX.md`, then PRD → TRD → DESIGN as needed.
## Rules
- Next.js App Router + TypeScript strict. Prefer server components; add `"use client"` only for state/effects.
- Style with Tailwind utilities; reuse `.glass` / `GlassCard`. No inline CSS or new UI libraries.
- Icons: `lucide-react` only.
- Content changes go in `src/data/*.ts` (and mirror in `memory-bank/RESUME.md`). Never hardcode content in pages.
- Keep Header/Footer theme-coloured with white text; support light and dark for every new element (`dark:` variants).
- Every layout must work on mobile, tablet and desktop.
- Do not publish phone, address, DOB or family details.
- New reusable UI → `src/components/`.
- Documents/reports: add file under `public/documents/<type>/` and an entry in `src/data/resources.ts` (never hardcode in JSX).
- UI: use `Button` (primary/secondary), `GlassCard` (`interactive` for clickable), `EmptyState`, `Carousel`, `FilterPills`. No inline button classes.
- Keep `memory-bank/TASKS.md` and `CHANGELOG.md` updated.

## Before finishing
`npm run lint && npm run typecheck && npm run build && npm run smoke` must pass. Update memory-bank docs if behaviour or structure changed.
