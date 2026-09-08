# Zehrtydev Visual Design Exploration

## Status and purpose

This document compares three **Proposed** visual and compositional directions for Zehrtydev. They are not separate brands, final designs, implementation specifications, or approval records. No direction or newly described design choice becomes **Approved** until the human owner selects it.

The exploration applies the local brand, design-system, UI-styling, and UI/UX guidance as advisory input. Existing Approved decisions remain authoritative whenever generic guidance conflicts.

## Shared Approved foundation

Every direction preserves:

- dark-only V1;
- Deep Black `#0B0B0D`, Graphite `#16181C`, Steel Gray `#2B2F36`, Cold White `#F5F7FA`, Performance Orange `#FF6A00`, and Technical Light Gray `#A9B0BA`;
- Sora for branding and display roles, with Inter for body, interface, metadata, and technical information;
- dark performance-tech, Stealth Performance, and restrained Industrial Aggressive character;
- a premium, precise, controlled experience that feels engineered rather than decorated;
- the visible `Zehrtydev` typographic wordmark;
- the approved positioning, factual bio, primary CTA “Explorar mi trabajo”, and secondary CTA “Contactarme”;
- evidence before contact;
- the hybrid architecture: homepage Identity / Hero, Selected Work, About, Contact, Footer, plus `/projects/moni`;
- Moni as the primary V1 project and the verified facts recorded in `PROJECT.md`;
- semantic structure, logical reading order, keyboard operation, visible focus, WCAG 2.2 AA contrast, useful alternatives, non-color cues, mobile-first reflow, and reduced-motion support;
- static-first delivery, minimal client JavaScript, reserved media dimensions, and restrained effects.

Exact scales, values, states, and component decisions not already Approved remain **Proposed** or **Under review**. The directions deliberately describe systems and ranges rather than arbitrary token values.

## Direction A — Editorial Performance

### 1. Core idea

A typography-led, premium technical editorial in which each section feels like a carefully paced feature rather than a portfolio template. Large Sora statements, controlled asymmetry, disciplined captions, and alternating open and evidence-dense passages create momentum without spectacle.

### 2. Why it fits Zehrtydev

The approach lets the approved positioning lead, then proves it through Moni's problem, decisions, operating status, and learning. Editorial hierarchy supports a personal point of view while the dark palette, precise alignment, and technical annotations preserve the engineered character.

### 3. Homepage composition

The page begins with a spacious identity field, transitions quickly into an oversized Moni feature, then narrows into the factual About narrative and a concise Contact close. Sections can alternate between wide statements and bounded reading columns, using asymmetry to mark changes in narrative mode. Selected Work receives substantially more visual territory than About or Contact.

### 4. Hero concept

The approved positioning acts as the primary visual object, with `Zehrtydev` clearly present in the header and a restrained focus descriptor nearby. The two CTAs sit after the positioning, with “Explorar mi trabajo” unmistakably dominant and “Contactarme” quieter. A small, factual orientation line may indicate AI, automation, and current growth, but it must not repeat or inflate the statement.

### 5. Navigation concept

A slim, text-first top navigation pairs the wordmark with homepage anchors and a direct route to Moni. It may be statically positioned or modestly sticky; either behavior is **Proposed**. Labels remain explicit, and a compact mobile disclosure replaces any attempt to compress the full desktop composition.

### 6. Selected Work / Moni presentation

Moni appears as a technical editorial feature rather than a card. The homepage preview leads with the concrete problem, shows the WhatsApp-to-structured-data flow, states Manuel's role, and surfaces verified status as supporting evidence. A clear link continues to `/projects/moni`, where the story can unfold in chapters: friction, product concept, parsing and confirmation, multi-user evolution, deployment learning, current status, and future ideas visibly marked as unshipped.

### 7. About treatment

The approved short bio uses a comfortable reading measure and may be split into a primary narrative and a narrow context column for current study, training, English learning, and role. The visual treatment must not turn those facts into badges, résumé chronology, or implied credentials.

### 8. Contact treatment

