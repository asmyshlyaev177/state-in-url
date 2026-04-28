import React from 'react';
import clsx from 'clsx';

export const Input = ({ value, className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        'rounded-md border px-3 py-2 shadow-sm transition-all duration-150 focus:outline-none focus:ring-2',
        className,
        props.type === 'checkbox' ? 'h-6 w-6 cursor-pointer' : 'w-full',
      )}
      style={{
        borderColor: 'var(--brand-dim, #fed7aa)',
        // @ts-expect-error fots
        '--tw-ring-color': 'var(--brand, #ea580c)',
      }}
      value={value ?? ''}
      {...props}
    />
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
