import { expect, test } from '@playwright/test';

// Landing page only (Next.js 16 app, the Playwright baseURL).
// Runs against the production build served by `start:ci`/`start`, where
// `isProd` is true and the JSON-LD structured data is emitted.
test.describe('Landing SEO metadata & JSON-LD (landing only)', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only');

  test('emits valid JSON-LD (SoftwareApplication + FAQPage) and no bogus meta', async ({
    page,
  }) => {
    await page.goto('/');

    // One block from the root document, one from the home route's FAQ.
    const ldScripts = page.locator('script[type="application/ld+json"]');
    await expect(ldScripts).toHaveCount(2);

    const nodes = (await ldScripts.allTextContents())
      .flatMap((raw) => JSON.parse(raw))
      .filter((node) => node['@context'] === 'https://schema.org');
    const types = nodes.map((node) => node['@type']);
    expect(types).toContain('SoftwareApplication');
    expect(types).toContain('FAQPage');

    const app = nodes.find((node) => node['@type'] === 'SoftwareApplication');
    expect(app.name).toBe('state-in-url');

    // The FAQ JSON-LD must say what the page says.
    const faq = nodes.find((node) => node['@type'] === 'FAQPage');
    const questions = await page.locator('#home-faq-title ~ dl dt').allTextContents();
    expect(faq.mainEntity.map((q: { name: string }) => q.name)).toEqual(questions);

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
