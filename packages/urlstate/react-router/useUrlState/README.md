# API

This module provides a custom React hook for managing state that is synchronized with URL search parameters in react-router@6 applications.

## `useUrlState` hook

A custom React hook that manages state and synchronizes it with URL search parameters.

### Parameters:

- `defaultState: object` - An object representing the default state values.
- `replace?: boolean` - Control will `updateUrl` use `replace` or `push` methods on router, default replace=true, can override by `updateUrl(stateObj, { replace: false })`
- `options?: NavigateOptions` - type from NavigateOptions of `react-router` type, same as options from `useNavigate`

### Returns:

An object containing:
- `state: object` - The current state (readonly).
- `updateState: Function` - Function to update the state without updating the URL.
- `updateUrl: Function` - Function to update both the state and the URL.

### Example:

```typescript
import { useUrlState } from 'state-in-url/react-router';

const form = { name: '', age: 0 };
const { state, updateState, updateUrl } = useUrlState(form);

// Update state without changing URL
updateState({ name: 'test' });

// options from type `NavigateOptions` from 'react-router`
updateState(currVal => ({ ...currVal, name: 'test' }) );

// Update state and URL
updateUrl({ name: 'test' }, { replace: false, preventScrollReset: false });
```

## `updateState`

Updates the state without modifying the URL.

### Parameters:

- `value: T | Partial<T> | T => T` - New state value or a function that receives the current state and returns the new state.
- `...NavigateOptions` - props from NavigateOptions of `react-router` type, same as options from `useNavigate`

## `updateUrl`

Updates both the state and the URL.

### Parameters:

- `value?: T | Partial<T> | (currState: T) => T` - Optional new state value or a function that receives the current state and returns the new state.
- `options?: NavigateOptions` - Optional options object from react-router's `NavigateOptions` type.
