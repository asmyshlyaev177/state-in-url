import {
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import { type HighlighterCore } from 'shiki';
import { createHighlighterCore } from 'shiki/core';
import tsLang from 'shiki/langs/typescript.mjs';
import githubTheme from 'shiki/themes/github-dark.mjs';
import getWasm from 'shiki/wasm';

export const createHighlighter = async () =>
  await createHighlighterCore({
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
    langs: [tsLang],
    loadWasm: getWasm,
  });

export let highlighter: HighlighterCore;


export const highlight = async (content: string) => {
  highlighter = await getHighlighter();

  return (
    highlighter?.codeToHtml?.(content, {
      lang: 'typescript',
      theme: 'github-dark',
      transformers: [
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
      ],
    }) || ''
  );
};

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter();
  }
  return highlighter
}

