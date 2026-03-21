 FIGMA AI AGENT — Design System Extraction & Expansion Protocol
                                                                               
  You have been given three imported Figma pages: Home, About, and Processes.
  These are the canonical reference pages for this project. Your first job is  
  to deeply analyze every section and component on these pages, extract the
  complete design language, and produce four files. Your second job is to use  
  that design language to build new sections for a new project architecture —
  without defaulting to generic AI components.

  ---
  PHASE 1 — Deep Analysis
                                                                               
  Before writing a single file, read every frame, component, and layer on all
  three pages. You are looking for:                                            
                                                                  
  Typography                                                                   
  - Every font family in use. Note which one is the primary sans-serif, which
  is the display/accent serif (if any)                                         
  - Every font size used, at what breakpoint, and in what context (H1, H2, H3,
  body, caption, label, button)                                                
  - Font weights, letter spacing, line height — note the exact values, not     
  approximations                                                          
  - Any mixed-font patterns (e.g. a heading that uses serif italic for one word
   and sans-serif for the rest)                                   
                                                                               
  Color                                                           
  - Every fill color used across all components. Record the exact hex          
  - Assign a semantic role to each: primary action, background, text, border,  
  icon, card surface, dark section BG, etc.                                  
  - Note which colors appear together (e.g. which icon color lives on which    
  background color)                                                        
  - Note hover/active state colors if visible                                  
                                                                  
  Spacing & Layout                                                             
  - Padding inside cards and sections (top, right, bottom, left)  
  - Gap between elements inside a component                                    
  - Section vertical padding on desktop and mobile (if frames show both)
  - Max content width and horizontal gutters                                   
  - Grid column counts at different breakpoints                                
                                                                               
  Buttons & CTAs                                                               
  - Every button variant: primary, secondary, ghost, icon-only                 
  - Exact border radius, padding, gap between label and icon, font size, font  
  weight                                                                     
  - Icon circle style if used (size, background, icon color)                   
  - Hover state behavior                                          
                                                                               
  Components — catalog every one                                               
  For each component note:                                                     
  - Its name / function (hero, service card, FAQ item, CTA banner, stat block, 
  testimonial, etc.)                                                           
  - Its exact structure: what elements are inside it and in what order         
  - Its background color, border radius, shadow                                
  - Whether it contains an image and how the image is handled (aspect ratio,   
  overlay, object-fit)                                                      
  - Whether it appears in multiple places with variations                      
                                                                  
  Decorative Patterns                                                          
  - Any dot grids, gradient overlays, glow effects, background textures        
  - Their opacity, blend mode, and positioning rules                           
                                                                               
  Motion / Interaction hints                                                   
  - Any prototype connections or component states that suggest hover, expand,  
  or transition behavior                                                       
                                                                               
  ---                                                                          
  PHASE 2 — Produce These Four Files                              
                                                                               
  Once analysis is complete, produce all four files below. Do not skip sections
   or use placeholder values — every field must be filled with real values     
  extracted from the Figma pages.                                 
                                                                               
  ---                                                             
  File 1: DESIGN.md
                                                                               
  This is the primary design system reference. Structure it exactly as follows:
                                                                               
  # [Project Name] — Design System                                             
                                                                               
  ## 1. Visual Theme & Atmosphere                                              
  - 3–5 sentences describing the mood, aesthetic, density, and tone            
  - What feeling should the UI give the user?                                  
  - What should it never feel like?                                            
                                                                               
  ## 2. Color Palette & Roles                                                  
  Table with columns: Token Name | Hex | Semantic Role | Usage Rules           
  Include every color found. At least 8–12 entries.                            
                                                                               
  ## 3. Typography                                                             
  ### Font Families                                                            
  Table: Use | Family | Style | Notes                             
                                                                               
  ### Type Scale
  For each level (H1, H2, H3, H4, eyebrow, body, caption, button):             
  - Mobile size                                                                
  - Desktop size                                                               
  - Font weight                                                                
  - Line height                                                                
  - Letter spacing                                                
  - Font family
  - Any special rules (e.g. "last word always Playfair italic")                
                                                                               
  ## 4. Spacing System                                                         
  - Section vertical padding (mobile + desktop)                                
  - Section horizontal padding / gutters (mobile + desktop)                    
  - Card internal padding                                                      
  - Grid gaps                                                                  
  - Max content width                                                          
  - All values must be exact, not approximate                                  
                                                                               
  ## 5. Component Specifications                                               
  One entry per component. For each:                                           
  - Component name                                                             
  - Function / where it appears
  - Background, border radius, shadow                                          
  - Internal structure and element order                          
  - Typography used inside it                                                  
  - Image handling (if applicable)                                
  - Button/CTA inside it (if applicable)                                       
  - Variations (if any)                                                        
                                                                               
  ## 6. Decorative Patterns                                                    
  - List all background decorations with opacity, position, and usage context
                                                                               
  ## 7. Animation & Interaction                                   
  - Entry animation pattern (fade-up, fade-in, slide, etc.)                    
  - Trigger (scroll, page load, hover)                                         
  - Duration and easing                                                        
  - Button hover/tap behavior                                                  
                                                                               
  ## 8. Layout Principles                                         
  - Grid system                                                                
  - Breakpoints used                                              
  - Mobile stacking rules                                                      
  - Image height rules at different breakpoints
  - Section BG alternation pattern (if any)                                    
                                                                               
  ---                                                                          
  File 2: CLAUDE.md                                                            
                                                                               
  This is the instruction file for AI coding tools (Claude Code, Cursor,
  Copilot, etc.). It must be opinionated and specific. Structure:              
  
  # [Project Name] — AI Coding Reference                                       
                                                                               
  ## Context
  One paragraph: what this project is, what it does, who it's for.             
                                                                               
  ## Technical Stack                                                           
  List: framework, CSS system, animation library, icon library, router, fonts  
                                                                               
  ## Critical Constraints                                         
  Bullet list of HARD RULES the AI must follow. Examples:                      
  - Never change heading sizes without being asked                             
  - Always use self-start on CTA pill buttons to prevent mobile stretch        
  - Never use a generic component when an existing one can be adapted          
  - Always include mobile AND desktop size variants for every text element     
  - Section padding is always py-[Xpx] md:py-[Xpx] — never omit the mobile     
  value                                                                        
  - [Terminology rules specific to this project]                               
  - [Contact/brand details specific to this project]                           
                                                                  
  ## Typography Scale (Do Not Change)                                          
  Copy the type scale from DESIGN.md in Tailwind class format     
                                                                               
  ## Component Patterns                                           
  List the most-used component patterns with exact class strings. Focus on:    
  - CTA button pattern                                                         
  - Card pattern                                                               
  - Section wrapper pattern                                                    
  - Icon circle pattern                                                        
                                                                               
  ## Project Structure                                            
  - Where pages live                                                           
  - Where components live                                         
  - Where assets live
                                                                               
  ## Page Hierarchy
  Ordered list of all pages                                                    
                                                                  
  ---
  File 3: MEMORY.md (Index) + Memory Files
                                                                               
  Create a MEMORY.md index file and individual memory files for each topic
  below. Each memory file uses this format:                                    
                                                                  
  ---                                                                          
  name: [memory name]                                                          
  description: [one-line description]
  type: [user | feedback | project | reference]                                
  ---                                                                          
  
  [content]                                                                    
                                                                  
  Create these memory files:                                                   
  
  memory/project_design_system.md (type: project)                              
  - Full summary of the design system: colors, fonts, spacing, button patterns,
   card patterns, section rules                                                
  - Include the "Why" — what design decisions were made and what they achieve
                                                                               
  memory/project_components.md (type: project)                                 
  - Complete inventory of every component extracted from the three Figma pages 
  - For each: file path (once built), which pages use it, any reuse rules      
                                                                               
  memory/feedback_component_creation.md (type: feedback)                       
  - Rule: When building a new section, always check the component inventory    
  first                                                                        
  - Rule: If a matching component exists, adapt it — never build from scratch  
  - Rule: If no component matches, extract design language from the nearest    
  existing component and build a new one that is visually consistent — not a   
  generic AI default                                                           
  - Why: The design system was built to a non-AI quality standard. Generic AI  
  components break visual consistency.                                         
                                                                               
  MEMORY.md (index only — no content, only links):
  # Memory Index                                                               
                                                                  
  ## Design System                                                             
  - [project_design_system.md](memory/project_design_system.md) — Colors,
  fonts, spacing, buttons, cards                                               
                                                                               
  ## Component Inventory
  - [project_components.md](memory/project_components.md) — All components,    
  file paths, reuse rules                                                  
                                                                               
  ## Feedback & Rules
  - [feedback_component_creation.md](memory/feedback_component_creation.md) —  
  How to handle new vs existing components                        
                                                                               
  ---
  PHASE 3 — Expansion Protocol                                                 
                                                                               
  Once the four files are complete and confirmed, you will receive a new
  project architecture document. When that happens, follow this exact protocol:
                                                                  
  Step 1 — Map sections to existing components                                 
  Read the architecture. For every section or page in the new project, check
  the component inventory first. Ask: does any existing component satisfy this 
  need, even partially? If yes, use it. Adapt it if needed — change copy, swap
  an image, adjust grid columns — but preserve the design language.            
                                                                  
  Step 2 — Identify gaps                                                       
  List every section in the new architecture that has no matching component.
  These are new builds.                                                        
                                                                  
  Step 3 — Build new components correctly                                      
  For each gap:                                                   
  1. Identify the nearest existing component by function or visual weight (e.g.
   a new "Partners" section is closest to the testimonials grid)               
  2. Extract from that component: background color, border radius, card
  structure, typography sizes, spacing values, button style                    
  3. Build the new component using those exact extracted values                
  4. Do not use generic styles, default Tailwind classes, or your own aesthetic
   preferences                                                                 
  5. The new component must be visually indistinguishable in quality from the  
  existing ones                                                              
                                                                               
  Step 4 — Validate before delivering                             
  Before delivering any new component, check it against DESIGN.md:             
  - Does every text element use the correct font family and size?              
  - Does every color match a token from the palette?                           
  - Does every button follow the exact pill pattern?                           
  - Does the section use the correct vertical padding?                         
  - Does the section background follow the alternation pattern?                
  - Are there mobile size variants for every text element and image height?    
                                                                               
  If any check fails, fix it before delivering.                                
                                                                               
  ---                                                                          
  Quality Bar                                                                  
                                                                               
  The three imported pages represent the quality standard. Every new component
  must meet that bar. If you are uncertain whether a design decision is        
  consistent with the system, go back to the imported pages and find the answer
   there — do not invent it.     