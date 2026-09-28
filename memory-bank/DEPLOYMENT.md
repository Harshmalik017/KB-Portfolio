# Deployment checklist (GitHub → Vercel)
1. Create GitHub repo; `git init && git add . && git commit -m "init" && git push -u origin main`.
2. Vercel → Add New → Project → Import repo (framework: Next.js, defaults).
3. Env var (optional, after domain): `NEXT_PUBLIC_SITE_URL=https://your-domain` (used for canonical, OG, sitemap).
4. Settings → Domains → add custom domain; follow DNS instructions.
5. Enable Analytics (Vercel → Analytics tab) if wanted; remove `<Analytics />` in `layout.tsx` otherwise.
6. Verify: share the URL on LinkedIn (OG card), open `/sitemap.xml`, run Lighthouse.
7. GitHub → Settings → Branches: require the CI check on `main` (optional).
Adding documents: drop file in `public/documents/<type>/`, add entry to `src/data/resources.ts`, push → auto-deploys.
