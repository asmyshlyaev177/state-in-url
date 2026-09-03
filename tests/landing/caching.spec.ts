import { expect, test } from '@playwright/test';

/**
 * A prerendered page must not carry the demo pages' short `s-maxage`.
 *
 * `cdnCache` in next.config.mjs is written for the dynamic demo routes, where
 * Next overwrites it with `no-store`. On a prerendered route it survives, and
 * a deployment then serves the entry at an `age` past `s-maxage=600` — the
 * client never sees a fresh response and `<Link>` prefetch revalidates for as
 * long as the link is on screen, measured at 262 requests in ten seconds.
 *
 * Asserted against the served response, not the config, so it holds for
 * whatever route ends up prerendered. The loop needs a CDN and cannot be
 * reproduced here; the header that causes it can.
 */
test.describe('cache headers (landing only)', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only');

  const prerendered = ['/vs/nuqs', '/ja/vs/nuqs'];

  for (const path of prerendered) {
    test(`${path} does not outlive its own s-maxage`, async ({ request }) => {
      const response = await request.get(path);
      expect(response.status()).toBe(200);

      const cacheControl = response.headers()['cache-control'] ?? '';
      const sMaxAge = /s-maxage=(\d+)/.exec(cacheControl);

      // Next derives its own from the layout's `revalidate` (7 days). Under a
      // day means the demo-page header leaked onto a static route.
      const A_DAY = 86_400;
      expect(
        sMaxAge ? Number(sMaxAge[1]) : Infinity,
        `${path} is prerendered; a short s-maxage here makes every prefetch revalidate`,
      ).toBeGreaterThanOrEqual(A_DAY);
    });
  }

  /**
   * Nothing on this site prefetches — see `components/Link.tsx`. A `?_rsc=`
   * request during an ordinary read means a link went in as `next/link`
   * directly, which is how the loop above gets back in.
   */
  test('reading the page prefetches nothing', async ({ page }) => {
    const prefetches: string[] = [];
    page.on('request', (request) => {
      if (request.url().includes('_rsc=')) prefetches.push(request.url());
    });

    await page.goto('/');
    await page.locator('a[href="/vs/nuqs"]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(3_000);

    // Open the language panel too: its eight links are the largest single
    // group on the page, and they only mount once it is expanded.
    await page.locator('details summary').first().click();
    await page.waitForTimeout(3_000);

    expect(prefetches, 'a link is bypassing components/Link.tsx').toEqual([]);
  });
});
