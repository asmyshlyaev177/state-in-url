import { MetadataRoute } from 'next';

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
    sitemap: 'https://state-in-url-asmyshlyaev177.vercel.app/sitemap.xml',
  };
}
