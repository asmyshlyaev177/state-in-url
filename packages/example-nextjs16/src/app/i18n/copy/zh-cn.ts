// Chinese (Simplified) (zh-CN) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=zh-CN source=en.ts source-blob=0b8e15b33eef39645b3d11c606155cb4178a6817 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url - 像 JSON 一样在 URL 中存储状态,类型安全',
      description:
        '在查询参数中存储任意用户状态;想象 JSON 在浏览器 URL 中,同时保持数据的类型和结构。适用于 Next.js、React-router 和纯 JS。',
    },
    reactRouter: {
      title: '面向 React Router 的 state-in-url — 类型化 URL 状态,v6 和 v7',
      description:
        '使用 React Router v6 和 v7 在查询字符串中存储嵌套的类型化状态。state-in-url useUrlState hook 的在线演示和设置。',
    },
    remix: {
      title: '面向 Remix 的 state-in-url — Remix v2 中的类型化 URL 状态',
      description:
        '使用 Remix v2 在查询字符串中存储嵌套的类型化状态。state-in-url useUrlState hook 的在线演示和设置。',
    },
    vsNuqs: {
      title: 'state-in-url vs nuqs——React 类型化 URL 状态对比',
      description:
        '诚实对比 state-in-url 与 nuqs：配置、状态形态、嵌套对象、日期和包体积——外加 TanStack Router、use-query-params 和 useSearchParams，附可交互演示。',
    },
  },

  header: {
    titleLead: '类型化状态,生活在',
    titleUrl: 'URL 中',
    desc: '是将自身写入查询字符串的 React 状态。对象、数组和日期保持其类型,每个状态都是一个可分享的链接,并在重新加载后仍然存在——无需 provider,也无需样板代码。',
    factsLabel: '库信息',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB gzip 压缩',
      '零依赖',
      'TypeScript 优先',
      'Next.js / react-router / Remix',
      'MIT',
    ],
  },

  tabs: {
    heading: '相同的 API,三种路由器',
    selectLabel: '选择框架',
  },

  demo: {
    titleLead: 'useUrlState — 在线演示:',
    hint: '在下方输入——观察 URL 亮起来',
    formTitle: '第一个客户端组件',
    statusTitle: '另一个客户端组件',
    statusSubtitle: '从 URL 读取——无需 props、无需 context,类型和结构得以保留',
    fields: {
      name: '姓名',
      age: '年龄',
      agreeToTerms: '同意条款',
      tags: '标签',
    },
  },

  quickStart: {
    title: '快速开始',
    stateStep: '1. 定义状态',
    hookStep: '2. 包成一个可复用的 hook',
    componentsStep: '3. 在任意组件中使用——状态共享',
    advancedStep: '4. 需要更多时再扩展 hook',
  },

  aiSkills: {
    title: '正在使用 AI 编程代理?',
    pitfallsLead: '代理在这里每次都犯同样的两个错误。它们用',
    pitfallsMid: ' 来定义状态形状,而',
    pitfallsTail:
      ' 约束会直接拒绝它。而且它们在组件内部构建默认状态对象,这会悄悄破坏共享——它是按对象身份做键的,所以不会报错,两个组件只是不再能看到彼此。',
    shipsLead: '所以这个包随附六个',
    shipsMid: ' 文件。你的代理通过',
    intentLinkText: 'TanStack Intent',
    shipsTail: ' 按需加载其中一个,并且它们与库一起版本化,而不是与本页面一起。',
    installLabel: '复制 Intent 安装命令',
    runLead: '在已经安装',
    runMid: ' 的项目中运行一次。之后你的代理会在',
    runTail: ' 中找到这些技能。',
    skills: {
      featureStateHook: '定义状态,并将 useUrlState 封装在功能作用域的 hook 中',
      inputHandling: '文本输入、滑块,以及任何变化很快的东西',
      nextjsSsr: 'App Router:searchParams 转发、用于布局的 Proxy',
      reactRouterRemixSetup: 'React Router v6/v7 或 Remix v2 的设置',
      formLibraryIntegration: '与 react-hook-form(或 formik)配合使用',
      sharedStateNoUrl: 'useSharedState — 不接触 URL 的共享',
    },
    sourcesLead: '源文件在',
    sourcesLinkText: 'GitHub 上',
    sourcesMid: '无法加载 Intent 技能的代理应改读',
    sourcesTail: ' —— 相同的规则,浓缩在一个文件里。',
  },

  comparison: {
    title: 'state-in-url vs nuqs',
    intro:
      '在找 nuqs 的替代品？两者都把带类型的状态存进查询字符串；区别在于需要多少配置，以及值可以是什么。',
    colFeature: '对比项',
    rows: {
      setup: {
        label: '配置',
        siu: '无需配置——导入 hook 即可使用',
        nuqs: '需要用适配器组件包裹应用',
      },
      stateShape: {
        label: '状态形态',
        siu: '一个带类型的对象，用法类似 React.useState',
        nuqs: '按键存值，每个键都要声明解析器',
      },
      reuse: {
        label: '跨组件复用',
        siu: '把 hook 包一次——所有组件共享状态，无需 props',
        nuqs: '需要自己围绕解析器映射抽一个 hook',
      },
      nested: {
        label: '嵌套对象和数组',
        siu: '内置支持——结构和类型都保留',
        nuqs: 'JSON 解析器加自己写的运行时校验',
      },
      dates: {
        label: '日期',
        siu: '自动保留',
        nuqs: '内置解析器，需逐键声明',
      },
      size: {
        label: '体积（完整导入）',
        siu: '约 2.9 KB gzip',
        nuqs: '约 6.7 KB gzip',
      },
      deps: {
        label: '运行时依赖',
        siu: '无',
        nuqs: '1 个',
      },
      routers: {
        label: '路由器',
        siu: 'Next.js、React Router v6/v7、Remix，纯 JS 辅助函数',
        nuqs: 'Next.js、React Router、Remix、TanStack Router、纯 React',
      },
    },
    sizeNote:
      '体积说明：整库导入，esbuild minify + gzip，2026 年 8 月对照 nuqs 2.10.1 测得。',
    outro:
      'nuqs 也是一个不错的库——如果你希望每个值都是一条可读的查询参数，或正在用 TanStack Router，就选它。想把整个带类型的对象放进 URL、零配置上手，就选 state-in-url。',
    fullLink: '阅读完整对比——同一个功能在两个库里的写法，以及如何迁移',
  },

  vsNuqs: {
    codeTitle: '同一个功能，两种写法',
    codeIntro:
      '一个筛选面板：搜索文本、页码、标签列表和日期。nuqs 要为每个键声明解析器并在根部接入适配器；state-in-url 直接接收对象，并把它包成一个可复用的 hook。',
    codeOutro:
      '这个自定义 hook 就是该功能的全部 API：任何组件调用它都共享同一份带类型的状态——标签列表仍是数组，日期取回来还是真正的 Date 对象。不需要 props、context，也不用逐键接线。',
    setupTitle: '配置与样板代码',
    setupBody:
      'nuqs 通过包裹应用的适配器组件接入路由，每份状态都要声明解析器。state-in-url 为每个路由器提供一个 hook——导入对应的那个，传入默认状态对象即可。什么都不用包。',
    ssrTitle: 'Next.js、SSR 与预渲染',
    ssrLead: '在 App Router 中，state-in-url 从不调用',
    ssrMid: '，因此使用它的组件不需要',
    ssrTail:
      '边界，页面也保持可预渲染——包括 PPR。服务端组件通过原样转发的 searchParams prop 读取同一份状态。',
    migrateTitle: '从 nuqs 迁移',
    migrateBody:
      '迁移通常是机械操作：把一个功能的键收进一个默认状态对象，去掉解析器声明——普通的类型化值携带同样的信息——再把逐键 setter 换成一个接收 partial 的 setter。每个顶层字段仍对应自己的查询参数。',
    faqTitle: '常见问题',
    faq: [
      {
        q: 'state-in-url 是好的 nuqs 替代品吗？',
        a: '是的，当你想把整个类型化对象放进 URL 且零配置时：没有适配器组件，没有逐键解析器，嵌套对象和日期自动保留。若你希望每个值都是一条可读查询参数，或在用 TanStack Router，nuqs 仍是更好的选择。',
      },
      {
        q: 'state-in-url 和 nuqs 哪个更小？',
        a: '2026 年 8 月用 esbuild（minify + gzip，整库导入）测得：state-in-url 约 2.9 KB、零运行时依赖；nuqs 2.10.1 约 6.7 KB、一个依赖。按需导入两者都会更小。',
      },
      {
        q: 'state-in-url 需要适配器或 provider 吗？',
        a: '不需要。每个路由器有自己的入口——导入对应的 hook，传入默认状态对象即可工作。没有包裹应用的适配器组件，也没有要配置的 context provider。',
      },
      {
        q: '从 nuqs 迁移到 state-in-url 难吗？',
        a: '通常不难：把一个功能的键收进一个默认状态对象，去掉解析器声明，把逐键 setter 换成一个接收 partial 的 setter。每个顶层字段仍对应自己的查询参数。',
      },
      {
        q: 'TanStack Router 的 search params 呢？',
        a: '如果你在用 TanStack Router，就用它自带的：JSON-first search params，配合每个路由的 validateSearch 校验。state-in-url 和 nuqs 的价值在于 Next.js、React Router 或 Remix——这些路由器没有内置的类型化 search params。',
      },
    ],
    alternatives: {
      title: '其他选项对比',
      intro:
        'nuqs 不是唯一的替代品。同一件事——把类型化状态放进查询字符串——路由器内置能力和更老的库也能做，各有取舍。',
      colLibrary: '库',
      colSetup: '配置',
      colNested: '嵌套对象和日期',
      colSize: '体积',
      colPick: '适用场景',
      rows: {
        siu: {
          setup: '无需配置——导入 hook',
          nested: '自动保留，类型完整',
          size: '约 2.9 KB gzip，零依赖',
          pick: '在 Next.js、React Router 或 Remix 上想要零配置的类型化对象',
        },
        nuqs: {
          setup: '适配器组件，逐键解析器',
          nested: 'JSON 解析器加自己的校验',
          size: '约 6.7 KB gzip，一个依赖',
          pick: '希望每个值都是一条可读查询参数',
        },
        tanstack: {
          setup: '每个路由的 validateSearch',
          nested: '对象和数组 JSON-first；日期需自定义序列化',
          size: '内置于路由器',
          pick: '在用 TanStack Router——用自带的',
        },
        useQueryParams: {
          setup: 'Provider 加路由适配器，逐参数配置',
          nested: '通过 JSON 参数类型，类型松散',
          size: '约 4.4 KB gzip 外加 serialize-query-params',
          pick: '代码库已经建立在它之上',
        },
        useSearchParams: {
          setup: '无需配置——路由器内置',
          nested: '只有字符串——解析、类型和默认值全靠自己',
          size: '0 KB',
          pick: '只有一两个扁平字符串参数，不值得引库',
        },
      },
    },
  },

  description: {
    title: '为什么选择 state-in-url?',
    whyLead: 'URL 状态库已经存在,但大多数要么设置繁琐,要么能存储的内容有限。',
    whyMid: ' 的目标就是开箱即用:提供镜像',
    whyTail: ' 的 API,以 URL 作为存储。',
    storeLead:
      '无需样板代码即可存储状态、构建深层链接,并在不相关的客户端组件之间共享数据——无需 provider。结构和类型端到端得以保留:',
    dateMid: ' 进去,',
    dateTail: ' 出来。',
    tested:
      '以测试优先的方式构建,单元测试和跨浏览器 e2e 套件在每次提交时运行。',
    suspenseTitle: 'Next.js:无需 Suspense 边界',
    suspenseLead: '该 hook 从不调用',
    suspenseAfterHook: ',因此使用它的组件无需包裹在',
    suspenseAfterBoundary: ' 中,也不会让页面退出预渲染——PPR 和',
    suspenseAfterFlag:
      ' 也在内。它直接读取 URL 并跟踪之后的每一次变更,包括来自一段对它一无所知的代码的',
    suspenseTail: '。',
    otherTitle: '不用 Next.js 或 react-router?',
    helpersLead: '这些',
    helpersTail:
      ' 辅助函数可用于任何框架或纯 JS——hook 只是它们之上的一层便利封装。',
    ctaLead: '来看看',
    ctaLinkText: 'GitHub 页面',
    ctaTail: ' —— 一个 star 会带来很大帮助。',
    uneedBadgeAlt: 'Uneed Embed Badge',
  },

  share: {
    title: '分享给其他开发者',
    dialogTitle: 'state-in-url 库',
    buttons: {
      x: 'X/Twitter 分享按钮',
      linkedin: 'LinkedIn 分享按钮',
      reddit: 'Reddit 分享按钮',
      vk: 'VK 分享按钮',
      facebook: 'Facebook 分享按钮',
    },
  },

  footer: {
    tagline: '类型化状态,生活在 URL 中',
    updated: '更新于',
    navLabel: '页脚',
  },

  errors: {
    title: '出错了!',
    retry: '重试',
    notFoundTitle: '未找到',
    notFoundBody: '找不到所请求的资源',
    boundaryTitle: '出错了:',
    boundaryFallback: '发生了一个错误',
  },

  chrome: {
    logoAlt: '标志',
    installCopyLabel: '复制安装命令',
    copied: '已复制',
    copiedAnnouncement: '命令已复制到剪贴板',
    opensInNewTab: '(在新标签页中打开)',
    npmLinkLabel: 'NPM 链接',
    urlBarLabel: '当前带同步状态的 URL',
    sourceCode: '源代码',
    reloadPage: '重新加载页面',
    languageLabel: '语言',
    home: '首页',
    homeLink: 'state-in-url——回到首页',
    breadcrumbs: '面包屑导航',
  },
};