Contact is a decisive but quiet closing passage. Email is actionable; GitHub and LinkedIn remain visibly absent or withheld until real URLs are supplied rather than rendered as fake or disabled destinations. The hierarchy preserves “Contactarme” as secondary to work exploration.

### 9. Grid and spacing philosophy

Use a stable underlying grid with editorial spans that vary by narrative purpose. Large section intervals, narrow text measures, and deliberate blank columns create rhythm. Asymmetry must remain optically balanced and collapse to the DOM reading order on small screens.

### 10. Surface / border / radius philosophy

Prefer page fields and sectional rules over a stack of cards. Graphite surfaces appear only when they group genuine evidence or media. Borders are fine and structural; radii are square or subtly clipped rather than soft and friendly. The exact radius and border hierarchy remain **Proposed**.

### 11. Typography behavior using Sora + Inter

Sora carries the wordmark, primary statement, section openings, and selected pull facts. Inter handles the longer project narrative, captions, metadata, and navigation. Scale contrast is expressive, but line lengths and natural wrapping take priority over forced headline composition. No serif or monospace substitute is introduced.

### 12. Performance Orange usage

Orange marks the primary CTA, focus treatment, selected links, and at most a small number of pivotal project facts or rules. It does not become a full hero wash, gradient, or repeated label color. Importance must remain legible without color.

### 13. Image / screenshot / diagram treatment

Authentic screenshots may be given large, editorial placements with captions that explain what each image proves. The parsing and confirmation workflow is a strong candidate for one restrained diagram. Media should use consistent framing and reserved aspect ratios; decorative stock imagery and unsupported mockups are excluded.

### 14. Motion philosophy

Motion is limited to interaction feedback and, if approved, one or two gentle hierarchy cues per view. No page-flip, parallax, split-letter, or scroll-choreography treatment is carried forward from generic editorial guidance. Reduced motion presents the same hierarchy immediately with no missing information.

### 15. Mobile adaptation

The desktop asymmetry becomes a single, well-paced narrative column. Oversized type scales down before it creates awkward fragments, media captions remain attached to their evidence, and technical annotations move after the content they qualify. CTAs remain comfortably operable and do not become a persistent obstruction.

### 16. Accessibility implications

The semantic reading order must be designed first so visual offsets never confuse keyboard or screen-reader navigation. Large headlines help hierarchy, but secondary captions and Technical Light Gray require contrast validation. Editorial multi-column body copy should not be used where it would disrupt reading or zoom reflow.

### 17. Performance implications

The direction is inherently light if it uses native typography, CSS grid, simple rules, and optimized media. Its main risks are oversized above-the-fold imagery, too many font weights, and scroll animation. Media dimensions, selective font loading, and static presentation keep those risks low.

### 18. Main strengths

- Strongest personal voice and narrative pacing.
- Makes Moni feel substantial without manufacturing scale.
- Distinctive through hierarchy and composition rather than effects.
- Handles the learning-through-building story naturally.

### 19. Main risks

- Asymmetry can harm scanability if it becomes composition for its own sake.
- Oversized type may crowd Spanish copy or future translations.
- Editorial styling could feel like a design magazine instead of an engineering record if evidence becomes secondary.

### 20. What would make this direction feel generic or off-brand

Generic masonry portfolios, fashion-editorial emptiness, serif substitution, obligatory pull quotes, large decorative photography, animated typography, or treating every section as a poster would break the fit. The project cannot become a sequence of dramatic headlines with little proof.

### 21. Under review decisions this direction would require us to approve

- The exact hero arrangement and degree of asymmetry.
- Static versus modestly sticky navigation.
- The chapter model and homepage depth of the Moni feature.
- Type scale, measures, spacing rhythm, and breakpoint behavior.
- Mostly square versus subtly clipped surfaces.
- Screenshot framing, diagram style, and approved media inventory.
- Minimal motion level and its reduced-motion equivalent.
- Final website language strategy.

## Direction B — Engineered Grid

### 1. Core idea

