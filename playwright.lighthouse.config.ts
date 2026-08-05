/**
 * Lighthouse guardrails for the demo site.
 *
 * Separate from `playwright.config.ts` on purpose. That suite is the library's
 * e2e coverage: it drives every example app across chromium/firefox/webkit and
 * asserts that URL state survives navigation. This one asks a different
 * question about a single app — `packages/example-nextjs16`, which is what
 * https://state-in-url.dev serves — and only about the pages a visitor sees.
 *
 * It audits the production build (`next build` + `next start`), never
 * `next dev`. The two differ in most of what is being scored: minified bundles,
 * no dev overlay, no HMR client, real prerendering.
 */
import { defineConfig } from '@playwright/test';

/**
 * Deliberately not 3002, which the demo's own `dev` and `start` scripts use: a
 * server left running from `pnpm run dev` would otherwise be silently accepted
 * in place of the build, and dev is the one thing this suite must not measure.
 */
const PREVIEW_PORT = 3012;

/** Exported for the spec, which drives its own browser over CDP and so never
 *  sees `baseURL`. */
export const PREVIEW_URL = `http://localhost:${PREVIEW_PORT}`;

export default defineConfig({
  testDir: './lighthouse',
  // Serial, one worker. Two Chrome instances auditing at once skew each other's
  // performance numbers — the audit ends up measuring the test runner rather
  // than the site. Note this is the opposite of playwright.config.ts, which
  // runs fully parallel; correctness tests want the speed, timing measurements
  // want the quiet machine.
  fullyParallel: false,
  workers: 1,
  retries: 0,
  // A cold Lighthouse run is far slower than an ordinary assertion.
  timeout: 180_000,
  reporter: [['list']],
  // No `use` block: every test launches its own browser (Lighthouse needs a
  // debugging port the `page` fixture does not expose), so nothing here would
  // reach it. That also means the browser projects in playwright.config.ts have
  // no equivalent here — Lighthouse only runs under chromium.

  webServer: {
    // `build:demo` is the wireit task, so it rebuilds the library first when
    // `packages/urlstate` has changed. Auditing the demo against a stale `dist`
    // would measure the previous release.
    command: 'pnpm run build:demo && pnpm run lighthouse:serve',
    url: PREVIEW_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
  },
});
