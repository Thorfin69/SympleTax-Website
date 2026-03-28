# SympleTax — Design System

## 1. Brand Identity
- **Product**: SympleTax — IRS Tax Relief & Resolution firm
- **Tone**: Professional, empathetic, urgent but not fear-based. Outcome-focused.
- **Mood**: Clean, high-contrast, trustworthy. Layered depth via dark/light section alternation.
- **Avoid**: Generic "corporate blue", clipart-style icons, low-contrast grays, fear-mongering copy

---

## 2. Color Palettes

### v1 (Production — `/` route)
| Token | Hex | Role |
|-------|-----|------|
| Primary Dark | `#2C3E50` | Dark section backgrounds, primary buttons |
| Accent Teal | `#00838F` | Accent lines, icons, active states |
| Deep Teal | `#017984` | Hover states, emphasis |
| Body Text | `#636363` | Paragraph text on light backgrounds |
| Light BG | `#F7F7F7` | Alternating section backgrounds |
| Pure White | `#FFFFFF` | Card surfaces, main bg |

### v2 (Vibrant — `/home` route)
| Token | Hex | Role |
|-------|-----|------|
| Primary Dark | `#0f172a` | Dark section backgrounds, headlines |
| Accent Teal | `#00A4A4` | All accents, CTAs, active states, icons — **user-specified exact value** |
| Teal Dark | `#007a7a` | Hover state for teal buttons |
| Teal Deeper | `#005f5f` | Second hover state |
| Body Text | `#475569` | Paragraph text (slate-600) |
| Light BG | `#f9fafb` | Alternating light sections |
| Pure White | `#FFFFFF` | Cards, form surfaces |
| Footer BG | `#020617` | Footer only |
| Dark Teal Section | `#0e7490` | Reserved (not currently used — TwoTrackLayout reverted to white) |

**NEVER** use mid-tone grays (`#aaaaaa`, `#cccccc`) for backgrounds. Only:
- Pure white `#ffffff`
- Very light `#f9fafb`
- Very dark `#0f172a` or `#020617`

---

## 3. Typography

### Font Family
**DM Sans for all v2/active components.** `font-['DM_Sans']` everywhere in `components/v2/`, `AboutPage.tsx`, `LegalPage.tsx`, and all new work. Legacy v1 `components/*.tsx` and `components/stax/` use Inter but are not actively served.

### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 | `clamp(40px, 5vw, 64px)` | `font-bold` (700) | `1.08` | `-2px` |
| H2 | `clamp(28px–48px, contextual)` | `font-bold` (700) | `1.08` | `-1.5px` |
| H3 inner | `clamp(24px, 2.5vw, 36px)` | `font-semibold` | `1.2` | `-1px` |
| Body | `16px` | `font-normal` (400) | `1.65` | `-0.3px` |
| Eyebrow | `14px` | `font-medium` (500) | `1.5` | `0.05em` |
| Label/sub | `13–15px` | `font-normal` | `1.4` | `-0.2px` |

### H2 Standard Class Pattern
```tsx
<h2 className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
    style={{ fontSize: "clamp(28px, 3vw, 48px)", letterSpacing: "-1.5px" }}>
```

### Body Paragraph Standard
```tsx
<p className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]"
   style={{ fontSize: "16px", letterSpacing: "-0.3px" }}>
```

### Heading Case Rule
**ALL H2 headings use Title Case** — first letter of every word capitalized.
Example: "How We Deliver Results" ✓ / "How we deliver results" ✗

---

## 4. Spacing System

| Context | Value |
|---------|-------|
| Section vertical padding | `py-[120px]` |
| Max content width | `max-w-[1330px]` |
| Horizontal gutters | `px-[70px]` |
| Section internal gap (header→content) | `mb-[40px]` to `mb-[52px]` |
| Card internal padding | `p-[28px]` to `p-[48px]` |
| Eyebrow→H2 gap | `gap-[14px]` or `gap-[22px]` |
| H2→paragraph gap | `mt-4` or part of `flex gap-[22px]` |

---

## 5. Section Background Pattern (v2)

