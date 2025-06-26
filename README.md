English | [한국어](./README.KO.md) | [简体中文](./README.CN.md)

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="state-in-url logo" width="120px" />

  # State in url
</div>

<div align="center">
</div>

<div align="center">

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)]([https://github.com/semantic-release/semantic-release](https://github.com/asmyshlyaev177/state-in-url))

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/asmyshlyaev177/state-in-url/badge)](https://scorecard.dev/viewer/?uri=github.com/asmyshlyaev177/state-in-url)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9679/badge)](https://www.bestpractices.dev/projects/9679)
[![license](https://img.shields.io/github/license/asmyshlyaev177/state-in-url.svg?style=flat-square)](https://github.com/asmyshlyaev177/state-in-url/blob/master/LICENSE)
<!-- or by embedding this in your HTML:
<a href="https://www.bestpractices.dev/projects/9679"><img src="https://www.bestpractices.dev/projects/9679/badge"></a>  -->

</div>

<div align="center">

<h4 align="center">Don't hesitate to open an issue if you found a bug, or for requesting features</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# Demo

<a href="https://state-in-url.dev" target="_blank">Demo</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">Mirror link</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">URI size limitation, <b>up to 12KB</b> is safe</a>

<hr />

Add a <a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a>  and <a href="https://github.com/asmyshlyaev177" target="_blank">follow me</a> to support the project!

Will appreciate you feedback/opinion on [discussions](https://github.com/asmyshlyaev177/state-in-url/discussions/1)

Share if it useful for you.
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[Just Show Me Code!](#useurlstate)

## Why use `state-in-url`?

Store any user state in query parameters; imagine JSON in a browser URL. All of it with keeping types and structure of data, e.g. numbers will be decoded as numbers not strings, dates as dates, etc, objects and arrays supported.
Dead simple, fast, and with static Typescript validation. Deep links, aka URL synchronization, made easy.

Contains `useUrlState` hook for Next.js and react-router, and helpers for anything else on JS.
Since modern browsers support huge URLs and users don't care about query strings (it is a select all and copy/past workflow).

Time to use query string for state management, as it was originally intended.
This library does all mundane stuff for you.

This library is a good alternative for NUQS.

### Use cases

- Store unsaved user forms or page filters in URL
- Sycn URL with React state
- Just sync data between unrelated client components without touching URI
- Shareable URLs with application state (Deep linking, URL state synchronization)
- Easy state persistence across page reloads

### Features

- 🧩 **Simple**: No providers, reducers, boilerplate or new concepts, API similar to `React.useState`
- 📘 **Typescript validation/autocomplete**: State is just an object, automatic static validation in IDE/tests according to Typescript definition
- ✨ **Complex data**: Nested objects, dates and arrays, works same as JSON, but in URL
- ☂ **Default values**: Giving you default values if parameter not in url
- ⌨ **Organized**: All possible values defined at start, protect you from getting non existing key
- **compatible**: Will keep 3rd party query params as is
- **flexible**: Can use more than 1 state objects on the same page, just use different keys
- **Fast**: Minimal rerenders, around [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185) to encode and decode big object
- **Server Side Rendering**: Can use it in Server Components, Next.js 14 and 15 are supported
- **Lightweight**: Zero dependencies, library less than 2KB
- **DX**: Good developer experience, documentation, JSDoc comments, and examples
- **Framework Flexibility**: Hooks for `Next.js` and `react-router`, helpers to use it with other frameworks or pure JS
- **Well tested**: [Unit tests and Playwright tests for Chrome/Firefox/Safari](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)
- **Permissive license**: MIT

## Table of content

- [Installation](#installation)
- [useUrlState hook](#useurlstate)
- - [Next.js](#useurlstate-hook-for-nextjs)
- - [Remix](#useurlstate-hook-for-remixjs)
- - [React-Router](#useurlstate-hook-for-react-router)
- [Other helpers](#other-hooks-and-helpers)
- - [`useUrlStateBase` for other routers](#useurlstatebase-hook-for-others-routers)
- - [`useSharedState` hook for React.js/Next.js](#usesharedstate-hook-for-reactjs)
- - [`useUrlEncode` for React.js](#useurlencode-hook-for-reactjs)
- - [`encodeState` and `decodeState` for pure JS usage](#encodestate-and-decodestate-helpers)
- - [Low-level `encode` and `decode` functions](#encode-and-decode-helpers)
- [Best practices](#best-practices)
- - [Gotchas](#gotchas)
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

Main hook that takes initial state as parameter and returns state object, callback to update url, and callback to update only state.
All components that use the same `state` object are automatically synchronized.

### useUrlState hook for Next.js

[Full API Docs](packages/urlstate/next/useUrlState)

[React-Router example](#useurlstate-hook-for-react-router)

#### Usage examples

##### Basic

1. Define state shape with default values

 ```typescript
 // userState.ts
 // Only parameters with value different from default will go to the url.
 export const userState: UserState = { name: '', age: 0 }

 // use `Type` not `Interface`!
 type UserState = { name: string, age: number }
 ```

2. Import it and use

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // can pass `replace` arg, it's control will `setUrl` will use `rounter.push` or `router.replace`, default replace=true
  // can pass `searchParams` from server components, pass `useHistory: false` if you need to fetch smt in the server component
  const { urlState, setUrl, setState, reset } = useUrlState(userState);

  return (
    <div>
      // urlState.name will return default value from `userState` if url empty
      <input value={urlState.name}
        // same api as React.useState, e.g. setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Can update state immediately but sync change to url as needed
        onBlur={() => setUrl()}
      />

      <button onClick={reset}>
        Reset
      </button>

    </div>
  )
}
```

##### Custom hook to work with slice of state conveniently
<details>
  <Summary>Example</Summary>

  ```typescript
'use client';

import React from 'react';
import { useUrlState } from 'state-in-url/next';

const form: Form = {
    name: '',
    age: undefined,
    agree_to_terms: false,
    tags: [],
};

type Form = {
    name: string;
    age?: number;
    agree_to_terms: boolean;
    tags: {id: string; value: {text: string; time: Date } }[];
};

export const useFormState = ({ searchParams }: { searchParams?: object }) => {
    const { urlState, setUrl: setUrlBase, reset } = useUrlState(form, {
      searchParams,
    });

    // first navigation will push new history entry
    // all following will just replace that entry
    // this way will have history with only 2 entries - ['/url', '/url?key=param']

    const replace = React.useRef(false);
    const setUrl = React.useCallback((
        state: Parameters<typeof setUrlBase>[0],
        opts?: Parameters<typeof setUrlBase>[1]
      ) => {
        setUrlBase(state, { replace: replace.current, ...opts });
        replace.current = true;
    }, [setUrlBase]);

    return { urlState, setUrl, resetUrl: reset };
};
  ```
</details>

<hr />

##### With complex state shape

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
  const { urlState, setUrl } = useUrlState(form);

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

##### Update state only and sync to URL manually

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

##### With server side rendering

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
  const { urlState, setState, setUrl } = useUrlState(form, { searchParams });
}
```

</details>

##### Using hook in `layout` component

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

##### With arbitrary state shape (not recommended)

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

### useUrlState hook for Remix.js

API is same as for Next.js version, except can pass options from [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) type.

[API Docs](packages/urlstate/remix/useUrlState)

#### Example

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
import { useUrlState } from 'state-in-url/remix';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setState } = useUrlState(form);

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
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
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

[Example code](packages/example-remix2/app/routes/Form-for-test.tsx)

### useUrlState hook for React-Router

API is same as for Next.js version, except can pass options from [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99) type.

[API Docs](packages/urlstate/react-router/useUrlState)

#### Example

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
  const { urlState, setUrl, setState } = useUrlState(form);

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
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
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

## Other hooks and helpers

### `useUrlStateBase` hook for others routers

Hooks to create your own `useUrlState` hooks with other routers, e.g. react-router or tanstack router.

[API Docs](packages/urlstate/useUrlStateBase)

### `useSharedState` hook for React.js

Hook to share state between any React components, tested with Next.js and Vite.

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[API Docs](packages/urlstate/useSharedState/README.md)

### `useUrlEncode` hook for React.js

[API Docs](packages/urlstate/useUrlEncode/README.md)

### `encodeState` and `decodeState` helpers

[API Docs](packages/urlstate/encodeState/README.md)

### `encode` and `decode` helpers

[API Docs](packages/urlstate/encoder/README.md)

## Best Practices

- Define your state shape as a constant
- Use TypeScript for enhanced type safety and autocomplete
- Avoid storing sensitive information in URL parameters (SSN, API keys etc)
- Use this [extension](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) for readable TS errors

Can create state hooks for slices of state, and reuse them across application. For example:
```Typescript
type UserState = {
  name: string;
  age: number;
  other: { id: string, value: number }[]
};
const userState = {
  name: '',
  age: 0,
  other: [],
};

export const useUserState = () => {
  const { urlState, setUrl, reset } = useUrlState(userState);

  // other logic

  // reset query params when navigating to other page
  React.useEffect(() => {
    return reset
  }, [])

  return { userState: urlState, setUserState: setUrl };;
}

```

## Gotchas

1. Can pass only serializable values, `Function`, `BigInt` or `Symbol` won't work, probably things like `ArrayBuffer` neither. Everything that can be serialized to JSON will work.
2. Vercel servers limit size of headers (query string and other stuff) to **14KB**, so keep your URL state under ~5000 words. <https://vercel.com/docs/errors/URL_TOO_LONG>
3. Tested with `next.js` 14/15  with app router, no plans to support pages.

## Other

### Contribute and/or run locally

See [Contributing doc](CONTRIBUTING.md)

## Roadmap

- [x] hook for `Next.js`
- [x] hook for `react-router`
- [x] hook for `remix`
- [ ] hook for `svelte`
- [ ] hook for `astro`
- [ ] hook for store state in hash ?

## Contact & Support

- Create a [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) for bug reports, feature requests, or questions

## [Changelog](CHANGELOG.md)

## Mentions

 - [This Week in React 209](https://thisweekinreact.com/newsletter/209)
 - [JavaScript Weekly](https://javascriptweekly.com/issues/741)
 - [This Week in React 240](https://thisweekinreact.com/newsletter/240)

## License

This project is licensed under the [MIT license](LICENSE).

## Inspiration

[NUQS](https://github.com/47ng/nuqs)

[Using URL to store state in Vue](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[Storing state in the URL](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
