import dynamicImport from 'next/dynamic';
import React from 'react';
import { type SoftwareApplication, type WithContext } from 'schema-dts';

import { GithubLink } from '../components/GithubLink';
import { UrlBox } from '../components/UrlBox';
import { Form } from '../Form';
import { Status } from '../Status';
import packageJson from '../../../../../package.json';

const CodeBlocks = dynamicImport(
  () => import('../components/CodeBlocksNext').then((mod) => mod.CodeBlocks),
  {
    loading: () => <div className="codeBlock-wrapper codeBlock-loader"></div>,
  },
);

const jsonLd: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'state-in-url',
  description:
    'NPM Library to store complex state in browser URL, includes hook for NextJS, hook for pure React, and low level helpers.',
  accessibilityControl: 'textual',
  accessMode: 'textual',
  author: {
    '@type': 'Person',
    name: 'asmyshlyaev177',
    identifier: 'https://github.com/asmyshlyaev177',
    url: 'https://www.linkedin.com/in/asmyshlyaev177/',
  },
  thumbnailUrl:
    'https://github.com/asmyshlyaev177/state-in-url/blob/main/assets/Demo-gif.gif',
  applicationCategory: 'State management for Web Applications',
  url: 'https://github.com/asmyshlyaev177/state-in-url',
  sameAs: 'https://github.com/asmyshlyaev177/state-in-url',
  softwareRequirements: ['JavaScript', 'Web Browser', 'npm'],
  license:
    'https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/main/LICENSE',
  softwareVersion: packageJson.version,
  releaseNotes:
    'https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/main/CHANGELOG.md',
  discussionUrl: 'https://github.com/asmyshlyaev177/state-in-url/discussions',
  isAccessibleForFree: true,
  accessibilityFeature: ['fullMouseControl', 'readingOrder', 'ARIA'],
  accessibilityHazard: 'none',
  offers: [],
  operatingSystem: 'All',
};

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