| Section | Background |
|---------|-----------|
| Navbar | White `#ffffff` (floating pill) |
| Hero | Dark navy `#0f172a` with photo + `bg-[#0f172a]/80` overlay |
| TrustBar | White |
| ProblemStatement | Light `#f9fafb` |
| TwoTrackLayout | **White** (was dark teal, user reverted) |
| SolutionsOverview | White (with dark gradient overlay on inner card) |
| HowItWorks | Light `#f9fafb` |
| MidCTA | Dark navy `#0f172a` with photo overlay |
| ResultsNumbers | White |
| Testimonials | Dark navy `#0f172a` |
| CaseResultSpotlight | Light `#f9fafb` |
| IRSNoticeCallout | Dark photo + `#0f172a/85` overlay |
| HomeFAQ | White |
| HomeContactForm | White |
| BlogPreview | White |
| FinalCTA | Dark navy `#0f172a` |
| Footer | Near-black `#020617` |

**Pattern**: Every 2–3 light sections, insert a dark section for visual rhythm.

---

## 6. Shadow Depth System (v2)

| Level | Value |
|-------|-------|
| Light card | `shadow-[0_4px_24px_rgba(0,0,0,0.08)]` |
| Medium card | `shadow-[0_8px_32px_rgba(0,0,0,0.12)]` |
| Heavy/feature | `shadow-[0_16px_48px_rgba(0,0,0,0.15)]` |
| On dark bg | `shadow-[0_8px_32px_rgba(0,0,0,0.25)]` |
| Teal glow (button) | `shadow: 0 8px 24px rgba(0,164,164,0.35)` |
| Hover intensity | `hover:shadow-[0_20px_64px_rgba(0,0,0,0.18)]` |

---

## 7. Button Patterns

### Primary CTA (v2 Teal Gradient)
```tsx
<button
  className="text-white rounded-full flex items-center justify-center gap-[10px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
  style={{
    paddingTop: "17px", paddingBottom: "17px",
    background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
    boxShadow: "0 8px 24px rgba(0,164,164,0.35)"
  }}
>
```

### Secondary CTA (Outline on dark)
```tsx
className="border-2 border-white/40 text-white hover:bg-white/10 rounded-full px-8 py-4"
```

### Nav CTA
```tsx
className="bg-[#00A4A4] hover:bg-[#007a7a] text-white px-5 py-2.5 rounded-xl font-['Inter'] font-bold text-[14px]"
```

---

## 8. Component-Specific Rules

### Navbar (v2)
- White mode: `bg-white/95 backdrop-blur-sm border border-gray-100`
- Text: `text-[#0f172a]/70 hover:text-[#0f172a]`
- Teal underline on hover: `bg-[#00A4A4]`
- Logo: no `brightness-0 invert` in white mode
- Phone icon: `text-[#00A4A4]`

### ProblemStatement
- Active tab title stays **dark** (`text-[#0f172a]`), NOT teal
- Accordion uses `useState<string>("01")` — non-nullable, never closes
- Left image crossfades using `AnimatePresence mode="wait"` + `key={activeId}`
- "Learn More" links exist but currently don't link to individual service pages

### TwoTrackLayout
- Section background: **white** (user explicitly reverted from dark teal)
- Tab underline: `bg-[#00A4A4]`
- Active chip: `bg-white text-[#0e7490]` with shadow

### HowItWorks Accordion (v2 premium design)
- Large step numbers (28px bold): teal `#00A4A4` when active, `text-slate-200` inactive
- Chevron icon (rotates 180° when open) — NOT plus/minus circles
- Active row: `bg-[#00A4A4]/[0.04]` tint
- Expanded: description + feature pills (colored dot + label, white bg, slate border)
- Container: `rounded-[16px] overflow-hidden border border-slate-100 divide-y divide-slate-100`

### CaseResultSpotlight
- All cards **white only** — no dark alternating cards

### HomeContactForm (v2)
- Outer flex: `items-stretch` (not `items-start`)
- Left column: `flex flex-col` (NOT `justify-between` — causes dead space)
- Contact items: clickable `<a href="tel:...">` and `<a href="mailto:...">` with hover animation
- Icon circles: `w-[62px] h-[62px] rounded-[16px]` with per-item accent color tint
  - Phone: sky blue `#0ea5e9`
  - Email: teal `#00A4A4`
  - Location: amber `#f59e0b`
