import { File } from './File';

export const CodeBlocksRR = () => {
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
        content={`import { useUrlState } from 'state-in-url/react-router';// [!code highlight:1]
import { form } from './form';

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
        content={`import { useUrlState } from 'state-in-url/react-router';// [!code highlight:1]
import { form } from './form';

export const ComponentB = () => {
  const { state } = useUrlState({ defaultState: form });// [!code highlight:1]

// [!code word:state]
  return <div>name: {state.name}</div>
};`}
      />
    </div>
  );
};
