import { Archivo, DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google'

import { metadata as _metadata, jsonLd } from './seoStuff';
import { isVercel, siteUrl } from './domain';
import { isProd } from '../../../../consts'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  display: 'swap',
});

export const viewport = {
  themeColor: '#211c17',
};

export const revalidate = 604800; // 7 days

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

        <meta name="google-site-verification" content="NKunqTB4Sd_Bp6zoIbzKvw_WoGB-v2-MXxC5mbKJKJw" />
        <meta name="title" content={_metadata.title as string}></meta>
        {isProd && <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />}

        <link rel="alternate" type="text/markdown" href={`${siteUrl}/llms.txt`} title="LLM-friendly version" />
        <meta name="llms-txt" content={`${siteUrl}/llms.txt`} />
      </head>
      <body className={`${archivo.variable} ${dmSans.variable} ${geistMono.variable} font-sans`}>
        {children}
        {isProd && isVercel ? <GoogleAnalytics gaId="G-5N8Y565DXK" /> : null }
      </body>
    </html>
  );
}

export const metadata = _metadata
