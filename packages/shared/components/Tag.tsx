import { clsx } from 'clsx';

// @ts-expect-error ccs module
import styles from './Tag.module.css';

export const Tag = ({
  text,
  onClick,
  active,
}: {
  text: string;
  onClick: () => void;
  active: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.tag, active && styles.active)}
    >
      {text}
    </button>
  );
};
