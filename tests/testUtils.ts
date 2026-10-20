import { expect, type Page } from '@playwright/test';

export const toHaveUrl = async (page: Page, url: string, noWait?: boolean) => {
  await expect(page).toHaveURL(url, { timeout: 5000 });

  if (!noWait) {
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(url, { timeout: 3000 });
  }
};


export const ignoredErrors = ['dangerouslySetInnerHTML', 'Each child in a list should have a unique']

// /test-link-props: the input that calls setState and never setUrl. A fill before hydration never reaches
// React, and refilling the same text fires no onChange, so clear and refill until the form mirrors it.
export const fillStateOnlyInput = async (page: Page, name: string) => {
  await expect(async () => {
    await page.getByTestId('state-only').fill('');
    await page.getByTestId('state-only').fill(name);
    await expect(page.locator('#name')).toHaveValue(name, { timeout: 1000 });
  }).toPass({ timeout: 10_000 });
};
