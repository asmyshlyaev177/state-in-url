'use client';
import { useSharedState } from 'state-in-url';

const STATE = { name: '', age: 0, agree: false };

export const FirstComponent = () => {
  const { state, setState } = useSharedState(STATE);
  return (
    <div className="shadow-md h-full">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={state.name}
          onChange={(ev) =>
            setState((curr) => ({ ...curr, name: ev.target.value }))
          }
        ></Input>
      </div>
      <div>
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          value={state.age || ''}
          type="number"
          onChange={(ev) =>
            setState((curr) => ({ ...curr, age: +ev.target.value }))
          }
        ></Input>
      </div>
      <div>
        <Label htmlFor="agree">Agree</Label>
        <Input
          id="agree"
          checked={state.agree}
          type="checkbox"
          onChange={(ev) =>
            setState((curr) => ({ ...curr, agree: ev.target.checked }))
          }
          data-testid="agree_to_terms"
        ></Input>
      </div>
    </div>
  );
};

export const SecondComponent = () => {
  const { state, setState } = useSharedState(STATE);

  return (
    <>
      <pre className="shadow-md h-full" data-testid="parsed">
        {JSON.stringify(state, null, 2)}
      </pre>
      <Input
        id="name"
        data-testid="name-input"
        value={state.name}
        onChange={(ev) =>
          setState((curr) => ({ ...curr, name: ev.target.value }))
        }
      ></Input>
    </>
  );
};

const Input = ({
  className,
  value,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      className={`px-3 py-2 border border-gray-300 rounded-md
         shadow-sm focus:ring-orange-500 focus:border-orange-500
          ${className}
      ${props.type === 'checkbox' ? 'w-6 h-6 cursor-pointer' : 'w-full'}`}
      value={value ?? ''}
      {...props}
    />
  );
};

const Label = (
  props: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >,
) => {
  return (
    <label
      {...props}
      className={`mb-2 block select-none hover:cursor-pointer ${props.className}`}
    >
      {props.children}
    </label>
  );
};
