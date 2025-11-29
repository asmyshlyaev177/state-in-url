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
      className="text-white codeblock shadow-md hover:shadow-2xl bg-white border border-gray-200 rounded-lg dark:border-gray-700 h-full transition-none"
      data-nosnippet="true"
    >
      <div className="flex h-12 justify-between bg-gray-900 font-mono border-b border-zinc-700 text-sm select-none">
        <div className="flex items-center border-zinc-700 border-l-2 h-full relative px-4 ">
          {name}
        </div>

        <div className="flex border-zinc-800 gap-2 items-center p-2 pl-4 h-auto">
          <div className="h-4 w-4 rounded-full bg-zinc-700"></div>
          <div className="h-4 w-4 rounded-full bg-zinc-700"></div>
          <div className="h-4 w-4 rounded-full bg-zinc-700"></div>
        </div>

      </div>

        <FakeTypes matchers={matchers} id={id}/>

        <Code content={content} id={id} className="bg-gray-800 max-sm:text-[0.7rem] max-sm:p-2 font-mono p-5 text-current" />

    </div>
  );
};
