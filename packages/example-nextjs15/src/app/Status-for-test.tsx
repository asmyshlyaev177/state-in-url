'use client';
import React from 'react';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';

const Status = ({ className, sp }: { className?: string; sp?: object }) => {
  const { state } = useUrlState({ defaultState: form, searchParams: sp });

  return (
    <div className={className}>
      <div className="font-semibold mb-2">
        Other client component
      </div>
      <h3 className="">Types and structure of data are presered</h3>

      <div className="flex-none">
        <pre
          className="h-[330px] text-sm overflow-y-scroll text-gray-600 bg-white p-4 rounded-md shadow-inner break-all whitespace-pre-wrap"
          data-testid="parsed"
        >
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </div>
  );
};

const Wrapper = ({ className, sp }: { className?: string; sp?: object }) => {
  const [key, setKey] = React.useState(Math.random());

  return (
    <div>
      <Status key={key} className={className} sp={sp} />
      <button
        onClick={() => setKey(Math.random())}
        className="p-4"
        data-testid="remount"
      >
        remount
      </button>
    </div>
  );
};

export { Wrapper as Status };
