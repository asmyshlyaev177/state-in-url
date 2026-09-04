'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

import { UrlBox } from './components/UrlBox';
import { Form } from './Form';
import { Status } from './Status';
import { Word } from './components/Word';
import type { ErrorsCopy, SiteCopy } from './i18n/copy/types';

export function DemoPart({
  searchParams,
  copy,
}: {
  searchParams: object;
  copy: SiteCopy;
}) {
  const pathname = usePathname()

  const { routerKind, urls } = getUrls(pathname)

  return (
    <>
      <section className="demo">
        <header className="header">
          <div className="wrapper">
            <h2 className="title">{copy.demo.titleLead} <Word>{routerKind}</Word></h2>
          </div>

          <div className="urlBox">
            <UrlBox initialUrl={spToUrl(searchParams)} copy={copy.chrome} />
          </div>

          <p className="demo-hint">{copy.demo.hint} <span className="demo-hint-arrow" aria-hidden="true"><DownArrow /></span></p>

        </header>

        <section className="form-components">
            <ErrorBoundary fallbackRender={(props) => fallbackRender(props, copy.errors)}>
              <Form className="form" searchParams={searchParams} ghLink={urls.form} copy={copy} />
            </ErrorBoundary>
            <ErrorBoundary
              fallbackRender={(props) => fallbackRender(props, copy.errors)}>
              <Status className="status" sp={searchParams} ghLink={urls.status} copy={copy} />
            </ErrorBoundary>

        </section>
      </section>
    </>
  );
}

/** Stroked rather than the `↓` glyph: the weight is ours to set, not the font's. */
const DownArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3.5v15" />
    <path d="M5 12l7 7 7-7" />
  </svg>
);

function fallbackRender({ error, resetErrorBoundary }: FallbackProps, copy: ErrorsCopy) {
  return (
    <div role="alert" className='max-w-[30%] flex flex-col items-center gap-4'>
      <p>{copy.boundaryTitle}</p>
      <pre className='whitespace-break-spaces text-red-500 max-h-[350px]'>{error?.message || copy.boundaryFallback}</pre>
      <button onClick={resetErrorBoundary} className='p-4 bg-brand-dim rounded-md text-ink'>{copy.retry}</button>
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
  else if (pathname.includes('/astro')) routerKind = 'astro';
  else routerKind = 'next.js';
  const urls = sourceUrls[routerKind]
  return { routerKind, urls }
}

const sourceUrls = {
  'next.js': {
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs16/src/app/Form.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs16/src/app/Status.tsx'
  },
  'react-router': {
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-react-router6/src/Form-for-test.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-react-router6/src/Status-for-test.tsx'
  },
  'remix.js': {
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-remix2/app/routes/Form-for-test.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-remix2/app/routes/Status-for-test.tsx'
  },
  astro: {
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-astro/src/components/Form-for-test.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-astro/src/components/Status-for-test.tsx'
  }
} as const;
