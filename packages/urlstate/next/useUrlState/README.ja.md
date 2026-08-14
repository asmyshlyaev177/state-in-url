<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=dc43c5e03232b105d24b651ab42a37b8222d1f2c status=translated -->
<!-- i18n:end -->

# API

このモジュールは、Next.js アプリケーションで URL 検索パラメータと同期される状態を管理するためのカスタム React フックを提供します。

## `useUrlState` フック

状態を管理し、URL 検索パラメータと同期するカスタム React フックです。

### パラメータ

- `defaultState: object` - デフォルトの状態値を表すオブジェクト。
- `searchParams?: object` - Next.js サーバーコンポーネントからのオプションの検索パラメータオブジェクト。
- `replace?: boolean` - `setUrl` がルーターで `replace` と `push` のどちらを使うかを制御します。デフォルトは replace=true。`setUrl(stateObj, { replace: false })` で上書きできます。
- `useHistory` - ナビゲーションに window.history を使うこともできます。デフォルトで `true`、_rsc リクエストなし <https://github.com/vercel/next.js/discussions/59167>
- `scroll?: boolean` - Next.js ルーターの push/replace のオプション。

### 戻り値

以下を含むオブジェクト:

- `urlState: object` - 現在の状態。
- `setState: Function` - URL を更新せずに状態を更新する関数。
- `setUrl: Function` - 状態と URL の両方を更新する関数。
- `reset: Function` - 状態をデフォルトにリセットする関数。

### プリレンダリング

このフックは `useSearchParams` を呼ばないため、これを使うコンポーネントは `<Suspense>` 境界を必要とせず、ページがプリレンダリングから除外されることもありません。初期状態はサーバーでは渡した `searchParams` から、クライアントでは `window.location.search` から読み取り、その後の変更は History API を直接監視して追跡します。これにより、Next のルーターが認識しない URL 変更(たとえば、デフォルトの `useHistory: true` モードでこのフック自身が行う変更)も捕捉されます。

プリレンダリングされたページは、ビルド時にクエリ文字列がないため、やはりデフォルト状態でレンダリングされます。最初の描画がステートフルな URL と一致する必要がある場合は、動的にレンダリングされるサーバーコンポーネントから `searchParams` を渡してください。

### 例

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// URL を変更せずに状態を更新
setState({ name: 'test' });

// React.useState と同じ API
setState(currVal => ({ ...currVal, name: 'test' }) );

// 状態をリセット
setState((_curr, initial) => initial);

// 状態と URL を更新
setUrl({ name: 'test' }, { replace: false, scroll: true });

// 状態と URL をリセット
setUrl((_curr, initial) => initial);
```

## `setState`

URL を変更せずに状態を更新します。

### `setState` のパラメータ

- `value: Partial<T> | (curr: T, initial: T) => T` - 新しい状態の値、または現在の状態と初期状態を受け取り新しい状態を返す関数。

## `setUrl`

状態と URL の両方を更新します。

### `setUrl` のパラメータ

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - オプションの新しい状態の値、または現在の状態と初期状態を受け取り新しい状態を返す関数。
- `options?: Options` - オプションのオプションオブジェクト。`replace` が true の場合 router.replace を使います。Nextjs の `scroll` はデフォルトで `false` です。

## `reset`

状態と URL の両方を更新します。

### `reset` のパラメータ

- `options?: Options` - オプションのオプションオブジェクト。`replace` が true の場合 router.replace を使います。Nextjs の `scroll` はデフォルトで `false` です。
