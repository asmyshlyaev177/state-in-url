interface Props extends React.DOMAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}
export const Button = ({ className, children, disabled, ...props }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`p-4 font-semibold rounded-md
       bg-sky-200 dark:bg-sky-200 shadow-sm
        hover:bg-sky-300 hover:dark:bg-sky-300
        dark:text-black disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
