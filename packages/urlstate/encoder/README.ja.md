<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=bff98298b23252671a744c36020c2f4288a27fa8 status=translated -->
<!-- i18n:end -->

# API

## `encode`

任意の JSON シリアライズ可能な値を文字列にエンコードします。

### パラメータ

- `object` - エンコードする状態オブジェクト。

### 戻り値

エンコードされた文字列

### 例

```typescript
import { encode } from 'state-in-url/encoder';

// パラメータへ
const params = new URLSearchParams();
for (const [key, value] of Object.entries(state)) {
  params.set(key, encode(value));
}
const str = params.toString();
```

## `decode`

以前エンコードした文字列をオブジェクトに戻します。

### パラメータ

- `payload: string` - デコードする文字列。
- `defaults?: object` - 形のオブジェクト。これらの値がデフォルトとして使われます。

### 戻り値

デコードされたオブジェクト

### 例

```typescript
import { decode } from 'state-in-url/encoder';

// パラメータから
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```
