---
name: react-router-remix-setup
description: >
  Set up useUrlState for React Router v7 (state-in-url/react-router), React
  Router v6 (state-in-url/react-router6 — moved here in 6.0.0), and Remix v2
  (state-in-url/remix). The hook API is identical across all three; only the
  import path and per-call NavigateOptions (preventScrollReset, state, replace)
  differ. Load this skill when wiring useUrlState into any non-Next.js
  React router or migrating from an older import path.
type: framework
library: state-in-url
framework: react
library_version: '6.1.3'
requires:
  - feature-state-hook
sources:
  - 'asmyshlyaev177/state-in-url:packages/urlstate/react-router/useUrlState/'
  - 'asmyshlyaev177/state-in-url:packages/urlstate/react-router6/useUrlState/'
  - 'asmyshlyaev177/state-in-url:packages/urlstate/remix/useUrlState/'
  - 'asmyshlyaev177/state-in-url:CHANGELOG.md#600-2025-08-05'
---

This skill builds on `state-in-url/feature-state-hook`. Read it first for the module-scoped default-state rule.

# state-in-url — React Router and Remix

The hook signature, return shape, and behavior of `useUrlState` are identical across React Router v6, v7, and Remix v2. Three things differ:

| Aspect | Difference |
|---|---|
| Import path | `state-in-url/react-router` (v7), `state-in-url/react-router6` (v6), `state-in-url/remix` (Remix v2) |
| `setUrl` per-call options | Accepts `NavigateOptions` from `react-router` (e.g. `preventScrollReset`, `state`, `replace`) |
| SSR | Remix v2 routes can hydrate from loader data; React Router CSR-only by default |

## Setup

### React Router v7

```typescript
import { useUrlState } from 'state-in-url/react-router';

type FiltersState = { sort: 'name' | 'date'; page: number };
const FILTERS_STATE: FiltersState = { sort: 'name', page: 1 };

export function FiltersBar() {
  const { urlState, setUrl } = useUrlState(FILTERS_STATE);
  return <button onClick={() => setUrl({ page: urlState.page + 1 })}>Next</button>;
}
```

### React Router v6 (since state-in-url 6.0.0)

```typescript
// Note the /react-router6 subpath
import { useUrlState } from 'state-in-url/react-router6';

type FiltersState = { sort: 'name' | 'date'; page: number };
const FILTERS_STATE: FiltersState = { sort: 'name', page: 1 };

export function FiltersBar() {
  const { urlState, setUrl } = useUrlState(FILTERS_STATE);
  return <button onClick={() => setUrl({ page: urlState.page + 1 })}>Next</button>;
}
```

### Remix v2

```typescript
import { useUrlState } from 'state-in-url/remix';

type FiltersState = { sort: 'name' | 'date'; page: number };
const FILTERS_STATE: FiltersState = { sort: 'name', page: 1 };

export default function Route() {
  const { urlState, setUrl } = useUrlState(FILTERS_STATE);
  return <button onClick={() => setUrl({ page: urlState.page + 1 })}>Next</button>;
}
```

## Core Patterns

### Pass NavigateOptions per call

```typescript
setUrl({ tab: 'b' }, { replace: false, preventScrollReset: true });
```

`replace: false` creates a new history entry (push) instead of replacing.
`preventScrollReset: true` keeps the page scroll position after the navigation — important when URL state controls in-page UI rather than route content.

### `basename` support

Both `useUrlState` hooks for React Router respect the router's `basename`. No extra configuration is needed in the hook.

```typescript
// router setup
<BrowserRouter basename="/admin">
  <App />
</BrowserRouter>
// URL state updates happen at /admin?... not /...
```

### Functional update preserving other fields

```typescript
setUrl((curr) => ({ ...curr, page: curr.page + 1 }));
```

## Common Mistakes

### CRITICAL Importing `/react-router` for a React Router v6 project

Wrong:

```typescript
// react-router v6 project
import { useUrlState } from 'state-in-url/react-router'; // targets v7 since 6.0.0
```

Correct:

```typescript
import { useUrlState } from 'state-in-url/react-router6';
```

As of state-in-url v6.0.0 (Aug 2025) the v6 implementation moved to its own subpath. `/react-router` now targets React Router v7 only. Agents trained on older code will use the wrong import.

Source: CHANGELOG v6.0.0 BREAKING CHANGES (asmyshlyaev177/state-in-url)

### HIGH Using the deprecated `useUrlState({ allParamsObj })` signature

Wrong:

```typescript
useUrlState({ defaultState: FORM_STATE, replace: true }); // removed in v5.0.0
```

Correct:

```typescript
useUrlState(FORM_STATE, { replace: true });
```

state-in-url v5.0.0 removed the old object-wrapped call shape. Defaults are now passed positionally; options go in the second argument.

Source: CHANGELOG v5.0.0 BREAKING CHANGES (asmyshlyaev177/state-in-url)

### CRITICAL `defaultState` defined inside the React component

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

Same identity rule as Next.js. A fresh default object each render breaks sharing and initial-state seeding.

Source: GitHub issues #57, #60, #69 (asmyshlyaev177/state-in-url)

## See also

- `state-in-url/feature-state-hook` — base pattern.
- `state-in-url/input-handling` — for text-input UX inside a router-driven page.
- `state-in-url/form-library-integration` — for pairing with `react-hook-form`.
