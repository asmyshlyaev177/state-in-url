import dynamic from 'next/dynamic';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';

import '../styles.css';

import { CONTENT_LAST_MODIFIED } from '../contentDate';
import { isVercel } from '../domain';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GithubLink } from '../components/GithubLink';
import { InstallCmd } from '../components/InstallCmd';
import { LanguagePicker } from '../components/LanguagePicker';
import { Logo } from '../components/Logo';
import { NpmLink } from '../components/NpmLink';
import { localePrefix, type Locale } from '../i18n';
import type { SiteCopy } from '../i18n/copy/types';

const Footer = dynamic(
  () => import('../components/Footer').then((mod) => mod.Footer),
  { loading: () => <div className="min-h-[48px]"></div> },
);

/**
 * The page chrome — aurora, header, footer — around whatever the route renders.
 *
 * This was `template.tsx`. It had to move: a Next template receives only
 * `children`, never `params`, so it had no way to learn which language it was
 * rendering. A layout does, and `[locale]/layout.tsx` is where the locale
 * enters the tree. The visible difference is that the chrome now persists
 * across a client navigation between the three router demos instead of
 * remounting — which only ever restarted the aurora's CSS animation.
 */
export function PageShell({
  children,
  copy,
  locale,
}: {
  children: React.ReactNode;
  copy: SiteCopy;
  locale: Locale;
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
            <Link
              href={localePrefix(locale.code) || '/'}
              aria-label={copy.chrome.homeLink}
              className="flex items-center gap-3"
            >
              <Logo className="logo" copy={copy.chrome} />
              <span className="wordmark">state-in-url</span>
            </Link>
            <div className="links">
              <NpmLink copy={copy.chrome} />
              <GithubLink copy={copy.chrome} />
              <LanguagePicker
                current={locale}
                label={copy.chrome.languageLabel}
              />
            </div>
          </div>

          <Breadcrumbs copy={copy} locale={locale} />

          <h1 className="title">
            {copy.header.titleLead}{' '}
            <span className="title-url">{copy.header.titleUrl}</span>
          </h1>

          <p className="desc">
            <strong>useUrlState</strong> {copy.header.desc}
          </p>

          <ul className="facts" aria-label={copy.header.factsLabel}>
            {copy.header.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <div className="install-row">
            <InstallCmd copy={copy.chrome} />
          </div>
        </header>

        {children}
      </div>

      <Footer
        lastModified={CONTENT_LAST_MODIFIED}
        copy={copy.footer}
        locale={locale}
      />

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
