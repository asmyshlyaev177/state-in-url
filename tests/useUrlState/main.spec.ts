import { expect, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = [
  '/test-ssr', //  expected hydration error
  '/test-use-client', //  TODO: <<---error, shouldn't be ?
  '/test-ssr-sp',
  'http://localhost:3001/test-ssr',
  'http://localhost:3001/test-use-client',
  'http://localhost:3001/test-ssr-sp',
  // 'http://localhost:5182',
];

test.describe('main tests', () => {
  const expectedUrl =
    '?name=%27My+Name%27&age=33&agree+to+terms=true&tags=%5B%7B%27id%27%3A%271%27%2C%27value%27%3A%7B%27text%27%3A%27React.js%27%2C%27time%27%3A%272024-07-17T04%3A53%3A17.000Z%27%7D%7D%5D';
  const expectedText = `{
      "name": "My Name",
      "age": 33,
      "agree to terms": true,
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
  const values = { name: 'My Name', age: '33' };

  test('update state/url', async ({ page }) => {
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
        .pressSequentially(values.name, { delay: 150 });
      await page.getByLabel('age').focus();
      await page
        .getByLabel('age')
        .pressSequentially(values.age, { delay: 150 });
      await page.getByRole('checkbox', { name: 'agree to terms' }).click();
      await page.waitForTimeout(400);
      await page.getByText('React.js').click();

      await page.waitForFunction(
        () => window.location.href.includes('tags='),
        null,
        { timeout: 5000 },
      );
      await toHaveUrl(page, `${url}${expectedUrl}`);

      await expect(page.getByTestId('parsed')).toHaveText(expectedText);

      await page.getByRole('button', { name: 'Reload page' }).click();
      await page.waitForSelector('button[name="Reload page"]');

      await toHaveUrl(page, `${url}${expectedUrl}`);

      await expect(page.getByTestId('parsed')).toHaveText(expectedText);
      await expect(page.getByLabel('name')).toHaveValue(values.name);
      await expect(page.getByLabel('age')).toHaveValue(values.age);

      // remount component
      await page.getByTestId('remount').click();
      await page.waitForTimeout(200);
      await expect(page.getByTestId('parsed')).toHaveText(expectedText);

      if (url === '/test-ssr-sp') {
        await expect(errorLogs).toHaveLength(0);
      }
    }
  });

  test('load from URL', async ({ page }) => {
    for (const url of urls) {
      const errorLogs: unknown[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errorLogs.push({ text: message.text(), url });
        }
      });

      await page.goto(`${url}${expectedUrl}`);
      await page.waitForTimeout(200);

      await expect(page.getByTestId('parsed')).toHaveText(expectedText);
      await expect(page.getByLabel('name')).toHaveValue(values.name);
      await expect(page.getByLabel('age')).toHaveValue(values.age);

      await toHaveUrl(page, `${url}${expectedUrl}`);

      if (url === '/test-ssr-sp') {
        await expect(errorLogs).toHaveLength(0);
      }
    }
  });

  // TODO: for check compatibility with old version, remove it later
  test('load from URL(deprecated version)', async ({ page }) => {
    for (const url of urls) {
      const errorLogs: unknown[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errorLogs.push({ text: message.text(), url });
        }
      });

      const expectedUrl =
        '?name=%E2%97%96My%2520Name&age=%E2%88%9333&tags=%5B%7B%27id%27%3A%27%E2%97%961%27%2C%27value%27%3A%7B%27text%27%3A%27%E2%97%96React.js%27%2C%27time%27%3A%27%E2%8F%B22024-07-17T04%3A53%3A17.000Z%27%7D%7D%5D';

      await page.goto(`${url}${expectedUrl}`);
      await page.waitForTimeout(200);

      await expect(page.getByTestId('parsed')).toHaveText(`{
  "name": "My Name",
  "age": 33,
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
      await expect(page.getByLabel('name')).toHaveValue(values.name);
      await expect(page.getByLabel('age')).toHaveValue(values.age);

      if (url === '/test-ssr-sp') {
        await expect(errorLogs).toHaveLength(0);
      }
    }
  });
});
