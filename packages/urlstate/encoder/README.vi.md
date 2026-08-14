<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=bff98298b23252671a744c36020c2f4288a27fa8 status=translated -->
<!-- i18n:end -->

# API

## `encode`

Để mã hóa bất kỳ giá trị có thể tuần tự hóa JSON nào thành một chuỗi.

### Tham số

- `object` - Object state cần mã hóa.

### Trả về

Một chuỗi đã mã hóa.

### Ví dụ

```typescript
import { encode } from 'state-in-url/encoder';

// thành tham số
const params = new URLSearchParams();
for (const [key, value] of Object.entries(state)) {
  params.set(key, encode(value));
}
const str = params.toString();
```

## `decode`

Để chuyển một chuỗi đã mã hóa trước đó trở lại thành một object.

### Tham số

- `payload: string` - Chuỗi cần giải mã.
- `defaults?: object` - Object hình dạng, các giá trị này sẽ được dùng làm giá trị mặc định.

### Trả về

Một object đã giải mã.

### Ví dụ

```typescript
import { decode } from 'state-in-url/encoder';

// từ tham số
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```
