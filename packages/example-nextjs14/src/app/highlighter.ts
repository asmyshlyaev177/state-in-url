import {
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import { type HighlighterCore } from 'shiki';
import { createHighlighterCore } from 'shiki/core';
import markdown from 'shiki/langs/markdown.mjs'
import tsx from 'shiki/langs/tsx.mjs';
import githubTheme from 'shiki/themes/github-dark.mjs';
import getWasm from 'shiki/wasm';

import { Langs } from './types';

export const createHighlighter = () =>
  createHighlighterCore({
    themes: [
      {
        ...githubTheme,
        settings: [
          ...(githubTheme.tokenColors || []),
          {
            scope: [
              'comment',
              'punctuation.definition.comment',
              'string.comment',
            ],
            settings: {
              // use `rgb`, `hsl`, `hsla`,
              // or any anything supported by your renderer
              foreground: 'white',
            },
          },
        ],
        // Background and foreground colors
        bg: 'var(--code-bg)',
        fg: 'var(--code-fg)',
      },
    ],
    langs: [tsx, markdown],
    loadWasm: getWasm,
  });

export let highlighter: HighlighterCore;


export const highlight = (content: string, opts?: { lang?: Langs}) => {
  return getHighlighter().then(hi => hi.codeToHtml?.(content, {
    lang: opts?.lang || 'tsx',
    theme: 'github-dark',
    transformers: [
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
    ],
  }) || '')
};

function getHighlighter() {
  if (highlighter) {
    return Promise.resolve(highlighter)
  }

  return createHighlighter().then(hi => {
    highlighter = hi
    return Promise.resolve(hi)
  })
}

