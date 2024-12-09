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

  return (
    <div className={clsx("flex relative shadow-md hover:shadow-lg", className)}>
      <div className="font-semibold mb-2 ">
        Other client component
      </div>
      <h3>Types and structure of data are presered</h3>

      <div className="flex-none">
         <pre
          className="h-[330px] overflow-y-scroll text-gray-600 bg-white p-4 rounded-md shadow-inner break-all whitespace-pre-wrap leading-6"
          data-testid="parsed"
        >
          {/* <div>{'{'}</div>
          <div className="ml-4">
            <div><b>name:</b> {urlState.name}</div>
            <div><b>age:</b> {urlState.age}</div>
            <div><b>agree:</b> {JSON.stringify(urlState.agree_to_terms)}</div>
            <div><b>tags:</b> {JSON.stringify(urlState.tags, null, 2)}</div>
          </div>
          <div>{'}'}</div> */}

          {renderObject(urlState)}


        </pre>


      </div>
      <SourceCodeBtn
        href={ghLink}
        className="self-end ml-auto mt-4 md:mt-auto"
      />
    </div>
  );
})

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
        {Object.entries(obj as Object).map(([key, val])=> (
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
      {(obj as Array<SimpleVal | object | Array<SimpleVal>>).map(el => renderObject(el, level + 1))}
      <span style={{ marginLeft: level * mult }}>{']'}</span>
    </span>)
  }

}
