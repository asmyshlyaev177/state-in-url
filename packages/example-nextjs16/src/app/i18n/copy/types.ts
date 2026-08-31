/**
 * Every user-facing string on the demo site, in one typed shape.
 *
 * The point of this file is that a translator — human or model — can produce a
 * sibling of `en.ts`, get a compile error for anything it forgot, and never
 * have to open a `.tsx` to find a sentence. So:
 *
 * - values are plain strings or readonly arrays of strings, never JSX;
 * - anything that is *not* prose stays in the markup: URLs, npm/npx commands,
 *   CSS classes, `data-testid`s, the JSON-LD, the tab URLs, identifiers shown
 *   as code (`useUrlState`, `Date`, `SKILL.md`, the skill names) and the
 *   displayed code samples;
 * - a sentence that wraps an inline `<Mono>` / `<Word>` / `<Link>` /
 *   `<strong>` is split into adjacent keys. The tag stays in the component and
 *   the fragments sit either side; every such key carries a JSDoc line showing
 *   how the sentence reassembles, with `⟦…⟧` marking what the markup supplies.
 */

/** Title and description for one route's `<head>`. */
export interface PageMeta {
  title: string;
  description: string;
}

export interface MetaCopy {
  /** `/` — also the site-wide default in seoStuff.ts. */
  home: PageMeta;
  /** `/react-router` */
  reactRouter: PageMeta;
  /** `/remix` */
  remix: PageMeta;
  /** `/vs/nuqs` */
  vsNuqs: PageMeta;
}

/** The page header in `(en)/template.tsx`. */
export interface HeaderCopy {
  /** `{titleLead} ⟦the URL, styled⟧` — see `titleUrl`. */
  titleLead: string;
  /** The tail of the h1, rendered in the accent colour. */
  titleUrl: string;
  /** `⟦<strong>useUrlState</strong>⟧ {desc}` */
  desc: string;
  /** `aria-label` on the facts list. */
  factsLabel: string;
  /** The one-line facts under the description, in render order. */
  facts: readonly string[];
}

/** The framework switcher: `TabsBlock.tsx` and `components/Tabs.tsx`. */
export interface TabsCopy {
  /** Heading above the tabs. */
  heading: string;
  /** `sr-only` label for the mobile `<select>`. */
  selectLabel: string;
}

/** Field labels in the live form. */
export interface DemoFieldsCopy {
  name: string;
  age: string;
  agreeToTerms: string;
  tags: string;
}

/** The interactive demo: `DemoPart.tsx`, `Form.tsx`, `Status.tsx`. */
export interface DemoCopy {
  /** `{titleLead} ⟦<Word>next.js | react-router | remix.js</Word>⟧` */
  titleLead: string;
  /** `{hint} ⟦↓⟧` — the arrow is decorative and stays in the markup. */
  hint: string;
  /** Heading of the left-hand card. */
  formTitle: string;
  /** Heading of the right-hand card. */
  statusTitle: string;
  /** Sub-heading of the right-hand card. */
  statusSubtitle: string;
  fields: DemoFieldsCopy;
}

/**
 * Step headings above the code samples. The samples stay in English.
 *
 * One `hookStep` for all three pages; they used to word the same step two ways.
 */
export interface QuickStartCopy {
  title: string;
  stateStep: string;
  /** Step 2 — wrapping the state in the reusable feature hook. */
  hookStep: string;
  /** Step 3 — components consuming that hook. */
  componentsStep: string;
  /** Step 4 — the extended hook recipe. */
  advancedStep: string;
}

/**
 * The "when to load it" line for each published SKILL.md.
 *
 * The skill *names* (`feature-state-hook`, …) are identifiers and live in
 * `components/AiSkills.tsx`; these keys are keyed by them.
 */
export interface AiSkillsTableCopy {
  featureStateHook: string;
  inputHandling: string;
  nextjsSsr: string;
  reactRouterRemixSetup: string;
  formLibraryIntegration: string;
  sharedStateNoUrl: string;
}

