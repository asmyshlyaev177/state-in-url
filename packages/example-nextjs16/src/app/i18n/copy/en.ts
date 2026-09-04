// The English source copy. Every other locale is a translation of this file,
// so the shape here is the shape they all have — see ./types.ts for what each
// key is and how the split ones reassemble.

import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url — typed URL state for React & Next.js, like useState',
      description:
        'URL state management for React: keep typed state in the query string, like useState. Survives refresh, every state is a shareable link, back button works. Next.js, React Router, Remix, Astro.',
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
    astro: {
      title: 'state-in-url for Astro — typed URL state in islands',
      description:
        'Store nested, typed state in the query string with Astro: React or Preact islands, or plain pages with no client framework. Live demo and setup for the state-in-url useUrlState hook.',
    },
    nextjs: {
      title: 'URL state management in Next.js App Router — state-in-url',
      description:
        'Keep typed state in the Next.js URL: searchParams from Server Components, no Suspense boundary, prerendering kept, layouts via proxy.ts, shallow history updates. Guide and FAQ for the state-in-url useUrlState hook.',
    },
    vsNuqs: {
      title: 'nuqs alternative — state-in-url vs nuqs, typed URL state in React compared',
      description:
        'Honest state-in-url vs nuqs comparison: setup, state shape, nested objects, dates and bundle size — plus TanStack Router, use-query-params and plain useSearchParams, with a live demo.',
    },
  },

  header: {
    titleLead: 'Typed URL state for React & Next.js —',
    titleUrl: 'like useState',
    desc: 'is React state that writes itself to the query string. Objects, arrays and dates keep their types, every state is a shareable link, it survives reloads and the back button works — no providers, no Suspense boundary, no boilerplate.',
    factsLabel: 'Library facts',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB gzipped',
      'zero dependencies',
      'TypeScript-first',
      'Next.js / react-router / Remix / Astro',
      'MIT',
    ],
  },

  tabs: {
    heading: 'URL state management for Next.js, React Router, Remix and Astro — same API',
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
    hookStep: '2. Wrap it in a reusable hook',
    componentsStep: '3. Use it in any components — they all share it',
    advancedStep: '4. Grow the hook when you need more',
  },

  aiSkills: {
    title: 'Using an AI coding agent?',
    pitfallsLead:
      'Agents get the same two things wrong here, every time. They type the state shape with',
    pitfallsMid: ', which the',
    pitfallsTail:
      'constraint rejects outright. And they build the default-state object inside the component, which breaks sharing silently — it is keyed by object identity, so nothing errors, the two components simply stop seeing each other.',
    shipsLead: 'So the package ships seven',
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
      astroSetup: 'Astro islands (React or Preact), or pages with no client framework',
      formLibraryIntegration: 'Pairing with react-hook-form (or formik)',
      sharedStateNoUrl: 'useSharedState — sharing without touching the URL',
    },
    sourcesLead: 'The sources are',
    sourcesLinkText: 'on GitHub',
    sourcesMid: "An agent that can't load Intent skills should read",
    sourcesTail: 'instead — the same rules, condensed into one file.',
  },

  comparison: {
    title: 'state-in-url vs nuqs',
    intro:
      'Searching for a nuqs alternative? Both keep typed state in the query string; they differ in how much you set up and what a value can be.',
    colFeature: 'What',
    rows: {
      setup: {
        label: 'Setup',
        siu: 'Next.js, React Router v6/v7, Remix, Astro, plain JS helpers',
        nuqs: 'Adapter component wraps the app',
      },
      stateShape: {
        label: 'State shape',
        siu: 'One typed object, like React.useState',
        nuqs: 'Per-key values, a parser declared for each',
      },
      reuse: {
        label: 'Reuse across components',
        siu: 'Wrap the hook once — every component shares the state, no props',
        nuqs: 'Extract your own hook around the parser map',
      },
      nested: {
        label: 'Nested objects and arrays',
        siu: 'Built in — structure and types preserved',
        nuqs: 'JSON parser plus your own runtime validator',
      },
      dates: {
        label: 'Dates',
        siu: 'Preserved automatically',
        nuqs: 'Built-in parser, declared per key',
      },
      size: {
        label: 'Size, full import',
        siu: '~2.9 KB gzipped',
        nuqs: '~6.7 KB gzipped',
      },
      deps: {
        label: 'Runtime dependencies',
        siu: 'None',
        nuqs: 'One',
      },
      routers: {
        label: 'Routers',
        siu: 'Next.js, React Router v6/v7, Remix, plain JS helpers',
        nuqs: 'Next.js, React Router, Remix, TanStack Router, plain React',
      },
    },
    sizeNote:
      'Sizes: whole-library import, esbuild minify + gzip, measured August 2026 against nuqs 2.10.1.',
    outro:
      'nuqs is a fine library — reach for it when you want each value as its own readable query param, or you are on TanStack Router. Reach for state-in-url when you want a whole typed object in the URL with zero setup.',
    fullLink:
      'Read the full comparison — same feature built in both, and how to migrate',
  },

  vsNuqs: {
    codeTitle: 'The same feature, in both',
    codeIntro:
      'A filter panel: a search string, a page number, a tag list and a date. nuqs declares a parser per key and wires an adapter at the root; state-in-url takes the object and wraps it in one reusable hook.',
    codeOutro:
      'That one custom hook is the whole API for the feature: every component that calls it shares the same typed state — the tag list stays an array, the date comes back a real Date object. No props, no context, no per-key wiring.',
    setupTitle: 'Setup and boilerplate',
    setupBody:
      'nuqs plugs into your router through an adapter component wrapped around the app, and each piece of state declares its parser. state-in-url ships a hook per router — import the one that matches, hand it a default-state object, done. Nothing wraps anything.',
    ssrTitle: 'Next.js, SSR and prerendering',
    ssrLead: 'On the App Router, state-in-url never calls',
    ssrMid: ', so components using it need no',
    ssrTail:
      'boundary and their pages keep prerendering — PPR included. Server components read the same state through the searchParams prop, forwarded as-is.',
    migrateTitle: 'Migrating from nuqs',
    migrateBody:
      'Most migrations are mechanical: gather one feature\u2019s keys into a single default-state object, drop the parser declarations — plain typed values carry the same information — and replace the per-key setters with one setter that takes a partial. Each top-level field still maps to its own query parameter.',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'Is state-in-url a good nuqs alternative?',
        a: 'Yes, when you want a whole typed object in the URL with zero setup: no adapter component, no per-key parsers, and nested objects and dates preserved automatically. nuqs remains the better pick when you want each value as its own readable query param, or you are on TanStack Router.',
      },
      {
        q: 'Which is smaller, state-in-url or nuqs?',
        a: 'Measured with esbuild (minify + gzip, whole-library import) in August 2026, state-in-url is ~2.9 KB with zero runtime dependencies; nuqs 2.10.1 is ~6.7 KB with one dependency. Importing a subset shrinks both.',
      },
      {
        q: 'Does state-in-url need an adapter or provider?',
        a: 'No. Each router has its own entry point — import the matching hook, pass it a default-state object, and it works. There is no adapter component to wrap the app and no context provider to configure.',
      },
      {
        q: 'How hard is it to migrate from nuqs to state-in-url?',
        a: 'Usually mechanical: gather one feature\u2019s keys into a single default-state object, drop the parser declarations, and replace the per-key setters with one setter that takes a partial. Each top-level field still maps to its own query parameter.',
      },
      {
        q: 'What about TanStack Router search params?',
        a: 'If you are on TanStack Router, use what it ships: JSON-first search params validated per route with validateSearch. state-in-url and nuqs matter when your router is Next.js, React Router or Remix, where typed search params are not built in.',
      },
    ],
    alternatives: {
      title: 'How the other options compare',
      intro:
        'nuqs is not the only alternative. The same job \u2014 typed state in the query string \u2014 is also covered by router built-ins and older libraries, each with a different trade.',
      colLibrary: 'Library',
      colSetup: 'Setup',
      colNested: 'Nested objects and dates',
      colSize: 'Size',
      colPick: 'Pick it when',
      rows: {
        siu: {
          setup: 'None \u2014 import the hook',
          nested: 'Preserved automatically, types included',
          size: '~2.9 KB gzip, zero deps',
          pick: 'You want one typed object with zero setup on Next.js, React Router or Remix',
        },
        nuqs: {
          setup: 'Adapter component, parser per key',
          nested: 'JSON parser plus your own validator',
          size: '~6.7 KB gzip, one dep',
          pick: 'You want each value as its own readable query param',
        },
        tanstack: {
          setup: 'validateSearch on each route',
          nested:
            'JSON-first for objects and arrays; dates need custom serialization',
          size: 'Built into the router',
          pick: 'You are on TanStack Router \u2014 use what it ships',
        },
        useQueryParams: {
          setup: 'Provider plus a router adapter, param config per key',
          nested: 'Via a JSON param type, loosely typed',
          size: '~4.4 KB gzip plus serialize-query-params',
          pick: 'A codebase already built on it',
        },
        useSearchParams: {
          setup: 'None \u2014 built into the router',
          nested:
            'Strings only \u2014 parsing, typing and defaults are all yours',
          size: '0 KB',
          pick: 'One or two flat string params, no library worth it',
        },
      },
    },
  },

  faq: {
    title: 'URL state in React — frequently asked questions',
    items: [
      {
        q: 'Why keep React state in the URL?',
        a: 'A URL that holds the state is a shareable link: reload, bookmark or send it and the same filters, tab or page open. Back and forward work for free, and unrelated components can read the same values without a provider. state-in-url does this with one typed object instead of hand-parsed strings.',
      },
      {
        q: 'What state belongs in the URL?',
        a: 'Anything a reader might bookmark or share: filters, sorting, pagination, the active tab, a date range, search text. Keep out what is private, huge or purely transient — auth tokens, whether a dialog is open, mouse position. A quick test: would a shared link still make sense with this value in it?',
      },
      {
        q: 'How do I read and set URL params in React with state-in-url?',
        a: 'Call useUrlState with a default-state object. urlState holds the current values, already typed; setUrl writes a partial object to the query string; setState updates the state without touching the URL until you flush it. Numbers, booleans, arrays, nested objects and Dates come back as the same types they went in.',
      },
      {
        q: 'Does URL state survive a page refresh?',
        a: 'Yes. The state is the query string, so a reload, a bookmark or a link pasted somewhere else restores it. On the Next.js App Router, pass the page\u2019s searchParams prop into the hook so the first server render already shows the right values instead of the defaults.',
      },
      {
        q: 'Does it work with Next.js Server Components, without a Suspense boundary?',
        a: 'Yes. The hook never calls useSearchParams, so a component using it needs no Suspense boundary and does not opt the page out of prerendering, PPR included. Server Components read the same state through the searchParams prop; a layout can decode it from a header set in proxy.ts.',
      },
      {
        q: 'Can I sync react-hook-form or a table library with the URL?',
        a: 'Yes. Keep the form library as the source of truth, seed it with urlState as the default values, and mirror its changes with setUrl from a change handler or an effect. The same pattern works for TanStack Table state, filter panels and anything else that exposes values and a setter.',
      },
      {
        q: 'Which frameworks does state-in-url support?',
        a: 'Next.js 14-16 App Router, React Router v6 and v7, Remix v2 and Astro islands (React or Preact), each through its own entry point. Plain JavaScript and any other framework can use the encodeState and decodeState helpers directly. It is ~2 KB gzipped with zero dependencies.',
      },
    ],
  },

  nextjs: {
    crumb: 'Next.js guide',
    title: 'URL state management in Next.js App Router',
    intro:
      'state-in-url keeps typed state in the query string on Next.js 14, 15 and 16: one useUrlState hook per feature, no adapter, no provider, no Suspense boundary. This page covers what is specific to the App Router — Server Components, prerendering, layouts and history.',
    demoLead: 'The live demo on the',
    demoLinkText: 'home page',
    demoTail: ' runs on Next.js 16.',
    serverTitle: 'Forward searchParams from the server page',
    serverBody:
      'A Server Component page receives searchParams — a Promise since Next.js 15. Await it and pass the object into the client component, which hands it to the hook. The first server render then shows the URL\u2019s values instead of the defaults, so there is no flash and no hydration warning.',
    suspenseTitle: 'No Suspense boundary, prerendering kept',
    prerenderNote:
      'A prerendered page still renders the defaults, because there is no query string at build time — render a route dynamically when a shared link must be right on first paint.',
    layoutTitle: 'Layouts: decode the query string from a header',
    layoutBody:
      'Server layouts never receive searchParams. Copy the query string into a request header in proxy.ts (middleware.ts still works as a deprecated alias) and decode it in the layout with decodeState and the same default-state object — the result is typed exactly like urlState on the client.',
    historyTitle: 'History, shallow updates and scroll',
    historyBody:
      'setUrl replaces the current history entry by default, so typing does not pile up entries; pass replace: false to push one. Updates go through the History API — no server round trip and no _rsc request per keystroke. Pass useHistory: false to go through the Next.js router instead, when the server should re-render on every change. scroll is false by default.',
    inputTitle: 'Fast inputs: render now, write the URL later',
    inputBody:
      'For text fields and sliders, update with setState on every change and call setUrl() with no arguments on blur or after a debounce. The component re-renders immediately; the URL is written once, with content-based diffing, so calling it repeatedly is safe.',
    faq: {
      title: 'Next.js URL state — frequently asked questions',
      items: [
        {
          q: 'How do I keep state in the URL in Next.js App Router?',
          a: 'Define a default-state object outside the component, wrap useUrlState from state-in-url/next in a small hook, and call that hook in any client component. urlState is the typed current value and setUrl writes a partial into the query string. Pass the page\u2019s searchParams prop in so the server render is already correct.',
        },
        {
          q: 'Does useSearchParams need a Suspense boundary, and does state-in-url?',
          a: 'Next\u2019s useSearchParams opts a statically rendered route into client rendering up to the nearest Suspense boundary, and the build fails without one. state-in-url never calls it: it reads searchParams on the server and window.location on the client, so no boundary is needed and prerendering, PPR included, is kept.',
        },
        {
          q: 'How do I read URL state in a Server Component?',
          a: 'Pages get it as the searchParams prop — await it and either forward it to the client hook or decode it on the server with decodeState and the same default object. Layouts do not receive searchParams; expose the query string through a header set in proxy.ts and decode that.',
        },
        {
          q: 'Does updating the URL re-render the page on the server?',
          a: 'Not by default. setUrl updates through the History API, so nothing is fetched and no _rsc request is made. When the server should see the new state — say, to refetch a list in a Server Component — pass useHistory: false so updates go through the Next.js router and the route re-renders.',
        },
        {
          q: 'Is state-in-url a nuqs alternative for Next.js?',
          a: 'Yes. Both keep typed state in the query string; state-in-url takes one object with nested values and dates preserved, needs no adapter component and no per-key parser, and never touches useSearchParams. nuqs fits better when each value should be its own hand-readable query param. See the full comparison.',
        },
        {
          q: 'Which Next.js versions are supported?',
          a: 'Next.js 14, 15 and 16 on the App Router, including the async searchParams introduced in 15 and cacheComponents with PPR in 16. Other setups can use the framework-agnostic encodeState and decodeState helpers with the router of their choice.',
        },
      ],
    },
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
    home: 'Home',
    homeLink: 'state-in-url — home',
    breadcrumbs: 'Breadcrumb',
  },
};
