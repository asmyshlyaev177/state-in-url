'use client';
import React from 'react';
import { Field, Input, RefreshButton, Tag } from 'shared/components';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';

import { SourceCodeBtn } from './components/SourceCodeBtn';

export const Form = ({
  className,
  searchParams,
  ghLink
}: {
  className?: string;
  searchParams?: object;
  ghLink: string
}) => {
  const { urlState, setUrl } = useUrlState({
    defaultState: form,
    searchParams,
  });

  const onChangeAge = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const val = +ev.target.value;
      setUrl({ age: val ? val : undefined });
    },
    [setUrl],
  );

  const onChangeName = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setUrl({ name: ev.target.value });
    },
    [setUrl],
  );

  const onChangeTerms = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setUrl({ agree_to_terms: ev.target.checked });
    },
    [setUrl],
  );

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div className={className}>
      <div className="flex flex-1 flex-col border border-grey rounded-md p-4 shadow-md hover:shadow-lg">
        <div className="font-semibold  mb-4">
          First client component
        </div>

        <div className="space-y-6 flex-col">
          <Field id="name" text="Name">
            <Input
              id="name"
              value={urlState.name}
              onChange={onChangeName}
              name="name"
            />
          </Field>

          <Field id="age" text="Age">
            <Input
              id="age"
              type="number"
              value={urlState.age}
              onChange={onChangeAge}
              name="age"
            />
          </Field>

          <Field
            id="agree_to_terms"
            text="Agree to terms"
            className="flex flex-row justify-between gap-2 max-w-[150px] min-w-[150px]"
          >
            <Input
              id="agree_to_terms"
              type="checkbox"
              className="max-w-[24px]"
              checked={urlState['agree_to_terms']}
              onChange={onChangeTerms}
              name="agree_to_terms"
            />
          </Field>

          <Field id="tags" text="Tags">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag
                  active={!!urlState.tags.find((t) => t.id === tag.id)}
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
          href={ghLink}
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
