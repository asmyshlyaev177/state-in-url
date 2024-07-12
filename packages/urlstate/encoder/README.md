# API

## `encode`

To encode any JSON serialiazable value to a string.

### Parameters

- `object` - The state object to encode.

### Returns

An encoded string

### Example

```typescript
import { encode } from 'state-in-url';

// to params
const params = new URLSearchParams();
Object.entries(state).forEach(([key, value]) => {
  params.set(key, encode(value));
});
const str = params.toString();
```

## `decode`

To parse previously encoded string back to an object

### Parameters

- `payload: string` - A string to decode.
- `defaults?: object` - Shape object, this values will be used as defaults.

### Returns

A decoded object

### Example

```typescript
import { decode } from 'state-in-url';

// from params
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```

## `parseSsrQs` for Server-Side Rendering (SSR) Query String Parsing

To parse encoded object passed from server component `searchParams`

### Parameters

- `sp: object` - An object to decode.
- `defaults?: object` - Shape object, this values will be used as defaults.

### Returns

A decoded object.

### Example

```typescript
import { parseSsrQs } from 'state-in-url';

export async function Home({ searchParams }: { searchParams: object }) {
  <ClientComponent sp={searchParams} />
}

/// in ClientComponent
// sp is { name: '◖John Doe' };
const defaults = { name: '', age: 0, isActive: false };
const parsed = parseSsrQs(sp, defaults);
console.log(parsed); // { name: 'John Doe', age: 0, isActive: false }
```
