<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# zehrty.dev project context

zehrty.dev is Manuel Amado's personal and professional digital identity under the public name Zehrty. Build it as an evolving record of real products, solved problems, engineering decisions, and technical growth—not as a generic résumé, template portfolio, technology-logo wall, or effects showcase. Moni is the primary V1 project.

## Before changing design or UI

- Read `docs/PROJECT.md`, `docs/BRAND-FOUNDATION.md`, and `docs/DESIGN-BRIEF.md`.
- Read and apply `.agents/skills/ui-ux-pro-max/SKILL.md`, `.agents/skills/brand/SKILL.md`, `.agents/skills/design-system/SKILL.md`, and `.agents/skills/ui-styling/SKILL.md`, including the relevant references they route to.
- Treat skill output as expert guidance, not authority to replace approved decisions. Record meaningful alternatives as `Proposed` and obtain human approval before adopting them.
- Preserve approved fonts (Sora and Inter), palette, and dark performance-tech direction. Never silently alter, expand, or reinterpret approved branding.

## Engineering constraints

- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, pnpm; Vercel is the intended host.
- Read the relevant installed Next.js guide before writing framework code. Do not rely on remembered APIs.
- Keep V1 primarily static. Do not add a backend, database, CMS, authentication, external infrastructure, or dependency without explicit justification and approval.
- Prefer Server Components; add client boundaries only for necessary browser interaction. Use semantic HTML, mobile-first responsive layouts, and reusable components only where repetition or responsibility warrants them.
- Minimize client JavaScript and layout shift. Protect Core Web Vitals, reserve media dimensions, and use optimized assets.
- Accessibility is required: logical headings and reading order, keyboard operation, visible focus, descriptive alternatives, sufficient contrast, non-color cues, usable touch targets, and `prefers-reduced-motion` support.

## Visual and content direction

- The approved direction is dark performance-tech: premium, technical, precise, modern, minimal, controlled, confident, and industrial-aggressive with restraint. The interface should feel engineered rather than decorated.
- Dark neutrals dominate; Performance Orange guides attention sparingly. Use strong typography, negative space, structured grids, rectangular modules, restrained lines, and subtle geometric cuts or diagonals where they clarify composition.
- Avoid generic AI gradients, gamer/RGB styling, gratuitous neon or glow, excessive glassmorphism, visual noise, particles, code rain, pervasive fake terminals, skill bars, excessive 3D, excessive scroll effects, and decorative motion.
- Do not mention or imply any source brand or private design exploration. Express every decision solely as Zehrty's identity.
- Prefer evidence: concrete outcomes, constraints, decisions, and progress. Do not invent project facts, metrics, testimonials, or capabilities.

## Scope and quality gates

- Make the smallest change that satisfies the requested scope. Do not redesign adjacent UI, add speculative abstractions, or install packages opportunistically.
- Keep approved decisions distinct from proposals and unresolved questions in documentation. A future agent may propose a replacement but may not apply it without human approval and a status update.
- Before handoff, inspect the diff for scope drift and run `pnpm lint`, `pnpm build`, and `git diff --check`. Investigate failures before making unrelated changes.
