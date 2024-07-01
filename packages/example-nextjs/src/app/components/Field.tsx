export const Field = ({
  className,
  children,
  text,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  text: string;
  id: string;
}) => {
  return (
    <div
      className={`block text-sm font-medium text-gray-700 mb-1 whitespace-nowrap ${className}`}
    >
      <label
        className="mb-2 block select-none hover:cursor-pointer"
        htmlFor={id}
      >
        {text}
      </label>
      {children}
    </div>
  );
};
