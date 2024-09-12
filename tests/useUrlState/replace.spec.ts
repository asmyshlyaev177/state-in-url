import { expect, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = ['/test-ssr-sp', 'http://localhost:3001/test-ssr-sp'];

test('replace arg === true', async ({ page }) => {
  for (const url of urls) {
    const errorLogs: unknown[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        errorLogs.push(message.text());
      }
    });

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
  }
});

test('replace arg === false', async ({ page }) => {
  for (const url of urls) {
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
    await page.getByLabel('name').pressSequentially(name, { delay: 150 });

    const expectedUrl = `?replace=false&name=%27My+Name%27`;
    await toHaveUrl(page, `${url}${expectedUrl}`);

    // click back
    await page.goBack();

    await toHaveUrl(page, `${url}?replace=false`);

    // click forward
    await page.goForward();
    await toHaveUrl(page, `${url}${expectedUrl}`);

    expect(errorLogs).toHaveLength(0);
  }
});

test('replace arg true by default', async ({ page }) => {
  for (const url of urls) {
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
    await page.getByLabel('name').pressSequentially(name, { delay: 150 });

    const expectedUrl = `?name=%27My+Name%27`;
    await toHaveUrl(page, `${url}${expectedUrl}`);

    // click back
    await page.goBack();

    await toHaveUrl(page, `${url}?replace=true`);

    // click forward
    await page.goForward();
    await toHaveUrl(page, `${url}${expectedUrl}`);

    expect(errorLogs).toHaveLength(0);
  }
});
