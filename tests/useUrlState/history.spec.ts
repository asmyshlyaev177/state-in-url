import { expect, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = ['/test-ssr', '/test-use-client', '/test-ssr-sp'];

test('go back/forward', async ({ page }) => {
  for (const url of urls) {
    // const errorLogs: unknown[] = [];
    // page.on('console', (message) => {
    //   if (message.type() === 'error') {
    //     errorLogs.push(message.text());
    //   }
    // });

    await page.goto(url);
    await page.waitForSelector('button[name="Reload page"]');

    const name = 'My Name';
    await page.getByLabel('name').focus();
    await page.getByLabel('name').pressSequentially(name, { delay: 150 });

    const expectedText = `{
      "name": "${name}",
      "agree to terms": false,
      "tags": []
    }`;

    const expectedUrl = `?name=%E2%97%96My%2520Name`;
    await toHaveUrl(page, `${url}${expectedUrl}`);

    await expect(page.getByTestId('parsed')).toHaveText(expectedText);

    // click back
    await page.goBack();

    await expect(page.getByTestId('parsed')).toHaveText(`{
      "name": "",
      "agree to terms": false,
      "tags": []
    }`);
    await toHaveUrl(page, url);

    // click forward
    await page.goForward();
    await toHaveUrl(page, `${url}${expectedUrl}`);

    // expect(errorLogs).toHaveLength(0);
  }
});
