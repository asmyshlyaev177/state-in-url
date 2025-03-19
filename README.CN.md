[English](./README.md) | [한국어](./README.KO.md) | 简体中文

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="state-in-url logo" width="120px" />

  # State in url
</div>

<div align="center">
</div>

<div align="center">

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

<h4 align="center">如果您发现漏洞或有功能需求，请随时提交issue</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# 演示页面

<a href="https://state-in-url.dev" target="_blank">演示页面</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">镜像链接</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">URI 长度限制： <b>安全上限为 12KB</b> </a>

<hr />

点个 <a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a>  并且 <a href="https://github.com/asmyshlyaev177" target="_blank">关注我</a> 来支持这个项目!

非常感激在[discussions](https://github.com/asmyshlyaev177/state-in-url/discussions/1)上提交你的反馈或意见

如果觉得有用，就分享一下吧。
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[直接给我看代码!](#useurlstate)

## 为什么使用 `state-in-url`?

将任何用户状态存储在查询参数中；想象一下在浏览器 URL 中嵌入 JSON 数据，同时保持数据的类型和结构。例如数字会被解码为数字而不是字符串，日期会被解码为日期，支持对象和数组等复杂结构。
简单、快速，并且支持静态 TypeScript 验证。深度链接（即 URL 同步）变得轻而易举。

提供了适用于 Next.js 和 react-router 的 `useUrlState` 钩子，以及适用于其他 JavaScript 场景的辅助工具。
由于现代浏览器支持超长的 URL，而用户并不关心查询字符串（通常的操作是全选、复制和粘贴）。

是时候将查询字符串用于状态管理了，正如它最初的设计初衷。
这个库为你处理了所有繁琐的工作。

这个库是 NUQS 的一个很好的替代品。

### 使用场景

- 将未保存的用户表单或页面筛选条件存储在 URL 中
- 将 URL 与 React 状态同步
- 在不修改 URI 的情况下，直接在无关的客户端组件之间同步数据
- 支持共享包含应用状态的 URL（深度链接，URL 状态同步）
- 轻松实现页面刷新后的状态持久化

### 特性

- 🧩 **简单易用**：无需提供者（providers）、reducers 或样板代码，API 类似 `React.useState`，几乎没有学习成本。
- 📘 **TypeScript 验证/自动补全**：状态是一个对象，根据 TypeScript 定义，IDE 和测试中会自动进行静态验证。
- ✨ **支持复杂数据**：嵌套对象、日期和数组，像 JSON 一样工作，但存储在 URL 中。
- ☂ **默认值支持**：如果 URL 中没有参数，会自动使用默认值。
- ⌨ **结构化定义**：所有可能的值在开始时定义，避免访问不存在的键。
- **兼容性**：保留第三方查询参数不变。
- **灵活性**：同一页面可以使用多个状态对象，只需使用不同的键。
- **快速**：最小化重新渲染，编码和解码大对象仅需约 [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185)。
- **服务端渲染支持**：可在 Server Components 中使用，支持 Next.js 14 和 15。
- **轻量级**：零依赖，库大小小于 2KB。
- **开发者体验优化**：提供良好的文档、JSDoc 注释和示例。
- **框架灵活性**：提供 `Next.js` 和 `react-router` 的钩子，以及适用于其他框架或纯 JavaScript 的辅助工具。
- **全面测试**：包含单元测试和针对 Chrome/Firefox/Safari 的 Playwright 测试（[测试详情](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)）。
- **宽松的许可证**：MIT 许可证，可自由使用。

## 目录

- [安装](#安装)  
- [`useUrlState` 钩子](#useurlstate)  
  - [Next.js 专用](#nextjs-专用的-useUrlState-钩子)  
  - [React-Router 专用](#React-Router-专用的-useUrlState-钩子)  
- [其他辅助工具](#其他钩子和辅助工具)  
  - [其他路由器的 `useUrlStateBase` 钩子](#其他路由器的-useUrlStateBase-钩子)  
  - [React.js/Next.js 的 `useSharedState` 钩子](#reactjs-的-useSharedState-钩子)  
  - [React.js 的 `useUrlEncode` 钩子](#reactjs-的-useUrlEncode-钩子)  
  - [纯 JS 使用的 `encodeState` 和 `decodeState` 辅助函数](#encodeState-和-decodeState-辅助函数)  
  - [底层 `encode` 和 `decode` 函数](#encode-和-decode-辅助函数)  
- [最佳实践](#最佳实践)  
  - [注意事项](#注意事项)  
- [其他](#其他)  
  - [路线图](#路线图)  
  - [贡献指南](#贡献指南与本地运行说明)  
  - [联系与支持](#联系与支持)  
  - [更新日志](#更新日志)  
  - [许可证](#许可证)  
  - [灵感来源](#灵感来源)  

---

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

### 2. 编辑 `tsconfig.json`

在 `tsconfig.json` 的 `compilerOptions` 中设置 `"moduleResolution": "Bundler"`，或 `"moduleResolution": "Node16"`，或 `"moduleResolution": "NodeNext"`。  
可能还需要设置 `"module": "ES2022"` 或 `"module": "ESNext"`。

---

## `useUrlState`

主钩子，接收初始状态作为参数，返回状态对象、更新 URL 的回调函数以及仅更新状态的回调函数。  
所有使用相同 `state` 对象的组件会自动同步。

### Next.js 专用的 `useUrlState` 钩子

[完整 API 文档](packages/urlstate/next/useUrlState)

[React-Router 示例](#React-Router-专用的-useUrlState-钩子)

#### 使用示例

##### 基础用法

1. 定义状态结构及默认值

 ```typescript
 // userState.ts
 // 只有与默认值不同的参数会被放入 URL。
 export const userState: UserState = { name: '', age: 0 }

 // 使用 `Type` 而非 `Interface`！
 type UserState = { name: string, age: number }
 ```

2. 导入并使用

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // 可以传递 `replace` 参数，控制 `setUrl` 使用 `router.push` 还是 `router.replace`，默认为 replace=true
  // 可以传递 `searchParams` 从服务端组件传入，如果需要从服务端组件获取数据，传递 `useHistory: false`
  const { urlState, setUrl, setState, reset } = useUrlState(userState);

  return (
    <div>
      // 如果 URL 为空，urlState.name 将返回 `userState` 的默认值
      <input value={urlState.name}
        // 与 React.useState 相同的 API，例如 setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // 可以立即更新状态，但根据需要同步到 URL
        onBlur={() => setUrl()}
      />

      <button onClick={reset}>
        重置
      </button>

    </div>
  )
}
```

##### 自定义钩子以方便处理状态片段
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

    // 第一次导航会推送新的历史记录
    // 后续导航将替换该记录
    // 这样历史记录中只有两个条目 - ['/url', '/url?key=param']

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

##### 复杂状态结构

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
  // `urlState` 会从 Form 类型推断！
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
      <Field text="标签">
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

[示例页面代码](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs14/src/app/Form.tsx)
</details>

##### 仅更新状态并手动同步到 URL

<details>
  <Summary>示例</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // 会比较状态内容而非引用，仅对新值触发更新
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

在 `onBlur` 时同步状态更符合实际使用场景。

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

##### 服务端渲染

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

##### 在 `layout` 组件中使用钩子

<details>
  <Summary>示例</Summary>
  这是一个棘手的部分，因为 Next.js 的 app router 不允许从服务端访问 searchParams。可以使用中间件解决，但不够优雅，且可能在 Next.js 更新后失效。

```typescript
// 添加到适当的 `layout.tsc`
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

##### 任意状态结构（不推荐）

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

### React-Router 专用的 `useUrlState` 钩子

API 与 Next.js 版本相同，只是可以传递 [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) 类型的选项。

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
      <Field text="标签">
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
        // 可以立即更新状态，但根据需要同步到 URL
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

---

## 其他钩子和辅助工具

### 其他路由器的 `useUrlStateBase` 钩子

用于创建与其他路由器（如 react-router 或 tanstack router）兼容的 `useUrlState` 钩子。

[API 文档](packages/urlstate/useUrlStateBase)

### React.js 的 `useSharedState` 钩子

用于在任何 React 组件之间共享状态的钩子，已在 Next.js 和 Vite 中测试。

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[API 文档](packages/urlstate/useSharedState/README.md)

### React.js 的 `useUrlEncode` 钩子

[API 文档](packages/urlstate/useUrlEncode/README.md)

### `encodeState` 和 `decodeState` 辅助函数

[API 文档](packages/urlstate/encodeState/README.md)

### `encode` 和 `decode` 辅助函数

[API 文档](packages/urlstate/encoder/README.md)

---

## 最佳实践

- 将状态结构定义为常量
- 使用 TypeScript 增强类型安全和自动补全
- 避免在 URL 参数中存储敏感信息（如 SSN、API 密钥等）
- 使用此 [扩展](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) 以获得可读的 TS 错误提示

可以为状态片段创建状态钩子，并在应用程序中重复使用。例如：
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

1. 只能传递可序列化的值，`Function`、`BigInt` 或 `Symbol` 无法使用，`ArrayBuffer` 等也可能无法使用。任何可以序列化为 JSON 的内容都可以使用。
2. Vercel 服务器限制标头大小（查询字符串和其他内容）为 **14KB**，因此请将 URL 状态保持在约 5000 字以内。<https://vercel.com/docs/errors/URL_TOO_LONG>
3. 已在 `next.js` 14/15 的 app router 中测试，暂无支持 pages 的计划。

---

## 其他

### 贡献指南与本地运行说明

参见 [贡献文档](CONTRIBUTING.md)

## 路线图

- [x] `Next.js` 钩子
- [x] `react-router` 钩子
- [ ] `remix` 钩子
- [ ] `svelte` 钩子
- [ ] `astro` 钩子
- [ ] 在 hash 中存储状态的钩子？

## 联系与支持

- 创建 [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) 以报告错误、请求功能或提出问题

## [更新日志](CHANGELOG.md)

## 许可证

本项目采用 [MIT 许可证](LICENSE)。

## 灵感来源

[NUQS](https://github.com/47ng/nuqs)

[在 Vue 中使用 URL 存储状态](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[在 URL 中存储状态](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)