import { clsx } from 'clsx';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
