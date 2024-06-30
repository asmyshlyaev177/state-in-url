'use client';
import React from 'react';
import { Button } from './components/Button';
import { Field } from './components/Field';
import { Input } from './components/Input';

import { useUrlState } from 'state-in-url';
import { form } from './form';

export const Form = ({ className }: { className?: string }) => {
  const { state, updateState, updateUrl } = useUrlState(form);

  const [auto, setAuto] = React.useState(true);

  const handleChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      updateState((curr) => ({
        ...curr,
        [ev.target.id]:
          ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value,
      }));
    },
    [updateState],
  );

  const handleSave = () => {
    updateUrl(state);
  };

  // set URI when state change
  React.useEffect(() => {
    if (auto) {
      updateUrl(state);
    }
  }, [state, auto, updateUrl]);

  return (
    <div className={`flex flex-col gap-4 justify-between ${className}`}>
      <div className="font-bold">First client component</div>

      <Field>
        <label htmlFor="name">Name</label>
        <Input id="name" value={state.name} onChange={handleChange} />
      </Field>

      <Field>
        <label htmlFor="age">Age</label>
        <Input
          id="age"
          type="number"
          value={state.age}
          onChange={handleChange}
        />
      </Field>

      <Field>
        <label htmlFor="agree to terms">Agree to terms</label>
        <Input
          id="agree to terms"
          type="checkbox"
          checked={state['agree to terms']}
          onChange={handleChange}
        />
      </Field>

      <Field>
        <div className="flex gap-4">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="flex gap-2 justify-center items-center"
            >
              <label htmlFor={tag.id}>{tag.value.text}</label>
              <Input
                checked={!!state.tags.find((t) => t.id === tag.id)}
                id={tag.id}
                type="checkbox"
                onChange={() =>
                  updateState((curr) => ({
                    ...curr,
                    tags: curr.tags.find((t) => t.id === tag.id)
                      ? curr.tags.filter((t) => t.id !== tag.id)
                      : curr.tags.concat(tag),
                  }))
                }
              />
            </div>
          ))}
        </div>
      </Field>

      <div className="flex gap-4 w-full">
        <Button onClick={handleSave} disabled={auto} className="basis-1/3">
          Save
        </Button>
        <Field className="basis-2/3">
          <label htmlFor="auto-save-restore">Auto save/restore</label>
          <Input
            id="auto-save-restore"
            type="checkbox"
            checked={auto}
            onChange={() => setAuto((val) => !val)}
          />
        </Field>
      </div>
    </div>
  );
};

const tags = [
  { id: '1', value: { text: '1', time: new Date() } },
  { id: '2', value: { text: '2', time: new Date() } },
  { id: '3', value: { text: '3', time: new Date() } },
];
