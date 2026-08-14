'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type React from 'react';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';
import { useUrlEncode } from 'state-in-url/useUrlEncode';

import { ALL_LOCALES, localePrefix, PAGES, stripLocale, type Locale } from '../i18n';

/**
 * The language switcher: one real link per language, pointing at the current
 * page in that language.
 *
 * Anchors, not a `<select>` — a crawler follows links, not change handlers.
 * `<details>` because nine endonyms overflow the header row inline. Hidden
 * panel also means Next never prefetches the eight translations unopened.
 *
 * Returns null off the three translated pages: the fixture routes share this
 * chrome, and `/ja/test-ssr` is a 404 Next would prefetch into a console error.
 */
export function LanguagePicker({ current, label }: { current: Locale; label: string }) {
  const path = stripLocale(usePathname()).replace(/\/$/, '');
  const router = useRouter();
  // The demo's own `form` object — `useSharedState` keys on its identity.
  const { urlState, setUrl } = useUrlState(form);
  const { stringify } = useUrlEncode(form);
  if (!(PAGES as readonly string[]).includes(path)) return null;

  /**
   * Carry the demo state across, encoded by the library the page demonstrates.
   * `stringify` sets over `window.location.search`, so non-form params survive.
   *
   * On click, not in `href`: the markup keeps the clean URL that `hreflang`
   * has to agree with, and modified clicks fall through to it.
   */
  const keepDemoState = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    const query = stringify(urlState, window.location.search);
    if (!query) return;
    event.preventDefault();
    router.push(`${event.currentTarget.getAttribute('href')}?${query}`);
  };

  return (
    <details className="lang-picker">
      <summary>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
        </svg>
        <span className="sr-only">{label}: </span>
        {current.label}
      </summary>

      <nav aria-label={label}>
        {ALL_LOCALES.map((locale) =>
          locale.code === current.code ? (
            <span key={locale.code} aria-current="true">
              {locale.label}
            </span>
          ) : (
            <Link
              key={locale.code}
              href={`${localePrefix(locale.code)}${path}`.replace(/\/$/, '') || '/'}
              hrefLang={locale.code}
              onClick={keepDemoState}
            >
              {locale.label}
            </Link>
          ),
        )}
      </nav>
    </details>
  );
}
