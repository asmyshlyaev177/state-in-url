import { clsx } from "clsx";
import React from "react";

import { Button } from "./Button";
export const RefreshButton = React.memo(
  ({ className }: { className?: string }) => {
    return (
      <Button
        onClick={() => {
          window.location.reload();
        }}
        className={clsx(
          `transition font-extrabold bg-orange-700 text-lg text-white`,
          className,
        )}
        name="Reload page"
      >
        Reload page
      </Button>
    );
  },
);
