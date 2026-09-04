import { copy } from '../../i18n/copy/en';
import { breadcrumbListJsonLd, faqPageJsonLd, jsonLdScript } from '../../jsonLd';
import { NextjsPage } from '../../pages/NextjsPage';
import { pageMetadata } from '../../seoStuff';

export const metadata = pageMetadata({
  path: '/nextjs',
  title: copy.meta.nextjs.title,
  description: copy.meta.nextjs.description,
});

export default async function Nextjs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([
            faqPageJsonLd(copy.nextjs.faq.items),
            breadcrumbListJsonLd({
              homeName: copy.chrome.home,
              homeHref: '/',
              name: copy.nextjs.crumb,
              path: '/nextjs',
            }),
          ]),
        }}
      />
      <NextjsPage copy={copy} homeHref="/" vsHref="/vs/nuqs" />
    </>
  );
}
