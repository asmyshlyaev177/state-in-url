import { notFound } from 'next/navigation';

import { localeFromParam } from '../../../i18n';
import { copyFor } from '../../../i18n/copy';
import {
  breadcrumbJsonLd,
  faqJsonLd,
  VsNuqsPage,
} from '../../../pages/VsNuqsPage';
import { localeMetadata } from '../../../seoStuff';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return localeMetadata({ localeDir: locale, path: '/vs/nuqs' });
}

export default async function VsNuqs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: dir } = await params;
  const locale = localeFromParam(dir);
  if (!locale) notFound();

  const copy = copyFor(locale.code);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // `<` escaped so copy can never terminate the script element.
          __html: JSON.stringify([
            faqJsonLd(copy),
            breadcrumbJsonLd(copy, `/${dir}`),
          ]).replace(/</g, '\\u003c'),
        }}
      />
      <VsNuqsPage copy={copy} />
    </>
  );
}
