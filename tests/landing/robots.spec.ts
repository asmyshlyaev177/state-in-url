import fs from 'node:fs';
import path from 'node:path';

import { expect, test } from '@playwright/test';

/**
 * Fixture routes must stay out of every index — they render deliberately broken
 * and edge-case usage, and get quoted back as the documented API otherwise.
 *
 * The route list is read off disk, not restated here: adding a fixture and
 * forgetting robots.txt is the failure this exists to catch, and a hardcoded
 * list would miss it by construction.
 */
test.describe('robots.txt (landing only)', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only');

  const fixtureRoutes = fs
    .readdirSync(
      path.join(process.cwd(), 'packages/example-nextjs16/src/app/(tests)'),
      { withFileTypes: true },
    )
    .filter((entry) => entry.isDirectory())
    .map((entry) => `/${entry.name}`);

  const documented = ['/', '/react-router', '/remix'];

  const disallowedPrefixes = async (request: {
    get: (url: string) => Promise<{ text: () => Promise<string> }>;
  }) => {
    const robots = await (await request.get('/robots.txt')).text();
    return robots
      .split('\n')
      .filter((line) => line.startsWith('Disallow:'))
      .map((line) => line.slice('Disallow:'.length).trim())
      .filter(Boolean);
  };

  test('every fixture route is disallowed', async ({ request }) => {
    expect(fixtureRoutes.length).toBeGreaterThan(0);
    const prefixes = await disallowedPrefixes(request);

    for (const route of fixtureRoutes) {
      expect(
        prefixes.some((prefix) => route.startsWith(prefix)),
        `${route} should be covered by a Disallow prefix`,
      ).toBe(true);
    }
  });

  test('no documented route is caught by a fixture prefix', async ({
    request,
  }) => {
    // prefixes are literal (RFC 9309 §2.2.2), so a careless one takes real
    // pages down with it
    const prefixes = await disallowedPrefixes(request);

    for (const route of documented) {
      expect(
        prefixes.some((prefix) => route.startsWith(prefix)),
        `${route} should not be disallowed`,
      ).toBe(false);
    }
  });

  test('the sitemap lists documented routes only', async ({ request }) => {
    const sitemap = await (await request.get('/sitemap.xml')).text();

    for (const route of fixtureRoutes) {
      expect(sitemap, `${route} should not be in the sitemap`).not.toContain(
        `${route}<`,
      );
    }
    for (const route of documented.filter((r) => r !== '/')) {
      expect(sitemap).toContain(route);
    }
  });
});
