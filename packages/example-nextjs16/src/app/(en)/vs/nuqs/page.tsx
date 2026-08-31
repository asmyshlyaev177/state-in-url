import { copy } from '../../../i18n/copy/en';
import {
  breadcrumbJsonLd,
  faqJsonLd,
  VsNuqsPage,
} from '../../../pages/VsNuqsPage';
import { pageMetadata } from '../../../seoStuff';

export const metadata = pageMetadata({
  path: '/vs/nuqs',
  title: copy.meta.vsNuqs.title,
  description: copy.meta.vsNuqs.description,
});

export default async function VsNuqs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // `<` escaped so copy can never terminate the script element.
          __html: JSON.stringify([
            faqJsonLd(copy),
            breadcrumbJsonLd(copy, '/'),
          ]).replace(/</g, '\\u003c'),
        }}
      />
      <VsNuqsPage copy={copy} />
    </>
  );
}
