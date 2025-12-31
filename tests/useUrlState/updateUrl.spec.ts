import { expect, test } from '@playwright/test';

import { toHaveUrl, ignoredErrors } from '../testUtils';

const urls = [
  '/test-ssr',
  '/test-use-client',
  '/test-ssr-sp',
  'http://localhost:3001/test-ssr',
  'http://localhost:3001/test-use-client',
  'http://localhost:3001/test-ssr-sp',
  'http://localhost:3002/test-ssr',
  'http://localhost:3002/test-use-client',
  'http://localhost:3002/test-ssr-sp',
  'http://localhost:5181',
  'http://localhost:5182',
  'http://localhost:5183',
];

const delay = 1

  for (const url of urls) {
    test(`reset ${url}`, async ({ page }) => {

    await page.goto(url);
    await page.waitForSelector('button[name="Reload page"]');

    await page.getByLabel('name').focus();
    await page.getByLabel('name').pressSequentially('My Name', { delay });
    await page.getByText('React.js').click();

    const expectedText = `{
      "name": "My Name",
      "agree_to_terms": false,
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

    await page.waitForTimeout(80)
    // syncing state but not url
    await expect(page.getByTestId('parsed')).toHaveText(expectedText);

      await page.getByTestId("sync-default").click({ force: true })
      await page.waitForTimeout(300)
      await page.getByTestId("sync-default").click({ force: true })
      await page.waitForTimeout(300)


    await expect(page.getByTestId('parsed')).toHaveText(`{
      "name": "",
      "agree_to_terms": false,
      "tags": []
}`);
});
}


test.describe('update', () => {
    for (const url of urls) {
      test(`should work ${url}`, async ({ page }) => {

      await page.goto(url);
      await page.waitForSelector('button[name="Reload page"]');

      await page.getByLabel('name').focus();
      await page
        .getByLabel('name')
        .pressSequentially('My Name', { delay });
      await page.getByText('React.js').click();

      const expectedText = `{
      "name": "My Name",
      "agree_to_terms": false,
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
        '?name=%27My+Name%27&age=55&tags=%5B%7B%27id%27%3A%271%27%2C%27value%27%3A%7B%27text%27%3A%27React.js%27%2C%27time%27%3A%27%E2%8F%B22024-07-17T04%3A53%3A17.000Z%27%7D%7D%5D';
      await toHaveUrl(page, `${url}${expectedUrl}`);

      await expect(page.getByTestId('parsed')).toHaveText(`{
      "name": "My Name",
      "age": 55,
      "agree_to_terms": false,
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
  });
  }


    for (const url of urls) {
      test(`with date object ${url}`, async ({ page }) => {
      const errorLogs: {text: string; url: string}[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errorLogs.push({ text: JSON.stringify(message.text()), url });
        }
      });

      await page.goto(url);
      await page.waitForSelector('button[name="Reload page"]');

      await page.getByLabel('name').focus();
      await page
        .getByLabel('name')
        .pressSequentially('My Name', { delay });
      await page.getByText('TailwindCSS').click();

      const expectedText = `{
  "name": "My Name",
  "agree_to_terms": false,
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
        '?name=%27My+Name%27&tags=%5B%7B%27id%27%3A%273%27%2C%27value%27%3A%7B%27text%27%3A%27TailwindCSS%27%2C%27time%27%3A%27%E2%8F%B22024-07-19T04%3A53%3A17.000Z%27%2C%27iso%27%3A%272020-07-19T04%3A53%3A17.000Z%27%7D%7D%5D';
      await toHaveUrl(page, `${url}${expectedUrl}`);

      // TODO: unify this check for all tests
      if (url === '/test-ssr-sp') {
        await expect(errorLogs.filter(err => ignoredErrors.includes(err.text))).toHaveLength(0);
      }
  });
  }


    for (const url of urls) {
      test(`should preserve existing query params ${url}`, async ({ page }) => {
      const sp = 'key1=someValue';
      await page.goto(`${url}?${sp}`);
      await page.waitForSelector('button[name="Reload page"]');

      await page.getByLabel('name').focus();
      await page
        .getByLabel('name')
        .pressSequentially('My Name', { delay });

      const expectedText = `{
  "name": "My Name",
  "agree_to_terms": false,
  "tags": []
}`;

      // syncing state but not url
      await expect(page.getByTestId('parsed')).toHaveText(expectedText);

      const expectedUrl = `?${sp}&name=%27My+Name%27`;
      await toHaveUrl(page, `${url}${expectedUrl}`);

      await expect(page.getByTestId('parsed')).toHaveText(expectedText);
  });
  }
});
