'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { localePrefix, stripLocale, type Locale } from '../i18n';
import type { SiteCopy } from '../i18n/copy/types';

/**
 * Route-driven, like the Tabs: PageShell renders this on every page and the
 * lookup decides — top-level pages (and the test fixtures) get nothing,
 * subpages get their trail right under the top bar, above the hero.
 *
 * The matching BreadcrumbList JSON-LD is emitted by each subpage's route
 * (see `breadcrumbJsonLd` in VsNuqsPage) — keep the two in step.
 */
const CRUMB_OF: Record<string, (copy: SiteCopy) => string> = {
  '/vs/nuqs': (copy) => copy.comparison.title,
};

export const Breadcrumbs = ({
  copy,
  locale,
}: {
  copy: SiteCopy;
  locale: Locale;
}) => {
  const pathname = usePathname();
  const label = CRUMB_OF[stripLocale(pathname)];
  if (!label) return null;

  const home = localePrefix(locale.code) || '/';

  return (
    <nav aria-label={copy.chrome.breadcrumbs} className="-mt-5 mb-7 w-full">
      <ol className="text-ink2 flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            href={home}
            className="font-medium text-[var(--accent-on-soft)] hover:underline"
          >
            {copy.chrome.home}
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="text-ink font-medium">
          {label(copy)}
        </li>
      </ol>
    </nav>
  );
};
