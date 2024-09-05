'use client';

import { Button } from 'shared/components/Button';

export const RefreshButton = ({ className }: { className?: string }) => {
  return (
    <Button
      onClick={() => {
        window.location.reload();
      }}
      className={`font-extrabold bg-orange-700 text-lg justify-center ${className}`}
      name="Reload page"
    >
      Reload page
    </Button>
  );
};
