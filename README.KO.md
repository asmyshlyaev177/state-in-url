[English] | 한국어 | [简体中文](./README.CN.md)


<div align="center">
  <img src="/assets/Logo_big.png?raw=true" alt="state-in-url logo"/>

  <div>IDE 자동 완성 및 TS 검증과 함께 관련 없는 React 컴포넌트 간에 상태를 쉽게 공유할 수 있습니다. 번거로움이나 보일러플레이트 없이 사용 가능합니다.</div>
</div>


<div align="center">
<hr />


[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
</div>

<div align="center">

<h4 align="center">버그를 발견하셨다면 주저하지 마시고 이슈를 열어주세요</h4>

![데모-gif](https://github.com/asmyshlyaev177/state-in-url/assets/19854148/c9802601-4d42-4362-b3e4-37ff87c3b97f)


<a href="https://state-in-url.dev" target="_blank">데모</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">DEMO2</a> |


<hr />

프로젝트를 지원하려면 ⭐️을 추가해주세요!

  <hr />

  </div>

  ## state-in-url을 사용해야 하는 이유는?

`state-in-url`은 URL 동기화와 함께 간단한 상태 관리를 제공합니다. 관련 없는 React 컴포넌트 간에 복잡한 상태를 공유하고, 상태를 URL과 동기화하며, TS 친화적이고 NextJS와 호환됩니다.


# 사용 사례

- 🙃 URL을 변경하지 않고 다른 컴포넌트 간에 상태를 공유합니다. 시그널 및 기타 상태 관리 도구의 대안으로 좋습니다.
- 🔗 전체 애플리케이션 상태가 포함된 공유 가능한 URL
- 🔄 페이지 새로고침 시 상태를 쉽게 유지
- 🧠 관련 없는 클라이언트 컴포넌트 간 데이터 동기화
- 🧮 저장되지 않은 사용자 양식을 URL에 저장

# 특징

- 🧩 **간단함**: 프로바이더, 리듀서, 보일러플레이트 또는 새로운 개념이 필요 없습니다.
- 📘 **TypeScript 지원 및 타입 안전성**: 데이터 타입과 구조를 보존하고, IDE 제안, 강력한 타입 지정 및 JSDoc 주석으로 개발자 경험을 향상시킵니다.
- ⚛️ **프레임워크 유연성**: Next.js와 React.js 애플리케이션을 위한 별도의 훅과 순수 JS를 위한 함수 제공
- ⚙ **철저한 테스트**: 단위 테스트 및 Playwright 테스트
- ⚡ **빠름**: 최소한의 리렌더링
- 🪶 **경량**: 작은 크기를 위해 의존성이 없습니다.


## 목차

- [설치](#설치)
- [Next.js용 `useUrlState`](#nextjs용-useurlstate-훅)
- [React.js용 `useSharedState`](#reactjs용-usesharedstate-훅)
- [React.js용 `useUrlEncode`](#reactjs용-useurlencode-훅)
- [순수 JS 사용을 위한 `encodeState` 및 `decodeState`](#순수-js-사용을-위한-encodestate-및-decodestate-헬퍼)
- [URL과 상태 자동 동기화](#url과-상태-자동-동기화)
- [저수준 `encode` 및 `decode` 함수](#저수준-encode-및-decode-함수)
- [모범 사례](#모범-사례)
- [주의사항](#주의사항)
- [연락 및 지원](#연락-및-지원)
- [변경 로그](#변경-로그)
- [라이선스](#라이선스)
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

`tsconfig.json`의 `compilerOptions`에서 `"moduleResolution": "Node16"` 또는 `"moduleResolution": "NodeNext"`로 설정하세요.

## Next.js용 useUrlState 훅

[문서](packages/urlstate/next/useUrlState)

`useUrlState`는 Next.js 애플리케이션을 위한 사용자 정의 React 훅으로, 클라이언트 컴포넌트 간의 통신을 쉽게 만듭니다. 복잡한 상태를 공유하고 URL 검색 매개변수와 동기화할 수 있게 해주어, 페이지 새로고침 시 상태를 유지하고 URL을 통해 애플리케이션 상태를 공유할 수 있습니다.

### 사용 예시

#### 기본

1. 상태 형태 정의

   ```typescript
   // countState.ts
   // 상태 형태는 상수에 저장해야 하며, 객체를 직접 전달하지 마세요
   export const countState: CountState = { count: 0 }

   type CountState = { count: number }
   ```

2. 임포트 및 사용

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { countState } from './countState';

function MyComponent() {
  // 서버 컴포넌트에서 searchParams 사용 시
  // 예: export default async function Home({ searchParams }: { searchParams: object }) {
  // const { state, updateState, updateUrl } = useUrlState(countState, searchParams);
  const { state, updateState, updateUrl } = useUrlState(countState);

  // 실수로 상태를 직접 변경하지 못하게 합니다. TS 필요
  // state.count = 2 // <- 오류

  return (
    <div>
      <p>카운트: {state.count}</p>

      <button onClick={() => updateUrl({ count: state.count + 1 }), { replace: true }}>
        증가 (URL 업데이트)
      </button>

        // React.useState와 동일한 API
      <button onClick={() => updateState(currState => ({...currState, count: currState.count + 1 }) )}>
        증가 (로컬만)
      </button>
      <button onClick={() => updateUrl()}>
        변경 사항을 URL에 동기화
        // 또는 동기화하지 않고 상태만 공유
      </button>

      <button onClick={() => updateUrl(state)}>
        초기화
      </button>
    </div>
  )
}
```

#### 복잡한 상태 형태 사용

```typescript
interface UserSettings {
  theme: 'light' | 'dark';
  fontSize: number;
  notifications: boolean;
}

export const userSettings: UserSettings {
  theme: 'light',
  fontSize: 16,
  notifications: true,
}
```

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userSettings } from './userSettings';

function SettingsComponent() {
  // `state`는 UserSettings 타입에서 추론됩니다!
  const { state, updateUrl } = useUrlState(userSettings);

  const toggleTheme = () => {
    updateUrl(current => ({
      ...current,
      theme: current.theme === 'light' ? 'dark' : 'light',
    }));
  };

  // 유휴 상태일 때 상태를 URL에 동기화
  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // 참조가 아닌 내용으로 상태를 비교하고 새 값에 대해서만 업데이트를 실행합니다
      updateUrl(state);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [state, updateUrl]);

  return (
    <div>
      <h2>사용자 설정</h2>
      <p>테마: {state.theme}</p>
      <p>글꼴 크기: {state.fontSize}px</p>
      <button onClick={toggleTheme}>테마 전환</button>
      {/* 다른 설정을 업데이트하기 위한 UI 요소 */}
    </div>
  );
}
...

// 다른 컴포넌트
function Component() {
  const { state } = useUrlState(defaultSettings);

  return (
    <div>
      <p>알림은 {state.notifications ? '켜짐' : '꺼짐'}</p>
    </div>
  )
}
```

#### 상태 자동 동기화

```typescript
  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // 참조가 아닌 내용으로 상태를 비교하고 새 값에 대해서만 업데이트를 실행합니다
      updateUrl(state);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [state, updateUrl]);
```

#### 서버 사이드 렌더링 사용

```typescript
export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <Form sp={searchParams} />
  )
}

// Form.tsx
'use client'
import React from 'react';
import { useUrlState } from 'state-in-url/next';
import { form } from './form';

const Form = ({ sp }: { sp: object }) => {
  const { state, updateState, updateUrl } = useUrlState(form, sp);
}
```

#### `layout` 컴포넌트에서 훅 사용

이는 까다로운 부분입니다. Next.js의 app 라우터는 서버 사이드에서 searchParams에 접근할 수 없게 합니다. 미들웨어를 사용하는 해결책이 있지만, 이는 아름답지 않고 Next.js 업데이트 후 작동이 중단될 수 있습니다.

```typescript
// 적절한 `layout.tsc`에 추가
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

#### 임의의 상태 형태 사용 (권장하지 않음)

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { state, updateUrl, updateState } = useUrlState<object>(someObj);
}
```

## React.js용 `useSharedState` 훅
React 컴포넌트 간에 상태를 공유하기 위한 훅으로, Next.js와 Vite에서 테스트되었습니다.

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[문서](packages/urlstate/useSharedState/README.md)

## React.js용 `useUrlEncode` 훅

[문서](packages/urlstate/useUrlEncode/README.md)

## `encodeState` 및 `decodeState` 헬퍼

[문서](packages/urlstate/encodeState/README.md)

## `encode` 및 `decode` 헬퍼

[문서](packages/urlstate/encoder/README.md)

## 모범 사례

- 일관성을 위해 상태 형태를 상수로 정의하세요
- 향상된 타입 안전성과 자동 완성을 위해 TypeScript를 사용하세요
- URL 매개변수에 민감한 정보를 저장하지 마세요
- 빈번한 업데이트에는 `updateState`를, URL에 변경 사항을 동기화하려면 `updateUrl`을 사용하세요
- Next.js에서 클라이언트 컴포넌트를 감싸려면 `Suspense`를 사용하세요
- 읽기 쉬운 TS 오류를 위해 이 [확장 프로그램](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)을 사용하세요

## 주의사항

1. 직렬화 가능한 값만 전달할 수 있습니다. `Function`, `BigInt` 또는 `Symbol`은 작동하지 않으며, `ArrayBuffer`와 같은 것들도 마찬가지일 것입니다.
2. Vercel 서버는 헤더(쿼리 문자열 및 기타 항목)의 크기를 **14KB**로 제한하므로 URL 상태를 ~5000 단어 이하로 유지하세요. https://vercel.com/docs/errors/URL_TOO_LONG
3. app 라우터가 있는 `next.js` 14에서 테스트되었으며, pages를 지원할 계획은 없습니다.

## 로컬에서 실행

이 저장소를 복제하고 `npm install`을 실행한 다음

```sh
npm run dev
```

[localhost:3000](http://localhost:3000)으로 이동하세요


## 연락 및 지원

- 버그 리포트, 기능 요청 또는 질문을 위해 [GitHub 이슈](https://github.com/asmyshlyaev177/state-in-url/issues)를 생성하세요

## [변경 로그](https://github.com/asmyshlyaev177/state-in-url/blob/master/CHANGELOG.md)

## 라이선스

이 프로젝트는 [MIT 라이선스](https://github.com/asmyshlyaev177/state-in-url/blob/master/LICENSE)에 따라 라이선스가 부여됩니다.

## 영감

[Vue에서 URL을 사용하여 상태 저장하기](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[URL에 상태 저장하기](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
