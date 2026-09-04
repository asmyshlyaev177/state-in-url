import React from 'react';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/astro';

type Props = { className?: string; searchParams?: Record<string, string> };

const Status = ({ className, searchParams }: Props) => {
  const { urlState } = useUrlState(form, { searchParams });

  return (
    <div className={className}>
      <div className="mb-2 font-semibold">Other island</div>
      <h3>Types and structure of data are preserved</h3>

      <div className="flex-none">
        <pre
          className="h-[330px] overflow-y-scroll whitespace-pre-wrap break-all rounded-md bg-white p-4 text-sm text-gray-600 shadow-inner"
          data-testid="parsed"
        >
          {JSON.stringify(urlState, null, 2)}
        </pre>
      </div>
    </div>
  );
};

const Wrapper = (props: Props) => {
  const [key, setKey] = React.useState(0);

  return (
    <div>
      <Status key={key} {...props} />
      <button
        onClick={() => setKey((k) => k + 1)}
        className="p-4"
        data-testid="remount"
      >
        remount
      </button>
    </div>
  );
};

export { Wrapper as Status };
