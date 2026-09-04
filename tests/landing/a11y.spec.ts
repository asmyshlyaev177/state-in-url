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
 * axe for structure and semantics, `auditContrast` for colour, both against one
 * loaded page per theme. `pnpm test:tokens` proves the token file is sound;
 * this proves the pages reached for it, and both floors come from the package.
 *
 * Not covered by the Lighthouse suite: that runs 76 audits — 66 real axe rules
 * plus 10 manual items that never execute — against axe's 104, weighted into
 * an average rather than a per-rule verdict.
 *
 * Public pages only — the `(tests)` group renders deliberately broken usage for
 * the e2e suite, and its failures are not ones anyone should act on.
 */
const PAGES = ['/', '/react-router', '/remix', '/astro', '/vs/nuqs'];

/** Rules axe declines to decide. Anything unlisted fails, so a new one gets a
 *  decision once instead of living unread in the report. */
const REVIEWED_INCOMPLETE: string[] = [];

/** Every assertion soft, so one half cannot hide the other. */
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
  // A gradient over the page would otherwise leave the suite green having
  // measured nothing.
  expect.soft(findings.length).toBeGreaterThan(minNodes);
  expect.soft(unresolved).toBeLessThan(findings.length);
  expect
    .soft(contrastFailures(findings).map(describeContrast).join('\n'))
    .toBe('');
}

test.describe('accessibility (landing only)', () => {
  // Chromium only: the contrast half composites on a canvas and waits out
  // `document.getAnimations()`, which the other engines serialise differently.
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only');

  // `<html data-theme="dark">` is unconditional, so an OS preference must
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

      // A tag takes its accent fill only once selected, so a page load never
      // renders the pairing that fill has to carry.
      test('a selected tag clears both', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: 'React.js' }).click();
        await auditBoth(page, 20);
      });
    });
  }
});
