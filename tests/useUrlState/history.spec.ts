import { expect, test } from '@playwright/test';

const urls = ['/test-ssr', '/test-use-client', '/test-ssr-sp'];

test('go back/forward', async ({ page, baseURL }) => {
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

    await page.waitForFunction(() => window.location.href.includes('?name='));
    const expectedUrl = `?name=%E2%97%96My%2520Name`;
    await expect(page).toHaveURL(`${baseURL}${url}${expectedUrl}`, {
      timeout: 1000,
    });
    await expect(page.getByTestId('parsed')).toHaveText(expectedText);

    // click back
    await page.goBack();
    await page.waitForFunction(() => !window.location.href.includes('?name='));

    await expect(page.getByTestId('parsed')).toHaveText(`{
      "name": "",
      "agree to terms": false,
      "tags": []
    }`);
    await expect(page).toHaveURL(`${baseURL}${url}`, {
      timeout: 1000,
    });

    // click forward
    await page.goForward();
    await page.waitForFunction(() => window.location.href.includes('?name='));
    await expect(page).toHaveURL(`${baseURL}${url}${expectedUrl}`, {
      timeout: 1000,
    });

    // expect(errorLogs).toHaveLength(0);
  }
});
