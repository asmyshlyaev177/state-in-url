'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

import { GithubLink } from './components/GithubLink';
import { NpmLink } from './components/NpmLink';
import { UrlBox } from './components/UrlBox';
import { Form } from './Form';
import { Status } from './Status';
import { Word } from './components/Word';



export function DemoPart({ searchParams }: { searchParams: object }) {
  const pathname = usePathname()

  const { routerKind, urls } = getUrls(pathname)

  return (
    <>
      <section className="demo">
        <header className="header">
          <div className="wrapper">
            <h2 className="title">useUrlState — demo with <Word>{routerKind}</Word></h2>
            <div className="github-link">
              <NpmLink />
              <GithubLink />
            </div>
          </div>

          <div className="urlBox">
            <UrlBox initialUrl={spToUrl(searchParams)} />
          </div>

          <p className="demo-hint">Try to type something <span className="demo-hint-arrow" aria-hidden="true">↓</span></p>

        </header>

        <section className="form-components">
            <ErrorBoundary fallbackRender={fallbackRender}>
              <Form className="form" searchParams={searchParams} ghLink={urls.form} />
            </ErrorBoundary>
            <ErrorBoundary
              fallbackRender={fallbackRender}>
              <Status className="status" sp={searchParams} ghLink={urls.status} />
            </ErrorBoundary>

        </section>
      </section>
    </>
  );
}

function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className='max-w-[30%] flex flex-col items-center gap-4'>
      <p>Something went wrong:</p>
      <pre className='whitespace-break-spaces text-red-500 max-h-[350px]'>{error?.message || 'An error occurred'}</pre>
      <button onClick={resetErrorBoundary} className='p-4 bg-brand-dim rounded-md text-ink'>Try again</button>
    </div>
  );
}

function spToUrl(sp: object): string {
  const qs = new URLSearchParams(sp as Record<string, string>).toString();
  return qs ? '/?' + qs : '/';
}

function getUrls(pathname: string) {
  let routerKind: keyof typeof sourceUrls = 'next.js'
  if (pathname.includes('/react-router')) routerKind = 'react-router';
  else if (pathname.includes('/remix')) routerKind = 'remix.js';
  else routerKind = 'next.js';
  const urls = sourceUrls[routerKind]
  return { routerKind, urls }
}

const sourceUrls = {
  'next.js': {
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Form.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Status.tsx'
  },
  'react-router': {
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-react-router6/src/Form-for-test.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-react-router6/src/Status-for-test.tsx'
  },
  'remix.js': {
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-remix2/app/routes/Form-for-test.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-remix2/app/routes/Status-for-test.tsx'
  }
} as const;
