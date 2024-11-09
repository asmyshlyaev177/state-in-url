# API

This module provides a custom React hook for managing state that is synchronized with URL search parameters in react-router@6 applications.

## `useUrlState` hook

A custom React hook that manages state and synchronizes it with URL search parameters.

### Parameters:

- `defaultState: object` - An object representing the default state values.
- `replace?: boolean` - Control will `setUrl` use `replace` or `push` methods on router, default replace=true, can override by `updateUrl(stateObj, { replace: false })`
- `options?: NavigateOptions` - type from NavigateOptions of `react-router` type, same as options from `useNavigate`
- `useHistory` - Optionally can use window.history for navigation

### Returns:

An object containing:

- `urlState: object` - The current state.
- `setState: Function` - Function to update the state without updating the URL.
- `setUrl: Function` - Function to update both the state and the URL.

### Example:

```typescript
import { useUrlState } from 'state-in-url/react-router';

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

### Parameters:

- `value: T | Partial<T> | T => T` - New state value or a function that receives the current state and returns the new state.
- `...NavigateOptions` - props from NavigateOptions of `react-router` type, same as options from `useNavigate`

## `setUrl`

Updates both the state and the URL.

### Parameters:

- `value?: T | Partial<T> | (currState: T) => T` - Optional new state value or a function that receives the current state and returns the new state.
- `options?: NavigateOptions` - Optional options object from react-router's `NavigateOptions` type.
