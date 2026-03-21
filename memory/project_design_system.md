---
name: project_design_system
description: Full SympleTax design system — colors, fonts, spacing, shadows, buttons, section patterns for both v1 (/) and v2 (/home)
type: project
---

## SympleTax Design System

### Project Identity
SympleTax is a tax relief/resolution website. Single font: **Inter only**.

### Color System

**v1 (production `/`):**
- Primary Dark: `#2C3E50`
- Accent Teal: `#00838F`
- Body Text: `#636363`
- Light BG: `#F7F7F7`

**v2 (`/home`) — user-approved vibrant palette:**
- Primary Dark: `#0f172a`
- Accent Teal: `#00A4A4` ← exact value, user-specified
- Teal hover: `#007a7a`
- Body Text: `#475569`
- Light BG: `#f9fafb`
- Footer BG: `#020617`

**Why:** User rejected `#06b6d4` (cyan-500) and requested `#00A4A4` as the project teal.

### Typography Standard
- H2: `font-['Inter'] font-bold leading-[1.08]` + `style={{ letterSpacing: "-1.5px" }}`
- Body: `font-['Inter'] font-normal leading-[1.65]` + `style={{ fontSize: "16px", letterSpacing: "-0.3px" }}`
- Eyebrow: `font-['Inter'] font-medium uppercase` + `style={{ fontSize: "14px", letterSpacing: "0.05em" }}`
- ALL H2s: Title Case

### Spacing
- Section: `py-[120px]`
- Container: `max-w-[1330px] mx-auto px-[70px]`

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
Footer → `#020617`
