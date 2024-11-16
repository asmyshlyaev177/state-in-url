[English](./README.md) | [한국어](./README.KO.md) | 简体中文

<div align="center">
  <img src="/assets/Logo_big.png?raw=true" alt="state-in-url logo"/>

  <div>轻松在不相关的React组件之间共享状态，具有IDE自动完成和TS验证功能。无需任何麻烦或样板代码。</div>
</div>

<div align="center">
<hr />

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
</div>

<div align="center">

<h4 align="center">如果发现bug，请随时提出issue</h4>

![演示-gif](https://github.com/asmyshlyaev177/state-in-url/assets/19854148/c9802601-4d42-4362-b3e4-37ff87c3b97f)

<a href="https://state-in-url.dev/" target="_blank">演示</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">DEMO2</a> |

<hr />

添加⭐️来支持项目！

<hr />

</div>

## 为什么使用state-in-url？

`state-in-url`是一个简单的状态管理工具，可以与URL同步。在不相关的React组件之间共享复杂状态，将状态同步到URL，对TS友好，兼容NextJS。

# 使用场景

- 🙃 在不改变URL的情况下，在不同组件之间共享状态，是信号和其他状态管理工具的良好替代方案
- 🔗 包含完整应用程序状态的可共享URL
- 🔄 在页面重新加载之间轻松持久化状态
- 🧠 在不相关的客户端组件之间同步数据
- 🧮 在URL中存储未保存的用户表单

# 特性

- 🧩 **简单**：无需提供者、reducers、样板代码或新概念
- 📘 **TypeScript支持和类型安全**：保留数据类型和结构，通过IDE建议、强类型和JSDoc注释增强开发体验
- ⚛️ **框架灵活性**：为Next.js和React.js应用程序提供单独的钩子，以及用于纯JS的函数
- ⚙ **经过充分测试**：单元测试和Playwright测试
- ⚡ **快速**：最少的重新渲染
- 🪶 **轻量级**：零依赖，占用空间小

## 目录

- [安装](#安装)
- [Next.js的`useUrlState`](#nextjs的useurlstate钩子)
- [React.js的`useSharedState`](#reactjs的usesharedstate钩子)
- [React.js的`useUrlEncode`](#reactjs的useurlencode钩子)
- [纯JS使用的`encodeState`和`decodeState`](#纯js使用的encodestate和decodestate辅助函数)
- [自动同步状态到URL](#自动同步状态)
- [低级`encode`和`decode`函数](#encode和decode辅助函数)
- [最佳实践](#最佳实践)
- [注意事项](#注意事项)
- [联系与支持](#联系与支持)
- [更新日志](#更新日志)
- [许可证](#许可证)
- [灵感来源](#灵感来源)

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

### 2. 编辑tsconfig.json

在`tsconfig.json`的`compilerOptions`中设置`"moduleResolution": "Node16"`或`"moduleResolution": "NodeNext"`

## Next.js的useUrlState钩子

[文档](packages/urlstate/next/useUrlState)

`useUrlState`是一个为Next.js应用程序设计的自定义React钩子，使客户端组件之间的通信变得简单。它允许你共享任何复杂的状态并将其与URL搜索参数同步，提供了一种在页面重新加载之间持久化状态并通过URL共享应用程序状态的方法。

### 使用示例

#### 基本用法

1. 定义状态形状

   ```typescript
   // countState.ts
   // 状态形状应该存储在一个常量中，不要直接传递对象
   export const countState: CountState = { count: 0 }

   type CountState = { count: number }
   ```

2. 导入并使用

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { countState } from './countState';

function MyComponent() {
  // 用于从服务器组件使用searchParams
  // 例如 export default async function Home({ searchParams }: { searchParams: object }) {
  // const { state, updateState, updateUrl } = useUrlState(countState, searchParams);
  const { state, updateState, updateUrl } = useUrlState(countState);

  // 不允许你意外地直接修改状态，需要TS
  // state.count = 2 // <- 错误

  return (
    <div>
      <p>计数：{state.count}</p>

      <button onClick={() => updateUrl({ count: state.count + 1 }), { replace: true }}>
        增加（更新URL）
      </button>

      // 与React.useState相同的API
      <button onClick={() => updateState(currState => ({...currState, count: currState.count + 1 }) )}>
        增加（仅本地）
      </button>
      <button onClick={() => updateUrl()}>
        同步更改到URL
        // 或者不同步，只共享状态
      </button>

      <button onClick={() => updateUrl(state)}>
        重置
      </button>
    </div>
  )
}
```

#### 复杂状态形状示例

```typescript
interface UserSettings {
  theme: 'light' | 'dark';
  fontSize: number;
  notifications: boolean;
}

export const userSettings: UserSettings {
  theme: 'light',
  fontSize: 16,
  notifications: true,
}
```

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userSettings } from './userSettings';

function SettingsComponent() {
  // `state` 将从UserSettings类型推断！
  const { state, updateUrl } = useUrlState(userSettings);

  const toggleTheme = () => {
    updateUrl(current => ({
      ...current,
      theme: current.theme === 'light' ? 'dark' : 'light',
    }));
  };

  // 空闲时同步状态到URL
  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // 将通过内容而不是引用比较状态，只为新值触发更新
      updateUrl(state);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [state, updateUrl]);

  return (
    <div>
      <h2>用户设置</h2>
      <p>主题：{state.theme}</p>
      <p>字体大小：{state.fontSize}px</p>
      <button onClick={toggleTheme}>切换主题</button>
      {/* 其他UI元素用于更新其他设置 */}
    </div>
  );
}
...

// 其他组件
function Component() {
  const { state } = useUrlState(defaultSettings);

  return (
    <div>
      <p>通知 {state.notifications ? '开启' : '关闭'}</p>
    </div>
  )
}
```

#### 自动同步状态

```typescript
  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // 将通过内容而不是引用比较状态，只为新值触发更新
      updateUrl(state);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [state, updateUrl]);
```

#### 服务器端渲染示例

```typescript
export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <Form sp={searchParams} />
  )
}

// Form.tsx
'use client'
import React from 'react';
import { useUrlState } from 'state-in-url/next';
import { form } from './form';

const Form = ({ sp }: { sp: object }) => {
  const { state, updateState, updateUrl } = useUrlState(form, sp);
}
```

#### 在`layout`组件中使用钩子

这是一个棘手的部分，因为使用app router的nextjs不允许从服务器端访问searchParams。有一个使用中间件的解决方法，但它并不漂亮，而且可能在nextjs更新后停止工作。

```typescript
// 添加到适当的`layout.tsc`
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

// 目标layout组件
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

#### 任意状态形状示例（不推荐）

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { state, updateUrl, updateState } = useUrlState<object>(someObj);
}
```

## React.js的`useSharedState`钩子
用于在任何React组件之间共享状态的钩子，已在Next.js和Vite中测试。

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[文档](packages/urlstate/useSharedState/README.md)

## React.js的`useUrlEncode`钩子

[文档](packages/urlstate/useUrlEncode/README.md)

## 纯JS使用的`encodeState`和`decodeState`辅助函数

[文档](packages/urlstate/encodeState/README.md)

## `encode`和`decode`辅助函数

[文档](packages/urlstate/encoder/README.md)

## 最佳实践

- 将您的状态形状定义为常量，以确保一致性
- 使用TypeScript以增强类型安全性和自动完成功能
- 避免在URL参数中存储敏感信息
- 使用`updateState`进行频繁更新，使用`updateUrl`同步更改到URL
- 在Next.js中使用`Suspence`包装客户端组件
- 使用这个[扩展](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)以获得可读的TS错误

## 注意事项

1. 只能传递可序列化的值，`Function`、`BigInt`或`Symbol`不会工作，可能类似`ArrayBuffer`的东西也不行。
2. Vercel服务器限制头部（查询字符串和其他内容）的大小为**14KB**，所以保持您的URL状态在~5000个单词以下。https://vercel.com/docs/errors/URL_TOO_LONG
3. 已在使用app router的`next.js` 14中测试，不计划支持pages。

## 本地运行

克隆此仓库，运行`npm install`然后

```sh
npm run dev
```

转到[localhost:3000](http://localhost:3000)

## 联系与支持

- 创建[GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues)报告bug、提出功能请求或提问

## [更新日志](https://github.com/asmyshlyaev177/state-in-url/blob/master/CHANGELOG.md)

## 许可证

本项目采用[MIT许可证](https://github.com/asmyshlyaev177/state-in-url/blob/master/LICENSE)。

## 灵感来源

[在Vue中使用URL存储状态](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[在URL中存储状态](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
