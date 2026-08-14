<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=5da4daf6f900b7408d4efca27beecf84275de38f status=translated -->
<!-- i18n:end -->

# API

このモジュールは、状態オブジェクトを URL 検索パラメータとの間でエンコード・デコードする React フックを提供します。

## `useUrlEncode` フック

状態を URL 検索パラメータとの間でエンコード・デコードするための `stringify` と `parse` 関数を返すカスタム React フックです。
`encodeState` と `decodeState` 関数のラッパーですが、状態の形を一度指定するだけで済みます。

### パラメータ

- `stateShape: object` - 状態の形を表すオブジェクト。

### 戻り値

2 つの関数を含むオブジェクト:

- `stringify`: 状態を URL クエリ文字列に変換する関数。
- `parse`: URL クエリ文字列を状態オブジェクトにパースする関数。

### 例

```typescript
import { useUrlEncode } from 'state-in-url/useUrlEncode';

const form = { name: '' };
const { parse, stringify } = useUrlEncode(form);

// 状態を URL クエリ文字列に文字列化
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // 出力: name='John'&someExistingParamToKeep=123

// URL クエリ文字列を状態オブジェクトにパース
const state = parse("name='Tom'");
console.log(state); // 出力: { name: 'Tom' }
```

## `stringify`

状態オブジェクトを URL クエリ文字列に変換します。

### パラメータ

- `state: T` - 文字列化する状態オブジェクト。
- `paramsToKeep?: string | URLSearchParams` - 結果のクエリ文字列に残すオプションの既存パラメータ。

### 戻り値

URL クエリ文字列を表す文字列。

## `parse`

URL クエリ文字列または URLSearchParams オブジェクトを状態オブジェクトにパースします。

### パラメータ

- `strOrSearchParams: string | URLSearchParams` - パースする URL クエリ文字列または URLSearchParams オブジェクト。

### 戻り値

パースされた状態オブジェクト。

### 例

```typescript
// URL クエリ文字列を状態オブジェクトにパース
const state = parse("name='Tom'");
console.log(state); // 出力: { name: 'Tom' }
```
