'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useUrlEncode } from '../../../../urlstate/useUrlEncode';
import { Textarea } from './Textarea';
import { toJSON } from './utils';

export const Comp2 = ({ className }: { className: string }) => {
  const searchParams = useSearchParams();

  const { parse } = useUrlEncode<object>();

  return (
    <Textarea
      className={className}
      value={toJSON(parse(searchParams))}
      data-testid="parse"
      onChange={() => {}}
    ></Textarea>
  );
};
