# zehrty.dev Design Brief

## Purpose of this brief

This brief translates the approved brand foundation into objectives and constraints for a later website design phase. It does not define the final layout, component library, or motion system.

Read it with `PROJECT.md` and `BRAND-FOUNDATION.md`. Where an exploration conflicts with an **Approved** brand decision, preserve the approved decision and document the alternative as a proposal for human review.

## Experience goals

The eventual experience should:

- Make Zehrty's identity and current focus legible within the first meaningful view.
- Move visitors quickly from positioning to evidence of real work.
- Give Moni enough narrative space to demonstrate problem solving, product judgment, and engineering decisions.
- Balance technical depth with a clear path for non-specialist professional visitors.
- Feel distinctive through composition, typography, and restraint—not through novelty controls or spectacle.
- Remain fast, stable, and usable on constrained devices and networks.
- Support future projects without making V1 feel empty or overbuilt.

## Expected feeling

The approved emotional register is controlled intensity: dark, precise, confident, technical, premium, and quietly aggressive. Visitors should sense an engineered system with a human point of view.

The design may create tension with scale, asymmetry, cuts, grids, or dense-to-open rhythm, but should resolve that tension through clear hierarchy and generous space. It should never feel chaotic, theatrical, game-like, or hostile.

## Visual hierarchy

- Establish one unmistakable primary message per view or section.
- Prioritize identity, selected work, and project evidence over biography and technology lists.
- Use Sora for visual anchors and Inter for sustained reading and interface clarity.
- Use Performance Orange selectively for high-value attention and interaction—not as a substitute for scale, spacing, or contrast.
- Make project facts, constraints, decisions, and outcomes easy to scan while retaining a coherent narrative.
- Keep secondary metadata visibly subordinate but readable; validate Technical Light Gray against every surface where it appears.
- Maintain logical heading levels and align the DOM reading order with the visual order.

## Interaction philosophy

- Prefer familiar links, buttons, and navigation behavior over invented controls.
- Every interaction should have a clear purpose, visible affordance, keyboard access, and stable hover, focus, active, and disabled states where applicable.
- Do not rely on hover, color, gesture, or animation alone to reveal meaning.
- Preserve user control: avoid forced sequences, scroll hijacking, custom cursors that impair use, and interactions that delay access to content.
- Add client-side behavior only when it provides material value that semantic HTML and CSS cannot.
- Keep the dominant action clear; visually subordinate secondary paths.

## Responsive expectations

- Design mobile-first, then use larger canvases to improve composition rather than merely enlarge it.
- Preserve content priority and reading order across breakpoints.
- Ensure no horizontal overflow at small widths and no excessively long lines at large widths.
- Use adaptive gutters, readable text measures, and media behavior that avoids cropping essential information.
- Touch targets should be comfortably operable and separated; small visible icons may use larger hit areas.
- Strong desktop composition is required, including intentional use of negative space and asymmetry where justified.
- Validate at representative small-phone, tablet, laptop, and wide-desktop widths; exact breakpoint choices remain open.

## Accessibility requirements

Accessibility is a design input and release gate.

- Target WCAG 2.2 AA for applicable experiences.
- Use semantic landmarks and a sequential heading hierarchy.
- Support full keyboard navigation with clearly visible focus indicators that are not obscured.
- Give meaningful images useful text alternatives; hide purely decorative visuals from assistive technology.
- Give icon-only controls accessible names and expose relevant state.
- Meet at least 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful non-text UI boundaries and states.
- Do not use color alone for status, selection, or instruction.
- Maintain a readable body baseline, reflow at zoom, and robust wrapping for long links or technical identifiers.
- Respect `prefers-reduced-motion`; core content and state must remain understandable with motion removed.
- Never disable browser zoom or replace semantic controls with clickable generic containers.

## Project presentation

Project presentation should behave like evidence, not a gallery tile.

For Moni, explore a narrative that can accommodate:

- problem and user context;
- Zehrty's role and contribution;
- constraints and requirements;
- key product and engineering decisions;
- architecture or process only where it clarifies the story;
- verified outcomes, current status, and lessons;
- authentic screenshots, diagrams, or artifacts with captions and accessible alternatives.

Do not invent missing project data. Avoid reducing Moni to a logo, screenshot, technology-chip collection, or vague marketing paragraph. The exact case-study format and depth remain open until the source content and assets are approved.

## Motion philosophy

- Motion should explain cause and effect, reinforce hierarchy, or provide interaction feedback.
- Keep it restrained and concentrated on a small number of meaningful moments.
- Prefer transform and opacity when animation is justified; avoid layout-shifting properties.
- Keep interactions responsive, interruptible, and usable before animation completes.
- Reserve space for incoming media or content to avoid cumulative layout shift.
- Provide a reduced-motion treatment that removes nonessential movement rather than merely shortening it.

The exact durations, easings, distances, stagger rules, and page-transition approach are intentionally undecided.

## What UI UX Pro Max should help explore

During the visual design phase, use the local skill to compare and test—not automatically adopt—options for:

- portfolio information architecture and conversion paths grounded in the actual content;
- visual hierarchy for identity, work, decisions, and outcomes;
- mobile-to-desktop composition and content prioritization;
- accessible dark-surface contrast pairs and focus treatments using the approved palette;
- readable type scale and measures using Sora and Inter;
- semantic token roles built from the approved primitives;
- project-case-study patterns that avoid generic portfolio cards;
- restrained motion patterns and reduced-motion equivalents;
- Next.js-specific performance and layout-stability considerations;
- interaction and accessibility review before implementation.

Reject or isolate any generated recommendation that substitutes fonts, introduces competing accent colors, changes the approved tone, assumes unsupported content, or adds unnecessary dependencies.

## Design-system direction — Proposed

The local design skills recommend a primitive → semantic → component token model. For Zehrty, this would mean:

1. Preserve approved palette values and font families as primitives.
2. Map them to reviewed roles such as canvas, surface, foreground, muted foreground, accent, border, and focus.
3. Define component-level tokens only after actual components and states are known.

This architecture is **Proposed**, not implemented. It should prevent raw values from being scattered through components while avoiding premature token or component inventories.

## Intentionally undecided

The following require exploration and human approval before implementation:

- Exact homepage composition and opening message.
- Navigation treatment.
- Hero composition and primary call to action.
- Project-card or project-narrative system.
- Exact spacing and typography scales.
- Content width and breakpoint strategy.
- Border, divider, radius, shadow, and elevation strategy.
- Exact motion system and whether page transitions are warranted.
- Icon library and icon style; do not add one until a real need is established.
- One-page sections versus separate routes or a hybrid structure.
- Final Zehrty wordmark or symbol.
- Photography, screenshot, illustration, diagram, and texture direction.
- Light-theme support; the identity is dark-first, but the product requirement has not been decided.
- Contact method, social/profile destinations, and analytics.
- Moni's final content, assets, metrics, links, and case-study depth.
- Whether future writing, experiments, or a career timeline belong in navigation.

## Design-phase entry criteria

Before visual design begins, obtain human approval or verified source material for:

- Zehrty's final positioning statement and preferred biography details.
- Moni's accurate project narrative, role, status, outcomes, media, and public links.
- The desired primary visitor action and approved contact destinations.
- Any existing Zehrty logo/wordmark assets and whether they may be evolved.
- Whether the approved dark-first direction means dark-only for V1.
- Which candidate information architecture should be explored first.

Once these inputs exist, create alternatives inside the approved foundation, evaluate accessibility and performance implications, and record selected proposals as approved before implementation.
