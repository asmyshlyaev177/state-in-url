import { expect, test } from '@playwright/test';

const urls = ['/react-useSharedState', '/useSharedState'];

test.describe('main tests', () => {
  const expectedText = `
  {
  "name": "My Name",
  "age": 33,
  "agree": true
}
  `;
  const values = { name: 'My Name', age: '33' };

  test('update state', async ({ page }) => {
    for (const url of urls) {
      const errorLogs: string[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errorLogs.push(message.text());
        }
      });

      await page.goto(url);
      await page.waitForSelector('[data-testid="parsed"]');

      await page
        .getByLabel('name')
        .pressSequentially(values.name, { delay: 150 });
      await page
        .getByLabel('age')
        .pressSequentially(values.age, { delay: 150 });
      await page.getByRole('checkbox', { name: 'agree' }).click();

      await expect(page.getByTestId('parsed')).toHaveText(expectedText);
      await expect(page.getByTestId('name-input')).toHaveValue(values.name);

      await page
        .getByTestId('name-input')
        .pressSequentially(' test ', { delay: 150 });
      await expect(page.getByLabel('name')).toHaveValue(` test ${values.name}`);
      await expect(page.getByTestId('parsed')).toContainText(
        `"name": " test ${values.name}",`,
      );

      expect(
        errorLogs.filter((err) => !err.includes('dangerouslySetInnerHTML')),
      ).toHaveLength(0);
    }
  });
});
