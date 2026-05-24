---
name: nextjs-ssr
description: >
  SSR-safe useUrlState in Next.js App Router. Forward searchParams from server
  pages (awaiting the Promise in Next.js 15+), call useSearchParams() in pure
  client components, decide between useHistory true/false, and use a Proxy
  (formerly middleware) to expose query params to server layouts. App Router
  only — Pages Router is not supported. Load this skill for any use of
  state-in-url/next or anytime URL state must be correct on first paint.
type: framework
library: state-in-url
framework: react
library_version: '6.1.3'
requires:
  - feature-state-hook
sources:
  - 'asmyshlyaev177/state-in-url:packages/urlstate/next/useUrlState/useUrlState.ts'
  - 'asmyshlyaev177/state-in-url:packages/example-nextjs16/src/middleware.ts'
  - 'asmyshlyaev177/state-in-url:README.md#with-server-side-rendering'
---

This skill builds on `state-in-url/feature-state-hook`. Read it first for the module-scoped default-state rule.

# state-in-url — Next.js App Router SSR

Without `searchParams`, the first render of a `useUrlState` component has no URL knowledge. It renders defaults, then a client `useEffect` re-syncs from the URL → visible flash and a React hydration warning. The fix is to feed the URL into the hook on the server (via `searchParams` prop or a Proxy header) so the very first render is correct.

App Router only. Pages Router uses `next/router`, which `state-in-url/next` does not support — there are no plans to add it.

## Setup

### Server page forwarding `searchParams` (recommended)

```typescript
// app/jobs/page.tsx  (Server Component)
import { JobsList } from './JobsList';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams; // Next.js 15+: searchParams is a Promise
  return <JobsList searchParams={sp} />;
}
```

```typescript
// app/jobs/JobsList.tsx
'use client';
import { useUrlState } from 'state-in-url/next';
import { JOBS_STATE } from 'features/jobs/jobsState';

export function JobsList({ searchParams }: { searchParams: object }) {
  const { urlState, setUrl } = useUrlState(JOBS_STATE, { searchParams });
  return <pre>{JSON.stringify(urlState)}</pre>;
}
```

### Pure client component using `useSearchParams`

When you can't (or don't want to) thread `searchParams` from a server parent:

```typescript
'use client';
import { useSearchParams } from 'next/navigation';
import { useUrlState } from 'state-in-url/next';
import { JOBS_STATE } from 'features/jobs/jobsState';

export function useJobsState() {
  const searchParams = useSearchParams();
  return useUrlState(JOBS_STATE, { searchParams });
}
```

## Core Patterns

### `useHistory` — choosing the URL update mode

| Setting | Mechanism | Effect | Use when |
|---|---|---|---|
| `useHistory: true` (default) | `window.history.pushState` / `replaceState` | No `_rsc` round-trip per URL change | URL state is client-only UI (filters, drawers, tabs) |
| `useHistory: false` | `next/navigation`'s `router.push` / `router.replace` | RSC refetches on every URL change | URL state must refetch server data (e.g. `searchParams` drives a DB query in the page) |

```typescript
useUrlState(FORM_STATE, { searchParams, useHistory: false });
```

Default is `true`. Flip to `false` only when the server page needs to re-render with the new query.

### Decoding state on the server for data fetching

```typescript
// app/jobs/page.tsx
import { decodeState } from 'state-in-url/encodeState';
import { JOBS_STATE } from 'features/jobs/jobsState';
import { fetchJobs } from 'lib/jobs';

export default async function Page({ searchParams }) {
  const sp = await searchParams;
  const state = decodeState(new URLSearchParams(sp as Record<string, string>), JOBS_STATE);
  const jobs = await fetchJobs({ status: state.status });
  return <JobsList searchParams={sp} jobs={jobs} />;
}
```

### Reading URL state in a server layout (Proxy workaround)

Server layouts don't receive `searchParams`. Set up a Proxy (Next.js 16+ — `middleware.ts` still works as a deprecated alias) to surface the query string as a request header, then decode in the layout. With this setup the layout renders correctly on first paint with no extra rerenders.

