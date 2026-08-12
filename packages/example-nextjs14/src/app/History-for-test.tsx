'use client';
import Link from 'next/link';
import React from 'react';
import { Field, Input } from 'shared/components';
import { useUrlState } from 'state-in-url/next';

export const historyForm = {
  name: '',
  at: undefined as Date | undefined,
  tags: [] as { id: string; time: Date }[],
};

// both depths: encodeState encodes per top-level key, so `at` goes through
// `encode` as the whole payload and `time` as a value inside one
const COMPLEX = {
  at: new Date('2024-07-16T04:53:17.000Z'),
  tags: [
    { id: 'a', time: new Date('2024-07-17T04:53:17.000Z') },
    { id: 'b', time: new Date('2024-07-18T04:53:17.000Z') },
  ],
};

/**
 * Both navigation modes of the Next hook, one page each.
 *
 * `server-sp` is the searchParams from the last server render, so it moves only
 * with `useHistory: false` (router.push refetches the RSC payload) and stands
 * still with `true` (raw pushState, no round-trip).
 *
 * Two instances: one cannot show whether a URL change reaches the component
 * that did not make it, nor whether both then write the URL. The second one
 * remounts, an instance mounting late has to land on the current shared state.
 */
export const HistoryDemo = ({
  pathname,
  useHistory,
  searchParams,
}: {
  pathname: string;
  useHistory: boolean;
  searchParams?: object;
}) => {
  const [mirrorKey, setMirrorKey] = React.useState(0);

  return (
    <div className="flex flex-col gap-4 p-8" data-testid="wrapper">
      <h1>{`useHistory: ${useHistory}`}</h1>

      <Editor id="name" useHistory={useHistory} searchParams={searchParams} />

      <Editor
        key={mirrorKey}
        id="mirror"
        useHistory={useHistory}
        searchParams={searchParams}
      />

      <button
        type="button"
        data-testid="remount"
        onClick={() => setMirrorKey((k) => k + 1)}
      >
        remount second
      </button>

      <button
        type="button"
        data-testid="push-raw"
        onClick={() =>
          window.history.pushState(null, '', `${pathname}?name=%27Pushed%27`)
        }
      >
        pushState
      </button>

      <button
        type="button"
        data-testid="replace-raw"
        onClick={() =>
          window.history.replaceState(
            null,
            '',
            `${pathname}?name=%27Replaced%27`,
          )
        }
      >
        replaceState
      </button>

      {/* Wraps pushState again, after the library already did. Ours has to
          stay live underneath, and theirs has to still run. */}
      <button
        type="button"
        data-testid="wrap-history"
        onClick={() => {
          const original = window.history.pushState;
          window.history.pushState = function (...args) {
            (window as unknown as { __outerRan?: boolean }).__outerRan = true;
            return original.apply(this, args);
          };
        }}
      >
        wrap pushState
      </button>

      <Link
        href={{ pathname, query: { name: "'Linked'" } }}
        data-testid="link-sp"
      >
        Link with QS
      </Link>

      <Link href={{ pathname }} data-testid="link-bare">
        Link without QS
      </Link>

      <pre data-testid="server-sp">{JSON.stringify(searchParams ?? {})}</pre>
    </div>
  );
};

const kind = (val: unknown) =>
  val instanceof Date ? `Date:${val.toISOString()}` : `${typeof val}`;

const types = (state: typeof historyForm) =>
  `${kind(state.at)}|${state.tags[0] ? kind(state.tags[0].time) : 'none'}|${state.tags.length}`;

const Editor = ({
  id,
  useHistory,
  searchParams,
}: {
  id: 'name' | 'mirror';
  useHistory: boolean;
  searchParams?: object;
}) => {
  const { urlState, setUrl } = useUrlState(historyForm, {
    searchParams,
    useHistory,
    replace: false,
  });

  return (
    <>
      <Field id={id} text={id}>
        <Input
          id={id}
          value={urlState.name}
          onChange={(ev) => setUrl({ name: ev.target.value })}
          className="text-black"
        />
      </Field>

      <button
        type="button"
        data-testid={`set-complex-${id}`}
        onClick={() => setUrl(COMPLEX)}
      >
        set complex
      </button>

      <pre data-testid={`value-${id}`}>{urlState.name}</pre>
      {/* types, not just values — the resync parses the query string itself
          now, on a different path than the initial read */}
      <pre data-testid={`types-${id}`}>{types(urlState)}</pre>
    </>
  );
};
