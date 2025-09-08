import { type SoftwareApplication, type WithContext } from 'schema-dts';

import packageJson from '../../../../package.json';
import { vercelUrl } from './domain';
import { type Metadata } from 'next';
import { isProd } from 'consts';

export const jsonLd: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'state-in-url',
  description:
    'NPM Library to store complex state objects in browser URL, while preserving types and structure, solution for deep links and URL state synchronization, for Next.JS14/15 and React-router, hooks for pure React.',
  accessibilityControl: 'textual',
  accessMode: 'textual',
  author: {
    '@type': 'Person',
    name: 'asmyshlyaev177',
    identifier: 'https://github.com/asmyshlyaev177',
    url: 'https://www.linkedin.com/in/asmyshlyaev177/',
  },
  thumbnailUrl:
    'https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif',
  applicationCategory: 'DeveloperApplication',
  downloadUrl: 'https://github.com/asmyshlyaev177/state-in-url',
  installUrl: 'https://www.npmjs.com/package/state-in-url',
  url: 'https://state-in-url.dev',
  sameAs: 'https://state-in-url.netlify.app',
  softwareRequirements: ['JavaScript', 'Web Browser', 'npm'],
  license:
    'https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/master/LICENSE',
  softwareVersion: packageJson.version,
  releaseNotes:
    'https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/master/CHANGELOG.md',
  discussionUrl: 'https://github.com/asmyshlyaev177/state-in-url/discussions',
  isAccessibleForFree: true,
  accessibilityFeature: ['fullMouseControl', 'readingOrder', 'ARIA'],
  accessibilityHazard: 'none',
  offers: {
    '@type': 'Offer',
    'price': 0
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


const meta = {
  title: 'state-in-url - store state in URL like in JSON, type-safe',
  description:
    'Store any user state in query parameters; imagine JSON in a browser URL, while keeping types and structure of data. For Next.js, React-router and pure JS',
};

export const metadata = {
  metadataBase: isProd
    ? new URL(vercelUrl)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  title: meta.title,
  description: meta.description,
  icons: {
    icon: [
      {
        url: "/images/logo.svg",
        href: "/images/logo.svg",
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
    canonical: vercelUrl,
  },

  other: {
    'script:ld+json': JSON.stringify(jsonLd),
  },
} as Metadata;
