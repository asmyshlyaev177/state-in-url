import { highlight } from '../highlighter';

export const File = async ({
  name,
  content,
}: {
  name: string;
  content: string;
}) => {
  const text = await highlight(content);

  return (
    <div
      className="text-white codeblock shadow-md hover:shadow-2xl bg-white border border-gray-200 rounded-lg dark:border-gray-700 h-full"
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

      <code>
        <pre
          dangerouslySetInnerHTML={{ __html: text }}
          className="bg-gray-800 max-sm:text-[0.7rem] max-sm:p-2 font-mono p-5 text-current"
        ></pre>
      </code>
    </div>
  );
};
