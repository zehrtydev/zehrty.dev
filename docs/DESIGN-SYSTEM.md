# Zehrtydev Design System

## Status and decision boundary

This document is the implementation-level visual source of truth for Zehrtydev. It bridges the Approved art direction and future implementation and contains no production code.

- **Approved:** the foundation inherited from `PROJECT.md`, `BRAND-FOUNDATION.md`, `DESIGN-BRIEF.md`, and `DESIGN-EXPLORATION.md`, plus every exact implementation choice recorded in this document. The final human review for this design-system phase is complete.
- **Future proposals:** if implementation exposes a genuinely new design decision, record it separately as **Proposed** and obtain human approval rather than silently altering this system.

The governing direction is **Editorial Performance, engineered with restraint**. Editorial hierarchy and pacing remain dominant. Strict alignment, diagrams, metadata restraint, low effects, uninterrupted dark fields, scarce orange, and square geometry support that direction without turning it into a dashboard or an equal hybrid.

## Approved foundation

- Dark-only V1 using only Deep Black `#0B0B0D`, Graphite `#16181C`, Steel Gray `#2B2F36`, Cold White `#F5F7FA`, Performance Orange `#FF6A00`, and Technical Light Gray `#A9B0BA`.
- Sora for branding, headings, and major statements; Inter for body, navigation, metadata, captions, and technical information.
- Split hero, approved positioning, primary CTA “Explorar mi trabajo”, secondary CTA “Contactarme”, and the factual FOCUS / CURRENT / STATUS context.
- Quietly sticky, text-first navigation and conventional accessible mobile disclosure.
- Moni as a homepage mini case study with authentic media and a deeper `/projects/moni` narrative.
- Predominantly square, low-elevation surfaces with Graphite only for meaningful grouping.
- Restrained purposeful motion and an information-equivalent reduced-motion experience.
- Spanish-primary routes `/` and `/projects/moni`; complete English routes `/en` and `/en/projects/moni`; no browser-language redirect.

## 1. Layout — Approved

### Containers and editorial grid

| Token / role | Approved value | Purpose |
| --- | --- | --- |
| `page-max` | `1440px` | Absolute outer limit for large fields and header alignment. |
| `content-max` | `1280px` | Main editorial grid and homepage sections. |
| `media-max` | `1120px` | Case-study figures and workflow diagrams. |
| `reading-max` | `720px` / approximately `68ch` | Long-form narrative. |
| `compact-reading-max` | `600px` / approximately `58ch` | Introductory and supporting copy. |
| page gutters | `20px`, `32px`, `48px`, `64px` | Mobile, tablet, laptop, and wide desktop respectively. |

Use a four-column grid below `768px`, a six-column grid from `768px`, and a twelve-column grid from `1024px`. Approved column gaps are `16px`, `24px`, and `32px` at those same ranges. Content follows semantic DOM order; grid placement may create asymmetry but must never change reading or focus order.

### Key compositions

- **Hero:** at `1024px` and above, use an explicit `7 / 1 / 4` composition: the primary message occupies columns 1–7, column 8 is deliberate editorial separation, and the FOCUS / CURRENT / STATUS context occupies columns 9–12. The empty separation column is part of the premium editorial pacing. Keep both content fields aligned to one baseline system rather than boxing the context as a card.
- **Selected Work:** project introduction and evidence occupy a `5 / 7` split; the screenshot receives the wider span. The workflow diagram follows as a wide figure, not as a row of unrelated cards.
- **About:** section heading uses four columns and the narrative uses six to seven columns, leaving intentional open space.
- **Contact:** one strong reading column plus the actionable email; no promotional card shell.
- **Case study:** narrative alternates between `reading-max` prose and `media-max` evidence. Wide media may break the prose measure but not the `content-max` grid.

## 2. Responsive strategy — Approved

### Approved candidate breakpoints

Use the existing Tailwind-oriented thresholds unless content testing disproves them: `640px`, `768px`, `1024px`, `1280px`, and `1536px`. Most components should respond at no more than two or three thresholds; breakpoints serve content changes, not device labels.

