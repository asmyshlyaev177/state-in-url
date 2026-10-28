import { expect, type Page, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = [
  '/test-ssr',
  '/test-use-client',
  '/test-ssr-sp',
  'http://example-nextjs15.localhost:1355/test-ssr',
  'http://example-nextjs15.localhost:1355/test-use-client',
  'http://example-nextjs15.localhost:1355/test-ssr-sp',
  'http://example-nextjs16.localhost:1355/test-ssr',
  'http://example-nextjs16.localhost:1355/test-use-client',
  'http://example-nextjs16.localhost:1355/test-ssr-sp',
  'http://example-react-router6.localhost:1355',
  'http://example-remix2.localhost:1355',
  'http://example-react-router7.localhost:1355',
  'http://example-astro.localhost:1355',
];

// An emoji keyboard emits each symbol with a variation selector, which the
// escape must carry through untouched. The timer clock is the Date marker, the
// hooked arrow is the escape marker itself; both together, only the first decides.
const typed = ['⏲️ 5 min', '⏲️5min', '↪️ next', '↪️next', '↪️⏲️ both', '↪️⏲️both'];

// the contract: a string opening with a marker is written as quote, escape, string, quote
const escapedUrl = (name: string) =>
  `?${new URLSearchParams({ name: `'↪${name}'` }).toString()}`;

// a URL written before the escape existed holds a lone ↪ and must read back as typed
const legacy = { name: '↪ legacy', url: '?name=%27%E2%86%AA+legacy%27' };

// fill, not key presses: a variation selector has no key to press, and a
// fill before hydration never reaches React, so retry until the input holds it
const fillName = async (page: Page, name: string) => {
  await expect(async () => {
    await page.getByLabel('name').fill('');
    await page.getByLabel('name').fill(name);
    await expect(page.getByLabel('name')).toHaveValue(name, { timeout: 1000 });
  }).toPass({ timeout: 10_000 });
};

for (const url of urls) {
  test(`string starting with a reserved marker survives the URL ${url}`, async ({ page }) => {
    await page.goto(url);
    await page.waitForSelector('button[name="Reload page"]');

    for (const name of typed) {
      const expectedUrl = escapedUrl(name);
      await fillName(page, name);
      await toHaveUrl(page, `${url}${expectedUrl}`);

      await page.getByRole('button', { name: 'Reload page' }).click();
      await page.waitForSelector('button[name="Reload page"]');

      await expect(page.getByLabel('name')).toHaveValue(name);
      await expect(page.getByTestId('parsed')).toContainText(`"name": "${name}"`);
      await toHaveUrl(page, `${url}${expectedUrl}`);
    }

    await page.goto(`${url}${legacy.url}`);
    await page.waitForSelector('button[name="Reload page"]');

    await expect(page.getByLabel('name')).toHaveValue(legacy.name);
    await expect(page.getByTestId('parsed')).toContainText(`"name": "${legacy.name}"`);
    await toHaveUrl(page, `${url}${legacy.url}`);
  });
}
