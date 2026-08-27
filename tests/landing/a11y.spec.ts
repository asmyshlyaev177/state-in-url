import {
  COMPREHENSIVE_TAGS,
  auditA11y,
  describeViolation,
} from '@asmyshlyaev177/design-tokens/axe';
import {
  auditContrast,
  contrastFailures,
  describeContrast,
} from '@asmyshlyaev177/design-tokens/contrast';
import { expect, test, type Page } from '@playwright/test';

/**
 * The accessibility gate: axe-core for structure and semantics, `auditContrast`
 * for colour. One navigation feeds both, so a page is loaded once per theme
 * rather than once per audit.
 *
 * `pnpm test:tokens` proves the token file is sound; this proves the pages
 * reached for the right token, and that the markup around them is navigable.
 * Both floors come from the package, so a retuned ramp moves this suite with
 * it. Neither half is redundant with the Lighthouse accessibility score:
 * Lighthouse 13.4 runs 76 audits — 66 real axe rules plus 10 manual checklist
 * items that never execute — against axe's 104, weighted into an average
 * rather than a per-rule verdict.
 *
 * Public pages only — the `(tests)` route group renders deliberately broken
 * usage for the e2e suite and holding it to a marketing page's standards
 * produces failures nobody should act on.
 */
const PAGES = ['/', '/react-router', '/remix'];

/**
 * Rules axe declines to decide. Anything not listed fails the run, so a new
 * "needs review" finding gets looked at once rather than living unnoticed in a
 * section of the report nobody reads.
 */
const REVIEWED_INCOMPLETE: string[] = [];

/**
 * Both audits on one loaded page, every assertion soft: an axe violation must
 * not hide a contrast failure on the same page, or fixing one at a time turns
 * a single run into three.
 */
async function auditBoth(page: Page, minNodes: number) {
  const axe = await auditA11y(page, { tags: COMPREHENSIVE_TAGS });
  // A selector typo that scoped the scan to nothing would otherwise pass.
  expect.soft(axe.passes).toBeGreaterThan(0);
  expect.soft(axe.violations.map(describeViolation).join('\n')).toBe('');
  expect
    .soft(
      [...new Set(axe.incomplete.map((r) => r.id))].filter(
        (id) => !REVIEWED_INCOMPLETE.includes(id),
      ),
    )
    .toEqual([]);

  const { findings, unresolved } = await auditContrast(page);
  // Without these, a gradient over the whole page would leave the suite green
  // having measured nothing.
  expect.soft(findings.length).toBeGreaterThan(minNodes);
  expect.soft(unresolved).toBeLessThan(findings.length);
  expect
    .soft(contrastFailures(findings).map(describeContrast).join('\n'))
    .toBe('');
}

test.describe('accessibility (landing only)', () => {
  // Chromium only: the contrast half composites colours on a canvas and waits
  // out `document.getAnimations()`, both of which the other engines serialise
  // differently.
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only');

  // `<html data-theme="dark">` is unconditional here, so an OS preference must
  // change nothing. It did once elsewhere: an opt-in selector missing its
  // `:root` prefix let a light ramp leak into a dark page.
  for (const colorScheme of ['dark', 'light'] as const) {
    test.describe(`OS prefers ${colorScheme}`, () => {
      test.use({ colorScheme });

      for (const path of PAGES) {
        test(`${path} clears axe, WCAG 2 AA and the APCA floor`, async ({
          page,
        }) => {
          await page.goto(path);
          await auditBoth(page, 20);
        });
      }

      // A tag only takes its accent fill once selected, so a page load never
      // renders the pairing that fill has to carry.
      test('a selected tag clears both', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: 'React.js' }).click();
        await auditBoth(page, 20);
      });
    });
  }
});
