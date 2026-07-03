import React from 'react';

import './styles.css';

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="page-main">
      <div className="wrapper relative">
        {children}
      </div>
    </main>
  );
}
