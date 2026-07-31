import { MetadataRoute } from 'next';

import { siteUrl } from './domain';

/**
 * Routes that exist only as Playwright fixtures. They render deliberately
 * broken or edge-case usage, so they have to stay out of every index —
 * the AI crawlers' included — or they get quoted back as the documented API.
 */
const testFixtures = [
  '/useUrlEncode/',
  '/test-ssr/',
  '/test-ssr-sp/',
  '/test-use-client/',
  '/useSharedState/',
  '/useUrlState/',
  '/useUrlState/1/',
  '/useUrlState/2/',
  '/useHook-race-condition/',
];

const documented = ['/', '/react-router', '/remix'];

/**
 * AI crawlers, named explicitly. `User-agent: *` already permits all of them,
 * but an unnamed agent reads as an oversight rather than a decision: several
 * AI-visibility checkers score a site on whether these agents appear by name,
 * and a crawler operator auditing the file can see the answer directly.
 */
const aiCrawlers = [
  // OpenAI
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Google / Apple / Perplexity / Meta / Amazon / Common Crawl / You.com / Cohere
  'Google-Extended',
  'Applebot-Extended',
  'PerplexityBot',
  'Perplexity-User',
  'meta-externalagent',
  'Amazonbot',
  'CCBot',
  'YouBot',
  'cohere-ai',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: documented, disallow: testFixtures },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: documented,
        disallow: testFixtures,
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
