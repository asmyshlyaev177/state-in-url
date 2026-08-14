import { expect, type Page, test } from '@playwright/test';

import { ignoredErrors, toHaveUrl } from './testUtils';

// Next only. The hook takes `navigate` as an argument, so only the fixture's
// router differs per framework — and Next is where a wrong one fails silently:
// `history.pushState` changes the URL without leaving the page.
const url = '/test-link-props';
const target = '/test-use-client';

const fillName = async (page: Page, name: string) => {
  await page.locator('#name').fill(name);
  await page.waitForURL(new RegExp(`name=%27${name}%27`));
};

test.describe('useLinkProps', () => {
  test('renders the href it was given, without state', async ({ page }) => {
    await page.goto(`${url}?name=%27Bob%27`);

    await expect(page.getByTestId('plain')).toHaveAttribute('href', target);
    await expect(page.getByTestId('own-params')).toHaveAttribute(
      'href',
      `${target}?page=2`,
    );
    await expect(page.getByTestId('external')).toHaveAttribute(
      'href',
      'https://example.com/',
    );
  });

  test('carries the state to the other route', async ({ page }) => {
    const errorLogs: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errorLogs.push(message.text());
    });

    await page.goto(url);
    await fillName(page, 'Alex');
    await page.getByTestId('plain').click();

    await toHaveUrl(page, `${target}?name=%27Alex%27`);
    await expect(page.getByTestId('parsed')).toContainText('"name": "Alex"');
    expect(errorLogs.filter((err) => ignoredErrors.includes(err))).toHaveLength(
      0,
    );
  });

  test('state ahead of the URL still makes the trip', async ({ page }) => {
    await page.goto(url);
    await page.getByTestId('state-only').fill('Alex');
    await expect(page).toHaveURL(url);

    await page.getByTestId('plain').click();

    await toHaveUrl(page, `${target}?name=%27Alex%27`);
  });

  test('keeps params the shape does not own', async ({ page }) => {
    await page.goto(`${url}?utm_source=hn`);
    await fillName(page, 'Alex');
    await page.getByTestId('plain').click();

    await toHaveUrl(page, `${target}?utm_source=hn&name=%27Alex%27`);
  });

  test("the href's own params and hash survive", async ({ page }) => {
    await page.goto(url);
    await fillName(page, 'Alex');
    await page.getByTestId('own-params').click();
    await toHaveUrl(page, `${target}?page=2&name=%27Alex%27`);

    await page.goBack();
    await page.getByTestId('hash').click();
    await toHaveUrl(page, `${target}?name=%27Alex%27#bottom`);
  });

  test('default state leaves the href alone', async ({ page }) => {
    await page.goto(url);
    await page.getByTestId('plain').click();

    await toHaveUrl(page, target);
  });

  test('a modified click is left to the browser', async ({ page, context }) => {
    await page.goto(url);
    await fillName(page, 'Alex');

    const opened = context.waitForEvent('page');
    await page.getByTestId('plain').click({ modifiers: ['ControlOrMeta'] });
    const tab = await opened;
    await tab.waitForLoadState();

    await expect(tab).toHaveURL(new RegExp(`${target}$`));
    await toHaveUrl(page, `${url}?name=%27Alex%27`);
  });

  test('a link with a target is left to the browser', async ({
    page,
    context,
  }) => {
    await page.goto(url);
    await fillName(page, 'Alex');

    const opened = context.waitForEvent('page');
    await page.getByTestId('new-tab').click();
    const tab = await opened;
    await tab.waitForLoadState();

    await expect(tab).toHaveURL(new RegExp(`${target}$`));
  });

  test('an external href is never rewritten', async ({ page }) => {
    await page.route('https://example.com/**', (route) =>
      route.fulfill({ body: 'ok' }),
    );

    await page.goto(url);
    await fillName(page, 'Alex');
    await page.getByTestId('external').click();

    await expect(page).toHaveURL('https://example.com/');
  });
});
