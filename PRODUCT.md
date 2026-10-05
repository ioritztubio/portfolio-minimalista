# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- Tech recruiters / HR: scan fast; need role, stack, location and the CV within seconds.
- Engineering leads: want to see real projects and how Ioritz thinks.
- AI-focused companies: Ioritz is moving from full-stack into AI engineering; the site must signal that direction.

## Product Purpose
Personal portfolio of Ioritz Tubio Sanchez, software engineer (full-stack: React/Next.js, Django/PostgreSQL, AWS) based in Donostia-San Sebastián, currently Junior Software Engineer in the AI department of PKF Attest / Skootik and studying a master's in AI at UNIR. Success = the visitor remembers him and reaches him.

## Positioning
A full-stack engineer who owns projects end to end and is deliberately building foundations to become an AI engineer, not a certificate collector.

## Capabilities and Constraints
- Sections to keep: Hero/About, Projects, Experience & Education timeline, CV (interactive preview + PDF download), Contact form, Legal pages, consent banner.
- Languages: English, Spanish, and Basque (EU) to be added.
- Primary action: view/download CV; LinkedIn and email sit beside it as equal secondary exits.
- Stack: React 19 + Vite + Tailwind v4 + Motion (existing codebase).
- Must stay fast on laptops and phones; no heavy or laggy effects.

## Brand Commitments
- Owner-pinned direction: Apple-like transparency (glass), minimalism, elegance, professionalism, cinematic but restrained motion.
- No orange, no "Claude-like" warm style. Monochrome UI.
- Owner's face/name must not dominate: present information first, without ego.

## Evidence on Hand
- Real profile, timeline, projects and CV content in `src/i18n/en.ts` / `es.ts` and `src/data/`.
- Avatar at `public/images/avatar.png`.
- No testimonials, metrics or client logos exist; do not fabricate them.

## Product Principles
1. Information before decoration: role, current position and CV are reachable from the first screen.
2. Memorable through craft, not self-promotion.
3. Scannable: short text, clear hierarchy, no walls of copy.
4. Motion serves orientation and polish; it never blocks reading or slows the page.

## Accessibility & Inclusion
WCAG AA contrast in both light and dark themes; full `prefers-reduced-motion` support; keyboard focus visible; motion/gyroscope effects optional.
