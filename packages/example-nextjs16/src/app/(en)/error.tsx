'use client';

import { useEffect } from 'react';

import { copy } from '../i18n/copy/en';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">{copy.errors.title}</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => reset()}
      >
        {copy.errors.retry}
      </button>
    </div>
  );
}
