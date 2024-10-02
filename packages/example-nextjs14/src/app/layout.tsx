import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

// import 'shared/styles.css';

import { isVercel, netifyUrl, vercelUrl } from './domain';
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* TODO: https://github.com/vercel/next.js/discussions/53540 */}
      <link rel="canonical" href={vercelUrl}></link>
      <link rel="alternate" href={netifyUrl}></link>
      <body className={`${roboto.className}`}>{children}</body>
      {isVercel ? <Analytics /> : null}
    </html>
  );
}

const meta = {
  title: 'state-in-url - query parameters for state management',
  description:
    'Share state between unrelated React components with URL sync, IDE autocomplete and TS validation. No  hasssle or boilerplate. For Next.js and react-router.',
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
