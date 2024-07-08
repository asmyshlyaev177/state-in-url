'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useUrlEncode } from '../../../../urlstate/useUrlEncode';
import { Textarea } from './Textarea';
import { toJSON } from './utils';
import { stateShape } from './state';

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
