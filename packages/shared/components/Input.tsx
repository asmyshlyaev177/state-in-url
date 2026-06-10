import React from 'react';
import clsx from 'clsx';

export const Input = ({ value, className, ...props }: InputProps) => {
  const isCheckbox = props.type === 'checkbox';

  return (
    <input
      className={clsx(
        'rounded-md border px-3 py-2 shadow-sm transition-all duration-150 focus:outline-none focus:ring-2',
        className,
        isCheckbox ? 'h-6 w-6 cursor-pointer' : 'w-full',
      )}
      style={{
        // checkboxes keep the forms-plugin background so :checked
        // (background-color: currentColor + check icon) stays visible
        borderColor: isCheckbox
          ? undefined
          : 'var(--input-line, var(--brand-dim, #fed7aa))',
        backgroundColor: isCheckbox ? undefined : 'var(--input-bg, #fff)',
        color: isCheckbox
          ? 'var(--checkbox-fill, #ea580c)'
          : 'var(--input-ink, inherit)',
        // @ts-expect-error fots
        '--tw-ring-color': 'var(--brand, #ea580c)',
        '--tw-ring-offset-color': 'var(--surface, #fff)',
      }}
      value={value ?? ''}
      {...props}
    />
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
