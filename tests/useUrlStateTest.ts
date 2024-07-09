import { test, expect } from '@playwright/test';

export const useUrlStateTest: (url: string) => Parameters<typeof test>[2] =
  (url: string) =>
  async ({ page, baseURL }) => {
    await page.goto(url);

    await page.getByLabel('name').pressSequentially('My Name', { delay: 150 });
    await page.getByLabel('age').pressSequentially('33', { delay: 150 });
    await page.getByRole('checkbox', { name: 'agree to terms' }).click();
    await page.getByText('React.js').click();

    const expectedUrl =
      '?name=%E2%97%96My%2520Name&age=%E2%88%9333&agree+to+terms=%F0%9F%97%B5true&tags=%5B%7B%27id%27%3A%27%E2%97%961%27%2C%27value%27%3A%7B%27text%27%3A%27%E2%97%96React.js%27%2C%27time%27%3A%27%E2%97%962024-07-17T04%253A53%253A17.000Z%27%7D%7D%5D';
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

    await page.waitForFunction(() => window.location.href.includes('?name='));
    await expect(page).toHaveURL(`${baseURL}${url}${expectedUrl}`, {
      timeout: 1000,
    });
    await expect(page.getByTestId('parsed')).toHaveText(expectedText);

    await page.getByRole('button', { name: 'Reload page' }).click();
    await page.waitForSelector('button[name="Reload page"]');

    await expect(page).toHaveURL(`${baseURL}${url}${expectedUrl}`, {
      timeout: 1000,
    });
    await expect(page.getByTestId('parsed')).toHaveText(expectedText);
    await expect(
      page.getByRole('checkbox', { name: 'agree to terms' }),
    ).toBeChecked();
  };
