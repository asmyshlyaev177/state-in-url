'use client';
import React from 'react';
import { Field } from './components/Field';

import { form } from './form';
import { useUrlState } from 'state-in-url';

export const Status = ({ className }: { className?: string }) => {
  const { state } = useUrlState(form);

  return (
    <div className={className}>
      <div className="font-bold mb-4">Other client component</div>
      <Field className="h-full">
        <h3 className="font-extrabold text-lg">
          Types and structure of data are presered
        </h3>
        <pre
          className="h-full p-2 rounded-sm bg-slate-100
              dark:text-black text-wrap break-all whitespace-pre-wrap
              self-stretch overflow-y-auto grow-0"
        >
          {JSON.stringify(state, null, 2)}
        </pre>
      </Field>
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
