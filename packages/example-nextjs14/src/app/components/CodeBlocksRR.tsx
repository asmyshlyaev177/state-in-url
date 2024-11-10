import { File } from './File';
import { CodeBlockState } from './CodeBlockState';

export const CodeBlocksRR = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className='text-3xl text-center' >Quick start</h2>
      <div className="text-center text-xl mt-2">
        1. Define the state
      </div>
      <CodeBlockState />

      <div className="text-center text-xl mt-2">
        2. Use it in any components
      </div>
      <File
        name="ComponentA"
        content={`import { useUrlState } from 'state-in-url/react-router';// [!code highlight:1]
import { form } from './form';

export const ComponentA = () => {
  // see docs for all possible params https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState
  const { urlState, setUrl, setState } = useUrlState(form, { replace: true });// [!code highlight:1]

  return <>
    <input
      id="name"
      value={urlState.name} // [!code highlight:3]
      onChange={(ev) => setUrl({ name: ev.target.value })}
      />
    // OR can update state immediately but sync change to url as needed
    <input
      value={urlState.name}
      onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
      onBlur={() => setUrl()}
    />
    </>
};`}
      />
      <File
        name="ComponentB"
        content={`import { useUrlState } from 'state-in-url/react-router';// [!code highlight:1]
import { form } from './form';

export const ComponentB = () => {
  const { urlState } = useUrlState(form);// [!code highlight:1]

// [!code word:urlState]
  return <div>name: {urlState.name}</div>
};`}
      />
    </div>
  );
};
