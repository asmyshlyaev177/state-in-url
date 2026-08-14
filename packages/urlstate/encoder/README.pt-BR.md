<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=bff98298b23252671a744c36020c2f4288a27fa8 status=translated -->
<!-- i18n:end -->

# API

## `encode`

Para codificar qualquer valor serializável em JSON em uma string.

### Parâmetros

- `object` - O objeto de estado a ser codificado.

### Retorna

Uma string codificada.

### Exemplo

```typescript
import { encode } from 'state-in-url/encoder';

// para parâmetros
const params = new URLSearchParams();
for (const [key, value] of Object.entries(state)) {
  params.set(key, encode(value));
}
const str = params.toString();
```

## `decode`

Para converter de volta em objeto uma string codificada anteriormente.

### Parâmetros

- `payload: string` - Uma string a ser decodificada.
- `defaults?: object` - Objeto de forma, esses valores serão usados como valores padrão.

### Retorna

Um objeto decodificado.

### Exemplo

```typescript
import { decode } from 'state-in-url/encoder';

// a partir dos parâmetros
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```
