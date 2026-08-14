<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=40edfb0d91bbc55f4ad8f487521aaa8b90d1df98 status=translated -->
<!-- i18n:end -->

# API

此模块提供用于在状态对象与 URL 查询字符串之间进行编码和解码的函数。

## `encodeState`

将状态对象编码为 URL 查询字符串。

### 参数

- `state: object` - 要编码的状态对象。
- `defaults?: object` - 状态对象的可选默认值。
- `paramsToKeep?: string | URLSearchParams` - 要保留在结果查询字符串中的可选现有参数。

### 返回值

表示编码后 URL 查询字符串的字符串。

### 示例

```typescript
import { encodeState } from 'state-in-url/encodeState';

const form = { name: '' };
const encodedState = encodeState({ name: 'test' }, form, 'someExistingParam=123');
console.log(encodedState); // 输出: name=test&someExistingParam=123
```

## `decodeState`

将 URI 字符串解码为对象。

### 参数

- `uriString: string | URLSearchParams` - 要解码的 URI 字符串或 URLSearchParams 对象。
- `defaults?: T` - 结果对象的可选默认值。

### 返回值

解码后的对象。

### 示例

```typescript
import { decodeState } from 'state-in-url/encodeState';

const form = { name: '', key: '' };
const decodedState = decodeState('key=value&name=Alex', form);
console.log(decodedState); // 输出: { name: 'Alex', key: 'value }
```
