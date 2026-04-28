'use client';

import clsx from 'clsx';
import React from 'react';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';

import { typeOf } from 'packages/urlstate';

import { SourceCodeBtn } from './components/SourceCodeBtn';

export const Status = React.memo(({
  className,
  sp,
  ghLink
}: {
  className?: string;
  sp?: object;
  ghLink: string;
}) => {
  const { urlState } = useUrlState(form, {
    searchParams: sp,
    replace: false,
  });

  const prevStateRef = React.useRef<typeof urlState>(urlState);
  const [highlightCounters, setHighlightCounters] = React.useState<Record<string, number>>({});

  React.useEffect(() => {
    const changed: string[] = [];
    const prev = prevStateRef.current as Record<string, unknown>;
    const curr = urlState as Record<string, unknown>;

    for (const key of Object.keys(curr)) {
      if (JSON.stringify(curr[key]) !== JSON.stringify(prev[key])) {
        changed.push(key);
      }
    }
    prevStateRef.current = urlState;

    if (changed.length > 0) {
      setHighlightCounters((counters) => {
        const next = { ...counters };
        for (const key of changed) {
          next[key] = (counters[key] || 0) + 1;
        }
        return next;
      });
    }
  }, [urlState]);

  const mult = 6;

  return (
    <div className={clsx("flex relative shadow-md hover:shadow-lg", className)}>
      <div className="font-semibold mb-2 ">
        Other client component
      </div>
      <h3>Reads from URL — no props, no context, types and structure are preserved</h3>

      <div className="flex-none">
        <pre
          className="h-[330px] overflow-y-scroll text-ink2 bg-surface p-4 rounded-md shadow-inner break-all whitespace-pre-wrap leading-6"
          data-testid="parsed"
        >
          <span>{'{'}</span>
          {Object.entries(urlState as object).map(([key, val]) => (
            <div key={key} className="relative" style={{ marginLeft: 2 * mult }}>
              {highlightCounters[key] ? (
                <span
                  key={highlightCounters[key]}
                  className="sync-flash-overlay"
                  aria-hidden="true"
                />
              ) : null}
              <span className="font-semibold">{key}</span>: {renderObject(val, 1)}
            </div>
          ))}
          <span style={{ marginLeft: mult }}>{'}'}</span>
        </pre>
      </div>
      <SourceCodeBtn
        href={ghLink}
        className="self-end ml-auto mt-4 md:mt-auto"
      />
    </div>
  );
})

Status.displayName = 'Status';

type SimpleVal = string | number | boolean | undefined | null | Date

const primitives = ['string', 'number', 'boolean', 'null', 'undefined', 'date']
const mult = 6;

function renderObject(obj: object | Array<SimpleVal> | SimpleVal, level = 0, parentLevel = 1) {
  const type = typeOf(obj)

  if (primitives.includes(type)) {
    return (
      <span className={`group ml-2 inline-flex flex-nowrap gap-2`}>
        <span className='whitespace-break-spaces break-all'>{type === 'date' ? (obj as Date).toISOString() : String(obj)}</span>
        <span className={`transition-all text-xs opacity-0 group-hover:opacity-100 text-orange-600 group-hover:font-semibold group-hover:block whitespace-nowrap -mt-[0.3rem] -ml-[1ch]`}>{type}</span>
      </span>
    )
  }

  if (type === 'object') {
    return (
      <span className='relative' key={`${JSON.stringify(obj)}`}>
        <span>{'{'}</span>
        {Object.entries(obj as object).map(([key, val])=> (
          <div style={{ marginLeft: (level + 2) * mult }} key={key} className=''>
            <span className='font-semibold'>{key}</span>: {renderObject(val, level + 1)}

          </div>
        ))}
        <span style={{ marginLeft: (level + parentLevel) * mult }}>{'}'}</span>
      </span>
    )
  }

  if (type === 'array') {
    return (<span style={{ marginLeft: level * mult }} className='relative'>
      <span>{'['}</span>
      {(obj as Array<SimpleVal | object | Array<SimpleVal>>).map((el, index) =>
        <span key={index}>{renderObject(el, level + 1)}</span>
      )}
      <span style={{ marginLeft: level * mult }}>{']'}</span>
    </span>)
  }

}
