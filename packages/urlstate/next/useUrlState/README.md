# API

This module provides a custom React hook for managing state that is synchronized with URL search parameters in Next.js applications.

## `useUrlState` hook

A custom React hook that manages state and synchronizes it with URL search parameters.

### Parameters:

- `defaultState: object` - An object representing the default state values.
- `sp?: object` - Optional search params object from Next.js server component.
- `replace?: boolean` - Control will `updateUrl` use `replace` or `push` methods on router, default replace=true, can override by `updateUrl(stateObj, { replace: false })`

### Returns:

An object containing:
- `state: object` - The current state (readonly).
- `updateState: Function` - Function to update the state without updating the URL.
- `updateUrl: Function` - Function to update both the state and the URL.

### Example:

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { state, updateState, updateUrl } = useUrlState(form);

// Update state without changing URL
updateState({ name: 'test' });

// API same as React.useState
updateState(currVal => ({ ...currVal, name: 'test' }) );

// Update state and URL
updateUrl({ name: 'test' }, { replace: false, scroll: true });
```

## `updateState`

Updates the state without modifying the URL.

### Parameters:

- `value: T | Partial<T> | T => T` - New state value or a function that receives the current state and returns the new state.

## `updateUrl`

Updates both the state and the URL.

### Parameters:

- `value?: T | Partial<T> | (currState: T) => T` - Optional new state value or a function that receives the current state and returns the new state.
- `options?: Options` - Optional options object. When `replace` is true it will use router.replace. Nextjs `scroll` is `false` by default.

