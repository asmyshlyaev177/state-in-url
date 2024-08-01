import { expect, test } from '@playwright/test';

import { toHaveUrl } from './testUtils';

test('Cross browser test', async ({ page }) => {
  // const errorLogs: unknown[] = [];
  // page.on('console', (message) => {
  //   if (message.type() === 'error') {
  //     errorLogs.push(message.text());
  //   }
  // });

  const url = '/test';
  const obj = {
    str: 'some string !%^{}>?',
    bool: true,
    numb1: 3,
    numb2: 3.141414,
    arr: [1, '2', 'str'],
    obj: { prop: [5, 6, 7] },
  };
  const encoded = JSON.stringify(obj);

  await page.goto(url);
  await page.waitForSelector('[data-testid="stringify"]');

  await page.getByTestId('stringify').fill(encoded);

  await page.waitForURL(/\?str=/);

  const expectedUrl = `?str=%E2%97%96some%2520string%2520%21%2525%255E%257B%257D%253E%253F&bool=%F0%9F%97%B5true&numb1=%E2%88%933&numb2=%E2%88%933.141414&arr=%5B%27%E2%88%931%27%2C%27%E2%97%962%27%2C%27%E2%97%96str%27%5D&obj=%7B%27prop%27%3A%5B%27%E2%88%935%27%2C%27%E2%88%936%27%2C%27%E2%88%937%27%5D%7D`;
  await toHaveUrl(page, `${url}${expectedUrl}`);

  await expect(await page.getByTestId('parsed')).toHaveText(encoded, {
    timeout: 25000,
  });
  const decoded = await page.getByTestId('parsed').inputValue();
  await expect(JSON.parse(decoded)).toStrictEqual(obj);

  // expect(errorLogs).toHaveLength(0);
});
