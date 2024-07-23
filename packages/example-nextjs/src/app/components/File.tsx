import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const File = ({ name, content }: { name: string; content: string }) => {
  return (
    <noindex>
      <div
        className="shadow-md  bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4"
        data-nosnippet="true"
      >
        <div className="font-mono text-sm pb-2 select-none">{name}</div>
        <SyntaxHighlighter
          language="typescript"
          style={a11yDark}
          wrapLongLines={true}
        >
          {content}
        </SyntaxHighlighter>
      </div>
    </noindex>
  );
};
