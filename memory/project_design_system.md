---
name: project_design_system
description: Full SympleTax design system — colors, fonts, spacing, shadows, buttons, section patterns for v2 (active site)
type: project
---

## SympleTax Design System

### Project Identity
SympleTax is a tax relief/resolution website. Active site font: **DM Sans** (`font-['DM_Sans']`). All v2 components (`components/v2/`), AboutPage, LegalPage, and ALL new work use DM Sans. Legacy v1 `components/*.tsx` and `components/stax/` use Inter — they are not active routes, do not touch them.

### Route Reality (verified from routes.ts + site.ts)
- `/` → `HomePageV2.tsx` (v2 is LIVE at root — SITE_ONLY_HOME_LIVE controls other pages)
- `/home` → `HomePageV2.tsx`
- `/about`, `/contact`, `/services`, `/process` → only accessible when `SITE_ONLY_HOME_LIVE = false`
- `/legal/:tab` → `LegalPage.tsx`

### Color System

**v2 (active site):**
- Primary Dark: `#0f172a`
- Accent Teal: `#00A4A4` ← exact value, user-specified
- Teal hover: `#007a7a`
- Body Text: `#475569`
- Light BG: `#f9fafb`
- Footer BG: `#0f172a` (Footer component uses `#0f172a` not `#020617`)

**Why:** User rejected `#06b6d4` (cyan-500) and requested `#00A4A4` as the project teal.

### Typography Standard (v2 / all new work)
- Font: `font-['DM_Sans']` — NOT Inter
- H2: `font-['DM_Sans'] font-bold leading-[1.08]` + `style={{ letterSpacing: "-1.5px" }}`
- Body: `font-['DM_Sans'] font-normal leading-[1.65]` + `style={{ fontSize: "16px", letterSpacing: "-0.3px" }}`
- Eyebrow: `font-['DM_Sans'] font-medium uppercase` + `style={{ fontSize: "14px", letterSpacing: "0.05em" }}`
- ALL H2s: Title Case

### Spacing
- Section: `py-[120px]`
- Mobile section: `py-[64px] lg:py-[120px]`
- Container: `max-w-[1330px] mx-auto px-[70px]`
- Mobile container: `px-[25px] lg:px-[70px]`

### Shadow Scale (v2)
- Light: `shadow-[0_4px_24px_rgba(0,0,0,0.08)]`
- Medium: `shadow-[0_8px_32px_rgba(0,0,0,0.12)]`
- Heavy: `shadow-[0_16px_48px_rgba(0,0,0,0.15)]`
- Teal glow: `0 8px 24px rgba(0,164,164,0.35)`

### Section Background Rhythm (v2)
Dark sections: Hero, MidCTA, Testimonials, FinalCTA → `#0f172a`
Light sections: TrustBar, SolutionsOverview, CaseResultSpotlight, HomeFAQ, HomeContactForm, BlogPreview → white
Tinted sections: ProblemStatement, HowItWorks → `#f9fafb`
TwoTrackLayout → white (reverted from dark teal per user request)
Footer → `#0f172a`
