# SympleTax — AI Coding Reference

## Project Identity
SympleTax is a tax resolution / IRS relief website serving Americans with IRS tax debt. The goal is to establish trust, authority, and urgency through professional design and clear conversion paths.

## Technical Stack
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS v4.0 — always use explicit `px` values, never Tailwind named sizes like `text-lg` or `rounded-md`
- **Animations**: Framer Motion via `motion/react` — use `AnimatePresence`, `motion.div`, `whileInView`
- **Icons**: Lucide React
- **Router**: React Router v7 — import `Link` from `"react-router"` (not `react-router-dom`)
- **Font**: **Inter only** — `font-['Inter']`. No Manrope, no Work Sans anywhere.
- **Images**: Always use `ImageWithFallback` from `./figma/ImageWithFallback` for all `<img>` tags

## Two-Version Architecture
The site runs two parallel homepage variants:
- **`/`** — Production homepage (`HomePage.tsx`) → imports from `src/app/components/*.tsx`
- **`/home`** — Vibrant v2 homepage (`HomePageV2.tsx`) → imports from `src/app/components/v2/*.tsx`

**Rule**: Never modify `components/*.tsx` when working on v2 changes. All v2 work goes into `components/v2/`. The two sets of components are completely independent.

## Routes
```
/          → HomePage.tsx
/home      → HomePageV2.tsx (vibrant v2)
/about     → AboutPage.tsx
/process   → ProcessPage.tsx
/services  → ServicesPage.tsx
/contact   → ContactPage.tsx
/v2        → SympleTaxPage.tsx
```

## Critical Constraints

### Typography
- **Single font**: `font-['Inter']` everywhere — no exceptions
- **H2 standard**: `font-['Inter'] font-bold leading-[1.08]` + `style={{ letterSpacing: "-1.5px" }}`
- **H3**: `style={{ fontSize: "clamp(24px, 2.5vw, 36px)", letterSpacing: "-1px" }}`
- **Body paragraph**: `font-['Inter'] font-normal leading-[1.65]` + `style={{ fontSize: "16px", letterSpacing: "-0.3px" }}`
- **Eyebrow label**: `font-['Inter'] font-medium uppercase` + `style={{ fontSize: "14px", letterSpacing: "0.05em" }}`
- **ALL H2 headings must be Title Case** (first letter of every word capitalized)
- Never use `text-2xl`, `text-4xl`, or any named Tailwind type scale

### Spacing
- **Section padding**: `py-[120px]` — not `py-24` or `py-32`
- **Max width + gutters**: `max-w-[1330px] mx-auto px-[70px]`
- All spacing values must be explicit pixels: `gap-[60px]`, `mb-[40px]`, etc.

### Buttons
- Always `rounded-full`
- Primary CTA: gradient background + glow shadow + `hover:scale-[1.02]`
- Never use plain flat dark buttons without a hover color change

### Section Headers (Eyebrow Pattern)
Every section starts with:
```tsx
<div className="flex items-center gap-[10px]">
  <div className="bg-[COLOR] h-px w-[35px]" />
  <span className="font-['Inter'] font-medium uppercase text-[COLOR]"
        style={{ fontSize: "14px", letterSpacing: "0.05em" }}>
    Section Label
  </span>
</div>
```

### Accordion Rules
- `useState<string>("01")` — non-nullable so accordion never fully closes
- `onClick={() => setActiveId(item.id)}` — no toggle, clicking active item does nothing
- Use `AnimatePresence` with `mode="wait"` + `key={activeId}` for crossfade transitions

## Project File Structure
```
src/app/
  HomePage.tsx          ← production homepage
  HomePageV2.tsx        ← v2 homepage (/home route)
  components/           ← production components (DO NOT touch for v2 work)
    Hero.tsx
    Navbar.tsx
    Footer.tsx
    TrustBar.tsx
    ProblemStatement.tsx
    TwoTrackLayout.tsx
    SolutionsOverview.tsx
    HowItWorks.tsx
    MidCTA.tsx
    ResultsNumbers.tsx
    Testimonials.tsx
    CaseResultSpotlight.tsx
    IRSNoticeCallout.tsx
    HomeFAQ.tsx
    HomeContactForm.tsx
    BlogPreview.tsx
    FinalCTA.tsx
    figma/
      ImageWithFallback.tsx
  components/v2/        ← v2 vibrant versions (for /home route)
    [same filenames as above]
  routes.ts             ← all route definitions
```

## Homepage Section Order (14 sections + extras)
01. Navbar
02. Hero
03. TrustBar
04. ProblemStatement
04b. TwoTrackLayout
05. SolutionsOverview
06. HowItWorks
— MidCTA (not in architecture spec but present)
07. ResultsNumbers
07b. Testimonials
07c. CaseResultSpotlight
08. IRSNoticeCallout
— HomeFAQ (not in architecture spec but present)
— HomeContactForm (not in architecture spec but present)
09. BlogPreview
10. FinalCTA
11. Footer
