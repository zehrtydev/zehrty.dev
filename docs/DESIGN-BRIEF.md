# zehrty.dev Design Brief

## Purpose of this brief

This brief translates the approved brand foundation into experience objectives and constraints. It does not duplicate the final implementation values; `DESIGN-SYSTEM.md` is the implementation-level visual source of truth.

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

## Approved V1 framing

- **Positioning:** developer focused on artificial intelligence and automation, building real products for concrete problems while continuing to grow as an engineer. Preserve the approved Spanish source in `PROJECT.md` and `BRAND-FOUNDATION.md`.
- **Primary CTA:** “Explorar mi trabajo”.
- **Secondary CTA:** “Contactarme”. Evidence/work must remain visually prior to contact.
- **Theme:** dark-only. Do not propose a V1 light-mode toggle.
- **Wordmark:** visible textual treatment `Zehrtydev`, using Sora; no symbol is required.
- **Architecture:** hybrid. Homepage sections are Identity / Hero, Selected Work, About, Contact, and Footer. Moni has a dedicated case study at `/projects/moni`. A `/projects` index waits until project volume justifies it.
- **Contact:** GitHub and LinkedIn URLs remain pending; email is `soporte@zehrty.dev`. Do not invent links or add unapproved channels.
- **Language:** Spanish is primary and English is a complete secondary version. Approved routes are `/`, `/projects/moni`, `/en`, and `/en/projects/moni`; do not redirect by browser language. Spanish approved content is the source of truth, with natural professional adaptation for English.

## Approved art direction and composition

- **Primary direction:** Editorial Performance. Borrow only strict alignment, clear technical diagrams, restrained metadata, and precise workflows from Engineered Grid; borrow only the very low effect budget, uninterrupted dark fields, minimal shadows, scarce orange, and predominantly square geometry from Industrial Restraint. This is not an equal hybrid: **“Editorial Performance, engineered with restraint.”**
- **Hero:** the desktop composition is `7 / 1 / 4`: columns 1–7 carry the positioning and prioritized CTAs, column 8 is deliberate editorial separation, and columns 9–12 contain `FOCUS — IA / Automatización`, `CURRENT — Construyendo productos reales`, and `STATUS — Creciendo como ingeniero`; it is context, not telemetry.
- **Navigation:** quietly sticky, text-first desktop order `Zehrtydev | Trabajo | Sobre mí | Contacto | ES / EN`; conventional accessible mobile disclosure when necessary. The wordmark links home/top, the three labels target the matching homepage sections, and Moni has no extra permanent item.
- **Surfaces:** Deep Black canvas, Graphite only for meaningful grouping, restrained Steel Gray structure, predominantly square geometry, selective useful cuts, exceptional shadows, and no floating-card page construction.

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
- Validate at representative small-phone, tablet, laptop, wide-desktop, `200%` zoom, landscape, and the approved candidate breakpoint boundaries recorded in `DESIGN-SYSTEM.md`.

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

For Moni, use the verified narrative in `PROJECT.md`. The presentation must make the following legible:

- the expense-entry friction that led to WhatsApp-based capture;
- deterministic parsing before AI fallback;
- structured extraction followed by explicit user review and confirm, correct, or cancel paths;
- Manuel's end-to-end product design, architecture, and full-stack development, with AI-assisted development;
- the transition from personal tool to multi-user product and the edge cases that followed;
- the deployment journey from a local computer and Vercel testing to a production VPS;
- verified use of WhatsApp, Supabase, Resend, and a web dashboard;
- current production status, 6 real users close to Manuel, an operational core flow, dashboard access, and continued evolution;
- OCR receipt reading, custom categories, and feedback-led additions only as future ideas, never shipped features.

Do not present Moni as AI-only, imply automatic persistence without human confirmation, claim that AI built it, invent technologies, or project future user growth as an outcome. Avoid reducing it to a logo, screenshot, technology-chip collection, or vague marketing paragraph.

### Approved homepage treatment

Moni is a mini case study, not a generic portfolio card. The homepage must show the concrete problem, why WhatsApp reduces friction, a natural-language example such as `10000 en comida`, a simplified flow, Manuel's role, verified current status, and a clear continuation to `/projects/moni`.

Use authentic product media. The homepage target is at most one strong primary screenshot and one workflow diagram. Frames are clean and neutral; captions explain the evidence. Exclude exaggerated device mockups, 3D frames, glow, and glass. Protect private information in conversation captures. A clearly disclosed faithful demo may replace sensitive conversation media but must not be represented as an authentic user exchange.

The diagram sequence is: WhatsApp message → deterministic parsing → AI fallback if needed → structured interpretation → confirm / correct / cancel → registration. More approved media may appear in the case study.

## Motion philosophy

- Motion should explain cause and effect, reinforce hierarchy, or provide interaction feedback.
- Keep it restrained and concentrated on a small number of meaningful moments.
- Prefer transform and opacity when animation is justified; avoid layout-shifting properties.
- Keep interactions responsive, interruptible, and usable before animation completes.
- Reserve space for incoming media or content to avoid cumulative layout shift.
- Provide a reduced-motion treatment that removes nonessential movement rather than merely shortening it.

Approved motion is limited to subtle hover/focus feedback, short color/border/opacity transitions, very small useful movement, and a scarce optional selected-content reveal. Parallax, kinetic typography, ambient animation, theatrical page transitions, scroll hijacking, and large entrance choreography are excluded. Exact approved duration, easing, distance, and reduced-motion rules are recorded in `DESIGN-SYSTEM.md`.

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

## Design-system direction — Approved

The Approved primitive → semantic → needs-based component token model means:

1. Preserve approved palette values and font families as primitives.
2. Map them to reviewed roles such as canvas, surface, foreground, muted foreground, accent, border, and focus.
3. Define component-level tokens only after actual components and states are known.

This architecture is Approved but not implemented. It should prevent raw values from being scattered through components while avoiding premature token or component inventories. `DESIGN-SYSTEM.md` governs the exact implementation rules.

## Remaining future decisions and content inputs

The reviewed Design System choices no longer require approval. These separate future decisions and content inputs remain:

- Icon library and icon style; do not add one until a real need is established.
- Whether a future symbol or monogram should be explored remains optional and **Proposed**; it is not required for V1.
- GitHub and LinkedIn destination URLs, analytics, and any contact behavior beyond the approved email link.
- Which privacy-safe authentic Moni assets may be published and any public Moni destination.
- Whether future writing, experiments, or a career timeline belong in navigation.

## Design-phase status

The Design System has completed human review. All choices in `DESIGN-SYSTEM.md` are Approved, and there are no remaining Design System approval blockers before implementation. Remaining content gaps—especially publishable media, project destinations, and GitHub and LinkedIn URLs—must stay visible and must not be filled by invention.

If implementation discovers a genuinely new design decision, document it separately as **Proposed**, evaluate its accessibility and performance implications, and obtain human approval rather than silently changing the Approved system.
