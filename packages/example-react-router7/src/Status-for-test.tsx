import React from "react";
import { form } from "shared/form";
import { useUrlState } from "state-in-url/react-router";

const Status = ({ className }: { className?: string }) => {
  const { urlState } = useUrlState(form);

  return (
    <div className={className}>
      <div className="font-semibold mb-2">Other client component</div>
      <h3>Types and structure of data are preserved</h3>

      <div className="flex-none">
        <pre
          className="h-[330px] text-sm overflow-y-scroll
         text-gray-600 bg-white p-4 rounded-md shadow-inner
          break-all whitespace-pre-wrap"
          data-testid="parsed"
        >
          {JSON.stringify(urlState, null, 2)}
        </pre>
      </div>
    </div>
  );
};

const Wrapper = ({ className }: { className?: string }) => {
  const [key, setKey] = React.useState(Math.random());

  return (
    <div>
      <Status key={key} className={className} />
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
