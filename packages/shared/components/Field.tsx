import { clsx } from "clsx";
import React from "react";

export const Field = ({
  children,
  text,
  id,
  className,
}: {
  children: React.ReactNode;
  text: string;
  id: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        `block text-sm font-medium text-gray-700 mb-1 whitespace-nowrap`,
        className,
      )}
    >
      <label
        className="mb-2 block select-none hover:cursor-pointer text-black"
        htmlFor={id}
      >
        {text}
      </label>
      {children}
    </div>
  );
};
