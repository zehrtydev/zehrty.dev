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

Zehrty is a software builder focused on artificial intelligence, automation, real products, technical experimentation, and continuous professional growth. The proof is the work: shipped projects, decisions made under constraints, problems solved, and lessons carried forward.

## V1 requirements

V1 is a primarily static, focused professional presence. It should:

- Establish Zehrty's identity and current areas of focus.
- Lead with real work and make Moni the primary project showcase.
- Present project context, problem, role, engineering decisions, outcomes, and current status when verified information is available.
- Provide a concise professional narrative without reproducing a generic résumé.
- Offer clear paths to relevant public profiles, project destinations, and contact methods once those destinations are approved.
- Work across mobile and desktop with semantic structure, keyboard access, strong contrast, and reduced-motion support.
- Be fast, indexable, and deployable to Vercel without runtime infrastructure.

Content must remain truthful. Unknown metrics, responsibilities, dates, links, screenshots, and outcomes are content gaps—not invitations to fabricate placeholders that look factual.

## Candidate information architecture

This is a candidate content model, not an approved page map:

1. Identity and positioning: a concise introduction to Zehrty and the work he pursues.
2. Selected work: Moni first, followed only by projects with enough evidence to justify inclusion.
3. Approach: selected engineering decisions, working principles, or technical experiments.
4. Progress: a lightweight account of current learning or career evolution when it adds signal.
5. About and contact: enough context and clear, safe ways to continue the conversation.

Whether these appear as one-page sections, separate routes, or a hybrid remains under review. Navigation should follow the final content depth; a shallow V1 should not imitate a complex product hierarchy.

## Primary project showcase: Moni

Moni is the primary real product available for V1 and should receive the strongest narrative and visual emphasis. Its eventual presentation should prioritize:

- the real problem and intended users;
- Zehrty's role and scope;
- product and engineering constraints;
- consequential implementation decisions and tradeoffs;
- verified results, current status, and lessons;
- authentic product imagery or artifacts when available and approved.

The documentation does not yet define Moni's facts, visual assets, links, or case-study depth. Those require content collection and human verification before design or publication.

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
