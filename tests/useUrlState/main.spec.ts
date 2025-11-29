import { expect, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = [
  '/test-ssr', //  expected hydration error
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

const useHookUrls = [
  '/useHook-race-condition',
  'http://localhost:3001/useHook-race-condition',
  'http://localhost:3002/useHook-race-condition',
  'http://localhost:5181/useHook-race-condition',
  'http://localhost:5182/useHook-race-condition',
  'http://localhost:5183/useHook-race-condition',
]

const delay = 1

test.describe('main tests', () => {
  const expectedUrl =
    '?name=%27My+Name%2527%27&age=33&agree_to_terms=true&tags=%5B%7B%27id%27%3A%271%27%2C%27value%27%3A%7B%27text%27%3A%27React.js%27%2C%27time%27%3A%27%E2%8F%B22024-07-17T04%3A53%3A17.000Z%27%7D%7D%5D';
  const expectedText = `{
      "name": "My Name'",
      "age": 33,
      "agree_to_terms": true,
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
  const values = { name: "My Name'", age: '33' };

    for (const url of urls) {
      test(`fast concurent URL updates ${url}`, async ({ page }) => {
      const errorLogs: unknown[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errorLogs.push({ text: message.text(), url });
        }
      });

      await page.goto(url);
      await page.waitForSelector('button[name="Reload page"]');


      const text1 = 'One two three four'

      await page.getByLabel('name').focus();
      await page
        .getByLabel('name')
        .pressSequentially(text1, { delay });
      await page.keyboard.press('Control+Backspace');
      await page
        .getByLabel('name')
        .pressSequentially('four', { delay });
      await page.keyboard.press('Backspace')
      await page.keyboard.press('Backspace')
      await page.keyboard.press('Backspace')
      await page
        .getByLabel('name')
        .pressSequentially('our', { delay });

      await page.waitForTimeout(750);
      await expect(await page.getByLabel('name')).toHaveValue(text1)
  });
  }


    for (const url of urls) {
      test(`update state/url ${url}`, async ({ page }) => {

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
        .pressSequentially(values.name, { delay });
      await page.getByLabel('age').focus();
      await page
        .getByLabel('age')
        .pressSequentially(values.age, { delay });
        await page.getByTestId('agree_to_terms').click();
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
  });
  }


    for (const url of urls) {
      test(`load from URL ${url}`, async ({ page }) => {

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
  });
  }


  for (const url of urls) {
    test(`fast updates(long key press) ${url}`, async ({ page }) => {

      const errorLogs: unknown[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errorLogs.push({ text: message.text(), url });
        }
      });

      await page.goto(url);
      await page.waitForSelector('button[name="Reload page"]');


      const alpha = "abcdefghijklmnopqrstuvwxyz"
      const text = alpha.repeat(5)
      await page
        .getByLabel('name')
        .pressSequentially(text, { delay: 0 });
        await page.waitForTimeout(500);

        await expect(page.url().split('?')[1]).toEqual(`name=%27${text}%27`)


      await expect(page.locator('button[name="Reload page"]')).toBeVisible();

      if (url === '/test-ssr-sp') {
        await expect(errorLogs).toHaveLength(0);
      }
    });
  }


});


test.describe('useHook - race condition', () => {
  for (const url of useHookUrls) {
    test(`useHook ${url}`, async ({ page, browserName }) => {
      await page.goto(url);
      await page.waitForSelector('[data-testid="showForm"]');

      // Initially, second component should not be visible
      const valueInputs = page.locator('[data-testid="valueInput"]');
      await expect(valueInputs).toHaveCount(1);

      // Click 'show form' checkbox to show second component
      await page.locator('[data-testid="showForm"]').click();
      await page.waitForTimeout(100);

      // After clicking, second component should appear
      await expect(valueInputs).toHaveCount(2);

      // Change value in first input
      const firstValueInput = valueInputs.first();
      const secondValueInput = valueInputs.nth(1);

      await firstValueInput.fill('42');
      await page.waitForTimeout(100);

      // Second component input should have the same value
      await expect(secondValueInput).toHaveValue('42');

      // Change value in second input to verify synchronization
      await secondValueInput.fill('123');
      await page.waitForTimeout(100);

      // First component input should update as well
      await expect(firstValueInput).toHaveValue('123');

      // Check all values in the updates array
      const updatesText = await page.textContent('[data-testid="updates-array"]');

      // Parse the updates array and verify it contains boolean values tracking showForm state
      const updates = JSON.parse(updatesText || '[]');
      if (browserName !== 'firefox') {
        expect(updates).toEqual([false, true, true])
      }
    })
  }
})
