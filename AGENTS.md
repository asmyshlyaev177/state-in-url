# AGENTS — state-in-url

Guidance for AI coding agents working **on** this repository. If you are here
to *use* the library in someone else's project, read `skills/` instead — those
files are written for that, and are far more specific than this one.
`npx @tanstack/intent@latest install` wires them into your agent.

## What this is

`state-in-url` is a ~2KB, zero-runtime-dependency React library that stores typed, JSON-serializable state objects in URL query parameters while preserving types and structure (numbers stay numbers, dates stay dates, nested objects/arrays work). It ships a `useUrlState` hook for Next.js App Router, React Router v6/v7, Remix v2, and Astro (React islands), plus framework-agnostic encode/decode helpers. Positioned as a NUQS alternative.

## Commands

This is a **pnpm** monorepo. `pnpm` is enforced (`only-allow`). Most scripts run through **wireit** (caching/dependency graph), so always invoke them via `pnpm run <script>`, not the underlying tool directly.

- `pnpm run test` — full suite: `tsc` typecheck → unit tests → build all packages → exports test → integration (e2e) tests. Everything CI checks, but not the command CI runs — `.github/workflows/tests.yml` splits it into three parallel jobs and calls the tools directly, so a break in this wiring shows up locally only.
- `pnpm run test:unit` — Vitest unit tests (depends on `tsc`), single run, ~2s; coverage is on in the config. Use `npx vitest` directly for watch mode.
- `pnpm run test:int` — Playwright e2e (`--project=chromium`). Kills any leftover demo servers, starts all eight, and waits for all eight before the first test. To run against a set you started yourself (`pnpm run start`), call `pnpm exec playwright test` directly — a partial leftover set is reused as-is by Playwright and never completed, which is the failure the kill avoids.
- `pnpm run tsc` — `tsc --noEmit` typecheck only.
- `pnpm run build` — Rollup build of the library into `dist/` (ESM `.mjs` + CJS `.js` + `.d.ts`).
- `pnpm run dev` — library in Rollup watch mode + all example apps, each at `http://<package-name>.localhost:1355` (see Demo app URLs).
- `pnpm run kill` — kill hung Next/Vite/wireit processes (use this if dev/test servers hang).
- `pnpm run cleanup` / `pnpm run reinstall` — nuke build artifacts and node_modules.
- `pnpm run setup` — `playwright install --with-deps` (needed before e2e on a fresh machine).
- `pnpm run test:lighthouse` — Lighthouse audits of the demo site (see below). Builds and serves it itself; nothing needs to be running first.
- `pnpm i18n status` / `pnpm i18n:check` — the eight translations: drift from the English source, and README structure/links/anchors. `pnpm i18n:toc` rebuilds the tables of contents; `pnpm i18n:copy:check` covers the demo's copy modules.

Run a single unit test: `npx vitest run packages/urlstate/encoder/encoder.test.ts` (or pass a `-t "name"` filter).
Run a single e2e spec: `npx playwright test tests/useUrlState/main.spec.ts --project=chromium`.

## Demo app URLs

