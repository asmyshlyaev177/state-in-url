import { clsx } from 'clsx';

// @ts-expect-error ccs module
import styles from './Button.module.css';

export const Button = ({
  className,
  children,
  disabled,
  name,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={clsx(styles.button, className)}
      name={name}
      {...props}
    >
      {children}
    </button>
  );
};

interface Props extends React.DOMAttributes<HTMLButtonElement> {
  name?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}
