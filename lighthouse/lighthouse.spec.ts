/**
 * Lighthouse audits of the demo site, against the production build.
 *
 * See THRESHOLDS below for why performance is the one category not held at 100.
 */
import { chromium, test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';

import { PREVIEW_URL } from '../playwright.lighthouse.config';

/**
 * The public pages only — what a visitor to state-in-url.dev actually lands on.
 *
 * The app also serves `/useUrlState`, `/test-ssr`, `/useSharedState` and the
 * rest of the `(tests)` route group. Those are fixtures for the Playwright e2e
 * suite that happen to be deployed with everything else: they exist to be
 * driven by assertions, not read, and several deliberately render in ways no
 * real page would. Auditing them would hold the library's test harness to a
 * marketing page's standards and produce failures nobody should act on.
 */
const PAGES = [
  { path: '/', name: '/ (useUrlState demo)' },
  { path: '/react-router', name: '/react-router' },
  { path: '/remix', name: '/remix' },
  { path: '/vs/nuqs', name: '/vs/nuqs' },
];

/**
 * Accessibility, best-practices and SEO are deterministic audits of the
 * document and every page scores 100, so they are held there.
 *
 * Performance is not 100 and setting it there would be wishful. Measured
 * August 2026 on all three pages: **99**, held across repeated runs, and the
 * shortfall is entirely one metric — LCP at ~1030 ms, scoring 0.94 of a
 * weight-25 audit. Everything else is perfect (FCP ~290 ms, total blocking
 * time 6-13 ms, speed index ~400 ms).
 *
 * 95 is therefore a real bar rather than a rubber stamp: it is ~4 points below
 * what the pages reliably measure, which absorbs runner variance while still
 * failing on anything that actually regresses — an unoptimised image, a
 * client bundle that grows, a blocking third-party script. Because total
 * blocking time is near zero, almost no main-thread work is in play, so a
 * slower CI runner moves this number far less than it would for a
 * hydration-heavy app.
 *
 * If it starts flaking anyway, lower this one number rather than deleting the
 * assertion. The real performance signal is field data and PageSpeed Insights
 * against production.
 */
const THRESHOLDS = {
  performance: 95,
  accessibility: 100,
  'best-practices': 100,
  seo: 100,
};

test.describe('Lighthouse', () => {
  // Serial: two Chrome instances auditing at once skew each other's
  // performance numbers, and there is nothing to gain by racing three runs.
  test.describe.configure({ mode: 'serial' });

  for (const { path, name } of PAGES) {
    // No fixture parameter: this test drives its own browser, and Playwright
    // rejects a named first argument ("First argument must use the object
    // destructuring pattern"), leaving `{}` as the only spelling — which is
    // itself a lint error. `test.info()` is the way out of both.
    test(`${name} meets Lighthouse thresholds`, async () => {
      // Lighthouse drives the browser over CDP, which needs a debugging port
      // Playwright's own `page` fixture does not expose. Offset by worker index
      // so a future parallel run cannot collide on it.
      const port = 9333 + test.info().workerIndex;
      const browser = await chromium.launch({
        args: [`--remote-debugging-port=${port}`],
      });

      try {
        const page = await browser.newPage();
        await page.goto(`${PREVIEW_URL}${path}`, { waitUntil: 'networkidle' });

        await playAudit({
          page,
          port,
          thresholds: THRESHOLDS,
          // Desktop, not Lighthouse's mobile default: mobile applies a 4x CPU
          // slowdown, which turns the performance score into a measurement of
          // the runner rather than the site.
          config: desktopConfig,
          disableLogs: false,
        });
      } finally {
        await browser.close();
      }
    });
  }
});
