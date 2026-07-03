export const SourceCodeBtn = ({
  href,
  className,
}: {
  href: string;
  className?: string;
}) => {
  return (
    <div className={`flex w-auto h-auto relative ${className}`}>
      <a
        href={href}
        rel="noopener nofollow"
        className={"inline-flex p-2 flex-nowrap justify-between items-center px-3 text-xs font-medium text-ink bg-surface border border-brand-dim rounded-lg focus:outline-none hover:brightness-95 focus:z-10 focus:ring-2 focus:ring-brand"}
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11.5 -10.23174 23 20.46348"
          className="w-4 mr-2"
        >
          <circle cx="0" cy="0" r="2.05" fill="#519aba" />
          <g stroke="#519aba" strokeWidth="1" fill="none">
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
