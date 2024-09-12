'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useUrlEncode } from 'state-in-url';

import { stateShape } from './state';
import { toJSON } from './utils';
import { Textarea } from '../../../../../shared/components';

export const Comp2 = ({ className }: { className: string }) => {
  const searchParams = useSearchParams();

  const { parse } = useUrlEncode(stateShape);

  return (
    <Textarea
      className={className}
      value={toJSON(parse(searchParams))}
      data-testid="parsed"
      onChange={() => {}}
    ></Textarea>
  );
};
