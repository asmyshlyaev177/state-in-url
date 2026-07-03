import { expect, test } from '@playwright/test';

// Landing page only (Next.js 16 app, the Playwright baseURL).
// Runs against the production build served by `start:ci`/`start`, where
// `isProd` is true and the JSON-LD structured data is emitted.
test.describe('Landing SEO metadata & JSON-LD (landing only)', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only');

  test('emits exactly one valid JSON-LD block and no bogus meta', async ({
    page,
  }) => {
    await page.goto('/');

    const ldScripts = page.locator('script[type="application/ld+json"]');
    await expect(ldScripts).toHaveCount(1);

    const raw = await ldScripts.first().textContent();
    expect(raw).toBeTruthy();
    const data = JSON.parse(raw as string);
    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('SoftwareApplication');
    expect(data.name).toBe('state-in-url');

    // The old `metadata.other['script:ld+json']` rendered an invalid
    // `<meta name="script:ld+json">`; it must not come back.
    await expect(page.locator('meta[name="script:ld+json"]')).toHaveCount(0);
  });

  test('exposes core SEO metadata without duplicates', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/state-in-url/);

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveCount(1);
    expect(await description.getAttribute('content')).toBeTruthy();

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveCount(1);
    expect(await canonical.getAttribute('href')).toContain('state-in-url');

    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(1);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveCount(1);
  });
});
