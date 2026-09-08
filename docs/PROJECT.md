# zehrty.dev Project Context

## Purpose

zehrty.dev is the personal and professional digital identity of Manuel Amado, publicly known as Zehrty. It is the durable home for his public technical work and an evolving account of his career.

The site should demonstrate what Zehrty builds, which problems he solves, how he makes engineering decisions, and how his practice develops. It should earn trust through specific work rather than résumé conventions, technology volume, or visual spectacle.

## Target audiences

- Potential collaborators, clients, and employers evaluating judgment, execution, and fit.
- Developers and technical peers interested in projects, experiments, and engineering decisions.
- Product-minded visitors looking for evidence of real software and problem solving.
- People discovering Zehrty through a project, profile, search result, or shared link.

Each audience should be able to understand who Zehrty is, what he works on, and where to inspect the strongest evidence without needing prior context.

## Core message

**Approved positioning (Spanish source):**

> Soy desarrollador enfocado en inteligencia artificial y automatización. Construyo productos reales para resolver problemas concretos mientras sigo creciendo como ingeniero.

Zehrtydev is a developer focused on artificial intelligence and automation who builds real products to solve concrete problems while continuing to grow as an engineer. The proof is the work: products built, decisions made under constraints, problems solved, and lessons carried forward. Do not replace this positioning with startup, agency, consultant, or unsupported senior-engineer language.

## Short bio — Approved

> Estudio Ingeniería de Sistemas en la UNAD mientras me formo en Programación e Inteligencia Artificial en Campuslands y continúo aprendiendo inglés. Trabajo como Auxiliar de Sistemas en Petrocasinos S.A. Me atraen los proyectos que me obligan a salir de lo conocido, investigar y aprender mientras construyo soluciones reales.

This is factual source content. Do not infer completed degrees, certifications, years of experience, seniority, job responsibilities, or additional professional claims.

## V1 requirements

V1 is a primarily static, focused professional presence. It should:

- Establish Zehrty's identity and current areas of focus.
- Lead with real work and make Moni the primary project showcase.
- Present project context, problem, role, engineering decisions, outcomes, and current status when verified information is available.
- Provide a concise professional narrative without reproducing a generic résumé.
- Offer clear paths to relevant public profiles, project destinations, and contact methods once those destinations are approved.
- Work across mobile and desktop with semantic structure, keyboard access, strong contrast, and reduced-motion support.
- Be fast, indexable, and deployable to Vercel without runtime infrastructure.
- Use a dark-only presentation and the visible textual wordmark `Zehrtydev`.
- Prioritize the primary CTA **“Explorar mi trabajo”** over the secondary CTA **“Contactarme”**.

Content must remain truthful. Unknown metrics, responsibilities, dates, links, screenshots, and outcomes are content gaps—not invitations to fabricate placeholders that look factual.

## Information architecture — Approved

V1 uses a hybrid architecture.

The homepage contains, in order:

1. Identity / Hero
2. Selected Work
3. About
4. Contact
5. Footer

Projects with enough verified material may have dedicated case-study routes. Moni is the first dedicated case study at `/projects/moni`. Do not create empty routes to imitate a larger portfolio. A future `/projects` index may be introduced only when enough projects justify it.

## Primary project showcase: Moni

Moni is the primary real product for V1 and receives the strongest narrative and visual emphasis.

### Problem and concept — Approved

Traditional expense capture creates friction: opening a finance app, navigating to the right flow, and entering each transaction is tedious and easy to abandon. Moni reduces that friction through WhatsApp, an application the creator and many users already open throughout the day.

A user can send a natural-language message such as `10000 en comida`. Moni interprets it as structured financial data, including amount, transaction type, category, and date.

### Core flow — Approved

User message → deterministic parsing → AI fallback when deterministic parsing cannot resolve the message sufficiently → structured extraction (amount / type / category / date) → user review → confirm / correct / cancel → final registration → later consultation through the web dashboard.

Deterministic parsing runs before AI. AI is a fallback, not the only parser. A movement is not persisted without user confirmation, and users can correct interpreted data before confirming.

### Creator role — Approved

