import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
  display: 'swap',
});

export const revalidate = 60 * 60 * 48; // 48 hours

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      <body className={`${roboto.className}`}>
        {children}
      </body>

    </html>
  );
}
