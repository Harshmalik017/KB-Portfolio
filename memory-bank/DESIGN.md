# Design System
## Style: glassmorphism
`.glass` (globals.css): `bg-white/50` (dark `bg-white/5`), `backdrop-blur-xl`, 1px translucent border, `rounded-2xl`, `shadow-xl`. Fixed blurred gradient blobs (`.bg-blobs`) sit behind content so blur is visible.
## Colour
- Brand: indigo scale `brand-50…950` (primary `brand-600`).
- Header/Footer: `bg-brand-700` light, `bg-brand-900` dark; text white.
- Page: `slate-100` light / `slate-950` dark.
## Typography
Inter. H1 `text-3xl→5xl`, H2 `text-xl`, body `text-sm/base`, leading-relaxed.
## Breakpoints
- Mobile (<640): single column, hamburger menu.
- Tablet (md ≥768): 2-column grids, inline nav.
- Desktop (lg ≥1024): container `max-w-6xl`, 2–4 column grids.
## Components
GlassCard · Badge · PageHeading · TimelineItem · PublicationList · ThemeToggle · Header · Footer.
## Icons
lucide-react only (size 12–24).
## Accessibility
aria-labels on icon buttons, focus-visible rings, sufficient contrast on white-on-indigo.

## Update 0.4.0 – UI system
- **Buttons** (`components/Button.tsx`): *primary* = filled `brand-600`, white text; *secondary* = white bg, `brand-700` text, brand border. Sizes sm/md/icon. Never hand-roll button classes.
- **Cards**: `.glass` has layered soft shadow (separate dark-mode shadow); `interactive` prop adds hover lift + stronger shadow.
- **Mobile/tablet menu**: right slide-in drawer in theme colour (`brand-700` / `brand-900`), backdrop, Esc/outside-tap close, scroll lock, `aria-expanded`, `aria-current`. Desktop nav shows active underline.
- **Carousel** (`components/Carousel.tsx`): CSS scroll-snap, swipe + arrow buttons + arrow keys; buttons hide when all items fit. Used for Research areas and Latest publications.
- **Empty states** (`components/EmptyState.tsx`): no documents uploaded, filtered-empty (with reset), no publication matches (clear filters), file missing on disk ("File not uploaded yet"), CV not uploaded (disabled button).
- **Offline dialog** (`OfflineNotice`): alert dialog with Retry / Dismiss; auto-closes when back online.
- Also: back-to-top button, skeleton loading, print styles, higher-contrast muted text (`slate-700` / dark `slate-300`).
