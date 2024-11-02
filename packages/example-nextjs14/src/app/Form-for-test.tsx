'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Field, Input, RefreshButton, Tag } from 'shared/components';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';

export const Form = ({
  className,
  searchParams,
}: {
  className?: string;
  searchParams?: object;
  delay?: number;
}) => {
  const sp = useSearchParams();
  const { state, updateState, updateUrl } = useUrlState({
    defaultState: form,
    searchParams,
    replace: sp.get('replace') === 'false' ? false : true,
  });

  React.useEffect(() => {
    if (state?.tags?.length) {
      const dateObj = state.tags.find((t) => t?.value?.time);
      if (dateObj) {
        console.assert(
          dateObj?.value?.time instanceof Date,
          'Date should be a Date instance!',
        );
      }
      const isoDate = state.tags.find((t) => t?.value?.iso);
      if (isoDate) {
        console.assert(
          typeof isoDate?.value?.iso === 'string',
          'iso should be a string!',
        );
      }
    }

    // Just to test ts types
    if (state?.tags?.length === 10) {
      // @ts-expect-error should be readonly
      state.age = 18;
      // @ts-expect-error should be readonly
      state.tags[0].value = { text: 'jjj', time: new Date() };
      // @ts-expect-error should be readonly
      state.tags[0].value.text = 'jjj';
      updateState(state);
      updateState((st) => st);
      updateState((st) => ({ ...st, age: 18 }));
      updateUrl(state);
      updateUrl((st) => ({ ...st, age: 18 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onChangeAge = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const val = +ev.target.value;
      updateUrl({ age: val ? val : undefined });
    },
    [updateUrl],
  );

  const onChangeNameUrl = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      updateUrl({ name: ev.target.value });
    },
    [updateUrl],
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

  return (
    <div className={className}>
      <div className="flex-1 border border-grey rounded-md p-4 shadow-md">
        <div className="font-semibold  mb-4">
          First client component
        </div>

        <div className="space-y-6">
          <Field id="name" text="Name">
            <Input id="name" value={state.name} onChange={onChangeNameUrl} />
          </Field>

          <Field id="age" text="Age">
            <Input
              id="age"
              type="number"
              value={state.age}
              onChange={onChangeAge}
            />
          </Field>

          <Field id="agree to terms" text="Agree to terms">
            <Input
              id="agree to terms"
              type="checkbox"
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

          <Button
            onClick={() => {
              updateUrl(form);
            }}
            dataTestId="sync-default"
          >
            Reset state
          </Button>
          <Button
            onClick={() => {
              updateUrl((curr) => ({ ...curr, name: 'My Name', age: 55 }));
            }}
            dataTestId="sync-object"
          >
            Sync state object
          </Button>

          <RefreshButton />
        </div>
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
    value: {
      text: 'TailwindCSS',
      time: new Date('2024-07-19T04:53:17.000Z'),
      iso: '2020-07-19T04:53:17.000Z',
    },
  },
];

const Button = ({
  onClick,
  dataTestId,
  children,
}: {
  onClick: () => void;
  dataTestId: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className=" border border-black rounded-md px-2 py-1"
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};
