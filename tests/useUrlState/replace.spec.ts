import { expect, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = [
  '/test-ssr-sp',
  'http://localhost:3001/test-ssr-sp',
  'http://localhost:5181',
  'http://localhost:5182',
];

for (const url of urls) {
  test(`replace arg === true ${url}`, async ({ page }) => {
    const errorLogs: unknown[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        errorLogs.push(message.text());
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

    expect(errorLogs).toHaveLength(0);
  });
}


for (const url of urls) {
  test(`replace arg === false ${url}`, async ({ page, baseURL }) => {
    const errorLogs: unknown[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        errorLogs.push(message.text());
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

    expect(errorLogs).toHaveLength(0);
  });
}

  for (const url of urls) {
    test(`replace arg true by default ${url}`, async ({ page }) => {

    const errorLogs: unknown[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        errorLogs.push(message.text());
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

    expect(errorLogs).toHaveLength(0);
});
}
