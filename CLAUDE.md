# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`state-in-url` is a ~2KB, zero-runtime-dependency React library that stores typed, JSON-serializable state objects in URL query parameters while preserving types and structure (numbers stay numbers, dates stay dates, nested objects/arrays work). It ships a `useUrlState` hook for Next.js App Router, React Router v6/v7, and Remix v2, plus framework-agnostic encode/decode helpers. Positioned as a NUQS alternative.

## Commands

This is a **pnpm** monorepo. `pnpm` is enforced (`only-allow`). Most scripts run through **wireit** (caching/dependency graph), so always invoke them via `pnpm run <script>`, not the underlying tool directly.

- `pnpm run test` — full suite: `tsc` typecheck → unit tests → build all packages → exports test → integration (e2e) tests. This is what CI runs.
- `pnpm run test:unit` — Vitest unit tests (depends on `tsc`). Runs `npx vitest` (watch by default; coverage is enabled in config).
- `pnpm run test:int` — Playwright e2e (`--project=chromium`). Requires the demo servers running (`pnpm run start` or `pnpm run dev`).
- `pnpm run tsc` — `tsc --noEmit` typecheck only.
- `pnpm run build` — Rollup build of the library into `dist/` (ESM `.mjs` + CJS `.js` + `.d.ts`).
- `pnpm run dev` — library in Rollup watch mode + all example apps. Next.js 15 demo on `http://localhost:3000`.
- `pnpm run kill` — kill hung Next/Vite/wireit processes (use this if dev/test servers hang).
- `pnpm run cleanup` / `pnpm run reinstall` — nuke build artifacts and node_modules.
- `pnpm run setup` — `playwright install --with-deps` (needed before e2e on a fresh machine).

Run a single unit test: `npx vitest run packages/urlstate/encoder/encoder.test.ts` (or pass a `-t "name"` filter).
Run a single e2e spec: `npx playwright test tests/useUrlState/main.spec.ts --project=chromium`.

## Layout

- `packages/urlstate/` — **the library source, and the root npm package itself.** It is deliberately NOT a pnpm workspace member (see `pnpm-workspace.yaml`); it's published from the repo root via `dist/`.
- `packages/example-*` — the workspace members: demo apps for nextjs14/15/16, react (Vite), react-router6, react-router7, remix2. These exist to be driven by the Playwright e2e tests and to host the live demo.
- `packages/shared/` — shared Tailwind config, styles, and components used by the example apps (aliased as `shared/*` in `tsconfig.base.json`).
- `tests/` — Playwright e2e specs (separate from the colocated `*.test.ts` unit tests).
- `skills/` — agent skill files (`SKILL.md` per topic) that are **published as part of the npm package** (see `files` in `package.json`). `skills/_artifacts/` is dev-only and excluded from publish; `skill_spec.md` there is a useful map of the library's domains and known user failure modes.

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

## Conventions

- **Conventional commits** (commitlint + commitizen enforced via husky). Releases are automated by semantic-release. `fix:` and `feat:` bump the version and **must only be used for changes inside `packages/urlstate/` or `package.json`** — use `ci`, `build`, `docs`, `style`, `test`, `chore`, `refactor` for everything else (examples, tests, config).
- ESLint config (`.eslintrc.cjs`) uses `plugin:maintainable/recommended` with a complexity cap of 12 and enforced import sorting; Prettier runs via lint-staged on commit. Unused vars must be prefixed `_`.
- Node 20 (`.nvmrc`). Build target ES2022.
- When adding a new entry point, add it to the `exports` map in `package.json` and ensure its `index.ts` is picked up by the Rollup glob (`packages/urlstate/**/index.ts`).
