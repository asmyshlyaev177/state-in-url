import { type SoftwareApplication, type WithContext } from 'schema-dts';

import packageJson from '../../../../package.json';
import { CONTENT_LAST_MODIFIED } from './contentDate';
import { vercelUrl } from './domain';
import {
  languageAlternates,
  localeFromParam,
  localePrefix,
  ogLocale,
} from './i18n';
import { copyFor } from './i18n/copy';
import { copy } from './i18n/copy/en';
import { type Metadata } from 'next';
import { isProd } from '../../../../consts';

export const jsonLd: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://state-in-url.dev/#software',
  name: 'state-in-url',
  description:
    'NPM Library to store complex state objects in browser URL, while preserving types and structure, solution for deep links and URL state synchronization, for Next.JS 14-16 and React-router, hooks for pure React.',
  // `accessibilityControl` takes values from the "control" vocabulary
  // (fullKeyboardControl / fullMouseControl / fullTouchControl); "textual" is
  // an accessMode value and was rejected as an enum violation there.
  accessibilityControl: [
    'fullKeyboardControl',
    'fullMouseControl',
    'fullTouchControl',
  ],
  accessMode: ['textual', 'visual'],
  author: {
    '@type': 'Person',
    '@id': 'https://asmyshlyaev177.dev/#person',
    name: 'Aleksandr Smyshliaev',
    alternateName: 'asmyshlyaev177',
    identifier: 'https://github.com/asmyshlyaev177',
    url: 'https://asmyshlyaev177.dev/',
  },
  maintainer: { '@id': 'https://asmyshlyaev177.dev/#person' },
  // `thumbnailUrl` has to resolve to an image. The old value pointed at
  // GitHub's HTML *page* for the GIF (/blob/), which serves text/html.
  thumbnailUrl:
    'https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/master/assets/Demo-gif.gif',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'React state management library',
  downloadUrl: 'https://www.npmjs.com/package/state-in-url',
  installUrl: 'https://www.npmjs.com/package/state-in-url',
  // `codeRepository` and `programmingLanguage` are SoftwareSourceCode
  // properties, not SoftwareApplication ones, and sat here invalid until the
  // `softwareHelp` fix below stopped masking them. The source is a work in its
  // own right, so it becomes a node the application is based on — which keeps
  // both facts instead of dropping them to satisfy the type.
  isBasedOn: {
    '@type': 'SoftwareSourceCode',
    name: 'state-in-url source',
    codeRepository: 'https://github.com/asmyshlyaev177/state-in-url',
    programmingLanguage: 'TypeScript',
  },
  url: 'https://state-in-url.dev',
  sameAs: [
    'https://github.com/asmyshlyaev177/state-in-url',
    'https://www.npmjs.com/package/state-in-url',
    'https://state-in-url.netlify.app',
  ],
  softwareRequirements: [
    'React 18 or later',
    'TypeScript moduleResolution: Bundler',
  ],
  license: 'https://opensource.org/licenses/MIT',
  softwareVersion: packageJson.version,
  dateModified: CONTENT_LAST_MODIFIED.slice(0, 10),
  releaseNotes:
    'https://github.com/asmyshlyaev177/state-in-url/blob/master/CHANGELOG.md',
  // `softwareHelp` expects a CreativeWork, not a URL — a bare string is
  // rejected by schema.org and by schema-dts. The documentation is a work in
  // its own right, so it gets a node rather than being flattened to a link.
  softwareHelp: {
    '@type': 'CreativeWork',
    name: 'state-in-url documentation',
    url: 'https://state-in-url.dev/llms.txt',
  },
  discussionUrl: 'https://github.com/asmyshlyaev177/state-in-url/discussions',
  isAccessibleForFree: true,
  accessibilityFeature: ['readingOrder', 'ARIA', 'structuralNavigation'],
  accessibilityHazard: 'none',
  // Google's SoftwareApplication rules require `priceCurrency` alongside
  // `price`, and `price` as a string. `{ price: 0 }` alone failed validation,
  // which drops the whole node from rich-result eligibility.
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  operatingSystem: 'Web Browser',
  featureList: [
    'React.js/Next.js/Remix.js/react-router state management',
    'URI state',
    'URL state',
    'React.js URL state management',
    'queryString parser/stringifier',
  ],
};

