'use client'
import React from 'react';
import { usePathname } from 'next/navigation';

import { GithubLink } from './components/GithubLink';
import { UrlBox } from './components/UrlBox';
import { Form } from './Form';
import { Status } from './Status';
import { jsonLd } from './seoStuff';
import { Word } from './components/Word';



export function DemoPart({ searchParams }: { searchParams: object }) {
  const pathname = usePathname()
  const isReactRouter = !!pathname.match('react-router');

  const urls = sourceUrls[isReactRouter ? 'reactRouter' : 'next']

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="demo">
        <header className="header">
          <div className="wrapper">
            <h2 className="title">useUrlState - demo with <Word>{isReactRouter ? 'react-router' : 'Next.js'}</Word></h2>
            <div className="github-link">
              <GithubLink />
            </div>
          </div>

          <div className="urlBox">
            <UrlBox />
          </div>
        </header>

        <section className="form-components">
          <React.Suspense>
            <Form className="form" searchParams={searchParams} ghLink={urls.form} />
            <Status className="status" sp={searchParams} ghLink={urls.status} />
          </React.Suspense>
        </section>
      </section>
    </>
  );
}

const sourceUrls = {
  next: {
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/main/packages/example-nextjs14/src/app/Form.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/main/packages/example-nextjs14/src/app/Status.tsx'
  },
  reactRouter: {
    form: 'https://github.com/asmyshlyaev177/state-in-url/blob/main/packages/example-react-router6/src/Form-for-test.tsx',
    status: 'https://github.com/asmyshlyaev177/state-in-url/blob/main/packages/example-react-router6/src/Status-for-test.tsx'
  }
} as const;
