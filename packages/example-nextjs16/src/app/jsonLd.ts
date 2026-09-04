import { siteUrl } from './domain';
import type { FaqItem } from './i18n/copy/types';

/** FAQPage JSON-LD, built from the same items the `<Faq>` component renders. */
export function faqPageJsonLd(items: ReadonlyArray<FaqItem>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/**
 * BreadcrumbList JSON-LD for a subpage, mirroring the visible breadcrumbs
 * (`components/Breadcrumbs.tsx`). `homeHref` is `/` or `/<locale>`.
 */
export function breadcrumbListJsonLd({
  homeName,
  homeHref,
  name,
  path,
}: {
  homeName: string;
  homeHref: string;
  name: string;
  path: string;
}) {
  const prefix = homeHref === '/' ? '' : homeHref;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeName,
        item: `${siteUrl}${prefix}` || siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: `${siteUrl}${prefix}${path}`,
      },
    ],
  };
}

/** Serialised for a `<script type="application/ld+json">`; `<` escaped so copy can never terminate the element. */
export const jsonLdScript = (nodes: unknown[]) =>
  JSON.stringify(nodes).replace(/</g, '\\u003c');
