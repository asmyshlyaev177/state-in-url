import dynamic from 'next/dynamic';

import '../../../../shared/styles.css';

import { Logo } from '../components/Logo';

const Footer = dynamic(
  () => import('../components/Footer').then((mod) => mod.Footer),
  { loading: () => <div className="min-h-[48px]"></div> },
);

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="page-main">
      <div className="wrapper">
        <header className="header">
          <div className="wrapper">
            <div className="branding">
              <Logo className="logo" />

              <div className="text">
                <h1 className="title">State in url</h1>
                <p className="subtitle">State management and deep links</p>
              </div>
            </div>

            <p className="desc">
              Share complex state between unrelated React.js components and sync
              it to the URL
            </p>
          </div>
        </header>

        {children}
      </div>

      <Footer />
    </main>
  );
}
