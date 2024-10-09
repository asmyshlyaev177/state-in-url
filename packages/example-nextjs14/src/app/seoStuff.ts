import { type SoftwareApplication, type WithContext } from 'schema-dts';

import packageJson from '../../../../package.json';
import { vercelUrl } from './domain';
import { type Metadata } from 'next';

export const jsonLd: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'state-in-url',
  description:
    'NPM Library to store complex state in browser URL, includes hook for NextJS and React-router, hooks for pure React, solution for deep links.',
  accessibilityControl: 'textual',
  accessMode: 'textual',
  author: {
    '@type': 'Person',
    name: 'asmyshlyaev177',
    identifier: 'https://github.com/asmyshlyaev177',
    url: 'https://www.linkedin.com/in/asmyshlyaev177/',
  },
  thumbnailUrl:
    'https://github.com/asmyshlyaev177/state-in-url/blob/main/assets/Demo-gif.gif',
  applicationCategory: 'State management for Web Applications',
  url: 'https://github.com/asmyshlyaev177/state-in-url',
  sameAs: 'https://github.com/asmyshlyaev177/state-in-url',
  softwareRequirements: ['JavaScript', 'Web Browser', 'npm'],
  license:
    'https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/main/LICENSE',
  softwareVersion: packageJson.version,
  releaseNotes:
    'https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/main/CHANGELOG.md',
  discussionUrl: 'https://github.com/asmyshlyaev177/state-in-url/discussions',
  isAccessibleForFree: true,
  accessibilityFeature: ['fullMouseControl', 'readingOrder', 'ARIA'],
  accessibilityHazard: 'none',
  offers: [],
  operatingSystem: 'All',
};


const meta = {
  title: 'state-in-url - query parameters for state management',
  description:
    'Share state between unrelated React components with URL sync, IDE autocomplete and TS validation. Deep links made easy. No  hasssle or boilerplate. For Next.js and react-router.',
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    url: vercelUrl,
    siteName: 'state-in-url',
    title: meta.title,
    description: meta.description,
    images: [
      {
        url: `${vercelUrl}/social_banner.jpg`,
        width: 1280,
        height: 640,
        alt: 'state-in-url library image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
} as Metadata;
