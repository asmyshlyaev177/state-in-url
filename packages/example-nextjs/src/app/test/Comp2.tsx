'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { stateShape } from './state';
import { Textarea } from './Textarea';
import { toJSON } from './utils';
import { useUrlEncode } from '../../../../urlstate';

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
