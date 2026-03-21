Here's the detailed prompt for your Cursor AI system:

---

# SYMPLETAX WEBSITE BUILD — INSTRUCTIONS FOR AI AGENT

## PHASE 1: DESIGN SYSTEM INGESTION (DO THIS FIRST)

You have been provided with a **FIGMA AI AGENT protocol document**. Your first job is to execute that protocol exactly as written:

1. **Deeply analyze the Figma reference pages** that contain the SympleTax design system
2. **Extract every design decision**: typography, colors, spacing, components, buttons, cards, layouts, decorative patterns
3. **Produce the four required files**: DESIGN.md, CLAUDE.md, MEMORY.md (index), and individual memory files
4. **Do not skip sections or use placeholder values** — every field must contain real extracted values from the Figma pages

Once you have completed this analysis and produced all four files, **confirm completion** and wait for the next instruction.

---

## PHASE 2: ARCHITECTURE UNDERSTANDING (DO THIS SECOND)

You will now receive the **SympleTax Home Page Architecture** in narrative paragraph format.

Your job at this stage is to **read and understand the architecture deeply**, but **DO NOT BUILD ANYTHING YET**.

### What to do:
1. **Read the entire architecture document**
2. **Identify every section** that needs to be built
3. **Map each section to the design system** you extracted in Phase 1:
   - Which existing components from the Figma pages can be reused?
   - Which sections require adaptation of existing components?
   - Which sections have no direct match and need new components?
4. **Create a component mapping document** that lists:
   - Section name (from architecture)
   - Existing component to use (from Figma analysis)
   - Adaptations needed (copy changes, layout tweaks, etc.)
   - New components required (if no match exists)

**DO NOT BUILD OR GENERATE CODE YET.** Just map and plan.

Once you have completed the mapping, **confirm completion** and present the mapping document for review.

---

## PHASE 3: DESIGN-FIRST BUILD (DO THIS THIRD)

Now you will build the SympleTax Home page. Follow this protocol exactly:

### CRITICAL RULE: DESIGN COMES FIRST, CONTENT ADAPTS

The architecture document describes **what content needs to be on the page**. Your job is to **fit that content into the existing design system** — NOT to create new designs to match the content.

### Build Protocol:

#### Step 1: Prioritize Existing Components
For every section in the architecture:
1. **Check your component inventory first** (from Phase 1)
2. **Use an existing component if one exists** — even if it requires content restructuring
3. **Adapt the content to fit the component**, not the other way around

**Example:**
- Architecture says: "Display 6 resolution programs and 5 tax problems in a two-column layout"
- Existing component: A service card grid that displays 4 items in 2 columns
- **Correct approach:** Restructure the content into two separate sections — one for resolution programs (6 cards, 3×2 grid) and one for tax problems (4 cards, 2×2 grid) — both using the same existing service card component
- **Wrong approach:** Creating a new custom two-column layout component

#### Step 2: Content Restructuring Rules
You are **authorized and encouraged** to:
- **Split sections** if it serves the design better (one architecture section → two visual sections)
- **Combine sections** if they share a component pattern
- **Reorder content** within a section to match the component structure
- **Adjust grid counts** (e.g., architecture says "3-4 tiles" → you can use 3 or 4 or 6, whatever matches an existing grid pattern)
- **Move content between sections** if it creates better visual flow

You are **NOT authorized** to:
- Create new component designs that don't match the extracted design system
- Use generic Tailwind classes or default spacing that differs from the design system
- Skip content from the architecture — everything must appear somewhere, just potentially reorganized

#### Step 3: When New Components Are Required
If no existing component matches a section's function:
1. **Find the nearest existing component** by visual weight, structure, or function
2. **Extract its exact design values**: background color, border radius, padding, typography, spacing, button style
3. **Build the new component using those extracted values exactly**
4. **Do not invent or approximate** — every color, size, and spacing value must come from the design system

**Example:**
- Architecture needs: "Case Result Spotlight — bento-style outcome cards showing tax owed → settled for → % saved"
- No exact match exists in the component inventory
- Nearest match: Testimonial card component (similar card structure, similar visual weight)
- **Correct approach:** Build the Case Result card using testimonial card's background color, border radius, padding, and typography scale — only changing the internal content structure
- **Wrong approach:** Creating a "bento-style" card with your own aesthetic choices

#### Step 4: Validate Before Delivering
Before marking any section as complete, check against DESIGN.md:
- ✅ Every text element uses the correct font family and size from the type scale
- ✅ Every color is a token from the extracted palette
- ✅ Every button follows the exact button pattern (border radius, padding, icon placement, hover state)
- ✅ Section padding matches the spacing system (mobile + desktop values)
- ✅ Section background follows the alternation pattern (if one exists)
- ✅ All images have proper aspect ratios and object-fit rules
- ✅ Mobile responsive variants exist for every breakpoint

If any check fails, **fix it before moving forward**.

---

## GOLDEN RULE: THE DESIGN SYSTEM IS LAW

The Figma pages you analyzed represent the **quality bar and aesthetic standard** for this project. Every component you build — whether reused, adapted, or new — must be **visually indistinguishable** in quality from the original Figma designs.

**If you are uncertain about any design decision:**
1. Go back to the Figma analysis (DESIGN.md, CLAUDE.md, component inventory)
2. Find the answer there
3. Do not invent, approximate, or use generic AI defaults

**Your job is not to design — your job is to implement the existing design system consistently.**

---

## FINAL DELIVERABLE

Once the Home page is complete:
1. **Present the full page for review**
2. **Highlight any sections** where you created new components (explain what you based them on)
3. **Highlight any sections** where you restructured content from the architecture (explain why)
4. **Confirm** that all validation checks passed

---

## SUMMARY OF PHASES

**Phase 1:** Analyze Figma → Extract design system → Produce DESIGN.md, CLAUDE.md, MEMORY.md  
**Phase 2:** Read architecture → Map sections to components → Create mapping document  
**Phase 3:** Build page → Prioritize existing components → Adapt content to fit design → Validate quality  

**Execute phases in order. Confirm completion of each phase before proceeding to the next.**