[English](./README.md) | 한국어 | [简体中文](./README.CN.md)

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="state-in-url 로고" width="120px" />

  # State in url
</div>

<div align="center">
</div>

<div align="center">

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)]([https://github.com/semantic-release/semantic-release](https://github.com/asmyshlyaev177/state-in-url))

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/asmyshlyaev177/state-in-url/badge)](https://scorecard.dev/viewer/?uri=github.com/asmyshlyaev177/state-in-url)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9679/badge)](https://www.bestpractices.dev/projects/9679)
[![license](https://img.shields.io/github/license/asmyshlyaev177/state-in-url.svg?style=flat-square)](https://github.com/asmyshlyaev177/state-in-url/blob/master/LICENSE)

</div>

<div align="center">

<h4 align="center">버그를 발견하거나 기능 요청이 있으시면 주저하지 말고 이슈를 열어주세요</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# 데모

<a href="https://state-in-url.dev" target="_blank">데모</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">미러 링크</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">URI 크기 제한, <b>최대 12KB</b>까지 안전</a>

<hr />

프로젝트를 지원하려면 <a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a>를 추가하고 <a href="https://github.com/asmyshlyaev177" target="_blank">팔로우</a>해주세요!

[토론](https://github.com/asmyshlyaev177/state-in-url/discussions/1)에서 여러분의 피드백/의견을 공유해주시면 감사하겠습니다

유용하다면 공유해주세요.
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[바로 코드 보기!](#useurlstate)

## 왜 `state-in-url`을 사용해야 하나요?

쿼리 매개변수에 모든 사용자 상태를 저장하세요. 브라우저 URL에 JSON이 있다고 상상해보세요. 데이터의 타입과 구조를 유지하면서 모든 것을 저장할 수 있습니다. 예를 들어 숫자는 문자열이 아닌 숫자로, 날짜는 날짜로 디코딩되며, 객체와 배열도 지원됩니다.
매우 간단하고 빠르며 정적 Typescript 유효성 검사를 제공합니다. 딥 링크, 즉 URL 동기화가 쉬워집니다.

Next.js와 react-router용 `useUrlState` 훅과 그 외 JS 환경을 위한 헬퍼를 포함합니다.
최신 브라우저는 거대한 URL을 지원하고 사용자는 쿼리 문자열을 신경 쓰지 않습니다(전체 선택 후 복사/붙여넣기 워크플로우입니다).

쿼리 문자열을 원래 의도대로 상태 관리에 사용할 때입니다.
이 라이브러리는 모든 번거로운 작업을 대신 처리합니다.

이 라이브러리는 NUQS의 좋은 대안입니다.

### 사용 사례

- URL에 저장되지 않은 사용자 폼이나 페이지 필터 저장
- URL과 React 상태 동기화
- URI를 건드리지 않고 관련 없는 클라이언트 컴포넌트 간 데이터 동기화
- 애플리케이션 상태가 포함된 공유 가능한 URL (딥 링킹, URL 상태 동기화)
- 페이지 새로고침 시 상태 지속성 유지

### 특징

- 🧩 **간단함**: 프로바이더, 리듀서, 보일러플레이트 또는 새로운 개념 없음, `React.useState`와 유사한 API
- 📘 **Typescript 유효성 검사/자동완성**: 상태는 단순한 객체이며, Typescript 정의에 따라 IDE/테스트에서 자동 정적 유효성 검사
- ✨ **복잡한 데이터**: 중첩 객체, 날짜 및 배열, JSON과 동일하게 작동하지만 URL에서
- ☂ **기본값**: URL에 매개변수가 없으면 기본값 제공
- ⌨ **체계적**: 모든 가능한 값을 시작 시 정의하여 존재하지 alınandan 키를 가져오는 것을 방지
- **호환성**: 서드파티 쿼리 매개변수를 그대로 유지
- **유연성**: 동일한 페이지에서 1개 이상의 상태 객체 사용 가능, 다른 키만 사용하면 됨
- **빠름**: 최소한의 리렌더링, 큰 객체 인코딩 및 디코딩에 약 [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185) 소요
- **서버 사이드 렌더링**: 서버 컴포넌트에서 사용 가능, Next.js 14 및 15 지원
- **경량**: 의존성 없음, 라이브러리 크기 2KB 미만
- **개발자 경험**: 좋은 개발자 경험, 문서, JSDoc 주석 및 예제
- **프레임워크 유연성**: `Next.js` 및 `react-router`용 훅, 다른 프레임워크나 순수 JS와 함께 사용할 수 있는 헬퍼
- **충분한 테스트**: [Chrome/Firefox/Safari용 단위 테스트 및 Playwright 테스트](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)
- **자유로운 라이선스**: MIT

## 목차

- [State in url](#state-in-url)
- [데모](#데모)
  - [왜 `state-in-url`을 사용해야 하나요?](#왜-state-in-url을-사용해야-하나요)
    - [사용 사례](#사용-사례)
    - [특징](#특징)
  - [목차](#목차)
  - [설치](#설치)
    - [1. 패키지 설치](#1-패키지-설치)
    - [2. tsconfig.json 수정](#2-tsconfigjson-수정)
  - [useUrlState](#useurlstate)
    - [Next.js용 useUrlState 훅](#nextjs용-useurlstate-훅)
      - [사용 예제](#사용-예제)
        - [기본](#기본)
        - [서버 사이드 렌더링과 함께](#서버-사이드-렌더링과-함께)
        - [`layout` 컴포넌트에서 훅 사용](#layout-컴포넌트에서-훅-사용)
        - [임의의 상태 형태 사용 (권장하지 않음)](#임의의-상태-형태-사용-권장하지-않음)
    - [Remix.js용 useUrlState 훅](#remixjs용-useurlstate-훅)
      - [예제](#예제)
    - [React-Router용 useUrlState 훅](#react-router용-useurlstate-훅)
      - [예제](#예제-1)
  - [레시피](#레시피)
        - [상태의 일부를 편리하게 다루기 위한 커스텀 훅](#상태의-일부를-편리하게-다루기-위한-커스텀-훅)
        - [복잡한 상태 구조 사용](#복잡한-상태-구조-사용)
        - [상태만 업데이트하고 URL에 수동으로 동기화](#상태만-업데이트하고-url에-수동으로-동기화)
  - [기타 훅과 헬퍼](#기타-훅과-헬퍼)
    - [다른 라우터용 `useUrlStateBase` 훅](#다른-라우터용-useurlstatebase-훅)
    - [React.js용 `useSharedState` 훅](#reactjs용-usesharedstate-훅)
    - [React.js용 `useUrlEncode` 훅](#reactjs용-useurlencode-훅)
    - [`encodeState` 및 `decodeState` 헬퍼](#encodestate-및-decodestate-헬퍼)
    - [`encode` 및 `decode` 헬퍼](#encode-및-decode-헬퍼)
  - [모범 사례](#모범-사례)
  - [주의사항](#주의사항)
  - [기타](#기타)
    - [기여 및/또는 로컬 실행](#기여-및또는-로컬-실행)
  - [로드맵](#로드맵)
  - [문의 및 지원](#문의-및-지원)
  - [변경 로그](#변경-로그)
  - [언급](#언급)
  - [라이선스](#라이선스)
  - [개인 웹사이트](#개인-웹사이트)
  - [영감](#영감)

## 설치

### 1. 패키지 설치

```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```

### 2. tsconfig.json 수정

`tsconfig.json`의 `compilerOptions`에서 `"moduleResolution": "Bundler"`, 또는 `"moduleResolution": "Node16"`, 또는 `"moduleResolution": "NodeNext"`로 설정하세요.
`"module": "ES2022"` 또는 `"module": "ESNext"` 설정이 필요할 수 있습니다.

## useUrlState

초기 상태를 매개변수로 받아 상태 객체, URL 업데이트 콜백, 상태만 업데이트하는 콜백을 반환하는 메인 훅입니다.
동일한 `state` 객체를 사용하는 모든 컴포넌트는 자동으로 동기화됩니다.

### Next.js용 useUrlState 훅

[전체 API 문서](packages/urlstate/next/useUrlState)

[React-Router 예제](#react-router용-useurlstate-훅)

#### 사용 예제

##### 기본

1. 기본값과 함께 상태 형태 정의

 ```typescript
 // userState.ts
 // 기본값과 다른 값을 가진 매개변수만 URL에 포함됩니다.
 export const userState: UserState = { name: '', age: 0 }

 // `Interface`가 아닌 `Type`을 사용하세요!
 type UserState = { name: string, age: number }
 ```

2. 가져와서 사용

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // `replace` 인자를 전달할 수 있으며, `setUrl`이 `router.push`를 사용할지 `router.replace`를 사용할지 제어합니다. 기본값 replace=true
  // 서버 컴포넌트에서 `searchParams`를 전달할 수 있으며, 서버 컴포넌트에서 데이터를 가져와야 하는 경우 `useHistory: false`를 전달하세요
  const { urlState, setUrl, setState } = useUrlState(userState);

  return (
    <div>
      // urlState.name은 URL이 비어있으면 `userState`의 기본값을 반환합니다
      <input value={urlState.name}
        // React.useState와 동일한 API, 예: setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // 상태를 즉시 업데이트하되 필요에 따라 URL에 동기화
        onBlur={() => setUrl()}
      />

      <button onClick={() => setUrl((_, initial) => initial)}>
        초기화
      </button>

    </div>
  )
}
```

##### 서버 사이드 렌더링과 함께

<details>
  <Summary>예제</Summary>

```typescript
export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <Form searchParams={searchParams} />
  )
}

// Form.tsx
'use client'
import React from 'react';
import { useUrlState } from 'state-in-url/next';
import { form } from './form';

const Form = ({ searchParams }: { searchParams: object }) => {
  const { urlState, setState, setUrl } = useUrlState(form, { searchParams });
}
```

</details>

##### `layout` 컴포넌트에서 훅 사용

<details>
  <Summary>예제</Summary>
  이 부분은 까다로운데, app router를 사용하는 nextjs는 서버 측에서 searchParams에 접근할 수 없기 때문입니다. 미들웨어를 사용하는 해결 방법이 있지만 예쁘지 않고 nextjs 업데이트 후 작동하지 않을 수 있습니다.

```typescript
// 적절한 `layout.tsx`에 추가
export const runtime = 'edge';

// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.url?.includes('_next') ? null : request.url;
  const sp = url?.split?.('?')?.[1] || '';

  const response = NextResponse.next();

  if (url !== null) {
    response.headers.set('searchParams', sp);
  }

  return response;
}

// 대상 레이아웃 컴포넌트
import { headers } from 'next/headers';
import { decodeState } from 'state-in-url/encodeState';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sp = headers().get('searchParams') || '';

  return (
    <div>
      <Comp1 searchParams={decodeState(sp, stateShape)} />
      {children}
    </div>
  );
}
```

</details>

##### 임의의 상태 형태 사용 (권장하지 않음)

<details>
  <Summary>예제</Summary>

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { urlState, setUrl, setState } = useUrlState<object>(someObj);
}
```

</details>

### Remix.js용 useUrlState 훅

API는 Next.js 버전과 동일하지만, [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) 타입의 옵션을 전달할 수 있습니다.

[API 문서](packages/urlstate/remix/useUrlState)

#### 예제

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
```

```typescript
import { useUrlState } from 'state-in-url/remix';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setState } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="태그">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // 상태를 즉시 업데이트하되 필요에 따라 URL에 동기화
        onBlur={() => setUrl()}
      />
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[예제 코드](packages/example-remix2/app/routes/Form-for-test.tsx)

### React-Router용 useUrlState 훅

API는 Next.js 버전과 동일하지만, [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) 타입의 옵션을 전달할 수 있습니다.

[API 문서](packages/urlstate/react-router/useUrlState)

#### 예제

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
```

```typescript
import { useUrlState } from 'state-in-url/react-router';
// react-router v6의 경우
// import { useUrlState } from 'state-in-url/react-router6';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setState } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="태그">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // 상태를 즉시 업데이트하되 필요에 따라 URL에 동기화
        onBlur={() => setUrl()}
      />
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[예제 코드](packages/example-react-router6/src/Form-for-test.tsx)

## 레시피
##### 상태의 일부를 편리하게 다루기 위한 커스텀 훅
<details>
  <Summary>예제</Summary>

  ```typescript
'use client';

import React from 'react';
import { useUrlState } from 'state-in-url/next';

const form: Form = {
    name: '',
    age: undefined,
    agree_to_terms: false,
    tags: [],
};

type Form = {
    name: string;
    age?: number;
    agree_to_terms: boolean;
    tags: {id: string; value: {text: string; time: Date } }[];
};

export const useFormState = ({ searchParams }: { searchParams?: object }) => {
    const { urlState, setUrl: setUrlBase, reset } = useUrlState(form, {
      searchParams,
    });

    // 첫 번째 네비게이션은 새로운 히스토리 항목을 추가합니다
    // 이후의 모든 것은 해당 항목을 교체합니다
    // 이렇게 하면 2개의 항목만 있는 히스토리를 갖게 됩니다 - ['/url', '/url?key=param']

    const replace = React.useRef(false);
    const setUrl = React.useCallback((
        state: Parameters<typeof setUrlBase>[0],
        opts?: Parameters<typeof setUrlBase>[1]
      ) => {
        setUrlBase(state, { replace: replace.current, ...opts });
        replace.current = true;
    }, [setUrlBase]);

    return { urlState, setUrl, resetUrl: reset };
};
  ```
</details>

<hr />

##### 복잡한 상태 구조 사용

<details>
  <Summary>예제</Summary>

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
```

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { form } from './form';

function TagsComponent() {
  // `urlState`는 Form 타입에서 추론됩니다!
  const { urlState, setUrl } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="태그">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[데모 페이지 예제 코드](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Form.tsx)
</details>

##### 상태만 업데이트하고 URL에 수동으로 동기화

<details>
  <Summary>예제</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // 참조가 아닌 내용으로 상태를 비교하고 새 값에 대해서만 업데이트 실행
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

`onBlur`에서 상태를 동기화하는 것이 실제 사용과 더 일치합니다.

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

## 기타 훅과 헬퍼

### 다른 라우터용 `useUrlStateBase` 훅

다른 라우터(예: react-router 또는 tanstack router)와 함께 자체 `useUrlState` 훅을 만들기 위한 훅입니다.

[API 문서](packages/urlstate/useUrlStateBase)

### React.js용 `useSharedState` 훅

모든 React 컴포넌트 간에 상태를 공유하는 훅으로, Next.js 및 Vite에서 테스트되었습니다.

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[API 문서](packages/urlstate/useSharedState/README.md)

### React.js용 `useUrlEncode` 훅

[API 문서](packages/urlstate/useUrlEncode/README.md)

### `encodeState` 및 `decodeState` 헬퍼

[API 문서](packages/urlstate/encodeState/README.md)

### `encode` 및 `decode` 헬퍼

[API 문서](packages/urlstate/encoder/README.md)

## 모범 사례

- 상태 형태를 상수로 정의하세요
- 향상된 타입 안전성과 자동완성을 위해 TypeScript를 사용하세요
- URL 매개변수에 민감한 정보(SSN, API 키 등)를 저장하지 마세요
- 읽기 쉬운 TS 오류를 위해 이 [확장 프로그램](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)을 사용하세요

상태의 일부에 대한 상태 훅을 만들고 애플리케이션 전체에서 재사용할 수 있습니다. 예를 들어:
```Typescript
type UserState = {
  name: string;
  age: number;
  other: { id: string, value: number }[]
};
const userState = {
  name: '',
  age: 0,
  other: [],
};

export const useUserState = () => {
  const { urlState, setUrl, reset } = useUrlState(userState);

  // 기타 로직

  // 다른 페이지로 이동할 때 쿼리 매개변수 초기화
  React.useEffect(() => {
    return reset
  }, [])

  return { userState: urlState, setUserState: setUrl };;
}
```

## 주의사항

1. 직렬화 가능한 값만 전달할 수 있습니다. `Function`, `BigInt` 또는 `Symbol`은 작동하지 않으며, `ArrayBuffer`와 같은 것도 마찬가지일 것입니다. JSON으로 직렬화할 수 있는 모든 것은 작동합니다.
2. Vercel 서버는 헤더(쿼리 문자열 및 기타 항목) 크기를 **14KB**로 제한하므로 URL 상태를 약 5000단어 미만으로 유지하세요. <https://vercel.com/docs/errors/URL_TOO_LONG>
3. app router를 사용하는 `next.js` 14/15로 테스트되었으며, pages를 지원할 계획은 없습니다.

## 기타

### 기여 및/또는 로컬 실행

[기여 문서](CONTRIBUTING.md)를 참조하세요

## 로드맵

- [x] `Next.js`용 훅
- [x] `react-router`용 훅
- [x] `remix`용 훅
- [ ] `svelte`용 훅
- [ ] `astro`용 훅
- [ ] 해시에 상태를 저장하는 훅?

## 문의 및 지원

- 버그 보고, 기능 요청 또는 질문을 위해 [GitHub 이슈](https://github.com/asmyshlyaev177/state-in-url/issues)를 생성하세요

## [변경 로그](CHANGELOG.md)

## 언급

 - [This Week in React 209](https://thisweekinreact.com/newsletter/209)
 - [JavaScript Weekly](https://javascriptweekly.com/issues/741)
 - [This Week in React 240](https://thisweekinreact.com/newsletter/240)

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)에 따라 라이선스가 부여됩니다.

## 개인 웹사이트

[포트폴리오 사이트](https://asmyshlyaev177.dev)

## 영감

[NUQS](https://github.com/47ng/nuqs)

[Vue에서 URL을 사용하여 상태 저장](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[URL에 상태 저장하기](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
