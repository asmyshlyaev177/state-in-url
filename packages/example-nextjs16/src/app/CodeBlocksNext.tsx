import { File } from './components/File';
import { CodeBlockState } from './CodeBlockState';
import { tooltips } from './tooltips';
import type { QuickStartCopy } from './i18n/copy/types';

export const CodeBlocks = ({ copy }: { copy: QuickStartCopy }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-display text-ink text-3xl font-bold">{copy.title}</h3>
      <div className="codeTitle">{copy.stateStep}</div>
      <CodeBlockState />

      <div className="codeTitle">{copy.hookStep}</div>
      <File
        name="useFormState"
        matchers={tooltips}
        content={`'use client';

import { useUrlState } from 'state-in-url/next';// [!code highlight:1]
import { form } from './form';

// One hook per feature - the whole API for this state
// "searchParams" only needed to pass params from Server Components
export const useFormState = (searchParams?: object) => // [!code highlight:2]
  useUrlState(form, { searchParams });`}
      />

      <div className="codeTitle">{copy.componentsStep}</div>
      <File
        name="ComponentA"
        matchers={tooltips}
        content={`'use client';

import { useFormState } from './useFormState';// [!code highlight:1]

export const ComponentA = () => {
  // see docs for all possible params https://github.com/asmyshlyaev177/state-in-url/tree/master/packages/urlstate/next/useUrlState
  const { urlState, setState, setUrl } = useFormState(); // [!code highlight:1]

  return <>
    <input
      id="name"
      value={urlState.name} // [!code highlight:3]
      onChange={(ev) => setUrl({ name: ev.target.value })}
      />
    // OR can update state immediately but sync change to url as needed
    <input
      value={urlState.name}
      onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
      onBlur={() => setUrl()}
    />
    <button onClick={() => setUrl((curr, initial) => initial)}>
      Reset
    </button>
    </>
};`}
      />
      <File
        name="ComponentB"
        content={`'use client';
import { useFormState } from './useFormState';// [!code highlight:1]

// "searchParams" used to pass params from Server Components
export const ComponentB = ({ searchParams }: { searchParams?: object }) => {
  // same state as ComponentA - no props, no context
  const { urlState } = useFormState(searchParams);// [!code highlight:1]

// will be defaultValue from \`form\` if not in url, no need to check
// [!code word:urlState]
  return <div>name: {urlState.name}</div>
};`}
        matchers={tooltips}
      />
      <div className="codeTitle">{copy.advancedStep}</div>
      <File
        name="useFormState - extended"
        matchers={tooltips}
        content={`'use client';

import React from 'react';
import { useUrlState } from 'state-in-url/next';
import { form } from './form';

export const useFormState = ({ searchParams }: { searchParams?: object }) => {// [!code highlight:1]
  const { urlState, setUrl: setUrlBase, reset } = useUrlState(form, {
    searchParams,
  });

  // first navigation will push new history entry
  // all following will just replace that entry
  // this way will have history with only 2 entries - ['/url', '/url?key=param']

  const replace = React.useRef(false);
  const setUrl = React.useCallback((
      state: Parameters<typeof setUrlBase>[0],
      opts?: Parameters<typeof setUrlBase>[1]
    ) => {
      setUrlBase(state, { replace: replace.current, ...opts });
      replace.current = true;
  }, [setUrlBase]);

  return { urlState, setUrl, resetUrl: reset };
};`}
      />
    </div>
  );
};