A systematic, modular composition that exposes its alignment logic through fine rules, calibrated fields, metadata bands, and restrained geometric cuts. It feels like a precision-built information framework, not a dashboard, terminal, or fictional control panel.

### 2. Why it fits Zehrtydev

The visible structure mirrors the way Moni is best explained: problem, deterministic path, fallback, human confirmation, deployment, and verified status. It supports technical credibility and repeatability while the limited palette and controlled hierarchy keep the brand premium.

### 3. Homepage composition

The homepage uses a consistent structural grid across all approved sections. The hero occupies a broad primary field with a narrow context rail. Selected Work then becomes the main system: Moni spans the grid while facts, flow, role, and status align into subordinate modules. About and Contact reuse the same alignment without becoming identical card rows.

### 4. Hero concept

The positioning sits in the dominant grid field. A small set of factual coordinates—focus, current mode of work, or a route cue—may occupy the rail if copy remains verified. The CTA hierarchy is encoded through both placement and treatment: “Explorar mi trabajo” on the principal axis, “Contactarme” as a quieter text or outline action.

### 5. Navigation concept

A compact horizontal system aligns the wordmark, section links, and Moni route to the main grid. Fine separators can communicate grouping. A sticky treatment is plausible but remains **Proposed**; it must never obscure focused content. Mobile uses an explicit menu control and ordinary vertical destinations, not a miniature HUD.

### 6. Selected Work / Moni presentation

Moni is presented as a connected evidence system. One dominant project field introduces the problem and outcome; adjacent modules show the verified status, Manuel's role, and operating context. The conceptual flow becomes a readable sequence with deterministic parsing visibly before AI fallback and confirmation before persistence. The dedicated route expands the same system rather than changing visual language.

### 7. About treatment

The bio occupies one main reading block supported by a small number of labeled factual groupings. Labels clarify context but must not produce a résumé table or technology inventory. The shift from learning to building can be reflected through sequence, not embellished claims.

### 8. Contact treatment

Contact uses a clear endpoint module with email as the only currently actionable channel. Reserved structural positions for missing GitHub or LinkedIn links are not shown in the public composition until URLs exist. A final rule or index marker can close the page without becoming decoration.

### 9. Grid and spacing philosophy

Use a strict responsive grid, consistent alignment anchors, and a controlled alternation between dense evidence zones and open breathing zones. Spacing derives from relationships—inline, component, group, and section—rather than one repeated gap. On mobile, the grid simplifies rather than merely shrinks.

### 10. Surface / border / radius philosophy

Graphite and Deep Black fields are separated primarily by Steel Gray rules and subtle tonal shifts. Rectangles dominate; clipped corners or short diagonals may mark transitions when they clarify grouping. Shadows should be absent or exceptionally rare. Square or very restrained radii best fit this direction, subject to approval.

### 11. Typography behavior using Sora + Inter

Sora establishes strong section titles and major project assertions. Inter handles dense evidence, labels, captions, and navigation. Technical character comes from alignment, case, spacing, and tabular figure features where available—not from introducing a monospace face. Metadata must stay large and contrasted enough to read.

### 12. Performance Orange usage

Orange behaves like a priority signal: primary CTA, keyboard focus, current navigation state, and one key point in the Moni flow. It should not trace every grid line or light every label. Selected states also need shape, weight, or text cues.

### 13. Image / screenshot / diagram treatment

Screenshots sit inside measured frames aligned to the grid, accompanied by captions and contextual callouts that identify the evidence. The Moni flow diagram is central but plain: connected stages, clear branching for AI fallback, and explicit review before final registration. Avoid invented telemetry, faux windows, or dense dashboard chrome around the actual product.

### 14. Motion philosophy

If approved, motion clarifies state and sequence: a link response, navigation state, or progressive emphasis when the Moni flow enters view. Nothing scans, blinks, ticks, or continuously animates. The static state must communicate the complete system, and reduced motion removes nonessential transitions.

### 15. Mobile adaptation

