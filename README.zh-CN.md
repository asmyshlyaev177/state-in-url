<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=01b5b4f72aa3c8871c185cfce21c6d696edb847b status=translated -->
<!-- i18n:end -->

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="state-in-url logo" width="120px" />

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

<h4 align="center">如果您发现了 bug 或想请求新功能,请随时提交 issue</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# 演示

<a href="https://state-in-url.dev" target="_blank">演示</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">镜像链接</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">URI 大小限制,<b>最多 12KB</b> 是安全的</a>

<hr />

添加一个 <a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a> 并<a href="https://github.com/asmyshlyaev177" target="_blank">关注我</a>以支持该项目!

非常欢迎您在[讨论区](https://github.com/asmyshlyaev177/state-in-url/discussions/1)分享您的反馈/意见

如果对您有用,请分享。
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[直接看代码!](#useurlstate)

## 为什么使用 `state-in-url`?

在查询参数中存储任何用户状态;想象一下在浏览器 URL 中使用 JSON。所有这些都保持数据的类型和结构,例如数字将被解码为数字而不是字符串,日期作为日期,支持对象和数组。
简单明了、快速,并提供静态 TypeScript 验证。轻松实现深层链接(又名 URL 同步)。

包含用于 Next.js 和 react-router 的 `useUrlState` hook,以及用于任何其他 JS 框架的辅助函数。
由于现代浏览器支持巨大的 URL,用户也不关心查询字符串(这是一个全选和复制/粘贴的工作流程)。

是时候使用查询字符串进行状态管理了,正如它最初的用途。
这个库为您完成所有繁琐的工作。

这个库是 NUQS 的一个很好的替代品。

### 使用场景

- 在 URL 中存储未保存的用户表单或页面筛选器
- 将 URL 与 React 状态同步
- 只需在不相关的客户端组件之间同步数据,而无需触及 URI
- 带有应用程序状态的可共享 URL(深层链接、URL 状态同步)
- 轻松实现跨页面重新加载的状态持久化

### 特性

- 🧩 **简单**: 无需 providers、reducers、样板代码或新概念,API 类似于 `React.useState`
- 📘 **TypeScript 验证/自动完成**: 状态只是一个对象,根据 TypeScript 定义在 IDE/测试中自动静态验证
- ✨ **复杂数据**: 嵌套对象、日期和数组,与 JSON 工作方式相同,但在 URL 中
- ☂ **默认值**: 如果参数不在 url 中,为您提供默认值
- ⌨ **有序**: 所有可能的值在开始时定义,防止您获取不存在的键
- **兼容**: 将保持第三方查询参数不变
- **灵活**: 可以在同一页面上使用多个状态对象,只需使用不同的键
- **快速**: 最少的重新渲染,大约[1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185)来编码和解码大对象
- **服务器端渲染**: 可以在服务器组件中使用,支持 Next.js 14 和 15
- **轻量级**: 零依赖,库小于 2KB
- **开发体验**: 良好的开发者体验、文档、JSDoc 注释和示例
- **框架灵活性**: 为 `Next.js` 和 `react-router` 提供 hooks,以及用于其他框架或纯 JS 的辅助函数
- **经过充分测试**: [Chrome/Firefox/Safari 的单元测试和 Playwright 测试](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)
- **宽松许可证**: MIT

## 目录

<!-- toc:start -->

- [State in url](#state-in-url)
- [演示](#演示)
  - [为什么使用 `state-in-url`?](#为什么使用-state-in-url)
    - [使用场景](#使用场景)
    - [特性](#特性)
  - [目录](#目录)
  - [安装](#安装)
    - [1. 安装包](#1-安装包)
    - [2. 编辑 tsconfig.json](#2-编辑-tsconfigjson)
  - [与 AI 编程代理一起使用](#与-ai-编程代理一起使用)
  - [useUrlState](#useurlstate)
    - [用于 Next.js 的 useUrlState hook](#用于-nextjs-的-useurlstate-hook)
      - [使用示例](#使用示例)
        - [基础用法](#基础用法)
        - [使用服务器端渲染](#使用服务器端渲染)
        - [在 `layout` 组件中使用 hook](#在-layout-组件中使用-hook)
        - [使用任意状态形状(不推荐)](#使用任意状态形状不推荐)
    - [用于 Remix.js 的 useUrlState hook](#用于-remixjs-的-useurlstate-hook)
      - [示例](#示例)
    - [用于 React-Router 的 useUrlState hook](#用于-react-router-的-useurlstate-hook)
      - [示例](#示例-1)
  - [实用技巧](#实用技巧)
        - [自定义 hook 以便捷地处理状态切片](#自定义-hook-以便捷地处理状态切片)
        - [使用复杂状态形状](#使用复杂状态形状)
        - [仅更新状态并手动同步到 URL](#仅更新状态并手动同步到-url)
  - [其他 hooks 和辅助函数](#其他-hooks-和辅助函数)
    - [`useUrlStateBase` hook 用于其他路由器](#useurlstatebase-hook-用于其他路由器)
    - [`useSharedState` hook 用于 React.js](#usesharedstate-hook-用于-reactjs)
    - [`useUrlEncode` hook 用于 React.js](#useurlencode-hook-用于-reactjs)
    - [`encodeState` 和 `decodeState` 辅助函数](#encodestate-和-decodestate-辅助函数)
    - [`encode` 和 `decode` 辅助函数](#encode-和-decode-辅助函数)
  - [最佳实践](#最佳实践)
  - [注意事项](#注意事项)
  - [其他](#其他)
    - [贡献和/或本地运行](#贡献和或本地运行)
  - [路线图](#路线图)
  - [联系和支持](#联系和支持)
  - [更新日志](#更新日志)
  - [提及](#提及)
  - [许可证](#许可证)
  - [招聘我](#招聘我)
  - [灵感来源](#灵感来源)

<!-- toc:end -->

## 安装

### 1. 安装包

```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```

### 2. 编辑 tsconfig.json

在 `tsconfig.json` 的 `compilerOptions` 中设置 `"moduleResolution": "Bundler"`,或 `"moduleResolution": "Node16"`,或 `"moduleResolution": "NodeNext"`。
可能需要设置 `"module": "ES2022"`,或 `"module": "ESNext"`

## 与 AI 编程代理一起使用

`state-in-url` 附带适用于 [@tanstack/intent](https://tanstack.com/intent/latest/docs/overview) 的技能文件,因此 AI 代理(Claude Code、Cursor、Copilot、Codex 等)在使用该库时会加载正确的模式并避免常见错误。安装 `state-in-url` 后,在项目中运行一次:

```sh
npx @tanstack/intent@latest install
```

这将使你已安装的代理能够从 `node_modules/state-in-url/skills/` 发现技能。使用 `npx @tanstack/intent@latest list` 列出可用技能。

## useUrlState

主 hook,接受初始状态作为参数,返回状态对象、更新 url 的回调以及仅更新状态的回调。
使用相同 `state` 对象的所有组件都会自动同步。

### 用于 Next.js 的 useUrlState hook

[完整 API 文档](packages/urlstate/next/useUrlState)

[React-Router 示例](#用于-react-router-的-useurlstate-hook)

#### 使用示例

##### 基础用法

1. 使用默认值定义状态形状

 ```typescript
 // userState.ts
 // 只有与默认值不同的参数才会进入 url。
 export const userState: UserState = { name: '', age: 0 }

 // 使用 `Type` 而不是 `Interface`!
 type UserState = { name: string, age: number }
 ```

2. 导入并使用

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // 可以传递 `replace` 参数,它控制 `setUrl` 是否使用 `router.push` 或 `router.replace`,默认 replace=true
  // 可以从服务器组件传递 `searchParams`,如果需要在服务器组件中获取数据,则传递 `useHistory: false`
  const { urlState, setUrl, setState } = useUrlState(userState);

  return (
    <div>
      // 如果 url 为空,urlState.name 将返回 `userState` 的默认值
      <input value={urlState.name}
        // 与 React.useState 相同的 API,例如 setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // 可以立即更新状态,但根据需要将更改同步到 url
        onBlur={() => setUrl()}
      />

      <button onClick={() => setUrl((_, initial) => initial)}>
        Reset
      </button>

    </div>
  )
}
```

##### 使用服务器端渲染

<details>
  <Summary>示例</Summary>

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

##### 在 `layout` 组件中使用 hook

<details>
  <Summary>示例</Summary>
  这是一个棘手的部分,因为带有 app router 的 nextjs 不允许从服务器端访问 searchParams。有一个使用 middleware 的解决方法,但它不够完美,可能在 nextjs 更新后停止工作。

```typescript
// 添加到适当的 `layout.tsx`
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

// 目标布局组件
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

##### 使用任意状态形状(不推荐)

<details>
  <Summary>示例</Summary>

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { urlState, setUrl, setState } = useUrlState<object>(someObj);
}
```

</details>

### 用于 Remix.js 的 useUrlState hook

API 与 Next.js 版本相同,但可以传递 [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) 类型的选项。

[API 文档](packages/urlstate/remix/useUrlState)

#### 示例

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
        // 可以立即更新状态,但根据需要将更改同步到 url
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

[示例代码](packages/example-remix2/app/routes/Form-for-test.tsx)

### 用于 React-Router 的 useUrlState hook

API 与 Next.js 版本相同,但可以传递 [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) 类型的选项。

[API 文档](packages/urlstate/react-router/useUrlState)

#### 示例

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
// 对于 react-router v6
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
        // 可以立即更新状态,但根据需要将更改同步到 url
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

[示例代码](packages/example-react-router6/src/Form-for-test.tsx)

## 实用技巧
##### 自定义 hook 以便捷地处理状态切片
<details>
  <Summary>示例</Summary>

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

    // 第一次导航将推送新的历史记录条目
    // 所有后续操作将仅替换该条目
    // 这样历史记录中只有 2 个条目 - ['/url', '/url?key=param']

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

##### 使用复杂状态形状

<details>
  <Summary>示例</Summary>

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
  // `urlState` 将从 Form 类型推断!
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

[演示页面示例代码](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Form.tsx)
</details>

##### 仅更新状态并手动同步到 URL

<details>
  <Summary>示例</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // 将按内容而不是引用比较状态,仅对新值触发更新
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

在 `onBlur` 时同步状态将更符合实际使用情况。

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

## 其他 hooks 和辅助函数

### `useUrlStateBase` hook 用于其他路由器

用于使用其他路由器(例如 react-router 或 tanstack router)创建自己的 `useUrlState` hooks 的 Hooks。

[API 文档](packages/urlstate/useUrlStateBase)

### `useSharedState` hook 用于 React.js

在任何 React 组件之间共享状态的 Hook,已在 Next.js 和 Vite 中测试。

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[API 文档](packages/urlstate/useSharedState/README.md)

### `useUrlEncode` hook 用于 React.js

[API 文档](packages/urlstate/useUrlEncode/README.md)

### `encodeState` 和 `decodeState` 辅助函数

[API 文档](packages/urlstate/encodeState/README.md)

### `encode` 和 `decode` 辅助函数

[API 文档](packages/urlstate/encoder/README.md)

## 最佳实践

- 将状态形状定义为常量
- 使用 TypeScript 以增强类型安全和自动完成
- 避免在 URL 参数中存储敏感信息(SSN、API 密钥等)
- 使用此[扩展](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)以获得可读的 TS 错误

可以为状态切片创建状态 hooks,并在整个应用程序中重用它们。例如:
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

  // 其他逻辑

  // 导航到其他页面时重置查询参数
  React.useEffect(() => {
    return reset
  }, [])

  return { userState: urlState, setUserState: setUrl };;
}

```

## 注意事项

1. 只能传递可序列化的值,`Function`、`BigInt` 或 `Symbol` 不起作用,可能像 `ArrayBuffer` 这样的东西也不行。所有可以序列化为 JSON 的内容都可以工作。
2. Vercel 服务器将标头大小(查询字符串和其他内容)限制为 **14KB**,因此请将 URL 状态保持在约 5000 个字以下。<https://vercel.com/docs/errors/URL_TOO_LONG>
3. 已在带有 app router 的 `next.js` 14/15 中测试,没有计划支持 pages。

## 其他

### 贡献和/或本地运行

参见[贡献文档](CONTRIBUTING.md)

## 路线图

- [x] 用于 `Next.js` 的 hook
- [x] 用于 `react-router` 的 hook
- [x] 用于 `remix` 的 hook
- [ ] 用于 `svelte` 的 hook
- [ ] 用于 `astro` 的 hook
- [ ] 用于在 hash 中存储状态的 hook ?

## 联系和支持

- 创建 [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) 用于错误报告、功能请求或问题咨询

## [更新日志](CHANGELOG.md)

## 提及

 - [This Week in React 209](https://thisweekinreact.com/newsletter/209)
 - [JavaScript Weekly](https://javascriptweekly.com/issues/741)
 - [This Week in React 240](https://thisweekinreact.com/newsletter/240)

## 许可证

该项目根据 [MIT 许可证](LICENSE)授权。

## 招聘我

我是 **Aleksandr Smyshliaev** —— 本库唯一的作者和维护者。
资深前端工程师(React / Next.js / TypeScript,8 年以上),目前**接受全职远程工作**。

这个库是我所擅长之处的缩影:在混乱的浏览器原语之上提供类型化 API、零依赖,以及跨多个 React 大版本的 Next.js、Remix 和 React Router 稳定性。

- **最擅长** —— 组件库、状态管理,以及经得起重构的测试套件。
- **也是我的作品** ——
  [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)
  (周安装量约 84k)、
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (Playwright 的录制/回放)、
  [llm-queue](https://github.com/asmyshlyaev177/llm-queue)。
- **所在地** —— 格鲁吉亚第比利斯(GMT+4),与 CET 完全重叠。已注册为承包商实体,因此 B2B 合作无需雇主记录(employer-of-record)安排。
- **联系我** —— [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177

## 灵感来源

[NUQS](https://github.com/47ng/nuqs)

[在 Vue 中使用 URL 存储状态](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[在 URL 中存储状态](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
