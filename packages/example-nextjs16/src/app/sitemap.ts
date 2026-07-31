import { MetadataRoute } from 'next';

import { CONTENT_LAST_MODIFIED } from './contentDate';
import { siteUrl } from './domain';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = CONTENT_LAST_MODIFIED;

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      // The homepage is the Next.js demo plus the full API documentation; the
      // other two are the same demo rebuilt on a different router. Priority is
      // relative within a sitemap, so giving all three a 1 said nothing.
      priority: 1,
    },
    {
      url: `${siteUrl}/react-router`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/remix`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
