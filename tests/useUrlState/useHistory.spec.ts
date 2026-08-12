import { expect, type Page, test } from '@playwright/test';

import { toHaveUrl } from '../testUtils';

/**
 * Both navigation modes of the Next hook — `useHistory: true` writes the URL
 * with history.pushState, `false` goes through router.push — and every way the
 * URL can change under them: a <Link>, a bare pushState from unrelated code,
 * back/forward.
 *
 * That last group had no coverage. It used to be an effect keyed on Next's
 * useSearchParams(), now a subscription to history itself, since
 * useSearchParams opts the component out of prerendering.
 *
 * Every page mounts two hook instances and both are asserted — one instance
 * only shows the component that made the change agreeing with itself.
 */

const hosts = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
];

const modes = [
  { path: '/test-use-history', useHistory: true },
  { path: '/test-use-router', useHistory: false },
];

const cases = hosts.flatMap((host) =>
  modes.map((mode) => ({ ...mode, url: `${host}${mode.path}` })),
);

// top-level Date | nested Date | array length
const COMPLEX =
  'Date:2024-07-16T04:53:17.000Z|Date:2024-07-17T04:53:17.000Z|2';
const EMPTY = 'undefined|none|0';

const bothToHaveName = async (page: Page, name: string) => {
  await expect(page.getByTestId('value-name')).toHaveText(name);
  await expect(page.getByTestId('value-mirror')).toHaveText(name);
};

const bothToHaveTypes = async (page: Page, types: string) => {
  await expect(page.getByTestId('types-name')).toHaveText(types);
  await expect(page.getByTestId('types-mirror')).toHaveText(types);
};

