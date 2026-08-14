<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=40edfb0d91bbc55f4ad8f487521aaa8b90d1df98 status=translated -->
<!-- i18n:end -->

# API

このモジュールは、状態オブジェクトを URL クエリ文字列との間でエンコード・デコードする関数を提供します。

## `encodeState`

状態オブジェクトを URL クエリ文字列にエンコードします。

### パラメータ

- `state: object` - エンコードする状態オブジェクト。
- `defaults?: object` - 状態オブジェクトのオプションのデフォルト値。
- `paramsToKeep?: string | URLSearchParams` - 結果のクエリ文字列に残すオプションの既存パラメータ。

### 戻り値

エンコードされた URL クエリ文字列を表す文字列。

### 例

```typescript
import { encodeState } from 'state-in-url/encodeState';

const form = { name: '' };
const encodedState = encodeState({ name: 'test' }, form, 'someExistingParam=123');
console.log(encodedState); // 出力: name=test&someExistingParam=123
```

## `decodeState`

URI 文字列をオブジェクトにデコードします。

### パラメータ

- `uriString: string | URLSearchParams` - デコードする URI 文字列または URLSearchParams オブジェクト。
- `defaults?: T` - 結果のオブジェクトに使うオプションのデフォルト値。

### 戻り値

デコードされたオブジェクト。

### 例

```typescript
import { decodeState } from 'state-in-url/encodeState';

const form = { name: '', key: '' };
const decodedState = decodeState('key=value&name=Alex', form);
console.log(decodedState); // 出力: { name: 'Alex', key: 'value }
```
