<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=ccf4feacda4d25a7cbd63d3d1c7165c9b4b4cb00 status=translated -->
<!-- i18n:end -->

# API

이 훅은 여러 라우터를 위한 훅을 만드는 기반으로 사용할 수 있습니다.

## `useUrlStateBase` 훅

커스텀 `useUrlState` 훅을 만들기 위한 커스텀 React 훅입니다.

### 매개변수:

- `defaultState: object` - 기본 상태 값을 나타내는 객체입니다.
- `router: object` - `push` 및 `replace` 메서드를 가진 라우터 객체입니다.
- `getInitialState?: function` - 초기 상태를 반환하는 선택적 함수입니다.

### 반환값:

다음을 포함하는 객체입니다:

- `state: object` - 현재 상태입니다.
- `getState: Function` - 상태를 가져오는 함수입니다.
- `updateState: Function` - URL을 업데이트하지 않고 상태를 업데이트하는 함수입니다.
- `updateUrl: Function` - 상태와 URL을 모두 업데이트하는 함수입니다.
- `reset: Function` - 상태와 URL을 기본값으로 리셋하는 함수입니다.

### 예제:

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

URL을 수정하지 않고 상태를 업데이트합니다.

### 매개변수:

- `value: T | Partial<T> | T => T` - 새 상태 값, 또는 현재 상태를 받아 새 상태를 반환하는 함수입니다.

## `updateUrl`

상태와 URL을 모두 업데이트합니다.

### 매개변수:

- `value?: T | Partial<T> | (currState: T) => T` - 선택적 새 상태 값, 또는 현재 상태를 받아 새 상태를 반환하는 함수입니다.
- `options?: Options` - 선택적 옵션 객체입니다. `replace`가 true면 router.replace를 사용합니다. 그 밖에 `router`의 push/replace를 위한 nextjs 네이티브 옵션입니다.

## `reset`

상태와 URL을 기본값으로 리셋합니다.

### 매개변수:

- `options?: Options` - 선택적 옵션 객체입니다. `replace`가 true면 router.replace를 사용합니다. 그 밖에 `router`의 push/replace를 위한 nextjs 네이티브 옵션입니다.
