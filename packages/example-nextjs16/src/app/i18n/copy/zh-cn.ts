// Chinese (Simplified) (zh-CN) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=zh-CN source=en.ts source-blob=f101ed742cbc514a958e52f1dedadef9e2d7868c status=translated
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
    statusSubtitle:
      '从 URL 读取——无需 props、无需 context,类型和结构得以保留',
    fields: {
      name: '姓名',
      age: '年龄',
      agreeToTerms: '同意条款',
      tags: '标签',
    },
  },

  quickStart: {
    title: '快速开始',
    stateStep: '1. 定义 state',
    componentsStep: '2. 在任意组件中使用',
    hookStep: '3. 为某一部分 state 创建可复用的 hook',
  },

  aiSkills: {
    title: '正在使用 AI 编程代理?',
    pitfallsLead:
      '代理在这里每次都犯同样的两个错误。它们用',
    pitfallsMid: ' 来定义状态形状,而',
    pitfallsTail:
      ' 约束会直接拒绝它。而且它们在组件内部构建默认状态对象,这会悄悄破坏共享——它是按对象身份做键的,所以不会报错,两个组件只是不再能看到彼此。',
    shipsLead: '所以这个包随附六个',
    shipsMid: ' 文件。你的代理通过',
    intentLinkText: 'TanStack Intent',
    shipsTail:
      ' 按需加载其中一个,并且它们与库一起版本化,而不是与本页面一起。',
    installLabel: '复制 Intent 安装命令',
    runLead: '在已经安装',
    runMid: ' 的项目中运行一次。之后你的代理会在',
    runTail: ' 中找到这些技能。',
    skills: {
      featureStateHook:
        '定义状态,并将 useUrlState 封装在功能作用域的 hook 中',
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

  description: {
    title: '为什么选择 state-in-url?',
    whyLead:
      'URL 状态库已经存在,但大多数要么设置繁琐,要么能存储的内容有限。',
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
    suspenseAfterBoundary:
      ' 中,也不会让页面退出预渲染——PPR 和',
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
  },
};
