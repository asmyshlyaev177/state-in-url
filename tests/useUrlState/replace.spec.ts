import { expect, test } from '@playwright/test';

import { toHaveUrl, ignoredErrors } from '../testUtils';

const urls = [
  '/test-ssr-sp',
  'http://example-nextjs15.localhost:1355/test-ssr-sp',
  'http://example-nextjs16.localhost:1355/test-ssr-sp',
  'http://example-react-router6.localhost:1355',
  'http://example-remix2.localhost:1355',
  'http://example-react-router7.localhost:1355',
  'http://example-astro.localhost:1355',
];

for (const url of urls) {
  test(`replace arg === true ${url}`, async ({ page }) => {
    const errorLogs: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        errorLogs.push(JSON.stringify(message.text()));
      }
    })

    await page.goto(`${url}?replace=false`);
    await page.goto(`${url}?replace=true`);
    await page.waitForSelector('button[name="Reload page"]');

    const name = 'My Name';
    await page.getByLabel('name').focus();
    await page.getByLabel('name').pressSequentially(name, { delay: 150 });

    const expectedUrl = `?replace=true&name=%27My+Name%27`;
    await toHaveUrl(page, `${url}${expectedUrl}`);

    // click back
    await page.goBack();

    await toHaveUrl(page, `${url}?replace=false`);

    // click forward
    await page.goForward();
    await toHaveUrl(page, `${url}${expectedUrl}`);

    expect(errorLogs.filter(err => ignoredErrors.includes(err))).toHaveLength(0);
  });
}


for (const url of urls) {
  test(`replace arg === false ${url}`, async ({ page, baseURL }) => {
    const errorLogs: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        errorLogs.push(JSON.stringify(message.text()));
      }
    });
    await page.goto(`${url}?replace=true`);
    await page.goto(`${url}?replace=false`);
    await page.waitForSelector('button[name="Reload page"]');

    const name = 'My Name';
    await page.getByLabel('name').focus();
    await page.getByLabel('name').pressSequentially(name, { delay: 5 });

    const expectedUrl = `?replace=false&name=%27My+Name%27`;
    await toHaveUrl(page, `${url}${expectedUrl}`);

    // click back
    await page.goBack();

    expect(await page.url().length).toBeLessThan(`${baseURL}${url}${expectedUrl}`.length)

    // click forward
    await page.goForward();
    await toHaveUrl(page, `${url}${expectedUrl}`);

    expect(errorLogs.filter(err => ignoredErrors.includes(err))).toHaveLength(0);
  });
}

  for (const url of urls) {
    test(`replace arg true by default ${url}`, async ({ page }) => {

    const errorLogs: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        errorLogs.push(JSON.stringify(message.text()));
      }
    });

    await page.goto(`${url}?replace=true`);
    await page.goto(`${url}`);
    await page.waitForSelector('button[name="Reload page"]');

    const name = 'My Name';
    await page.getByLabel('name').focus();
    await page.getByLabel('name').pressSequentially(name, { delay: 5 });

    const expectedUrl = `?name=%27My+Name%27`;
    await toHaveUrl(page, `${url}${expectedUrl}`);

    // click back
    await page.goBack();

    await toHaveUrl(page, `${url}?replace=true`);

    // click forward
    await page.goForward();
    await toHaveUrl(page, `${url}${expectedUrl}`);

    expect(errorLogs.filter(err => ignoredErrors.includes(err))).toHaveLength(0);
});
}

// useUrlState with no `replace` option: the race-condition page passes only `searchParams`.
const defaultUrls = [
  'http://example-nextjs15.localhost:1355/useHook-race-condition',
  'http://example-nextjs16.localhost:1355/useHook-race-condition',
  'http://example-react-router6.localhost:1355/useHook-race-condition',
  'http://example-remix2.localhost:1355/useHook-race-condition',
  'http://example-react-router7.localhost:1355/useHook-race-condition',
  'http://example-astro.localhost:1355/useHook-race-condition',
];

for (const url of defaultUrls) {
  test(`replace by default ${url}`, async ({ page }) => {
    await page.goto(url);
    await page.waitForSelector('[data-testid="showForm"]');
    const historyLength = await page.evaluate(() => history.length);
    const valueInput = page.getByTestId('valueInput').first();

    await valueInput.fill('42');
    await toHaveUrl(page, `${url}?value=42`);
    await valueInput.fill('43');
    await toHaveUrl(page, `${url}?value=43`);

    expect(await page.evaluate(() => history.length)).toBe(historyLength);
  });
}
