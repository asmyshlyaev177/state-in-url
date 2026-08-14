<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · 日本語 · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ja source=README.md source-blob=0af71643c66bc3b309c1d1952ab56b8224a5b420 status=translated -->
<!-- i18n:end -->

# API

このモジュールは、React アプリケーションの関連のないコンポーネント間で状態を共有するためのカスタム React フックを提供します。

## `useSharedState` フック

複数のコンポーネント間で共有状態を管理するカスタム React フックです。

### パラメータ:

- `defaultState: T` - デフォルトの状態値を表すオブジェクト。
- `_getInitial?: () => T` - 初期状態を取得するオプションの関数。SSR で役立ちます。

### 戻り値:

以下を含むオブジェクト:

- `state: T` - 現在の状態。
- `getState: () => T` - 現在の状態を取得する関数。
- `setState: T | Partial<T> | (T) => void` - 状態を更新する関数。

### 例:

```typescript
import { useSharedState } from 'state-in-url/useSharedState';

const form = { name: '', age: 0 };
const { state, getState, setState } = useSharedState(form);

// 状態を更新
setState({ name: 'test' });

// または関数で状態を更新
setState(curr => ({ ...curr, name: 'test' }));

// 現在の状態を取得
const currentState = getState();
```

## `setState`

共有状態を更新します。

### パラメータ:

- `value: T | ((currState: T) => T)` - 新しい状態の値、または現在の状態を受け取り新しい状態を返す関数。

## `getState`

現在の状態を返します。

### 戻り値:

- 現在の状態オブジェクト。
