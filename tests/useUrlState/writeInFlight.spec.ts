import { expect, type Page, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

/**
 * A write already handed to the router whose navigation has not reached
 * window.location: Next with `useHistory: false` waits for the server
 * response, a data router for its loaders. Holding that request keeps the
 * page on the old URL for as long as the test needs.
 */

type Case = {
  url: string;
  ready: string;
  // the request the navigation waits for
  isNavigation: (url: URL) => boolean;
  values: { initial: string; changed: string };
  changedSearch: string;
  setFirst: (page: Page, value: string) => Promise<void>;
  // both instances of the first shape, so the one that did not write is asserted too
  expectFirst: (page: Page, value: string) => Promise<void>;
};

const nextCases: Case[] = [
  'http://example-nextjs15.localhost:1355',
  'http://example-nextjs16.localhost:1355',
].map((host) => ({
  url: `${host}/test-use-router`,
  ready: '[data-testid="wrapper"]',
  isNavigation: (url) => url.searchParams.has('_rsc'),
  values: { initial: '', changed: 'a' },
  changedSearch: '?name=%27a%27',
  setFirst: (page, value) => page.locator('#name').fill(value),
  expectFirst: async (page, value) => {
    await expect(page.locator('#name')).toHaveValue(value);
    await expect(page.locator('#mirror')).toHaveValue(value);
  },
}));

const dataRouterCases: Case[] = [
  {
    host: 'http://example-react-router6.localhost:1355',
    isNavigation: (url: URL) => url.pathname.endsWith('/loader-ping'),
  },
  {
    host: 'http://example-react-router7.localhost:1355',
    isNavigation: (url: URL) => url.pathname.endsWith('/loader-ping'),
  },
  {
    host: 'http://example-remix2.localhost:1355',
    isNavigation: (url: URL) => url.pathname.endsWith('.data'),
  },
].map(({ host, isNavigation }) => ({
  url: `${host}/few-components/1`,
  ready: '[data-testid="link"]',
  isNavigation,
  values: { initial: '10', changed: '30' },
  changedSearch: '?perPage=30',
  setFirst: async (page, value) => {
    await page.getByTestId('select').nth(0).selectOption(value);
  },
  expectFirst: async (page, value) => {
    await expect(page.getByTestId('select').nth(0)).toHaveValue(value);
    await expect(page.getByTestId('select').nth(1)).toHaveValue(value);
  },
}));

const holdNavigations = async (page: Page, { isNavigation }: Case) => {
  const held: (() => Promise<void>)[] = [];
  let holding = true;

  await page.route(isNavigation, (route) => {
    // <Link> prefetches on the Next page are the same request with this header
    const isPrefetch = !!route.request().headers()['next-router-prefetch'];
    if (!holding || isPrefetch) return route.continue();
    held.push(() => route.continue());
  });

  return {
    // the write went to the router: the navigation is waiting on the held request
    sent: () => expect.poll(() => held.length).toBeGreaterThan(0),
    release: async () => {
      holding = false;
      for (const go of held.splice(0)) await go();
    },
  };
};

// The write delay (70 ms, 330 in WebKit) runs on the page's clock, so the test decides when it fires.
const pauseClock = async (page: Page) => {
  await page.clock.install();
  await page.clock.pauseAt(Date.now() + 1000);
};
const fireWriteDelay = (page: Page) => page.clock.runFor(400);

for (const c of [...nextCases, ...dataRouterCases]) {
  test(`an undo while the write is on its way ${c.url}`, async ({ page }) => {
    await page.goto(c.url);
    await page.waitForSelector(c.ready);
    const historyLength = await page.evaluate(() => history.length);
    const navigations = await holdNavigations(page, c);
    await pauseClock(page);

    await c.setFirst(page, c.values.changed);
    await c.expectFirst(page, c.values.changed);
    await fireWriteDelay(page);
    await navigations.sent();
    await expect(page).toHaveURL(c.url);

    await c.setFirst(page, c.values.initial);
    await fireWriteDelay(page);
    await navigations.release();
    await page.clock.resume();

    await toHaveUrl(page, c.url);
    await c.expectFirst(page, c.values.initial);
    expect(await page.evaluate(() => history.length)).toBe(historyLength);
  });

  test(`a second shape writing while the write is on its way keeps it ${c.url}`, async ({
    page,
  }) => {
    await page.goto(c.url);
    await page.waitForSelector(c.ready);
    const navigations = await holdNavigations(page, c);
    await pauseClock(page);

    await c.setFirst(page, c.values.changed);
    await c.expectFirst(page, c.values.changed);
    await fireWriteDelay(page);
    await navigations.sent();
    await expect(page).toHaveURL(c.url);

    await page.getByTestId('page-select').selectOption('2');
    await fireWriteDelay(page);
    await navigations.release();
    await page.clock.resume();

    await toHaveUrl(page, `${c.url}${c.changedSearch}&page=2`);
    await c.expectFirst(page, c.values.changed);
    await expect(page.getByTestId('page-select')).toHaveValue('2');
  });
}
