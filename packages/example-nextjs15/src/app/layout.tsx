// import { Analytics } from '@vercel/analytics/react';
import { Roboto } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'
// import Script from 'next/script'

import { metadata as _metadata, jsonLd } from './seoStuff';
import { isVercel, vercelUrl, siteUrl } from './domain';
import { isProd } from '../../../../consts'
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
  display: 'swap',
});

export const revalidate = 172800; // 48 hours

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* {!isProd && <script src="https://unpkg.com/react-scan/dist/auto.global.js" async /> } */}

        {isVercel && <link rel="canonical" href={vercelUrl}></link>}
        <meta name="google-site-verification" content="NKunqTB4Sd_Bp6zoIbzKvw_WoGB-v2-MXxC5mbKJKJw" />
        {/* {isProd && isVercel && <Script src="/heatmap.js" strategy='afterInteractive'/>} */}
        <meta name="title" content={_metadata.title as string}></meta>
        <meta name="description" content={_metadata.description || ''}></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="alternate" type="text/markdown" href={`${siteUrl}/llms.txt`} title="LLM-friendly version" />
        <meta name="llms-txt" content={`${siteUrl}/llms.txt`} />
      </head>
      <body className={`${roboto.className}`}>
        {children}
        {isProd && isVercel ? <GoogleAnalytics gaId="G-5N8Y565DXK" /> : null }
        {/* {isProd && isVercel ? <Analytics /> : null} */}
      </body>
    </html>
  );
}

export const metadata = _metadata
