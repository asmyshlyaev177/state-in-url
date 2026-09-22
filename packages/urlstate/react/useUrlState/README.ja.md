<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=da24fd34a3d4ed9b3d2fdcdc46897b6756d2a208 status=translated -->
<!-- i18n:end -->

# API

このモジュールは、**ルーターを持たない** React アプリケーション向けに、URL のクエリパラメータと同期する状態を管理するカスタム React フックを提供します。Vite、Create React App、あるいは自分の管理下にないページへ埋め込むウィジェットなどが対象です。

ナビゲーションに使えるルーターがないため、このフックは `window.history` で URL を書き込み、戻る/進む、自身の書き込み、その他あらゆる `pushState`/`replaceState` のたびに読み戻します。デフォルト状態オブジェクトを共有するコンポーネントはすべて状態を共有するので、props で受け渡す必要はありません。

アプリにルーターがある場合は、対応するエントリーポイントを使ってください: `state-in-url/next`、`state-in-url/react-router`、`state-in-url/react-router6`、`state-in-url/remix`。このパッケージがエントリーポイントを用意していないルーター（TanStack Router など）では、[`useUrlStateBase`](../../useUrlStateBase) で独自のフックを組んでください。`state-in-url/astro` はこれと同じフックで、[アイランド](../../astro/useUrlState)向けに説明されています。

## `useUrlState` フック

状態を管理し、URL のクエリパラメータと同期するカスタム React フックです。

### パラメータ

- `defaultState: object` - デフォルトの状態値を表すオブジェクト。モジュールスコープの定数である必要があります: 状態はこのオブジェクトの同一性によって共有されます。
- `searchParams?: object` - サーバーレンダリング由来のクエリパラメータをプレーンオブジェクトで渡すと、初回レンダリングが URL と一致します。クライアント専用のアプリでは省略でき、その場合フックが自分で URL を読みます。
- `replace?: boolean` - `setUrl` が `replaceState` と `pushState` のどちらを使うかを制御します。既定は replace=true で、`setUrl(stateObj, { replace: false })` で上書きできます

### 戻り値

次を含むオブジェクト:

- `urlState: object` - 現在の状態。
- `setState: Function` - URL を更新せずに状態だけを更新する関数。
- `setUrl: Function` - 状態と URL の両方を更新する関数。
- `reset: Function` - 状態をデフォルトに戻す関数。

### 例

```tsx
// src/useFilters.ts
import { useUrlState } from 'state-in-url/react';

type FiltersState = { sort: 'name' | 'date'; page: number };
const FILTERS_STATE: FiltersState = { sort: 'name', page: 1 };

export function useFilters() {
  return useUrlState(FILTERS_STATE);
}
```

```tsx
// src/FiltersBar.tsx
import { useFilters } from './useFilters';

export function FiltersBar() {
  const { urlState, setUrl } = useFilters();

  return (
    <button onClick={() => setUrl({ page: urlState.page + 1 })}>
      Page {urlState.page}
    </button>
  );
}
```

`useFilters()` を呼ぶ他のコンポーネントはどれも同じ状態を読み書きし、それに合わせて再レンダリングされます。provider はなく、props で渡すものもありません。

`setState` と `setUrl` はイベントハンドラーまたはエフェクトから呼び、レンダリング中には決して呼ばないでください:

```typescript
// URL を変えずに状態を更新する
setState({ sort: 'date' });
setState(currVal => ({ ...currVal, sort: 'date' }) );

// 状態をリセットする
setState((_curr, initial) => initial);

// 状態と URL を更新する
setUrl({ sort: 'date' }, { replace: false });

// 状態と URL をリセットする
setUrl((_curr, initial) => initial);
```

テキスト入力では、キー入力のたびに `setState` を呼び、`setUrl` は blur 時またはデバウンス後に呼んでください。URL への書き込みはスロットリングされるため、`setUrl` を `onChange` に結びつけると入力が重く感じられます。
