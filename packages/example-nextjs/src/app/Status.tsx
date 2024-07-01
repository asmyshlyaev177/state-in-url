'use client';
import React from 'react';

import { useUrlState } from 'state-in-url';
// import { useUrlState } from '../../../../dist';
import { form } from './form';

export const Status = ({ className }: { className?: string }) => {
  const { state } = useUrlState(form);

  return (
    <div className={className}>
      <div className="font-semibold mb-2 text-black">
        Other client component
      </div>
      <h3 className="text-black">Types and structure of data are presered</h3>

      <div className="flex-none  ">
        <pre
          className="h-[330px] text-sm overflow-y-scroll
         text-gray-600 bg-white p-4 rounded-md shadow-inner
          break-words whitespace-pre-wrap"
        >
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </div>
  );
};

// TODO: move to main lib
// function usePrevious<T>(value: T) {
//   const ref = React.useRef(value);

//   React.useEffect(() => {
//     if (JSON.stringify(value) !== JSON.stringify(ref.current)) {
//       ref.current = value;
//     }
//   }, [value]);

//   return ref.current;
// }

// function useChangedValue<T>(value: T) {
//   const valuePrev = usePrevious(value);

//   return JSON.stringify(value) !== JSON.stringify(valuePrev)
//     ? value
//     : valuePrev;
// }