Modules reorder into the same logical story: problem, concept, flow, role, challenges, status, continuation. Long horizontal process diagrams become vertical sequences rather than swipe-only canvases. Navigation, labels, and borders reduce in visual density while retaining clear targets and hierarchy.

### 16. Accessibility implications

Grid placement must never reorder meaning independently of the DOM. Fine rules and muted labels are vulnerable to insufficient contrast, so meaningful boundaries need measured non-text contrast and text must meet its applicable threshold. The flow diagram needs an equivalent text sequence, and focus cannot be hidden by a sticky header.

### 17. Performance implications

CSS grid, borders, and flat color fields are inexpensive. Risk rises if the system uses many decorative pseudo-elements, complex clipped layers, client-driven scroll state, or oversized dashboard captures. The proposed direction should remain CSS-led, static-first, and media-efficient.

### 18. Main strengths

- Strongest expression of engineering precision.
- Makes Moni's architecture and human-confirmation safeguard exceptionally clear.
- Creates a reusable framework for future case studies.
- Distinctive without relying on imagery or effects.

### 19. Main risks

- Can become dense, impersonal, or overly schematic.
- Technical labels may compete with the human learning narrative.
- Repeated modules can slide into generic bento, SaaS, or dashboard styling.

### 20. What would make this direction feel generic or off-brand

Bento-card repetition, fake system telemetry, monospace everywhere, glowing borders, HUD brackets, tiny labels, animated scans, technology chips, or dashboard KPIs would turn the engineered metaphor into generic developer or sci-fi UI.

### 21. Under review decisions this direction would require us to approve

- Grid visibility and the ratio of open to structured zones.
- Static versus modestly sticky aligned navigation.
- Module taxonomy for Moni and future projects.
- Border opacity hierarchy, cut geometry, radius, and any elevation.
- Type, spacing, content-width, and responsive systems.
- Diagram grammar and screenshot frame treatment.
- Minimal motion level and reduced-motion behavior.
- Final website language strategy.

## Direction C — Industrial Restraint

### 1. Core idea

A severe, quiet interpretation built from large dark fields, strong Sora typography, sparse rules, and almost no elevated surfaces. The identity comes from proportion, exact spacing, and a few controlled geometric interruptions rather than visible system complexity.

### 2. Why it fits Zehrtydev

This direction embodies Stealth Performance most literally: calm on first view, precise under inspection, and confident enough to avoid decorative proof of technicality. It keeps attention on the positioning and Moni while resisting the conventions of developer portfolios.

### 3. Homepage composition

Each approved section occupies a distinct dark field or is separated by a single strong interval. The hero is direct, Selected Work is one commanding Moni passage, About is concise, and Contact closes without a promotional panel. The rhythm is sparse but not empty; every transition must signal a change in content responsibility.

### 4. Hero concept

The `Zehrtydev` wordmark and approved positioning dominate, with little supporting furniture. The primary CTA is a compact, high-contrast orange action; the secondary CTA is a quieter link. One precise border, crop, or diagonal may create tension, but no decorative illustration is required.

### 5. Navigation concept

A minimal top bar uses the wordmark plus only the destinations justified by the approved architecture. The preferred starting proposal is non-sticky or quietly sticky without surface effects. Mobile keeps visible essentials and uses a conventional menu only if the labels cannot fit accessibly.

### 6. Selected Work / Moni presentation

Moni is one large narrative block with a strong title, compact problem statement, essential workflow, verified production status, and route continuation. Rather than many modules, hierarchy and rules separate evidence. The dedicated case study uses long-form pacing with only the diagrams and screenshots that materially clarify the product.

### 7. About treatment

The approved bio appears nearly unadorned in a readable column. A small Sora heading and one structural rule provide enough hierarchy. No timeline, badge wall, profile statistics, or staged portrait is assumed.

### 8. Contact treatment

The final section reduces to a clear invitation, the approved secondary CTA language, and the email address. GitHub and LinkedIn appear only when their real URLs are supplied. The footer carries the wordmark or a restrained textual signature without introducing a new mark.

