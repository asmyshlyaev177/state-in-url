import { expect, type Page, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

const urls = [
  ['/useUrlState/1', '/useUrlState/2'],
  [
    'http://example-nextjs15.localhost:1355/useUrlState/1',
    'http://example-nextjs15.localhost:1355/useUrlState/2',
  ],
  [
    'http://example-nextjs16.localhost:1355/useUrlState/1',
    'http://example-nextjs16.localhost:1355/useUrlState/2',
  ],
  [
    'http://example-react-router6.localhost:1355/few-components/1',
    'http://example-react-router6.localhost:1355/few-components/2',
  ],
  [
    'http://example-remix2.localhost:1355/few-components/1',
    'http://example-remix2.localhost:1355/few-components/2',
  ],
  [
    'http://example-react-router7.localhost:1355/few-components/1',
    'http://example-react-router7.localhost:1355/few-components/2',
  ],
  [
    'http://example-astro.localhost:1355/few-components/1',
    'http://example-astro.localhost:1355/few-components/2',
  ],
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


  // setUrl writes the URL TIMEOUT ms later (70, or 330 in WebKit); a paused clock decides when that delay runs out.
  const pauseBeforeWrite = async (page: Page) => {
    await page.clock.install();
    await page.clock.pauseAt(Date.now() + 1000);
  };
  const flushWrite = async (page: Page) => {
    await page.clock.runFor(1000);
    await page.clock.resume();
  };

  for (const url of urls) {
    test(`URL write delay ${url[0]}`, async ({ page, browserName }) => {
      const [URL1] = url;
      await page.goto(URL1);
      await page.waitForSelector(`[data-testid="${link}"]`);
      await pauseBeforeWrite(page);

      await page.getByTestId('select').nth(0).selectOption('30');
      await expect(page.getByTestId('select').nth(1)).toHaveValue('30');
      await page.clock.runFor(100);
      await expect(page).toHaveURL(
        browserName === 'webkit' ? URL1 : `${URL1}?perPage=30`,
      );

      await page.clock.runFor(300);
      await expect(page).toHaveURL(`${URL1}?perPage=30`);
    });
  }

  test.describe('change again before the URL is written', () => {
    for (const url of urls) {
      test(`undo leaves the URL as it was ${url[0]}`, async ({ page }) => {
        const [URL1] = url;
        const errorLogs: unknown[] = [];
        page.on('console', (message) => {
          if (message.type() === 'error') {
            errorLogs.push({ text: message.text() });
          }
        });
        await page.goto(URL1);
        await page.waitForSelector(`[data-testid="${link}"]`);
        const historyLength = await page.evaluate(() => history.length);
        await pauseBeforeWrite(page);

        await page.getByTestId('select').nth(0).selectOption('30');
        // the other instance follows only once React handled the change
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');
        await page.getByTestId('select').nth(0).selectOption('10');
        await flushWrite(page);

        await toHaveUrl(page, URL1);
        await expect(page.getByTestId('select').nth(0)).toHaveValue('10');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('10');
        expect(await page.evaluate(() => history.length)).toBe(historyLength);

        await expect(errorLogs).toHaveLength(0);
      });
    }

    for (const url of urls) {
      test(`another state's waiting change is kept ${url[0]}`, async ({ page }) => {
        const [URL1] = url;
        const errorLogs: unknown[] = [];
        page.on('console', (message) => {
          if (message.type() === 'error') {
            errorLogs.push({ text: message.text() });
          }
        });
        await page.goto(URL1);
        await page.waitForSelector(`[data-testid="${link}"]`);
        await pauseBeforeWrite(page);

        await page.getByTestId('select').nth(0).selectOption('30');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');
        await page.getByTestId('page-select').selectOption('2');
        await flushWrite(page);

        await toHaveUrl(page, `${URL1}?perPage=30&page=2`);
        await expect(page.getByTestId('select').nth(0)).toHaveValue('30');
        await expect(page.getByTestId('select').nth(1)).toHaveValue('30');
        await expect(page.getByTestId('page-select')).toHaveValue('2');

        await expect(errorLogs).toHaveLength(0);
      });
    }
  });

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

  // Only page 1 has a pager, so a trip through page 2 unmounts and remounts it. The pager shows the value
  // of its first render: the shared state outlives the hook, and a remount used to render what it left.
  test.describe('remount', () => {
    const remountUrls = [
      // the Astro few-components pair is a full load each time, which cannot carry state over
      ...urls.filter(([url]) => !url.includes('example-astro')),
      // Astro's <ClientRouter /> swaps the page in place
      [
        'http://example-astro.localhost:1355/view-transitions/1',
        'http://example-astro.localhost:1355/view-transitions/2',
      ],
    ];
    type Marked = { __marker?: true };

    for (const url of remountUrls) {
      test(`starts from the URL, not from the state it left ${url[0]}`, async ({ page }) => {
        const [URL1, URL2] = url;
        const errorLogs: unknown[] = [];
        page.on('console', (message) => {
          if (message.type() === 'error') {
            errorLogs.push({ text: message.text() });
          }
        });
        await page.goto(`${URL1}?page=2`);
        await page.waitForSelector(`[data-testid="${link}"]`);
        await expect(page.getByTestId('page-first-render')).toHaveText('2');
        // a click before hydration is a full load, which starts with no shared state and proves nothing
        await page.evaluate(() => {
          (window as unknown as Marked).__marker = true;
        });

        // the query string travels along, so the hook never sees a URL without `page` before it unmounts
        await page.getByTestId(linkQs).click();
        await toHaveUrl(page, `${URL2}?page=2`);
        await expect(page.getByTestId('page-select')).toHaveCount(0);

        await page.getByTestId(link).click();
        await toHaveUrl(page, URL1);
        await expect(page.getByTestId('page-select')).toHaveValue('1');
        // Astro swaps in server HTML that already says 1; the island drops `ssr` once it has hydrated
        await expect(page.locator('astro-island[ssr]')).toHaveCount(0);
        await expect(page.getByTestId('page-first-render')).toHaveText('1');

        expect(await page.evaluate(() => (window as unknown as Marked).__marker)).toBe(true);
        await expect(errorLogs).toHaveLength(0);
      });
    }
  });
});
