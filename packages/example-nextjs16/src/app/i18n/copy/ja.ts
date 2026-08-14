// Japanese (ja) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=ja source=en.ts source-blob=f101ed742cbc514a958e52f1dedadef9e2d7868c status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url - JSON のように URL に状態を保存、型安全',
      description:
        '任意のユーザー状態をクエリパラメータに保存。データの型と構造を保ったまま、ブラウザの URL に JSON があるイメージ。Next.js、React-router、ピュア JS 向け。',
    },
    reactRouter: {
      title: 'React Router 向け state-in-url — 型付き URL 状態、v6 と v7',
      description:
        'React Router v6 と v7 で、ネストした型付き状態をクエリ文字列に保存。state-in-url useUrlState フックのライブデモとセットアップ。',
    },
    remix: {
      title: 'Remix 向け state-in-url — Remix v2 の型付き URL 状態',
      description:
        'Remix v2 で、ネストした型付き状態をクエリ文字列に保存。state-in-url useUrlState フックのライブデモとセットアップ。',
    },
  },

  header: {
    titleLead: '型付きの状態、住む場所は',
    titleUrl: 'URL',
    desc: 'は、自分自身をクエリ文字列に書き込む React の状態です。オブジェクト、配列、日付は型を保ち、あらゆる状態は共有可能なリンクになり、リロード後も維持されます。プロバイダーもボイラープレートも不要。',
    factsLabel: 'ライブラリの事実',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB gzip 圧縮',
      '依存関係ゼロ',
      'TypeScript ファースト',
      'Next.js / react-router / Remix',
      'MIT',
    ],
  },

  tabs: {
    heading: '同じ API、3 つのルーター',
    selectLabel: 'フレームワークを選択',
  },

  demo: {
    titleLead: 'useUrlState — ライブで試す:',
    hint: '下に入力してください。URL が点灯するのを見てください',
    formTitle: '1 つ目のクライアントコンポーネント',
    statusTitle: 'もう一方のクライアントコンポーネント',
    statusSubtitle:
      'URL から読み取ります。props も context も不要で、型と構造は保持されます',
    fields: {
      name: '名前',
      age: '年齢',
      agreeToTerms: '利用規約に同意する',
      tags: 'タグ',
    },
  },

  quickStart: {
    title: 'クイックスタート',
    stateStep: '1. state を定義する',
    componentsStep: '2. 任意のコンポーネントで使う',
    hookStep: '3. state の一部を扱う再利用可能なフックを作る',
  },

  aiSkills: {
    title: 'AI コーディングエージェントをお使いですか?',
    pitfallsLead:
      'エージェントはここで毎回同じ 2 つのことを間違えます。状態の形を',
    pitfallsMid: ' で定義しますが、',
    pitfallsTail:
      ' 制約はそれを即座に拒否します。さらに、デフォルト状態のオブジェクトをコンポーネント内で構築すると、共有が静かに壊れます。オブジェクトの同一性でキー付けされるためエラーにはならず、2 つのコンポーネントが互いを見失うだけです。',
    shipsLead: 'このパッケージは 6 つの',
    shipsMid: ' ファイルを同梱しています。エージェントは',
    intentLinkText: 'TanStack Intent',
    shipsTail:
      ' を通じて必要に応じて 1 つを読み込みます。これらはこのページではなくライブラリと共にバージョン管理されます。',
    installLabel: 'Intent インストールコマンドをコピー',
    runLead: 'すでに',
    runMid: ' がインストール済みのプロジェクトで一度実行します。エージェントは',
    runTail: ' の中のスキルを見つけます。',
    skills: {
      featureStateHook:
        '状態の定義と、useUrlState を機能スコープのフックでラップする方法',
      inputHandling: 'テキスト入力、スライダーなど、素早く変化するもの',
      nextjsSsr: 'App Router: searchParams の転送、レイアウト用の Proxy',
      reactRouterRemixSetup: 'React Router v6/v7 または Remix v2 のセットアップ',
      formLibraryIntegration: 'react-hook-form(または formik)との組み合わせ',
      sharedStateNoUrl: 'useSharedState — URL に触れずに共有',
    },
    sourcesLead: 'ソースは',
    sourcesLinkText: 'GitHub にあります',
    sourcesMid: 'Intent スキルを読み込めないエージェントは、代わりに',
    sourcesTail: ' を読むべきです — 同じルールが 1 つのファイルに凝縮されています。',
  },

  description: {
    title: 'なぜ state-in-url なのか?',
    whyLead:
      'URL 状態ライブラリは存在しますが、多くはセットアップが面倒だったり、保存できるものが限られていたりします。',
    whyMid: ' は「ただ動く」ことを目指しています。',
    whyTail: ' を映す API で、URL をストアにします。',
    storeLead:
      'ボイラープレートなしで状態を保存し、ディープリンクを構築し、関連のないクライアントコンポーネント間でデータを共有できます。プロバイダーは不要です。構造と型は端から端まで保持されます。',
    dateMid: ' が入り、',
    dateTail: ' が出ます。',
    tested:
      'テストファーストで構築されており、ユニットテストとクロスブラウザの e2e スイートがすべてのコミットで実行されます。',
    suspenseTitle: 'Next.js: Suspense 境界は不要',
    suspenseLead: 'このフックは',
    suspenseAfterHook: ' を呼び出しません。そのため、このフックを使うコンポーネントは',
    suspenseAfterBoundary:
      ' でラップする必要がなく、ページがプリレンダリングから除外されることもありません。PPR と',
    suspenseAfterFlag:
      ' も含みます。URL を直接読み取り、その後の変更をすべて追跡します。たとえば、',
    suspenseTail: ' を、その存在を知らないコードから呼ばれた場合も追跡します。',
    otherTitle: 'Next.js や react-router を使っていませんか?',
    helpersLead: 'この',
    helpersTail:
      ' ヘルパーは、どのフレームワークでもピュア JS でも動きます。フックはその上に載せた便利レイヤーです。',
    ctaLead: 'ぜひ',
    ctaLinkText: 'GitHub ページ',
    ctaTail: ' をご覧ください。スターをいただけると励みになります。',
    uneedBadgeAlt: 'Uneed Embed Badge',
  },

  share: {
    title: '他の開発者と共有',
    dialogTitle: 'state-in-url ライブラリ',
    buttons: {
      x: 'X/Twitter 共有ボタン',
      linkedin: 'LinkedIn 共有ボタン',
      reddit: 'Reddit 共有ボタン',
      vk: 'VK 共有ボタン',
      facebook: 'Facebook 共有ボタン',
    },
  },

  footer: {
    tagline: 'URL に生きる型付き状態',
    updated: '更新日',
    navLabel: 'フッター',
  },

  errors: {
    title: '問題が発生しました!',
    retry: 'もう一度試す',
    notFoundTitle: '見つかりません',
    notFoundBody: 'リクエストされたリソースが見つかりませんでした',
    boundaryTitle: '問題が発生しました:',
    boundaryFallback: 'エラーが発生しました',
  },

  chrome: {
    logoAlt: 'ロゴ',
    installCopyLabel: 'インストールコマンドをコピー',
    copied: 'コピー済み',
    copiedAnnouncement: 'コマンドをクリップボードにコピーしました',
    opensInNewTab: '(新しいタブで開きます)',
    npmLinkLabel: 'NPM リンク',
    urlBarLabel: '同期された状態を含む現在の URL',
    sourceCode: 'ソースコード',
    reloadPage: 'ページを再読み込み',
    languageLabel: '言語',
  },
};
