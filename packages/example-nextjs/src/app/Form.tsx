'use client';
import React from 'react';
import { Field, Input } from 'shared/components';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';

import { RefreshButton } from './components/Refresh';
import { SourceCodeBtn } from './components/SourceCodeBtn';
import { Tag } from './components/Tag';

export const Form = ({
  className,
  searchParams,
}: {
  className?: string;
  searchParams?: object;
}) => {
  const { state, updateState, updateUrl } = useUrlState({
    defaultState: form,
    searchParams,
  });

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
      updateUrl({ 'agree to terms': ev.target.checked });
    },
    [updateUrl],
  );

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      updateUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [updateUrl],
  );

  const doSync = React.useCallback(() => updateUrl(), [updateUrl]);

  return (
    <div className={className}>
      <div className="flex flex-1 flex-col border border-grey rounded-md p-4 shadow-md hover:shadow-lg">
        <div className="font-semibold text-black mb-4">
          First client component
        </div>

        <div className="space-y-6 flex-col">
          <Field id="name" text="Name">
            <Input
              id="name"
              value={state.name}
              onChange={onChangeName}
              onBlur={doSync}
            />
          </Field>

          <Field id="age" text="Age">
            <Input
              id="age"
              type="number"
              value={state.age}
              onChange={onChangeAge}
              onBlur={doSync}
            />
          </Field>

          <Field
            id="agree to terms"
            text="Agree to terms"
            className="flex flex-row justify-between gap-2 max-w-[150px] min-w-[150px]"
          >
            <Input
              id="agree to terms"
              type="checkbox"
              className="max-w-[24px]"
              checked={state['agree to terms']}
              onChange={onChangeTerms}
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
