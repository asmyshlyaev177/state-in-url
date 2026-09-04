<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=1e2218fc31f03646440896464e1dece6dd29d65d status=translated -->
<!-- i18n:end -->

# API

このモジュールは、Astro アプリケーションの React アイランド内で、URL 検索パラメータと同期される状態を管理するためのカスタム React フックを提供します。

Astro にはデフォルトでクライアントサイドルーターがないため、このフックは `window.history` で URL を書き込み、戻る/進む操作時、フック自身の書き込み時、およびその他あらゆる `pushState`/`replaceState` の際（Astro 自身の `<ClientRouter />` を含む）に URL を読み戻します。同じページ上のアイランドは状態を共有します。状態はデフォルト状態オブジェクトをキーとしており、すべてのアイランドが同じモジュールをインポートします。`<ClientRouter />` の下では、前のページで状態が使用中だったアイランドは、まずその状態をレンダリングし、マウント後に URL から再同期します。

Preact アイランドは、`@astrojs/preact` を `compat: true` で使うことで、同じインポートを使用します。

## `useUrlState` フック

状態を管理し、URL 検索パラメータと同期するカスタム React フックです。

### パラメータ

- `defaultState: object` - デフォルトの状態値を表すオブジェクト。
- `searchParams?: object` - `Object.fromEntries(Astro.url.searchParams)` を prop としてアイランドに渡します。これによりサーバーレンダリングが URL と一致し、ハイドレーションで修正すべきものがなくなります。`URLSearchParams` ではなくプレーンなオブジェクトです。アイランドの props はシリアライズされるため、`URLSearchParams` を渡すと `{}` として届きます。ページはオンデマンドでレンダリングされる必要があります（`output: 'server'`、またはページ側で `export const prerender = false` を指定し、アダプターを併用）。プリレンダリングされたページにはリクエストがないため、アイランドは `{}` を受け取り、ハイドレーション後に URL を読み取ります。
- `replace?: boolean` - `setUrl` が `replaceState` と `pushState` のどちらを使うかを制御します。デフォルトは replace=true。`setUrl(stateObj, { replace: false })` で上書きできます。

### 戻り値

以下を含むオブジェクト:

- `urlState: object` - 現在の状態。
- `setState: Function` - URL を更新せずに状態を更新する関数。
- `setUrl: Function` - 状態と URL の両方を更新する関数。
- `reset: Function` - 状態をデフォルトにリセットする関数。

### 例

```astro
---
// src/pages/index.astro
import { Form } from '../components/Form';

const searchParams = Object.fromEntries(Astro.url.searchParams);
---

<Form client:load searchParams={searchParams} />
```

```tsx
// src/components/Form.tsx
import { useUrlState } from 'state-in-url/astro';

const form = { name: '', age: 0 };

export function Form({ searchParams }: { searchParams?: Record<string, string> }) {
  const { urlState, setState, setUrl } = useUrlState(form, { searchParams });

  return (
    <input
      value={urlState.name}
      onChange={(ev) => setUrl({ name: ev.target.value })}
    />
  );
}
```

`setState` と `setUrl` はイベントハンドラーやエフェクトから呼び出し、レンダリング中には呼び出さないでください:

```typescript
// URL を変更せずに状態を更新
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// 状態をリセット
setState((_curr, initial) => initial);

// 状態と URL を更新
setUrl({ name: 'test' }, { replace: false });

// 状態と URL をリセット
setUrl((_curr, initial) => initial);
```

アイランドを使わず、クライアントフレームワークのないページでは、`state-in-url/encodeState` の `decodeState` と `encodeState` がフロントマターで同じ役割を果たします。`Astro.url.searchParams` を型付きオブジェクトにデコードし、リンク用の次の URL を組み立てます。

## `setState`

URL を変更せずに状態を更新します。

### `setState` のパラメータ

- `value: Partial<T> | (curr: T, initial: T) => T` - 新しい状態の値、または現在の状態と初期状態を受け取り新しい状態を返す関数。

## `setUrl`

状態と URL の両方を更新します。

### `setUrl` のパラメータ

- `value?: Partial<T> | (curr: T, initial: T) => T` - オプションの新しい状態の値、または現在の状態と初期状態を受け取り新しい状態を返す関数。
- `options?: { replace?: boolean }` - `replaceState`(デフォルト)または `pushState`。

## `reset`

状態と URL の両方をデフォルトにリセットします。

### `reset` のパラメータ

- `options?: { replace?: boolean }` - `replaceState`(デフォルト)または `pushState`。
