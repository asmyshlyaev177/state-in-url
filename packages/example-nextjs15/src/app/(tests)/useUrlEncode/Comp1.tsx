'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Textarea } from 'shared/components';
import { useUrlEncode } from 'state-in-url';

import { stateShape } from './state';
import { fromJSON, toJSON } from './utils';

export const Comp1 = ({ className }: { className: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const { stringify } = useUrlEncode(stateShape);
  const [state, setState] = React.useState(stateShape);

  React.useEffect(() => {
    router.push(`${pathname}?${stringify(state)}`);
  }, [pathname, router, state, stringify]);

  return (
    <Textarea
      className={className}
      value={toJSON(state)}
      onChange={(ev) => {
        setState(fromJSON(ev.target.value) || {});
      }}
      data-testid="stringify"
    ></Textarea>
  );
};
