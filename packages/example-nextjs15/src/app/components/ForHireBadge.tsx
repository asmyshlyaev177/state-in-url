'use client';
import React, { useState } from 'react';

const PortfolioIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DISMISS_KEY = 'for-hire-dismissed';
const ENTERED_KEY = 'for-hire-entered';

export const ForHireBadge = () => {
  // 'hidden' until mounted, then 'enter' (animated) once per session, 'shown' after
  const [mode, setMode] = useState<'hidden' | 'enter' | 'shown'>('hidden');

  React.useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === '1') return;
      const entered = sessionStorage.getItem(ENTERED_KEY) === '1';
      sessionStorage.setItem(ENTERED_KEY, '1');
      setMode(entered ? 'shown' : 'enter');
    } catch {
      setMode('enter');
    }
  }, []);

  const onDismiss = () => {
    setMode('hidden');
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* private mode — dismiss for this render only */
    }
  };

  if (mode === 'hidden') return null;

  return (
    <aside className={mode === 'shown' ? 'for-hire-badge no-anim' : 'for-hire-badge'} aria-label="Available for hire">
      <button
        className="for-hire-close"
        onClick={onDismiss}
        aria-label="Close"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <line x1="1" y1="1" x2="11" y2="11" />
          <line x1="11" y1="1" x2="1" y2="11" />
        </svg>
      </button>

      <div className="for-hire-status">
        <span className="for-hire-dot" aria-hidden="true" />
        <span className="for-hire-available">Available for hire</span>
      </div>

      <nav className="for-hire-links" aria-label="Contact links">
        <a
          href="https://asmyshlyaev177.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="for-hire-link"
        >
          <PortfolioIcon />
          <span>Portfolio</span>
        </a>
        <a
          href="https://github.com/asmyshlyaev177"
          target="_blank"
          rel="noopener noreferrer"
          className="for-hire-link"
        >
          <GitHubIcon />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/asmyshlyaev177/"
          target="_blank"
          rel="noopener noreferrer"
          className="for-hire-link"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
      </nav>
    </aside>
  );
};
