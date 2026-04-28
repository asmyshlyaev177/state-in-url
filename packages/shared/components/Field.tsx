import React from 'react';
import { clsx } from 'clsx';

export const Field = ({
  children,
  text,
  id,
  className,
}: {
  children: React.ReactNode;
  text: string;
  id: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        'mb-1 block whitespace-nowrap text-sm font-medium',
        className,
      )}
      style={{ color: 'var(--ink-2, #6b7280)' }}
    >
      <label
        className="mb-2 block select-none hover:cursor-pointer"
        style={{ color: 'var(--ink, #1c1917)' }}
        htmlFor={id}
      >
        {text}
      </label>
      {children}
    </div>
  );
};
