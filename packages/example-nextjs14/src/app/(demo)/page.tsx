import dynamicImport from 'next/dynamic';
import React from 'react';

import { GithubLink } from '../components/GithubLink';
import { UrlBox } from '../components/UrlBox';
import { Form } from '../Form';
import { Status } from '../Status';

const CodeBlocks = dynamicImport(
  () => import('../components/CodeBlocksNext').then((mod) => mod.CodeBlocks),
  {
    loading: () => <div className="codeBlock-wrapper codeBlock-loader"></div>,
  },
);

export const dynamic = 'force-static';

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <>
      <section className="demo">
        <header className="header">
          <div className="wrapper">
            <h2 className="title">Demo with Next.js</h2>
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
            <Form className="form" searchParams={searchParams} />
            <Status className="status" sp={searchParams} />
          </React.Suspense>
        </section>
      </section>

      <section className="codeBlock-wrapper">
        <CodeBlocks />
      </section>
    </>
  );
}
