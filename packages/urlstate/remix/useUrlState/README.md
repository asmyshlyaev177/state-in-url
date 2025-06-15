# API

This module provides a custom React hook for managing state that is synchronized with URL search parameters in remix@2 applications.

## `useUrlState` hook

A custom React hook that manages state and synchronizes it with URL search parameters.

### Parameters

- `defaultState: object` - An object representing the default state values.
- `replace?: boolean` - Control will `setUrl` use `replace` or `push` methods on router, default replace=true, can override by `updateUrl(stateObj, { replace: false })`
- `options?: NavigateOptions` - `replace` arg and types from [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) of `react-router` type, same as options from `useNavigate`
- `useHistory` - Optionally can use window.history for navigation
- `preventScrollReset` - Option from react-router navigate

### Returns

An object containing:

- `urlState: object` - The current state.
- `setState: Function` - Function to update the state without updating the URL.
- `setUrl: Function` - Function to update both the state and the URL.
- `reset: Function` - Function to reset state to default.

### Example

```typescript
import { useUrlState } from 'state-in-url/remix';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Update state without changing URL
setState({ name: 'test' });

// options from type `NavigateOptions` from 'react-router`
setState(currVal => ({ ...currVal, name: 'test' }) );

// Update state and URL
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });
```

## `setState`

Updates the state without modifying the URL.

### Parameters `setState`

- `value: T | Partial<T> | T => T` - New state value or a function that receives the current state and returns the new state.
- `...NavigateOptions` - props from NavigateOptions of `react-router` type, same as options from `useNavigate`

## `setUrl`

Updates both the state and the URL.

### Parameters `setUrl`

- `value?: T | Partial<T> | (currState: T) => T` - Optional new state value or a function that receives the current state and returns the new state.
- `options?: NavigateOptions` - Optional options object from react-router's [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) type.

## `reset`

Updates both the state and the URL.

### Parameters `reset`

- `options?: NavigateOptions` - Optional options object from react-router's [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) type.
