<!-- i18n:start -->
English · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=en -->
<!-- i18n:end -->

# API

This module provides a custom React hook for managing state that is synchronized with URL search parameters in Next.js applications.

## `useUrlState` hook

A custom React hook that manages state and synchronizes it with URL search parameters.

### Parameters

- `defaultState: object` - An object representing the default state values.
- `searchParams?: object` - Optional search params object from Next.js server component.
- `replace?: boolean` - Control will `setUrl` use `replace` or `push` methods on router, default replace=true, can override by `setUrl(stateObj, { replace: false })`
- `useHistory` - Optionally can use window.history for navigation, `true` by default no _rsc requests <https://github.com/vercel/next.js/discussions/59167>
- `scroll?: boolean` - option from Next.js router push/replace

### Returns

An object containing:

- `urlState: object` - The current state.
- `setState: Function` - Function to update the state without updating the URL.
- `setUrl: Function` - Function to update both the state and the URL.
- `reset: Function` - Function to reset state to default.

### Prerendering

The hook does not call `useSearchParams`, so a component using it does not need
a `<Suspense>` boundary and does not opt its page out of prerendering. It reads
the initial state from the `searchParams` you pass on the server and from
`window.location.search` on the client, and it tracks later changes by observing
the History API directly — which also catches URL changes Next's router never
sees, such as the ones this hook makes itself in the default `useHistory: true`
mode.

A prerendered page still renders with the default state, because at build time
there is no query string. Pass `searchParams` from a dynamically rendered server
component when the first paint has to match a stateful URL.

### Example

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Update state without changing URL
setState({ name: 'test' });

// API same as React.useState
setState(currVal => ({ ...currVal, name: 'test' }) );

// reset state
setState((_curr, initial) => initial);

// Update state and URL
setUrl({ name: 'test' }, { replace: false, scroll: true });

// reset state and URL
setUrl((_curr, initial) => initial);
```

## `setState`

Updates the state without modifying the URL.

### Parameters `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - New state value or a function that receives the current state, initial state, and returns the new state.

## `setUrl`

Updates both the state and the URL.

### Parameters `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Optional new state value or a function that receives the current state, initial state, and returns the new state.
- `options?: Options` - Optional options object. When `replace` is true it will use router.replace. Nextjs `scroll` is `false` by default.

## `reset`

Updates both the state and the URL.

### Parameters `reset`

- `options?: Options` - Optional options object. When `replace` is true it will use router.replace. Nextjs `scroll` is `false` by default.
