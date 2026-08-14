<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=5da4daf6f900b7408d4efca27beecf84275de38f status=translated -->
<!-- i18n:end -->

# API

Module này cung cấp một React hook để mã hóa và giải mã object state thành và từ tham số tìm kiếm của URL.

## Hook `useUrlEncode`

Một React hook tùy chỉnh trả về các hàm `stringify` và `parse` để mã hóa và giải mã state thành và từ tham số tìm kiếm của URL.
Nó là wrapper của các hàm `encodeState` và `decodeState`, nhưng bạn có thể cung cấp hình dạng state một lần duy nhất.

### Tham số

- `stateShape: object` - Một object đại diện cho hình dạng của state.

### Trả về

Một object chứa hai hàm:

- `stringify`: Hàm chuyển state thành chuỗi truy vấn URL.
- `parse`: Hàm chuyển chuỗi truy vấn URL thành object state.

### Ví dụ

```typescript
import { useUrlEncode } from 'state-in-url/useUrlEncode';

const form = { name: '' };
const { parse, stringify } = useUrlEncode(form);

// Chuyển state thành chuỗi truy vấn URL
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // Đầu ra: name='John'&someExistingParamToKeep=123

// Chuyển chuỗi truy vấn URL thành object state
const state = parse("name='Tom'");
console.log(state); // Đầu ra: { name: 'Tom' }
```

## `stringify`

Chuyển một object state thành chuỗi truy vấn URL.

### Tham số

- `state: T` - Object state cần chuyển thành chuỗi.
- `paramsToKeep?: string | URLSearchParams` - Các tham số hiện có tùy chọn cần giữ lại trong chuỗi truy vấn kết quả.

### Trả về

Một chuỗi đại diện cho chuỗi truy vấn URL.

## `parse`

Chuyển một chuỗi truy vấn URL hoặc object URLSearchParams thành object state.

### Tham số

- `strOrSearchParams: string | URLSearchParams` - Chuỗi truy vấn URL hoặc object URLSearchParams cần chuyển đổi.

### Trả về

Object state đã chuyển đổi.

### Ví dụ

```typescript
// Chuyển chuỗi truy vấn URL thành object state
const state = parse("name='Tom'");
console.log(state); // Đầu ra: { name: 'Tom' }
```
