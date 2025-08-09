'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Field, Input, RefreshButton, Tag } from 'shared/components';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';
import { usePrevious } from 'shared/usePrevious';

export const Form = ({
  className,
  searchParams,
}: {
  className?: string;
  searchParams?: object;
}) => {
  const sp = useSearchParams();
  const { urlState, setState, setUrl, reset } = useUrlState(form, {
    searchParams,
    replace: sp.get('replace') === 'false' ? false : true,
  });

  React.useEffect(() => {
    if (urlState?.tags?.length) {
      const dateObj = urlState.tags.find((t) => t?.value?.time);
      if (dateObj) {
        console.assert(
          dateObj?.value?.time instanceof Date,
          'Date should be a Date instance!',
        );
      }
      const isoDate = urlState.tags.find((t) => t?.value?.iso);
      if (isoDate) {
        console.assert(
          typeof isoDate?.value?.iso === 'string',
          'iso should be a string!',
        );
      }
    }

    // Just to test ts types
    if (urlState?.tags?.length === 10) {
      setState(urlState);
      setState((st) => st);
      setState((st) => ({ ...st, age: 18 }));
      setState((_st, initial) => initial);
      setUrl(urlState);
      setUrl((st) => ({ ...st, age: 18 }));
      setUrl(urlState, { replace: true });
      setUrl((st) => ({ ...st, age: 18 }), { replace: true });
      setUrl((_st, initial) => initial);
      reset()
      reset({ replace: false, scroll: true })
    }
  }, [reset, setState, setUrl, urlState]);

  const onChangeAge = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const val = +ev.target.value;
      setUrl({ age: val ? val : undefined });
    },
    [setUrl],
  );

  const onChangeNameUrl = React.useCallback(
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

  // same reference
  const setUrlStable = React.useRef(setUrl);
  const setUrlPrev = usePrevious(setUrl);
  const setStatePrev = usePrevious(setState);
  const setStateStable = React.useRef(setState);

  const [isError, setIsError] = React.useState(false);
  const isInit = setUrlPrev
  const isEqual = (setUrlStable.current !== setUrlPrev || setUrlPrev !== setUrl || setStateStable.current !== setState || setStatePrev !== setState)
  if (isInit && isEqual && !isError) {
    setIsError(true)
  }
  if (isError) return null;

  return (
    <div className={className}>
      <div className="flex-1 border border-grey rounded-md p-4 shadow-md">
        <div className="font-semibold mb-4">
          First client component
        </div>

        <div className="space-y-6">
          <Field id="name" text="Name">
            <Input id="name" value={urlState.name} onChange={onChangeNameUrl} className='text-black' />
          </Field>

          <Field id="age" text="Age">
            <Input
              id="age"
              type="number"
              value={urlState.age}
              onChange={onChangeAge}
              className='text-black'
            />
          </Field>

          <Field id="agree_to_terms" text="Agree to terms">
            <Input
              id="agree_to_terms"
              type="checkbox"
              checked={urlState['agree_to_terms']}
              onChange={onChangeTerms}
              data-testid="agree_to_terms"
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

          <Button
            onClick={() => setUrl((_, initial) => initial)}
            dataTestId="sync-default"
          >
            Reset state
          </Button>
          <Button
            onClick={() => {
              setUrl((curr) => ({ ...curr, name: 'My Name', age: 55 }));
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
      className="border border-black rounded-md px-2 py-1 text-black"
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};
