import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import 'shared/styles.css';

import { netifyUrl, vercelUrl } from './domain';
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
      <link rel="canonical" href={vercelUrl}></link>
      <link rel="alternate" href={netifyUrl}></link>
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}

const meta = {
  title: 'state-in-url State management and URL sync',
  description:
    'Easily share state between unrelated React components, with IDE autocomplete and TS validation. Without any hassle or boilerplate. For Next.js 14/15, React Router 6/7, and Remix 2',
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    url: vercelUrl,
    siteName: 'state-in-url.dev',
    title: meta.title,
    description: meta.description,
    images: [
      {
        url: `${vercelUrl}/social_banner.png`,
        width: 1280,
        height: 640,
        alt: 'state-in-url library image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
} as Metadata;
