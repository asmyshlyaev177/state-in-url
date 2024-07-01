interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded-md
         shadow-sm focus:ring-orange-500 focus:border-orange-500
          ${className}
      ${props.type === 'checkbox' ? 'w-6 h-6 cursor-pointer' : 'w-full'}`}
      {...props}
    />
  );
};
