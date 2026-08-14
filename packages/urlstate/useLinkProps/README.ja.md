<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=1f4f64a26bb4e480a8007ed2024bb5b0ae89e257 status=translated -->
<!-- i18n:end -->

# API

このモジュールは、**別のルート**を指すリンクに URL の状態を引き継ぐための React フックを提供します。

## `useLinkProps` フック

`<a>` やフレームワークの `<Link>` にスプレッドするための `{ href, onClick }` を組み立てる関数を返します。

マークアップには渡した `href` がそのまま残るため、クローラー、プリフェッチ、`hreflang` は正規の URL を参照します。修飾キーなしの左クリックでは、現在の状態をクエリ文字列にエンコードしたうえで、そのルートへ遷移します。修飾キー付きのクリック（⌘、Ctrl、Shift、Alt、中クリック）、`target` を持つリンク、外部 href はブラウザーに任せます。

状態はレンダリング時ではなく、リンクがクリックされた時点で読み取られます。再レンダリングは起きず、同じコンポーネントに `useUrlState` を置く必要もありません。

### パラメータ

- `shape: T` - デフォルトの状態。`useUrlState` に渡すのと同じ、モジュールスコープのオブジェクトです。
- `navigate: (url: string) => void` - 使用しているフレームワークのナビゲーション。例: `useRouter().push`（Next.js）、`useNavigate()`（React Router、Remix）。

### 戻り値

`(href: string) => { href: string, onClick: (event) => void }`

### 例

```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

// モジュールスコープ。アプリの他の場所から `useUrlState` に渡すのと同じオブジェクト
export const form = { name: '', age: 0 };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

状態が `{ name: 'John', age: 0 }` のとき、このリンクをクリックすると `/de/pricing?name='John'` へ遷移します。

### 引き継がれるパラメータ

渡した href に対して、[`setUrl`](../next/useUrlState/README.md#updateurl) が残すのと同じものです。

- デフォルトと同じ値は、`setUrl` の場合と同じく含まれません。
- 現在の URL のうち `shape` が持たないパラメータ（`utm_source` など）は引き継がれます。言語を切り替えても参照元の情報を失わないためです。
- `href` 自体に書かれたパラメータは、その両方より優先されます。
- `href` の `#hash` はそのまま保持されます。

### ルートをまたぐリンクにのみ使う

*同じ* ルートへのリンクには `setUrl` を使ってください。書き込みをまとめて行い、遷移はしません。`useLinkProps` は `setUrl` では表現できないケース、つまりパスは異なり状態は同じ、という場合のためのものです。

> [!WARNING]
> これを実現するために `href` 自体へ状態を埋め込まないでください。サーバーでレンダリングする時点では状態がまだ分からないため、マークアップと最初のクライアントレンダリングが食い違います。パラメータを持つすべての URL でハイドレーションの不一致になります。クリックハンドラーはそれを避けるために存在します。
