<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=5da4daf6f900b7408d4efca27beecf84275de38f status=translated -->
<!-- i18n:end -->

# API

此模块提供一个 React hook,用于在状态对象与 URL 搜索参数之间进行编码和解码。

## `useUrlEncode` hook

一个自定义 React hook,返回用于在状态与 URL 搜索参数之间编码和解码的 `stringify` 和 `parse` 函数。
它是 `encodeState` 和 `decodeState` 函数的封装,但你可以只指定一次状态形状。

### 参数

- `stateShape: object` - 表示状态形状的对象。

### 返回值

包含两个函数的对象:

- `stringify`: 将状态转换为 URL 查询字符串的函数。
- `parse`: 将 URL 查询字符串解析为状态对象的函数。

### 示例

```typescript
import { useUrlEncode } from 'state-in-url/useUrlEncode';

const form = { name: '' };
const { parse, stringify } = useUrlEncode(form);

// 将状态字符串化为 URL 查询字符串
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // 输出: name='John'&someExistingParamToKeep=123

// 将 URL 查询字符串解析为状态对象
const state = parse("name='Tom'");
console.log(state); // 输出: { name: 'Tom' }
```

## `stringify`

将状态对象转换为 URL 查询字符串。

### 参数

- `state: T` - 要字符串化的状态对象。
- `paramsToKeep?: string | URLSearchParams` - 要保留在结果查询字符串中的可选现有参数。

### 返回值

表示 URL 查询字符串的字符串。

## `parse`

将 URL 查询字符串或 URLSearchParams 对象解析为状态对象。

### 参数

- `strOrSearchParams: string | URLSearchParams` - 要解析的 URL 查询字符串或 URLSearchParams 对象。

### 返回值

解析后的状态对象。

### 示例

```typescript
// 将 URL 查询字符串解析为状态对象
const state = parse("name='Tom'");
console.log(state); // 输出: { name: 'Tom' }
```
