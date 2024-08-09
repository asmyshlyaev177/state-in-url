import { expect, type Page } from '@playwright/test';

export const toHaveUrl = async (page: Page, url: string, noWait?: boolean) => {
  // await page.waitForFunction((_url) => {
  //   // console.log({ _url, con: window.location.href.includes(_url), href: window.location.href })
  //   return window.location.href.includes(_url)
  // }, url, { timeout: 20 * 1000 });

  await expect(page).toHaveURL(url, { timeout: 5000 });

  if (!noWait) {
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(url, { timeout: 3000 });
  }
};