```typescript
// proxy.ts  (or middleware.ts, same content)
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const sp = (request.url.includes('_next') ? '' : request.url).split('?')[1] ?? '';
  const headers = new Headers(request.headers);
  headers.set('searchParams', sp);
  return NextResponse.next({ request: { headers } });
}
```

```typescript
// app/jobs/layout.tsx
import { headers } from 'next/headers';
import { decodeState } from 'state-in-url/encodeState';
import { JOBS_STATE } from 'features/jobs/jobsState';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const sp = (await headers()).get('searchParams') ?? '';
  const initial = decodeState(sp, JOBS_STATE);

  return (
    <>
      <LayoutHeader initial={initial} />
      {children}
    </>
  );
}
```

## Common Mistakes

### CRITICAL Not passing `searchParams` in Next.js App Router

Wrong:

```typescript
// page.tsx (server)
export default function Page() { return <Form />; }

// Form.tsx (client)
const { urlState } = useUrlState(FORM_STATE);  // missing searchParams
```

Correct:

```typescript
// page.tsx
export default async function Page({ searchParams }) {
  const sp = await searchParams;
  return <Form searchParams={sp} />;
}

// Form.tsx
const { urlState } = useUrlState(FORM_STATE, { searchParams });
```

`searchParams` makes the **initial** state correct. Without it, the first render uses defaults, then a client `useEffect` re-syncs from the URL on the next tick — causing a visible flash and a hydration warning. URL state still survives refresh either way (URL is the source of truth), but the initial paint is wrong. With a Proxy feeding the layout, no extra rerender happens at all. Most common Next.js issue (#40, #60).

Source: GitHub issues #40, #60 (asmyshlyaev177/state-in-url); maintainer interview

### HIGH Forgetting to await `searchParams` in Next.js 15+

Wrong:

```typescript
export default function Page({ searchParams }) {
  return <Form searchParams={searchParams} />; // Promise, not the value
}
```

Correct:

```typescript
export default async function Page({ searchParams }) {
  const sp = await searchParams;
  return <Form searchParams={sp} />;
}
```

Next.js 15 changed page-level `searchParams` to a Promise. The library silently decodes nothing from an unresolved Promise.

Source: Next.js 15 migration notes

### HIGH Using `state-in-url/next` in a Pages Router project

Wrong:

```typescript
// pages/index.tsx
import { useUrlState } from 'state-in-url/next'; // imports next/navigation
```

Correct:

Use App Router (`app/` directory). The library does not support Pages Router and there are no plans to add support. If you must stay on Pages Router, build a custom hook with `useUrlStateBase` and a `next/router`-backed router object.

Source: README "Gotchas" #3

### MEDIUM Setting `useHistory: false` unnecessarily

Wrong:

```typescript
useUrlState(FORM_STATE, { searchParams, useHistory: false });
// every keystroke triggers a Next.js _rsc payload fetch
```

Correct:

```typescript
useUrlState(FORM_STATE, { searchParams });
// useHistory defaults to true → window.history, no server round-trip
```

`useHistory: false` is only correct when the server page must re-fetch on URL changes. For UI-only state (filters, drawers, tabs) it triples request traffic.

Source: JSDoc on `useUrlState` params; vercel/next.js#59167

### MEDIUM Trying to read `searchParams` in a server layout directly

Wrong:

```typescript
export default function Layout({ children, searchParams }: any) {
  // searchParams is always undefined in layouts
}
```

Correct:

Use the Proxy + header pattern shown above (`proxy.ts` setting `searchParams` header → layout reads via `headers()` and `decodeState`). With this in place there is no initial lag or extra rerender.

Source: README "Using hook in layout component"; packages/example-nextjs16/src/middleware.ts; maintainer interview

## See also

- `state-in-url/feature-state-hook` — base pattern; required reading.
- `state-in-url/input-handling` — for text-input UX with the Next.js hook.
