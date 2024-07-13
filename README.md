
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


<a href="https://state-in-url-asmyshlyaev177.vercel.app/" target="_blank">DEMO</a> |
<a href="https://stackblitz.com/~/github.com/asmyshlyaev177/state-in-url?file=packages%2Fexample-nextjs%2Fsrc%2Fapp%2FForm.tsx" target="_blank">Demo on Stackblitz</a> |
<a href ="https://codesandbox.io/p/github/asmyshlyaev177/state-in-url/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyk5bd9y00062v6jspcfrkx7%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyk5bd9x00022v6jyg71cr9e%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyk5bd9x00042v6jsos2y043%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyk5bd9x00052v6j5r632b12%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyk5bd9x00022v6jyg71cr9e%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyk5bd9w00012v6j83rq3bvo%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clyk5bd9x00022v6jyg71cr9e%2522%252C%2522activeTabId%2522%253A%2522clyk5bd9w00012v6j83rq3bvo%2522%257D%252C%2522clyk5bd9x00052v6j5r632b12%2522%253A%257B%2522id%2522%253A%2522clyk5bd9x00052v6j5r632b12%2522%252C%2522activeTabId%2522%253A%2522clyk5bdjx000b2v6jfc8ae464%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522SETUP_TASKS%2522%252C%2522id%2522%253A%2522clyk5bdjx000b2v6jfc8ae464%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A2222%252C%2522id%2522%253A%2522clyk5cjbo004d2v6j3u55k74g%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522ENV_SETUP%2522%252C%2522id%2522%253A%2522clyk5h8dp000r2v6j0r7kc7qq%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clyk5bd9x00042v6jsos2y043%2522%253A%257B%2522id%2522%253A%2522clyk5bd9x00042v6jsos2y043%2522%252C%2522activeTabId%2522%253A%2522clyk5cbuv001q2v6joegrxxv6%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyk5bd9x00032v6jtfhj316o%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522NEW_TERMINAL%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clyk5cbuv001q2v6joegrxxv6%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522cleanupDist%2522%252C%2522id%2522%253A%2522clyk5dgvo005i2v6jj950sxft%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target="_blank">Demo on Codesandbox</a>


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
