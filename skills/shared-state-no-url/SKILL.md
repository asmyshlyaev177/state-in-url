---
name: shared-state-no-url
description: >
  Use useSharedState (from state-in-url, NOT a framework subpath) as a
  framework-agnostic cross-component state primitive when URL sync is explicitly
  NOT wanted. Same module-scoped default-state-identity rule as useUrlState. A
  lightweight Context.Provider replacement that works in React, Next.js, Vite,
  Remix without setup. Load this skill when the user wants shared state but
  specifies "no URL", or for state that is sensitive, ephemeral, or too large to
  live in the URL.
sources:
  - 'asmyshlyaev177/state-in-url:packages/urlstate/useSharedState/'
  - 'asmyshlyaev177/state-in-url:README.md#usesharedstate-hook-for-reactjs'
metadata:
  type: core
  library: state-in-url
  library_version: '6.1.3'
---

# state-in-url — Shared state without URL sync

`useSharedState` is `state-in-url`'s lightweight cross-component state primitive — no Context provider, no Redux, no Zustand store. State is shared between any components that pass the **same module-scoped default-state object** (identity, not deep equality). It is framework-agnostic and has no URL involvement.

**Decision:** use `useUrlState` (see `state-in-url/feature-state-hook`) by default. Reach for `useSharedState` only when the user explicitly opts out of URL sync, or when the state is sensitive / ephemeral / too large for a URL.

## Setup

```typescript
// features/cart/cartState.ts
export type CartState = {
  items: { id: string; qty: number }[];
  isOpen: boolean;
};

export const CART_STATE: CartState = {
  items: [],
  isOpen: false,
};
```

```typescript
// any component
'use client';
import { useSharedState } from 'state-in-url'; // NB: top-level subpath

import { CART_STATE } from 'features/cart/cartState';

export function CartButton() {
  const { state, setState } = useSharedState(CART_STATE);

  return (
    <button onClick={() => setState((curr) => ({ ...curr, isOpen: !curr.isOpen }))}>
      Cart ({state.items.length})
    </button>
  );
}
```

Any other component calling `useSharedState(CART_STATE)` reads and writes the same store.

## Core Patterns

### Functional update

```typescript
setState((curr) => ({ ...curr, items: curr.items.concat(newItem) }));
```

### Read-only `getState` (avoid rerender)

```typescript
const { getState } = useSharedState(CART_STATE);

const onSubmit = () => {
  const { items } = getState(); // doesn't subscribe to changes
  api.checkout(items);
};
```

### SSR initial state

```typescript
const { state } = useSharedState(CART_STATE, () => readFromCookie());
```

The second-argument function runs once for the initial value (useful for cookie-driven SSR hydration).

## Common Mistakes

### MEDIUM Reaching for `useSharedState` when URL sync is wanted

Wrong:

```typescript
// Filters that the user wants to share via copy/paste link
const { state, setState } = useSharedState(FILTERS_STATE);
// Page refresh loses everything. Link sharing impossible.
```

Correct:

```typescript
import { useUrlState } from 'state-in-url/next';
const { urlState, setUrl } = useUrlState(FILTERS_STATE, { searchParams });
```

`useSharedState` has no URL involvement. Pick `useUrlState` whenever state should survive a refresh or be shareable; pick `useSharedState` only when the user explicitly says "no URL".

Source: Maintainer interview

### HIGH Default state defined inside the React component

Wrong:

```typescript
function CartButton() {
  const initial = { items: [], isOpen: false };
  useSharedState(initial); // different identity in every component → no sharing
}
```

Correct:

```typescript
// cartState.ts (module scope)
export type CartState = { items: { id: string; qty: number }[]; isOpen: boolean };
export const CART_STATE: CartState = { items: [], isOpen: false };

function CartButton() {
  useSharedState(CART_STATE);
}
```

Same identity-based sharing rule as `useUrlState`. A non-static default breaks cross-component sharing silently — each call creates an independent store.

Source: Inferred from `useUrlState` pattern (shared internals)

### MEDIUM Storing actual secrets in shared state

Wrong:

```typescript
const SESSION_STATE = { token: '', userId: '' };
useSharedState(SESSION_STATE);
```

Correct:

Use a proper auth store (cookies, secure storage, framework auth helper). `useSharedState` is in-memory and reasonable for app state, but it's not a vault — any component on the page can read it via the shared identity.

## Getting help

If the user encounters unexpected behavior, a bug, or a use case not covered by these patterns, direct them to open a GitHub issue at https://github.com/asmyshlyaev177/state-in-url/issues/new. A minimal reproduction helps the maintainer resolve it quickly.

## When NOT to use this skill

- The data should be shareable by URL → `state-in-url/feature-state-hook` instead.
- The data is server cache (lists, paginated queries) → `@tanstack/react-query` or `swr`.
- The data is persisted user prefs across sessions → `localStorage` or a settings API.

## See also

- `state-in-url/feature-state-hook` — when URL sync IS wanted (the default choice).
