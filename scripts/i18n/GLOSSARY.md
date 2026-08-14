# Glossary — state-in-url

Hand this to any model or person translating this repo, together with
[TRANSLATING.md](./TRANSLATING.md).

## 1. Never translate, never transliterate, never inflect

These are identifiers a reader will type or search for. Copy them character for
character, keep their backticks, keep their capitalisation. If a sentence reads
awkwardly around one, rewrite the sentence — not the identifier.

**Hooks**
`useUrlState` · `useUrlStateBase` · `useSharedState` · `useUrlEncode`

**Functions**
`encodeState` · `decodeState` · `encode` · `decode`

**Returned members and options**
`urlState` · `setUrlState` · `setState` · `reset` · `updateUrl` · `updateState` ·
`replace` · `scroll` · `searchParams` · `defaultState` · `stateShape`

**React and framework identifiers appearing as literals**
`React.useState` · `useSearchParams` · `Suspense` · `useRouter` · `usePathname` ·
`history.pushState` · `PPR` · `cacheComponents` · `layout` · `page.tsx` ·
`tsconfig.json` · `useLoaderData`

## 2. Product and project names — keep in Latin script

`state-in-url` · React · Next.js · Remix · React Router · TanStack · NUQS ·
TypeScript · npm · yarn · pnpm · MIT · GitHub · Vercel · Netlify

Do not translate the package name in prose, in headings or in install commands.

## 3. Terms of art — translate, but pick one rendering and keep it

| English | Note |
| --- | --- |
| URL / query string / search params | Use the standard web vocabulary of your language; keep `URL` uppercase Latin. |
| state | React state. Use the word your ecosystem's React docs use. |
| deep link | A URL that restores a full application state. |
| boilerplate | Keep the sense of "repetitive setup code". |
| type-safe / typed | About TypeScript types, not about typing on a keyboard. |
| server-side rendering (SSR) | Keep the `SSR` abbreviation on first use. |
| structure and types are preserved | The library's headline claim — translate precisely, it is a technical guarantee. |

## 4. Traps specific to this repo

- **The `Date` example.** "a `Date` goes in, a `Date` comes out" refers to the
  JavaScript `Date` type, not to a calendar date. Keep `Date` as an identifier.
- **12 KB.** The URI size limit is a measured figure. Never change the number.
- **Code samples contain UI strings** (button labels like `Reset`). Under the
  rule in TRANSLATING.md these stay English so the sample matches the live demo
  — the earlier Chinese and Korean translations changed them, and that is being
  undone, not continued.
- The README is also the **npm** README. Relative links resolve against GitHub
  there; do not "fix" them to be relative to something else.
- `#anchors` in the table of contents are **generated** — never write them by
  hand. See TRANSLATING.md.
