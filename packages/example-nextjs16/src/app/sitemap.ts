import { MetadataRoute } from 'next';

import { CONTENT_LAST_MODIFIED } from './contentDate';
import { siteUrl } from './domain';
import {
  INDEXED_LOCALES,
  languageAlternates,
  localePrefix,
  PAGES,
} from './i18n';

/**
 * Every public page, in every indexed language — an unindexed locale is
 * `noindex` and belongs in neither the list nor the clusters.
 *
 * Generated from the locale table rather than listed, because this file and
 * robots.txt and next.config.mjs's `headers()` all need the same set and a
 * hand-kept list of 27 URLs would drift the first time a language was added.
 *
 * Each entry carries the full `alternates.languages` cluster, which Next
 * renders as `<xhtml:link rel="alternate" hreflang>`. Without it the eight
 * translations look like near-duplicates of the English pages rather than
 * alternates of them.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = CONTENT_LAST_MODIFIED;

  // The homepage is the Next.js demo plus the full API documentation; the
  // others are the same demo rebuilt on a different framework. Priority is
  // relative within a sitemap, so giving them all a 1 said nothing.
  const priorityOf = (path: string) => (path === '' ? 1 : 0.8);

  return INDEXED_LOCALES.flatMap((locale) =>
    PAGES.map((path) => ({
      url: `${siteUrl}${localePrefix(locale.code)}${path}` || siteUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      // A translation is not more important than its source, and the English
      // pages are the ones that are actually written rather than generated.
      priority:
        locale.code === 'en' ? priorityOf(path) : priorityOf(path) * 0.8,
      alternates: { languages: languageAlternates(siteUrl, path) },
    })),
  );
}
