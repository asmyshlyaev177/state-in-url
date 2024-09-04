'use client';
import React from 'react';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';

import { SourceCodeBtn } from './components/SourceCodeBtn';

export const Status = ({
  className,
  sp,
}: {
  className?: string;
  sp?: object;
}) => {
  const { state } = useUrlState({
    defaultState: form,
    searchParams: sp,
    replace: false,
  });

  return (
    <div className={`flex relative shadow-md hover:shadow-lg ${className} `}>
      <div className="font-semibold mb-2 text-black">
        Other client component
      </div>
      <h3 className="text-black">Types and structure of data are presered</h3>

      <div className="flex-none">
        <pre
          className="h-[330px] text-sm overflow-y-scroll
         text-gray-600 bg-white p-4 rounded-md shadow-inner
          break-all whitespace-pre-wrap"
          data-testid="parsed"
        >
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
      <SourceCodeBtn
        href="https://github.com/asmyshlyaev177/state-in-url/blob/main/packages/example-nextjs/src/app/Status.tsx"
        className="self-end ml-auto mt-4 md:mt-auto"
      />
    </div>
  );
};