- **Below `768px`:** one narrative column over the four-column page grid. Hero primary content comes first, contextual facts second. CTAs may stack only when their labels cannot retain comfortable targets side by side.
- **At `768px`:** increase gutters and allow selected two-column groupings, but preserve linear narrative flow.
- **At `1024px`:** enable the full split hero, twelve-column editorial asymmetry, and desktop navigation.
- **At `1280px` and above:** expand type and section intervals within their caps; do not simply stretch prose or media to the viewport.

The desktop navigation becomes a conventional menu control below `1024px` when the complete labels and language switch cannot fit without compression. The menu trigger and all destinations use at least a `44 × 44px` target. Opening, closing, Escape behavior, focus return, current-language indication, and keyboard order must remain explicit.

Editorial offsets collapse into DOM order rather than being horizontally scrolled. The Moni screenshot uses the full safe content width on small screens and preserves essential content without forced decorative cropping. The workflow diagram's vertical-to-horizontal transformation is content-driven, not forced at a viewport breakpoint. `1024px` is a candidate minimum for horizontal mode, but the diagram may become horizontal only when its effective available width preserves comfortable node and label readability. Otherwise it remains a vertical ordered sequence. It must never require sideways swiping or horizontal scrolling to understand the flow.

Validate at `320px`, `375px`, each approved candidate breakpoint boundary, landscape phone, `200%` zoom, and text reflow. Quietly sticky navigation must reserve its own space and use an equivalent `scroll-padding-top` so headings and focused elements are not obscured.

## 3. Spacing — Approved

Use a four-pixel foundation with a limited relational scale:

| Token | Value | Typical role |
| --- | --- | --- |
| `space-1` | `4px` | Fine inline separation only. |
| `space-2` | `8px` | Label/value or icon/text relationship. |
| `space-3` | `12px` | Compact control internals. |
| `space-4` | `16px` | Default small group gap. |
| `space-6` | `24px` | Component padding and paragraph groups. |
| `space-8` | `32px` | Major component groups. |
| `space-12` | `48px` | Subsection changes and mobile section padding. |
| `space-16` | `64px` | Section padding on compact screens. |
| `space-24` | `96px` | Standard desktop section interval. |
| `space-32` | `128px` | Major editorial chapter interval. |

Approved default vertical rhythm:

- section block padding: `64px` mobile, `96px` tablet/laptop, `128px` wide desktop;
- heading to lead: `24–32px`;
- lead to supporting evidence: `32–48px`;
- body paragraphs: `16px`;
- caption attachment to media: `12px`;
- unrelated groups inside one section: at least `48px`.

These section values are defaults, not forced heights. Hero and Footer may use purpose-specific combinations from the same approved scale when composition requires them. Choose the nearest existing token; a one-off value requires a documented optical or accessibility reason rather than convenience.

## 4. Typography — Approved

All values use only Sora and Inter. Responsive display sizes should use fluid interpolation capped at the listed mobile and desktop values; body and metadata remain stable to protect reading and translation.

| Role | Family | Mobile → desktop | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display statement | Sora | `48px → 76px` | `600` | approximately `0.98` | approximately `-0.03em` |
| H1 | Sora | `40px → 64px` | `600` | `1.04` | `-0.025em` |
| H2 | Sora | `32px → 48px` | `600` | `1.10` | `-0.02em` |
| H3 | Sora | `24px → 28px` | `600` | `1.20` | `-0.01em` |
| Lead body | Inter | `19px → 21px` | `400` | `1.55` | normal |
| Body | Inter | `17px → 18px` | `400` | `1.65` | normal |
| Small body | Inter | `15px → 16px` | `400` | `1.55` | normal |
| Navigation | Inter | `15px → 16px` | `500` | `1.25` | `0.01em` |
| Primary CTA | Inter | `15px → 16px` | `600` | `1.25` | `0.01em` |
| Secondary CTA | Inter | `15px → 16px` | `500` | `1.25` | `0.01em` |
| Metadata label | Inter | `13px` | `600` | `1.35` | `0.08em`, uppercase |
| Caption | Inter | `14px` | `400` | `1.5` | normal |
| Wordmark | Sora | `18px → 20px` | `600` | `1` | `-0.02em` |