The eight example apps run behind [portless](https://portless.sh), a local
reverse proxy, so each answers on its own hostname instead of a port anyone else
might be holding:

| App | URL |
| --- | --- |
| `example-nextjs14` | `http://example-nextjs14.localhost:1355` |
| `example-nextjs15` | `http://example-nextjs15.localhost:1355` |
| `example-nextjs16` | `http://example-nextjs16.localhost:1355` |
| `example-react` | `http://example-react.localhost:1355` |
| `example-react-router6` | `http://example-react-router6.localhost:1355` |
| `example-remix2` | `http://example-remix2.localhost:1355` |
| `example-react-router7` | `http://example-react-router7.localhost:1355` |
| `example-astro` | `http://example-astro.localhost:1355` |

The hostname is each package's own `name`, so portless infers it — nothing in
`package.json` names an app twice. Actual ports are random (4000–4999) and
nobody needs to know them; `portless list` prints the mapping.

Only `example-nextjs16` has a homepage; the other two Next apps answer 404 at
`/` and serve their test routes (`/test-ssr`, `/test-ssr-usp`, …) instead. A
*portless* 404 — "No app registered for …" — means something else: the proxy is
up but the app is not, which is what one crashed service looks like, because
wireit tears down all eight when any of them fails.

`scripts/portless.sh` is the only place the proxy port lives, and it is what
every `dev:*`/`start:*` wireit task runs. It pins two things:

- **Port 1355, not 443 or 80.** Anything under 1024 makes portless auto-elevate
  with `sudo`, and portless [spawns the child dev server as root when it
  does](https://github.com/vercel-labs/portless/issues/287) — root-owned `.next`
  and `node_modules/.vite` caches that the next non-sudo run cannot delete.
- **Plain HTTP.** HTTPS would put a generated CA in the system trust store,
  which on Fedora/Arch [can fail outright](https://github.com/vercel-labs/portless/issues/267).

Neither the CA nor `/etc/hosts` is touched: `*.localhost` already resolves to
127.0.0.1 through glibc's `myhostname`, so nothing outside `~/.portless` changes.

CI runs portless too — the e2e URLs are these hostnames, so there is no second
set to keep in sync. `PORTLESS=0 pnpm run dev` skips the proxy entirely and each
app falls back to the fixed port in its own `package.json` (`${PORT:-3000}` and
friends), which is also what `lighthouse:serve` still uses on 3012.

`example-astro` is SSR through `@astrojs/node` (every page reads
`Astro.url.searchParams`). Astro 7's `astro dev` and `astro preview` background
themselves when they detect an AI-agent environment (`CLAUDECODE`, Cursor and
the like) or are given `--background`, and a command that returns at once is a
failed service to wireit and portless. So `dev` sets `ASTRO_DEV_BACKGROUND=1`,
the CLI's opt-out, plus `--ignore-lock` so a stale `.astro/dev.json` from a
killed run cannot block it; and `start` skips the CLI and runs the adapter's own
entry, `node ./dist/server/entry.mjs`, which reads `PORT` from the environment,
which is how portless hands the port over. The Vite alias in `astro.config.mjs` points `state-in-url` at the
library *source*, like the other Vite examples, so `pnpm dev` reflects edits
without a rebuild; `pnpm test`'s `tsc` still needs `dist/`, for the
`workspace:*` types. The same `state-in-url/astro` entry runs under
`@astrojs/preact` with `compat: true` and nothing else — SSR from the
`searchParams` prop, islands sharing state, back/forward were checked against
the built package in a scratch app; there is deliberately no ninth example app
for it.

A dev server killed by hand leaves its route behind; `portless prune` clears
those, and every task passes `--force` so a stale route never blocks a restart.

Run the e2e suite from the main checkout. In a *linked* git worktree portless
prepends the branch name as a subdomain — `fix-ui.example-nextjs15.localhost` —
and every URL in `tests/` is a literal, so all eight apps look unregistered. A
worktree on `main`/`master` is exempt and needs nothing. Turning the prefix off
is not an option (`portless run` has no flag for it and `--name` keeps it), and
would be the wrong trade anyway: two worktrees would then `--force` each other's
routes away and quietly serve the other checkout's app.

## Layout

- `packages/urlstate/` — **the library source, and the root npm package itself.** It is deliberately NOT a pnpm workspace member (see `pnpm-workspace.yaml`); it's published from the repo root via `dist/`.
- `packages/example-*` — the workspace members: demo apps for nextjs14/15/16, react (Vite), react-router6, react-router7, remix2, astro. These exist to be driven by the Playwright e2e tests and to host the live demo.
- `packages/shared/` — shared Tailwind config, styles, and components used by the example apps (aliased as `shared/*` in `tsconfig.base.json`). Its `vite-config.ts` types against whichever `vite` `shamefully-hoist` puts at the root `node_modules`, and root `tsc` checks every example's `vite.config.ts` against it; the root `vite` devDep pins that copy to the Vite examples' major, because `example-astro` brought vite 8 into the hoist set and the root copy went with it (tsc fails without the pin).
- `tests/` — Playwright e2e specs (separate from the colocated `*.test.ts` unit tests). `tests/landing/a11y.spec.ts` is the accessibility gate over the demo site's public pages — axe-core plus rendered contrast, both from `@asmyshlyaev177/design-tokens`.
- `lighthouse/` — the Lighthouse suite, its own directory so the e2e config's `testDir: './tests'` cannot pick it up. Driven by `playwright.lighthouse.config.ts`.
- `skills/` — agent skill files (`SKILL.md` per topic) that are **published as part of the npm package** (see `files` in `package.json`). `skills/_artifacts/` is dev-only and excluded from publish; `skill_spec.md` there is a useful map of the library's domains and known user failure modes.
- `scripts/i18n/` — the translation toolkit: the locale table, the drift and structure checks, and the translator's prompt and glossary. See `scripts/i18n/AGENTS.md`.

## Architecture

The library is layered; each layer has its own subdirectory under `packages/urlstate/` with an `index.ts` barrel (each is a separate package export, e.g. `state-in-url/encoder`, `state-in-url/next`).

1. **`encoder/`** — the serialization core. `encode`/`decode` turn any JSON-compatible value into a URLSearchParams-safe string and back, preserving types. Type preservation uses sentinel prefixes from `constants/` (`SYMBOLS.date` = `⏲`, `SYMBOLS.undefined`) injected during a custom `JSON.stringify` replacer / `JSON.parse` reviver. `utils.ts` `typeOf` is a richer `typeof` (distinguishes date/array/null) and drives encoding decisions.

2. **`useSharedState/`** — framework-agnostic cross-component state with no URL involvement. State is shared by **object identity of the default-state object**, not deep equality: `subscribers.ts` holds a `stateMap`/`subscribers` keyed by the default-state object reference. This is why the default state must be a stable module-scoped `const`.

3. **`useUrlStateBase/`** — generic hook composing `useSharedState` + `useUrlEncode` and accepting a `router` with `push`/`replace`. Contains the **"last update wins" URL-write throttling**: a module-global timer batches rapid `setUrl` calls (`TIMEOUT` = 70ms, 330ms on Safari). URL updates are therefore async/debounced, not synchronous.

4. **Framework wrappers** — `next/`, `react-router/` (v7), `react-router6/`, `remix/`, `astro/` each export a `useUrlState` that adapts the framework's router to `useUrlStateBase` and handles SSR (`parseSPObj`, `filterUnknownParams`). The Next.js wrapper defaults to `window.history` navigation (`useHistory: true`) to avoid `_rsc` refetches, and accepts server `searchParams`. The Astro wrapper is the Next.js one without `next/navigation`: `window.history` only, `searchParams` as an island prop for the server render (a `URLSearchParams` there serializes to `{}`, so it must be a plain object), and a resync through `subscribeToUrl` on every URL change, because islands hydrate independently. The two bodies are copies for now, on purpose.

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
| `/` under `Accept: text/markdown`, or a known agent user-agent — 307 to `/index.md` | `src/proxy.ts` |
| `/index.md`, `/react-router.md`, `/remix.md` | `src/app/<route>.md/route.ts`, all three through `src/app/llmsTxtResponse.ts` |
| `<link rel="alternate">` and a `Link:` response header | `src/app/seoStuff.ts` (`markdownAlternates`), `next.config.mjs` |

All three `.md` mirrors serve the same document, deliberately: this site is one
page repeated per router variant, and `public/llms.txt` documents Next.js,
React Router and Remix together. Three near-identical files would be three
things to keep in sync and would answer no question better.

**The one rule that matters: `/` must never carry a Markdown body.** Vercel's
edge cache keys on the URL path and does not honour `Vary`, and Next overwrites
`Vary` on dynamic App Router responses anyway. A cacheable Markdown variant is
pinned into the entry for `/` by the first agent that asks, and every reader
after it gets raw text until it expires — a 200 throughout, so nothing alerts.

`src/proxy.ts` therefore answers an agent with a **307 to `/index.md`**. `/` is
left holding only HTML, and the document sits on a URL with one representation
that caches normally — `max-age=3600` and a CDN hit, instead of the `no-store`
an inline body needs.

307, not 308: a permanent redirect is heuristically cacheable under RFC 9111,
and one held under `/` would send readers to the mirror.

The negotiation stays in the proxy rather than moving to `next.config.mjs`
`redirects()`, which would decide it at the CDN with no function involved. Next
compiles a `has` condition to ``new RegExp(`^${value}$`)`` — anchored, no `i`
flag — so these patterns cannot be ported as written: `(?i)` throws in JS,
`(?i:…)` is a V8-only ES2025 modifier Vercel's router need not accept, and the
anchoring turns a token list into a whole-string match no real user-agent
satisfies. Two engines disagreeing about one rule is the shape of every
incident in this file. One engine, testable locally.
