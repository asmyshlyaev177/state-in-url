# API

This module provides a custom React hook for sharing state between unrelated components in React applications.

## `useSharedState` hook

A custom React hook that manages shared state across components.

### Parameters:

- `defaultState: T` - An object representing the default state values.
- `_getInitial?: () => T` - Optional function to get the initial state, useful for SSR

### Returns:

An object containing:
- `state: T` - The current state (readonly).
- `getState: () => T` - Function to get the current state.
- `setState: T | (T) => void` - Function to update the state.

### Example:

```typescript
import { useSharedState } from 'state-in-url';

const form = { name: '' };
const { state, getState, setState } = useSharedState(form);

// Update state
setState({ name: 'test' });

// Or update state using a function
setState(curr => ({ ...curr, name: 'test' }));

// Get current state
const currentState = getState();
```

## `setState`

Updates the shared state.

### Parameters:

- `value: T | DeepReadonly<T> | ((currState: T) => T)` - New state value or a function that receives the current state and returns the new state.

## `getState`

Returns the current state.

### Returns:

- The current state object.
