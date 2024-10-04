'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export const UrlBox = () => {
  const sp = useSearchParams();
  const [url, setUrl] = React.useState('/');

  React.useEffect(() => {
    setUrl(
      '/' + window.location.search + window.location.hash,
    );
  }, [sp]);

  return (
    <form>
      <input
        id="url"
        readOnly
        className="w-full bg-slate-100 rounded-sm text-gray-700 font-mono"
        value={`url=${url}`}
        aria-label="URL"
      />
    </form>
  );
};
