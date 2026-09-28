# Product Requirements Document
## Goal
A fast, elegant, multi-page portfolio for Dr. Kausik Kumar Bhadra, an economist (public finance & policy), built from his CV.
## Audience
Policy organisations, research institutions, recruiters, academic collaborators, conference organisers.
## Pages
1. **Home** – hero, summary, key stats, education, expertise.
2. **Experience** – timeline of roles + short-term consultancies.
3. **Publications** – filterable cards (Journal, Chapter, Working Paper, Monograph, Article).
4. **Research** – reports, PPTs, papers with downloads (data-driven, empty state until files are added).
5. **Talks** – lectures and conference presentations.
6. **Contact** – email, LinkedIn, location.
## Functional requirements
- Sticky header (nav + dark/light toggle) and footer, theme-colour background with white text.
- Dark/light mode with system default, persisted.
- Responsive: mobile, tablet, desktop; hamburger nav on mobile.
- Glassmorphism cards; reusable components; content driven by data files.
## Non-functional
Lighthouse ≥ 90, accessible (labels, contrast, focus), SEO metadata per page, zero backend.
## Out of scope
CMS, blog, contact form backend, analytics (future).
## Privacy decision
Phone, home address, DOB, family details and referee emails from the CV are intentionally NOT published.
