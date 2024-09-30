import { expect, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = [
  '/test-ssr',
  '/test-use-client',
  '/test-ssr-sp',
  'http://localhost:3001/test-ssr',
  'http://localhost:3001/test-use-client',
  'http://localhost:3001/test-ssr-sp',
  'http://localhost:5181',
];

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

    const expectedUrl = `?name=%27My+Name%27&tags=%5B%7B%27id%27%3A%271%27%2C%27value%27%3A%7B%27text%27%3A%27React.js%27%2C%27time%27%3A%272024-07-17T04%3A53%3A17.000Z%27%7D%7D%5D`;
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
        '?name=%27My+Name%27&age=55&tags=%5B%7B%27id%27%3A%271%27%2C%27value%27%3A%7B%27text%27%3A%27React.js%27%2C%27time%27%3A%272024-07-17T04%3A53%3A17.000Z%27%7D%7D%5D';
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

  test('with date object', async ({ page }) => {
    for (const url of urls) {
      const errorLogs: unknown[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errorLogs.push({ text: message.text(), url });
        }
      });

      await page.goto(url);
      await page.waitForSelector('button[name="Reload page"]');

      await page.getByLabel('name').focus();
      await page
        .getByLabel('name')
        .pressSequentially('My Name', { delay: 150 });
      await page.getByText('TailwindCSS').click();

      const expectedText = `{
  "name": "My Name",
  "agree to terms": false,
  "tags": [
    {
      "id": "3",
      "value": {
        "text": "TailwindCSS",
        "time": "2024-07-19T04:53:17.000Z",
        "iso": "2020-07-19T04:53:17.000Z"
      }
    }
  ]
}`;
      await expect(page.getByTestId('parsed')).toHaveText(expectedText);
      await page.waitForTimeout(700);

      const expectedUrl =
        '?name=%27My+Name%27&tags=%5B%7B%27id%27%3A%273%27%2C%27value%27%3A%7B%27text%27%3A%27TailwindCSS%27%2C%27time%27%3A%272024-07-19T04%3A53%3A17.000Z%27%2C%27iso%27%3A%272020-07-19T04%3A53%3A17.000Z%27%7D%7D%5D';
      await toHaveUrl(page, `${url}${expectedUrl}`);

      if (url === '/test-ssr-sp') {
        await expect(errorLogs).toHaveLength(0);
      }
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

      const expectedUrl = `?${sp}&name=%27My+Name%27`;
      await toHaveUrl(page, `${url}${expectedUrl}`);

      await expect(page.getByTestId('parsed')).toHaveText(expectedText);
    }
  });
});