- Hover: icon scales up, label turns teal, arrow appears

### HomeFAQ (v2)
- Button CTA in left column should NOT have `pt-8` wrapper — use normal `gap-[22px]` flow

### Testimonials (v2)
- Section bg: dark navy `#0f172a`
- Cards: white with `shadow-[0_8px_32px_rgba(0,0,0,0.25)]`
- Stat numbers: `text-[#00A4A4]`
- Edge fades: gradient from `#0f172a` to transparent

### Footer (v2)
- Background: `#020617` (near-black)
- Text: `text-gray-400`
- Links hover: `hover:text-[#00A4A4]`
- Logo: white (use `brightness-0 invert` if needed)

---

## 9. Photo Overlay Standard

For ALL dark sections with a background image:
```tsx
{/* Background image */}
<ImageWithFallback src="..." className="absolute inset-0 w-full h-full object-cover" />
{/* Required dark overlay */}
<div className="absolute inset-0 bg-[#0f172a]/80" />
{/* Content on top */}
<div className="relative z-10">...</div>
```
Never use background images without overlays.

---

## 10. On-Dark vs On-Light Typography

**On dark backgrounds** (`#0f172a`, `#020617`):
- Headlines: `text-white`
- Body: `text-white/75`
- Labels/eyebrows: `text-[#00A4A4]` (lighter teal reads better on dark)
- Dividers: `border-white/10`

**On light backgrounds** (`#ffffff`, `#f9fafb`):
- Headlines: `text-[#0f172a]`
- Body: `text-[#475569]`
- Labels/eyebrows: `text-[#00A4A4]` or `text-[#0f172a]`
- Dividers: `border-slate-100` or `border-slate-200`

---

## 11. Mobile Design Standards (from ATTAX learnings)

### Single Breakpoint Rule
Use only `lg:` (1024px) for desktop/mobile splits. Do NOT mix `sm:`, `md:`, and `lg:` for layout shifts — keep it simple.

### Mobile Typography Scale
| Element     | Mobile size         | Notes                                      |
|-------------|---------------------|--------------------------------------------|
| H1          | `clamp(30px, 8vw, 88px)` | 30px minimum on 375px viewport       |
| H2          | `clamp(28px, 7vw, 58px)` | 28–30px on phones, never 36px+ min   |
| H3          | `clamp(22px, 5vw, 36px)` |                                      |
| Body        | 15–16px             | Exact, not responsive                      |
| Card body   | 13–14px             | Inside compressed card                     |
| Eyebrow     | 12–14px             | Always uppercase + letter-spacing          |

### Mobile Padding
```
Horizontal: px-[25px] lg:px-[70px]    (standard gutters)
Vertical:   py-[64px] lg:py-[120px]   (section spacing)
```

### Mobile Layout Patterns
- **2-col grids → 1-col on mobile**: `grid grid-cols-1 lg:grid-cols-2`
- **Side-by-side → stack on mobile**: `flex flex-col gap-[48px] lg:flex-row lg:gap-[80px]`
- **Carousel cards**: 320px wide on mobile (was 360–560px for desktop)
- **Images**: use `clamp()` for heights, never fixed tall values like `height: 460px`
- **CTA buttons on mobile**: `inline-flex` never `w-full`; max around 280px

### Full-Bleed Carousel Technique
```tsx
<div className="-mx-[25px] lg:-mx-[70px] overflow-hidden">
  <motion.div className="flex gap-[16px] px-[25px] lg:px-[70px]">
```

### Z-Index Stack
| Layer              | z-index  |
|--------------------|----------|
| Cookie banner      | z-[90]   |
| Disclaimer banner  | z-[100]  |
| Navbar bar         | z-[105]  |
| Mobile backdrop    | z-[110]  |
| Mobile menu panel  | z-[120]  |

Cookie banner shows AFTER disclaimer accepted. Events: `window.dispatchEvent(new Event("sympletax:disclaimer-accepted"))`.

### Body scroll lock for mobile menu
```tsx
useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "";
  return () => { document.body.style.overflow = ""; };
}, [isOpen]);
```

### Overflow prevention
```css
/* In index.css */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
```
