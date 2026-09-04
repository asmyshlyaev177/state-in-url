import { expect, type Page, test } from '@playwright/test';

// No island on this page: the frontmatter decodes the request URL with
// decodeState and every link carries the next state through encodeState.
// The only client is the browser following links.
const url = 'http://example-astro.localhost:1355/pure-astro';

const parsed = async (page: Page) =>
  JSON.parse((await page.getByTestId('parsed-pure').textContent()) || '{}');

test.describe('pure Astro page, encodeState/decodeState in the frontmatter', () => {
  test.describe('without JavaScript', () => {
    test.use({ javaScriptEnabled: false });

    test('renders state from the URL', async ({ page }) => {
      await page.goto(`${url}?name=%27Alice%27`);

      expect(await parsed(page)).toEqual({
        name: 'Alice',
        agree_to_terms: false,
        tags: [],
      });
    });
  });

  test('links round-trip state through the URL, Date included', async ({
    page,
  }) => {
    await page.goto(url);

    await page.getByTestId('link-name').click();
    await expect(page).toHaveURL(`${url}?name=%27Alice%27`);
    expect((await parsed(page)).name).toBe('Alice');

    await page.getByTestId('link-tag').click();
    await expect(page).toHaveURL(/pure-astro\?name=%27Alice%27&tags=/);
    await expect(page.getByTestId('time-type')).toHaveText('Date');
    const state = await parsed(page);
    expect(state.name).toBe('Alice');
    expect(state.tags[0].value.time).toBe('2024-07-17T04:53:17.000Z');
  });

  test('a link built from the request params does not leak the other links', async ({
    page,
  }) => {
    // the name link is built first from the same Astro.url.searchParams; had
    // encodeState written into it, the tag link would carry name=Alice too
    await page.goto(url);

    await page.getByTestId('link-tag').click();
    await expect(page).toHaveURL(/pure-astro\?tags=/);
    expect((await parsed(page)).name).toBe('');
  });

  test('clear drops the keys the state owns and keeps the rest', async ({
    page,
  }) => {
    await page.goto(`${url}?name=%27Alice%27&k=1`);

    await page.getByTestId('link-clear').click();
    await expect(page).toHaveURL(`${url}?k=1`);
    // decodeState decodes every param it is given; only the hooks filter by shape
    expect(await parsed(page)).toEqual({
      name: '',
      agree_to_terms: false,
      tags: [],
      k: 1,
    });
  });
});
