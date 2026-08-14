<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=ccf4feacda4d25a7cbd63d3d1c7165c9b4b4cb00 status=translated -->
<!-- i18n:end -->

# API

このフックは、さまざまなルーター向けのフックを作成するためのベースとして使用できます。

## `useUrlStateBase` フック

カスタムの `useUrlState` フックを作成するためのカスタム React フックです。

### パラメータ:

- `defaultState: object` - デフォルトの状態値を表すオブジェクト。
- `router: object` - `push` と `replace` メソッドを持つルーターオブジェクト。
- `getInitialState?: function` - 初期状態を返すオプションの関数。

### 戻り値:

以下を含むオブジェクト:

- `state: object` - 現在の状態。
- `getState: Function` - 状態を取得する関数。
- `updateState: Function` - URL を更新せずに状態を更新する関数。
- `updateUrl: Function` - 状態と URL の両方を更新する関数。
- `reset: Function` - 状態と URL をデフォルト値にリセットする関数。

### 例:

```typescript
import { useUrlStateBase } from 'state-in-url/useUrlStateBase';

function useUrlStateCustom<T>(state: T) {
  const router = React.useMemo({
    push: (url: string) => window.history.pushState(url),
    replace: (url: string) => window.history.replaceState(url)
  }, []);
  return useUrlState(state, router);
}
```

## `updateState`

URL を変更せずに状態を更新します。

### パラメータ:

- `value: T | Partial<T> | T => T` - 新しい状態の値、または現在の状態を受け取り新しい状態を返す関数。

## `updateUrl`

状態と URL の両方を更新します。

### パラメータ:

- `value?: T | Partial<T> | (currState: T) => T` - オプションの新しい状態の値、または現在の状態を受け取り新しい状態を返す関数。
- `options?: Options` - オプションのオプションオブジェクト。`replace` が true の場合 router.replace を使います。その他、`router` の push/replace の nextjs ネイティブオプション。

## `reset`

状態と URL をデフォルトにリセットします。

### パラメータ:

- `options?: Options` - オプションのオプションオブジェクト。`replace` が true の場合 router.replace を使います。その他、`router` の push/replace の nextjs ネイティブオプション。
