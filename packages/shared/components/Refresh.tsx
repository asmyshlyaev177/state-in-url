import { clsx } from 'clsx';

import { Button } from './Button';
export const RefreshButton = ({ className }: { className?: string }) => {
  return (
    <Button
      onClick={() => {
        window.location.reload();
      }}
      className={clsx(`font-extrabold bg-orange-700 text-lg`, className)}
      name="Reload page"
    >
      Reload page
    </Button>
  );
};
