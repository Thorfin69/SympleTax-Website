---
name: feedback_component_creation
description: Rules and hard lessons from building SympleTax components — what works, what caused problems, what the user explicitly corrected
type: feedback
---

## Critical Rules

### 1. Two-Version Architecture — Never Cross-Contaminate
When working on v2 (`/home`), ONLY edit files in `components/v2/`. Never touch `components/*.tsx`.
**Why:** User has a production page at `/` and an experimental page at `/home`. Mixing them breaks both.
**How to apply:** Always check which route the user is referencing before editing. If v2, check that the file exists in `components/v2/`.

### 2. Accordion Never Closes
Use non-nullable `useState<string>("01")` — clicking an open item does nothing.
**Why:** UX decision — always show content, never leave the right panel empty.
**How to apply:** `onClick={() => setActiveId(item.id)}` not `setActiveId(isOpen ? null : item.id)`.

### 3. Active Tab Stays Dark (Not Teal)
In ProblemStatement, the active tab title color is `text-[#0f172a]`, NOT teal/accent.
**Why:** User explicitly rejected teal active state — "don't make Back Taxes & Penalties green on clicking."
**How to apply:** Only use teal for the dot indicator or line, never for the active title text.

### 4. CaseResultSpotlight — White Cards Only
All cards must be white. No dark alternating cards.
**Why:** User explicitly said "make sure that all the cards in real case study are only white, ditch the blue color cards."
**How to apply:** Never add conditional `idx % 2 !== 0` dark card styling in this component.

### 5. TwoTrackLayout Background — White
Section background stays white, not dark teal.
**Why:** User explicitly reverted after seeing dark teal version — "make this section background white, back to how it was."
**How to apply:** `bg-white` on the section element, eyebrow/H2 use dark colors.

### 6. Contact Form Left Column — No justify-between
Never use `justify-between` on the left column of HomeContactForm.
**Why:** Pushes contact icons to the very bottom of the column, creating massive dead space.
**How to apply:** Use `flex flex-col` (no justify), `items-stretch` on the outer flex container.

### 7. FAQ CTA Button — No Extra Top Padding
The "Speak with an agent" button in HomeFAQ must not have a `pt-8` wrapper div.
**Why:** Creates uneven spacing compared to the linear flow of the rest of the left column.
**How to apply:** Let the button be a direct child in `flex flex-col gap-[22px]`.

### 8. Accordion Design — Premium Numbered Style
The plus/minus circle button pattern looks cheap. Use:
- Large numbered step (28px bold, teal when active, slate-200 inactive)
- Rotating chevron (not circle +/-)
- Feature pills when expanded
- Subtle teal tint on active row
**Why:** User said "this tabs design currently looks a lot cheap."

### 9. Color — Exact Teal Value
v2 accent teal is `#00A4A4` exactly. Not `cyan-500`, not `#06b6d4`.
**Why:** User specified `00A4A4` as the project teal after rejecting the initial cyan-500 choice.
**How to apply:** Use `[#00A4A4]` arbitrary Tailwind values everywhere. Run `perl` replace after any agent work.

### 10. Parallel Agents for Mass Color Changes
When changing colors across 10+ components, spawn 4-5 parallel background agents.
**Why:** Dramatically faster — all components done in ~2 minutes instead of sequential editing.
**How to apply:** Group components into batches of 3-4, give each agent detailed per-component instructions.

### 11. Contact Items Must Be Clickable Links
Phone and email contact items in HomeContactForm must be `<a>` tags.
**Why:** User said "make the phone number, email ID on all those clickable, hoverable, at least some basic animation."
**How to apply:** `<a href="tel:+19492873015">` and `<a href="mailto:info@sympletax.com">`.

### 12. Never Change Layout When Asked to Change Colors
When given a color/vibrancy brief, ONLY change colors, shadows, overlays. Never touch flex direction, grid structure, spacing, font sizes.
**Why:** User's brief was explicit: "DO NOT change layouts, component structures, or section arrangements."

### 13. Section Headers — Paragraph on the Right
When a section header has a paragraph, it goes RIGHT side of the heading row, text-right, `shrink-0 max-w-[360px]`.
**Why:** Consistent two-column header pattern established across ProblemStatement, TwoTrackLayout, HowItWorks.
**How to apply:** `<div className="flex items-end justify-between gap-12">` with H2 left, p right.
