import { File } from '../../components/File';
import { CodeBlockState } from '../CodeBlockState';
import { tooltips } from '../tooltips';

export const CodeBlocksRR = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className='text-3xl text-center' >Quick start</h3>
      <div className="codeTitle">
        1. Define the state
      </div>
      <CodeBlockState />

      <div className="codeTitle">
        2. Use it in any components
      </div>
      <File
        name="ComponentA"
        matchers={tooltips}
        content={`import { useUrlState } from 'state-in-url/react-router';// [!code highlight:1]
// for react-router v6
// import { useUrlState } from 'state-in-url/react-router6';
import { form } from './form';

export const ComponentA = () => {
  // see docs for all possible params https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/react-router/useUrlState
  const { urlState, setUrl, setState } = useUrlState(form);// [!code highlight:1]

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
    <button onClick={() => setUrl((curr, initial) => initial)}>
      Reset
    </button>
    </>
};`}
      />
      <File
        name="ComponentB"
        matchers={tooltips}
        content={`import { useUrlState } from 'state-in-url/react-router';// [!code highlight:1]
import { form } from './form';

export const ComponentB = () => {
  const { urlState } = useUrlState(form);// [!code highlight:1]

// will be defaultValue from \`form\` if not in url, no need to check
// [!code word:urlState]
  return <div>name: {urlState.name}</div>
};`}
      />
      <div className="codeTitle">
        3. Can create self-sufficient hook to manage slice of some state.
      </div>
      <File
        name="useFormState - custom hook"
        matchers={tooltips}
        content={`import React from 'react';
import { useUrlState } from 'state-in-url/react-router';

const form: Form={
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: {id: string; value: {text: string; time: Date } }[];
};

export const useFormState = () => {// [!code highlight:1]
  const { urlState, setUrl: setUrlBase, reset } = useUrlState(form);

  // first navigation will push new history entry
  // all following will just replace that entry
  // this way will have history with only 2 entries - ['/url', '/url?key=param']

  const replace = React.useRef(false);
  const setUrl = React.useCallback((
      state: Parameters<typeof setUrlBase>[0],
      opts?: Parameters<typeof setUrlBase>[1]
    ) => {
      setUrlBase(state, { replace: replace.current, ...opts });
      replace.current = true;
  }, [setUrlBase]);

  return { urlState, setUrl, resetUrl: reset };
};`} />
    </div>
  );
};
