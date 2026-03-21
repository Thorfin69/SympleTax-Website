# SympleTax — Development Guidelines

## Core Rules

### 1. Two-Version System
- **`/`** uses components from `src/app/components/`
- **`/home`** uses components from `src/app/components/v2/`
- When making v2 changes, ALWAYS create/edit files in `components/v2/` — never touch `components/` originals
- Import paths in v2 files: `../figma/ImageWithFallback` (one level up from v2/)

### 2. Typography — Non-Negotiable
- **Inter ONLY** — `font-['Inter']`
- Never use: `text-xl`, `text-2xl`, `text-4xl`, etc. Always explicit px: `text-[16px]`
- H2 standard: `font-bold leading-[1.08]` + `letterSpacing: "-1.5px"` in style
- Body standard: `font-normal leading-[1.65]` + `fontSize: "16px", letterSpacing: "-0.3px"` in style
- ALL H2 headings: Title Case

### 3. Spacing
- Section padding: `py-[120px]`
- Container: `max-w-[1330px] mx-auto px-[70px]`
- All gaps/paddings in explicit px, never Tailwind named spacing for design-critical values

### 4. Color Discipline
- v2 accent teal: `#00A4A4` (exact — user-specified)
- Never use `cyan-500` or other Tailwind cyan classes in v2 — use `[#00A4A4]` arbitrary values
- No mid-tone gray backgrounds — only white, `#f9fafb`, or dark (`#0f172a`, `#020617`)

### 5. Images
- Always `ImageWithFallback` from `./figma/ImageWithFallback` (or `../figma/` in v2)
- Never raw `<img>` tags

### 6. Animations
- Entry: `initial={{ opacity: 0, y: 20 }}` + `whileInView={{ opacity: 1, y: 0 }}` + `viewport={{ once: true }}`
- Crossfade: `AnimatePresence mode="wait"` + `key={activeId}` on single `<motion.div>`
- Accordion: `AnimatePresence initial={false}` + `motion.div` with `height: 0 → auto`

---

## Component Creation Rules

### Before Building New Components
1. Check `memory/project_components.md` inventory first
2. Adapt existing components before writing new ones
3. Extract design DNA from nearest functional equivalent

### Design DNA Extraction
When creating new sections, copy these from the nearest existing component:
- Background color pattern (white / light / dark)
- Section padding (`py-[120px]`)
- Container width (`max-w-[1330px] mx-auto px-[70px]`)
- Eyebrow pattern (line + uppercase label)
- H2 pattern (font-bold, leading-[1.08], letterSpacing -1.5px)
- Body text pattern (leading-[1.65], fontSize 16px, letterSpacing -0.3px)
- Button style (gradient + glow shadow + rounded-full)
- Animation entry pattern

### Final Validation Checklist
Before submitting any component:
- [ ] Uses `font-['Inter']` exclusively?
- [ ] Section padding is `py-[120px]`?
- [ ] Container is `max-w-[1330px] mx-auto px-[70px]`?
- [ ] H2 uses `font-bold leading-[1.08]` + `-1.5px` letterSpacing?
- [ ] Body uses `leading-[1.65]` + `16px` + `-0.3px` letterSpacing?
- [ ] H2 heading is Title Case?
- [ ] All images use `ImageWithFallback`?
- [ ] If v2: all colors use `#00A4A4` (not `cyan-500`)?
- [ ] If v2: file is in `components/v2/` not `components/`?

---

## Common Pitfalls (Lessons Learned)

### Accordions
- Non-nullable `useState<string>("01")` — accordion never fully closes
- `onClick={() => setActiveId(item.id)}` — no toggle
- Active item indicator: large step number (teal) + rotating chevron (NOT plus/minus circles)
- Show feature pills in expanded content

### Contact Form Left Column
- Use `items-stretch` on outer flex (NOT `items-start`)
- Use `flex flex-col` on left column (NOT `justify-between` — pushes icons to bottom)
- Contact items with phone/email: use `<a href="tel:...">` and `<a href="mailto:...">`

### FAQ Section CTA Button
- Button wrapper should NOT have `pt-8` — use normal gap flow from parent `flex flex-col gap-[22px]`

### Section Headers
- Paragraph in header row goes on the RIGHT side, text-right, `shrink-0 max-w-[360px]`
- Header row uses `flex items-end justify-between gap-12`

### Card Heights
- Use `items-stretch` on flex containers for equal-height cards
- Use `flex flex-col flex-1 justify-between` inside cards for consistent bottom CTAs

### TwoTrackLayout
- Section background stays **white** (user explicitly reverted from dark teal)

### CaseResultSpotlight
- All cards **white only** — no dark alternating cards

### Parallel Sub-Agents
- When making color/style changes across 10+ components simultaneously, use 4-5 parallel sub-agents
- Each agent handles a batch of 3-4 components: reads source, writes v2 copy, applies changes
- After all agents complete, update the page file to import from the new location

---

## Architecture Gaps (Pending Items)

Based on the architecture spec vs current implementation:

| Gap | Status |
|-----|--------|
| HowItWorks: should be 3 steps (Free Consultation → Custom Strategy → Resolution) | Currently 4 steps with different names |
| ProblemStatement header: should be "Tax problems don't go away on their own." | Currently "Expert Guidance, Proven Results" |
| Solutions tiles: should link to `/solutions/[service]` | Currently all link to generic `/services` |
| ResultsNumbers: should mention "Fastest Growing Tax Relief Company" | Not implemented |
| FinalCTA headline: should be "Stop Dealing with the IRS Alone." | Currently "Take Control of Your Financial Future Today" |
| Footer legal links (Privacy, Terms, Disclaimer) | All point to `#` — pages not built |
| Footer social links | All point to `#` — not connected |
| OG image meta tag | Not implemented |
