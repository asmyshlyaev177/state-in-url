<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=bff98298b23252671a744c36020c2f4288a27fa8 status=translated -->
<!-- i18n:end -->

# API

## `encode`

Кодирует любое JSON-сериализуемое значение в строку.

### Параметры

- `object` - Объект состояния для кодирования.

### Возвращает

Закодированную строку.

### Пример

```typescript
import { encode } from 'state-in-url/encoder';

// в параметры
const params = new URLSearchParams();
for (const [key, value] of Object.entries(state)) {
  params.set(key, encode(value));
}
const str = params.toString();
```

## `decode`

Разбирает ранее закодированную строку обратно в объект.

### Параметры

- `payload: string` - Строка для декодирования.
- `defaults?: object` - Объект-форма; эти значения будут использоваться как значения по умолчанию.

### Возвращает

Декодированный объект.

### Пример

```typescript
import { decode } from 'state-in-url/encoder';

// из параметров
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```
