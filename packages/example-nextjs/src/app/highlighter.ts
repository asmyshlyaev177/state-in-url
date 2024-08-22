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
    themes: [githubTheme],
    langs: [tsLang],
    loadWasm: getWasm,
  });

export let highlighter: HighlighterCore;

export const highlight = async (content: string) => {
  if (!highlighter) {
    highlighter = await createHighlighter();
  }
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
