<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=8eaf1922213c8e89f693b5213bf3cc611d332564 status=translated -->
<!-- i18n:end -->

# API

このモジュールは、remix@2 アプリケーションで URL 検索パラメータと同期される状態を管理するためのカスタム React フックを提供します。

## `useUrlState` フック

状態を管理し、URL 検索パラメータと同期するカスタム React フックです。

### パラメータ

- `defaultState: object` - デフォルトの状態値を表すオブジェクト。
- `replace?: boolean` - `setUrl` がルーターで `replace` と `push` のどちらを使うかを制御します。デフォルトは replace=true。`updateUrl(stateObj, { replace: false })` で上書きできます。
- `options?: NavigateOptions` - `react-router` 型の [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) の `replace` 引数と型。`useNavigate` のオプションと同じです。
- `useHistory` - ナビゲーションに window.history を使うこともできます。
- `preventScrollReset` - react-router navigate のオプション。

### 戻り値

以下を含むオブジェクト:

- `urlState: object` - 現在の状態。
- `setState: Function` - URL を更新せずに状態を更新する関数。
- `setUrl: Function` - 状態と URL の両方を更新する関数。
- `reset: Function` - 状態をデフォルトにリセットする関数。

### 例

```typescript
import { useUrlState } from 'state-in-url/remix';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// URL を変更せずに状態を更新
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// 状態をリセット
setState((_curr, initial) => initial);

// 状態と URL を更新
// 'react-router` の `NavigateOptions` 型のオプション
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });

// 状態と URL をリセット
setUrl((_curr, initial) => initial);
```

## `setState`

URL を変更せずに状態を更新します。

### `setState` のパラメータ

- `value: Partial<T> | (curr: T, initial: T) => T` - 新しい状態の値、または現在の状態と初期状態を受け取り新しい状態を返す関数。
- `...NavigateOptions` - `react-router` 型の NavigateOptions のプロパティ。`useNavigate` のオプションと同じです。

## `setUrl`

状態と URL の両方を更新します。

### `setUrl` のパラメータ

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - オプションの新しい状態の値、または現在の状態と初期状態を受け取り新しい状態を返す関数。
- `options?: NavigateOptions` - react-router の [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) 型のオプションオブジェクト。

## `reset`

状態と URL の両方を更新します。

### `reset` のパラメータ

- `options?: NavigateOptions` - react-router の [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) 型のオプションオブジェクト。
