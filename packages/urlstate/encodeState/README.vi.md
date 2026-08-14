<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=40edfb0d91bbc55f4ad8f487521aaa8b90d1df98 status=translated -->
<!-- i18n:end -->

# API

Module này cung cấp các hàm để mã hóa và giải mã object state thành và từ chuỗi truy vấn URL.

## `encodeState`

Mã hóa một object state thành chuỗi truy vấn URL.

### Tham số

- `state: object` - Object state cần mã hóa.
- `defaults?: object` - Giá trị mặc định tùy chọn cho object state.
- `paramsToKeep?: string | URLSearchParams` - Các tham số hiện có tùy chọn cần giữ lại trong chuỗi truy vấn kết quả.

### Trả về

Một chuỗi đại diện cho chuỗi truy vấn URL đã mã hóa.

### Ví dụ

```typescript
import { encodeState } from 'state-in-url/encodeState';

const form = { name: '' };
const encodedState = encodeState({ name: 'test' }, form, 'someExistingParam=123');
console.log(encodedState); // Đầu ra: name=test&someExistingParam=123
```

## `decodeState`

Giải mã một chuỗi URI thành một object.

### Tham số

- `uriString: string | URLSearchParams` - Chuỗi URI hoặc object URLSearchParams cần giải mã.
- `defaults?: T` - Giá trị mặc định tùy chọn cho object kết quả.

### Trả về

Object đã giải mã.

### Ví dụ

```typescript
import { decodeState } from 'state-in-url/encodeState';

const form = { name: '', key: '' };
const decodedState = decodeState('key=value&name=Alex', form);
console.log(decodedState); // Đầu ra: { name: 'Alex', key: 'value }
```
