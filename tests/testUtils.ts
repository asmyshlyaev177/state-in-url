import { expect, type Page } from '@playwright/test';

export const toHaveUrl = async (page: Page, url: string, noWait?: boolean) => {
  await expect(page).toHaveURL(url, { timeout: 5000 });

  if (!noWait) {
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(url, { timeout: 3000 });
  }
};


export const ignoredErrors = ['dangerouslySetInnerHTML', 'Each child in a list should have a unique']
