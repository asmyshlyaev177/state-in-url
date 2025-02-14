import React from 'react';
import clsx from 'clsx'

export const NpmLink = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) => {
  const { className, ...rest } = props;

  return (
    <a
      href="https://www.npmjs.com/package/state-in-url"
      target="_blank"
      className={clsx("inline-flex items-center px-2 py-[2px] border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500", className)}
      {...rest}
    >
      <svg
        className="mr-2 -ml-1 w-full h-8 translate-y-2 translate-x-3"
        fill="currentColor"
        viewBox="0 0 25 12"
      >
        <g id="surface1">
          <path stroke="none" fillRule="nonzero" fill="rgb(79.607844%,21.960784%,21.568628%)" fillOpacity="1" d="M 0 0 L 0 6.839844 L 5.558594 6.839844 L 5.558594 7.988281 L 10 7.988281 L 10 6.839844 L 20 6.839844 L 20 0 Z M 0 0 " />
          <path stroke="none" fillRule="nonzero" fillOpacity="1" fill="rgb(100%,100%,100%)" d="M 3.320312 1.148438 L 1.121094 1.148438 L 1.121094 5.691406 L 3.320312 5.691406 L 3.320312 2.292969 L 4.441406 2.292969 L 4.441406 5.691406 L 5.558594 5.691406 L 5.558594 1.148438 Z M 3.320312 1.148438 " />
          <path stroke="none" fillRule="nonzero" fillOpacity="1" fill="rgb(100%,100%,100%)" d="M 6.679688 1.148438 L 6.679688 6.839844 L 8.917969 6.839844 L 8.917969 5.691406 L 11.121094 5.691406 L 11.121094 1.148438 Z M 10 4.546875 L 8.917969 4.546875 L 8.917969 2.292969 L 10 2.292969 Z M 10 4.546875" />
          <path stroke="none" fillRule="nonzero" fillOpacity="1" fill="rgb(100%,100%,100%)" d="M 14.441406 1.148438 L 12.238281 1.148438 L 12.238281 5.691406 L 14.441406 5.691406 L 14.441406 2.292969 L 15.558594 2.292969 L 15.558594 5.691406 L 16.679688 5.691406 L 16.679688 2.292969 L 17.800781 2.292969 L 17.800781 5.691406 L 18.917969 5.691406 L 18.917969 1.148438 Z M 14.441406 1.148438 " />
        </g>
      </svg>
    </a>
  );
};
