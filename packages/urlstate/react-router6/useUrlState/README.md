# API

This module provides a custom React hook for managing state that is synchronized with URL search parameters in react-router@6-7 applications.

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
import { useUrlState } from 'state-in-url/react-router6';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Update state without changing URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// reset state
setState((_curr, initial) => initial);

// Update state and URL
// options from type `NavigateOptions` from 'react-router`
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });

// reset state and URL
setUrl((_curr, initial) => initial);
```

## `setState`

Updates the state without modifying the URL.

### Parameters `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - New state value or a function that receives the current state, initial state, and returns the new state.
- `...NavigateOptions` - props from NavigateOptions of `react-router` type, same as options from `useNavigate`

## `setUrl`

Updates both the state and the URL.

### Parameters `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Optional new state value or a function that receives the current state, initial state, and returns the new state.
- `options?: NavigateOptions` - Optional options object from react-router's [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) type.

## `reset`

Updates both the state and the URL.

### Parameters `reset`

- `options?: NavigateOptions` - Optional options object from react-router's [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) type.
