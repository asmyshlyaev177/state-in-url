import { Analytics } from '@vercel/analytics/react';
import { Roboto } from 'next/font/google';
import { metadata as _metadata } from './seoStuff';

import { isVercel, vercelUrl } from './domain';
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
      {isVercel && <link rel="canonical" href={vercelUrl}></link>}
      <meta name="google-site-verification" content="NKunqTB4Sd_Bp6zoIbzKvw_WoGB-v2-MXxC5mbKJKJw" />
      <body className={`${roboto.className}`}>
        {children}
      </body>
      {isVercel ? <Analytics /> : null}
    </html>
  );
}

export const metadata = _metadata
