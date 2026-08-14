import React from 'react';

import { SOURCE } from '../i18n';
import { copy } from '../i18n/copy/en';
import { metadata as _metadata } from '../seoStuff';
import { RootDocument } from '../shell/RootDocument';

export const viewport = {
  themeColor: '#211c17',
};

export const revalidate = 604800; // 7 days

/**
 * Root layout for the English pages, which are served unprefixed: `/`,
 * `/react-router`, `/remix`, and the Playwright fixture routes under
 * `(tests)`. `[locale]/layout.tsx` is the second root layout, for the eight
 * translations. See shell/RootDocument.tsx for why there are two.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootDocument copy={copy} locale={SOURCE}>
      {children}
    </RootDocument>
  );
}

export const metadata = _metadata;