test.describe('useHistory true|false', () => {
  for (const { url, useHistory } of cases) {
    test.describe(`${url}`, () => {
      test(`typing drives state and URL — ${url}`, async ({ page }) => {
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        await page.getByLabel('name').focus();
        await page.getByLabel('name').pressSequentially('Typed', { delay: 5 });

        await toHaveUrl(page, `${url}?name=%27Typed%27`);
        await bothToHaveName(page, 'Typed');
      });

      test(`the second instance drives it too — ${url}`, async ({ page }) => {
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        await page.getByLabel('mirror').focus();
        await page
          .getByLabel('mirror')
          .pressSequentially('Mirrored', { delay: 5 });

        await toHaveUrl(page, `${url}?name=%27Mirrored%27`);
        await bothToHaveName(page, 'Mirrored');
        await expect(page.getByLabel('name')).toHaveValue('Mirrored');
      });

      test(`one edit writes one history entry — ${url}`, async ({ page }) => {
        // two entries per edit if both instances wrote the URL, and a single
        // back press would then look like it did nothing
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');
        const before = await page.evaluate(() => history.length);

        await page.getByLabel('name').focus();
        await page.getByLabel('name').press('a');
        await toHaveUrl(page, `${url}?name=%27a%27`);

        expect(await page.evaluate(() => history.length)).toBe(before + 1);
      });

      test(`reads its state off the URL on load — ${url}`, async ({ page }) => {
        await page.goto(`${url}?name=%27FromUrl%27`);
        await page.waitForSelector('[data-testid="wrapper"]');

        await bothToHaveName(page, 'FromUrl');
        await expect(page.getByLabel('name')).toHaveValue('FromUrl');
        await expect(page.getByLabel('mirror')).toHaveValue('FromUrl');
      });

      test(`an instance mounting late lands on current state — ${url}`, async ({
        page,
      }) => {
        // useSharedState reads the shared value while rendering and subscribes
        // after; a write in that window skips the mounting instance
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        await page.getByLabel('name').focus();
        await page.getByLabel('name').pressSequentially('Typed', { delay: 5 });
        await toHaveUrl(page, `${url}?name=%27Typed%27`);

        await page.getByTestId('remount').click();

        await bothToHaveName(page, 'Typed');
        await expect(page.getByLabel('mirror')).toHaveValue('Typed');
      });

      test(`a bare history.pushState is picked up — ${url}`, async ({
        page,
      }) => {
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        await page.getByTestId('push-raw').click();

        await toHaveUrl(page, `${url}?name=%27Pushed%27`);
        await bothToHaveName(page, 'Pushed');
      });

      test(`a bare history.replaceState is picked up — ${url}`, async ({
        page,
      }) => {
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        await page.getByTestId('replace-raw').click();

        await toHaveUrl(page, `${url}?name=%27Replaced%27`);
        await bothToHaveName(page, 'Replaced');
      });

      test(`a Link that adds params updates state — ${url}`, async ({
        page,
      }) => {
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        await page.getByTestId('link-sp').click();

        await toHaveUrl(page, `${url}?name=%27Linked%27`);
        await bothToHaveName(page, 'Linked');
      });

      test(`a Link that drops params resets state — ${url}`, async ({
        page,
      }) => {
        // the direction that catches a stale subscription: back to the default,
        // not the value the previous URL had
        await page.goto(`${url}?name=%27FromUrl%27`);
        await page.waitForSelector('[data-testid="wrapper"]');
        await bothToHaveName(page, 'FromUrl');

        await page.getByTestId('link-bare').click();

        await toHaveUrl(page, url);
        await bothToHaveName(page, '');
      });

      test(`back and forward — ${url}`, async ({ page }) => {
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        // one keypress, so one entry: typing a word can straddle the debounce
        // and push twice, and then back lands on the intermediate value
        await page.getByLabel('name').focus();
        await page.getByLabel('name').press('a');
        await toHaveUrl(page, `${url}?name=%27a%27`);

        await page.goBack();
        await toHaveUrl(page, url);
        await bothToHaveName(page, '');

        await page.goForward();
        await toHaveUrl(page, `${url}?name=%27a%27`);
        await bothToHaveName(page, 'a');
      });

      test(`server component re-renders only with useHistory: false — ${url}`, async ({
        page,
      }) => {
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');
        await expect(page.getByTestId('server-sp')).toHaveText('{}');

        await page.getByLabel('name').focus();
        await page.getByLabel('name').pressSequentially('Typed', { delay: 5 });
        await toHaveUrl(page, `${url}?name=%27Typed%27`);

        await bothToHaveName(page, 'Typed');

        if (useHistory) {
          await expect(page.getByTestId('server-sp')).toHaveText('{}');
        } else {
          await expect(page.getByTestId('server-sp')).toHaveText(
            '{"name":"\'Typed\'"}',
          );
        }
      });

      test(`dates and arrays survive a resync — ${url}`, async ({ page }) => {
        // the resync parses the query string itself, on a different path than
        // the initial read, so the types have to come back through both — at
        // both depths, which do not share an encode path
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');
        await bothToHaveTypes(page, EMPTY);

        await page.getByTestId('set-complex-name').click();
        await bothToHaveTypes(page, COMPLEX);
        // the URL write is debounced; reloading before it lands reloads the old one
        await expect(page).toHaveURL(/tags=/);

        await page.reload();
        await page.waitForSelector('[data-testid="wrapper"]');
        await bothToHaveTypes(page, COMPLEX);

        await page.goBack();
        await bothToHaveTypes(page, EMPTY);

        await page.goForward();
        await bothToHaveTypes(page, COMPLEX);
      });

      test(`special characters survive a resync — ${url}`, async ({ page }) => {
        const name = "A&B=C?D #E'F";
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        await page.getByLabel('name').focus();
        await page.getByLabel('name').pressSequentially(name, { delay: 5 });
        await bothToHaveName(page, name);
        // exact, not /name=/: typing straddles the debounce, so a partial write
        // matches too and the reload would fetch a truncated value
        await toHaveUrl(page, `${url}?name=%27A%26B%3DC%3FD+%23E%2527F%27`);

        await page.reload();
        await page.waitForSelector('[data-testid="wrapper"]');
        await bothToHaveName(page, name);
      });

      test(`unrelated params and the hash are kept — ${url}`, async ({
        page,
      }) => {
        await page.goto(`${url}?other=keep#frag`);
        await page.waitForSelector('[data-testid="wrapper"]');

        await page.getByLabel('name').focus();
        await page.getByLabel('name').press('x');

        await toHaveUrl(page, `${url}?other=keep&name=%27x%27#frag`);
        await bothToHaveName(page, 'x');
      });

      test(`unmounting leaves no stale listener — ${url}`, async ({ page }) => {
        // the subscription unsubscribes on unmount; a push after several
        // remounts must reach exactly the live instances and nothing else
        const errors: string[] = [];
        page.on('console', (m) => {
          if (m.type() === 'error') errors.push(m.text());
        });

        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        for (let i = 0; i < 3; i++) await page.getByTestId('remount').click();

        await page.getByTestId('push-raw').click();

        await toHaveUrl(page, `${url}?name=%27Pushed%27`);
        await bothToHaveName(page, 'Pushed');
        expect(errors).toHaveLength(0);
      });

      test(`survives history being wrapped again on top — ${url}`, async ({
        page,
      }) => {
        // patching is not exclusive: someone else's wrapper installed later has
        // to still run, and ours has to still fire underneath it
        await page.goto(url);
        await page.waitForSelector('[data-testid="wrapper"]');

        await page.getByTestId('wrap-history').click();
        await page.getByTestId('push-raw').click();

        await toHaveUrl(page, `${url}?name=%27Pushed%27`);
        await bothToHaveName(page, 'Pushed');
        expect(
          await page.evaluate(
            () => (window as unknown as { __outerRan?: boolean }).__outerRan,
          ),
        ).toBe(true);
      });
    });
  }
});