Use Display only for the homepage's primary statement or a similarly singular case-study opening. In the hero, hierarchy may carry the approved positioning instead of rendering the complete positioning as one giant Display block: the preferred composition uses Display / Sora for the first sentence and Lead / Inter for the second. Do not change the approved wording merely to make typography fit.

Each page still has one semantic H1; visual roles do not authorize skipped heading levels. Keep prose between roughly `45–68ch`, do not justify it, and prefer natural wrapping over manual line breaks. Metadata is short, restrained uppercase; never set paragraphs in uppercase. Test Spanish and adapted English at every cap before locking fluid formulas.

Load only the approved weights actually used: Sora `600`; Inter `400`, `500`, and `600`. No monospace, serif, or alternate display face is introduced.

## 5. Semantic color roles — Approved

The primitive palette and the mappings below are Approved. No new brand or functional colors are introduced.

| Semantic role | Approved primitive | Usage |
| --- | --- | --- |
| Canvas | Deep Black | Page background and uninterrupted fields. |
| Surface | Graphite | Meaningful grouped evidence or media only. |
| Foreground | Cold White | Primary headings and body text. |
| Muted foreground | Technical Light Gray | Secondary copy, metadata, and captions. |
| Border subtle | Steel Gray | Decorative structure and nonessential separators. |
| Border strong | Technical Light Gray | Meaningful control boundaries when a `3:1` non-text contrast is required. |
| Accent | Performance Orange | Primary CTA, selected high-value emphasis, and limited key diagram state. |
| Accent foreground | Deep Black | Text/icons on orange. |
| Interactive text | Cold White | Standard links; underline or another non-color cue supplies affordance. |
| Focus | Performance Orange | External focus outline against dark fields. |
| Disabled foreground | Technical Light Gray at `50%` opacity | Only as a semantic disabled treatment, with native disabled semantics and a persistent non-color disabled cue. This is not a new general-purpose palette color. |

Measured palette pairs inform these mappings: Cold White on Deep Black is approximately `18.32:1`, Technical Light Gray on Deep Black `9.00:1`, Performance Orange on Deep Black `6.85:1`, and Deep Black on Performance Orange `6.85:1`. Cold White on Performance Orange is only approximately `2.68:1`, so it must not be used for normal CTA text. Steel Gray on either Deep Black or Graphite is suitable for subtle structure but not as the only meaningful control boundary.

There are no success, warning, error, or info roles in this static V1 scope. If a later feature genuinely needs them, propose accessible roles separately rather than repurposing orange or inventing colors silently.

## 6. Token architecture — Approved

Use a three-layer model: approved raw palette, type, spacing, and motion values as primitives; purpose-based roles as semantic tokens; and component tokens only for repeated components with demonstrated state or responsibility needs. Components should consume semantic or justified component tokens rather than raw values. Do not invent a large speculative component-token inventory before implementation establishes the need.

## 7. Surface rules — Approved

- Default sections remain on Deep Black with spacing and rules supplying structure.
- Graphite is justified for a cohesive screenshot frame, a bounded evidence group, or an interactive disclosure. It is not the default section background and never creates a repetitive bento grid.
- Standard borders are `1px`. Steel Gray is the subtle structural rule; Technical Light Gray is reserved for a meaningful high-contrast boundary where required.
- Default radius is `0px`. A selective `8px` diagonal corner cut may identify a high-value figure or transition. It is a scarce signature detail, not a repeated treatment for every card, media frame, or section. Do not simulate softness with rounded cards.
- Elevation uses canvas/surface contrast, overlap-free spacing, and hierarchy. Default shadow is `none`. A minimal shadow is acceptable only for a genuinely necessary temporary overlapping layer such as a mobile disclosure.
- Dividers span the alignment field they separate, not automatically edge to edge. Do not add rules where spacing already communicates the relationship.

## 8. Interaction states — Approved

All states preserve layout bounds and include a non-color cue where meaning changes.

