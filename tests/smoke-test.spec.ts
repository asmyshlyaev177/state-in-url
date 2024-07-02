import { test, expect } from '@playwright/test';

test('Cross browser test', async ({ page }) => {
  const obj = {
    str: 'some string !%^{}>?',
    bool: true,
    numb1: 3,
    numb2: 3.141414,
    arr: [1, '2', 'str'],
    obj: { prop: [5, 6, 7] },
  };
  const encoded = JSON.stringify(obj);

  await page.goto('/test');

  await page.getByTestId('stringify').fill(encoded);

  // // TODO: issues with headless webKit
  // await page.waitForFunction(() =>
  //   (
  //     document.querySelector('[data-testid="parse"]')! as HTMLTextAreaElement
  //   ).value.includes('some string'),
  // );
  await expect(await page.getByTestId('parse')).toHaveValue(encoded, {
    timeout: 25000,
  });
  const decoded = await page.getByTestId('parse').inputValue();
  await expect(JSON.parse(decoded)).toStrictEqual(obj);

  const href = await page.evaluate(() => document.location.search);
  await expect(href).toStrictEqual(
    // eslint-disable-next-line max-len
    `?str=some%2520string%2520%21%2525%255E%257B%257D%253E%253F&bool=%F0%9F%97%B5true&numb1=%E2%88%933&numb2=%E2%88%933.141414&arr=%5B%27%E2%88%931%27%2C%272%27%2C%27str%27%5D&obj=%7B%27prop%27%3A%5B%27%E2%88%935%27%2C%27%E2%88%936%27%2C%27%E2%88%937%27%5D%7D`,
  );
});
