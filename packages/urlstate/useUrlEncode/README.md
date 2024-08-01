# API

This module provides a React hook for encoding and decoding state objects to and from URL search parameters.

## `useUrlEncode` hook

A custom React hook that returns `stringify` and `parse` functions for encoding and decoding state to and from URL search parameters.
It is a wrapper around `encodeState` and `decodeState` functions, but you can provide state shape once.

### Parameters

- `stateShape: object` - An object representing the shape of the state.

### Returns

An object containing two functions:

- `stringify`: Function to convert state to a URL query string.
- `parse`: Function to parse a URL query string into a state object.

### Example

```typescript
import { useUrlEncode } from 'state-in-url/useUrlEncode';

const form = { name: '' };
const { parse, stringify } = useUrlEncode(form);

// Stringify state to URL query string
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // Output: name=◖John&someExistingParamToKeep=123

// Parse URL query string to state object
const state = parse('name=◖Tom');
console.log(state); // Output: { name: 'Tom' }
```

## `stringify`

Converts a state object to a URL query string.

### Parameters

- `state: T` - The state object to stringify.
- `paramsToKeep?: string | URLSearchParams` - Optional existing parameters to keep in the resulting query string.

### Returns

A string representing the URL query string.

## `parse`

Parses a URL query string or URLSearchParams object into a state object.

### Parameters

- `strOrSearchParams: string | URLSearchParams` - The URL query string or URLSearchParams object to parse.

### Returns

The parsed state object.

### example

```typescript
// Parse URL query string to state object
const state = parse('name=◖Tom');
console.log(state); // Output: { name: 'Tom' }
```
