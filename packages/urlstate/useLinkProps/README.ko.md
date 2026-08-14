<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=1f4f64a26bb4e480a8007ed2024bb5b0ae89e257 status=translated -->
<!-- i18n:end -->

# API

이 모듈은 **다른 라우트**를 가리키는 링크로 URL 상태를 함께 넘기기 위한 React 훅을 제공합니다.

## `useLinkProps` 훅

`<a>` 나 프레임워크의 `<Link>` 에 펼쳐 넣을 `{ href, onClick }` 을 만들어 주는 함수를 반환합니다.

마크업에는 전달한 `href` 가 그대로 남으므로 크롤러, 프리페치, `hreflang` 은 정규 URL 을 보게 됩니다. 수정 키 없는 왼쪽 클릭은 현재 상태를 쿼리 문자열로 인코딩해 그 라우트로 이동합니다. 수정 키를 누른 클릭(⌘, Ctrl, Shift, Alt, 가운데 버튼), `target` 이 있는 링크, 외부 href 는 브라우저에 맡깁니다.

상태는 렌더링 중이 아니라 링크를 클릭하는 시점에 읽습니다. 다시 렌더링되지 않으며, 컴포넌트가 자체적으로 `useUrlState` 를 쓸 필요도 없습니다.

### 매개변수

- `shape: T` - 기본 상태. `useUrlState` 에 넘기는 것과 동일한 모듈 스코프 객체입니다.
- `navigate: (url: string) => void` - 사용 중인 프레임워크의 내비게이션. 예를 들어 `useRouter().push`(Next.js) 또는 `useNavigate()`(React Router, Remix).

### 반환값

`(href: string) => { href: string, onClick: (event) => void }`

### 예제

```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

// 모듈 스코프. 앱의 다른 곳에서 `useUrlState` 에 넘기는 것과 같은 객체
export const form = { name: '', age: 0 };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

상태가 `{ name: 'John', age: 0 }` 일 때 그 링크를 클릭하면 `/de/pricing?name='John'` 으로 이동합니다.

### 어떤 파라미터가 따라가는가

전달한 href 를 기준으로, [`setUrl`](../next/useUrlState/README.md#updateurl) 이 남겼을 것과 같습니다.

- 기본값과 같은 값은 `setUrl` 과 마찬가지로 빠집니다.
- 현재 URL 에서 `shape` 이 소유하지 않는 파라미터(`utm_source` 같은 것들)는 따라갑니다. 언어를 바꿔도 유입 정보를 잃지 않기 위해서입니다.
- `href` 자체에 적힌 파라미터가 위 둘보다 우선합니다.
- `href` 의 `#hash` 는 유지됩니다.

### 라우트를 넘나드는 링크에만 쓸 것

*같은* 라우트로 가는 링크라면 `setUrl` 이 맞는 도구입니다. 쓰기를 모아서 처리하고 이동은 하지 않습니다. `useLinkProps` 는 `setUrl` 로 표현할 수 없는 경우, 즉 경로는 다르고 상태는 같은 경우를 위한 것입니다.

> [!WARNING]
> 이를 위해 `href` 자체에 상태를 넣지 마십시오. 서버에서 렌더링하는 시점에는 상태를 아직 알 수 없으므로 마크업과 첫 클라이언트 렌더링이 어긋나고, 파라미터가 있는 모든 URL 에서 하이드레이션 불일치가 발생합니다. 클릭 핸들러는 바로 그것을 피하려고 존재합니다.
