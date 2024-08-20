'use client';
import React from 'react';

import { init } from '../highlighter';

export const File = ({ name, content }: { name: string; content: string }) => {
  const [html, setHtml] = React.useState('');

  React.useInsertionEffect(() => {
    init().then((highlight) => {
      setHtml(highlight(content));
    });
  }, [content]);

  return (
    <noindex>
      <div
        className="codeblock shadow-md hover:shadow-2xl bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4"
        data-nosnippet="true"
      >
        <div className="font-mono text-sm pb-2 select-none">{name}</div>

        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </noindex>
  );
};
