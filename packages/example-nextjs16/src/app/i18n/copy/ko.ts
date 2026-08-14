// Korean (ko) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=ko source=en.ts source-blob=f101ed742cbc514a958e52f1dedadef9e2d7868c status=translated
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
      'Next.js / react-router / Remix',
      'MIT',
    ],
  },

  tabs: {
    heading: '같은 API, 세 가지 라우터',
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
    stateStep: '1. state 정의하기',
    componentsStep: '2. 어떤 컴포넌트에서든 사용하기',
    hookStep: '3. state 일부를 다루는 재사용 가능한 훅 만들기',
  },

  aiSkills: {
    title: 'AI 코딩 에이전트를 사용하시나요?',
    pitfallsLead:
      '에이전트는 여기서 매번 같은 두 가지를 틀립니다. 상태 형태를',
    pitfallsMid: ' 로 입력하는데, 이는',
    pitfallsTail:
      ' 제약이 즉시 거부합니다. 그리고 컴포넌트 안에서 기본 상태 객체를 만들어 공유를 조용히 깨뜨립니다. 객체 동일성으로 키가 지정되므로 오류가 발생하지 않고, 두 컴포넌트가 서로를 보지 못하게 될 뿐입니다.',
    shipsLead: '그래서 이 패키지는 6개의',
    shipsMid: ' 파일을 제공합니다. 에이전트는',
    intentLinkText: 'TanStack Intent',
    shipsTail:
      ' 를 통해 필요할 때 하나를 로드합니다. 이 파일들은 이 페이지가 아니라 라이브러리와 함께 버전이 관리됩니다.',
    installLabel: 'Intent 설치 명령 복사',
    runLead: '이미',
    runMid: ' 이(가) 설치된 프로젝트에서 한 번 실행하세요. 그러면 에이전트가',
    runTail: ' 에서 스킬을 찾습니다.',
    skills: {
      featureStateHook:
        '상태 정의와 useUrlState를 기능 범위 훅으로 감싸기',
      inputHandling: '텍스트 입력, 슬라이더 등 빠르게 변하는 모든 것',
      nextjsSsr: 'App Router: searchParams 전달, 레이아웃용 Proxy',
      reactRouterRemixSetup: 'React Router v6/v7 또는 Remix v2 설정',
      formLibraryIntegration: 'react-hook-form(또는 formik)과 함께 사용',
      sharedStateNoUrl: 'useSharedState — URL을 건드리지 않고 공유',
    },
    sourcesLead: '소스는',
    sourcesLinkText: 'GitHub에 있습니다',
    sourcesMid: 'Intent 스킬을 로드할 수 없는 에이전트는 대신',
    sourcesTail: ' 을 읽어야 합니다 — 같은 규칙이 한 파일에 압축되어 있습니다.',
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
    suspenseTail: ' 을(를), 그 존재조차 모르는 코드에서 호출한 경우도 따라갑니다.',
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
  },
};
