import { MetadataRoute } from 'next';

import { siteUrl } from './domain';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/test/',
        '/test-ssr/',
        '/test-ssr-sp/',
        '/test-use-client/',
        '/react-useSharedState/',
        '/useSharedState/',
        '/useUrlState/',
        '/useUrlState/1/',
        '/useUrlState/2/',
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
