# API

This module provides a custom React hook for managing state that is synchronized with URL search parameters in Next.js applications.

## `useUrlState` hook

A custom React hook that manages state and synchronizes it with URL search parameters.

### Parameters:

- `defaultState: object` - An object representing the default state values.
- `sp?: object` - Optional search params object from Next.js server component.
- `replace?: boolean` - Control will `setUrl` use `replace` or `push` methods on router, default replace=true, can override by `setUrl(stateObj, { replace: false })`
- `useHistory` - Optionally can use window.history for navigation, `true` by default no _rsc requests https://github.com/vercel/next.js/discussions/59167

### Returns:

An object containing:

- `urlState: object` - The current state.
- `setState: Function` - Function to update the state without updating the URL.
- `setUrl: Function` - Function to update both the state and the URL.

### Example:

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Update state without changing URL
setState({ name: 'test' });

// API same as React.useState
setState(currVal => ({ ...currVal, name: 'test' }) );

// Update state and URL
setUrl({ name: 'test' }, { replace: false, scroll: true });
```

## `setState`

Updates the state without modifying the URL.

### Parameters:

- `value: T | Partial<T> | T => T` - New state value or a function that receives the current state and returns the new state.

## `setUrl`

Updates both the state and the URL.

### Parameters:

- `value?: T | Partial<T> | (currState: T) => T` - Optional new state value or a function that receives the current state and returns the new state.
- `options?: Options` - Optional options object. When `replace` is true it will use router.replace. Nextjs `scroll` is `false` by default.

