# Technical Requirements Document
## Stack
Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · next-themes · lucide-react · self-hosted Inter (@fontsource-variable) · @vercel/analytics.
## Structure
```
src/app/            routes (/, /experience, /publications, /talks, /contact), layout, globals.css
src/components/     Header, Footer, ThemeToggle, GlassCard, Badge, PageHeading, TimelineItem, PublicationList
src/data/           profile, experience, publications, talks (typed content)
memory-bank/        project docs
.github/workflows/  CI (lint, typecheck, build)
```
## Theming
`darkMode: "class"`; next-themes toggles the `dark` class on `<html>`. Brand palette `brand-*` in tailwind.config.ts.
## Rendering
All pages statically generated; only Header, ThemeToggle, ThemeProvider, PublicationList are client components.
## CI/CD
GitHub Actions runs `npm run lint`, `typecheck`, `build` on push/PR. Deployment: import the GitHub repo in Vercel (framework auto-detected); every push to `main` deploys to production, PRs get preview URLs.
## Commands
`npm run smoke` (after build) · `npm run format` · `npm install` · `npm run dev` · `npm run build` · `npm run lint` · `npm run typecheck`

## Optional assets
`public/profile.jpg` and `public/CV.pdf` are detected server-side (`src/lib/assets.ts`); UI appears only when present. Documents: `public/documents/*` + `src/data/resources.ts`.
SEO: `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, JSON-LD in layout; base URL from `NEXT_PUBLIC_SITE_URL`.