/** The "Using an AI coding agent?" section. */
export interface AiSkillsCopy {
  title: string;
  /** `{pitfallsLead} ⟦interface⟧ {pitfallsMid} ⟦JSONCompatible⟧ {pitfallsTail}` */
  pitfallsLead: string;
  /** See `pitfallsLead`. */
  pitfallsMid: string;
  /** See `pitfallsLead`. */
  pitfallsTail: string;
  /** `{shipsLead} ⟦SKILL.md⟧ {shipsMid} ⟦<a>{intentLinkText}</a>⟧{shipsTail}` */
  shipsLead: string;
  /** See `shipsLead`. */
  shipsMid: string;
  /** Link text for the TanStack Intent docs; see `shipsLead`. */
  intentLinkText: string;
  /** See `shipsLead` — opens with a comma, so no space precedes it. */
  shipsTail: string;
  /** `aria-label` of the copy button on the `npx` command. */
  installLabel: string;
  /** `{runLead} ⟦state-in-url⟧ {runMid} ⟦node_modules/state-in-url/skills/⟧{runTail}` */
  runLead: string;
  /** See `runLead`. */
  runMid: string;
  /** See `runLead` — the sentence-final punctuation after the path. */
  runTail: string;
  skills: AiSkillsTableCopy;
  /** `{sourcesLead} ⟦<a>{sourcesLinkText}</a>⟧. {sourcesMid} ⟦<a>llms.txt</a>⟧ {sourcesTail}` */
  sourcesLead: string;
  /** Link text for the skills folder on GitHub; see `sourcesLead`. */
  sourcesLinkText: string;
  /** See `sourcesLead` — starts a new sentence, so the period before it is in the markup. */
  sourcesMid: string;
  /** See `sourcesLead`. */
  sourcesTail: string;
}

/** One row of the comparison table: the criterion and both cells. */
export interface ComparisonRowCopy {
  label: string;
  /** The state-in-url cell. */
  siu: string;
  /** The nuqs cell. */
  nuqs: string;
}

/** The "state-in-url vs nuqs" table: `components/Comparison.tsx`. */
export interface ComparisonCopy {
  title: string;
  /** Paragraph above the table; carries the "nuqs alternative" phrasing. */
  intro: string;
  /** Header of the criterion column. The package-name headers stay in the markup. */
  colFeature: string;
  rows: {
    setup: ComparisonRowCopy;
    stateShape: ComparisonRowCopy;
    reuse: ComparisonRowCopy;
    nested: ComparisonRowCopy;
    dates: ComparisonRowCopy;
    size: ComparisonRowCopy;
    deps: ComparisonRowCopy;
    routers: ComparisonRowCopy;
  };
  /** Fine print under the table: how the sizes were measured. */
  sizeNote: string;
  /** Honest closing paragraph — when nuqs is the better pick. */
  outro: string;
  /** Text of the link to the full `/vs/nuqs` page, shown when a link target is passed. */
  fullLink: string;
}

/** One row of the wider-alternatives table; the library name stays in markup. */
export interface AlternativeRowCopy {
  setup: string;
  nested: string;
  size: string;
  pick: string;
}

/** The "beyond nuqs" table on `/vs/nuqs`: `components/Alternatives.tsx`. */
export interface AlternativesCopy {
  title: string;
  intro: string;
  colLibrary: string;
  colSetup: string;
  colNested: string;
  colSize: string;
  colPick: string;
  rows: {
    siu: AlternativeRowCopy;
    nuqs: AlternativeRowCopy;
    tanstack: AlternativeRowCopy;
    useQueryParams: AlternativeRowCopy;
    useSearchParams: AlternativeRowCopy;
  };
}

/** The `/vs/nuqs` comparison page: `pages/VsNuqsPage.tsx`. */
export interface VsNuqsCopy {
  /** Heading above the side-by-side code samples. */
  codeTitle: string;
  /** One paragraph describing the feature both samples build. */
  codeIntro: string;
  /** The payoff paragraph under the code grid: hook reuse + preserved types. */
  codeOutro: string;
  setupTitle: string;
  setupBody: string;
  ssrTitle: string;
  /** `{ssrLead} ⟦useSearchParams⟧{ssrMid} ⟦Suspense⟧ {ssrTail}` */
  ssrLead: string;
  /** See `ssrLead` — opens with a comma. */
  ssrMid: string;
  /** See `ssrLead`. */
  ssrTail: string;
  migrateTitle: string;
  migrateBody: string;
  /** Heading of the FAQ block. */
  faqTitle: string;
  /**
   * Question/answer pairs, also emitted as FAQPage JSON-LD. Questions are
   * phrased the way people search; answers must stand alone (40-60 words).
   */
  faq: ReadonlyArray<{ q: string; a: string }>;
  alternatives: AlternativesCopy;
}