- **Editorial / inline links:** default Cold White with an underline and/or directional affordance; hover changes to Performance Orange and/or increases underline prominence; active retains the non-color cue and reduces opacity to `80%` without shifting layout.
- **Primary navigation:** keep the default presentation visually clean; no permanent underline is required. Hover, focus, and current states may introduce a short underline or another restrained emphasis.
- **Primary CTA:** Performance Orange with Deep Black text and a square outline. Hover darkens no color outside the approved palette; use an inset Deep Black rule or other stable feedback. Up to `2px` direct-interaction movement is permitted but optional, and stability is preferred when border, color, or underline feedback is already sufficient. Active provides a clear pressed treatment.
- **Secondary CTA:** transparent with Cold White text and Steel Gray border; hover uses a Technical Light Gray border plus underline or arrow movement. It must remain visibly secondary.
- **Focus-visible:** `2px` Performance Orange outline with `3px` offset. Do not remove browser focus until this replacement is verified. Focus must remain visible against Canvas and Surface, and sticky UI must not obscure it.
- **Current / active navigation:** combine text such as the current language, increased weight, and a short underline; orange alone is insufficient.
- **Disabled:** use the semantic disabled attribute, remove pointer activation, retain the label, reduce emphasis, and expose disabled state to assistive technology. Do not publish disabled placeholders for pending GitHub or LinkedIn links.

Minimum target size is `44 × 44px`, with at least `8px` separation where adjacent actions could be mis-tapped. Hover never reveals information unavailable to touch or keyboard users.

## 9. Motion — Approved

| Category | Duration | Easing | Use |
| --- | --- | --- | --- |
| Immediate | `100ms` | `linear` | Pressed-state opacity only. |
| Fast | `160ms` | `cubic-bezier(0.2, 0, 0, 1)` | Color, border, underline, and focus-adjacent feedback. |
| Deliberate | `240ms` | `cubic-bezier(0.2, 0, 0, 1)` | Mobile menu disclosure or the optional selected-content reveal. |

Transitions are limited to color, background-color, border-color, opacity, and transform. Do not animate layout properties. Small movement is capped at `2px` for direct interaction and `4px` for an optional reveal.

Do not use continuous animation, stagger choreography, or theatrical page transitions.

The selected-content reveal is Approved but optional and scarce. Use it only for selected high-value evidence, such as one key Moni screenshot or one workflow diagram; do not reveal every section. It begins no more than `4px` displaced with reduced opacity and resolves within `240ms` without stagger choreography. Content must be structurally present and readable without animation or JavaScript; it must never remain hidden awaiting animation.

With `prefers-reduced-motion: reduce`, remove transforms, reveals, menu travel, and smooth scrolling. Preserve immediate state changes, focus visibility, open/closed state, content order, and all information.

## 10. Media — Approved

- **Homepage screenshot:** reserve a `16:10` container for a dashboard-oriented image. If the approved primary image is conversation-oriented, use its intrinsic portrait ratio rather than cropping it into `16:10`; the final ratio follows the evidence, not decoration.
- **Conversation / mobile evidence:** preserve its portrait or intrinsic ratio rather than forcing it into a landscape family.
- **Case-study screenshots:** allow `16:10` landscape and `9:16` portrait families, each with declared intrinsic dimensions. Do not mix ratios within one comparison group without a narrative reason.
- **Frames:** `1px` Steel Gray rule, Graphite backing only when separation is required, `0px` radius, and no device chrome, 3D perspective, glow, or glass.
- **Captions:** sit `12px` below the figure, use the caption role, identify what the image proves, and disclose faithful demo media. Captions do not repeat alt text.
- **Privacy:** crop, redact, or recreate sensitive WhatsApp content before publication. A demo uses realistic but nonpersonal data and is explicitly labeled `Representación de demostración` or the naturally adapted English equivalent.
- **Diagram grammar:** labeled rectangular nodes, one-direction connectors, one controlled branch for AI fallback, and a clear return to structured interpretation. Orange marks at most the decision/fallback emphasis; node labels, sequence, connectors, and text alternatives carry meaning without color.
- **Responsive behavior:** use a vertical ordered diagram until effective available width—not viewport width alone—preserves comfortable node and label readability. `1024px` is only a candidate minimum for horizontal mode, never a forced switch. Provide an adjacent or semantic text sequence with equivalent information. Never make the diagram swipe-only.

All media reserves dimensions before load. Meaningful images receive contextual alt text; decorative frame details are hidden from assistive technology.

