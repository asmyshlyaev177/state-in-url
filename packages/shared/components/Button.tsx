import { clsx } from "clsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from "./Button.module.css";

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
