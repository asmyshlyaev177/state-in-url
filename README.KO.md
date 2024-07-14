[English](./README.md) | 한국어 | [简体中文](./README.CN.md)

<h1 align="center">state-in-url</h1>

<div align="center">
  <img src="/assets/logo.svg?raw=true" alt="라이브러리 로고"/>

  <div>IDE 자동 완성 및 TS 검증 기능을 갖춘 관련 없는 React 컴포넌트 간 상태 공유를 쉽게 할 수 있습니다. 번거로움이나 보일러플레이트 없이 말이죠.</div>
</div>

<div align="center">
<hr />

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=main)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
</div>

<div align="center">

<h4 align="center">버그를 발견하셨다면 주저하지 마시고 이슈를 열어주세요</h4>

![데모-gif](https://github.com/asmyshlyaev177/state-in-url/assets/19854148/c9802601-4d42-4362-b3e4-37ff87c3b97f)

<a href="https://state-in-url-asmyshlyaev177.vercel.app/" target="_blank">DEMO</a> |
<a href ="https://codesandbox.io/p/github/asmyshlyaev177/state-in-url/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyk5bd9y00062v6jspcfrkx7%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyk5bd9x00022v6jyg71cr9e%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyk5bd9x00042v6jsos2y043%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyk5bd9x00052v6j5r632b12%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyk5bd9x00022v6jyg71cr9e%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyk5bd9w00012v6j83rq3bvo%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clyk5bd9x00022v6jyg71cr9e%2522%252C%2522activeTabId%2522%253A%2522clyk5bd9w00012v6j83rq3bvo%2522%257D%252C%2522clyk5bd9x00052v6j5r632b12%2522%253A%257B%2522id%2522%253A%2522clyk5bd9x00052v6j5r632b12%2522%252C%2522activeTabId%2522%253A%2522clyk5bdjx000b2v6jfc8ae464%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522SETUP_TASKS%2522%252C%2522id%2522%253A%2522clyk5bdjx000b2v6jfc8ae464%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A2222%252C%2522id%2522%253A%2522clyk5cjbo004d2v6j3u55k74g%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522ENV_SETUP%2522%252C%2522id%2522%253A%2522clyk5h8dp000r2v6j0r7kc7qq%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clyk5bd9x00042v6jsos2y043%2522%253A%257B%2522id%2522%253A%2522clyk5bd9x00042v6jsos2y043%2522%252C%2522activeTabId%2522%253A%2522clyk5cbuv001q2v6joegrxxv6%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyk5bd9x00032v6jtfhj316o%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522NEW_TERMINAL%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clyk5cbuv001q2v6joegrxxv6%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522cleanupDist%2522%252C%2522id%2522%253A%2522clyk5dgvo005i2v6jj950sxft%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target="_blank">Demo on Codesandbox</a>

<hr />

프로젝트에 ⭐️을 추가하여 지원해주세요!

<hr />

</div>

## state-in-url을 사용하는 이유?

`state-in-url`은 URL 동기화 기능을 갖춘 간단한 상태 관리 도구입니다.

# 사용 사례

- 🙃 URL을 변경하지 않고 다른 컴포넌트 간 상태 공유, 시그널 및 기타 상태 관리 도구의 좋은 대안
- 🔗 전체 애플리케이션 상태를 포함한 공유 가능한 URL
- 🔄 페이지 새로고침 시 쉬운 상태 유지
- 🧠 관련 없는 클라이언트 컴포넌트 간 데이터 동기화
- 🧮 URL에 저장되지 않은 사용자 양식 저장

# 특징

- 🧩 **간단함**: 프로바이더, 리듀서, 보일러플레이트 또는 새로운 개념 없음
- 📘 **TypeScript 지원 및 타입 안전성**: 데이터 타입과 구조 보존, IDE 제안, 강력한 타이핑 및 JSDoc 주석을 통한 개발자 경험 향상
- ⚛️ **프레임워크 유연성**: Next.js 및 React.js 애플리케이션을 위한 별도의 훅, 그리고 순수 JS를 위한 함수
- ⚙ **잘 테스트됨**: 단위 테스트 및 Playwright 테스트
- ⚡ **빠름**: 최소한의 리렌더링
- 🪶 **경량**: 더 작은 공간을 위한 제로 의존성

## 목차

- [설치](#설치)
- [Next.js용 `useUrlState`](#nextjs용-useurlstate-훅)
- [React.js용 `useUrlEncode`](#reactjs용-useurlencode-훅)
- [순수 JS 사용을 위한 `encodeState` 및 `decodeState`](#순수-js-사용을-위한-encodestate-및-decodestate-헬퍼)
- [URL과 상태 자동 동기화](#상태-자동-동기화)
- [저수준 `encode` 및 `decode` 함수](#encode-및-decode-헬퍼)
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

### 2. tsconfig.json 편집

`tsconfig.json`에서 `"moduleResolution": "Node16"` 또는 `"moduleResolution": "NodeNext"`로 설정

## Next.js용 useUrlState 훅

[문서](packages/urlstate/useUrlState/README.md)

`useUrlState`는 Next.js 애플리케이션을 위한 커스텀 React 훅으로, 클라이언트 컴포넌트 간 통신을 쉽게 만듭니다. 복잡한 상태를 공유하고 URL 검색 매개변수와 동기화할 수 있게 해주며, 페이지 새로고침 시 상태를 유지하고 URL을 통해 애플리케이션 상태를 공유하는 방법을 제공합니다.

### 사용 예시

#### 기본

1. 상태 형태 정의

   ```typescript
   // countState.ts
   // 상태 형태는 상수에 저장되어야 하며, 객체를 직접 전달하지 마세요
   export const countState: CountState = { count: 0 }

   type CountState = { count: number }
   ```

2. 임포트 및 사용

```typescript
'use client'
import { useUrlState } from 'state-in-url';

import { countState } from './countState';

function MyComponent() {
  // 서버 컴포넌트에서 searchParams 사용
  // 예: export default async function Home({ searchParams }: { searchParams: object }) {
  // const { state, updateState, updateUrl } = useUrlState(countState, searchParams);
  const { state, updateState, updateUrl } = useUrlState(countState);

  // 실수로 상태를 직접 변경하지 못하게 합니다, TS 필요
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
        변경사항을 URL에 동기화
        // 또는 동기화하지 않고 상태만 공유
      </button>

      <button onClick={() => updateUrl(state)}>
        리셋
      </button>
    </div>
  )
}
```

#### 복잡한 상태 형태 예시

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
import { useUrlState } from 'state-in-url';

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
      {/* 다른 설정을 업데이트하기 위한 UI 요소들 */}
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

#### 임의의 상태 형태 (권장하지 않음)

```typescript
'use client'
import { useUrlState } from 'state-in-url';

const someObj = {};

function SettingsComponent() {
  const { state, updateUrl, updateState } = useUrlState<object>(someObj);
}
```

## React.js용 `useUrlEncode` 훅

[문서](packages/urlstate/useUrlEncode/README.md)

## 순수 JS 사용을 위한 `encodeState` 및 `decodeState` 헬퍼

[문서](packages/urlstate/encodeState/README.md)

## `encode` 및 `decode` 헬퍼

[문서](packages/urlstate/encoder/README.md)

## 모범 사례

- 일관성을 보장하기 위해 상태 형태를 상수로 정의하세요
- 향상된 타입 안전성과 자동 완성을 위해 TypeScript를 사용하세요
- URL 매개변수에 민감한 정보를 저장하지 마세요
- 빈번한 업데이트에는 `updateState`를 사용하고, 변경 사항을 URL에 동기화하려면 `updateUrl`을 사용하세요
- 읽기 쉬운 TS 오류를 위해 이 [확장 프로그램](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)을 사용하세요

## 주의사항

1. 직렬화 가능한 값만 전달할 수 있습니다. `Function`, `BigInt` 또는 `Symbol`은 작동하지 않으며, `ArrayBuffer`와 같은 것들도 마찬가지일 것입니다.
2. Vercel 서버는 헤더 크기(쿼리 문자열 및 기타 내용)를 **14KB**로 제한하므로 URL 상태를 약 5000단어 이하로 유지하세요. https://vercel.com/docs/errors/URL_TOO_LONG

## 로컬에서 실행

이 저장소를 복제하고, `npm install`을 실행한 다음

```sh
npm run dev
```

[localhost:3000](http://localhost:3000)으로 이동하세요

## 연락 및 지원

- 버그 보고, 기능 요청 또는 질문을 위해 [GitHub 이슈](https://github.com/asmyshlyaev177/state-in-url/issues)를 생성하세요

## [변경 로그](https://github.com/asmyshlyaev177/state-in-url/blob/main/CHANGELOG.md)

## 라이선스

이 프로젝트는 [MIT 라이선스](https://github.com/asmyshlyaev177/state-in-url/blob/main/LICENSE)에 따라 라이선스가 부여됩니다.

## 영감

[Vue에서 URL을 사용하여 상태 저장하기](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[URL에 상태 저장하기](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
