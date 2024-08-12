import {
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import { createHighlighterCore } from 'shiki/core';
import tsLang from 'shiki/langs/typescript.mjs';
import githubTheme from 'shiki/themes/github-dark.mjs';
import getWasm from 'shiki/wasm';

const createHighlighter = async () =>
  await createHighlighterCore({
    themes: [githubTheme],
    langs: [tsLang],
    loadWasm: getWasm,
  });

let highlighter: Awaited<ReturnType<typeof createHighlighter>>;

export const File = async ({
  name,
  content,
}: {
  name: string;
  content: string;
}) => {
  if (!highlighter) {
    highlighter = await createHighlighter();
  }
  const html = await highlighter.codeToHtml(content, {
    lang: 'typescript',
    theme: 'github-dark',
    transformers: [
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
    ],
  });

  return (
    <noindex>
      <div
        className="codeblock shadow-md bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4"
        data-nosnippet="true"
      >
        <div className="font-mono text-sm pb-2 select-none">{name}</div>

        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </noindex>
  );
};
