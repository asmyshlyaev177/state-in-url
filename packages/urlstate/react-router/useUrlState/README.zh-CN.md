<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=1c8bfbd0d0f5f8b7ac5ea33a5a298550b0141f5f status=translated -->
<!-- i18n:end -->

# API

此模块提供一个自定义 React hook,用于在 react-router@6-7 应用中管理与 URL 搜索参数同步的状态。

## `useUrlState` hook

一个管理状态并将其与 URL 搜索参数同步的自定义 React hook。

### 参数

- `defaultState: object` - 表示默认状态值的对象。
- `replace?: boolean` - 控制 `setUrl` 在路由器上使用 `replace` 还是 `push` 方法,默认 replace=true,可通过 `updateUrl(stateObj, { replace: false })` 覆盖。
- `options?: NavigateOptions` - 来自 `react-router` 类型的 [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) 的 `replace` 参数和类型,与 `useNavigate` 的选项相同。
- `useHistory` - 可选地使用 window.history 进行导航。
- `preventScrollReset` - 来自 react-router navigate 的选项。

### 返回值

包含以下内容的对象:

- `urlState: object` - 当前状态。
- `setState: Function` - 在不更新 URL 的情况下更新状态的函数。
- `setUrl: Function` - 同时更新状态和 URL 的函数。
- `reset: Function` - 将状态重置为默认值的函数。

### 示例

```typescript
import { useUrlState } from 'state-in-url/react-router';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// 在不更改 URL 的情况下更新状态
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// 重置状态
setState((_curr, initial) => initial);

// 更新状态和 URL
// 来自 'react-router` 的 `NavigateOptions` 类型的选项
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });

// 重置状态和 URL
setUrl((_curr, initial) => initial);
```

## `setState`

在不修改 URL 的情况下更新状态。

### `setState` 参数

- `value: Partial<T> | (curr: T, initial: T) => T` - 新的状态值,或接收当前状态、初始状态并返回新状态的函数。
- `...NavigateOptions` - 来自 `react-router` 类型的 NavigateOptions 的属性,与 `useNavigate` 的选项相同。

## `setUrl`

同时更新状态和 URL。

### `setUrl` 参数

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - 可选的新状态值,或接收当前状态、初始状态并返回新状态的函数。
- `options?: NavigateOptions` - 来自 react-router 的 [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) 类型的可选选项对象。

## `reset`

同时更新状态和 URL。

### `reset` 参数

- `options?: NavigateOptions` - 来自 react-router 的 [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) 类型的可选选项对象。
