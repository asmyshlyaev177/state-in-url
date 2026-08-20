import { expect, test } from '@playwright/test';

import { toHaveUrl, ignoredErrors } from '../testUtils';

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

