'use client';
import { useSearchParams } from 'next/navigation';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';

// Passes URLSearchParams instance from useSearchParams() directly to useUrlState.
// This tests the SSR path where filterUnknownParams receives a URLSearchParams object.
const StatusUsp = ({ className }: { className?: string }) => {
  const sp = useSearchParams();
  const { urlState } = useUrlState(form, { searchParams: sp });

  return (
    <div className={className}>
      <pre data-testid="parsed-usp">{JSON.stringify(urlState, null, 2)}</pre>
    </div>
  );
};

export { StatusUsp };
