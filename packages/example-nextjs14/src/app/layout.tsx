import { Analytics } from '@vercel/analytics/react';
import { Roboto } from 'next/font/google';
import { metadata as _metadata } from './seoStuff';

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
      <body className={`${roboto.className}`}>
        {children}
      </body>
      {isVercel ? <Analytics /> : null}
    </html>
  );
}

export const metadata = _metadata
