English | [한국어](./README.KO.md) | [简体中文](./README.CN.md)

<div align="center">
  <img src="/assets/Logo_big.png?raw=true" alt="state-in-url logo"/>

  <div><h2>Easily share complex state objects between unrelated React components, preserve types and structure, with TS validation. Without any hasssle or boilerplate.</h2></div>

</div>

<hr />

<div align="center">
<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">URI size limitation, <b>up to 12KB</b> is safe</a>
</div>

<div align="center">
<hr />

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)]([https://github.com/semantic-release/semantic-release](https://github.com/asmyshlyaev177/state-in-url))
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)

</div>

<div align="center">

<h4 align="center">Don't hesitate to open an issue if you found a bug, or for requesting features</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

<a href="https://state-in-url.dev" target="_blank">DEMO</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">DEMO2</a>

<hr />

Add a ⭐️ and <a href="https://github.com/asmyshlyaev177" target="_blank">follow me</a> to support the project!

Will appreciate you feedback/opinion on [discussions](https://github.com/asmyshlyaev177/state-in-url/discussions/1)

Share if it useful for you.
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

# Why use state-in-url?

`state-in-url` Simple state management with optional URL sync. Good for implementing deep links. Share complex states between unrelated React components, TS-friendly, NextJS compatible. Most of users don't care about URL, so, can use it to store your app state.

# Use cases

- 🧮 Store unsaved user forms in URL
- 🙃 Share the state between different components without changing url, good as alternative to signals and other state management tools
- 🧠 Sync data between unrelated client components
- 🔗 Shareable URLs with application state (Deep linking, URL state synchronization)
- 🔄 Easy state persistence across page reloads

# Features

- 🧩 **Simple**: No providers, reducers, boilerplate or new concepts, API similar to React.useState
- 📘 **Typescript support and type Safety**: Preserves data types and structure, good developer experience with IDE suggestions, strong typing and JSDoc comments
- ⚛️ **Framework Flexibility**: Separate hooks for Next.js and React.js applications, and functions for pure JS
- ⚙ **Well tested**: Unit tests and Playwright tests, high quality and support
- ⚡ **Fast**: Minimal rerenders, less than [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185) to encode and decode an object
- 🪶 **Lightweight**: Zero dependencies for a smaller footprint

## Table of content

- [Installation](#installation)
- [useUrlState hook](#useurlstate)
- - [Next.js](#useurlstate-hook-for-nextjs)
- - [React-Router](#useurlstate-hook-for-react-router)
- [Other helpers](#other-hooks-and-helpers)
- - [`useUrlStateBase` for other routers](#useurlstatebase-hook-for-others-routers)
- - [`useSharedState` hook for React.js/Next.js](#usesharedstate-hook-for-reactjs)
- - [`useUrlEncode` for React.js](#useurlencode-hook-for-reactjs)
- - [`encodeState` and `decodeState` for pure JS usage](#encodestate-and-decodestate-helpers)
- - [Low-level `encode` and `decode` functions](#encode-and-decode-helpers)
- [Best practices](#best-practices)
- - [Gothas](#gothas)
- [Other](#other)
- - [Roadmap](#roadmap)
- - [Contributing](#contribute-andor-run-locally)
- - [Contact & Support](#contact--support)
- - [Changelog](#changelog)
- - [License](#license)
- - [Inspiration](#inspiration)

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

## useUrlState

`useUrlState` is a custom React hook for Next.js/React-Router applications that make communication between client components easy. It allows you to share any complex state and sync it with the URL search parameters, providing a way to persist state across page reloads and share application state via URLs.

## useUrlState hook for Next.js

[Docs](packages/urlstate/next/useUrlState#api)

[React-Router example](#useurlstate-hook-for-react-router)

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
  // can pass `replace` arg, it's control will `setUrl` will use `rounter.push` or `router.replace`, default replace=true
  // can pass `searchParams` from server components
  const { urlState, setUrl, setUrlState } = useUrlState({ defaultState: userState });

  // won't let you to accidently mutate state directly, requires TS
  // urlState.name = 'John' // <- error

  return (
    <div>
      <input value={urlState.name}
        onChange={(ev) => { setUrl({ name: ev.target.value }) }}
      />
      <input value={urlState.age}
        onChange={(ev) => { setUrl({ age: +ev.target.value }) }}
      />

      // same api as React.useState
      <input value={urlState.name}
        onChange={(ev) => { setUrlState(curr => ({ ...curr, name: ev.target.value })) }}
        // Can update state immediately but sync change to url as needed
        onBlur={() => setUrl()}
      />

      <button onClick={() => setUrl(userState)}>
        Reset
      </button>

    </div>
  )
}
```

#### With complex state shape

<details>
  <Summary>Example</Summary>

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
```

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { form } from './form';

function TagsComponent() {
  // `urlState` will infer from Form type!
  const { urlState, setUrl } = useUrlState({ defaultState: form });

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
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

[Demo page example code](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs14/src/app/Form.tsx)
</details>

#### Update state only and sync to URL manually

<details>
  <Summary>Example</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // will compare state by content not by reference and fire update only for new values
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

Syncing state `onBlur` will be more aligned with real world usage.

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

#### With server side rendering

<details>
  <Summary>Example</Summary>

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
  const { urlState, setState, setUrl } = useUrlState({ defaultState: form, searchParams });
}
```

</details>

#### Using hook in `layout` component

<details>
  <Summary>Example</Summary>
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

</details>

#### With arbitrary state shape (not recommended)

<details>
  <Summary>Example</Summary>

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { urlState, setUrl, setState } = useUrlState<object>(someObj);
}
```

</details>

## useUrlState hook for React-Router

API is same as for Next.js version, except can pass options from [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) type.

[Docs](packages/urlstate/react-router/useUrlState#api)

### Example

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};

```

```typescript
import { useUrlState } from 'state-in-url/react-router';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setUrlState } = useUrlState({ defaultState: form });

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>

      <input value={urlState.name}
        onChange={(ev) => { setUrlState(curr => ({ ...curr, name: ev.target.value })) }}
        // Can update state immediately but sync change to url as needed
        onBlur={() => setUrl()}
      />
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

[Example code](packages/example-react-router6/src/Form-for-test.tsx)

# Other hooks and helpers

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

# Best Practices

- Define your state shape as a constant
- Use TypeScript for enhanced type safety and autocomplete
- Avoid storing sensitive information in URL parameters (SSN, API keys etc)
- Use this [extension](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) for readable TS errors

## Gothas

1. Can pass only serializable values, `Function`, `BigInt` or `Symbol` won't work, probably things like `ArrayBuffer` neither. Everything that can be serialized to JSON will work.
2. Vercel servers limit size of headers (query string and other stuff) to **14KB**, so keep your URL state under ~5000 words. <https://vercel.com/docs/errors/URL_TOO_LONG>
3. Tested with `next.js` 14/15  with app router, no plans to support pages.

# Other

## Contribute and/or run locally

See [Contributing doc](CONTRIBUTING.md)

## Roadmap

- [x] hook for `Next.js`
- [x] hook for 'react-router`
- [ ] hook for 'remix`
- [ ] hook for store state in hash ?

## Contact & Support

- Create a [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) for bug reports, feature requests, or questions

## [Changelog](CHANGELOG.md)

## License

This project is licensed under the [MIT license](LICENSE).

## Inspiration

[NUQS](https://github.com/47ng/nuqs)

[Using URL to store state in Vue](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[Storing state in the URL](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
