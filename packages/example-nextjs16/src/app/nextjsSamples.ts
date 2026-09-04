// Code samples for the `/nextjs` guide and its Markdown mirror. Plain strings
// rather than JSX so the mirror can print exactly what the page highlights.

export const SERVER_PAGE_SAMPLE = `// app/jobs/page.tsx  (Server Component)
import { JobsList } from './JobsList';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // A Promise since Next.js 15; a plain object in 14
  return <JobsList searchParams={await searchParams} />;
}`;

export const CLIENT_SAMPLE = `// app/jobs/JobsList.tsx
'use client';
import { useUrlState } from 'state-in-url/next';

// Outside the component: sharing is keyed by object identity
const JOBS_STATE = { q: '', page: 1, remote: false, tags: [] as string[] };

export function JobsList({ searchParams }: { searchParams: object }) {
  const { urlState, setUrl } = useUrlState(JOBS_STATE, { searchParams });

  return (
    <input
      value={urlState.q}
      onChange={(ev) => setUrl({ q: ev.target.value, page: 1 })}
    />
  );
}`;

export const PROXY_SAMPLE = `// proxy.ts  (middleware.ts before Next.js 16)
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const sp = (request.url.includes('_next') ? '' : request.url).split('?')[1] ?? '';
  const headers = new Headers(request.headers);
  headers.set('searchParams', sp);
  return NextResponse.next({ request: { headers } });
}`;

export const LAYOUT_SAMPLE = `// app/jobs/layout.tsx  (Server Component)
import { headers } from 'next/headers';
import { decodeState } from 'state-in-url/encodeState';
import { JOBS_STATE } from './jobsState';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const sp = (await headers()).get('searchParams') ?? '';
  const initial = decodeState(sp, JOBS_STATE); // typed like urlState

  return <>{/* use \`initial\` */}{children}</>;
}`;

export const HISTORY_SAMPLE = `const { urlState, setState, setUrl } = useJobsState();

// Render now, write the URL once the field is left
<input
  value={urlState.q}
  onChange={(ev) => setState({ q: ev.target.value })}
  onBlur={() => setUrl()}
/>

setUrl({ page: 2 });                     // replaces the history entry (default)
setUrl({ page: 2 }, { replace: false }); // pushes a new one — Back returns to page 1
setUrl({ page: 2 }, { scroll: true });   // scroll to top, off by default`;
