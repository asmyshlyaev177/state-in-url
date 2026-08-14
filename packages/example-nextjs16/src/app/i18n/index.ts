// Everything the demo site needs to render a page in a language.
//
// The locale table comes from scripts/i18n/locales.mjs at the repo root — the
// same file the README tooling reads — so the site and the docs can never
// disagree about which languages exist or how they are spelled. Reaching
// outside the package works because next.config.mjs sets
// `experimental.externalDir`.

import {
  ALL_LOCALES,
  LOCALES,
  SOURCE,
  SOURCE_LOCALE,
  type Locale,
} from '../../../../../scripts/i18n/locales.mjs';

export { ALL_LOCALES, LOCALES, SOURCE, SOURCE_LOCALE };
export type { Locale };

/**
 * Open Graph wants `language_TERRITORY`, which is the one place a bare
 * language tag is not accepted.
 */
const OG_TERRITORY: Record<string, string> = {
  en: 'en_US',
  'zh-CN': 'zh_CN',
  ja: 'ja_JP',
  ko: 'ko_KR',
  ru: 'ru_RU',
  es: 'es_ES',
  'pt-BR': 'pt_BR',
  fr: 'fr_FR',
  vi: 'vi_VN',
};

export const ogLocale = (code: string) => OG_TERRITORY[code] ?? 'en_US';

/**
 * Locale tag for date formatting, where it differs from the content locale.
 * English means `en-GB` here — "12 August 2026", not "August 12, 2026" — which
 * is what the footer has always rendered.
 */
const DATE_LOCALE: Record<string, string> = { en: 'en-GB' };

export const dateLocale = (code: string) => DATE_LOCALE[code] ?? code;

/** `''` for English, `/ja` for the rest. English is served unprefixed. */
export const localePrefix = (code: string) => {
  const locale = ALL_LOCALES.find((l) => l.code === code);
  return !locale || locale.code === SOURCE_LOCALE ? '' : `/${locale.dir}`;
};

/** Resolve a `[locale]` route param; `undefined` for anything unknown. */
export const localeFromParam = (dir: string) => LOCALES.find((l) => l.dir === dir);

/**
 * Strip a leading locale segment, giving the locale-independent path.
 * `/ja/react-router` -> `/react-router`; `/ja` -> `/`.
 */
export function stripLocale(pathname: string): string {
  const first = pathname.split('/').filter(Boolean)[0];
  const locale = LOCALES.find((l) => l.dir === first);
  if (!locale) return pathname;
  const rest = pathname.slice(`/${locale.dir}`.length);
  return rest === '' ? '/' : rest;
}

/** The three public pages, locale-independent. */
export const PAGES = ['', '/react-router', '/remix'] as const;

/**
 * The reciprocal hreflang cluster for one page.
 *
 * Next's `alternates.languages` renders these as `<link rel="alternate"
 * hreflang>`. Every locale of a page lists every other one *and* itself, plus
 * `x-default` for English — a cluster whose members disagree about who is in
 * it is discarded wholesale rather than partially honoured.
 */
export function languageAlternates(origin: string, path: string) {
  const out: Record<string, string> = {};
  for (const locale of ALL_LOCALES) {
    out[locale.code] = `${origin}${localePrefix(locale.code)}${path}`;
  }
  out['x-default'] = `${origin}${path}`;
  return out;
}
