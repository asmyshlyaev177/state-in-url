import { clsx } from 'clsx';

export const Textarea = ({ className, value, onChange, ...rest }: Props) => {
  return (
    <textarea
      className={clsx(className)}
      style={{ color: 'var(--ink, #1c1917)' }}
      value={value}
      onChange={onChange}
      rows={30}
      {...rest}
    />
  );
};

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
  className: string;
  value: string;
  onChange?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'];
}
