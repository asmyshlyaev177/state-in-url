# AGENTS — state-in-url

Guidance for AI coding agents working **on** this repository. If you are here
to *use* the library in someone else's project, read `skills/` instead — those
files are written for that, and are far more specific than this one.
`npx @tanstack/intent@latest install` wires them into your agent.

## What this is

`state-in-url` is a ~2KB, zero-runtime-dependency React library that stores typed, JSON-serializable state objects in URL query parameters while preserving types and structure (numbers stay numbers, dates stay dates, nested objects/arrays work). It ships a `useUrlState` hook for Next.js App Router, React Router v6/v7, and Remix v2, plus framework-agnostic encode/decode helpers. Positioned as a NUQS alternative.

## Commands

This is a **pnpm** monorepo. `pnpm` is enforced (`only-allow`). Most scripts run through **wireit** (caching/dependency graph), so always invoke them via `pnpm run <script>`, not the underlying tool directly.

- `pnpm run test` — full suite: `tsc` typecheck → unit tests → build all packages → exports test → integration (e2e) tests. Everything CI checks, but not the command CI runs — `.github/workflows/tests.yml` splits it into three parallel jobs and calls the tools directly, so a break in this wiring shows up locally only.
- `pnpm run test:unit` — Vitest unit tests (depends on `tsc`), single run, ~2s; coverage is on in the config. Use `npx vitest` directly for watch mode.
- `pnpm run test:int` — Playwright e2e (`--project=chromium`). Starts the seven demo servers unless they are already up, and waits for all seven before the first test.
- `pnpm run tsc` — `tsc --noEmit` typecheck only.
- `pnpm run build` — Rollup build of the library into `dist/` (ESM `.mjs` + CJS `.js` + `.d.ts`).
- `pnpm run dev` — library in Rollup watch mode + all example apps. Next.js 15 demo on `http://localhost:3000`.
- `pnpm run kill` — kill hung Next/Vite/wireit processes (use this if dev/test servers hang).
- `pnpm run cleanup` / `pnpm run reinstall` — nuke build artifacts and node_modules.
- `pnpm run setup` — `playwright install --with-deps` (needed before e2e on a fresh machine).
- `pnpm run test:lighthouse` — Lighthouse audits of the demo site (see below). Builds and serves it itself; nothing needs to be running first.
- `pnpm i18n status` / `pnpm i18n:check` — the eight translations: drift from the English source, and README structure/links/anchors. `pnpm i18n:toc` rebuilds the tables of contents; `pnpm i18n:copy:check` covers the demo's copy modules.

Run a single unit test: `npx vitest run packages/urlstate/encoder/encoder.test.ts` (or pass a `-t "name"` filter).
Run a single e2e spec: `npx playwright test tests/useUrlState/main.spec.ts --project=chromium`.

## Layout

- `packages/urlstate/` — **the library source, and the root npm package itself.** It is deliberately NOT a pnpm workspace member (see `pnpm-workspace.yaml`); it's published from the repo root via `dist/`.
- `packages/example-*` — the workspace members: demo apps for nextjs14/15/16, react (Vite), react-router6, react-router7, remix2. These exist to be driven by the Playwright e2e tests and to host the live demo.
- `packages/shared/` — shared Tailwind config, styles, and components used by the example apps (aliased as `shared/*` in `tsconfig.base.json`).
- `tests/` — Playwright e2e specs (separate from the colocated `*.test.ts` unit tests).
- `lighthouse/` — the Lighthouse suite, its own directory so the e2e config's `testDir: './tests'` cannot pick it up. Driven by `playwright.lighthouse.config.ts`.
- `skills/` — agent skill files (`SKILL.md` per topic) that are **published as part of the npm package** (see `files` in `package.json`). `skills/_artifacts/` is dev-only and excluded from publish; `skill_spec.md` there is a useful map of the library's domains and known user failure modes.
- `scripts/i18n/` — the translation toolkit: the locale table, the drift and structure checks, and the translator's prompt and glossary. See `scripts/i18n/AGENTS.md`.

## Architecture

The library is layered; each layer has its own subdirectory under `packages/urlstate/` with an `index.ts` barrel (each is a separate package export, e.g. `state-in-url/encoder`, `state-in-url/next`).

1. **`encoder/`** — the serialization core. `encode`/`decode` turn any JSON-compatible value into a URLSearchParams-safe string and back, preserving types. Type preservation uses sentinel prefixes from `constants/` (`SYMBOLS.date` = `⏲`, `SYMBOLS.undefined`) injected during a custom `JSON.stringify` replacer / `JSON.parse` reviver. `utils.ts` `typeOf` is a richer `typeof` (distinguishes date/array/null) and drives encoding decisions.

2. **`useSharedState/`** — framework-agnostic cross-component state with no URL involvement. State is shared by **object identity of the default-state object**, not deep equality: `subscribers.ts` holds a `stateMap`/`subscribers` keyed by the default-state object reference. This is why the default state must be a stable module-scoped `const`.

3. **`useUrlStateBase/`** — generic hook composing `useSharedState` + `useUrlEncode` and accepting a `router` with `push`/`replace`. Contains the **"last update wins" URL-write throttling**: a module-global timer batches rapid `setUrl` calls (`TIMEOUT` = 70ms, 330ms on Safari). URL updates are therefore async/debounced, not synchronous.

