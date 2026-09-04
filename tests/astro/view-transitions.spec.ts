import { expect, type Page, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

// Astro's <ClientRouter /> swaps the document in place: islands unmount and
// mount, Astro writes the URL with history.pushState, and useSharedState still
// holds the previous page's value when the new islands render. The hook has to
// end up on what the URL says, every time.
const url = 'http://example-astro.localhost:1355/view-transitions';

type Marked = { __marker?: true };
const markDocument = (page: Page) =>
  page.evaluate(() => {
    (window as unknown as Marked).__marker = true;
  });
const documentMarked = (page: Page) =>
  page.evaluate(() => (window as unknown as Marked).__marker);

test.describe('view transitions', () => {
  test('state follows the URL across client-side navigation', async ({
    page,
  }) => {
    const errorLogs: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errorLogs.push(message.text());
    });

    await page.goto(`${url}/1?perPage=30`);
    await page.waitForSelector('[data-testid="link"]');
    await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
    await markDocument(page);

    // a link without the query string: the new page's islands must not keep 30
    await page.getByTestId('link').click();
    await toHaveUrl(page, `${url}/2`);
    await expect(page.getByTestId('select').nth(0)).toHaveValue('10');
    await expect(page.getByTestId('select').nth(1)).toHaveValue('10');
    // proves the swap was in-document, not a full load
    expect(await documentMarked(page)).toBe(true);

    // freshly mounted islands still share one state
    await page.getByTestId('select').nth(1).selectOption('20');
    await toHaveUrl(page, `${url}/2?perPage=20`);
    await expect(page.getByTestId('select').nth(0)).toHaveValue('20');

    // the hook's own entry (pushState(null)) and Astro's entries interleave
    await page.goBack();
    await toHaveUrl(page, `${url}/2`);
    await expect(page.getByTestId('select').nth(0)).toHaveValue('10');

    await page.goBack();
    await toHaveUrl(page, `${url}/1?perPage=30`);
    await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
    await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

    await page.goForward();
    await toHaveUrl(page, `${url}/2`);
    await expect(page.getByTestId('select').nth(0)).toHaveValue('10');

    expect(await documentMarked(page)).toBe(true);
    expect(errorLogs).toHaveLength(0);
  });

  test('a link that carries the query string keeps the state', async ({
    page,
  }) => {
    await page.goto(`${url}/1?perPage=30`);
    await page.waitForSelector('[data-testid="link-sp"]');

    await page.getByTestId('link-sp').click();
    await toHaveUrl(page, `${url}/2?perPage=30`);
    await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
    await expect(page.getByTestId('select').nth(1)).toHaveValue('30');
  });
});
