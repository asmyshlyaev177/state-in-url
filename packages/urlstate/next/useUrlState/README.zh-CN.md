<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=dc43c5e03232b105d24b651ab42a37b8222d1f2c status=translated -->
<!-- i18n:end -->

# API

此模块提供一个自定义 React hook,用于在 Next.js 应用中管理与 URL 搜索参数同步的状态。

## `useUrlState` hook

一个管理状态并将其与 URL 搜索参数同步的自定义 React hook。

### 参数

- `defaultState: object` - 表示默认状态值的对象。
- `searchParams?: object` - 来自 Next.js 服务器组件的可选搜索参数对象。
- `replace?: boolean` - 控制 `setUrl` 在路由器上使用 `replace` 还是 `push` 方法,默认 replace=true,可通过 `setUrl(stateObj, { replace: false })` 覆盖。
- `useHistory` - 可选地使用 window.history 进行导航,默认 `true`,无 _rsc 请求 <https://github.com/vercel/next.js/discussions/59167>
- `scroll?: boolean` - 来自 Next.js 路由器 push/replace 的选项。

### 返回值

包含以下内容的对象:

- `urlState: object` - 当前状态。
- `setState: Function` - 在不更新 URL 的情况下更新状态的函数。
- `setUrl: Function` - 同时更新状态和 URL 的函数。
- `reset: Function` - 将状态重置为默认值的函数。

### 预渲染

该 hook 不会调用 `useSearchParams`,因此使用它的组件不需要 `<Suspense>` 边界,也不会让页面退出预渲染。它在服务器端从你传入的 `searchParams` 读取初始状态,在客户端从 `window.location.search` 读取,并通过直接观察 History API 来追踪后续变更——这也能捕获 Next 路由器从未看到的 URL 变更,例如该 hook 在默认 `useHistory: true` 模式下自行产生的变更。

预渲染的页面在构建时没有查询字符串,因此仍以默认状态渲染。当首屏必须与带状态的 URL 匹配时,请从动态渲染的服务器组件传入 `searchParams`。

### 示例

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// 在不更改 URL 的情况下更新状态
setState({ name: 'test' });

// API 与 React.useState 相同
setState(currVal => ({ ...currVal, name: 'test' }) );

// 重置状态
setState((_curr, initial) => initial);

// 更新状态和 URL
setUrl({ name: 'test' }, { replace: false, scroll: true });

// 重置状态和 URL
setUrl((_curr, initial) => initial);
```

## `setState`

在不修改 URL 的情况下更新状态。

### `setState` 参数

- `value: Partial<T> | (curr: T, initial: T) => T` - 新的状态值,或接收当前状态、初始状态并返回新状态的函数。

## `setUrl`

同时更新状态和 URL。

### `setUrl` 参数

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - 可选的新状态值,或接收当前状态、初始状态并返回新状态的函数。
- `options?: Options` - 可选的选项对象。当 `replace` 为 true 时使用 router.replace。Nextjs 的 `scroll` 默认为 `false`。

## `reset`

同时更新状态和 URL。

### `reset` 参数

- `options?: Options` - 可选的选项对象。当 `replace` 为 true 时使用 router.replace。Nextjs 的 `scroll` 默认为 `false`。