### 9. Grid and spacing philosophy

Use a simple grid with wide outer breathing room, strong vertical intervals, and few alignment modes. Density stays low, but related facts remain close enough to scan as groups. Mobile preserves the spacious character with proportionally reduced intervals rather than copying desktop emptiness.

### 10. Surface / border / radius philosophy

Deep Black is the dominant canvas; Graphite is reserved for rare emphasis. Borders do most separation work. The leading proposal is square geometry with at most a small clipped detail and no conventional card shadow, but this remains subject to approval.

### 11. Typography behavior using Sora + Inter

Sora is bold in scale but economical in frequency. Inter carries nearly all explanatory content with generous leading and controlled measure. Typography must remain robust under translation and zoom; the severe mood cannot depend on tiny text, ultra-thin weights, or compressed tracking.

### 12. Performance Orange usage

Orange appears at only the highest-value moments: primary CTA, focus, and perhaps one key Moni decision or link. It may be absent from large stretches of the page. This scarcity strengthens meaning but requires non-color hierarchy everywhere else.

### 13. Image / screenshot / diagram treatment

Use fewer, larger authentic images with neutral frames and descriptive captions. Diagrams are reduced to essential stages and relationships. Media never receives glow, glass, device-mockup excess, or decorative layering; if approved assets are weak, the layout should remain credible without pretending otherwise.

### 14. Motion philosophy

Motion is near-minimal: immediate focus and press feedback, perhaps one subtle reveal pattern if it improves orientation. No parallax, kinetic type, page transitions, or ambient movement. Reduced motion removes the optional reveal with no perceptual penalty.

### 15. Mobile adaptation

The direction translates naturally to one column. Type size and negative space are calibrated to prevent a short phone viewport from feeling empty or forcing content below an artificial fold. Navigation remains ordinary, media uses the full safe content width, and every target has adequate area and separation.

### 16. Accessibility implications

The simple hierarchy and low interaction count reduce risk. The main concerns are over-minimal affordances, muted borders, small metadata, and an urge to remove visible labels. Links must look actionable beyond color, focus must be conspicuous, and sparse composition must still provide clear landmarks and headings.

### 17. Performance implications

This is the lowest-risk direction: few surfaces, little motion, no decorative assets, and a small visual payload. Performance can still suffer from unoptimized Moni media or excessive font files, so those constraints remain relevant.

### 18. Main strengths

- Purest expression of restraint and confidence.
- Lowest implementation and performance risk.
- Strong mobile suitability.
- Least likely to compete visually with the work.

### 19. Main risks

- May feel under-designed or anonymous if proportion and typography are not exceptional.
- Provides fewer structural tools for explaining Moni's richer engineering story.
- Excessive severity can make the personal growth narrative feel cold.

### 20. What would make this direction feel generic or off-brand

A familiar centered hero, three-card project grid, vague one-line bio, pill-shaped CTA set, generic black-and-orange startup styling, or empty space without narrative purpose would make it look like a template. Minimal does not mean removing the evidence that differentiates the site.

### 21. Under review decisions this direction would require us to approve

- Left-aligned versus more centered hero composition.
- Static versus quietly sticky navigation.
- How much Moni evidence remains on the homepage before the route handoff.
- Type scale, text measure, and vertical-spacing system.
- Square-border policy and any permitted clipped detail.
- Minimum media set and neutral screenshot framing.
- Near-minimal motion policy and reduced-motion behavior.
- Final website language strategy.

## Comparison matrix

The ratings are comparative, not approvals. For risk and complexity, lower is preferable.

