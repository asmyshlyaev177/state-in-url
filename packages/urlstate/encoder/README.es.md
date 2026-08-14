<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=bff98298b23252671a744c36020c2f4288a27fa8 status=translated -->
<!-- i18n:end -->

# API

## `encode`

Para codificar cualquier valor serializable a JSON en una cadena.

### Parámetros

- `object` - El objeto de estado a codificar.

### Devuelve

Una cadena codificada.

### Ejemplo

```typescript
import { encode } from 'state-in-url/encoder';

// a parámetros
const params = new URLSearchParams();
for (const [key, value] of Object.entries(state)) {
  params.set(key, encode(value));
}
const str = params.toString();
```

## `decode`

Para volver a convertir una cadena previamente codificada en un objeto.

### Parámetros

- `payload: string` - Una cadena a decodificar.
- `defaults?: object` - Objeto de forma, estos valores se usarán como valores por defecto.

### Devuelve

Un objeto decodificado.

### Ejemplo

```typescript
import { decode } from 'state-in-url/encoder';

// desde parámetros
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```
