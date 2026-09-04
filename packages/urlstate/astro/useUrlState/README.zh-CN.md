<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=1e2218fc31f03646440896464e1dece6dd29d65d status=translated -->
<!-- i18n:end -->

# API

此模块提供一个自定义 React hook，用于在 Astro 应用的 React 岛屿（islands）中管理与 URL 搜索参数同步的状态。

Astro 默认没有客户端路由器，因此该 hook 通过 `window.history` 写入 URL，并在浏览器前进/后退、hook 自身的写入以及任何其他 `pushState`/`replaceState` 调用时将其读回，Astro 自带的 `<ClientRouter />` 也包括在内。同一页面上的岛屿共享状态：状态以默认状态对象为键，且每个岛屿导入的都是同一个模块。在 `<ClientRouter />` 下，如果某个岛屿的状态在上一页已被使用，它会先渲染该状态，并在挂载后再从 URL 重新同步。

Preact 岛屿通过 `@astrojs/preact` 并设置 `compat: true`，使用同一个导入语句。

## `useUrlState` hook

一个管理状态并将其与 URL 搜索参数同步的自定义 React hook。

### 参数

- `defaultState: object` - 表示默认状态值的对象。
- `searchParams?: object` - 即 `Object.fromEntries(Astro.url.searchParams)`，以 prop 的形式传给岛屿，这样服务端渲染结果与 URL 一致，hydration 无需纠正任何内容。须为普通对象而非 `URLSearchParams`：岛屿的 props 会被序列化，传入 `URLSearchParams` 到达时会变成 `{}`。页面必须按需渲染（`output: 'server'`，或在页面上声明 `export const prerender = false`，并配置适配器）：预渲染的页面没有请求，因此岛屿拿到的是 `{}`，并在 hydration 之后再读取 URL。
- `replace?: boolean` - 控制 `setUrl` 使用 `replaceState` 还是 `pushState`，默认 replace=true，可通过 `setUrl(stateObj, { replace: false })` 覆盖。

### 返回值

包含以下内容的对象：

- `urlState: object` - 当前状态。
- `setState: Function` - 在不更新 URL 的情况下更新状态的函数。
- `setUrl: Function` - 同时更新状态和 URL 的函数。
- `reset: Function` - 将状态重置为默认值的函数。

### 示例

```astro
---
// src/pages/index.astro
import { Form } from '../components/Form';

const searchParams = Object.fromEntries(Astro.url.searchParams);
---

<Form client:load searchParams={searchParams} />
```

```tsx
// src/components/Form.tsx
import { useUrlState } from 'state-in-url/astro';

const form = { name: '', age: 0 };

export function Form({ searchParams }: { searchParams?: Record<string, string> }) {
  const { urlState, setState, setUrl } = useUrlState(form, { searchParams });

  return (
    <input
      value={urlState.name}
      onChange={(ev) => setUrl({ name: ev.target.value })}
    />
  );
}
```

请在事件处理函数或 effect 中调用 `setState` 和 `setUrl`，切勿在渲染期间调用：

```typescript
// 在不更改 URL 的情况下更新状态
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// 重置状态
setState((_curr, initial) => initial);

// 更新状态和 URL
setUrl({ name: 'test' }, { replace: false });

// 重置状态和 URL
setUrl((_curr, initial) => initial);
```

不使用岛屿时，即页面上没有客户端框架，可在 frontmatter 中用 `state-in-url/encodeState` 提供的 `decodeState` 和 `encodeState` 完成同样的工作：将 `Astro.url.searchParams` 解码为带类型的对象，并为链接构建下一个 URL。

## `setState`

在不修改 URL 的情况下更新状态。

### `setState` 参数

- `value: Partial<T> | (curr: T, initial: T) => T` - 新的状态值，或接收当前状态、初始状态并返回新状态的函数。

## `setUrl`

同时更新状态和 URL。

### `setUrl` 参数

- `value?: Partial<T> | (curr: T, initial: T) => T` - 可选的新状态值，或接收当前状态、初始状态并返回新状态的函数。
- `options?: { replace?: boolean }` - `replaceState`（默认）或 `pushState`。

## `reset`

将状态和 URL 都重置为默认值。

### `reset` 参数

- `options?: { replace?: boolean }` - `replaceState`（默认）或 `pushState`。
