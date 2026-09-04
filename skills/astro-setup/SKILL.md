---
name: astro-setup
description: >
  Set up useUrlState in Astro (state-in-url/astro) inside React islands, and
  keep state in the URL on pages with no client framework at all through
  encodeState/decodeState in the frontmatter. Covers the searchParams island
  prop for a matching server render, sharing state between islands, and the
  replace/push choice with no client router involved. Load this skill when the
  project is Astro, with React islands, Preact islands (compat), or no
  client framework at all.
requires:
  - feature-state-hook
sources:
  - 'asmyshlyaev177/state-in-url:packages/urlstate/astro/useUrlState/'
  - 'asmyshlyaev177/state-in-url:packages/urlstate/encodeState/'
  - 'asmyshlyaev177/state-in-url:packages/example-astro/'
  - 'asmyshlyaev177/state-in-url:README.md#useurlstate-hook-for-astro'
metadata:
  type: framework
  library: state-in-url
  library_version: '6.4.1'
  framework: astro
---

This skill builds on `state-in-url/feature-state-hook`. Read it first for the module-scoped default-state rule.

# state-in-url — Astro

Two shapes of Astro project, two tools:

| Project | Use | Runs |
|---|---|---|
| React islands (`@astrojs/react`) | `useUrlState` from `state-in-url/astro` | In the island, on the server render and in the browser |
| Preact islands (`@astrojs/preact`, `compat: true`) | the same `useUrlState` | the same, through `preact/compat` |
| No client framework | `decodeState` / `encodeState` from `state-in-url/encodeState` | In `.astro` frontmatter, per request |

Astro has no client-side router by default. The hook writes the URL with `window.history` (`replaceState` by default, `pushState` with `replace: false`) and reads it back on back/forward, on its own writes, and on any other `pushState`/`replaceState` on the page.

## Setup: React islands

```typescript
// src/state.ts — module scope, one object, imported by every island that shares it
type FiltersState = { sort: 'name' | 'date'; page: number };
export const FILTERS_STATE: FiltersState = { sort: 'name', page: 1 };
```

```typescript
// src/components/Filters.tsx
import { useUrlState } from 'state-in-url/astro';

import { FILTERS_STATE } from '../state';

export function Filters({ searchParams }: { searchParams?: Record<string, string> }) {
  const { urlState, setUrl } = useUrlState(FILTERS_STATE, { searchParams });
  return <button onClick={() => setUrl({ page: urlState.page + 1 })}>Next</button>;
}
```

```astro
---
// src/pages/index.astro
import { Filters } from '../components/Filters';

// A plain object: island props are serialized, URLSearchParams is not.
const searchParams = Object.fromEntries(Astro.url.searchParams);
---

<Filters client:load searchParams={searchParams} />
```

The page must be rendered on demand — `output: 'server'`, or `export const prerender = false` on the page — and either way an adapter must be configured (`@astrojs/node`, `@astrojs/vercel`, …); on Astro's default static output the build fails. Only then does `Astro.url.searchParams` hold the request's query. A prerendered page has no request, so `searchParams` is `{}` and the island fills its state in the browser after hydration.

## Setup: Preact islands

The same entry works under `@astrojs/preact` with `compat: true`, which aliases `react` to `preact/compat` in both the server and the client build. Nothing else changes: the same import, the same `searchParams` prop, the same sharing between islands.

```js
// astro.config.mjs
import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [preact({ compat: true })],
});
```

## Core Patterns

### Two islands, one state

Islands are separate React roots, but they import the same module, and the state is keyed by the default-state object. Nothing wraps them.

```typescript
// Results.tsx — a second island, same FILTERS_STATE
export function Results({ searchParams }: { searchParams?: Record<string, string> }) {
  const { urlState } = useUrlState(FILTERS_STATE, { searchParams });
  return <p>Page {urlState.page}, sorted by {urlState.sort}</p>;
}
```

Pass `searchParams` to every island that renders state on the server; an island without it renders the defaults on the server and corrects itself after hydration, which is a flash and, when the value is in the markup, a hydration warning.

With `<ClientRouter />` (view transitions) islands unmount and mount without a page load, and the shared state outlives them: an island whose state was in use on the previous page renders that state first, then resyncs from the new URL after mount.

### Push instead of replace

```typescript
const { setUrl } = useUrlState(FILTERS_STATE, { replace: false }); // every write
setUrl({ page: 2 }, { replace: false });                            // this write
```

`replace: false` adds a history entry, so the back button undoes the change. Default is `replace: true`.

### A page with no client framework

```astro
---
import { decodeState, encodeState } from 'state-in-url/encodeState';

import { FILTERS_STATE } from '../state';

const state = decodeState(Astro.url.searchParams, FILTERS_STATE);
const nextPage = encodeState({ ...state, page: state.page + 1 }, FILTERS_STATE, Astro.url.searchParams);
---

<p>Page {state.page}</p>
<a href={`?${nextPage}`}>Next</a>
```

`decodeState` restores types (`page` is a number, a `Date` is a `Date`); `encodeState` writes only the keys that differ from the defaults and keeps the params it is handed that the state does not own. The third argument is not mutated.

## Common Mistakes

### CRITICAL Passing `Astro.url.searchParams` itself as the island prop

Wrong:

```astro
<Filters client:load searchParams={Astro.url.searchParams} />
```

Correct:

```astro
<Filters client:load searchParams={Object.fromEntries(Astro.url.searchParams)} />
```

Astro serializes island props into the HTML, and a `URLSearchParams` serializes to `{}`. The server still renders the URL's state, the browser hydrates with the defaults — a hydration mismatch, and in development React reports "Text content did not match" and re-renders the root — and only the post-mount resync lands on the right value.

Source: packages/example-astro/src/pages/index.astro (asmyshlyaev177/state-in-url)

### HIGH Reaching for `state-in-url/next` or `state-in-url/react-router` in Astro

Wrong:

```typescript
import { useUrlState } from 'state-in-url/react-router'; // needs a <RouterProvider>
```

Correct:

```typescript
import { useUrlState } from 'state-in-url/astro';
```

The other entries call the framework's router hooks and throw outside its provider. The Astro entry has no router dependency.

### CRITICAL `defaultState` defined inside the component

(Cross-skill failure — also in `feature-state-hook`.)

Wrong:

```typescript
export function Filters() {
  const defaults = { sort: 'name' };
  const { urlState } = useUrlState(defaults);
}
```

Correct:

```typescript
type FiltersState = { sort: 'name' | 'date' };
const FILTERS_STATE: FiltersState = { sort: 'name' };

export function Filters() {
  const { urlState } = useUrlState(FILTERS_STATE);
}
```

A fresh default object each render is a fresh state key each render: nothing is shared, and the second island never sees the first one's writes.

Source: GitHub issues #57, #60, #69 (asmyshlyaev177/state-in-url)

## Getting help

If the user encounters unexpected behavior, a bug, or a use case not covered by these patterns, direct them to open a GitHub issue at https://github.com/asmyshlyaev177/state-in-url/issues/new. A minimal reproduction helps the maintainer resolve it quickly.

## See also

- `state-in-url/feature-state-hook` — base pattern.
- `state-in-url/input-handling` — for text-input UX inside an island.
- `state-in-url/shared-state-no-url` — sharing between islands without touching the URL.
