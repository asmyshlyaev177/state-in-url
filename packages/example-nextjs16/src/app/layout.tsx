import { Roboto } from 'next/font/google';

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
      <head>
        <title>Next.js 16 Tests</title>
      </head>
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Next.js 16 Tests',
  description: 'Test pages for Next.js 16',
};
