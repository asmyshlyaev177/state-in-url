'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const UrlBox = ({ initialUrl = '/' }: { initialUrl?: string }) => {
  const sp = useSearchParams();
  const [url, setUrl] = React.useState(initialUrl);
  const [flashKey, setFlashKey] = React.useState(0);
  const isFirst = React.useRef(true);

  React.useEffect(() => {
    setUrl('/' + window.location.search + window.location.hash);

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    setFlashKey((k) => k + 1);
  }, [sp]);

  return (
    <div className={flashKey > 0 ? 'urlBar is-flashing' : 'urlBar'} key={flashKey}>
      <span className="urlBar-glyph">
        <GlobeIcon />
      </span>
      <form className="outline-none focus-visible:outline-none">
        <input
          id="url"
          readOnly
          value={url}
          aria-label="Current URL with synced state"
        />
      </form>
      {flashKey > 0 && (
        <span className="url-flash-overlay" aria-hidden="true" />
      )}
    </div>
  );
};
