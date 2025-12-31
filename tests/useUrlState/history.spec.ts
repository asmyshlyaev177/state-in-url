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

  for (const url of urls) {
    test(`go back/forward ${url}`, async ({ page }) => {
    const errorLogs: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        errorLogs.push(JSON.stringify(message.text()));
      }
    });

    const _url = `${url}?replace=false`;
    await page.goto(_url);
    await page.waitForSelector('button[name="Reload page"]');

    const name = 'My Name';
    await page.getByLabel('name').focus();
    await page.getByLabel('name').pressSequentially(name, { delay: 5 });

    const expectedText = `{
      "name": "${name}",
      "agree_to_terms": false,
      "tags": []
    }`;

    const expectedUrl = `?replace=false&name=%27My+Name%27`;
    await toHaveUrl(page, `${url}${expectedUrl}`);

    await expect(page.getByTestId('parsed')).toHaveText(expectedText);

    // click back
    await page.goBack();

    const text = JSON.parse(await page.getByTestId('parsed').textContent() || '').name

      expect(JSON.parse(await page.getByTestId('parsed').textContent() || '').name.length).toBeLessThan(JSON.parse(expectedText).name.length)


    // click forward
    await page.goForward();
      await expect(page.getByTestId('parsed')).toHaveText(`{
      "name": "${name}",
      "agree_to_terms": false,
      "tags": []
    }`);

      await toHaveUrl(page, `${url}${expectedUrl}`);


    expect(errorLogs.filter(err => ignoredErrors.includes(err))).toHaveLength(0);
});
}

