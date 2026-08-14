<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=8eaf1922213c8e89f693b5213bf3cc611d332564 status=translated -->
<!-- i18n:end -->

# API

이 모듈은 remix@2 애플리케이션에서 URL 검색 파라미터와 동기화되는 상태를 관리하는 커스텀 React 훅을 제공합니다.

## `useUrlState` 훅

상태를 관리하고 URL 검색 파라미터와 동기화하는 커스텀 React 훅입니다.

### 매개변수

- `defaultState: object` - 기본 상태 값을 나타내는 객체입니다.
- `replace?: boolean` - `setUrl`이 라우터에서 `replace`와 `push` 중 어떤 메서드를 사용할지 제어합니다. 기본값은 replace=true이며, `updateUrl(stateObj, { replace: false })`로 재정의할 수 있습니다.
- `options?: NavigateOptions` - `react-router` 타입의 [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html)의 `replace` 인자와 타입입니다. `useNavigate`의 옵션과 동일합니다.
- `useHistory` - 선택적으로 window.history를 내비게이션에 사용할 수 있습니다.
- `preventScrollReset` - react-router navigate의 옵션입니다.

### 반환값

다음을 포함하는 객체입니다:

- `urlState: object` - 현재 상태입니다.
- `setState: Function` - URL을 업데이트하지 않고 상태를 업데이트하는 함수입니다.
- `setUrl: Function` - 상태와 URL을 모두 업데이트하는 함수입니다.
- `reset: Function` - 상태를 기본값으로 리셋하는 함수입니다.

### 예제

```typescript
import { useUrlState } from 'state-in-url/remix';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// URL을 변경하지 않고 상태 업데이트
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// 상태 리셋
setState((_curr, initial) => initial);

// 상태와 URL 업데이트
// 'react-router`의 `NavigateOptions` 타입 옵션
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });

// 상태와 URL 리셋
setUrl((_curr, initial) => initial);
```

## `setState`

URL을 수정하지 않고 상태를 업데이트합니다.

### `setState` 매개변수

- `value: Partial<T> | (curr: T, initial: T) => T` - 새 상태 값, 또는 현재 상태와 초기 상태를 받아 새 상태를 반환하는 함수입니다.
- `...NavigateOptions` - `react-router` 타입의 NavigateOptions 프로퍼티입니다. `useNavigate`의 옵션과 동일합니다.

## `setUrl`

상태와 URL을 모두 업데이트합니다.

### `setUrl` 매개변수

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - 선택적 새 상태 값, 또는 현재 상태와 초기 상태를 받아 새 상태를 반환하는 함수입니다.
- `options?: NavigateOptions` - react-router의 [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) 타입의 선택적 옵션 객체입니다.

## `reset`

상태와 URL을 모두 업데이트합니다.

### `reset` 매개변수

- `options?: NavigateOptions` - react-router의 [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) 타입의 선택적 옵션 객체입니다.
