import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
});

const isDev = process.env.NODE_ENV === 'development';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
      {isDev ? null : <Analytics />}
    </html>
  );
}

const meta = {
  title: 'state-in-url state management',
  description:
    'Easily share state between unrelated React components, with IDE autocomplete and TS validation. Without any hasssle or boilerplate.',
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    url: 'https://state-in-url-asmyshlyaev177.vercel.app',
    siteName: 'Next.js',
    title: meta.title,
    description: meta.description,
    images: [
      {
        url: 'https://state-in-url-asmyshlyaev177.vercel.app/social_banner.jpg',
        width: 1280,
        height: 640,
        alt: 'state-in-url library image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// TODO: docs
export const runtime = 'edge';
