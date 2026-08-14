<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=ccf4feacda4d25a7cbd63d3d1c7165c9b4b4cb00 status=translated -->
<!-- i18n:end -->

# API

此 hook 可作为为不同路由器创建 hook 的基础。

## `useUrlStateBase` hook

用于创建自定义 `useUrlState` hook 的自定义 React hook。

### 参数:

- `defaultState: object` - 表示默认状态值的对象。
- `router: object` - 具有 `push` 和 `replace` 方法的路由器对象。
- `getInitialState?: function` - 返回初始状态的可选函数。

### 返回值:

包含以下内容的对象:

- `state: object` - 当前状态。
- `getState: Function` - 获取状态的函数。
- `updateState: Function` - 在不更新 URL 的情况下更新状态的函数。
- `updateUrl: Function` - 同时更新状态和 URL 的函数。
- `reset: Function` - 将状态和 URL 重置为默认值的函数。

### 示例:

```typescript
import { useUrlStateBase } from 'state-in-url/useUrlStateBase';

function useUrlStateCustom<T>(state: T) {
  const router = React.useMemo({
    push: (url: string) => window.history.pushState(url),
    replace: (url: string) => window.history.replaceState(url)
  }, []);
  return useUrlState(state, router);
}
```

## `updateState`

在不修改 URL 的情况下更新状态。

### 参数:

- `value: T | Partial<T> | T => T` - 新的状态值,或接收当前状态并返回新状态的函数。

## `updateUrl`

同时更新状态和 URL。

### 参数:

- `value?: T | Partial<T> | (currState: T) => T` - 可选的新状态值,或接收当前状态并返回新状态的函数。
- `options?: Options` - 可选的选项对象。当 `replace` 为 true 时使用 router.replace。以及 `router` 的 push/replace 的其他 nextjs 原生选项。

## `reset`

将状态和 URL 重置为默认值。

### 参数:

- `options?: Options` - 可选的选项对象。当 `replace` 为 true 时使用 router.replace。以及 `router` 的 push/replace 的其他 nextjs 原生选项。
