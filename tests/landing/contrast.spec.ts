import {
  auditContrast,
  contrastFailures,
  describeContrast,
} from '@asmyshlyaev177/design-tokens/contrast';
import { expect, test } from '@playwright/test';

/**
 * Rendered-DOM contrast, which is what `pnpm test:tokens` cannot see: that
 * check proves the token file is sound, this proves the pages reached for the
 * right token. Both floors come from the package, so a retuned ramp moves this
 * suite with it.
 *
 * Public pages only — the `(tests)` route group renders deliberately broken
 * usage for the e2e suite and holding it to a marketing page's standards
 * produces failures nobody should act on.
 */
const PAGES = ['/', '/react-router', '/remix'];

const report = (findings: ReturnType<typeof contrastFailures>) =>
  findings.map(describeContrast).join('\n');

test.describe('rendered contrast (landing only)', () => {
  // Chromium only: the audit composites colours on a canvas and waits out
  // `document.getAnimations()`, both of which the other engines serialise
  // differently.
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only');

  // `<html data-theme="dark">` is unconditional here, so an OS preference must
  // change nothing. It did once elsewhere: an opt-in selector missing its
  // `:root` prefix let a light ramp leak into a dark page.
  for (const colorScheme of ['dark', 'light'] as const) {
    test.describe(`OS prefers ${colorScheme}`, () => {
      test.use({ colorScheme });

      for (const path of PAGES) {
        test(`${path} clears WCAG 2 AA and the APCA floor`, async ({ page }) => {
          await page.goto(path);
          const { findings, unresolved } = await auditContrast(page);

          // Without these, a gradient over the whole page would leave the
          // suite green having measured nothing.
          expect(findings.length).toBeGreaterThan(20);
          expect(unresolved).toBeLessThan(findings.length);

          expect(report(contrastFailures(findings))).toBe('');
        });
      }

      // A tag only takes its accent fill once selected, so a page load never
      // renders the pairing that fill has to carry.
      test('a selected tag clears both floors', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: 'React.js' }).click();

        const { findings } = await auditContrast(page);
        expect(findings.length).toBeGreaterThan(20);
        expect(report(contrastFailures(findings))).toBe('');
      });
    });
  }
});
