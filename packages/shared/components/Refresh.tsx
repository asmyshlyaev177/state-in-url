import React from 'react';
import { clsx } from 'clsx';

import { Button } from './Button';

/**
 * `label` is the visible (and accessible) text; the demo site passes its
 * localized copy. It defaults to English for the `*-for-test` fixtures in the
 * other example packages, which have no copy module.
 *
 * `name` stays hardcoded — the e2e suites select this button with
 * `button[name="Reload page"]`, so it is a hook, not something a reader sees.
 */
export const RefreshButton = React.memo(
  ({ className, label = 'Reload page' }: { className?: string; label?: string }) => {
    return (
      <Button
        onClick={() => {
          window.location.reload();
        }}
        className={clsx('text-lg font-extrabold transition', className)}
        name="Reload page"
      >
        {label}
      </Button>
    );
  },
);
