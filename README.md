
<h1 align="center">state-in-url</h1>


<p align="center">
  <img src="/assets/logo.svg?raw=true" alt="Library logo"/>
</p>


<div align="center">
  
[![For hire](/assets/hireBadge.svg)](https://www.linkedin.com/in/asmyshlyaev177/)


[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=main)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
</div>

<div align="center">
Seamlessly store complex React state object in URL query parameters without losing types. Works with Next.js/React.js applications.

<h4 align="center">Don't hesitate to open issue if you found a bug</h4>


https://github.com/asmyshlyaev177/state-in-url/assets/19854148/10456887-f149-4745-b3f1-e799e70b16cd


<a href="https://state-in-url-asmyshlyaev177.vercel.app/" target="_blank">DEMO</a>


<hr />

Add a ⭐️ to support the project!

  <hr />

  </div>

  ## Why use state-in-url?

`state-in-url` lets you use URI string for state management.

# Use cases
- 🔗 Shareable URLs with full application state
- 🔄 Easy state persistence across page reloads
- 🧠 Pass data between unrelated client components
- 🧮 Store unsaved user forms in URL

# Features
- 🧩 **Simple**: Handles complex objects without extra effort
- 📘 **Typescript support and type Safety**: Preserves data types and structure, enhances developer experience with strong typing and JSDoc comments
- ⚛️ **Framework Flexibility**: Separate hooks for Next.js and React.js applications, and functions for pure JS
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
```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```


## useUrlState hook for Next.js

`useUrlState` is a custom React hook for Next.js applications that make communication between client components easy. It allows you to store and retrieve state from the URL search parameters, providing a way to persist state across page reloads and share application state via URLs.


### Usage examples

#### Basic

```typescript
'use client'
import { useUrlState } from 'state-in-url';

// State shape should be stored in a constant, don't pass an object directly
const countState = { count: 0 };

function MyComponent() {
  const { state, updateState, updateUrl } = useUrlState(countState);

  // won't let you to accidently mutate state directly, requires TS
  // state.count = 2 // <- error

  return (
    <div>
      <p>Count: {state.count}</p>

      <button onClick={() => updateUrl({ count: state.count + 1 }), { replace: true }}>
        Increment (Update URL)
      </button>

      <button onClick={() => updateState({ count: state.count + 1 })}>
        Increment (Local Only)
      </button>

      <button onClick={() => updateUrl(state)}>
        Sync changes to url
      </button>
    </div>
  )
}
```

#### With complex state shape

```typescript
'use client'
import { useUrlState } from 'state-in-url';

interface UserSettings {
  theme: 'light' | 'dark';
  fontSize: number;
  notifications: boolean;
}

const defaultSettings: UserSettings {
  theme: 'light',
  fontSize: 16,
  notifications: true,
}

function SettingsComponent() {
  // `state` will infer from UserSettings type!
  const { state, updateUrl } = useUrlState(defaultSettings);

  const toggleTheme = () => {
    updateUrl(current => ({
      ...current,
      theme: current.theme === 'light' ? 'dark' : 'light',
    }));
  };

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

## useUrlEncode hook for React.js

`useUrlEncode` is a custom React hook that provides utility functions for encoding and decoding state object to and from URL search parameters. This hook doesn't depend on Nextjs, and will works with any React application.

Accepts optional `defaultState` argument.

```typescript
import { useUrlEncode } from 'state-in-url';

const Component = () => {
  const { parse, stringify } = useUrlEncode();

  const str = stringify({ age: 36 }); // age=∓36
  const obj = parse(str); // { age: 36 }

  const currentParams = parse(window.location.search);
  // OR
  // const obj = parse(new URLSearchParams(window.location.search))

  const updateSearch = () => {
    const currentParams = new URLSearchParams(window.location.search);
    const newState = { query: 'react hooks', page: 2 };
    const updatedParamsString = stringify(newState, currentParams);
    console.log(updatedParamsString);
    // Output: existing params + query=react%20hooks&page=2
  };
}
```

## `encodeState` and `decodeState` helpers

`encodeState` let you encode some object with optional `defaults`, and optional existing queryString
```ts
 export const form = { name: '' };
...
 encodeState({ name: 'test' }, form, 'someExistingParam=123');
```

`decodeState` let you decode queryString with optional defaults
```ts
 export const form = { name: '' };
...
 decodeState('name=Alex', form);
```

## `encode` and `decode` helpers

There low level helpers to stringify and parse query string params. Useful for other frameworks or pure JS.

```javascript
import { encode, decode } from 'state-in-url';

const state = { obj: [1, 2, 3], obj2: true }

// to params
const params = new URLSearchParams();
Object.entries(state).forEach(([key, value]) => {
  params.set(key, encode(value));
});
const str = params.toString();

// from params
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)
```

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
- Add a ⭐️ [star on GitHub](https://github.com/asmyshlyaev177/state-in-url) to support the project!

## [Changelog](https://github.com/asmyshlyaev177/state-in-url/blob/main/CHANGELOG.md)

## License
This project is licensed under the [MIT license](https://github.com/asmyshlyaev177/state-in-url/blob/main/LICENSE).

## Inspiration
[this article](https://www.thisdot.co/blog/communication-between-client-components-in-next-js)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
