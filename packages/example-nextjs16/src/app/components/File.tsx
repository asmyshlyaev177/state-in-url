import dynamicImport from 'next/dynamic';

import { Code } from './Code';
import { type Matcher } from '../types';

import { stringToHash } from '../utils';

const FakeTypes = dynamicImport(
  () => import('./FakeTypes').then((mod) => mod.FakeTypes),
  {
    loading: () => null,
  },
);

export const File = ({
  name,
  content,
  matchers,
  className = 'h-full',
}: {
  name: string;
  content: string;
  matchers?: Matcher[];
  /** Height utility for the root. The quick-start grid wants stretch; a stacked column wants natural height. */
  className?: string;
}) => {
  const id = stringToHash(content);

  return (
    <div
      className={`codeblock transition-none ${className}`}
      data-nosnippet="true"
    >
      <div className="codeblock-chrome">
        <div className="relative flex h-full items-center">{name}</div>

        <div className="codeblock-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <FakeTypes matchers={matchers} id={id} />

      <Code
        content={content}
        id={id}
        className="p-5 font-mono text-current max-sm:p-2 max-sm:text-[0.7rem]"
      />
    </div>
  );
};