/** The "Why state-in-url?" prose section. */
export interface DescriptionCopy {
  title: string;
  /** `{whyLead} ⟦state-in-url⟧ {whyMid} ⟦React.useState⟧{whyTail}` */
  whyLead: string;
  /** See `whyLead`. */
  whyMid: string;
  /** See `whyLead` — opens with a comma. */
  whyTail: string;
  /** `{storeLead} ⟦Date⟧ {dateMid} ⟦Date⟧ {dateTail}` */
  storeLead: string;
  /** See `storeLead`. */
  dateMid: string;
  /** See `storeLead`. */
  dateTail: string;
  /** Third paragraph, no inline markup. */
  tested: string;
  suspenseTitle: string;
  /**
   * `{suspenseLead} ⟦useSearchParams⟧ {suspenseAfterHook} ⟦Suspense⟧
   * {suspenseAfterBoundary} ⟦cacheComponents⟧ {suspenseAfterFlag}
   * ⟦history.pushState⟧ {suspenseTail}`
   */
  suspenseLead: string;
  /** See `suspenseLead`. */
  suspenseAfterHook: string;
  /** See `suspenseLead`. */
  suspenseAfterBoundary: string;
  /** See `suspenseLead`. */
  suspenseAfterFlag: string;
  /** See `suspenseLead`. */
  suspenseTail: string;
  otherTitle: string;
  /** `{helpersLead} ⟦encodeState⟧ / ⟦decodeState⟧ {helpersTail}` */
  helpersLead: string;
  /** See `helpersLead`. */
  helpersTail: string;
  /** `{ctaLead} ⟦<a>{ctaLinkText}</a>⟧ {ctaTail}` */
  ctaLead: string;
  /** Link text for the repository; see `ctaLead`. */
  ctaLinkText: string;
  /** See `ctaLead`. */
  ctaTail: string;
  /** `alt` of the Uneed badge. */
  uneedBadgeAlt: string;
}

/** The social share row under the description. */
export interface ShareCopy {
  title: string;
  /**
   * Text the Twitter/Reddit share dialogs are pre-filled with. Never rendered
   * on this page — it travels to the other site.
   */
  dialogTitle: string;
  /**
   * `aria-label` per button. The matching `name` attribute stays in the
   * markup — it is a hook, not something a reader hears.
   */
  buttons: {
    x: string;
    linkedin: string;
    reddit: string;
    vk: string;
    facebook: string;
  };
}

export interface FooterCopy {
  /** The line under the wordmark. */
  tagline: string;
  /**
   * Prefix of the last-modified line. Kept as a word rather than a sentence
   * because it is interpolated into one template literal with the formatted
   * date — see the comment in `components/Footer.tsx` for why that string must
   * not be split into two text nodes.
   */
  updated: string;
  /** `aria-label` on the footer nav. */
  navLabel: string;
}

export interface ErrorsCopy {
  /** `(en)/error.tsx` */
  title: string;
  /** `(en)/error.tsx` and the demo's error boundary. */
  retry: string;
  /** `(en)/not-found.tsx` */
  notFoundTitle: string;
  /** `(en)/not-found.tsx` */
  notFoundBody: string;
  /** The demo's `<ErrorBoundary>` fallback heading. */
  boundaryTitle: string;
  /** Shown when the caught error carries no message. */
  boundaryFallback: string;
}

/**
 * Buttons, links and labels that repeat across the page rather than belonging
 * to one section.
 */
export interface ChromeCopy {
  /** `alt` of the wordmark image in the header. */
  logoAlt: string;
  /** `aria-label` of the install-command copy button. */
  installCopyLabel: string;
  /** `aria-label` of that button once it has been pressed. */
  copied: string;
  /** Live-region announcement after a successful copy. */
  copiedAnnouncement: string;
  /** `sr-only` tail of the GitHub link: "GitHub (opens in new tab)". */
  opensInNewTab: string;
  /** `aria-label` of the npm badge link. */
  npmLinkLabel: string;
  /** `aria-label` of the read-only URL bar. */
  urlBarLabel: string;
  /** The "view this file on GitHub" button under each demo card. */
  sourceCode: string;
  /** The reload button inside the demo form. */
  reloadPage: string;
  /** `aria-label` of the language switcher in the header. */
  languageLabel: string;
  /** Visible "Home" crumb in breadcrumbs. */
  home: string;
  /** `aria-label` of the logo+wordmark link to the home page. */
  homeLink: string;
  /** `aria-label` of the breadcrumb nav. */
  breadcrumbs: string;
}

export interface SiteCopy {
  meta: MetaCopy;
  header: HeaderCopy;
  tabs: TabsCopy;
  demo: DemoCopy;
  quickStart: QuickStartCopy;
  aiSkills: AiSkillsCopy;
  comparison: ComparisonCopy;
  vsNuqs: VsNuqsCopy;
  description: DescriptionCopy;
  share: ShareCopy;
  footer: FooterCopy;
  errors: ErrorsCopy;
  chrome: ChromeCopy;
}
