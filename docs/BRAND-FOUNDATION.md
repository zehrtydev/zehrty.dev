# Zehrty Brand Foundation

## Decision governance

This document is the source of truth for the current Zehrty brand foundation.

| Status | Meaning |
| --- | --- |
| **Approved** | Authorized foundation. Use as written; do not silently modify it. |
| **Proposed** | A documented option for later human review. Do not implement as a replacement. |
| **Under review** | A decision is needed or validation is incomplete. |
| **Replaced** | No longer current; retain the record and link to the approved successor. |

Changing an **Approved** decision requires explicit human approval. Record the replacement and mark the former decision **Replaced**; do not rewrite history or quietly reinterpret values. Skill output and design exploration may generate **Proposed** alternatives but cannot approve them.

## Brand role — Approved

Zehrty is the public identity of Manuel Amado and the connective tissue across his software projects, professional presence, technical experiments, and ongoing growth. The brand supports the work; it does not pretend to be a separate company or allow style to eclipse substance.

## Positioning and factual narrative — Approved

**Primary positioning (Spanish source):**

> Soy desarrollador enfocado en inteligencia artificial y automatización. Construyo productos reales para resolver problemas concretos mientras sigo creciendo como ingeniero.

Zehrtydev is a developer focused on artificial intelligence and automation who builds real products to solve concrete problems while continuing to grow as an engineer. Preserve this meaning; do not substitute generic startup, agency, consultant, or unsupported senior-engineer positioning.

**Short bio (Spanish source):**

> Estudio Ingeniería de Sistemas en la UNAD mientras me formo en Programación e Inteligencia Artificial en Campuslands y continúo aprendiendo inglés. Trabajo como Auxiliar de Sistemas en Petrocasinos S.A. Me atraen los proyectos que me obligan a salir de lo conocido, investigar y aprender mientras construyo soluciones reales.

Do not infer seniority, years of experience, completed degrees, certifications, job responsibilities, or other professional claims from this source.

## Name and wordmark — Approved

- The visible V1 textual wordmark is **Zehrtydev**.
- Sora is its typographic foundation.
- It may function without a separate symbol.
- `Zehrty` may remain in conversational references to the person or public identity, but it must not replace `Zehrtydev` in the website's primary brand treatment.

A symbol, monogram, custom lettering, ligature, or logo redesign is not approved. Any future exploration of those elements remains **Proposed** until explicitly approved.

## Desired perception — Approved

Zehrty should feel:

- technically credible and product-minded;
- precise, modern, and intentionally composed;
- confident without posturing;
- premium without luxury clichés;
- experimental without being chaotic;
- industrial and aggressive in refined details, not in visual noise;
- personal and distinctive without becoming performative.

The experience should feel engineered rather than decorated.

## Personality — Approved

- **Confident, not arrogant:** state work and decisions clearly; let evidence carry the claim.
- **Technical, not impenetrable:** preserve useful depth while making the story understandable.
- **Direct, not cold:** use economical language with a human point of view.
- **Experimental, not gimmicky:** show curiosity through real investigation and outcomes.
- **Ambitious, not inflated:** communicate progress honestly and avoid invented authority.
- **Controlled, not sterile:** allow deliberate tension, asymmetry, and personality inside a disciplined system.

## Approved palette

| Role | Name | Value | Intended use |
| --- | --- | --- | --- |
| **Approved** | Deep Black | `#0B0B0D` | Dominant page background and deepest surface. |
| **Approved** | Graphite | `#16181C` | Elevated surfaces and primary dark separation. |
| **Approved** | Steel Gray | `#2B2F36` | Borders, dividers, secondary surfaces, and structural detail. |
| **Approved** | Cold White | `#F5F7FA` | Primary text and high-contrast foreground. |
| **Approved** | Performance Orange | `#FF6A00` | Primary accent, focus, emphasis, and selected calls to action. |
| **Approved** | Technical Light Gray | `#A9B0BA` | Secondary text and metadata, subject to contrast validation by context. |