## 11. Homepage section specification — Approved

The Approved order is Header → Hero → Selected Work / Moni → About → Contact → Footer. Narrative and visual priority broadly follow Hero → Moni → About → Contact → Footer; About and Contact remain deliberately quieter. Do not add a Skills section, technology-logo wall, Services section, testimonials, FAQ, résumé timeline, decorative statistics, or empty project carousel. The site demonstrates real work before expanding personal context.

### Header

A slim header aligns to `content-max` and remains quietly sticky. The visible `Zehrtydev` wordmark links to the current-language homepage/top. Desktop order is Trabajo, Sobre mí, Contacto, then ES / EN. The current language is marked textually and visually. The background remains Deep Black or an opaque Graphite grouping only when scrolling makes separation necessary; no blur or shadow is standard. Mobile replaces the link group with one conventional labeled menu control while keeping language access inside the disclosed menu or alongside the trigger.

### Hero

The primary field contains a restrained eyebrow only if it adds verified orientation, the approved positioning as the single dominant statement, then the two CTAs in priority order. Its preferred type composition uses the first positioning sentence as Display / Sora and the second as Lead / Inter without changing the wording. At desktop width, the primary field uses columns 1–7, column 8 remains deliberate editorial separation, and the secondary field uses columns 9–12. The secondary field contains exactly the approved FOCUS, CURRENT, and STATUS context, separated by spacing or rules rather than card shells. The section fills a substantial first view but does not force critical content below an artificial viewport height.

### Selected Work / Moni

Open with the section label and Moni title, then a concise problem statement: conventional expense capture is tedious and easy to abandon. Show `10000 en comida` as a concrete input and explain that WhatsApp reduces friction because it is already part of daily behavior. Pair this narrative with one approved authentic screenshot and a proof-oriented caption.

Follow with the simplified workflow diagram: message → deterministic parsing → AI fallback if needed → structured interpretation → confirm / correct / cancel → registration. State Manuel's end-to-end product design, architecture, and full-stack development with AI-assisted development. Close with verified status—production, six real users close to Manuel, operational core flow, dashboard access, continuing evolution—and a clear link to `/projects/moni`. Present status as prose/evidence, not KPI telemetry.

### About

Use the Approved Spanish bio as the source. Lead with one human narrative column; a restrained supporting grouping may clarify current study, training, English learning, and Auxiliar de Sistemas role without turning them into badges, skills, or a résumé timeline. Connect learning to the practice of building real solutions without adding claims.

### Contact

Close with a concise invitation and the actionable `soporte@zehrty.dev` mail link. Do not render unavailable GitHub or LinkedIn destinations. Contact remains quieter than Selected Work and does not become a permanent orange conversion panel.

### Footer

Use a compact structural rule, the textual wordmark or plain ownership line, current year, language counterpart link, and only verified public destinations. Do not add a symbol, slogan, status telemetry, or decorative terminal treatment.

## 12. Moni case-study page specification — Approved

Preserve all twelve approved narrative pieces, but compose them as approximately five or six larger editorial chapters rather than twelve visually equivalent sections:

1. **What Moni is:** combine the opening, the friction, and why WhatsApp reduces that barrier. Include the Moni name, concise product definition, verified production status, Manuel's role, and one approved primary image; avoid invented launch dates or metrics.
2. **How it works:** combine message-to-structured-data, deterministic parsing, AI fallback, and confirmation / correction / cancellation. Use `10000 en comida` to explain amount, type, category, and date extraction; show deterministic parsing before the controlled AI fallback and make non-persistence before confirmation explicit.
3. **The real product:** show approved dashboard and conversation/product evidence with proof-oriented captions, protect personal data, disclose demo representations, and state the current verified status: production, six real users close to Manuel, operational core transaction flow, dashboard access, and ongoing evolution.
4. **Building it:** cover Manuel's product design, architecture, and full-stack implementation; AI tools as support for research, programming, review, debugging, and acceleration; and the transition from a personal tool to a multi-user product whose friends-and-family use exposed new edge cases.
5. **Making it operational:** trace local operation, Vercel testing, and the move to a production VPS; cover learning in Linux, VPS administration, domains, deployment, Supabase, and Resend without inventing technical details.
6. **What I learned / what comes next:** cover evolution and lessons; clearly label OCR from receipt photos, custom categories, and feedback-led additions as **Proposed future ideas**, not shipped capabilities; then provide the approved continuation to Selected Work/home and Contact. Include a public Moni destination only when verified and supplied.

