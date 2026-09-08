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

- Dark tones dominate the experience; this is a dark-first identity.
- Performance Orange guides attention and indicates priority. It must not flood the interface or become a decorative wash.
- Use one accent language. Do not introduce competing brand accents.
- Preserve clear foreground/background contrast and test actual pairs at implementation time.
- Never rely on orange—or color alone—to communicate state or meaning.
- Use negative space and tonal separation before adding effects.
- Functional colors such as error, warning, success, or info are not yet brand colors. If the interface needs them, define accessible semantic roles as **Proposed** tokens and seek approval.
- Derived hover, active, focus, overlay, and opacity values are **Under review**. They must be documented and validated before becoming system tokens.

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
- Exact font scale, weights, line heights, tracking, loading strategy, and fallback stacks are **Under review**.
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

## Shape and composition

### Approved

- Geometry should feel intentional, aligned, and structurally useful.
- Rectangular modules, grids, fine rules, subtle diagonals, and clipped details are compatible with the identity.
- Negative space is an active compositional element.
- Content evidence remains the focal point; decoration stays subordinate.
- Repetition should create rhythm and consistency, not texture for its own sake.

### Under review

- Exact spacing scale and content widths.
- Border widths and opacity hierarchy.
- Radius strategy, including whether most surfaces remain square or lightly cut.
- Shadow and elevation strategy.
- Image treatment, crop behavior, overlays, and art direction.
- Icon family, stroke style, and size tokens.
- Final Zehrty wordmark or symbol and its usage rules.

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

The palette, Sora/Inter roles, brand role, desired perception, personality, voice, visual direction, and anti-patterns above are **Approved**.

Current **Proposed** implementation principles derived from the local design guidance are:

- Use a three-layer token architecture—primitive, semantic, then component—to prevent raw brand values from becoming ad hoc component choices.
- Define explicit tokens for focus, interactive states, surface hierarchy, type roles, motion, and media aspect ratios before implementation.
- Use low-cost, restrained effects and reserve space for media to protect performance and layout stability.
- Keep one visually dominant action per view and make all interaction states keyboard-visible.

These proposals complement the approved foundation but remain unimplemented. Exact token names and values require review during the design-system phase.

The local UI/UX recommendation search also returned a green accent, different typefaces, an FAQ-led structure, and glow effects. These are **not proposed** because they conflict with approved decisions or the product purpose. They must not enter the design by implication.
