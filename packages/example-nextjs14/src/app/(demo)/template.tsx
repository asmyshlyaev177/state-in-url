import dynamic from 'next/dynamic';
import React from 'react';

import 'shared/styles.css';

import { Logo } from '../components/Logo';

const Footer = dynamic(
  () => import('../components/Footer').then((mod) => mod.Footer),
  { loading: () => <div className="min-h-[48px]"></div> },
);

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="page-main">
      <div className="wrapper relative">
        <header className="header">
          <div className="wrapper">
            <div className="branding">
              <Logo className="logo" />

              <div className="text">
                <h1 className="title">State in url</h1>
                <p className="subtitle">State management and URL sync</p>
              </div>
            </div>

            <p className="desc">
              Store complex state in query parameters; imagine JSON in a browser URL, while keeping types and structure of data.
            </p>
          </div>
        </header>

        {children}
      </div>

      <Footer />
    </main>
  );
}
