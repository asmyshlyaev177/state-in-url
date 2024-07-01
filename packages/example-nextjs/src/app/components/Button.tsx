interface Props extends React.DOMAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}
export const Button = ({ className, children, disabled, ...props }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`w-full flex justify-center py-2 px-4 border border-transparent
         rounded-md shadow-sm text-sm font-medium text-white bg-orange-600
          hover:bg-orange-700 focus:outline-none focus:ring-2
           focus:ring-offset-2 focus:ring-orange-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
