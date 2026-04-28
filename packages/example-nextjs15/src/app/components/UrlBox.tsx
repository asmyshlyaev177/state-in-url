'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

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
    <div className="relative">
      <form className="outline-none focus-visible:outline-none">
        <input
          id="url"
          readOnly
          className="w-full bg-surface rounded-sm text-ink2 font-mono"
          value={`url=${url}`}
          aria-label="URL"
        />
      </form>
      {flashKey > 0 && (
        <span
          key={flashKey}
          className="url-flash-overlay"
          aria-hidden="true"
        />
      )}
    </div>
  );
};