| Criterion | A — Editorial Performance | B — Engineered Grid | C — Industrial Restraint |
| --- | --- | --- | --- |
| Distinctiveness | High | High | Medium–High, craft-dependent |
| Fit with approved brand | High | High | High |
| Clarity | High when asymmetry is controlled | High | High, but can omit useful context |
| Project-storytelling strength | Very high | High | Medium–High |
| Scalability to future projects | High | Very high | Medium–High |
| Mobile suitability | High with deliberate reflow | High with simplified modules | Very high |
| Accessibility risk | Low–Medium: reading order and type scale | Medium: density, rules, diagram alternatives | Low–Medium: affordance visibility |
| Implementation complexity | Medium | Medium–High | Low |
| Performance risk | Low | Low–Medium | Very low |
| Danger of generic developer portfolio | Low if evidence stays central | Medium if it becomes bento/dashboard UI | Medium if minimalism becomes a template |
| Danger of gamer/sci-fi styling | Low | Medium unless technical detail is tightly restrained | Very low |
| Ability to showcase Moni effectively | Very high: complete product and growth narrative | Very high: architecture and evidence clarity | High: strong focus, less explanatory range |

## Proposed recommendation

Explore **Direction A — Editorial Performance** first.

It best combines Zehrtydev's human growth narrative with evidence-first technical storytelling. Moni is not only an architecture diagram or product screen: its strongest story includes the original friction, deterministic-first decision, user confirmation, transition from personal use to six real users, and the operational learning required to reach production. Editorial pacing can hold those layers without making the site feel like a dashboard, résumé, or generic project grid.

Potentially borrow from Direction B its strict alignment discipline, restrained metadata grammar, and clear workflow diagram. Borrow from Direction C its low effect budget, large uninterrupted dark fields, and refusal to create surfaces without purpose. These borrowed traits should temper Direction A rather than combine all three directions into an indistinct hybrid.

This recommendation is **Proposed**. It does not select or approve a direction.

## Rejected local recommendations

The local UI/UX search produced several generic matches that are incompatible with Approved decisions or the product purpose. They are rejected, not proposed:

- FAQ/documentation landing structure and support-conversion framing: wrong information architecture and objective.
- Green accent and alternate dark palette: conflicts with the approved palette and single Performance Orange accent.
- JetBrains Mono, IBM Plex Sans, serif editorial faces, or system-font substitutions: conflict with approved Sora and Inter roles; no monospace is approved.
- Glow, neon, cyberpunk, HUD/FUI, scan lines, blinking markers, and terminal styling: conflict with the controlled, non-gamer, non-sci-fi direction.
- Bento/dashboard density, KPI cards, telemetry, and tiny metadata: risk presenting a personal project narrative as generic SaaS or operations UI.
- Page-flip transitions, parallax, kinetic type, split-letter animation, and complex scroll reveals: conflict with restrained motion, accessibility, performance, and evidence-first priorities.
- Light-mode pairing and a V1 theme toggle: generic guidance superseded by the approved dark-only policy.
- New icon or UI dependencies: outside this exploration and unapproved.

Useful guidance retained from the skills includes mobile-first composition, semantic reading order, visible focus, measured contrast, restrained single-accent use, responsive media with reserved dimensions, meaningful motion only, and primitive → semantic → component tokens as a future **Proposed** implementation architecture.

## Decisions required before implementation

- [ ] Approve one visual direction to develop, or request a specific revision to one direction.
- [ ] Approve the homepage opening composition within that direction, including the degree of asymmetry and hero density.
- [ ] Approve the navigation treatment, including static versus sticky behavior and the mobile disclosure model.
- [ ] Approve the exact Moni presentation model: homepage evidence depth, case-study chapters, workflow diagram, and route handoff.
- [ ] Approve the surface system: border hierarchy, square versus subtly clipped radius policy, and whether any elevation is permitted.
- [ ] Approve screenshot and media treatment after confirming which authentic Moni assets may be published.
- [ ] Approve the motion level and reduced-motion equivalent.
- [ ] Approve the website language strategy: Spanish-only, English-only, or bilingual.
- [ ] Supply or explicitly defer the pending GitHub and LinkedIn URLs and any public Moni destination needed for launch content.

Exact type, spacing, width, breakpoint, focus, and state tokens should be proposed for approval after a direction is chosen and before production UI is built. A future symbol or monogram is not required for V1 implementation and should remain deferred unless the owner separately chooses to explore it.
