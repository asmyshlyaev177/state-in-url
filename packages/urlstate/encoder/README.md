<!-- i18n:start -->
English · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=en -->
<!-- i18n:end -->

# API

## `encode`

To encode any JSON serialiazable value to a string.

### Parameters

- `object` - The state object to encode.

### Returns

An encoded string

### Example

```typescript
import { encode } from 'state-in-url/encoder';

// to params
const params = new URLSearchParams();
for (const [key, value] of Object.entries(state)) {
  params.set(key, encode(value));
}
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
import { decode } from 'state-in-url/encoder';

// from params
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```
