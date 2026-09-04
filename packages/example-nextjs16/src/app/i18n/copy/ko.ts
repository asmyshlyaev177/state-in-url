// Korean (ko) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=ko source=en.ts source-blob=7ed7b2279891828661b2d22fb37cb520b35aae17 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url - JSON처럼 URL에 상태 저장, 타입 안전',
      description:
        '임의의 사용자 상태를 쿼리 파라미터에 저장하세요. 데이터의 타입과 구조를 유지한 채 브라우저 URL에 JSON이 있는 셈입니다. Next.js, React-router, 순수 JS용.',
    },
    reactRouter: {
      title: 'React Router용 state-in-url — 타입이 지정된 URL 상태, v6 및 v7',
      description:
        'React Router v6 및 v7에서 중첩된 타입 상태를 쿼리 문자열에 저장하세요. state-in-url useUrlState 훅의 라이브 데모와 설정.',
    },
    remix: {
      title: 'Remix용 state-in-url — Remix v2의 타입이 지정된 URL 상태',
      description:
        'Remix v2에서 중첩된 타입 상태를 쿼리 문자열에 저장하세요. state-in-url useUrlState 훅의 라이브 데모와 설정.',
    },
    astro: {
      title: 'Astro용 state-in-url — 아일랜드의 타입이 지정된 URL 상태',
      description:
        'Astro에서 중첩된 타입 상태를 쿼리 문자열에 저장하세요. React 또는 Preact 아일랜드, 혹은 클라이언트 프레임워크가 없는 페이지에서 사용할 수 있습니다. state-in-url useUrlState 훅의 라이브 데모와 설정.',
    },
    vsNuqs: {
      title: 'state-in-url vs nuqs — React 타입 URL 상태 비교',
      description:
        'state-in-url과 nuqs의 솔직한 비교: 설정, 상태 형태, 중첩 객체, 날짜, 번들 크기 — TanStack Router, use-query-params, useSearchParams까지, 라이브 데모 포함.',
    },
  },

  header: {
    titleLead: '타입이 지정된 상태, 사는 곳은',
    titleUrl: 'URL',
    desc: '는 자신을 쿼리 문자열에 기록하는 React 상태입니다. 객체, 배열, 날짜는 타입을 유지하고, 모든 상태는 공유 가능한 링크가 되며, 새로고침 후에도 유지됩니다. 프로바이더도 보일러플레이트도 필요 없습니다.',
    factsLabel: '라이브러리 정보',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB gzip 압축',
      '의존성 없음',
      'TypeScript 우선',
      'Next.js / react-router / Remix / Astro',
      'MIT',
    ],
  },

  tabs: {
    heading: '같은 API, 네 가지 프레임워크',
    selectLabel: '프레임워크 선택',
  },

  demo: {
    titleLead: 'useUrlState — 라이브로 시연:',
    hint: '아래에 입력하세요 — URL이 빛나는 것을 보세요',
    formTitle: '첫 번째 클라이언트 컴포넌트',
    statusTitle: '다른 클라이언트 컴포넌트',
    statusSubtitle:
      'URL에서 읽습니다 — props도 context도 없이, 타입과 구조가 유지됩니다',
    fields: {
      name: '이름',
      age: '나이',
      agreeToTerms: '약관에 동의',
      tags: '태그',
    },
  },

  quickStart: {
    title: '빠른 시작',
    stateStep: '1. 상태 정의',
    hookStep: '2. 재사용 가능한 hook으로 감싸기',
    componentsStep: '3. 아무 컴포넌트에서나 사용 — 상태 공유',
    advancedStep: '4. 더 필요하면 hook 확장',
  },

  aiSkills: {
    title: 'AI 코딩 에이전트를 사용하시나요?',
    pitfallsLead: '에이전트는 여기서 매번 같은 두 가지를 틀립니다. 상태 형태를',
    pitfallsMid: ' 로 입력하는데, 이는',
    pitfallsTail:
      ' 제약이 즉시 거부합니다. 그리고 컴포넌트 안에서 기본 상태 객체를 만들어 공유를 조용히 깨뜨립니다. 객체 동일성으로 키가 지정되므로 오류가 발생하지 않고, 두 컴포넌트가 서로를 보지 못하게 될 뿐입니다.',
    shipsLead: '그래서 이 패키지는 7개의',
    shipsMid: ' 파일을 제공합니다. 에이전트는',
    intentLinkText: 'TanStack Intent',
    shipsTail:
      ' 를 통해 필요할 때 하나를 로드합니다. 이 파일들은 이 페이지가 아니라 라이브러리와 함께 버전이 관리됩니다.',
    installLabel: 'Intent 설치 명령 복사',
    runLead: '이미',
    runMid: ' 이(가) 설치된 프로젝트에서 한 번 실행하세요. 그러면 에이전트가',
    runTail: ' 에서 스킬을 찾습니다.',
    skills: {
      featureStateHook: '상태 정의와 useUrlState를 기능 범위 훅으로 감싸기',
      inputHandling: '텍스트 입력, 슬라이더 등 빠르게 변하는 모든 것',
      nextjsSsr: 'App Router: searchParams 전달, 레이아웃용 Proxy',
      reactRouterRemixSetup: 'React Router v6/v7 또는 Remix v2 설정',
      astroSetup: 'Astro 아일랜드(React 또는 Preact), 혹은 클라이언트 프레임워크가 없는 페이지',
      formLibraryIntegration: 'react-hook-form(또는 formik)과 함께 사용',
      sharedStateNoUrl: 'useSharedState — URL을 건드리지 않고 공유',
    },
    sourcesLead: '소스는',
    sourcesLinkText: 'GitHub에 있습니다',
    sourcesMid: 'Intent 스킬을 로드할 수 없는 에이전트는 대신',
    sourcesTail: ' 을 읽어야 합니다 — 같은 규칙이 한 파일에 압축되어 있습니다.',
  },

  comparison: {
    title: 'state-in-url vs nuqs',
    intro:
      'nuqs 대안을 찾고 계신가요? 둘 다 타입이 유지되는 상태를 쿼리 문자열에 저장하지만, 필요한 설정량과 값으로 담을 수 있는 것이 다릅니다.',
    colFeature: '항목',
    rows: {
      setup: {
        label: '설정',
        siu: 'Next.js, React Router v6/v7, Remix, Astro, 순수 JS 헬퍼',
        nuqs: '어댑터 컴포넌트로 앱을 감싸야 함',
      },
      stateShape: {
        label: '상태 형태',
        siu: 'React.useState 같은 타입 객체 하나',
        nuqs: '키별 값, 각 키마다 파서 선언',
      },
      reuse: {
        label: '컴포넌트 간 재사용',
        siu: 'hook을 한 번 감싸면 — 모든 컴포넌트가 상태 공유, props 불필요',
        nuqs: '파서 맵을 감싸는 hook은 직접 추출',
      },
      nested: {
        label: '중첩 객체와 배열',
        siu: '기본 지원 — 구조와 타입 유지',
        nuqs: 'JSON 파서에 자체 런타임 검증 추가 필요',
      },
      dates: {
        label: '날짜',
        siu: '자동으로 유지',
        nuqs: '내장 파서를 키마다 선언',
      },
      size: {
        label: '크기, 전체 import',
        siu: '약 2.9 KB gzip',
        nuqs: '약 6.7 KB gzip',
      },
      deps: {
        label: '런타임 의존성',
        siu: '없음',
        nuqs: '1개',
      },
      routers: {
        label: '라우터',
        siu: 'Next.js, React Router v6/v7, Remix, 순수 JS 헬퍼',
        nuqs: 'Next.js, React Router, Remix, TanStack Router, 순수 React',
      },
    },
    sizeNote:
      '크기: 라이브러리 전체 import, esbuild minify + gzip, 2026년 8월 nuqs 2.10.1 기준 측정.',
    outro:
      'nuqs도 훌륭한 라이브러리입니다. 값마다 읽기 쉬운 쿼리 파라미터를 원하거나 TanStack Router를 쓴다면 nuqs를, 타입 객체 전체를 설정 없이 URL에 넣고 싶다면 state-in-url을 선택하세요.',
    fullLink:
      '전체 비교 읽기 — 같은 기능을 두 라이브러리로 구현, 마이그레이션 방법까지',
  },

  vsNuqs: {
    codeTitle: '같은 기능, 두 가지 구현',
    codeIntro:
      '필터 패널: 검색어, 페이지 번호, 태그 목록, 날짜. nuqs는 키마다 파서를 선언하고 루트에 어댑터를 연결하며, state-in-url은 객체를 받아 재사용 가능한 hook 하나로 감쌉니다.',
    codeOutro:
      '이 커스텀 hook 하나가 그 기능의 API 전부입니다. 호출하는 모든 컴포넌트가 같은 타입 상태를 공유합니다 — 태그 목록은 배열 그대로, 날짜는 진짜 Date 객체로 돌아옵니다. props도, context도, 키별 배선도 필요 없습니다.',
    setupTitle: '설정과 보일러플레이트',
    setupBody:
      'nuqs는 앱을 감싸는 어댑터 컴포넌트로 라우터에 연결되고, 상태 조각마다 파서를 선언합니다. state-in-url은 라우터별 hook을 제공합니다 — 맞는 것을 import하고 기본 상태 객체를 넘기면 끝. 아무것도 감싸지 않습니다.',
    ssrTitle: 'Next.js, SSR, 프리렌더링',
    ssrLead: 'App Router에서 state-in-url은',
    ssrMid: '를 호출하지 않으므로, 사용하는 컴포넌트에',
    ssrTail:
      '경계가 필요 없고 페이지는 계속 프리렌더링됩니다 — PPR 포함. 서버 컴포넌트는 그대로 전달된 searchParams prop으로 같은 상태를 읽습니다.',
    migrateTitle: 'nuqs에서 마이그레이션',
    migrateBody:
      '대부분 기계적입니다: 한 기능의 키들을 하나의 기본 상태 객체로 모으고, 파서 선언을 제거하고 — 타입 있는 값이 같은 정보를 담습니다 — 키별 setter를 partial을 받는 setter 하나로 바꿉니다. 최상위 필드는 여전히 각자의 쿼리 파라미터에 대응합니다.',
    faqTitle: '자주 묻는 질문',
    faq: [
      {
        q: 'state-in-url은 좋은 nuqs 대안인가요?',
        a: '네, 타입 객체 전체를 설정 없이 URL에 넣고 싶다면요: 어댑터 컴포넌트도, 키별 파서도 없고, 중첩 객체와 날짜는 자동으로 유지됩니다. 값마다 읽기 쉬운 쿼리 파라미터를 원하거나 TanStack Router를 쓴다면 여전히 nuqs가 낫습니다.',
      },
      {
        q: 'state-in-url과 nuqs 중 무엇이 더 작나요?',
        a: '2026년 8월 esbuild(minify + gzip, 라이브러리 전체 import)로 측정: state-in-url은 약 2.9 KB에 런타임 의존성 0개, nuqs 2.10.1은 약 6.7 KB에 의존성 1개. 일부만 import하면 둘 다 줄어듭니다.',
      },
      {
        q: 'state-in-url에 어댑터나 프로바이더가 필요한가요?',
        a: '아니요. 라우터마다 전용 진입점이 있습니다 — 맞는 hook을 import하고 기본 상태 객체를 넘기면 동작합니다. 앱을 감싸는 어댑터 컴포넌트도, 설정할 context 프로바이더도 없습니다.',
      },
      {
        q: 'nuqs에서 state-in-url로 옮기기 어렵나요?',
        a: '대개 아닙니다: 한 기능의 키들을 하나의 기본 상태 객체로 모으고, 파서 선언을 제거하고, 키별 setter를 partial을 받는 setter 하나로 바꿉니다. 최상위 필드는 여전히 각자의 쿼리 파라미터에 대응합니다.',
      },
      {
        q: 'TanStack Router의 search params는요?',
        a: 'TanStack Router를 쓴다면 내장 기능을 쓰세요: 라우트마다 validateSearch로 검증하는 JSON-first search params입니다. state-in-url과 nuqs는 타입 search params가 내장되지 않은 Next.js, React Router, Remix에서 의미가 있습니다.',
      },
    ],
    alternatives: {
      title: '다른 선택지 비교',
      intro:
        'nuqs만이 대안은 아닙니다. 같은 일 — 쿼리 문자열에 타입 상태 넣기 — 은 라우터 내장 기능과 더 오래된 라이브러리로도 가능하며, 각자 트레이드오프가 있습니다.',
      colLibrary: '라이브러리',
      colSetup: '설정',
      colNested: '중첩 객체와 날짜',
      colSize: '크기',
      colPick: '이럴 때 선택',
      rows: {
        siu: {
          setup: '불필요 — hook만 import',
          nested: '타입까지 자동 유지',
          size: '약 2.9 KB gzip, 의존성 0',
          pick: 'Next.js, React Router, Remix에서 설정 없는 타입 객체를 원할 때',
        },
        nuqs: {
          setup: '어댑터 컴포넌트, 키별 파서',
          nested: 'JSON 파서에 자체 검증 추가',
          size: '약 6.7 KB gzip, 의존성 1',
          pick: '값마다 읽기 쉬운 쿼리 파라미터를 원할 때',
        },
        tanstack: {
          setup: '라우트마다 validateSearch',
          nested: '객체·배열은 JSON-first, 날짜는 직접 직렬화',
          size: '라우터에 내장',
          pick: 'TanStack Router 사용 중 — 내장 기능 사용',
        },
        useQueryParams: {
          setup: 'Provider와 라우터 어댑터, 파라미터별 설정',
          nested: 'JSON 파라미터 타입 경유, 느슨한 타입',
          size: '약 4.4 KB gzip + serialize-query-params',
          pick: '이미 이 라이브러리로 지어진 코드베이스',
        },
        useSearchParams: {
          setup: '불필요 — 라우터 내장',
          nested: '문자열만 — 파싱·타입·기본값 모두 직접',
          size: '0 KB',
          pick: '평평한 문자열 파라미터 한두 개뿐일 때',
        },
      },
    },
  },

  description: {
    title: '왜 state-in-url인가?',
    whyLead:
      'URL 상태 라이브러리는 존재하지만, 대부분은 설정이 번거롭거나 저장할 수 있는 것에 제한이 있습니다.',
    whyMid: ' 은(는) 그냥 동작하는 것을 목표로 합니다.',
    whyTail: ' 을(를) 그대로 반영한 API로, URL을 저장소로 사용합니다.',
    storeLead:
      '보일러플레이트 없이 상태를 저장하고, 딥 링크를 만들고, 서로 관련 없는 클라이언트 컴포넌트 간에 데이터를 공유하세요. 프로바이더가 필요 없습니다. 구조와 타입은 처음부터 끝까지 유지됩니다.',
    dateMid: ' 이 들어가면',
    dateTail: ' 이 나옵니다.',
    tested:
      '테스트 우선으로 구축되었으며, 유닛 테스트와 크로스 브라우저 e2e 스위트가 모든 커밋에서 실행됩니다.',
    suspenseTitle: 'Next.js: Suspense 경계 불필요',
    suspenseLead: '이 훅은',
    suspenseAfterHook: ' 을(를) 호출하지 않으므로, 이를 사용하는 컴포넌트는',
    suspenseAfterBoundary:
      ' 로 감쌀 필요가 없고, 페이지가 사전 렌더링에서 제외되지도 않습니다. PPR과',
    suspenseAfterFlag:
      ' 도 포함됩니다. URL을 직접 읽고 이후의 모든 변경을 따라갑니다. 예를 들어',
    suspenseTail:
      ' 을(를), 그 존재조차 모르는 코드에서 호출한 경우도 따라갑니다.',
    otherTitle: 'Next.js나 react-router를 사용하지 않으시나요?',
    helpersLead: '이',
    helpersTail:
      ' 헬퍼는 어떤 프레임워크나 순수 JS에서도 동작합니다. 훅은 그 위의 편의 레이어입니다.',
    ctaLead: '다음',
    ctaLinkText: 'GitHub 페이지',
    ctaTail: ' 를 확인해 보세요. 스타 하나가 큰 힘이 됩니다.',
    uneedBadgeAlt: 'Uneed Embed Badge',
  },

  share: {
    title: '다른 개발자와 공유하기',
    dialogTitle: 'state-in-url 라이브러리',
    buttons: {
      x: 'X/Twitter 공유 버튼',
      linkedin: 'LinkedIn 공유 버튼',
      reddit: 'Reddit 공유 버튼',
      vk: 'VK 공유 버튼',
      facebook: 'Facebook 공유 버튼',
    },
  },

  footer: {
    tagline: 'URL에 사는 타입이 지정된 상태',
    updated: '업데이트',
    navLabel: '푸터',
  },

  errors: {
    title: '문제가 발생했습니다!',
    retry: '다시 시도',
    notFoundTitle: '찾을 수 없음',
    notFoundBody: '요청한 리소스를 찾을 수 없습니다',
    boundaryTitle: '문제가 발생했습니다:',
    boundaryFallback: '오류가 발생했습니다',
  },

  chrome: {
    logoAlt: '로고',
    installCopyLabel: '설치 명령 복사',
    copied: '복사됨',
    copiedAnnouncement: '명령이 클립보드에 복사되었습니다',
    opensInNewTab: '(새 탭에서 열림)',
    npmLinkLabel: 'NPM 링크',
    urlBarLabel: '동기화된 상태가 담긴 현재 URL',
    sourceCode: '소스 코드',
    reloadPage: '페이지 새로고침',
    languageLabel: '언어',
    home: '홈',
    homeLink: 'state-in-url — 홈으로',
    breadcrumbs: '이동 경로',
  },
};
