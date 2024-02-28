'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useUrlEncode } from '../../../../urlstate';
import { Textarea } from './Textarea';
import { fromJSON, toJSON } from './utils';

export const Comp1 = ({ className }: { className: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const { stringify } = useUrlEncode<object>();
  const [state, setState] = React.useState({});

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
