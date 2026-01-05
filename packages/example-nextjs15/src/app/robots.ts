import { MetadataRoute } from 'next';

import { siteUrl } from './domain';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/react-router', '/remix'],
      disallow: [
        '/useUrlEncode/',
        '/test-ssr/',
        '/test-ssr-sp/',
        '/test-use-client/',
        '/useSharedState/',
        '/useUrlState/',
        '/useUrlState/1/',
        '/useUrlState/2/',
        '/useHook-race-condition/'
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
