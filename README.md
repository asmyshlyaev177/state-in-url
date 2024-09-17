English | [한국어](./README.KO.md) | [简体中文](./README.CN.md)

<div align="center">
  <img src="/assets/Logo_big.png?raw=true" alt="state-in-url logo"/>

  <div>Easily share state between unrelated React components, with IDE autocomplete and TS validation. Without any hasssle or boilerplate. </div>
</div>

<div align="center">
<hr />

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=main)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)]([https://github.com/semantic-release/semantic-release](https://github.com/asmyshlyaev177/state-in-url))
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
</div>

<div align="center">

<h4 align="center">Don't hesitate to open an issue if you found a bug, or for requesting features</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/main/assets/Demo-gif.gif)


<a href="https://state-in-url-asmyshlyaev177.vercel.app/" target="_blank">DEMO</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">DEMO2</a> |
<a href ="https://codesandbox.io/p/github/asmyshlyaev177/state-in-url/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyk5bd9y00062v6jspcfrkx7%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyk5bd9x00022v6jyg71cr9e%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyk5bd9x00042v6jsos2y043%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyk5bd9x00052v6j5r632b12%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyk5bd9x00022v6jyg71cr9e%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyk5bd9w00012v6j83rq3bvo%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clyk5bd9x00022v6jyg71cr9e%2522%252C%2522activeTabId%2522%253A%2522clyk5bd9w00012v6j83rq3bvo%2522%257D%252C%2522clyk5bd9x00052v6j5r632b12%2522%253A%257B%2522id%2522%253A%2522clyk5bd9x00052v6j5r632b12%2522%252C%2522activeTabId%2522%253A%2522clyk5bdjx000b2v6jfc8ae464%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522SETUP_TASKS%2522%252C%2522id%2522%253A%2522clyk5bdjx000b2v6jfc8ae464%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A2222%252C%2522id%2522%253A%2522clyk5cjbo004d2v6j3u55k74g%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522ENV_SETUP%2522%252C%2522id%2522%253A%2522clyk5h8dp000r2v6j0r7kc7qq%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clyk5bd9x00042v6jsos2y043%2522%253A%257B%2522id%2522%253A%2522clyk5bd9x00042v6jsos2y043%2522%252C%2522activeTabId%2522%253A%2522clyk5cbuv001q2v6joegrxxv6%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyk5bd9x00032v6jtfhj316o%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522NEW_TERMINAL%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clyk5cbuv001q2v6joegrxxv6%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522cleanupDist%2522%252C%2522id%2522%253A%2522clyk5dgvo005i2v6jj950sxft%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target="_blank">Demo on Codesandbox</a>

<hr />

Add a ⭐️ and <a href="https://github.com/asmyshlyaev177" target="_blank">follow me</a> to support the project!

  <hr />

  </div>

## Why use state-in-url?

`state-in-url` Simple state management with optional URL sync. Share complex states between unrelated React components, TS-friendly, NextJS compatible. Most of users don't care about URL, so, can use it to store your app state.

# Use cases

- 🧮 Store unsaved user forms in URL
- 🙃 Share the state between different components without changing url, good as alternative to signals and other state management tools
- 🧠 Sync data between unrelated client components
- 🔗 Shareable URLs with full application state
- 🔄 Easy state persistence across page reloads

# Features

- 🧩 **Simple**: No providers, reducers, boilerplate or new concepts, API similar to React.useState
- 📘 **Typescript support and type Safety**: Preserves data types and structure, good developer experience with IDE suggestions, strong typing and JSDoc comments
- ⚛️ **Framework Flexibility**: Separate hooks for Next.js and React.js applications, and functions for pure JS
- ⚙ **Well tested**: Unit tests and Playwright tests, high quality and support
- ⚡ **Fast**: Minimal rerenders
- 🪶 **Lightweight**: Zero dependencies for a smaller footprint

## Table of content

- [Installation](#installation)
- [`useUrlState` for Next.js](#useurlstate-hook-for-nextjs)
- [`useUrlStateBase` for other routers](#useurlstatebase-hook-for-others-routers)
- [`useSharedState` hook for React.js/Next.js](#usesharedstate-hook-for-reactjs)
- [`useUrlEncode` for React.js](#useurlencode-hook-for-reactjs)
- [`encodeState` and `decodeState` for pure JS usage](#encodestate-and-decodestate-helpers)
- [auto sync state with url](#auto-sync-state)
- [Low-level `encode` and `decode` functions](#encode-and-decode-helpers)
- [Best practices](#best-practices)
- [Gothas](#gothas)
- [Roadmap](#roadmap)
- [Contact & Support](#contact--support)
- [Changelog](#changelog)
- [License](#license)
- [Inspiration](#inspiration)

## installation

### 1. Install package

```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```

### 2. Edit tsconfig.json

In `tsconfig.json` in `compilerOptions` set `"moduleResolution": "Bundler"`, or`"moduleResolution": "Node16"`, or `"moduleResolution": "NodeNext"`.
Possibly need to set `"module": "ES2022"`, or `"module": "ESNext"`

## useUrlState hook for Next.js

[Docs](packages/urlstate/next/useUrlState#api)

`useUrlState` is a custom React hook for Next.js applications that make communication between client components easy. It allows you to share any complex state and sync it with the URL search parameters, providing a way to persist state across page reloads and share application state via URLs.

### Usage examples

#### Basic

1. Define state shape

   ```typescript
   // userState.ts
   // State shape should be stored in a constant, don't pass an object directly
   export const userState: UserState = { name: '', age: 0 }

   type UserState = { name: string, age: number }
   ```

2. Import it and use

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // can pass `replace` arg, it's control will `updateUrl` will use `rounter.push` or `router.replace`, default replace=true
  // const { state, updateState, updateUrl } = useUrlState({ defaultState: userState, searchParams, replace: false });
  const { state, updateState, updateUrl } = useUrlState({ defaultState: userState });

  // won't let you to accidently mutate state directly, requires TS
  // state.name = 'John' // <- error

  return (
    <div>
      <input value={state.name}
        onChange={(ev) => { updateState({ name: ev.target.value }) }}
        onBlur={() => updateUrl()}
      />
      <input value={state.age}
        onChange={(ev) => { updateState({ age: +ev.target.value }) }}
        onBlur={() => updateUrl()}
      />

      // same api as React.useState
      <input value={state.name}
        onChange={(ev) => { updateState(curr => ({ ...curr, name: ev.target.value })) }}
        onBlur={() => updateUrl()}
      />

      <button onClick={() => updateUrl(userState)}>
        Reset
      </button>

    </div>
  )
}
```

#### With complex state shape

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  'agree to terms': false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  'agree to terms': boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};

```

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { form } from './form';

function TagsComponent() {
  // `state` will infer from Form type!
  const { state, updateUrl } = useUrlState({ defaultState: form });

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      updateUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [updateUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!state.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[Demo page example code](https://github.com/asmyshlyaev177/state-in-url/blob/main/packages/example-nextjs14/src/app/Form.tsx)

#### Auto sync state

```typescript
  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // will compare state by content not by reference and fire update only for new values
      updateUrl(state);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [state, updateUrl]);
```

Syncing state `onBlur` will be more aligned with real world usage.

```typescript
<input onBlur={() => updateUrl()} .../>
```

#### With server side rendering

```typescript
export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <Form searchParams={searchParams} />
  )
}

// Form.tsx
'use client'
import React from 'react';
import { useUrlState } from 'state-in-url/next';
import { form } from './form';

const Form = ({ searchParams }: { searchParams: object }) => {
  const { state, updateState, updateUrl } = useUrlState({ defaultState: form, searchParams });
}
```

#### Using hook in `layout` component

That a tricky part, since nextjs with app router doesn't allow to access searchParams from server side. There is workaround with using middleware, but it isn't pretty and can stop working after nextjs update.

```typescript
// add to appropriate `layout.tsc`
export const runtime = 'edge';

// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.url?.includes('_next') ? null : request.url;
  const sp = url?.split?.('?')?.[1] || '';

  const response = NextResponse.next();

  if (url !== null) {
    response.headers.set('searchParams', sp);
  }

  return response;
}

// Target layout component
import { headers } from 'next/headers';
import { decodeState } from 'state-in-url/encodeState';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sp = headers().get('searchParams') || '';

  return (
    <div>
      <Comp1 searchParams={decodeState(sp, stateShape)} />
      {children}
    </div>
  );
}


```

#### With arbitrary state shape (not recommended)

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { state, updateUrl, updateState } = useUrlState<object>(someObj);
}
```

## `useUrlStateBase` hook for others routers

Hooks to create your own `useUrlState` hooks with other routers, e.g. react-router or tanstack router.

[Docs](packages/urlstate/useUrlStateBase)

## `useSharedState` hook for React.js

Hook to share state between any React components, tested with Next.js and Vite.

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[Docs](packages/urlstate/useSharedState/README.md)

## `useUrlEncode` hook for React.js

[Docs](packages/urlstate/useUrlEncode/README.md)

## `encodeState` and `decodeState` helpers

[Docs](packages/urlstate/encodeState/README.md)

## `encode` and `decode` helpers

[Docs](packages/urlstate/encoder/README.md)

## Best Practices

- Define your state shape as a constant to ensure consistency
- Use TypeScript for enhanced type safety and autocomplete
- Avoid storing sensitive information in URL parameters (SSN, API keys etc)
- Use `updateState` for frequent updates and `updateUrl` to sync changes to url
- Use `Suspence` to wrap client components in Next.js
- Use this [extension](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) for readable TS errors

## Gothas

1. Can pass only serializable values, `Function`, `BigInt` or `Symbol` won't work, probably things like `ArrayBuffer` neither.
2. Vercel servers limit size of headers (query string and other stuff) to **14KB**, so keep your URL state under ~5000 words. <https://vercel.com/docs/errors/URL_TOO_LONG>
3. Tested with `next.js` 14 with app router, no plans to support pages.

## Run locally

Clone this repo, run `npm install` and

```sh
npm run dev
```

Go to [localhost:3000](http://localhost:3000)

## Roadmap
 - [x] hook for `Next.js`
 - [ ] hook for 'react-router`
 - [ ] hook for store state in hash ?

## Contact & Support

- Create a [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) for bug reports, feature requests, or questions

## [Changelog](https://github.com/asmyshlyaev177/state-in-url/blob/main/CHANGELOG.md)

## License

This project is licensed under the [MIT license](https://github.com/asmyshlyaev177/state-in-url/blob/main/LICENSE).

## Inspiration

[Using URL to store state in Vue](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[Storing state in the URL](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
