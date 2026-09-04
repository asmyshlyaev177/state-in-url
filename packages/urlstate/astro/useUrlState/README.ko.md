<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=1e2218fc31f03646440896464e1dece6dd29d65d status=translated -->
<!-- i18n:end -->

# API

이 모듈은 Astro 애플리케이션의 React 아일랜드 안에서 URL 검색 파라미터와 동기화되는 상태를 관리하는 커스텀 React 훅을 제공합니다.

Astro에는 기본적으로 클라이언트 측 라우터가 없으므로, 이 훅은 `window.history`로 URL을 쓰고, 뒤로/앞으로 이동, 훅 자신의 쓰기, 그리고 그 외 모든 `pushState`/`replaceState` 시점에 (Astro 자체의 `<ClientRouter />` 포함) URL을 다시 읽어 옵니다. 한 페이지 안의 아일랜드들은 상태를 공유합니다. 상태는 기본 상태 객체를 키로 삼고, 모든 아일랜드가 같은 모듈을 import 하기 때문입니다. `<ClientRouter />` 아래에서는 이전 페이지에서 상태를 사용 중이던 아일랜드가 먼저 그 상태로 렌더링된 뒤, 마운트 후에 URL로부터 다시 동기화합니다.

Preact 아일랜드는 `compat: true`를 설정한 `@astrojs/preact`를 통해 같은 import를 사용합니다.

## `useUrlState` 훅

상태를 관리하고 URL 검색 파라미터와 동기화하는 커스텀 React 훅입니다.

### 매개변수

- `defaultState: object` - 기본 상태 값을 나타내는 객체입니다.
- `searchParams?: object` - 아일랜드에 prop으로 전달하는 `Object.fromEntries(Astro.url.searchParams)`입니다. 이렇게 하면 서버 렌더링이 URL과 일치하여 하이드레이션이 바로잡을 것이 없습니다. `URLSearchParams`가 아닌 일반 객체여야 합니다. 아일랜드 props는 직렬화되므로 `URLSearchParams`를 넘기면 `{}`로 도착합니다. 페이지는 온디맨드로 렌더링되어야 합니다(어댑터와 함께 `output: 'server'`를 쓰거나, 해당 페이지에 `export const prerender = false`를 선언). 프리렌더링된 페이지에는 요청이 없으므로 아일랜드는 `{}`를 받고 하이드레이션 후에 URL을 읽습니다.
- `replace?: boolean` - `setUrl`이 `replaceState`와 `pushState` 중 어떤 메서드를 사용할지 제어합니다. 기본값은 replace=true이며, `setUrl(stateObj, { replace: false })`로 재정의할 수 있습니다.

### 반환값

다음을 포함하는 객체입니다:

- `urlState: object` - 현재 상태입니다.
- `setState: Function` - URL을 업데이트하지 않고 상태를 업데이트하는 함수입니다.
- `setUrl: Function` - 상태와 URL을 모두 업데이트하는 함수입니다.
- `reset: Function` - 상태를 기본값으로 리셋하는 함수입니다.

### 예제

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

`setState`와 `setUrl`은 이벤트 핸들러나 이펙트에서 호출하고, 렌더링 중에는 호출하지 마세요:

```typescript
// URL을 변경하지 않고 상태 업데이트
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// 상태 리셋
setState((_curr, initial) => initial);

// 상태와 URL 업데이트
setUrl({ name: 'test' }, { replace: false });

// 상태와 URL 리셋
setUrl((_curr, initial) => initial);
```

아일랜드 없이, 클라이언트 프레임워크가 없는 페이지에서는 `state-in-url/encodeState`의 `decodeState`와 `encodeState`가 프론트매터에서 같은 역할을 합니다. `Astro.url.searchParams`를 타입이 있는 객체로 디코딩하고, 링크에 쓸 다음 URL을 만듭니다.

## `setState`

URL을 수정하지 않고 상태를 업데이트합니다.

### `setState` 매개변수

- `value: Partial<T> | (curr: T, initial: T) => T` - 새 상태 값, 또는 현재 상태와 초기 상태를 받아 새 상태를 반환하는 함수입니다.

## `setUrl`

상태와 URL을 모두 업데이트합니다.

### `setUrl` 매개변수

- `value?: Partial<T> | (curr: T, initial: T) => T` - 선택적 새 상태 값, 또는 현재 상태와 초기 상태를 받아 새 상태를 반환하는 함수입니다.
- `options?: { replace?: boolean }` - `replaceState`(기본값) 또는 `pushState`입니다.

## `reset`

상태와 URL을 모두 기본값으로 리셋합니다.

### `reset` 매개변수

- `options?: { replace?: boolean }` - `replaceState`(기본값) 또는 `pushState`입니다.
