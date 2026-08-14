<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=0af71643c66bc3b309c1d1952ab56b8224a5b420 status=translated -->
<!-- i18n:end -->

# API

이 모듈은 React 애플리케이션에서 서로 관련 없는 컴포넌트 간에 상태를 공유하기 위한 커스텀 React 훅을 제공합니다.

## `useSharedState` 훅

여러 컴포넌트 간의 공유 상태를 관리하는 커스텀 React 훅입니다.

### 매개변수:

- `defaultState: T` - 기본 상태 값을 나타내는 객체입니다.
- `_getInitial?: () => T` - 초기 상태를 가져오는 선택적 함수입니다. SSR에 유용합니다.

### 반환값:

다음을 포함하는 객체입니다:

- `state: T` - 현재 상태입니다.
- `getState: () => T` - 현재 상태를 가져오는 함수입니다.
- `setState: T | Partial<T> | (T) => void` - 상태를 업데이트하는 함수입니다.

### 예제:

```typescript
import { useSharedState } from 'state-in-url/useSharedState';

const form = { name: '', age: 0 };
const { state, getState, setState } = useSharedState(form);

// 상태 업데이트
setState({ name: 'test' });

// 또는 함수로 상태 업데이트
setState(curr => ({ ...curr, name: 'test' }));

// 현재 상태 가져오기
const currentState = getState();
```

## `setState`

공유 상태를 업데이트합니다.

### 매개변수:

- `value: T | ((currState: T) => T)` - 새 상태 값, 또는 현재 상태를 받아 새 상태를 반환하는 함수입니다.

## `getState`

현재 상태를 반환합니다.

### 반환값:

- 현재 상태 객체입니다.
