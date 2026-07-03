import dynamicImport from 'next/dynamic';

import { Code } from './Code';
import { type Matcher } from '../types';

import { stringToHash } from '../utils';

const FakeTypes = dynamicImport(
  () => import('./FakeTypes')
    .then((mod) => mod.FakeTypes),
  {
    loading: () => null,
  },
);

export const File = ({
  name,
  content,
  matchers
}: {
  name: string;
  content: string;
  matchers?: Matcher[]
}) => {
  const id = stringToHash(content);

  return (
    <div
      className="codeblock h-full transition-none"
      data-nosnippet="true"
    >
      <div className="codeblock-chrome">
        <div className="flex items-center h-full relative">
          {name}
        </div>

        <div className="codeblock-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

        <FakeTypes matchers={matchers} id={id}/>

        <Code content={content} id={id} className="max-sm:text-[0.7rem] max-sm:p-2 font-mono p-5 text-current" />

    </div>
  );
};
