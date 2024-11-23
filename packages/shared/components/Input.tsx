import clsx from "clsx";

export const Input = ({ value, className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        "px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500",
        className,
        props.type === "checkbox" ? "w-6 h-6 cursor-pointer" : "w-full",
      )}
      value={value ?? ""}
      {...props}
    />
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
