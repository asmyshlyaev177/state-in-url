'use client';
/* eslint-disable max-lines-per-function */
import React from 'react';
import { useUrlState } from 'state-in-url/next';

import { Field } from './components/Field';
import { Input } from './components/Input';
import { SourceCodeBtn } from './components/SourceCodeBtn';
import { Tag } from './components/Tag';
import { form } from './form';
import { RefreshButton } from './Refresh';

export const Form = ({
  className,
  searchParams,
}: {
  className?: string;
  searchParams?: object;
}) => {
  // const { state, updateState, updateUrl } = useUrlState(form, searchParams);
  const { state, updateState, updateUrl } = useUrlState({
    defaultState: form,
    searchParams,
  });
  const [autoSync, setAutoSync] = React.useState(true);

  // set URI when state change
  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    if (!autoSync) {
      return () => {};
    }

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      updateUrl(state);
    }, 1000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [state, updateUrl, autoSync]);

  // OR
  // const handleSync = React.useCallback(() => {
  //   clearTimeout(timer.current)
  //   if (!autoSync) return false
  //   timer.current = setTimeout(() => updateUrl(getState()), 1000)
  // }, [updateUrl, getState, timer, autoSync])

  const onChangeAge = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const val = +ev.target.value;
      updateState({ age: val ? val : undefined });
    },
    [updateState],
  );

  const onChangeName = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      updateState({ name: ev.target.value });
    },
    [updateState],
  );

  const onChangeTerms = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timer.current);
      updateUrl({ 'agree to terms': ev.target.checked });
    },
    [updateUrl],
  );

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      updateState((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [updateState],
  );

  return (
    <div className={className}>
      <div className="flex flex-1 flex-col border border-grey rounded-md p-4 shadow-md">
        <div className="font-semibold text-black mb-4">
          First client component
        </div>

        <div
          className="space-y-6 flex-col"
          //   onBlur={handleSync}
          //   onChange={handleSync}
          //  onClick={handleSync}
        >
          <Field id="name" text="Name">
            <Input id="name" value={state.name} onChange={onChangeName} />
          </Field>

          <Field id="age" text="Age">
            <Input
              id="age"
              type="number"
              value={state.age}
              onChange={onChangeAge}
            />
          </Field>

          <Field
            id="agree to terms"
            text="Agree to terms"
            className="flex gap-2 max-w-[150px] min-w-[150px] flex-row justify-between"
          >
            <Input
              id="agree to terms"
              type="checkbox"
              className="max-w-[24px]"
              checked={state['agree to terms']}
              onChange={onChangeTerms}
            />
          </Field>

          <Field
            id="auto sync"
            text="Auto sync"
            className="flex gap-2 max-w-[150px] min-w-[150px] flex-row justify-between"
          >
            <Input
              id="auto sync"
              type="checkbox"
              className="max-w-[24px]"
              checked={autoSync}
              onChange={(ev) => setAutoSync(ev.target.checked)}
            />
          </Field>

          <Field id="tags" text="Tags">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag
                  active={!!state.tags.find((t) => t.id === tag.id)}
                  text={tag.value.text}
                  onClick={() => onChangeTags(tag)}
                  key={tag.id}
                />
              ))}
            </div>
          </Field>

          <RefreshButton />
        </div>

        <SourceCodeBtn
          href="https://github.com/asmyshlyaev177/state-in-url/blob/main/packages/example-nextjs/src/app/Form.tsx"
          className="self-end ml-auto mt-4"
        />
      </div>
    </div>
  );
};

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
