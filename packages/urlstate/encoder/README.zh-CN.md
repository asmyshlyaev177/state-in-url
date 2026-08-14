<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=bff98298b23252671a744c36020c2f4288a27fa8 status=translated -->
<!-- i18n:end -->

# API

## `encode`

将任意可 JSON 序列化的值编码为字符串。

### 参数

- `object` - 要编码的状态对象。

### 返回值

编码后的字符串。

### 示例

```typescript
import { encode } from 'state-in-url/encoder';

// 转换为参数
const params = new URLSearchParams();
for (const [key, value] of Object.entries(state)) {
  params.set(key, encode(value));
}
const str = params.toString();
```

## `decode`

将之前编码的字符串解析回对象。

### 参数

- `payload: string` - 要解码的字符串。
- `defaults?: object` - 形状对象,这些值将用作默认值。

### 返回值

解码后的对象。

### 示例

```typescript
import { decode } from 'state-in-url/encoder';

// 从参数转换
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```
