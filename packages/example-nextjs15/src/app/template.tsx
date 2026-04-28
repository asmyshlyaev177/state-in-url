import dynamic from 'next/dynamic';
import React from 'react';

import './styles.css';

import { Logo } from './components/Logo';

const Footer = dynamic(
  () => import('./components/Footer').then((mod) => mod.Footer),
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
              <h1 className="title">State in url</h1>
            </div>
            <div className="brand-rule" role="presentation" />
            <p className="subtitle">State management and URL sync</p>
            <p className="desc">
              Sync any JavaScript state to URL query parameters — objects, arrays, and dates. Fully typed, shareable, and persistent across reloads.
            </p>
          </div>
        </header>

        {children}
      </div>

      <Footer />
    </main>
  );
}
