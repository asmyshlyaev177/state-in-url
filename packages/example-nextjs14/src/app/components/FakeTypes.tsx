'use client';

import React from 'react';

import { useFloating, autoUpdate, useClientPoint, offset } from '@floating-ui/react';

import { type Matcher, type Tooltip, type Langs } from '../types';
import { highlight } from '../highlighter';

export const FakeTypes = ({ matchers, id }: { matchers?: Matcher[], id: string }) => {
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

  React.useEffect(() => {
    const codeBlock = document.querySelector(`[id="${id}"]`)

    if (codeBlock && !(codeBlock as HTMLDivElement).onmousemove) {
      const matchTooltips = (ev: MouseEvent) => {
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

      (codeBlock as HTMLDivElement).onmousemove = matchTooltips;
      (codeBlock as HTMLDivElement).onmouseleave = () => setTooltip(curr => ({...curr, nodes: []}));

    }
  }, [id, tooltip.nodes, matchers])

  return tooltip.nodes.length ? <div
    style={floatingStyles}
    ref={refs.setFloating}
    className="text-[12px] p-4 absolute bg-slate-800 rounded-md max-w-[600px] transition-none border border-slate-500"
  >
    {tooltip.nodes.map((node, ind) => (
      <CodeClient content={node.text} lang={node.lang} key={ind} />
    ))}
  </div> : null
}

const CodeClient = ({ content, lang }: { content: string, lang?: Langs, id?: string }) => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    highlight(content, { lang }).then(setText)
  }, [content, lang])

  return <div dangerouslySetInnerHTML={{ __html: text || "." }} />
}
