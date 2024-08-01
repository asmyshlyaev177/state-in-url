# API

This hook can be used as a base to create hooks for different routers

## `useUrlStateBase` hook

A custom React hook to create custom `useUrlState` hooks.

### Parameters:

- `defaultState: object` - An object representing the default state values.
- `router: object` - Router object with `push` and `replace` methods
- `sp?: object` - Optional search params object from Next.js server component.

### Returns:

An object containing:
- `state: object` - The current state (readonly).
- `getState: Function` - Function to get state.
- `updateState: Function` - Function to update the state without updating the URL.
- `updateUrl: Function` - Function to update both the state and the URL.

### Example:

```typescript
import { useUrlStateBase } from 'state-in-url';

function useUrlStateCustom<T>(state: T) {
  const router = React.useMemo({
    push: (url: string) => window.history.pushState(url),
    replace: (url: string) => window.history.replaceState(url)
  }, []);
  return useUrlState(state, router);
}
```

## `updateState`

Updates the state without modifying the URL.

### Parameters:

- `value: object | object => object` - New state value or a function that receives the current state and returns the new state.

## `updateUrl`

Updates both the state and the URL.

### Parameters:

- `value?: object | (currState: object) => object` - Optional new state value or a function that receives the current state and returns the new state.
- `options?: Options` - Optional options object. When `replace` is true it will use router.replace. Other nextjs native options for `router`'s push/replace.
