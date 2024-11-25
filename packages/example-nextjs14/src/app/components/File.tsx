'use client'
import React from 'react';

import { useFloating, autoUpdate, useClientPoint, offset } from '@floating-ui/react';

import { Code } from './Code';
import { type Matcher, type Tooltip } from '../types';

export const File = ({
  name,
  content,
  matchers
}: {
  name: string;
  content: string;
  matchers?: Matcher[]
}) => {
  const [tooltip, setTooltip] = React.useState<{ x: number, y: number, nodes: Tooltip[] }>({ nodes: [], x: 0, y: 0 });

  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: 'top',
    middleware: [
      offset({ mainAxis: 20, crossAxis: 50 })
    ]
  });
  useClientPoint(context,
    { x: tooltip.x, y: tooltip.y }
  )

  const matchTooltips = (ev: React.MouseEvent) => {
    // @ts-expect-error fots
    const text = (ev?.target?.textContent || '').trim();
    // @ts-expect-error fots
    const next = (ev?.target?.nextSibling?.textContent || '').trim()

    // if (text?.length < 12) {
    //   console.log(`${text}${next}`, { ev, context })
    // }

    const match = matchers?.find(el => el[0] === `${text}${next}`)

    if (match) {
      if (match[1] !== tooltip.nodes) {
        setTooltip({ nodes: match[1], x: ev.clientX, y: ev.clientY })
      }
    } else if (tooltip.nodes.length) {
      setTooltip(curr => ({ ...curr, nodes: [] }))
    }
  }

  return (
    <div
      className="text-white codeblock shadow-md hover:shadow-2xl bg-white border border-gray-200 rounded-lg dark:border-gray-700 h-full transition-none"
      data-nosnippet="true"
    >
      <div className="flex h-12 justify-between bg-gray-900 font-mono border-b border-zinc-700 text-sm select-none">
        <div className="flex items-center border-zinc-700 border-l-2 h-full relative px-4 ">
          {name}
        </div>

        <div className="flex border-zinc-800 gap-2 items-center p-2 pl-4 h-auto">
          <div className="h-4 w-4 rounded-full bg-zinc-700"></div>
          <div className="h-4 w-4 rounded-full bg-zinc-700"></div>
          <div className="h-4 w-4 rounded-full bg-zinc-700"></div>
        </div>

      </div>

      {tooltip.nodes.length ? <div
        style={floatingStyles}
        ref={refs.setFloating}
        className="text-[12px] p-4 absolute bg-slate-800 rounded-md max-w-[600px] transition-none border border-slate-500"
      >
        {tooltip.nodes.map((node, ind) => (
          <Code content={node.text} lang={node.lang} key={ind} />
        ))}
      </div> : null}

      <div onMouseMove={matchTooltips}>

        <Code content={content} className="bg-gray-800 max-sm:text-[0.7rem] max-sm:p-2 font-mono p-5 text-current" />

      </div>

    </div>
  );
};
