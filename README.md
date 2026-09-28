# Kausik Kumar Bhadra – Portfolio
Multi-page glassmorphism portfolio built with Next.js 14, TypeScript, Tailwind CSS and lucide-react. Dark/light mode, fully responsive.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy (GitHub → Vercel)
1. `git init && git add . && git commit -m "init"`; push to a new GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo (defaults work).
3. Every push to `main` deploys to production; PRs get previews. GitHub Actions (`.github/workflows/ci.yml`) lint/typecheck/build each push.

## Add your photo, CV and documents
- `public/profile.jpg` → hero photo. `public/CV.pdf` → "Download CV" buttons. (Both appear automatically.)
- Reports/PPTs/papers → put files in `public/documents/{publications,reports,presentations}/` and add an entry in `src/data/resources.ts`.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel once you have a domain.

## Scripts
`npm run dev | build | lint | typecheck | smoke | format`

## Edit content
Update `src/data/*.ts` (profile, experience, publications, talks) and `memory-bank/RESUME.md`.

## Docs
See `memory-bank/` (INDEX, PRD, TRD, DESIGN, RESUME) and `AGENT.md`.
