<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=da24fd34a3d4ed9b3d2fdcdc46897b6756d2a208 status=translated -->
<!-- i18n:end -->

# API

本模块为**没有路由器**的 React 应用提供一个自定义 React hook，用于管理与 URL 查询参数同步的状态——Vite、Create React App，或挂载到你无法控制的页面里的小部件。

由于没有路由器可用于导航，该 hook 使用 `window.history` 写入 URL，并在前进/后退、自身写入以及任何其他 `pushState`/`replaceState` 时把它读回来。共享同一个默认状态对象的每个组件都共享状态，因此无需层层传递。

如果应用本身带有路由器，请改用对应的入口：`state-in-url/next`、`state-in-url/react-router`、`state-in-url/react-router6`、`state-in-url/remix`。对于本包没有提供入口的路由器（例如 TanStack Router），请用 [`useUrlStateBase`](../../useUrlStateBase) 自行构建 hook。`state-in-url/astro` 就是同一个 hook，针对[群岛](../../astro/useUrlState)作了说明。

## `useUrlState` hook

一个管理状态并将其与 URL 查询参数同步的自定义 React hook。

### 参数

- `defaultState: object` - 表示默认状态值的对象。必须是模块作用域的常量：状态是按这个对象的标识共享的。
- `searchParams?: object` - 来自服务端渲染的查询参数，以普通对象形式传入，使首次渲染与 URL 一致。纯客户端应用可以省略它，hook 会自行读取 URL。
- `replace?: boolean` - 控制 `setUrl` 使用 `replaceState` 还是 `pushState`，默认 replace=true，可通过 `setUrl(stateObj, { replace: false })` 覆盖

### 返回值

一个包含以下内容的对象：

- `urlState: object` - 当前状态。
- `setState: Function` - 更新状态但不更新 URL 的函数。
- `setUrl: Function` - 同时更新状态和 URL 的函数。
- `reset: Function` - 将状态重置为默认值的函数。

### 示例

```tsx
// src/useFilters.ts
import { useUrlState } from 'state-in-url/react';

type FiltersState = { sort: 'name' | 'date'; page: number };
const FILTERS_STATE: FiltersState = { sort: 'name', page: 1 };

export function useFilters() {
  return useUrlState(FILTERS_STATE);
}
```

```tsx
// src/FiltersBar.tsx
import { useFilters } from './useFilters';

export function FiltersBar() {
  const { urlState, setUrl } = useFilters();

  return (
    <button onClick={() => setUrl({ page: urlState.page + 1 })}>
      Page {urlState.page}
    </button>
  );
}
```

任何其他调用 `useFilters()` 的组件都会读写同一份状态并随之重新渲染。没有 provider，也不需要通过 props 传递任何东西。

请在事件处理函数或副作用中调用 `setState` 和 `setUrl`，绝不要在渲染过程中调用：

```typescript
// 更新状态但不改变 URL
setState({ sort: 'date' });
setState(currVal => ({ ...currVal, sort: 'date' }) );

// 重置状态
setState((_curr, initial) => initial);

// 更新状态和 URL
setUrl({ sort: 'date' }, { replace: false });

// 重置状态和 URL
setUrl((_curr, initial) => initial);
```

对于文本输入框，请在每次按键时调用 `setState`，并在失焦或防抖之后调用 `setUrl`——URL 写入是有节流的，把 `setUrl` 绑定到 `onChange` 会让输入显得卡顿。
