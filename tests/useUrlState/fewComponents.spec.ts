import { expect, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = [
  ['/useUrlState/1', '/useUrlState/2'],
  [
    'http://localhost:3001/useUrlState/1',
    'http://localhost:3001/useUrlState/2',
  ],
  [
    'http://localhost:5181/few-components/1',
    'http://localhost:5181/few-components/2',
  ],
  [
    'http://localhost:5182/few-components/1',
    'http://localhost:5182/few-components/2',
  ]
];

test.describe('few components tests', () => {
  const link = 'link';
  const linkQs = 'link-sp';
  const linkQsClient = 'link-client';

    for (const url of urls) {
      test(`load from URL ${url[0]}`, async ({ page }) => {

      const [URL1] = url;
      const errorLogs: unknown[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errorLogs.push({ text: message.text() });
        }
      });
      const currUrl = `${URL1}?perPage=20`;
      await page.goto(currUrl);
      await page.waitForSelector('[data-testid="link"]');

      await expect(page.getByTestId('select').nth(0)).toHaveValue('20');
      await expect(page.getByTestId('select').nth(1)).toHaveValue('20');

      await toHaveUrl(page, currUrl);

      await expect(errorLogs).toHaveLength(0);
  });
  }


  test.describe('change value', () => {
      for (const url of urls) {
        test(`layout component ${url[0]}`, async ({ page }) => {

        const [URL1] = url;
        const errorLogs: unknown[] = [];
        page.on('console', (message) => {
          if (message.type() === 'error') {
            errorLogs.push({ text: message.text() });
          }
        });
        const currUrl = URL1;
        await page.goto(currUrl);
        await page.waitForSelector(`[data-testid="${link}"]`);

        await page.getByTestId('select').nth(0).selectOption('30');

        await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

        await toHaveUrl(page, `${currUrl}?perPage=30`);

        await expect(errorLogs).toHaveLength(0);
    });
    }

      for (const url of urls) {
        test(`client component ${url[0]}`, async ({ page }) => {
        const [URL1] = url;
        const errorLogs: unknown[] = [];
        page.on('console', (message) => {
          if (message.type() === 'error') {
            errorLogs.push({ text: message.text() });
          }
        });
        const currUrl = URL1;
        await page.goto(currUrl);
        await page.waitForSelector(`[data-testid="${link}"]`);

        await page.getByTestId('select').nth(1).selectOption('30');

        await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

        await toHaveUrl(page, `${currUrl}?perPage=30`);

        await expect(errorLogs).toHaveLength(0);
    });
    }
  });

    for (const url of urls) {
      test(`back/forward ${url[0]}`, async ({ page }) => {
      const [URL1] = url;
      const errorLogs: unknown[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errorLogs.push({ text: message.text() });
        }
      });
      await page.goto(URL1);
      await page.waitForSelector(`[data-testid="${link}"]`);

      await page.getByTestId('select').nth(0).selectOption('30');

      await toHaveUrl(page, `${URL1}?perPage=30`);

      await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
      await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

      await page.goBack();
      await toHaveUrl(page, URL1);
      await expect(page.getByTestId('select').nth(0)).toHaveValue('10');
      await expect(page.getByTestId('select').nth(1)).toHaveValue('10');

      await page.goForward();
      await toHaveUrl(page, `${URL1}?perPage=30`);

      await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
      await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

      await expect(errorLogs).toHaveLength(0);
  });
  }


  test.describe('change page', () => {
      for (const url of urls) {
        test(`usual link ${url[0]}`, async ({ page }) => {
        const [URL1, URL2] = url;
        const errorLogs: unknown[] = [];
        page.on('console', (message) => {
          if (message.type() === 'error') {
            errorLogs.push({ text: message.text() });
          }
        });
        const url1 = `${URL1}?perPage=30`;
        await page.goto(url1);
        await page.waitForSelector(`[data-testid="${link}"]`);

        await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

        await page.getByTestId(link).click();
        await page.waitForSelector(`[data-testid="${link}"]`);

        await toHaveUrl(page, URL2);

        await expect(page.getByTestId('select').nth(0)).toHaveValue('10');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('10');

        await expect(errorLogs).toHaveLength(0);
    });
    }

      for (const url of urls) {
        test(`link with qs ${url[0]}`, async ({ page }) => {
        const [URL1, URL2] = url;
        const errorLogs: unknown[] = [];
        page.on('console', (message) => {
          if (message.type() === 'error') {
            errorLogs.push({ text: message.text() });
          }
        });
        const url1 = `${URL1}?perPage=30`;
        const url2 = `${URL2}?perPage=30`;
        await page.goto(url1);
        await page.waitForSelector(`[data-testid="${linkQs}"]`);

        await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

        await page.getByTestId(linkQs).click();
        await page.waitForSelector(`[data-testid="${linkQs}"]`);

        await toHaveUrl(page, url2);

        await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

        await expect(errorLogs).toHaveLength(0);
    });
    }

      for (const url of urls) {
        test(`link with qs client ${url[0]}`, async ({ page }) => {
        const [URL1, URL2] = url;
        const errorLogs: unknown[] = [];
        page.on('console', (message) => {
          if (message.type() === 'error') {
            errorLogs.push({ text: message.text() });
          }
        });
        const url1 = `${URL1}?perPage=30`;
        const url2 = `${URL2}?perPage=30`;
        await page.goto(url1);
        await page.waitForSelector(`[data-testid="${linkQsClient}"]`);

        await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

        await page.getByTestId(linkQsClient).click();
        await page.waitForSelector(`[data-testid="${linkQsClient}"]`);

        await toHaveUrl(page, url2);

        await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');

        await expect(errorLogs).toHaveLength(0);
    });
    }

  });
});
