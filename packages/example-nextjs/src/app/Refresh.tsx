'use client';
import { Button } from './components/Button';

export const RefreshButton = ({ className }: { className?: string }) => {
  return (
    <Button
      onClick={() => {
        window.location.reload();
      }}
      className={className}
      name="Reload page"
    >
      Reload page
    </Button>
  );
};
