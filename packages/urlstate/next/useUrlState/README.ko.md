<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=dc43c5e03232b105d24b651ab42a37b8222d1f2c status=translated -->
<!-- i18n:end -->

# API

이 모듈은 Next.js 애플리케이션에서 URL 검색 파라미터와 동기화되는 상태를 관리하는 커스텀 React 훅을 제공합니다.

## `useUrlState` 훅

상태를 관리하고 URL 검색 파라미터와 동기화하는 커스텀 React 훅입니다.

### 매개변수

- `defaultState: object` - 기본 상태 값을 나타내는 객체입니다.
- `searchParams?: object` - Next.js 서버 컴포넌트에서 전달받은 선택적 검색 파라미터 객체입니다.
- `replace?: boolean` - `setUrl`이 라우터에서 `replace`와 `push` 중 어떤 메서드를 사용할지 제어합니다. 기본값은 replace=true이며, `setUrl(stateObj, { replace: false })`로 재정의할 수 있습니다.
- `useHistory` - 선택적으로 window.history를 내비게이션에 사용할 수 있습니다. 기본값 `true`, _rsc 요청 없음 <https://github.com/vercel/next.js/discussions/59167>
- `scroll?: boolean` - Next.js 라우터 push/replace의 옵션입니다.

### 반환값

다음을 포함하는 객체입니다:

- `urlState: object` - 현재 상태입니다.
- `setState: Function` - URL을 업데이트하지 않고 상태를 업데이트하는 함수입니다.
- `setUrl: Function` - 상태와 URL을 모두 업데이트하는 함수입니다.
- `reset: Function` - 상태를 기본값으로 리셋하는 함수입니다.

### 사전 렌더링

이 훅은 `useSearchParams`를 호출하지 않으므로, 이를 사용하는 컴포넌트는 `<Suspense>` 경계가 필요하지 않고 페이지가 사전 렌더링에서 제외되지도 않습니다. 초기 상태는 서버에서는 전달한 `searchParams`에서, 클라이언트에서는 `window.location.search`에서 읽고, 이후의 변경은 History API를 직접 관찰하여 추적합니다. 이는 Next의 라우터가 인지하지 못하는 URL 변경(예: 기본 `useHistory: true` 모드에서 이 훅이 스스로 만드는 변경)도 잡아냅니다.

사전 렌더링된 페이지는 빌드 시점에 쿼리 문자열이 없으므로 여전히 기본 상태로 렌더링됩니다. 첫 페인트가 상태가 담긴 URL과 일치해야 한다면, 동적으로 렌더링되는 서버 컴포넌트에서 `searchParams`를 전달하세요.

### 예제

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// URL을 변경하지 않고 상태 업데이트
setState({ name: 'test' });

// React.useState와 동일한 API
setState(currVal => ({ ...currVal, name: 'test' }) );

// 상태 리셋
setState((_curr, initial) => initial);

// 상태와 URL 업데이트
setUrl({ name: 'test' }, { replace: false, scroll: true });

// 상태와 URL 리셋
setUrl((_curr, initial) => initial);
```

## `setState`

URL을 수정하지 않고 상태를 업데이트합니다.

### `setState` 매개변수

- `value: Partial<T> | (curr: T, initial: T) => T` - 새 상태 값, 또는 현재 상태와 초기 상태를 받아 새 상태를 반환하는 함수입니다.

## `setUrl`

상태와 URL을 모두 업데이트합니다.

### `setUrl` 매개변수

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - 선택적 새 상태 값, 또는 현재 상태와 초기 상태를 받아 새 상태를 반환하는 함수입니다.
- `options?: Options` - 선택적 옵션 객체입니다. `replace`가 true면 router.replace를 사용합니다. Nextjs의 `scroll`은 기본적으로 `false`입니다.

## `reset`

상태와 URL을 모두 업데이트합니다.

### `reset` 매개변수

- `options?: Options` - 선택적 옵션 객체입니다. `replace`가 true면 router.replace를 사용합니다. Nextjs의 `scroll`은 기본적으로 `false`입니다.
