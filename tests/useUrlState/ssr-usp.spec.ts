import { expect, test } from '@playwright/test';

import { ignoredErrors } from '../testUtils';

// Next.js examples: the bug affected the SSR path where filterUnknownParams
// received a URLSearchParams instance from useSearchParams() and returned {}
// instead of the actual params (Object.entries doesn't work on URLSearchParams).
const nextjsUrls = [
  '/test-ssr-usp',                        // nextjs15 (baseURL)
  'http://localhost:3001/test-ssr-usp',   // nextjs15
  'http://localhost:3002/test-ssr-usp',   // nextjs16
];

// React-router and Remix examples: no SSR URLSearchParams bug (they use
// filterUnknownParamsClient with sp.entries()), but should still read URL
// params correctly on initial render.
const otherUrls = [
  'http://localhost:5181/test-ssr-usp',   // react-router6
  'http://localhost:5182/test-ssr-usp',   // remix2
  'http://localhost:5183/test-ssr-usp',   // react-router7
];

const encodedName = "%27Alice%27";
const expectedName = 'Alice';

test.describe('SSR with URLSearchParams from useSearchParams()', () => {
  // This is the regression test for the filterUnknownParams bug. It disables JS
  // so only the server-rendered HTML is checked — with the bug, the server always
  // returned the schema default ("") because Object.entries(URLSearchParams) === [].
  for (const url of nextjsUrls) {
    test(`server-renders correct URL params without JS: ${url}`, async ({ browser }) => {
      const context = await browser.newContext({ javaScriptEnabled: false });
      const page = await context.newPage();

      try {
        await page.goto(`${url}?name=${encodedName}`);

        const parsed = page.getByTestId('parsed-usp');
        await expect(parsed).toBeVisible();
        await expect(parsed).toContainText(`"name": "${expectedName}"`);

        const text = await parsed.textContent();
        const state = JSON.parse(text || '{}');
        expect(state.name).toBe(expectedName);
        expect(state.agree_to_terms).toBe(false);
        expect(state.tags).toEqual([]);
      } finally {
        await context.close();
      }
    });
  }

  for (const url of [...nextjsUrls, ...otherUrls]) {
    test(`loads URL params on initial render without hydration mismatch: ${url}`, async ({ page }) => {
      const errorLogs: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errorLogs.push(msg.text());
        }
      });

      await page.goto(`${url}?name=${encodedName}`);

      const parsed = page.getByTestId('parsed-usp');
      await expect(parsed).toBeVisible();
      await expect(parsed).toContainText(`"name": "${expectedName}"`);

      const text = await parsed.textContent();
      const state = JSON.parse(text || '{}');
      expect(state.name).toBe(expectedName);
      expect(state.agree_to_terms).toBe(false);
      expect(state.tags).toEqual([]);

      // No console errors means no hydration mismatch — server and client
      // rendered the same value, confirming filterUnknownParams correctly
      // handles URLSearchParams instances on the server.
      const filteredErrors = errorLogs.filter((e) => !ignoredErrors.some((ignored) => e.includes(ignored)));
      expect(filteredErrors).toHaveLength(0);
    });
  }
});
