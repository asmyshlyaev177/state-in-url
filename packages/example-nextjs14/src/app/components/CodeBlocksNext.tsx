import { File } from './File';

export const CodeBlocks = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className='text-3xl text-center' >Quick start</h2>
      <div className="text-center text-xl mt-2">
        1. Define the state
      </div>
      <File
        name="state"
        content={`export const form: Form = {
  name: '',
  age: undefined,
  'agree to terms': false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  'agree to terms': boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};`}
      />

      <div className="text-center text-xl mt-2">
        2. Use it in any components
      </div>
      <File
        name="ComponentA"
        content={`'use client';

import { useUrlState } from 'state-in-url/next';// [!code highlight:1]
import { form } from './form';

export const ComponentA = () => {
  // \`useHistory\` force to use window.history for navigation,
  // no _rsc requests https://github.com/vercel/next.js/discussions/59167
  const { urlState, setState, setUrlState } = useUrlState({ defaultState: form, useHistory: true });// [!code highlight:1]

  return <>
    <input
      id="name"
      value={urlState.name} // [!code highlight:3]
      onChange={(ev) => setState({ name: ev.target.value })}
      />
    // OR can update state immediately but sync change to url as needed
    <input
      value={urlState.name}
      onChange={(ev) => { setUrlState(curr => ({ ...curr, name: ev.target.value })) }}
      onBlur={() => setUrl()}
    />
    </>
};`}
      />
      <File
        name="ComponentB"
        content={`'use client';
import { useUrlState } from 'state-in-url/next';// [!code highlight:1]
import { form } from './form';

// "searchParams" used to pass params from Server Components
export const ComponentB = ({ searchParams }: { searchParams?: object }) => {
  const { urlState } = useUrlState({ defaultState: form, searchParams });// [!code highlight:1]

// [!code word:urlState]
  return <div>name: {urlState.name}</div>
};`}
      />
    </div>
  );
};