### Palette usage rules — Approved

- V1 is dark-only; no light-mode toggle or parallel light theme belongs in V1.
- Dark tones dominate the experience.
- Performance Orange guides attention and indicates priority. It must not flood the interface or become a decorative wash.
- Use one accent language. Do not introduce competing brand accents.
- Preserve clear foreground/background contrast and test actual pairs at implementation time.
- Never rely on orange—or color alone—to communicate state or meaning.
- Use negative space and tonal separation before adding effects.
- Functional colors such as error, warning, success, or info are not yet brand colors. If the interface needs them, define accessible semantic roles as **Proposed** tokens and seek approval.
- Reviewed hover, active, focus, disabled, and opacity treatments are **Approved** in `DESIGN-SYSTEM.md`; any genuinely new state or overlay value must be raised separately as **Proposed**.

## Approved typography

| Status | Typeface | Role |
| --- | --- | --- |
| **Approved** | Sora | Branding, headings, major statements, and key visual text. |
| **Approved** | Inter | Body copy, descriptions, metadata, interface text, and technical information. |

### Typography usage rules — Approved

- Establish hierarchy through size, weight, measure, and spacing—not color alone.
- Keep body text readable at a 16px baseline or larger; reserve smaller text for limited metadata.
- Favor concise headings and comfortable body measures rather than edge-to-edge lines.
- Avoid thin weights for small text, long all-caps passages, and decorative distortion.
- The exact font scale, weights, line heights, tracking, and weights to load are **Approved** in `DESIGN-SYSTEM.md`.
- A monospace typeface is not approved. If a genuine technical-content need emerges, propose its role without displacing Sora or Inter.

## Visual principles — Approved

- Dark performance-tech.
- Stealth Performance.
- Industrial Aggressive, translated with sophistication and restraint.
- Premium, technical, precise, modern, minimal, controlled, confident.
- Strong typography and clear hierarchy.
- Deliberate negative space.
- Structured grids and rectangular modules.
- Restrained technical lines and overlays.
- Subtle diagonals and precise geometric cuts.
- Deliberate asymmetry only when it strengthens hierarchy or narrative.
- Motion and micro-interactions used sparingly and purposefully.

“Stealth Performance” and “Industrial Aggressive” describe a controlled design attitude, not literal themes. The site must not become a metallic poster, racing interface, sci-fi dashboard, or gaming UI.

### Selected visual direction — Approved

**Editorial Performance** is the dominant visual language: a typography-led, evidence-first technical editorial with controlled asymmetry and deliberate pacing. It is engineered with restraint by borrowing only these traits:

- from Engineered Grid: strict alignment discipline, clear technical diagrams, restrained metadata grammar, and precise workflow presentation;
- from Industrial Restraint: a very low effect budget, large uninterrupted dark fields, minimal shadows, scarce orange accent, and predominantly square geometry.

This is not a 33/33/33 hybrid. A concise description is: **“Editorial Performance, engineered with restraint.”**

## Shape and composition

### Approved

- Geometry should feel intentional, aligned, and structurally useful.
- Rectangular modules, grids, fine rules, subtle diagonals, and clipped details are compatible with the identity.
- Negative space is an active compositional element.
- Content evidence remains the focal point; decoration stays subordinate.
- Repetition should create rhythm and consistency, not texture for its own sake.

### Approved surface direction

- Deep Black is the dominant canvas; Graphite is reserved for meaningful grouped surfaces.
- Steel Gray provides restrained borders, rules, and structural separation.
- Geometry is predominantly square. Subtle clipped or diagonal details may appear selectively when they clarify composition.
- Elevation comes from tonal contrast, spacing, and hierarchy. Shadows are exceptional rather than standard.
- Surfaces exist only where content genuinely requires grouping; the site must not become a collection of floating SaaS cards.

### Remaining future decisions

- Icon family, stroke style, and size tokens.
- Whether a future symbol or monogram should be explored; no such mark is approved for V1.

