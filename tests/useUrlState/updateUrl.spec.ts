import { expect, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = ['/test-ssr', '/test-use-client', '/test-ssr-sp'];

test('sync', async ({ page }) => {
  for (const url of urls) {
    await page.goto(url);
    await page.waitForSelector('button[name="Reload page"]');

    await page.getByLabel('name').focus();
    await page.getByLabel('name').pressSequentially('My Name', { delay: 150 });
    await page.getByText('React.js').click();

    const expectedText = `{
      "name": "My Name",
      "agree to terms": false,
      "tags": [
        {
          "id": "1",
          "value": {
            "text": "React.js",
            "time": "2024-07-17T04:53:17.000Z"
        }
        }
      ]
    }`;

    if (url === urls[1]) {
      // syncing state but not url
      await page.waitForTimeout(500);
    }

    await toHaveUrl(page, url, true);

    await expect(page.getByTestId('parsed')).toHaveText(expectedText);

    // sync url
    await page.getByTestId('sync-empty').click();

    const expectedUrl = `?name=%E2%97%96My%2520Name&tags=%5B%7B%27id%27%3A%27%E2%97%961%27%2C%27value%27%3A%7B%27text%27%3A%27%E2%97%96React.js%27%2C%27time%27%3A%27%E2%97%962024-07-17T04%253A53%253A17.000Z%27%7D%7D%5D`;
    await toHaveUrl(page, `${url}${expectedUrl}`, true);

    await expect(page.getByTestId('parsed')).toHaveText(expectedText);
  }
});

test('reset', async ({ page }) => {
  for (const url of urls) {
    await page.goto(url);
    await page.waitForSelector('button[name="Reload page"]');

    await page.getByLabel('name').focus();
    await page.getByLabel('name').pressSequentially('My Name', { delay: 150 });
    await page.getByText('React.js').click();

    const expectedText = `{
      "name": "My Name",
      "agree to terms": false,
      "tags": [
        {
          "id": "1",
          "value": {
            "text": "React.js",
            "time": "2024-07-17T04:53:17.000Z"
        }
        }
      ]
    }`;

    // syncing state but not url
    await expect(page.getByTestId('parsed')).toHaveText(expectedText);

    // sync url
    await page.getByTestId('sync-default').click();

    await toHaveUrl(page, `${url}`);

    await expect(page.getByTestId('parsed')).toHaveText(`{
      "name": "",
      "agree to terms": false,
      "tags": []
}`);
  }
});

test.describe('update', () => {
  test('should work', async ({ page }) => {
    for (const url of urls) {
      await page.goto(url);
      await page.waitForSelector('button[name="Reload page"]');

      await page.getByLabel('name').focus();
      await page
        .getByLabel('name')
        .pressSequentially('My Name', { delay: 150 });
      await page.getByText('React.js').click();

      const expectedText = `{
      "name": "My Name",
      "agree to terms": false,
      "tags": [
        {
          "id": "1",
          "value": {
            "text": "React.js",
            "time": "2024-07-17T04:53:17.000Z"
        }
        }
      ]
    }`;

      // syncing state but not url
      await expect(page.getByTestId('parsed')).toHaveText(expectedText);

      // update url
      await page.getByTestId('sync-object').click();

      const expectedUrl =
        '?name=%E2%97%96My%2520Name&age=%E2%88%9355&tags=%5B%7B%27id%27%3A%27%E2%97%961%27%2C%27value%27%3A%7B%27text%27%3A%27%E2%97%96React.js%27%2C%27time%27%3A%27%E2%97%962024-07-17T04%253A53%253A17.000Z%27%7D%7D%5D';
      await toHaveUrl(page, `${url}${expectedUrl}`);

      await expect(page.getByTestId('parsed')).toHaveText(`{
      "name": "My Name",
      "age": 55,
      "agree to terms": false,
      "tags": [
        {
          "id": "1",
          "value": {
            "text": "React.js",
            "time": "2024-07-17T04:53:17.000Z"
          }
        }
      ]
    }`);
    }
  });

  test('should preserve existing query params', async ({ page }) => {
    for (const url of urls) {
      const sp = 'key1=someValue';
      await page.goto(`${url}?${sp}`);
      await page.waitForSelector('button[name="Reload page"]');

      await page.getByLabel('name').focus();
      await page
        .getByLabel('name')
        .pressSequentially('My Name', { delay: 150 });

      const expectedText = `{
  "name": "My Name",
  "agree to terms": false,
  "tags": []
}`;

      // syncing state but not url
      await expect(page.getByTestId('parsed')).toHaveText(expectedText);

      // update url
      await page.getByTestId('sync-empty').click();

      const expectedUrl = `?${sp}&name=%E2%97%96My%2520Name`;
      await toHaveUrl(page, `${url}${expectedUrl}`);

      await expect(page.getByTestId('parsed')).toHaveText(expectedText);
    }
  });
});