Manuel designed and built Moni end-to-end: product design, architecture, and full-stack development, with AI-assisted development. AI tools supported research, programming, review, debugging, and acceleration; they did not independently build the product. Do not claim Manuel invented the general idea of finance tracking through messaging or inflate the role into unsupported titles.

### Verified technical and infrastructure facts — Approved

- WhatsApp is the primary transaction-capture interface.
- Supabase is used in the solution.
- Vercel was used during testing; the production workload later moved to a VPS.
- Moni initially ran locally on Manuel's computer.
- Continuous-availability needs led Manuel to research VPS hosting, Linux, domains, and deployment.
- Resend was another integration and learning area that required troubleshooting.
- A web dashboard lets users inspect their financial information in greater depth.

Do not add technologies unless repository or project sources verify them.

### Major learnings — Approved

The difficult transition was not the first personal version but adapting it for other people. Use by friends and family revealed edge cases and smaller problems that personal use had not exposed. The product evolved from a personal tool toward a multi-user product.

Deployment and operations were another major challenge. Manuel began with little practical experience in Linux, VPS administration, domains, production deployment, and some external integrations such as Resend, then researched and learned those areas while making Moni operational. This learning-through-building story is central to the Zehrtydev positioning.

### Current status — Approved

- Moni is running in production.
- It has 6 real users, currently people close to Manuel.
- The complete core transaction flow is operational.
- Users can access the dashboard.
- The product continues to evolve.

Manuel intends to share Moni more publicly later. Do not present intended or projected growth as an outcome.

### Future ideas — Proposed, not shipped

- Read invoices or receipts from photographs using OCR.
- Allow custom categories.
- Add functionality in response to user feedback.

These ideas must never be presented as current capabilities.

## Public contact channels — Approved / partially pending

- GitHub — URL pending.
- LinkedIn — URL pending.
- Email — `soporte@zehrty.dev`.

The pending URLs are content gaps. Do not invent them. WhatsApp, Instagram, X, phone numbers, CV downloads, and other contact channels are outside the approved V1 scope.

## Website language — Under review

The positioning, bio, and CTAs currently have approved Spanish source copy, but the final site language strategy is not approved. Do not establish Spanish-only, English-only, or bilingual architecture until the owner decides.

## Technical scope

### Approved for V1

- Next.js 16 with the App Router.
- React 19 and TypeScript.
- Tailwind CSS 4.
- pnpm for package management.
- Server Components by default.
- Static rendering and static content wherever practical.
- Semantic HTML, accessible interactions, responsive images, and minimal client JavaScript.

### Requires explicit justification and approval

- New dependencies.
- Client Components that are not required for browser-side behavior.
- Runtime data fetching, third-party scripts, analytics, forms, or external services.
- Any backend, database, CMS, authentication system, or additional infrastructure.

## Deployment assumptions

- Vercel is the intended deployment platform.
- V1 should build and operate without a database or persistent server runtime.
- Environment variables should not be required unless an approved integration creates a genuine need.
- Preview deployments, domain configuration, analytics, observability, and contact-form delivery are not yet selected.
- Performance and Core Web Vitals are release criteria, not post-launch enhancements.

## Explicit non-goals for V1

- A generic résumé site or exhaustive career archive.
- A purchased-template aesthetic or an anonymous AI-generated portfolio.
- A comprehensive list of technologies, logos, badges, or skill percentages.
- A blog, CMS, admin area, user accounts, authentication, or database.
- Decorative terminals, code rain, particles, gratuitous 3D, or scroll choreography.
- A visual-effects demo whose presentation competes with the work.
- Unverified claims, invented metrics, fabricated testimonials, or speculative project details.
- Premature systems for content volume that does not yet exist.

## Possible future evolution

These ideas are not V1 commitments:

- Deeper project case studies and additional verified products.
- Technical writing, notes, or experiment logs.
- A structured timeline of professional growth.
- Lightweight content management if update frequency and volume justify it.
- Privacy-conscious analytics after goals and consent requirements are defined.
- A contact workflow if a static contact path proves insufficient.
- Additional routes, richer media, or selective interactive demonstrations.

Future work must be driven by real content and user value. It should preserve the brand foundation, performance posture, and scope discipline unless an approved decision explicitly replaces them.
