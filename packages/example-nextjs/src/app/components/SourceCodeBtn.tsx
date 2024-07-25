export const SourceCodeBtn = ({
  href,
  className,
}: {
  href: string;
  className?: string;
}) => {
  return (
    <div className="flex">
      <a
        href={href}
        rel="noopener nofollow"
        className={`inline-flex p-2 flex-nowrap justify-between items-center mr-3 px-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${className}`}
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11.5 -10.23174 23 20.46348"
          className="w-4 mr-2"
        >
          <circle cx="0" cy="0" r="2.05" fill="#519aba" />
          <g stroke="#519aba" stroke-width="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
        <span className="whitespace-nowrap">Source code</span>
      </a>
    </div>
  );
};
