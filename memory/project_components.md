---
name: project_components
description: Complete component inventory for SympleTax — both production (components/) and v2 (components/v2/) versions, with notes on each
type: project
---

## SympleTax Component Inventory

### Global Components (Both Versions)
| Component | File | Notes |
|-----------|------|-------|
| Navbar | `components/Navbar.tsx` / `v2/Navbar.tsx` | v2: white mode bg-white/95, dark text, teal CTA |
| Footer | `components/Footer.tsx` / `v2/Footer.tsx` | v2: bg-#020617, gray-400 text, hover teal links |
| ImageWithFallback | `components/figma/ImageWithFallback.tsx` | Used by BOTH v1 and v2 — never duplicate this |

### Homepage Section Components
| Section | v1 File | v2 File | Key Notes |
|---------|---------|---------|-----------|
| Hero | `Hero.tsx` | `v2/Hero.tsx` | Dark bg, photo overlay, gradient CTA |
| TrustBar | `TrustBar.tsx` | `v2/TrustBar.tsx` | White bg, 3 items: CPAs, Free Consult, Confidential |
| ProblemStatement | `ProblemStatement.tsx` | `v2/ProblemStatement.tsx` | 4 tabs (non-nullable), crossfade images, active title DARK not teal |
| TwoTrackLayout | `TwoTrackLayout.tsx` | `v2/TwoTrackLayout.tsx` | White bg (NOT dark teal), 6 solutions + 6 problems |
| SolutionsOverview | `SolutionsOverview.tsx` | `v2/SolutionsOverview.tsx` | 6 service tiles, dark overlay card, all link to /services |
| HowItWorks | `HowItWorks.tsx` | `v2/HowItWorks.tsx` | 4 steps, v2 has numbered accordion with chevron + feature pills |
| MidCTA | `MidCTA.tsx` | `v2/MidCTA.tsx` | Dark navy, centered, photo overlay |
| ResultsNumbers | `ResultsNumbers.tsx` | `v2/ResultsNumbers.tsx` | 4 stats with animated counters, world map image |
| Testimonials | `Testimonials.tsx` | `v2/Testimonials.tsx` | Auto-scrolling carousel, v2: dark bg with white cards |
| CaseResultSpotlight | `CaseResultSpotlight.tsx` | `v2/CaseResultSpotlight.tsx` | ALL white cards only — no dark alternating cards |
| IRSNoticeCallout | `IRSNoticeCallout.tsx` | `v2/IRSNoticeCallout.tsx` | Full-width photo card, floating left panel, IRS code list right |
| HomeFAQ | `HomeFAQ.tsx` | `v2/HomeFAQ.tsx` | 5 FAQs, sticky left heading, CTA button — NO pt-8 on button |
| HomeContactForm | `HomeContactForm.tsx` | `v2/HomeContactForm.tsx` | items-stretch, flex-col left, clickable links, colored icons |
| BlogPreview | `BlogPreview.tsx` | `v2/BlogPreview.tsx` | 2 cards + dark editorial card, items-stretch |
| FinalCTA | `FinalCTA.tsx` | `v2/FinalCTA.tsx` | Dark navy, centered, 3 trust indicators |

### Page Files
| Route | Page File | Imports From |
|-------|-----------|-------------|
| `/` | `HomePage.tsx` | `components/*.tsx` |
| `/home` | `HomePageV2.tsx` | `components/v2/*.tsx` |
| `/about` | `AboutPage.tsx` | `components/*.tsx` |
| `/process` | `ProcessPage.tsx` | `components/*.tsx` |
| `/services` | `ServicesPage.tsx` | `components/*.tsx` |
| `/contact` | `ContactPage.tsx` | `components/*.tsx` |
| `/v2` | `SympleTaxPage.tsx` | `components/stax/*.tsx` |

### Other Component Directories
- `components/stax/` — Alternative design variant (STHero, STTwoTrack, etc.)
- `components/ui/` — shadcn/Radix UI primitives (accordion, button, card, etc.)

### Content Data (Hardcoded)
| Data | Location |
|------|----------|
| Phone | +1 (949) 287-3015 |
| Email | info@sympletax.com / support@sympletax.com |
| Location | Irvine, CA |
| Stats | 98% satisfaction, 10+ years, $500M+ resolved, 12,000+ clients |
| Testimonials | 4 clients: Michael R. (CA), Leslie C. (TX), Sarah T. (FL), David L. (IL) |
| IRS Notices | CP2000, CP90, CP503, LT11, 1058, CP14 |
