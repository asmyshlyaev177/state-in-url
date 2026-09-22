<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=da24fd34a3d4ed9b3d2fdcdc46897b6756d2a208 status=translated -->
<!-- i18n:end -->

# API

이 모듈은 **라우터가 없는** React 애플리케이션을 위해 URL 검색 파라미터와 동기화되는 상태를 관리하는 커스텀 React 훅을 제공합니다. Vite, Create React App, 또는 직접 제어할 수 없는 페이지에 얹는 위젯 등이 해당합니다.

탐색에 쓸 라우터가 없으므로 이 훅은 `window.history`로 URL을 쓰고, 뒤로/앞으로 이동할 때, 자신이 쓴 경우, 그리고 다른 어떤 `pushState`/`replaceState`가 일어날 때 URL을 다시 읽습니다. 기본 상태 객체를 공유하는 모든 컴포넌트가 상태를 공유하므로 props로 내려줄 필요가 없습니다.

앱에 라우터가 있다면 해당 진입점을 사용하세요: `state-in-url/next`, `state-in-url/react-router`, `state-in-url/react-router6`, `state-in-url/remix`. 이 패키지가 진입점을 제공하지 않는 라우터(예: TanStack Router)라면 [`useUrlStateBase`](../../useUrlStateBase)로 직접 훅을 만드세요. `state-in-url/astro`는 같은 훅이며 [아일랜드](../../astro/useUrlState)를 위해 문서화되어 있습니다.

## `useUrlState` 훅

상태를 관리하고 이를 URL 검색 파라미터와 동기화하는 커스텀 React 훅입니다.

### 매개변수

- `defaultState: object` - 기본 상태 값을 나타내는 객체. 모듈 스코프 상수여야 합니다: 상태는 이 객체의 동일성으로 공유됩니다.
- `searchParams?: object` - 서버 렌더링에서 온 쿼리 파라미터를 일반 객체로 전달하면 첫 렌더링이 URL과 일치합니다. 클라이언트 전용 앱은 생략하면 되고, 그러면 훅이 직접 URL을 읽습니다.
- `replace?: boolean` - `setUrl`이 `replaceState`를 쓸지 `pushState`를 쓸지 제어합니다. 기본값은 replace=true이며 `setUrl(stateObj, { replace: false })`로 덮어쓸 수 있습니다

### 반환값

다음을 담은 객체:

- `urlState: object` - 현재 상태.
- `setState: Function` - URL을 갱신하지 않고 상태만 갱신하는 함수.
- `setUrl: Function` - 상태와 URL을 모두 갱신하는 함수.
- `reset: Function` - 상태를 기본값으로 되돌리는 함수.

### 예제

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

`useFilters()`를 호출하는 다른 어떤 컴포넌트도 같은 상태를 읽고 쓰며 그에 맞춰 다시 렌더링됩니다. provider도 없고 props로 넘길 것도 없습니다.

`setState`와 `setUrl`은 이벤트 핸들러나 이펙트에서 호출하고, 렌더링 중에는 절대 호출하지 마세요:

```typescript
// URL을 바꾸지 않고 상태 갱신
setState({ sort: 'date' });
setState(currVal => ({ ...currVal, sort: 'date' }) );

// 상태 초기화
setState((_curr, initial) => initial);

// 상태와 URL 갱신
setUrl({ sort: 'date' }, { replace: false });

// 상태와 URL 초기화
setUrl((_curr, initial) => initial);
```

텍스트 입력에서는 키 입력마다 `setState`를 호출하고 `setUrl`은 blur 시점이나 디바운스 후에 호출하세요. URL 쓰기는 스로틀링되므로 `setUrl`을 `onChange`에 묶으면 입력이 느리게 느껴집니다.
