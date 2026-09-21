<!-- i18n:start -->
English · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=en -->
<!-- i18n:end -->

# API

This module provides a custom React hook for managing state that is synchronized with URL search parameters, for React applications with **no router** — Vite, Create React App, a widget mounted into a page you do not control.

With no router to navigate through, the hook writes the URL with `window.history` and reads it back on back/forward, on its own writes, and on any other `pushState`/`replaceState`. Every component sharing the default-state object shares the state, so nothing has to be passed down.

Use a router entry point instead when the app has one: `state-in-url/next`, `state-in-url/react-router`, `state-in-url/react-router6`, `state-in-url/remix`. For a router this package ships no entry point for, e.g. TanStack Router, build your own hook with [`useUrlStateBase`](../../useUrlStateBase). `state-in-url/astro` is this same hook, documented for [islands](../../astro/useUrlState).

## `useUrlState` hook

A custom React hook that manages state and synchronizes it with URL search parameters.

### Parameters

- `defaultState: object` - An object representing the default state values. Must be a module-scoped constant: state is shared by the identity of this object.
- `searchParams?: object` - Query params from a server render, as a plain object, so the first render matches the URL. A client-only app leaves this out and the hook reads the URL itself.
- `replace?: boolean` - Control will `setUrl` use `replaceState` or `pushState`, default replace=true, can override by `setUrl(stateObj, { replace: false })`

### Returns

An object containing:

- `urlState: object` - The current state.
- `setState: Function` - Function to update the state without updating the URL.
- `setUrl: Function` - Function to update both the state and the URL.
- `reset: Function` - Function to reset state to default.

### Example

```tsx
// src/useFilters.ts
import { useUrlState } from 'state-in-url/react';

type FiltersState = { sort: 'name' | 'date'; page: number };
const FILTERS_STATE: FiltersState = { sort: 'name', page: 1 };

export function useFilters() {
  return useUrlState(FILTERS_STATE);
}
```

```tsx
// src/FiltersBar.tsx
import { useFilters } from './useFilters';

export function FiltersBar() {
  const { urlState, setUrl } = useFilters();

  return (
    <button onClick={() => setUrl({ page: urlState.page + 1 })}>
      Page {urlState.page}
    </button>
  );
}
```

Any other component calling `useFilters()` reads and writes the same state and re-renders with it. There is no provider and nothing to pass through props.

Call `setState` and `setUrl` from event handlers or effects, never during render:

```typescript
// Update state without changing URL
setState({ sort: 'date' });
setState(currVal => ({ ...currVal, sort: 'date' }) );

// reset state
setState((_curr, initial) => initial);

// Update state and URL
setUrl({ sort: 'date' }, { replace: false });

// reset state and URL
setUrl((_curr, initial) => initial);
```

For a text input, call `setState` on every keystroke and `setUrl` on blur or a debounce — URL writes are throttled, and binding `setUrl` to `onChange` makes typing feel slow.
