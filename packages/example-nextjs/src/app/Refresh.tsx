'use client';
import { twMerge } from 'tailwind-merge';

import { Button } from './components/Button';

export const RefreshButton = ({ className }: { className?: string }) => {
  return (
    <Button
      onClick={() => {
        window.location.reload();
      }}
      className={twMerge(`font-extrabold bg-orange-700 text-lg `, className)}
      name="Reload page"
    >
      Reload page
    </Button>
  );
};
