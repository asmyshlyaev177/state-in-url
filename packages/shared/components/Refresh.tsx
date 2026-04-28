import React from 'react';
import { clsx } from 'clsx';

import { Button } from './Button';
export const RefreshButton = React.memo(
  ({ className }: { className?: string }) => {
    return (
      <Button
        onClick={() => {
          window.location.reload();
        }}
        className={clsx('text-lg font-extrabold transition', className)}
        name="Reload page"
      >
        Reload page
      </Button>
    );
  },
);
