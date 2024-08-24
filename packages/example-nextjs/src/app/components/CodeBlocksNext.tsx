import { File } from './File';

export const CodeBlocks = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-black text-center text-xl mt-2">
        1. Define the state
      </h2>
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

      <h2 className="text-black text-center text-xl mt-2">
        2. Use it in any components
      </h2>
      <File
        name="ComponentA"
        content={`'use client';

import { useUrlState } from 'state-in-url/next';// [!code highlight:1]

export const ComponentA = () => {
  const { state, updateUrl, updateState } = useUrlState({ defaultState: form });// [!code highlight:1]

  return <input
    id="name"
    value={state.name} // [!code highlight:3]
    onChange={(ev) => updateState({ name: ev.target.value })}
    onBlur={() => updateUrl()}
    />
};`}
      />
      <File
        name="ComponentB"
        content={`'use client';
import { useUrlState } from 'state-in-url/next';// [!code highlight:1]

export const ComponentB = ({ searchParams }: { searchParams?: object }) => {
  const { state } = useUrlState({ defaultState: form, searchParams });// [!code highlight:1]

// [!code word:state]
  return <div>name: {state.name}</div>
};`}
      />
    </div>
  );
};
