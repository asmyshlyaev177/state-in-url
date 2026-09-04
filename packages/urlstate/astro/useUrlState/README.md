<!-- i18n:start -->
English · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=en -->
<!-- i18n:end -->

# API

This module provides a custom React hook for managing state that is synchronized with URL search parameters in Astro applications, inside React islands.

Astro has no client-side router by default, so the hook writes the URL with `window.history` and reads it back on back/forward, on its own writes, and on any other `pushState`/`replaceState`, Astro's own `<ClientRouter />` included. Islands on one page share the state: it is keyed by the default-state object, and every island imports the same module. Under `<ClientRouter />` an island whose state was in use on the previous page renders that state first and resyncs from the URL after mount.

Preact islands, through `@astrojs/preact` with `compat: true`, use the same import.

## `useUrlState` hook

A custom React hook that manages state and synchronizes it with URL search parameters.

### Parameters

- `defaultState: object` - An object representing the default state values.
- `searchParams?: object` - `Object.fromEntries(Astro.url.searchParams)`, passed to the island as a prop, so the server render matches the URL and hydration has nothing to correct. A plain object, not `URLSearchParams`: island props are serialized, and a `URLSearchParams` arrives as `{}`. The page must be rendered on demand (`output: 'server'`, or `export const prerender = false` on the page, with an adapter): a prerendered page has no request, so the island gets `{}` and reads the URL after hydration.
- `replace?: boolean` - Control will `setUrl` use `replaceState` or `pushState`, default replace=true, can override by `setUrl(stateObj, { replace: false })`

### Returns

An object containing:

- `urlState: object` - The current state.
- `setState: Function` - Function to update the state without updating the URL.
- `setUrl: Function` - Function to update both the state and the URL.
- `reset: Function` - Function to reset state to default.

### Example

```astro
---
// src/pages/index.astro
import { Form } from '../components/Form';

const searchParams = Object.fromEntries(Astro.url.searchParams);
---

<Form client:load searchParams={searchParams} />
```

```tsx
// src/components/Form.tsx
import { useUrlState } from 'state-in-url/astro';

const form = { name: '', age: 0 };

export function Form({ searchParams }: { searchParams?: Record<string, string> }) {
  const { urlState, setState, setUrl } = useUrlState(form, { searchParams });

  return (
    <input
      value={urlState.name}
      onChange={(ev) => setUrl({ name: ev.target.value })}
    />
  );
}
```

Call `setState` and `setUrl` from event handlers or effects, never during render:

```typescript
// Update state without changing URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// reset state
setState((_curr, initial) => initial);

// Update state and URL
setUrl({ name: 'test' }, { replace: false });

// reset state and URL
setUrl((_curr, initial) => initial);
```

Without islands, on a page with no client framework, `decodeState` and `encodeState` from `state-in-url/encodeState` do the same job in the frontmatter: decode `Astro.url.searchParams` into a typed object, and build the next URL for a link.

## `setState`

Updates the state without modifying the URL.

### Parameters `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - New state value or a function that receives the current state, initial state, and returns the new state.

## `setUrl`

Updates both the state and the URL.

### Parameters `setUrl`

- `value?: Partial<T> | (curr: T, initial: T) => T` - Optional new state value or a function that receives the current state, initial state, and returns the new state.
- `options?: { replace?: boolean }` - `replaceState` (default) or `pushState`.

## `reset`

Resets both the state and the URL to the default.

### Parameters `reset`

- `options?: { replace?: boolean }` - `replaceState` (default) or `pushState`.
