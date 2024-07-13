
<h1 align="center">state-in-url</h1>


<div align="center">
  <img src="/assets/logo.svg?raw=true" alt="Library logo"/>

  <div>Easily share state between unrelated React components, with IDE autocomplete and TS validation. Without any hasssle or boilerplate. </div>
</div>


<div align="center">
<hr />


[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=main)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
</div>

<div align="center">

<h4 align="center">Don't hesitate to open an issue if you found a bug</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/assets/19854148/c9802601-4d42-4362-b3e4-37ff87c3b97f)


<a href="https://state-in-url-asmyshlyaev177.vercel.app/" target="_blank">DEMO</a>


<hr />

Add a ⭐️ to support the project!

  <hr />

  </div>

  ## Why use state-in-url?

`state-in-url` Simple state management with URL synchronization.

# Use cases

- 🙃 Share the state between different components without changing url, good as alternative to signals and other state management tools
- 🔗 Shareable URLs with full application state
- 🔄 Easy state persistence across page reloads
- 🧠 Sync data between unrelated client components
- 🧮 Store unsaved user forms in URL

# Features

- 🧩 **Simple**: No providers, reducers, boilerplate or new concepts
- 📘 **Typescript support and type Safety**: Preserves data types and structure, enhances developer experience with IDE suggestions, strong typing and JSDoc comments
- ⚛️ **Framework Flexibility**: Separate hooks for Next.js and React.js applications, and functions for pure JS
- ⚙ **Well tested**: Unit tests and Playwright tests
- ⚡ **Fast**: Minimal rerenders
- 🪶 **Lightweight**: Zero dependencies for a smaller footprint


## Table of content

- [Installation](#installation)
- [`useUrlState` for Next.js](#useurlstate-hook-for-nextjs)
- [`useUrlEncode` for React.js](#useurlencode-hook-for-reactjs)
- [`encodeState` and `decodeState` for pure JS usage](#encodestate-and-decodestate-helpers)
- [auto sync state with url](#auto-sync-state)
- [Low-level `encode` and `decode` functions](#encode-and-decode-helpers)
- [Best practices](#best-practices)
- [Gothas](#gothas)
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

set `"moduleResolution": "Node16"` or `"moduleResolution": "NodeNext"` in your `tsconfig.json`

## useUrlState hook for Next.js

[Docs](packages/urlstate/useUrlState/README.md)

`useUrlState` is a custom React hook for Next.js applications that make communication between client components easy. It allows you to share any complex state and sync it with the URL search parameters, providing a way to persist state across page reloads and share application state via URLs.

### Usage examples

#### Basic

1. Define state shape

   ```typescript
   // countState.ts
   // State shape should be stored in a constant, don't pass an object directly
   export const countState: CountState = { count: 0 }

   type CountState = { count: number }
   ```

2. Import it and use

```typescript
'use client'
import { useUrlState } from 'state-in-url';

import { countState } from './countState';

function MyComponent() {
  // for use searchParams from server component
  // e.g. export default async function Home({ searchParams }: { searchParams: object }) {
  // const { state, updateState, updateUrl } = useUrlState(countState, searchParams);
  const { state, updateState, updateUrl } = useUrlState(countState);

  // won't let you to accidently mutate state directly, requires TS
  // state.count = 2 // <- error

  return (
    <div>
      <p>Count: {state.count}</p>

      <button onClick={() => updateUrl({ count: state.count + 1 }), { replace: true }}>
        Increment (Update URL)
      </button>

        // same api as React.useState
      <button onClick={() => updateState(currState => ({...currState, count: currState.count + 1 }) )}>
        Increment (Local Only)
      </button>
      <button onClick={() => updateUrl()}>
        Sync changes to url
        // Or don't sync it and just share state
      </button>

      <button onClick={() => updateUrl(state)}>
        Reset
      </button>
    </div>
  )
}
```

#### With complex state shape

```typescript
interface UserSettings {
  theme: 'light' | 'dark';
  fontSize: number;
  notifications: boolean;
}

export const userSettings: UserSettings {
  theme: 'light',
  fontSize: 16,
  notifications: true,
}
```

```typescript
'use client'
import { useUrlState } from 'state-in-url';

import { userSettings } from './userSettings';

function SettingsComponent() {
  // `state` will infer from UserSettings type!
  const { state, updateUrl } = useUrlState(userSettings);

  const toggleTheme = () => {
    updateUrl(current => ({
      ...current,
      theme: current.theme === 'light' ? 'dark' : 'light',
    }));
  };

  // sync state to url when idle
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

  return (
    <div>
      <h2>User Settings</h2>
      <p>Theme: {state.theme}</p>
      <p>Font Size: {state.fontSize}px</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Other UI elements to update other settings */}
    </div>
  );
}
...

// Other component
function Component() {
  const { state } = useUrlState(defaultSettings);

  return (
    <div>
      <p>Notifications is {state.notifications ? 'On' : 'Off'}</p>
    </div>
  )
}
```

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

#### With arbitrary state shape (not recommended)

```typescript
'use client'
import { useUrlState } from 'state-in-url';

const someObj = {};

function SettingsComponent() {
  const { state, updateUrl, updateState } = useUrlState<object>(someObj);
}
```

## `useUrlEncode` hook for React.js

[Docs](packages/urlstate/useUrlEncode/README.md)

## `encodeState` and `decodeState` helpers

[Docs](packages/urlstate/encodeState/README.md)

## `encode` and `decode` helpers

[Docs](packages/urlstate/encoder/README.md)

## Best Practices

- Define your state shape as a constant to ensure consistency
- Use TypeScript for enhanced type safety and autocomplete
- Avoid storing sensitive information in URL parameters
- Use `updateState` for frequent updates and `updateUrl` to sync changes to url

## Gothas

1. Can pass only serializable values, `Function`, `BigInt` or `Symbol` won't work, probably things like `ArrayBuffer` neither.
2. Vercel servers limit size of headers (query string and other stuff) to **14KB**, so keep your URL state under ~5000 words. https://vercel.com/docs/errors/URL_TOO_LONG

## Run locally

Clone this repo, run `npm install` and

```sh
npm run dev
```

Go to [localhost:3000](http://localhost:3000)


## Contact & Support

- Create a [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) for bug reports, feature requests, or questions

## [Changelog](https://github.com/asmyshlyaev177/state-in-url/blob/main/CHANGELOG.md)

## License

This project is licensed under the [MIT license](https://github.com/asmyshlyaev177/state-in-url/blob/main/LICENSE).

## Inspiration

[Using URL to store state in Vue ](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[Storing state in the URL](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