The implementation-level spacing, content widths, borders, surface geometry, media treatment, diagram grammar, and `Zehrtydev` wordmark typography are **Approved** in `DESIGN-SYSTEM.md`.

## Tone and voice — Approved

Write with calm confidence, technical clarity, and specificity.

### Do

- Lead with the problem, decision, result, or lesson.
- Use concrete nouns and active verbs.
- Explain technical choices in terms of constraints and consequences.
- Be candid about current status and continued growth.
- Let personality appear through perspective and precision.
- Adjust depth to the audience without flattening the technical substance.

### Do not

- Use empty superlatives, hype, or claims such as “world-class” without evidence.
- Sound like generic startup copy, a résumé summary, or generated filler.
- List technologies without explaining their role.
- Fabricate metrics, testimonials, dates, responsibilities, or outcomes.
- Overuse hacker, automotive, military, or sci-fi metaphors.
- Describe experiments as finished products.

## Calls to action — Approved

- Primary: **“Explorar mi trabajo”**
- Secondary: **“Contactarme”**

Evidence and work take priority over contact. These Spanish CTA sources govern the primary version; English CTA copy must preserve their hierarchy and intent through natural adaptation.

## Navigation, motion, and language — Approved

- Desktop navigation is quietly sticky and text-first: `Zehrtydev | Trabajo | Sobre mí | Contacto | ES / EN`. It uses no heavy blur, glassmorphism, large shadow, or permanently orange Contact action. Mobile uses a conventional accessible menu when needed and keeps the language switch reachable.
- Motion is restrained and purposeful: subtle hover/focus feedback, short color/border/opacity transitions, very small useful movement, and potentially a restrained reveal for selected content. Parallax, kinetic typography, continuous ambient animation, theatrical page transitions, scroll hijacking, and large entrance choreography are excluded. Reduced motion removes nonessential movement without removing information or hierarchy.
- Spanish is primary; English is a complete secondary version at `/en` and `/en/projects/moni`, alongside Spanish `/` and `/projects/moni`. Spanish approved copy remains the source of truth, English is naturally adapted, and browser-language redirects are not used. No localization dependency is approved.

## Anti-patterns — Approved

- Generic purple/pink AI gradients.
- Cheap gamer aesthetics or RGB-heavy identity.
- Excessive neon, random glow, or competing accents.
- Excessive glassmorphism, metallic textures, or chrome effects.
- Decorative particles, Matrix/code-rain effects, or pervasive fake terminals.
- Meaningless skill progress bars or giant technology-logo collections.
- Excessive 3D, parallax, scroll effects, or entrance animations.
- Sci-fi ornament without a functional or narrative purpose.
- Template-like cards and sections assembled without a project-specific story.
- Any reference to private source work, source documents, or another brand.

## Approved decisions vs. proposals

The positioning, factual short bio, `Zehrtydev` wordmark, dark-only V1 theme, CTAs, palette, Sora/Inter roles, brand role, desired perception, personality, voice, Editorial Performance direction, split hero, navigation concept, Moni mini-case-study and media philosophy, surface philosophy, motion philosophy, bilingual strategy, and anti-patterns above are **Approved**.

The following implementation principles are **Approved** and specified in `DESIGN-SYSTEM.md`:

- Use a three-layer token architecture—primitive, semantic, then component—to prevent raw brand values from becoming ad hoc component choices.
- Define explicit tokens for focus, interactive states, surface hierarchy, type roles, motion, and media aspect ratios before implementation.
- Use low-cost, restrained effects and reserve space for media to protect performance and layout stability.
- Keep one visually dominant action per view and make all interaction states keyboard-visible.

These principles complement the approved foundation and remain unimplemented. The human review of their exact values and rules is complete; `DESIGN-SYSTEM.md` is the implementation-level visual source of truth.

The local UI/UX recommendation search also returned a green accent, different typefaces, an FAQ-led structure, and glow effects. These are **not proposed** because they conflict with approved decisions or the product purpose. They must not enter the design by implication.
