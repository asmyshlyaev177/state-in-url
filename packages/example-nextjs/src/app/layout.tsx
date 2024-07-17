import { Analytics } from '@vercel/analytics/react';
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
