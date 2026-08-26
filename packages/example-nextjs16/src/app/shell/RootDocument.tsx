import { GoogleAnalytics } from '@next/third-parties/google';
import { Archivo, DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';

import { isProd } from '../../../../../consts';
import { CONTENT_LAST_MODIFIED } from '../contentDate';
import { isVercel, siteUrl } from '../domain';
import type { Locale } from '../i18n';
import type { SiteCopy } from '../i18n/copy/types';
import { jsonLd } from '../seoStuff';
import { PageShell } from './PageShell';

/**
 * The `<html>` document, shared by the two root layouts.
 *
 * There are two because English is served unprefixed and the translations are
 * not: `(en)/layout.tsx` owns `/`, `/react-router` and `/remix`, and
 * `[locale]/layout.tsx` owns `/ja/...` and its seven siblings. App Router
 * gives `params` only to the layout that owns the dynamic segment, and only a
 * root layout may render `<html>` — so a single root layout could never know
 * which language it was rendering. Route groups are the supported way to have
 * two, and this component is what keeps them from drifting apart.
 */
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  display: 'swap',
});

export function RootDocument({
  children,
  copy,
  locale,
}: {
  children: React.ReactNode;
  copy: SiteCopy;
  locale: Locale;
}) {
  return (
    <html lang={locale.code} data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <meta
          name="google-site-verification"
          content="NKunqTB4Sd_Bp6zoIbzKvw_WoGB-v2-MXxC5mbKJKJw"
        />
        {/* The legacy `name="title"` meta, which has always carried the site
            title rather than the page one. */}
        <meta name="title" content={copy.meta.home.title}></meta>
        {isProd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}

        {/* The `text/markdown` alternates — this page's own `.md` mirror and
            the site-wide llms.txt, in that order — come from Next's metadata
            (`markdownAlternates` in seoStuff.ts). Declaring one here too
            would put it ahead of them in an order nothing guarantees. */}
        <meta name="llms-txt" content={`${siteUrl}/llms.txt`} />
        <meta name="last-modified" content={CONTENT_LAST_MODIFIED} />
        <link rel="sitemap" type="application/xml" href={`${siteUrl}/sitemap.xml`} />
      </head>
      <body
        className={`${archivo.variable} ${dmSans.variable} ${geistMono.variable} font-sans`}
      >
        <PageShell copy={copy} locale={locale}>
          {children}
        </PageShell>
        {isProd && isVercel ? <GoogleAnalytics gaId="G-5N8Y565DXK" /> : null}
      </body>
    </html>
  );
}
