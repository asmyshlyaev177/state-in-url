'use client';
import React from 'react';
import { useUrlState } from 'state-in-url';

import { Field } from './components/Field';
import { Input } from './components/Input';
import { Tag } from './components/Tag';
// import { useUrlState } from '../../../../dist';
import { form } from './form';
import { RefreshButton } from './Refresh';

export const Form = ({
  className,
  sp,
  delay = 500,
}: {
  className?: string;
  sp?: object;
  delay?: number;
}) => {
  const { state, updateState, updateUrl } = useUrlState(form, sp);

  // set URI when state change
  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    if (delay === 0) {
      return () => {};
    }

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      updateUrl(state);
    }, delay);

    return () => {
      clearTimeout(timer.current);
    };
  }, [state, updateUrl, delay]);

  const onChangeAge = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const val = +ev.target.value;
      updateState((curr) => {
        return {
          ...curr,
          age: val ? val : undefined,
        };
      });
    },
    [updateState],
  );

  const onChangeName = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      updateState((curr) => {
        return {
          ...curr,
          name: ev.target.value,
        };
      });
    },
    [updateState],
  );

  const onChangeTerms = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      updateState((curr) => {
        return {
          ...curr,
          'agree to terms': !!ev.target.checked,
        };
      });
    },
    [updateState],
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
      <div className="flex-1 border border-grey rounded-md p-4 shadow-md">
        <div className="font-semibold text-black mb-4">
          First client component
        </div>

        <div className="space-y-6">
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
            className="flex gap-2"
          >
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
              updateUrl();
            }}
            dataTestId="sync-empty"
          >
            Sync state
          </Button>
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
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
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
      className="text-black border border-black rounded-md px-2 py-1"
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};
