import { expect, test } from '@playwright/test';

import { toHaveUrl, ignoredErrors } from './testUtils';

test('useUrlEncode', async ({ page }) => {
  const errorLogs: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      errorLogs.push(JSON.stringify(message.text()));
    }
  });

  const url = '/useUrlEncode';
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

  const expectedUrl = `?str=%27some+string+%21%25%5E%7B%7D%3E%3F%27&bool=true&numb1=3&numb2=3.141414&arr=%5B1%2C%272%27%2C%27str%27%5D&obj=%7B%27prop%27%3A%5B5%2C6%2C7%5D%7D`;
  await toHaveUrl(page, `${url}${expectedUrl}`);

  await expect(await page.getByTestId('parsed')).toHaveText(encoded, {
    timeout: 25000,
  });
  const decoded = await page.getByTestId('parsed').inputValue();
  await expect(JSON.parse(decoded)).toStrictEqual(obj);

  expect(errorLogs.filter(err => ignoredErrors.includes(err))).toHaveLength(0);
});
