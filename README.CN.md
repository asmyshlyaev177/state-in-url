[English](./README.md) | [한국어](./README.KO.md) | 简体中文

<h1 align="center">state-in-url</h1>

<div align="center">
  <img src="/assets/logo.svg?raw=true" alt="库标志"/>

  <div>轻松在不相关的 React 组件之间共享状态，具有 IDE 自动完成和 TS 验证功能。无需任何麻烦或样板代码。</div>
</div>

<div align="center">
<hr />

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=main)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
</div>

<div align="center">

<h4 align="center">如果发现bug，请不要犹豫，立即提出问题</h4>

![演示-gif](https://github.com/asmyshlyaev177/state-in-url/assets/19854148/c9802601-4d42-4362-b3e4-37ff87c3b97f)

<a href="https://state-in-url-asmyshlyaev177.vercel.app/" target="_blank">DEMO</a> |
<a href ="https://codesandbox.io/p/github/asmyshlyaev177/state-in-url/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyk5bd9y00062v6jspcfrkx7%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyk5bd9x00022v6jyg71cr9e%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyk5bd9x00042v6jsos2y043%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyk5bd9x00052v6j5r632b12%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyk5bd9x00022v6jyg71cr9e%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyk5bd9w00012v6j83rq3bvo%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clyk5bd9x00022v6jyg71cr9e%2522%252C%2522activeTabId%2522%253A%2522clyk5bd9w00012v6j83rq3bvo%2522%257D%252C%2522clyk5bd9x00052v6j5r632b12%2522%253A%257B%2522id%2522%253A%2522clyk5bd9x00052v6j5r632b12%2522%252C%2522activeTabId%2522%253A%2522clyk5bdjx000b2v6jfc8ae464%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522SETUP_TASKS%2522%252C%2522id%2522%253A%2522clyk5bdjx000b2v6jfc8ae464%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A2222%252C%2522id%2522%253A%2522clyk5cjbo004d2v6j3u55k74g%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522ENV_SETUP%2522%252C%2522id%2522%253A%2522clyk5h8dp000r2v6j0r7kc7qq%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clyk5bd9x00042v6jsos2y043%2522%253A%257B%2522id%2522%253A%2522clyk5bd9x00042v6jsos2y043%2522%252C%2522activeTabId%2522%253A%2522clyk5cbuv001q2v6joegrxxv6%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyk5bd9x00032v6jtfhj316o%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522NEW_TERMINAL%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clyk5cbuv001q2v6joegrxxv6%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522cleanupDist%2522%252C%2522id%2522%253A%2522clyk5dgvo005i2v6jj950sxft%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target="_blank">Demo on Codesandbox</a>

<hr />

给项目加个 ⭐️ 以示支持！

<hr />

</div>

## 为什么使用 state-in-url?

`state-in-url` 是一个简单的状态管理工具，具有 URL 同步功能。

# 使用场景

- 🙃 在不改变 URL 的情况下在不同组件间共享状态，是信号和其他状态管理工具的良好替代品
- 🔗 包含完整应用程序状态的可共享 URL
- 🔄 在页面重新加载时轻松保持状态
- 🧠 在不相关的客户端组件间同步数据
- 🧮 在 URL 中存储未保存的用户表单

# 特性

- 🧩 **简单**: 无需提供者、减速器、样板代码或新概念
- 📘 **TypeScript 支持和类型安全**: 保留数据类型和结构，通过 IDE 建议、强类型和 JSDoc 注释增强开发体验
- ⚛️ **框架灵活性**: 为 Next.js 和 React.js 应用程序提供单独的钩子，以及纯 JS 函数
- ⚙ **测试充分**: 单元测试和 Playwright 测试
- ⚡ **快速**: 最小化重新渲染
- 🪶 **轻量级**: 零依赖，占用空间小

## 目录

- [安装](#安装)
- [Next.js 的 `useUrlState`](#nextjs-的-useurlstate-钩子)
- [React.js 的 `useUrlEncode`](#reactjs-的-useurlencode-钩子)
- [纯 JS 使用的 `encodeState` 和 `decodeState`](#纯-js-使用的-encodestate-和-decodestate-辅助函数)
- [自动同步状态到 URL](#自动同步状态)
- [低级 `encode` 和 `decode` 函数](#encode-和-decode-辅助函数)
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

### 2. 编辑 tsconfig.json

在 `tsconfig.json` 中设置 `"moduleResolution": "Node16"` 或 `"moduleResolution": "NodeNext"`

## Next.js 的 useUrlState 钩子

[文档](packages/urlstate/useUrlState/README.md)

`useUrlState` 是一个为 Next.js 应用程序设计的自定义 React 钩子，使客户端组件之间的通信变得简单。它允许你共享任何复杂的状态并将其与 URL 搜索参数同步，提供了一种在页面重新加载时保持状态和通过 URL 共享应用程序状态的方法。

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
import { useUrlState } from 'state-in-url';

import { countState } from './countState';

function MyComponent() {
  // 用于从服务器组件使用 searchParams
  // 例如 export default async function Home({ searchParams }: { searchParams: object }) {
  // const { state, updateState, updateUrl } = useUrlState(countState, searchParams);
  const { state, updateState, updateUrl } = useUrlState(countState);

  // 不会让你意外地直接修改状态，需要 TS
  // state.count = 2 // <- 错误

  return (
    <div>
      <p>计数: {state.count}</p>

      <button onClick={() => updateUrl({ count: state.count + 1 }), { replace: true }}>
        增加 (更新 URL)
      </button>

      // 与 React.useState 相同的 API
      <button onClick={() => updateState(currState => ({...currState, count: currState.count + 1 }) )}>
        增加 (仅本地)
      </button>
      <button onClick={() => updateUrl()}>
        同步更改到 URL
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
import { useUrlState } from 'state-in-url';

import { userSettings } from './userSettings';

function SettingsComponent() {
  // `state` 将从 UserSettings 类型推断!
  const { state, updateUrl } = useUrlState(userSettings);

  const toggleTheme = () => {
    updateUrl(current => ({
      ...current,
      theme: current.theme === 'light' ? 'dark' : 'light',
    }));
  };

  // 空闲时同步状态到 url
  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // 将按内容而不是引用比较状态，并仅对新值触发更新
      updateUrl(state);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [state, updateUrl]);

  return (
    <div>
      <h2>用户设置</h2>
      <p>主题: {state.theme}</p>
      <p>字体大小: {state.fontSize}px</p>
      <button onClick={toggleTheme}>切换主题</button>
      {/* 其他用于更新其他设置的 UI 元素 */}
    </div>
  );
}
...

// 其他组件
function Component() {
  const { state } = useUrlState(defaultSettings);

  return (
    <div>
      <p>通知功能 {state.notifications ? '开启' : '关闭'}</p>
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
      // 将按内容而不是引用比较状态，并仅对新值触发更新
      updateUrl(state);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [state, updateUrl]);
```

#### 任意状态形状 (不推荐)

```typescript
'use client'
import { useUrlState } from 'state-in-url';

const someObj = {};

function SettingsComponent() {
  const { state, updateUrl, updateState } = useUrlState<object>(someObj);
}
```

## React.js 的 `useUrlEncode` 钩子

[文档](packages/urlstate/useUrlEncode/README.md)

## 纯 JS 使用的 `encodeState` 和 `decodeState` 辅助函数

[文档](packages/urlstate/encodeState/README.md)

## `encode` 和 `decode` 辅助函数

[文档](packages/urlstate/encoder/README.md)

## 最佳实践

- 将状态形状定义为常量以确保一致性
- 使用 TypeScript 以增强类型安全性和自动完成功能
- 避免在 URL 参数中存储敏感信息
- 对频繁更新使用 `updateState`，使用 `updateUrl` 同步更改到 url
- 使用此[扩展](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)以获得可读的 TS 错误

## 注意事项

1. 只能传递可序列化的值，`Function`、`BigInt` 或 `Symbol` 不起作用，`ArrayBuffer` 之类的东西也可能不行。
2. Vercel 服务器将头部大小（查询字符串和其他内容）限制为 **14KB**，因此请将 URL 状态保持在约 5000 字以内。 https://vercel.com/docs/errors/URL_TOO_LONG

## 本地运行

克隆此仓库，运行 `npm install` 然后

```sh
npm run dev
```

转到 [localhost:3000](http://localhost:3000)

## 联系与支持

- 创建 [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) 以报告错误、请求功能或提出问题

## [更新日志](https://github.com/asmyshlyaev177/state-in-url/blob/main/CHANGELOG.md)

## 许可证

本项目采用 [MIT 许可证](https://github.com/asmyshlyaev177/state-in-url/blob/main/LICENSE)。

## 灵感来源

[在 Vue 中使用 URL 存储状态](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[在 URL 中存储状态](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
