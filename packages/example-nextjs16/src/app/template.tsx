import dynamic from 'next/dynamic';
import Script from 'next/script';
import React from 'react';

import './styles.css';

import { isVercel } from './domain';

import { CONTENT_LAST_MODIFIED } from './contentDate';
import { Logo } from './components/Logo';
import { GithubLink } from './components/GithubLink';
import { InstallCmd } from './components/InstallCmd';
import { NpmLink } from './components/NpmLink';

const Footer = dynamic(
  () => import('./components/Footer').then((mod) => mod.Footer),
  { loading: () => <div className="min-h-[48px]"></div> },
);

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="page-main">
      <div className="wrapper relative">
        <div className="aurora" aria-hidden="true">
          <span className="aurora-blob aurora-a"></span>
          <span className="aurora-blob aurora-b"></span>
          <span className="aurora-blob aurora-c"></span>
        </div>

        <header className="header">
          <div className="branding">
            <Logo className="logo" />
            <span className="wordmark">state-in-url</span>
            <div className="links">
              <NpmLink />
              <GithubLink />
            </div>
          </div>

          <h1 className="title">
            Typed state, living in <span className="title-url">the URL</span>
          </h1>

          <p className="desc">
            <strong>useUrlState</strong> is React state that writes itself to
            the query string. Objects, arrays and dates keep their types, every
            state is a shareable link, and it survives reloads — no providers,
            no boilerplate.
          </p>

          <ul className="facts" aria-label="Library facts">
            <li>~2&thinsp;KB gzipped</li>
            <li>zero dependencies</li>
            <li>TypeScript-first</li>
            <li>Next.js / react-router / Remix</li>
            <li>MIT</li>
          </ul>

          <div className="install-row">
            <InstallCmd />
          </div>
        </header>

        {children}
      </div>

      <Footer lastModified={CONTENT_LAST_MODIFIED} />

      {/* Shared across my sites — one implementation, served from the
          portfolio. Shows itself only while the GitHub "Available for hire"
          toggle is on. `theme="dark"` because this page has no light mode to
          follow; the palette comes from the token overrides in styles.css.

          Deployed builds only, like the analytics script in layout.tsx: reading
          that toggle calls api.github.com unauthenticated, which 403s once the
          runner's IP is rate-limited and fails specs asserting no console
          errors. */}
      {isVercel && (
        <>
          <for-hire-badge theme="dark"></for-hire-badge>
          <Script
            src="https://asmyshlyaev177.dev/for-hire-badge.js"
            strategy="lazyOnload"
          />
        </>
      )}
    </main>
  );
}
