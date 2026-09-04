// Japanese (ja) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=ja source=en.ts source-blob=d77309b236f9e4529c3c3b32f7338be30db41126 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url — React と Next.js の型付き URL 状態、useState のように使える',
      description:
        'React の URL 状態管理：型付きの状態を useState のようにクエリ文字列に保存。リロード後も維持され、あらゆる状態が共有可能なリンクになり、戻るボタンも動きます。Next.js、React Router、Remix、Astro 対応。',
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
    nextjs: {
      title: 'Next.js App Router での URL 状態管理 — state-in-url',
      description:
        'Next.js の URL に型付きの状態を保存：Server Components からの searchParams、Suspense 境界なし、プリレンダリングを維持、proxy.ts 経由のレイアウト、シャローな履歴更新。state-in-url useUrlState フックのガイドと FAQ。',
    },
    vsNuqs: {
      title: 'nuqs の代替 — state-in-url vs nuqs、React の型付き URL 状態を比較',
      description:
        'state-in-url と nuqs の率直な比較：セットアップ、状態の形、ネストしたオブジェクト、日付、バンドルサイズ。TanStack Router、use-query-params、useSearchParams も併記し、ライブデモ付き。',
    },
  },

  header: {
    titleLead: 'React と Next.js の型付き URL 状態 —',
    titleUrl: 'useState のように',
    desc: 'は、自分自身をクエリ文字列に書き込む React の状態です。オブジェクト、配列、日付は型を保ち、あらゆる状態は共有可能なリンクになり、リロード後も維持され、戻るボタンも動きます。プロバイダーも Suspense 境界もボイラープレートも不要。',
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
    heading: 'Next.js、React Router、Remix、Astro の URL 状態管理 — 同じ API',
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

  faq: {
    title: 'React の URL 状態 — よくある質問',
    items: [
      {
        q: 'なぜ React の状態を URL に置くのですか？',
        a: '状態を含む URL は共有可能なリンクです。リロード、ブックマーク、送信のどれをしても、同じフィルター、タブ、ページが開きます。戻る・進むは何もしなくても動き、関連のないコンポーネントがプロバイダーなしで同じ値を読めます。state-in-url は手動でパースした文字列ではなく、型付きオブジェクト1つでこれを実現します。',
      },
      {
        q: 'どんな状態を URL に置くべきですか？',
        a: '読み手がブックマークや共有をしそうなものすべて：フィルター、ソート、ページネーション、アクティブなタブ、日付範囲、検索テキスト。非公開のもの、巨大なもの、純粋に一時的なもの — 認証トークン、ダイアログの開閉、マウス位置 — は置かないでください。簡単なテスト：この値が入った共有リンクは、まだ意味を持つでしょうか？',
      },
      {
        q: 'state-in-url で React の URL パラメータを読み書きするには？',
        a: 'デフォルト状態オブジェクトを渡して useUrlState を呼びます。urlState には型付き済みの現在の値が入り、setUrl は partial オブジェクトをクエリ文字列に書き込み、setState はフラッシュするまで URL に触れずに状態を更新します。数値、真偽値、配列、ネストしたオブジェクト、Date は、入れたときと同じ型で返ってきます。',
      },
      {
        q: 'URL 状態はページのリフレッシュ後も残りますか？',
        a: 'はい。状態はクエリ文字列そのものなので、リロード、ブックマーク、どこかに貼り付けたリンクから復元されます。Next.js App Router では、ページの searchParams prop を hook に渡すと、最初のサーバーレンダリングの時点でデフォルトではなく正しい値が表示されます。',
      },
      {
        q: 'Suspense 境界なしで Next.js の Server Components と動きますか？',
        a: 'はい。この hook は useSearchParams を決して呼ばないため、使うコンポーネントに Suspense 境界は不要で、PPR も含めページがプリレンダリングから除外されることもありません。Server Components は searchParams prop から同じ状態を読み、レイアウトは proxy.ts で設定したヘッダーからデコードできます。',
      },
      {
        q: 'react-hook-form やテーブルライブラリを URL と同期できますか？',
        a: 'はい。フォームライブラリを信頼できる唯一の情報源のままにし、urlState をデフォルト値として初期化し、change ハンドラーや effect から setUrl でその変更を反映します。同じパターンは TanStack Table の状態、フィルターパネル、値とセッターを公開するあらゆるものに使えます。',
      },
      {
        q: 'state-in-url はどのフレームワークに対応していますか？',
        a: 'Next.js 14〜16 の App Router、React Router v6 と v7、Remix v2、Astro のアイランド（React または Preact）に、それぞれ専用のエントリーポイントで対応します。素の JavaScript やその他のフレームワークでは、encodeState と decodeState ヘルパーを直接使えます。gzip 圧縮で ~2 KB、依存関係ゼロです。',
      },
    ],
  },

  nextjs: {
    crumb: 'Next.js ガイド',
    title: 'Next.js App Router での URL 状態管理',
    intro:
      'state-in-url は Next.js 14、15、16 で型付きの状態をクエリ文字列に保存します：機能ごとに useUrlState hook を1つ、アダプターもプロバイダーも Suspense 境界も不要。このページでは App Router に固有のこと — Server Components、プリレンダリング、レイアウト、履歴 — を扱います。',
    demoLead: 'ライブデモは',
    demoLinkText: 'ホームページ',
    demoTail: 'にあり、Next.js 16 で動いています。',
    serverTitle: 'サーバーページから searchParams を転送する',
    serverBody:
      'Server Component のページは searchParams を受け取ります — Next.js 15 からは Promise です。await してそのオブジェクトをクライアントコンポーネントに渡し、そこから hook に渡します。最初のサーバーレンダリングの時点でデフォルトではなく URL の値が表示されるため、ちらつきもハイドレーション警告もありません。',
    suspenseTitle: 'Suspense 境界なし、プリレンダリングは維持',
    prerenderNote:
      'プリレンダリングされたページはそれでもデフォルト値を描画します。ビルド時にはクエリ文字列がないためです — 共有リンクが最初の描画から正しくなければならない場合は、そのルートを動的にレンダリングしてください。',
    layoutTitle: 'レイアウト：ヘッダーからクエリ文字列をデコードする',
    layoutBody:
      'サーバーのレイアウトは searchParams を決して受け取りません。proxy.ts（非推奨のエイリアスとして middleware.ts も動きます）でクエリ文字列をリクエストヘッダーにコピーし、レイアウト内で decodeState と同じデフォルト状態オブジェクトを使ってデコードします — 結果はクライアントの urlState とまったく同じ型になります。',
    historyTitle: '履歴、シャロー更新、scroll',
    historyBody:
      'setUrl はデフォルトで現在の履歴エントリを置き換えるため、入力しても履歴が積み上がりません。1つ push したいときは replace: false を渡します。更新は History API を通るので、サーバーへの往復も、キー入力ごとの _rsc リクエストもありません。変更のたびにサーバーで再レンダリングさせたい場合は useHistory: false を渡すと、代わりに Next.js のルーターを通ります。scroll はデフォルトで false です。',
    inputTitle: '速い入力：今すぐ描画し、URL は後で書く',
    inputBody:
      'テキストフィールドやスライダーでは、変更のたびに setState で更新し、blur 時またはデバウンス後に引数なしで setUrl() を呼びます。コンポーネントは即座に再描画され、URL は内容ベースの差分で一度だけ書き込まれるため、繰り返し呼んでも安全です。',
    faq: {
      title: 'Next.js の URL 状態 — よくある質問',
      items: [
        {
          q: 'Next.js App Router で状態を URL に保存するには？',
          a: 'コンポーネントの外でデフォルト状態オブジェクトを定義し、state-in-url/next の useUrlState を小さな hook に包み、その hook を任意のクライアントコンポーネントで呼びます。urlState が型付きの現在の値で、setUrl が partial をクエリ文字列に書き込みます。ページの searchParams prop を渡しておけば、サーバーレンダリングの時点で正しい値になります。',
        },
        {
          q: 'useSearchParams に Suspense 境界は必要ですか？state-in-url は？',
          a: 'Next.js の useSearchParams は、静的にレンダリングされるルートを最も近い Suspense 境界までクライアントレンダリングに切り替え、境界がなければビルドが失敗します。state-in-url はそれを決して呼びません：サーバーでは searchParams を、クライアントでは window.location を読むため、境界は不要で、PPR を含むプリレンダリングが維持されます。',
        },
        {
          q: 'Server Component で URL 状態を読むには？',
          a: 'ページは searchParams prop として受け取ります — await して、クライアントの hook に転送するか、decodeState と同じデフォルトオブジェクトでサーバー側でデコードします。レイアウトは searchParams を受け取らないので、proxy.ts で設定したヘッダー経由でクエリ文字列を公開し、それをデコードしてください。',
        },
        {
          q: 'URL を更新するとサーバーでページが再レンダリングされますか？',
          a: 'デフォルトでは再レンダリングされません。setUrl は History API で更新するため、何もフェッチされず、_rsc リクエストも発生しません。サーバーに新しい状態を見せたいとき — たとえば Server Component でリストを再取得するとき — は useHistory: false を渡すと、更新が Next.js のルーターを通り、ルートが再レンダリングされます。',
        },
        {
          q: 'state-in-url は Next.js における nuqs の代替になりますか？',
          a: 'はい。どちらも型付きの状態をクエリ文字列に保存します。state-in-url はネストした値と日付を保持したままオブジェクト1つを受け取り、アダプターコンポーネントもキーごとのパーサーも不要で、useSearchParams に決して触れません。値ごとに人が読めるクエリパラメータにしたいなら nuqs のほうが向いています。完全版の比較をご覧ください。',
        },
        {
          q: 'どの Next.js バージョンに対応していますか？',
          a: 'App Router の Next.js 14、15、16 に対応し、15 で導入された非同期の searchParams と、16 の PPR 付き cacheComponents も含みます。それ以外の構成では、フレームワークに依存しない encodeState と decodeState ヘルパーを好きなルーターと組み合わせて使えます。',
        },
      ],
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
