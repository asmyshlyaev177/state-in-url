import { expect, test } from '@playwright/test';

// A prerendered page is built once, so its island is handed an empty
// searchParams and the server HTML shows the defaults. The hook must still
// pick the URL up after hydration, and must not trip a hydration mismatch
// doing it (server and client both render the defaults first).
const url = 'http://example-astro.localhost:1355/prerendered';

test.describe('prerendered page', () => {
  test('reads the URL after hydration, without a hydration error', async ({
    page,
  }) => {
    const errorLogs: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errorLogs.push(message.text());
    });

    await page.goto(`${url}?name=%27Alice%27`);

    await expect(page.getByTestId('parsed-usp')).toContainText(
      '"name": "Alice"',
    );
    expect(errorLogs).toHaveLength(0);
  });

  test.describe('without JavaScript', () => {
    test.use({ javaScriptEnabled: false });

    test('can only show the defaults', async ({ page }) => {
      await page.goto(`${url}?name=%27Alice%27`);

      await expect(page.getByTestId('parsed-usp')).toContainText('"name": ""');
    });
  });
});
