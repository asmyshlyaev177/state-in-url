'use client';

import React from 'react';

import { type RenderedMatcher } from '../types';

const MAX_WIDTH = 600;
const GAP = 16;

type State = { x: number; y: number; nodes: string[] };

const EMPTY: string[] = [];

export const FakeTypes = ({
  matchers,
  id,
}: {
  matchers?: RenderedMatcher[];
  id: string;
}) => {
  const [tooltip, setTooltip] = React.useState<State>({
    nodes: EMPTY,
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const codeBlock = document.querySelector<HTMLDivElement>(`[id="${id}"]`);
    if (!codeBlock) return;

    const onMove = (ev: MouseEvent) => {
      const target = ev.target as Node | null;
      const text = (target?.textContent || '').trim();
      const next = (target?.nextSibling?.textContent || '').trim();
      const match = matchers?.find((el) => el[0] === `${text}${next}`);

      if (match) {
        setTooltip((curr) =>
          curr.nodes === match[1]
            ? curr
            : { nodes: match[1], x: ev.clientX, y: ev.clientY },
        );
        return;
      }

      setTooltip((curr) =>
        curr.nodes.length ? { ...curr, nodes: EMPTY } : curr,
      );
    };

    const onLeave = () => setTooltip((curr) => ({ ...curr, nodes: EMPTY }));

    codeBlock.addEventListener('mousemove', onMove);
    codeBlock.addEventListener('mouseleave', onLeave);

    return () => {
      codeBlock.removeEventListener('mousemove', onMove);
      codeBlock.removeEventListener('mouseleave', onLeave);
    };
  }, [id, matchers]);

  if (!tooltip.nodes.length) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: Math.max(
          GAP,
          Math.min(tooltip.x + GAP, window.innerWidth - MAX_WIDTH - GAP),
        ),
        top: Math.max(GAP, tooltip.y - GAP),
        transform: 'translateY(-100%)',
      }}
      className="pointer-events-none z-50 max-w-[600px] rounded-md border border-slate-500 bg-slate-800 p-4 text-[12px] transition-none"
    >
      {tooltip.nodes.map((html, ind) => (
        <div key={ind} dangerouslySetInnerHTML={{ __html: html }} />
      ))}
    </div>
  );
};
