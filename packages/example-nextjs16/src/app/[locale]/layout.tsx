import { notFound } from 'next/navigation';
import React from 'react';

import { localeFromParam, LOCALES } from '../i18n';
import { copyFor } from '../i18n/copy';
import { RootDocument } from '../shell/RootDocument';

export const viewport = {
  themeColor: '#211c17',
};

export const revalidate = 604800; // 7 days

/**
 * Root layout for the eight translations, at `/ja`, `/zh-cn`, and so on.
 *
 * The second of two root layouts — `(en)/layout.tsx` is the other, for the
 * unprefixed English pages. Only a root layout may render `<html>`, and only
 * the layout owning a dynamic segment is given its `params`, so a locale-aware
 * `<html lang>` needs the locale segment above the layout. Route groups are
 * the supported way to have two roots; shell/RootDocument.tsx is the shared
 * body so they cannot drift.
 *
 * `dynamicParams = false` turns an unknown first segment into a 404 rather
 * than a rendered page: without it `/anything` would match this route and
 * render an English-fallback copy of the homepage under a made-up language.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale: locale.dir }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: dir } = await params;
  const locale = localeFromParam(dir);
  if (!locale) notFound();

  return (
    <RootDocument copy={copyFor(locale.code)} locale={locale}>
      {children}
    </RootDocument>
  );
}
