'use client';
import React from 'react';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';

import { SourceCodeBtn } from './components/SourceCodeBtn';

export const Status = ({
  className,
  sp,
  ghLink
}: {
  className?: string;
  sp?: object;
  ghLink: string;
}) => {
  const { urlState } = useUrlState(form, {
    searchParams: sp,
    replace: false,
  });

  return (
    <div className={`flex relative shadow-md hover:shadow-lg ${className} `}>
      <div className="font-semibold mb-2 ">
        Other client component
      </div>
      <h3 className="">Types and structure of data are presered</h3>

      <div className="flex-none">
        <pre
          className="h-[330px] text-sm overflow-y-scroll
         text-gray-600 bg-white p-4 rounded-md shadow-inner
          break-all whitespace-pre-wrap"
          data-testid="parsed"
        >
          <div>{'{'}</div>
            <div className="ml-4">
              <div><b>name:</b> {urlState.name}</div>
              <div><b>age:</b> {urlState.age}</div>
              <div><b>agree:</b> {JSON.stringify(urlState.agree_to_terms)}</div>
              <div><b>tags:</b> {JSON.stringify(urlState.tags, null, 2)}</div>
            </div>
          <div>{'}'}</div>
        </pre>
      </div>
      <SourceCodeBtn
        href={ghLink}
        className="self-end ml-auto mt-4 md:mt-auto"
      />
    </div>
  );
};