This grouping is compositional, not a rewrite of verified facts. Long-form prose stays within `reading-max`; figures expand to `media-max`. Each chapter begins with a clear heading and, where useful, one restrained metadata label. Do not create repeated cards or equivalent visual weight for every narrative piece.

The English route `/en/projects/moni` mirrors the same facts and sequence while adapting phrasing naturally.

## 13. Bilingual route and content architecture — Approved

Use explicit static route trees matching the Approved URLs rather than a dynamic locale segment, middleware negotiation, or browser-language redirect:

| Spanish source route | English counterpart |
| --- | --- |
| `/` | `/en` |
| `/projects/moni` | `/en/projects/moni` |

Keep shared presentational Server Components language-neutral and pass them complete page content from two small, typed, local content modules: Spanish source content and professionally adapted English content. Each language module owns labels, navigation, metadata, alt text, captions, and page copy so fragments are not assembled through runtime string lookup. This keeps all four routes statically renderable and avoids a localization dependency for V1.

Each page emits:

- a self-referencing canonical URL;
- reciprocal `hreflang="es"` and `hreflang="en"` alternates plus a deliberate `x-default` pointing to Spanish `/` or its matching Spanish page;
- the `lang` value appropriate to the rendered document;
- a visible ES / EN counterpart link that preserves page context (`/projects/moni` ↔ `/en/projects/moni`);
- independently adapted title, description, Open Graph text, captions, and alternative text.

Every route must emit the correct document language in the initial server-rendered or static HTML: Spanish pages use `<html lang="es">`, and English pages use `<html lang="en">`. Do not rely on client-side JavaScript to mutate the document language. The exact route/layout technique may be selected during implementation only if static rendering remains viable, the approved URLs remain unchanged, the initial language is correct, and no localization middleware or dependency is introduced solely for this purpose.

Do not infer locale from the browser, add middleware solely for language, or install an i18n package. Reconsider a dependency only if future route volume, pluralization, formatting, or translation workflows create demonstrated complexity.

## Human approval record — Complete

- [x] Layout containers, gutters, responsive editorial grid, `7 / 1 / 4` desktop hero, Selected Work spans, open-space treatment, and prose/media measures are Approved.
- [x] Candidate breakpoints, mobile-first reflow, desktop navigation threshold, accessibility testing, and content-driven workflow-diagram transformation are Approved.
- [x] Spacing scale, default section rhythm, relational gaps, and purpose-specific Hero/Footer use of the same scale are Approved.
- [x] Sora/Inter roles, exact hierarchy, `76px` Display cap, loaded weights, measures, semantics, and two-level hero type composition are Approved.
- [x] Semantic palette mappings, Deep Black on Performance Orange, meaningful strong boundaries, and disabled-only Technical Light Gray at `50%` opacity are Approved.
- [x] Primitive → semantic → needs-based component token architecture is Approved.
- [x] `1px` borders, `0px` default radius, scarce selective `8px` cuts, meaningful Graphite surfaces, and no-shadow default are Approved.
- [x] Hover, focus-visible, active, disabled, navigation/link distinctions, target sizes, and optional direct-interaction movement are Approved.
- [x] `100 / 160 / 240ms` motion tokens, easing, movement caps, scarce optional selected-content reveal, and reduced-motion behavior are Approved.
- [x] Screenshot ratio families, frame/caption rules, demo disclosure label, privacy treatment, and content-driven responsive diagram grammar are Approved.
- [x] Homepage hierarchy and composition are Approved.
- [x] All twelve Moni narrative pieces, grouped into approximately five or six editorial chapters, are Approved.
- [x] Explicit four-route, typed local-content, static-first bilingual architecture, canonical / `hreflang` behavior, and correct initial document language are Approved.

There are no remaining Design System approval blockers before implementation. New decisions discovered during implementation must be raised separately as **Proposed** rather than changing this Approved system by implication.
