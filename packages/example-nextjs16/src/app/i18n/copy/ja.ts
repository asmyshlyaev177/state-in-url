// Japanese (ja) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=ja source=en.ts source-blob=7ed7b2279891828661b2d22fb37cb520b35aae17 status=translated
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
    astro: {
      title: 'Astro 向け state-in-url — アイランドでの型付き URL 状態',
      description:
        'Astro で、ネストした型付き状態をクエリ文字列に保存。React / Preact のアイランド、またはクライアントフレームワークなしのページに対応。state-in-url useUrlState フックのライブデモとセットアップ。',
    },
    vsNuqs: {
      title: 'state-in-url vs nuqs — React の型付き URL 状態を比較',
      description:
        'state-in-url と nuqs の率直な比較：セットアップ、状態の形、ネストしたオブジェクト、日付、バンドルサイズ。TanStack Router、use-query-params、useSearchParams も併記し、ライブデモ付き。',
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
      'Next.js / react-router / Remix / Astro',
      'MIT',
    ],
  },

  tabs: {
    heading: '同じ API、4 つのフレームワーク',
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
    stateStep: '1. 状態を定義',
    hookStep: '2. 再利用できる hook に包む',
    componentsStep: '3. どのコンポーネントでも使う — 状態は共有',
    advancedStep: '4. 必要になったら hook を育てる',
  },

  aiSkills: {
    title: 'AI コーディングエージェントをお使いですか?',
    pitfallsLead:
      'エージェントはここで毎回同じ 2 つのことを間違えます。状態の形を',
    pitfallsMid: ' で定義しますが、',
    pitfallsTail:
      ' 制約はそれを即座に拒否します。さらに、デフォルト状態のオブジェクトをコンポーネント内で構築すると、共有が静かに壊れます。オブジェクトの同一性でキー付けされるためエラーにはならず、2 つのコンポーネントが互いを見失うだけです。',
    shipsLead: 'このパッケージは 7 つの',
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
      reactRouterRemixSetup:
        'React Router v6/v7 または Remix v2 のセットアップ',
      astroSetup: 'Astro のアイランド（React または Preact）、またはクライアントフレームワークなしのページ',
      formLibraryIntegration: 'react-hook-form(または formik)との組み合わせ',
      sharedStateNoUrl: 'useSharedState — URL に触れずに共有',
    },
    sourcesLead: 'ソースは',
    sourcesLinkText: 'GitHub にあります',
    sourcesMid: 'Intent スキルを読み込めないエージェントは、代わりに',
    sourcesTail:
      ' を読むべきです — 同じルールが 1 つのファイルに凝縮されています。',
  },

  comparison: {
    title: 'state-in-url vs nuqs',
    intro:
      'nuqs の代替をお探しですか？どちらも型付きの状態をクエリ文字列に保存しますが、必要な設定量と、値として扱えるものが異なります。',
    colFeature: '項目',
    rows: {
      setup: {
        label: 'セットアップ',
        siu: 'Next.js、React Router v6/v7、Remix、Astro、素の JS 用ヘルパー',
        nuqs: 'アダプターコンポーネントでアプリをラップ',
      },
      stateShape: {
        label: '状態の形',
        siu: 'React.useState のような型付きオブジェクト1つ',
        nuqs: 'キーごとの値、それぞれにパーサーを宣言',
      },
      reuse: {
        label: 'コンポーネント間の再利用',
        siu: 'hook を一度包むだけ — 全コンポーネントが状態を共有、props 不要',
        nuqs: 'パーサー群を包む hook は自分で抽出',
      },
      nested: {
        label: 'ネストしたオブジェクトと配列',
        siu: '標準対応 — 構造と型を保持',
        nuqs: 'JSON パーサーに加えて自前のバリデーターが必要',
      },
      dates: {
        label: '日付',
        siu: '自動的に保持',
        nuqs: '組み込みパーサーをキーごとに宣言',
      },
      size: {
        label: 'サイズ（全体 import）',
        siu: '約 2.9 KB gzip',
        nuqs: '約 6.7 KB gzip',
      },
      deps: {
        label: 'ランタイム依存',
        siu: 'なし',
        nuqs: '1つ',
      },
      routers: {
        label: 'ルーター',
        siu: 'Next.js、React Router v6/v7、Remix、素の JS 用ヘルパー',
        nuqs: 'Next.js、React Router、Remix、TanStack Router、素の React',
      },
    },
    sizeNote:
      'サイズはライブラリ全体の import を esbuild minify + gzip で計測（2026年8月、nuqs 2.10.1 と比較）。',
    outro:
      'nuqs も優れたライブラリです。値ごとに読みやすいクエリパラメータが欲しいとき、TanStack Router を使っているときは nuqs を。型付きオブジェクトを丸ごと URL に、設定ゼロで入れたいなら state-in-url を選んでください。',
    fullLink: '完全版の比較を読む — 同じ機能を両方で実装、移行方法も',
  },

  vsNuqs: {
    codeTitle: '同じ機能を、両方で',
    codeIntro:
      'フィルターパネル：検索文字列、ページ番号、タグ一覧、日付。nuqs はキーごとにパーサーを宣言しルートにアダプターを配線し、state-in-url はオブジェクトを受け取り、再利用できる1つの hook に包みます。',
    codeOutro:
      'このカスタム hook がその機能の API のすべてです。呼び出したどのコンポーネントも同じ型付き状態を共有します — タグ一覧は配列のまま、日付は本物の Date オブジェクトで返ります。props も context も、キーごとの配線も不要です。',
    setupTitle: 'セットアップとボイラープレート',
    setupBody:
      'nuqs はアプリを包むアダプターコンポーネント経由でルーターにつながり、状態ごとにパーサーを宣言します。state-in-url はルーターごとに hook を用意 — 合うものを import し、デフォルト状態オブジェクトを渡せば完了。何も包みません。',
    ssrTitle: 'Next.js・SSR・プリレンダリング',
    ssrLead: 'App Router では、state-in-url は決して',
    ssrMid: 'を呼ばないため、使うコンポーネントに',
    ssrTail:
      '境界は不要で、ページはプリレンダリングされ続けます — PPR も含めて。サーバーコンポーネントは、そのまま転送された searchParams prop から同じ状態を読めます。',
    migrateTitle: 'nuqs からの移行',
    migrateBody:
      '移行はほぼ機械的です：1つの機能のキーを1つのデフォルト状態オブジェクトに集め、パーサー宣言を外し（型付きの値が同じ情報を運びます）、キーごとのセッターを partial を受け取る1つのセッターに置き換えます。トップレベルの各フィールドは引き続き自分のクエリパラメータに対応します。',
    faqTitle: 'よくある質問',
    faq: [
      {
        q: 'state-in-url は nuqs の良い代替ですか？',
        a: 'はい。型付きオブジェクトを丸ごと URL に、設定ゼロで入れたい場合に向きます：アダプターコンポーネントもキーごとのパーサーも不要で、ネストしたオブジェクトと日付は自動で保持されます。値ごとに読みやすいクエリパラメータが欲しい場合や TanStack Router を使っている場合は、引き続き nuqs が良い選択です。',
      },
      {
        q: 'state-in-url と nuqs はどちらが小さいですか？',
        a: '2026年8月に esbuild（minify + gzip、ライブラリ全体の import）で計測：state-in-url は約 2.9 KB・ランタイム依存ゼロ、nuqs 2.10.1 は約 6.7 KB・依存1つ。一部だけの import ならどちらも小さくなります。',
      },
      {
        q: 'state-in-url にアダプターやプロバイダーは必要ですか？',
        a: '不要です。ルーターごとに専用のエントリーポイントがあり、対応する hook を import してデフォルト状態オブジェクトを渡せば動きます。アプリを包むアダプターコンポーネントも、設定すべき context プロバイダーもありません。',
      },
      {
        q: 'nuqs から state-in-url への移行は大変ですか？',
        a: 'ほぼ機械的です：1つの機能のキーを1つのデフォルト状態オブジェクトに集め、パーサー宣言を外し、キーごとのセッターを partial を受け取る1つのセッターに置き換えます。トップレベルの各フィールドは引き続き自分のクエリパラメータに対応します。',
      },
      {
        q: 'TanStack Router の search params は？',
        a: 'TanStack Router を使っているなら、備え付けのものを使ってください：ルートごとの validateSearch で検証する JSON-first の search params です。state-in-url と nuqs が意味を持つのは、型付き search params が組み込まれていない Next.js・React Router・Remix の場合です。',
      },
    ],
    alternatives: {
      title: 'ほかの選択肢との比較',
      intro:
        'nuqs だけが代替ではありません。同じ仕事 — クエリ文字列に型付き状態を置く — はルーター組み込み機能や古参ライブラリでもでき、それぞれにトレードオフがあります。',
      colLibrary: 'ライブラリ',
      colSetup: 'セットアップ',
      colNested: 'ネストしたオブジェクトと日付',
      colSize: 'サイズ',
      colPick: '選ぶべき場面',
      rows: {
        siu: {
          setup: '不要 — hook を import',
          nested: '型ごと自動で保持',
          size: '約 2.9 KB gzip・依存ゼロ',
          pick: 'Next.js・React Router・Remix で設定ゼロの型付きオブジェクトが欲しい',
        },
        nuqs: {
          setup: 'アダプターコンポーネント、キーごとのパーサー',
          nested: 'JSON パーサーに自前のバリデーター',
          size: '約 6.7 KB gzip・依存1つ',
          pick: '値ごとに読みやすいクエリパラメータが欲しい',
        },
        tanstack: {
          setup: '各ルートに validateSearch',
          nested: 'オブジェクトと配列は JSON-first、日付は自前のシリアライズ',
          size: 'ルーターに内蔵',
          pick: 'TanStack Router を使っている — 内蔵機能を',
        },
        useQueryParams: {
          setup: 'Provider とルーターアダプター、パラメータごとの設定',
          nested: 'JSON パラメータ型経由、型は緩い',
          size: '約 4.4 KB gzip + serialize-query-params',
          pick: '既にこれで構築されたコードベース',
        },
        useSearchParams: {
          setup: '不要 — ルーターに内蔵',
          nested: '文字列のみ — パース・型・デフォルトはすべて自前',
          size: '0 KB',
          pick: 'フラットな文字列パラメータが1〜2個だけ',
        },
      },
    },
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
    suspenseAfterHook:
      ' を呼び出しません。そのため、このフックを使うコンポーネントは',
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
    home: 'ホーム',
    homeLink: 'state-in-url — ホームへ',
    breadcrumbs: 'パンくずリスト',
  },
};