4. **Framework wrappers** — `next/`, `react-router/` (v7), `react-router6/`, `remix/` each export a `useUrlState` that adapts the framework's router to `useUrlStateBase` and handles SSR (`parseSPObj`, `filterUnknownParams`). The Next.js wrapper defaults to `window.history` navigation (`useHistory: true`) to avoid `_rsc` refetches, and accepts server `searchParams`.

`index.ts` re-exports the public surface: `useUrlState` (Next), `useSharedState`, `useUrlEncode`, `useUrlStateBase`, `encode`/`decode`, `encodeState`/`decodeState`, `typeOf`, `isSSR`.

### Invariants that bite

- **Default state must be a module-scoped `const`**, defined once outside any component, and passed by reference. Defining it inside a component breaks the object-identity sharing model — this is the #1 source of user bugs.
- Use `type`, not `interface`, for state shapes (the `JSONCompatible<T>` constraint resolves differently for `interface`).
- Never call `setUrl`/`setState` during render or unconditionally inside `useEffect` (infinite loops). For typing inputs, `setState` on change, `setUrl` on blur/debounce.
- Only JSON-serializable values; functions/symbols are dropped.
- In Next.js App Router, pass `searchParams` for SSR correctness; in Next 15+, `await` them first.

## Lighthouse (demo site)

`pnpm run test:lighthouse` → `lighthouse/lighthouse.spec.ts`, driven by
`playwright.lighthouse.config.ts`. `.github/workflows/lighthouse.yml` runs it on
changes under `packages/example-nextjs16/**` and nowhere else.

The subject is **`packages/example-nextjs16`** — the app https://state-in-url.dev
actually serves, and the only example with public pages (`example-nextjs15` has
nothing but the `(tests)` group). It audits the production build: `build:demo`
(which rebuilds the library first, so the demo is never measured against a stale
`dist/`) then `next start --port 3012`. Port 3012, not the demo's own 3002, so a
server left over from `pnpm run dev` cannot be silently accepted in place of it.

**Only the three public pages** — `/`, `/react-router`, `/remix`. The app also
serves `/useUrlState`, `/test-ssr` and the rest of the `(tests)` group, but those
are e2e fixtures that happen to be deployed: they exist to be asserted against,
not read, and several render in ways no real page would.

**Performance is held at 95, not 100, and that is deliberate.** Measured August
2026, all three pages sit at **99** across repeated runs, and the shortfall is
entirely one metric — LCP ~1030 ms scoring 0.94 of a weight-25 audit. Everything
else is perfect (FCP ~290 ms, total blocking time 6-13 ms). 95 leaves ~4 points
for runner variance while still failing on a real regression. Total blocking time
being near zero is what makes that safe: almost no main-thread work is in play, so
a slower CI runner moves this far less than it would for a hydration-heavy app.
Accessibility, best-practices and SEO are deterministic and held at 100.

## Conventions

- **Conventional commits** (commitlint + commitizen enforced via husky). Releases are automated by semantic-release. `fix:` and `feat:` bump the version and **must only be used for changes inside `packages/urlstate/` or `package.json`** — use `ci`, `build`, `docs`, `style`, `test`, `chore`, `refactor` for everything else (examples, tests, config).
- ESLint config (`.eslintrc.cjs`) uses `plugin:maintainable/recommended` with a complexity cap of 12 and enforced import sorting; Prettier runs via lint-staged on commit. Unused vars must be prefixed `_`.
- Node 24 (`.nvmrc`). Build target ES2022.
- When adding a new entry point, add it to the `exports` map in `package.json` and ensure its `index.ts` is picked up by the Rollup glob (`packages/urlstate/**/index.ts`).

## The demo site's AI-discovery surfaces

`packages/example-nextjs16` is what <https://state-in-url.dev> serves, and it
answers agents in four overlapping ways — they disagree about which to try:

| Surface | Where |
| --- | --- |
| `/llms.txt` | `public/llms.txt` — the single source |
| `/` under `Accept: text/markdown`, or a known agent user-agent | `src/proxy.ts`, generated from `public/llms.txt` by `scripts/generate-middleware-content.cjs` |
| `/index.md`, `/react-router.md`, `/remix.md` | `src/app/<route>.md/route.ts`, all three through `src/app/llmsTxtResponse.ts` |
| `<link rel="alternate">` and a `Link:` response header | `src/app/seoStuff.ts` (`markdownAlternates`), `next.config.mjs` |

All three `.md` mirrors serve the same document, deliberately: this site is one
page repeated per router variant, and `public/llms.txt` documents Next.js,
React Router and Remix together. Three near-identical files would be three
things to keep in sync and would answer no question better.

`src/proxy.ts` is **generated** — edit `public/llms.txt` or the generator
script, never the proxy itself; `pnpm run generate-middleware` runs on dev and
build.

**The one rule that matters:** the negotiated Markdown response must stay
`Cache-Control: no-store`. Vercel's edge/ISR cache keys on the URL path and
does not honour `Vary` — and Next overwrites `Vary` on dynamic App Router
responses anyway, so it cannot be leaned on. A cacheable Markdown variant gets
pinned into the cache entry for `/` by the first agent that asks for it, and
every human visitor afterwards is served raw text until it expires: a 200
throughout, so nothing alerts. That happened on a sibling site. `/llms.txt` and
`/index.md` have one representation each and are safe to cache.
