# API

This module provides functions for encoding and decoding state objects to and from URL query strings.

## `encodeState`

Encodes a state object into a URL query string.

### Parameters

- `state: object` - The state object to encode.
- `defaults?: object` - Optional default values for the state object.
- `paramsToKeep?: string | URLSearchParams` - Optional existing parameters to keep in the resulting query string.

### Returns

A string representing the encoded URL query string.

### Example

```typescript
import { encodeState } from 'state-in-url';

const form = { name: '' };
const encodedState = encodeState({ name: 'test' }, form, 'someExistingParam=123');
console.log(encodedState); // Output: name=◖test&someExistingParam=∓123
```

## `decodeState`

Decodes a URI string into an object.

### Parameters

- `uriString: string | URLSearchParams` - The URI string or URLSearchParams object to decode.
- `defaults?: T` - Optional default values for the resulting object.

### Returns

The decoded object.

### Example

```typescript
import { decodeState } from 'state-in-url';

const form = { name: '', key: '' };
const decodedState = decodeState('key=◖value&name=◖Alex', form);
console.log(decodedState); // Output: { name: 'Alex', key: 'value }
```
