import { notFound } from 'next/navigation';

import { localeFromParam } from '../../i18n';
import { copyFor } from '../../i18n/copy';
import { breadcrumbListJsonLd, faqPageJsonLd, jsonLdScript } from '../../jsonLd';
import { NextjsPage } from '../../pages/NextjsPage';
import { localeMetadata } from '../../seoStuff';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return localeMetadata({ localeDir: locale, path: '/nextjs' });
}

export default async function Nextjs({
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
          __html: jsonLdScript([
            faqPageJsonLd(copy.nextjs.faq.items),
            breadcrumbListJsonLd({
              homeName: copy.chrome.home,
              homeHref: `/${dir}`,
              name: copy.nextjs.crumb,
              path: '/nextjs',
            }),
          ]),
        }}
      />
      <NextjsPage copy={copy} homeHref={`/${dir}`} vsHref={`/${dir}/vs/nuqs`} />
    </>
  );
}