/**
 * The `text/markdown` alternates every page declares, in the order they matter.
 *
 * This page's own mirror first: a client that takes the first
 * `rel="alternate" type="text/markdown"` it finds should get the page it asked
 * about, and fall back to the site summary only after. Both go through Next's
 * metadata rather than a hand-written <link> in layout.tsx, because tags from
 * the two sources land in <head> in an order nothing guarantees — and this
 * ordering is the whole point.
 */
function markdownAlternates(mirrorPath: string) {
  return [
    { url: `${vercelUrl}${mirrorPath}`, title: 'This page as Markdown' },
    { url: `${vercelUrl}/llms.txt`, title: 'LLM-friendly summary (llms.txt)' },
  ];
}

// The homepage's title and description, and the site-wide default the other
// two routes override through `pageMetadata`. The JSON-LD above is structured
// data, not copy, and stays here.
const meta = copy.meta.home;

export const metadata = {
  metadataBase: isProd
    ? new URL(vercelUrl)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  title: meta.title,
  description: meta.description,
  icons: {
    icon: [
      {
        url: '/images/logo.svg',
        href: '/images/logo.svg',
      },
    ],
  },

  openGraph: {
    url: vercelUrl,
    siteName: 'state-in-url.dev',
    title: meta.title,
    description: meta.description,
    images: [
      {
        url: `/social_banner.png`,
        width: 1280,
        height: 640,
        alt: 'state-in-url social banner',
      },
      {
        url: `/images/logo.svg`,
        width: 1280,
        height: 640,
        alt: 'state-in-url library image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    site: 'state-in-url.dev',
    creator: '@asmyshlyaev177',
    title: meta.title,
    description: meta.description,
    images: [`/social_banner.png`],
  },

  alternates: {
    // Homepage only. /react-router and /remix set their own — see
    // `pageMetadata` below. Inheriting this one made both of them declare the
    // homepage as canonical, which asks Google to drop them from the index
    // while the sitemap still lists them.
    canonical: vercelUrl,
    // English is one member of the hreflang cluster, not its owner: every
    // locale of a page must list every other one *and* itself, or the cluster
    // is discarded wholesale. `x-default` points back here.
    languages: languageAlternates(vercelUrl, ''),
    types: { 'text/markdown': markdownAlternates('/index.md') },
  },
} as Metadata;

/**
 * Per-page title, description, and canonical URL for the router-variant demos.
 *
 * Without this they inherit the root layout's metadata verbatim: the same
 * title, the same description, and a canonical pointing at the homepage. Three
 * URLs claiming to be one page is a duplicate-content signal, and the canonical
 * actively asks search engines to index only `/`.
 */
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${vercelUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(vercelUrl, path),
      // Appending `.md` to a URL is the convention agents converged on, but
      // not one they reliably discover unaided — this is how the page says
      // it is there.
      types: { 'text/markdown': markdownAlternates(`${path}.md`) },
    },
    openGraph: { ...metadata.openGraph, url, title, description },
    twitter: { ...metadata.twitter, title, description },
  };
}

/**
 * Metadata for a translated page.
 *
 * Three things have to move together and are easy to get half-right: the
 * canonical points at this locale's own URL (never at English, which would ask
 * Google to drop it), `languages` carries the full reciprocal hreflang cluster,
 * and `openGraph.locale` uses OG's `language_TERRITORY` spelling rather than a
 * BCP 47 tag.
 *
 * The Markdown alternates deliberately stay English. `/index.md`,
 * `/react-router.md` and `/remix.md` all serve public/llms.txt, which is one
 * English document by design — agents get English, and there is no per-locale
 * mirror to point at.
 */
export function localeMetadata({
  localeDir,
  path,
}: {
  localeDir: string;
  path: string;
}): Metadata {
  const locale = localeFromParam(localeDir);
  if (!locale) return {};

  const copy = copyFor(locale.code);
  const metaByPath: Record<string, { title: string; description: string }> = {
    '/react-router': copy.meta.reactRouter,
    '/remix': copy.meta.remix,
    '/vs/nuqs': copy.meta.vsNuqs,
  };
  const page = metaByPath[path] ?? copy.meta.home;

  const url = `${vercelUrl}${localePrefix(locale.code)}${path}`;
  const mirror = path === '' ? '/index.md' : `${path}.md`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
      languages: languageAlternates(vercelUrl, path),
      types: { 'text/markdown': markdownAlternates(mirror) },
    },
    openGraph: {
      ...metadata.openGraph,
      url,
      title: page.title,
      description: page.description,
      locale: ogLocale(locale.code),
    },
    twitter: {
      ...metadata.twitter,
      title: page.title,
      description: page.description,
    },
  };
}
