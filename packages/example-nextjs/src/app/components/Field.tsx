export const Field = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-1 items-start
        rounded-lg p-4 bg-slate-200 dark:text-black shadow-md ${className}`}
    >
      {children}
    </div>
  );
};
