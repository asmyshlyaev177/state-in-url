<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=0af71643c66bc3b309c1d1952ab56b8224a5b420 status=translated -->
<!-- i18n:end -->

# API

此模块提供一个自定义 React hook,用于在 React 应用中不相关的组件之间共享状态。

## `useSharedState` hook

一个跨组件管理共享状态的自定义 React hook。

### 参数:

- `defaultState: T` - 表示默认状态值的对象。
- `_getInitial?: () => T` - 获取初始状态的可选函数,对 SSR 很有用。

### 返回值:

包含以下内容的对象:

- `state: T` - 当前状态。
- `getState: () => T` - 获取当前状态的函数。
- `setState: T | Partial<T> | (T) => void` - 更新状态的函数。

### 示例:

```typescript
import { useSharedState } from 'state-in-url/useSharedState';

const form = { name: '', age: 0 };
const { state, getState, setState } = useSharedState(form);

// 更新状态
setState({ name: 'test' });

// 或使用函数更新状态
setState(curr => ({ ...curr, name: 'test' }));

// 获取当前状态
const currentState = getState();
```

## `setState`

更新共享状态。

### 参数:

- `value: T | ((currState: T) => T)` - 新的状态值,或接收当前状态并返回新状态的函数。

## `getState`

返回当前状态。

### 返回值:

- 当前状态对象。
