import { expect, test } from '@playwright/test';

/**
 * A prerendered page must not carry the demo pages' short `s-maxage`.
 *
 * `cdnCache` in next.config.mjs is written for the three demo routes, which
 * render from the query string. Next marks those dynamic and overwrites the
 * header with its own `no-store`, so it never reaches a client. On a
 * prerendered route it survives — and on a deployment that turns `<Link>`
 * prefetch into a hot loop: Vercel's CDN serves the entry with an `age` well
 * past `s-maxage=600`, the client never receives a response it considers
 * fresh, and it revalidates for as long as the link is on screen. Measured on
 * production 2026-09-03: ten seconds with the "full comparison" link parked in
 * the viewport cost 262 `/vs/nuqs?_rsc=` requests.
 *
 * Asserted against the served response rather than by reading the config, so
 * it holds whatever route ends up prerendered. The loop itself needs a CDN and
 * so cannot be reproduced here; the header that causes it can.
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

      // Next derives its own from the layout's `revalidate` (7 days). Anything
      // shorter than a day is the demo-page header leaking onto a static route.
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
