# Product

## Register

brand

## Users

React/Next.js developers evaluating URL-state libraries. They arrive from GitHub, npm, or a search like "nuqs alternative", usually mid-task on their own project, skeptical and short on time. Their job: decide in under a minute whether `state-in-url` is simpler/faster/more type-safe than what they're using, then copy an install command. A secondary visitor is a potential client/employer checking out the author's work.

## Product Purpose

The landing page at state-in-url.dev is the marketing surface for the `state-in-url` library (~2KB, zero-dependency, typed state in URL query params). The page IS the pitch: an interactive demo where typing into a form visibly syncs into the URL bar proves the library's value faster than any copy could. Success = npm installs, GitHub stars, and "I get it" within the first screen.

## Brand Personality

Precise, fast, playful. Engineering rigor first (types, speed, tiny size are the substance), with deliberate moments of delight (sync flashes, the rainbow hint) that demonstrate craft rather than decorate. Voice is direct, first-person indie-OSS — a sharp engineer showing you something neat, not a company selling you something.

## Anti-references

- **Generic SaaS landing**: hero + three feature cards + testimonial wall + pricing scaffold. This is a library demo, not a funnel.
- **Docs site**: the README and JSDoc carry documentation; the page must not read as a wall of reference text.
- **Corporate/enterprise**: no navy-suit tone, no "Trusted by" logo strips, no faux-company voice. It's one engineer's well-crafted OSS project and proud of it.

## Design Principles

1. **The demo is the hero.** The live form↔URL sync is the single most convincing asset; everything above or around it exists to get the visitor interacting within seconds.
2. **Practice what you preach.** A library that pitches "fast, tiny, precise" must ship a page that is fast, light, and pixel-precise. Jank or bloat on this page falsifies the README.
3. **Show, don't tell.** Prefer a working interaction or a real code block over a sentence of marketing copy. Claims (2KB, typed, zero deps) appear as verifiable facts, not slogans.
4. **Delight proves craft.** Playful touches (URL flash on sync, micro-motion) are demonstrations of attention to detail — they earn their place only when tied to a real event in the demo.
5. **Indie voice, studio finish.** Personal and direct in copy, immaculate in execution. The for-hire badge belongs; sloppy spacing does not.

## Accessibility & Inclusion

WCAG 2.1 AA. Body text ≥4.5:1 contrast; the live demo must be fully keyboard-operable (it's a form — labels, focus-visible, error states). All sync/flash animations respect `prefers-reduced-motion`. The demo's URL read-out must be available to screen readers, not just a visual trick.
