import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// AUTO-GENERATED from public/llms.txt by scripts/generate-middleware-content.cjs
// Do not edit by hand — edit public/llms.txt and re-run `pnpm run generate-middleware`
// (this is wired into the dev and build scripts).

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get('accept') || '';

  const acceptsMarkdown = acceptHeader.includes('text/markdown');
  const acceptsPlainText = acceptHeader.includes('text/plain');
  const acceptsHtml = acceptHeader.includes('text/html');

  // Serve markdown if the client prefers text/markdown or text/plain over text/html
  const shouldServeMarkdown =
    (acceptsMarkdown || acceptsPlainText) &&
    (!acceptsHtml ||
     acceptHeader.indexOf('text/markdown') < acceptHeader.indexOf('text/html') ||
     acceptHeader.indexOf('text/plain') < acceptHeader.indexOf('text/html'));

  if (shouldServeMarkdown && url.pathname === '/') {
    return new NextResponse(LLMS_TXT_CONTENT, {
      status: 200,
      headers: {
        'Content-Type': acceptsMarkdown ? 'text/markdown; charset=utf-8' : 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  // Forward query string to server layouts via a header (state-in-url Proxy pattern)
  const sp = (request.url?.includes?.('_next') ? '' : request.url)?.split?.('?')?.[1] || '';

  const requestHeaders = new Headers(request.headers);

  if (url !== null) {
    requestHeaders.set('searchParams', sp);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

// shiki cannot load wasm in middleware, so this matcher must stay narrow
export const config = {
  matcher: ['/useUrlState/:path*', '/'],
};

const LLMS_TXT_CONTENT = `# state-in-url

A React hook library for storing typed, JSON-serializable state in URL query parameters. ~2 KB, zero runtime deps.

## For AI coding agents — preferred path

This package ships task-focused SKILL.md files via [@tanstack/intent](https://tanstack.com/intent/latest/docs/overview). If your agent supports Intent, that is the right surface to load instead of this file:

\`\`\`bash
# in the user's project, once
npx @tanstack/intent@latest install
# list skills available for installed libraries
npx @tanstack/intent@latest list
# load a specific skill into the current context
npx @tanstack/intent@latest load state-in-url#feature-state-hook
\`\`\`

Available skills (under \`node_modules/state-in-url/skills/\`):

| Skill | Type | When to load |
|---|---|---|
| \`feature-state-hook\` | core | Defining state and wrapping \`useUrlState\` in a feature-scoped custom hook |
| \`input-handling\` | core | Text inputs / sliders / fast-changing controls |
| \`nextjs-ssr\` | framework | Next.js App Router: \`searchParams\` forwarding, Proxy for layouts |
| \`react-router-remix-setup\` | framework | React Router v6/v7 or Remix v2 setup |
| \`form-library-integration\` | composition | Pairing with \`react-hook-form\` (or formik) |
| \`shared-state-no-url\` | core | \`useSharedState\` — cross-component state without URL sync |

The rest of this file is a condensed reference for agents that cannot load Intent skills.

## Package info

- npm: https://www.npmjs.com/package/state-in-url
- repo: https://github.com/asmyshlyaev177/state-in-url
- website: https://state-in-url.dev
- full README: https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/refs/heads/master/README.md

## Supported frameworks

| Framework | Versions | Import path |
|---|---|---|
| Next.js (App Router only) | 14 / 15 / 16 | \`state-in-url/next\` |
| React Router | v7 | \`state-in-url/react-router\` |
| React Router | v6 | \`state-in-url/react-router6\` |
| Remix | v2 | \`state-in-url/remix\` |
| Framework-agnostic | — | \`state-in-url\` (\`useSharedState\`), \`state-in-url/encodeState\` |

Pages Router is **not** supported.

## Install

\`\`\`bash
npm install state-in-url
\`\`\`

In \`tsconfig.json\`, ensure \`"moduleResolution": "Bundler"\` (or \`"Node16"\` / \`"NodeNext"\`).

## Core rules — read first

1. **Type, never interface.** The hook's generic constraint \`JSONCompatible<T>\` rejects \`interface\`. Always declare a \`type\` AND annotate the const: \`const FOO_STATE: FooState = { ... }\`.
2. **Default-state object must be a module-scoped \`const\`.** Never built from props, hook returns, or destructuring inside a component. Sharing is keyed by object identity.
3. **One feature → one shared default-state const → one custom hook.** Components import the hook, never \`useUrlState\` directly with their own defaults object.
4. **No secrets in URL.** Entity IDs (\`jobId\`, \`memberId\`) are fine; tokens, API keys, PII are not.
5. **JSON-serializable only.** Functions, BigInt, Symbol, Map, Set, class instances will not round-trip. Dates are supported.
6. **URL size**: keep total query-string under ~12 KB to stay safe across CDNs (Vercel header limit is 14 KB).

## API: \`useUrlState\`

\`\`\`typescript
const { urlState, setState, setUrl, reset } = useUrlState(DEFAULT_STATE, options?);
\`\`\`

- \`urlState\` — current state, typed identically to \`DEFAULT_STATE\`.
- \`setState(value)\` — updates internal state synchronously; **does not touch URL**.
- \`setUrl(value, opts?)\` — updates state + URL. URL write is throttled (next tick).
- \`reset(opts?)\` — sets state and URL back to \`DEFAULT_STATE\`.

Setter call signatures (both \`setState\` and \`setUrl\`):
\`\`\`typescript
setUrl({ field: 'newValue' });                          // partial patch
setUrl(curr => ({ ...curr, field: 'newValue' }));       // functional with current
setUrl((curr, initial) => initial);                     // reset via callback
setUrl();                                               // flush current state to URL
\`\`\`

\`options\` (per-call or as hook-level defaults):
- \`replace?: boolean\` — \`router.replace\` (default \`true\`) vs \`router.push\`.
- \`scroll?: boolean\` — Next.js scroll behavior (default \`false\`).
- React Router / Remix: any \`NavigateOptions\` (e.g. \`preventScrollReset\`).

Hook-level options (second arg to \`useUrlState\`):
- \`searchParams\` — pass \`searchParams\` from a Next.js server component or \`useSearchParams()\` from a client component. **Required for SSR correctness in Next.js App Router.**
- \`useHistory?: boolean\` — Next.js only. Default \`true\`. Uses \`window.history.pushState\` to avoid \`_rsc\` server round-trips on URL changes. Flip to \`false\` only when server data must refetch on URL change.

## Recommended pattern: feature-scoped hook

\`\`\`typescript
// features/jobs/jobsState.ts
export type JobsState = {
  status: '' | 'active' | 'closed';
  tab: 'details' | 'qa' | 'applicants';
  jobId: string;
};

export const JOBS_STATE: JobsState = {
  status: '',
  tab: 'details',
  jobId: '',
};
\`\`\`

\`\`\`typescript
// features/jobs/useJobsState.ts
'use client';
import { useSearchParams } from 'next/navigation';
import { useUrlState } from 'state-in-url/next';
import { JOBS_STATE } from './jobsState';

export function useJobsState() {
  const searchParams = useSearchParams();
  return useUrlState(JOBS_STATE, { searchParams });
}
\`\`\`

Any component calling \`useJobsState()\` shares the same URL-synced store. No Context, no Provider.

## Next.js App Router — server page forwarding \`searchParams\`

In **Next.js 15+**, \`searchParams\` is a \`Promise\`:

\`\`\`typescript
// app/jobs/page.tsx  (Server Component)
import { JobsList } from './JobsList';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  return <JobsList searchParams={sp} />;
}

// app/jobs/JobsList.tsx
'use client';
import { useUrlState } from 'state-in-url/next';
import { JOBS_STATE } from 'features/jobs/jobsState';

export function JobsList({ searchParams }: { searchParams: object }) {
  const { urlState, setUrl } = useUrlState(JOBS_STATE, { searchParams });
  // ...
}
\`\`\`

Without \`searchParams\`, the first render uses defaults, then a client effect re-syncs from the URL on the next tick — visible flash plus hydration warning.

## Next.js App Router — server layout (Proxy workaround)

Server layouts don't receive \`searchParams\`. Expose the query string via a Proxy header (Next.js 16+; \`middleware.ts\` still works as a deprecated alias):

\`\`\`typescript
// proxy.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const sp = (request.url.includes('_next') ? '' : request.url).split('?')[1] ?? '';
  const headers = new Headers(request.headers);
  headers.set('searchParams', sp);
  return NextResponse.next({ request: { headers } });
}
\`\`\`

\`\`\`typescript
// app/jobs/layout.tsx
import { headers } from 'next/headers';
import { decodeState } from 'state-in-url/encodeState';
import { JOBS_STATE } from 'features/jobs/jobsState';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const sp = (await headers()).get('searchParams') ?? '';
  const initial = decodeState(sp, JOBS_STATE);
  return <>{/* use \`initial\` */}{children}</>;
}
\`\`\`

## Input handling — instant feedback, deferred URL write

For text inputs and other fast-changing controls, split \`setState\` (instant render) and \`setUrl\` (URL flush):

\`\`\`typescript
<input
  value={urlState.q}
  onChange={(e) => setState({ q: e.target.value })}
  onBlur={() => setUrl()}
/>
\`\`\`

\`setUrl()\` with no args flushes the current state to the URL with content-based diffing — safe to call repeatedly.

## React Router and Remix

API is identical to the Next.js variant; only the import path and \`NavigateOptions\` differ.

\`\`\`typescript
import { useUrlState } from 'state-in-url/react-router';   // RR v7
import { useUrlState } from 'state-in-url/react-router6';  // RR v6 (since 6.0.0)
import { useUrlState } from 'state-in-url/remix';          // Remix v2

setUrl({ tab: 'b' }, { replace: false, preventScrollReset: true });
\`\`\`

## react-hook-form integration

Share one defaults object, hydrate \`useForm\` from \`urlState\`, push form changes back via RHF \`subscribe()\` (not \`watch()\`):

\`\`\`typescript
const { urlState, setUrl } = useUrlState(FILTERS_STATE, { searchParams });
const form = useForm<FiltersState>({ defaultValues: urlState });

React.useEffect(() => {
  const sub = form.subscribe({
    formState: { values: true },
    callback: ({ values }) => setUrl(values),
  });
  return () => sub();
}, [form, setUrl]);
\`\`\`

## \`useSharedState\` — cross-component state without URL

\`\`\`typescript
import { useSharedState } from 'state-in-url';

const CART_STATE: CartState = { items: [], isOpen: false };
const { state, setState } = useSharedState(CART_STATE);
\`\`\`

Same module-scoped default-state-identity rule. Use only when URL sync is explicitly NOT wanted.

## Common mistakes (CRITICAL — fix any agent generating these)

| Mistake | Fix |
|---|---|
| \`defaultState\` defined inside a React component | Move to a module-scoped \`const\`, annotated with a \`type\` |
| \`interface FeatureState { ... }\` for state shape | Use \`type FeatureState = { ... }\` |
| \`setUrl\` inside \`useEffect\` with \`urlState\` in deps | Causes infinite loop; gate on the actual change or derive on read |
| Two components each declaring \`const DEFAULTS = {...}\` | Export one const from a shared file; components import the hook |
| \`setUrl\`/\`setState\` called during render | Move into a handler or effect |
| \`interface\` instead of \`type\` | Same as above; \`type\` is required |
| Reading \`searchParams\` in a Next.js server layout | Use the Proxy + \`headers()\` + \`decodeState\` pattern |
| Using \`state-in-url/next\` in Pages Router | Not supported; use App Router or build a custom hook with \`useUrlStateBase\` |
| Importing \`state-in-url/react-router\` in a RR v6 project | Use \`state-in-url/react-router6\` (moved in 6.0.0) |
| \`setUrl({...})\` for fast typing inputs | Use \`setState\` on change, \`setUrl()\` on blur |
| Mutating \`urlState\` directly | Always go through \`setState\`/\`setUrl\` |
| Storing functions / \`BigInt\` / \`Symbol\` / \`Map\` / \`Set\` | Not serializable; use plain JSON-compatible values (Date is OK) |
| Storing tokens / API keys / passwords / PII in URL | Use auth storage; URL state is fully public |

## Documentation resources

- Full README (humans): https://github.com/asmyshlyaev177/state-in-url/blob/master/README.md
- URL size limits: https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md
- Working examples per framework: \`packages/example-nextjs{14,15,16}\`, \`packages/example-react-router{6,7}\`, \`packages/example-remix2\`
- JSDoc comments are available in IDE for all exported functions
`;
