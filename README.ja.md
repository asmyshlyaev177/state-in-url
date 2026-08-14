<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=01b5b4f72aa3c8871c185cfce21c6d696edb847b status=translated -->
<!-- i18n:end -->

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="state-in-url ロゴ" width="120px" />

  # State in url
</div>

<div align="center">
</div>

<div align="center">

[![Available for hire](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)]([https://github.com/semantic-release/semantic-release](https://github.com/asmyshlyaev177/state-in-url))

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/asmyshlyaev177/state-in-url/badge)](https://scorecard.dev/viewer/?uri=github.com/asmyshlyaev177/state-in-url)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9679/badge)](https://www.bestpractices.dev/projects/9679)
[![license](https://img.shields.io/github/license/asmyshlyaev177/state-in-url.svg?style=flat-square)](https://github.com/asmyshlyaev177/state-in-url/blob/master/LICENSE)
<!-- or by embedding this in your HTML:
<a href="https://www.bestpractices.dev/projects/9679"><img src="https://www.bestpractices.dev/projects/9679/badge"></a>  -->

</div>

<div align="center">

<h4 align="center">バグを発見した場合や、機能のリクエストがあれば、遠慮なく issue を作成してください</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# デモ

<a href="https://state-in-url.dev" target="_blank">デモ</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">ミラーリンク</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">URI サイズ制限、<b>最大 12KB</b> までは安全です</a>

<hr />

プロジェクトを支援するには、<a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a> を付けて <a href="https://github.com/asmyshlyaev177" target="_blank">フォロー</a>してください！

[ディスカッション](https://github.com/asmyshlyaev177/state-in-url/discussions/1)でフィードバックやご意見をいただけると嬉しいです

役に立ったら共有してください。
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[コードだけ見せて！](#useurlstate)

## なぜ `state-in-url` を使うのか？

任意のユーザー状態をクエリパラメータに保存します。ブラウザの URL に JSON があるイメージです。データの型と構造を保持したまま、たとえば数値は文字列ではなく数値として、日付は日付としてデコードされ、オブジェクトや配列もサポートされます。
非常にシンプルで高速、そして静的 TypeScript バリデーション付き。ディープリンク(別名 URL 同期)が簡単になります。

Next.js と react-router 用の `useUrlState` フックと、その他あらゆる JS 向けのヘルパーを備えています。
現代のブラウザは巨大な URL をサポートしており、ユーザーはクエリ文字列を気にしません(全選択してコピー/ペーストするワークフローです)。

本来の目的どおりに、クエリ文字列を状態管理に使うときが来ました。
このライブラリは、そうした退屈な作業をすべて代行します。

このライブラリは NUQS の有力な代替になります。

### ユースケース

- 保存していないユーザーフォームやページフィルターを URL に保存
- URL と React の状態を同期
- URI に触れずに、関連のないクライアントコンポーネント間でデータを同期
- アプリケーション状態を含む共有可能な URL(ディープリンキング、URL 状態同期)
- ページ再読み込みをまたいだ簡単な状態の永続化

### 特徴

- 🧩 **シンプル**: プロバイダー、リデューサー、ボイラープレート、新しい概念は不要。`React.useState` に似た API
- 📘 **TypeScript バリデーション/自動補完**: 状態はただのオブジェクトで、TypeScript 定義に従って IDE/テストで自動的に静的検証されます
- ✨ **複雑なデータ**: ネストしたオブジェクト、日付、配列。JSON と同じように動き、URL の中に置けます
- ☂ **デフォルト値**: URL にパラメータがない場合はデフォルト値を提供します
- ⌨ **整理されている**: 可能な値はすべて最初に定義され、存在しないキーを取得するのを防ぎます
- **互換性**: サードパーティのクエリパラメータはそのまま保持します
- **柔軟**: 同じページで複数の状態オブジェクトを使用できます。別のキーを使うだけです
- **高速**: リレンダーは最小限。大きなオブジェクトのエンコード/デコードは約 [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185) です
- **サーバーサイドレンダリング**: サーバーコンポーネントで使用可能。Next.js 14、15、16 をサポート
- **軽量**: 依存関係ゼロ。ライブラリは 2KB 未満
- **DX**: 優れた開発者体験。ドキュメント、JSDoc コメント、サンプル付き
- **フレームワークの柔軟性**: `Next.js` と `react-router` 用のフック、その他のフレームワークやピュア JS で使うためのヘルパー
- **十分にテスト済み**: [Chrome/Firefox/Safari 向けのユニットテストと Playwright テスト](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)
- **寛容なライセンス**: MIT

## 目次

<!-- toc:start -->

- [State in url](#state-in-url)
- [デモ](#デモ)
  - [なぜ `state-in-url` を使うのか？](#なぜ-state-in-url-を使うのか)
    - [ユースケース](#ユースケース)
    - [特徴](#特徴)
  - [目次](#目次)
  - [インストール](#インストール)
    - [1. パッケージのインストール](#1-パッケージのインストール)
    - [2. tsconfig.json の編集](#2-tsconfigjson-の編集)
  - [AI コーディングエージェントと使う](#ai-コーディングエージェントと使う)
  - [useUrlState](#useurlstate)
    - [Next.js 向け useUrlState フック](#nextjs-向け-useurlstate-フック)
      - [使用例](#使用例)
        - [基本](#基本)
        - [サーバーサイドレンダリングで使用](#サーバーサイドレンダリングで使用)
        - [`layout` コンポーネントでフックを使用](#layout-コンポーネントでフックを使用)
        - [任意の状態の形を使用(非推奨)](#任意の状態の形を使用非推奨)
    - [Remix.js 向け useUrlState フック](#remixjs-向け-useurlstate-フック)
      - [例](#例)
    - [React-Router 向け useUrlState フック](#react-router-向け-useurlstate-フック)
      - [例](#例-1)
  - [レシピ](#レシピ)
        - [状態の一部を便利に扱うカスタムフック](#状態の一部を便利に扱うカスタムフック)
        - [複雑な状態の形を使用](#複雑な状態の形を使用)
        - [状態だけを更新して URL には手動で同期](#状態だけを更新して-url-には手動で同期)
  - [その他のフックとヘルパー](#その他のフックとヘルパー)
    - [他のルーター向け `useUrlStateBase` フック](#他のルーター向け-useurlstatebase-フック)
    - [React.js 向け `useSharedState` フック](#reactjs-向け-usesharedstate-フック)
    - [React.js 向け `useUrlEncode` フック](#reactjs-向け-useurlencode-フック)
    - [`encodeState` と `decodeState` ヘルパー](#encodestate-と-decodestate-ヘルパー)
    - [`encode` と `decode` ヘルパー](#encode-と-decode-ヘルパー)
  - [ベストプラクティス](#ベストプラクティス)
  - [注意点](#注意点)
  - [その他](#その他)
    - [貢献、またはローカルでの実行](#貢献またはローカルでの実行)
  - [ロードマップ](#ロードマップ)
  - [連絡先とサポート](#連絡先とサポート)
  - [変更履歴](#変更履歴)
  - [言及](#言及)
  - [ライセンス](#ライセンス)
  - [採用のご依頼](#採用のご依頼)
  - [インスピレーション](#インスピレーション)

<!-- toc:end -->

## インストール

### 1. パッケージのインストール

```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```

### 2. tsconfig.json の編集

`tsconfig.json` の `compilerOptions` に `"moduleResolution": "Bundler"`、または `"moduleResolution": "Node16"`、または `"moduleResolution": "NodeNext"` を設定します。
`"module": "ES2022"` または `"module": "ESNext"` の設定が必要になる場合があります。

## AI コーディングエージェントと使う

`state-in-url` は [@tanstack/intent](https://tanstack.com/intent/latest/docs/overview) 向けのスキルファイルを同梱しています。AI エージェント(Claude Code、Cursor、Copilot、Codex など)がライブラリ使用時の正しいパターンを読み込み、よくあるミスを避けられます。`state-in-url` をインストールした後、プロジェクトで一度実行してください:

```sh
npx @tanstack/intent@latest install
```

これにより、インストール済みのエージェントが `node_modules/state-in-url/skills/` からスキルを検出するようになります。利用可能なスキルは `npx @tanstack/intent@latest list` で一覧できます。

## useUrlState

初期状態をパラメータとして受け取り、状態オブジェクト、URL を更新するコールバック、状態だけを更新するコールバックを返すメインフックです。
同じ `state` オブジェクトを使うすべてのコンポーネントは自動的に同期されます。

### Next.js 向け useUrlState フック

[完全な API ドキュメント](packages/urlstate/next/useUrlState)

[React-Router の例](#react-router-向け-useurlstate-フック)

#### 使用例

##### 基本

1. デフォルト値付きで状態の形を定義します

 ```typescript
 // userState.ts
 // デフォルトと異なる値を持つパラメータだけが URL に入ります。
 export const userState: UserState = { name: '', age: 0 }

 // `Interface` ではなく `Type` を使うこと！
 type UserState = { name: string, age: number }
 ```

2. インポートして使用します

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // `replace` 引数を渡せます。`setUrl` が `router.push` と `router.replace` のどちらを使うかを制御し、デフォルトは replace=true
  // サーバーコンポーネントから `searchParams` を渡せます。サーバーコンポーネントで何かを取得する必要がある場合は `useHistory: false` を渡してください
  const { urlState, setUrl, setState } = useUrlState(userState);

  return (
    <div>
      // URL が空の場合、urlState.name は `userState` のデフォルト値を返します
      <input value={urlState.name}
        // React.useState と同じ API。例: setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // 状態は即座に更新しつつ、変更は必要に応じて URL に同期できます
        onBlur={() => setUrl()}
      />

      <button onClick={() => setUrl((_, initial) => initial)}>
        Reset
      </button>

    </div>
  )
}
```

##### サーバーサイドレンダリングで使用

<details>
  <Summary>例</Summary>

```typescript
export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <Form searchParams={searchParams} />
  )
}

// Form.tsx
'use client'
import React from 'react';
import { useUrlState } from 'state-in-url/next';
import { form } from './form';

const Form = ({ searchParams }: { searchParams: object }) => {
  const { urlState, setState, setUrl } = useUrlState(form, { searchParams });
}
```

</details>

##### `layout` コンポーネントでフックを使用

<details>
  <Summary>例</Summary>
  これは難しい部分です。app router を使う nextjs はサーバー側から searchParams にアクセスできません。middleware を使う回避策はありますが、美しくはなく、nextjs の更新後に動作しなくなる可能性があります。

```typescript
// 適切な `layout.tsx` に追加
export const runtime = 'edge';

// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.url?.includes('_next') ? null : request.url;
  const sp = url?.split?.('?')?.[1] || '';

  const response = NextResponse.next();

  if (url !== null) {
    response.headers.set('searchParams', sp);
  }

  return response;
}

// 対象の layout コンポーネント
import { headers } from 'next/headers';
import { decodeState } from 'state-in-url/encodeState';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sp = headers().get('searchParams') || '';

  return (
    <div>
      <Comp1 searchParams={decodeState(sp, stateShape)} />
      {children}
    </div>
  );
}


```

</details>

##### 任意の状態の形を使用(非推奨)

<details>
  <Summary>例</Summary>

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { urlState, setUrl, setState } = useUrlState<object>(someObj);
}
```

</details>

### Remix.js 向け useUrlState フック

API は Next.js 版と同じですが、[NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) 型のオプションを渡せます。

[API ドキュメント](packages/urlstate/remix/useUrlState)

#### 例

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};

```

```typescript
import { useUrlState } from 'state-in-url/remix';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setState } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // 状態は即座に更新しつつ、変更は必要に応じて URL に同期できます
        onBlur={() => setUrl()}
      />
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[サンプルコード](packages/example-remix2/app/routes/Form-for-test.tsx)

### React-Router 向け useUrlState フック

API は Next.js 版と同じですが、[NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) 型のオプションを渡せます。

[API ドキュメント](packages/urlstate/react-router/useUrlState)

#### 例

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};

```

```typescript
import { useUrlState } from 'state-in-url/react-router';
// react-router v6 の場合
// import { useUrlState } from 'state-in-url/react-router6';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setState } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // 状態は即座に更新しつつ、変更は必要に応じて URL に同期できます
        onBlur={() => setUrl()}
      />
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[サンプルコード](packages/example-react-router6/src/Form-for-test.tsx)

## レシピ
##### 状態の一部を便利に扱うカスタムフック
<details>
  <Summary>例</Summary>

  ```typescript
'use client';

import React from 'react';
import { useUrlState } from 'state-in-url/next';

const form: Form = {
    name: '',
    age: undefined,
    agree_to_terms: false,
    tags: [],
};

type Form = {
    name: string;
    age?: number;
    agree_to_terms: boolean;
    tags: {id: string; value: {text: string; time: Date } }[];
};

export const useFormState = ({ searchParams }: { searchParams?: object }) => {
    const { urlState, setUrl: setUrlBase, reset } = useUrlState(form, {
      searchParams,
    });

    // 最初のナビゲーションは新しい履歴エントリを push します
    // 以降はすべてそのエントリを replace します
    // これにより履歴は 2 エントリだけになります - ['/url', '/url?key=param']

    const replace = React.useRef(false);
    const setUrl = React.useCallback((
        state: Parameters<typeof setUrlBase>[0],
        opts?: Parameters<typeof setUrlBase>[1]
      ) => {
        setUrlBase(state, { replace: replace.current, ...opts });
        replace.current = true;
    }, [setUrlBase]);

    return { urlState, setUrl, resetUrl: reset };
};
  ```
</details>

<hr />

##### 複雑な状態の形を使用

<details>
  <Summary>例</Summary>

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
```

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { form } from './form';

function TagsComponent() {
  // `urlState` は Form 型から推論されます！
  const { urlState, setUrl } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[デモページのサンプルコード](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Form.tsx)
</details>

##### 状態だけを更新して URL には手動で同期

<details>
  <Summary>例</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // 参照ではなく内容で状態を比較し、新しい値の場合だけ更新を実行します
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

`onBlur` で状態を同期する方が実際の用途に近いでしょう。

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

## その他のフックとヘルパー

### 他のルーター向け `useUrlStateBase` フック

react-router や tanstack router など、他のルーターで独自の `useUrlState` フックを作成するためのフックです。

[API ドキュメント](packages/urlstate/useUrlStateBase)

### React.js 向け `useSharedState` フック

任意の React コンポーネント間で状態を共有するフック。Next.js と Vite でテスト済みです。

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[API ドキュメント](packages/urlstate/useSharedState/README.ja.md)

### React.js 向け `useUrlEncode` フック

[API ドキュメント](packages/urlstate/useUrlEncode/README.ja.md)

### `encodeState` と `decodeState` ヘルパー

[API ドキュメント](packages/urlstate/encodeState/README.ja.md)

### `encode` と `decode` ヘルパー

[API ドキュメント](packages/urlstate/encoder/README.ja.md)

## ベストプラクティス

- 状態の形を定数として定義する
- 型安全性と自動補完を高めるために TypeScript を使う
- 機密情報(SSN、API キーなど)を URL パラメータに保存しない
- 読みやすい TS エラーを得るには、この [拡張機能](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) を使う

状態の一部に対応する状態フックを作成し、アプリケーション全体で再利用できます。例:
```Typescript
type UserState = {
  name: string;
  age: number;
  other: { id: string, value: number }[]
};
const userState = {
  name: '',
  age: 0,
  other: [],
};

export const useUserState = () => {
  const { urlState, setUrl, reset } = useUrlState(userState);

  // その他のロジック

  // 別のページに移動したときにクエリパラメータをリセット
  React.useEffect(() => {
    return reset
  }, [])

  return { userState: urlState, setUserState: setUrl };;
}

```

## 注意点

1. シリアライズ可能な値しか渡せません。`Function`、`BigInt`、`Symbol` は動作せず、`ArrayBuffer` のようなものもおそらく動作しません。JSON にシリアライズできるものはすべて動作します。
2. Vercel サーバーはヘッダー(クエリ文字列など)のサイズを **14KB** に制限しているため、URL の状態は約 5000 語未満に保ってください。<https://vercel.com/docs/errors/URL_TOO_LONG>
3. app router 付きの `next.js` 14/15/16 でテスト済みです。pages をサポートする予定はありません。

## その他

### 貢献、またはローカルでの実行

[貢献ガイド](CONTRIBUTING.md) を参照

## ロードマップ

- [x] `Next.js` 向けフック
- [x] `react-router` 向けフック
- [x] `remix` 向けフック
- [ ] `svelte` 向けフック
- [ ] `astro` 向けフック
- [ ] ハッシュに状態を保存するフック?

## 連絡先とサポート

- バグ報告、機能リクエスト、質問には [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) を作成してください

## [変更履歴](CHANGELOG.md)

## 言及

 - [This Week in React 209](https://thisweekinreact.com/newsletter/209)
 - [JavaScript Weekly](https://javascriptweekly.com/issues/741)
 - [This Week in React 240](https://thisweekinreact.com/newsletter/240)

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で提供されています。

## 採用のご依頼

**Aleksandr Smyshliaev** です。このライブラリの唯一の作者でありメンテナです。
シニアフロントエンドエンジニア(React / Next.js / TypeScript、8 年以上)。現在**フルタイムのリモート勤務を募集しています**。

このライブラリは、私の得意分野を凝縮したものです。乱雑なブラウザプリミティブに対する型付き API、依存関係ゼロ、そしていくつもの React メジャーバージョンにわたる Next.js、Remix、React Router での安定性。

- **得意分野** — コンポーネントライブラリ、状態管理、リファクタリングに耐えるテストスイート。
- **その他のプロジェクト** —
  [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)
  (週間約 84k インストール)、
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (Playwright 向けの record/replay)、
  [llm-queue](https://github.com/asmyshlyaev177/llm-queue)。
- **所在地** — ジョージア・トビリシ(GMT+4)。CET と完全に重なります。契約事業体として登録済みなので、B2B 契約に employer-of-record の手配は不要です。
- **連絡先** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177

## インスピレーション

[NUQS](https://github.com/47ng/nuqs)

[Vue で URL に状態を保存する](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[URL に状態を保存する](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
