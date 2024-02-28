interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`text-black ${className}
      ${props.type === 'checkbox' ? 'hover:cursor-pointer w-8 h-8' : 'w-full'}`}
      {...props}
    />
  );
};
