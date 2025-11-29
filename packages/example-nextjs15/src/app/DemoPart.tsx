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
            <h2 className="title">useUrlState - demo with <Word>{routerKind}</Word></h2>
            <div className="github-link">
              <NpmLink />
              <GithubLink />
            </div>
          </div>

          <div className="urlBox">
            <UrlBox />
          </div>

          <div className="relative ml-12 place-content-center flex animate-text bg-gradient-to-r from-purple-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent w-full max-w-[15rem] font-bold select-none">Try to type something <span className='block text-[30px] leading-7 font-bold text-black animate-bounce -mb-2'>↓</span></div>

        </header>

        <section className="form-components">
          <React.Suspense>
            <ErrorBoundary fallbackRender={fallbackRender}>
              <Form className="form" searchParams={searchParams} ghLink={urls.form} />
            </ErrorBoundary>
            <ErrorBoundary
              fallbackRender={fallbackRender}>
              <Status className="status" sp={searchParams} ghLink={urls.status} />
            </ErrorBoundary>

          </React.Suspense>
        </section>
      </section>
    </>
  );
}

function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className='max-w-[30%] flex flex-col items-center gap-4'>
      <p>Something went wrong:</p>
      <pre className='whitespace-break-spaces text-red-500 max-h-[350px]'>{String(error.message || error)}</pre>
      <button onClick={resetErrorBoundary} className='p-4 bg-gray-300 rounded-md'>Try again</button>
    </div>
  );
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
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs14/src/app/Form.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs14/src/app/Status.tsx'
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
