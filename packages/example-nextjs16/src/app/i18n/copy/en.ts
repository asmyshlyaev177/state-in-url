// The English source copy. Every other locale is a translation of this file,
// so the shape here is the shape they all have — see ./types.ts for what each
// key is and how the split ones reassemble.

import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url - store state in URL like in JSON, type-safe',
      description:
        'Store any user state in query parameters; imagine JSON in a browser URL, while keeping types and structure of data. For Next.js, React-router and pure JS',
    },
    reactRouter: {
      title: 'state-in-url for React Router — typed URL state, v6 and v7',
      description:
        'Store nested, typed state in the query string with React Router v6 and v7. Live demo and setup for the state-in-url useUrlState hook.',
    },
    remix: {
      title: 'state-in-url for Remix — typed URL state in Remix v2',
      description:
        'Store nested, typed state in the query string with Remix v2. Live demo and setup for the state-in-url useUrlState hook.',
    },
  },

  header: {
    titleLead: 'Typed state, living in',
    titleUrl: 'the URL',
    desc: 'is React state that writes itself to the query string. Objects, arrays and dates keep their types, every state is a shareable link, and it survives reloads — no providers, no boilerplate.',
    factsLabel: 'Library facts',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB gzipped',
      'zero dependencies',
      'TypeScript-first',
      'Next.js / react-router / Remix',
      'MIT',
    ],
  },

  tabs: {
    heading: 'Same API, three routers',
    selectLabel: 'Select framework',
  },

  demo: {
    titleLead: 'useUrlState — live with',
    hint: 'Type below — watch the URL light up',
    formTitle: 'First client component',
    statusTitle: 'Other client component',
    statusSubtitle:
      'Reads from URL — no props, no context, types and structure are preserved',
    fields: {
      name: 'Name',
      age: 'Age',
      agreeToTerms: 'Agree to terms',
      tags: 'Tags',
    },
  },

  quickStart: {
    title: 'Quick start',
    stateStep: '1. Define the state',
    componentsStep: '2. Use it in any components',
    hookStep: '3. Create a reusable hook for a slice of state',
  },

  aiSkills: {
    title: 'Using an AI coding agent?',
    pitfallsLead:
      'Agents get the same two things wrong here, every time. They type the state shape with',
    pitfallsMid: ', which the',
    pitfallsTail:
      'constraint rejects outright. And they build the default-state object inside the component, which breaks sharing silently — it is keyed by object identity, so nothing errors, the two components simply stop seeing each other.',
    shipsLead: 'So the package ships six',
    shipsMid: 'files. Your agent loads one on demand through',
    intentLinkText: 'TanStack Intent',
    shipsTail:
      ', and they are versioned with the library rather than with this page.',
    installLabel: 'Copy Intent install command',
    runLead: 'Run once in a project that already has',
    runMid: 'installed. Your agent then finds the skills in',
    runTail: '.',
    skills: {
      featureStateHook:
        'Defining state, and wrapping useUrlState in a feature-scoped hook',
      inputHandling: 'Text inputs, sliders, anything that changes fast',
      nextjsSsr: 'App Router: searchParams forwarding, Proxy for layouts',
      reactRouterRemixSetup: 'React Router v6/v7 or Remix v2 setup',
      formLibraryIntegration: 'Pairing with react-hook-form (or formik)',
      sharedStateNoUrl: 'useSharedState — sharing without touching the URL',
    },
    sourcesLead: 'The sources are',
    sourcesLinkText: 'on GitHub',
    sourcesMid: "An agent that can't load Intent skills should read",
    sourcesTail: 'instead — the same rules, condensed into one file.',
  },

  description: {
    title: 'Why state-in-url?',
    whyLead:
      'URL state libraries exist, but most are either cumbersome to set up or limited in what they can store.',
    whyMid: 'aims to be the one that just works: an API that mirrors',
    whyTail: ', with the URL as the store.',
    storeLead:
      'Store state without boilerplate, build deep links, and share data between unrelated client components — no provider needed. Structure and types are preserved end to end: a',
    dateMid: 'goes in, a',
    dateTail: 'comes out.',
    tested:
      'Built test-first, with unit and cross-browser e2e suites running on every commit.',
    suspenseTitle: 'Next.js: no Suspense boundary',
    suspenseLead: 'The hook never calls',
    suspenseAfterHook: ", so a component using it doesn't need wrapping in",
    suspenseAfterBoundary:
      "and doesn't opt its page out of prerendering — PPR and",
    suspenseAfterFlag:
      'included. It reads the URL directly and follows every later change, including a',
    suspenseTail: 'from code that knows nothing about it.',
    otherTitle: 'Not on Next.js or react-router?',
    helpersLead: 'The',
    helpersTail:
      'helpers work with any framework or plain JS — the hooks are a convenience on top.',
    ctaLead: 'Check out the',
    ctaLinkText: 'GitHub page',
    ctaTail: '— a star goes a long way.',
    uneedBadgeAlt: 'Uneed Embed Badge',
  },

  share: {
    title: 'Share it with other devs',
    dialogTitle: 'state-in-url library',
    buttons: {
      x: 'X/Twitter-share-button',
      linkedin: 'LinkedIn-share-button',
      reddit: 'Reddit-share-button',
      vk: 'VK-share-button',
      facebook: 'Facebook-share-button',
    },
  },

  footer: {
    tagline: 'typed state, living in the URL',
    updated: 'Updated',
    navLabel: 'Footer',
  },

  errors: {
    title: 'Something went wrong!',
    retry: 'Try again',
    notFoundTitle: 'Not Found',
    notFoundBody: 'Could not find requested resource',
    boundaryTitle: 'Something went wrong:',
    boundaryFallback: 'An error occurred',
  },

  chrome: {
    logoAlt: 'Logo',
    installCopyLabel: 'Copy install command',
    copied: 'Copied',
    copiedAnnouncement: 'Command copied to clipboard',
    opensInNewTab: '(opens in new tab)',
    npmLinkLabel: 'NPM link',
    urlBarLabel: 'Current URL with synced state',
    sourceCode: 'Source code',
    reloadPage: 'Reload page',
    languageLabel: 'Language',
  },
};
