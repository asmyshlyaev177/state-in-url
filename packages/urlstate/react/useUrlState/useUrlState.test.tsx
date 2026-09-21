import { act, fireEvent, renderHook } from '@testing-library/react';

import { useUrlState } from './useUrlState';
import * as utils from '../../utils';

vi.mock('../../utils', { spy: true });

type State = { str: string; num: number; arr: number[] };
const shape: State = { str: '', num: 0, arr: [] };

// happy-dom keeps a real location that history.pushState/replaceState move,
// so the hook's resync after its own write reads what it wrote. A frozen mock
// would reset the shared store one microtask after every write.
const visit = (pathWithSearch: string) =>
  (
    window as unknown as { happyDOM: { setURL(url: string): void } }
  ).happyDOM.setURL(`http://localhost${pathWithSearch}`);

// happy-dom runs effects, a server does not: the first render is what the server sends
const firstRender = <T,>(hook: () => { urlState: T }) => {
  const renders: T[] = [];
  const rendered = renderHook(() => {
    const r = hook();
    renders.push(r.urlState);
    return r;
  });
  return { first: renders[0], result: rendered.result };
};

// the write is debounced, and the resync it triggers lands a microtask later
const flushWrite = () =>
  act(async () => {
    await vi.advanceTimersByTimeAsync(700);
  });

describe('astro useUrlState', () => {
  // a fresh key per test: state is shared by the default-state object identity
  let state: State;

  beforeEach(() => {
    state = { ...shape };
    vi.mocked(utils).isSSR = false;
    visit('/');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  test('ssr reads the searchParams prop, never window.location', () => {
    vi.mocked(utils).isSSR = true;
    visit('/?num=99');
    const { first } = firstRender(() =>
      useUrlState(state, { searchParams: { num: '55', other: '1' } }),
    );

    expect(first).toStrictEqual({ ...shape, num: 55 });
  });

  test('client reads window.location.search', () => {
    visit('/?num=55&arr=%5B1%2C2%5D');
    const { result } = renderHook(() => useUrlState(state));

    expect(result.current.urlState).toStrictEqual({
      ...shape,
      num: 55,
      arr: [1, 2],
    });
  });

  test('hydration renders the searchParams prop, then the URL wins', () => {
    visit('/?num=55');
    const { first, result } = firstRender(() =>
      useUrlState(state, { searchParams: { num: '7' } }),
    );

    expect(first.num).toBe(7);
    expect(result.current.urlState.num).toBe(55);
  });

  test('an empty searchParams prop (a prerendered page) renders the defaults first, then the URL', () => {
    visit('/?num=55');
    const { first, result } = firstRender(() =>
      useUrlState(state, { searchParams: {} }),
    );

    expect(first.num).toBe(0);
    expect(result.current.urlState.num).toBe(55);
  });

  test('a stale shared entry (previous page under <ClientRouter />) renders first, then the URL', () => {
    visit('/?num=1');
    const previous = renderHook(() =>
      useUrlState(state, { searchParams: { num: '1' } }),
    );
    previous.unmount();

    visit('/?num=2');
    const { first, result } = firstRender(() =>
      useUrlState(state, { searchParams: { num: '2' } }),
    );

    expect(first.num).toBe(1);
    expect(result.current.urlState.num).toBe(2);
  });

  test('setUrl replaces by default, pushes with replace: false', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    const { result } = renderHook(() => useUrlState(state));
    // after the render: the hook wraps history on mount, and the spy must wrap the wrapper
    const replace = vi.spyOn(window.history, 'replaceState');
    const push = vi.spyOn(window.history, 'pushState');

    act(() => result.current.setUrl({ num: 50 }));
    await flushWrite();

    expect(replace).toHaveBeenLastCalledWith(null, '', '/?num=50');
    expect(push).not.toHaveBeenCalled();
    expect(window.location.search).toBe('?num=50');
    expect(result.current.urlState.num).toBe(50);

    act(() => result.current.setUrl({ num: 51 }, { replace: false }));
    await flushWrite();

    expect(push).toHaveBeenLastCalledWith(null, '', '/?num=51');
    expect(window.location.search).toBe('?num=51');
    expect(result.current.urlState.num).toBe(51);
  });

  test('replace: false in params pushes', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    const { result } = renderHook(() => useUrlState(state, { replace: false }));
    const push = vi.spyOn(window.history, 'pushState');

    act(() => result.current.setUrl({ str: 'a' }));
    await flushWrite();

    expect(push).toHaveBeenLastCalledWith(null, '', '/?str=%27a%27');
  });

  test('a replace param that changes after mount is honoured', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    const { result, rerender } = renderHook(
      ({ replace }: { replace: boolean }) => useUrlState(state, { replace }),
      { initialProps: { replace: true } },
    );
    const push = vi.spyOn(window.history, 'pushState');

    rerender({ replace: false });
    act(() => result.current.setUrl({ num: 3 }));
    await flushWrite();

    expect(push).toHaveBeenLastCalledWith(null, '', '/?num=3');
  });

  test('keeps the full pathname and the hash, so an Astro base path survives a write', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    visit('/docs/page?other=1#h');
    const { result } = renderHook(() => useUrlState(state));
    const replace = vi.spyOn(window.history, 'replaceState');

    act(() => result.current.setUrl({ num: 2 }));
    await flushWrite();

    expect(replace).toHaveBeenLastCalledWith(
      null,
      '',
      '/docs/page?other=1&num=2#h',
    );
  });

  test('back/forward updates state', () => {
    const { result } = renderHook(() => useUrlState(state));

    visit('/?num=55');
    act(() => {
      fireEvent.popState(window);
    });

    expect(result.current.urlState.num).toBe(55);
  });

  test('a pushState from elsewhere is picked up, and dropped params reset', async () => {
    visit('/?num=3');
    const { result } = renderHook(() => useUrlState(state));
    expect(result.current.urlState.num).toBe(3);

    await act(async () => {
      window.history.pushState(null, '', '/');
      await Promise.resolve();
    });

    expect(result.current.urlState.num).toBe(0);
  });

  test('two instances share state', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    const first = renderHook(() => useUrlState(state));
    const second = renderHook(() => useUrlState(state));

    act(() => first.result.current.setUrl({ str: 'shared' }));
    await flushWrite();

    expect(second.result.current.urlState.str).toBe('shared');
    expect(window.location.search).toBe('?str=%27shared%27');
  });

  test('reset', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout'] });
    visit('/?num=9');
    const { result } = renderHook(() => useUrlState(state));
    const replace = vi.spyOn(window.history, 'replaceState');
    expect(result.current.urlState.num).toBe(9);

    act(() => result.current.reset());
    await flushWrite();

    expect(result.current.urlState).toStrictEqual(shape);
    expect(replace).toHaveBeenLastCalledWith(null, '', '/');
    expect(window.location.search).toBe('');
  });

  test('unmount unsubscribes from URL changes', () => {
    const unsubscribe = vi.fn();
    const subscribe = vi
      .spyOn(utils, 'subscribeToUrl')
      .mockReturnValue(unsubscribe);
    const { unmount } = renderHook(() => useUrlState(state));
    expect(subscribe).toHaveBeenCalledTimes(1);

    unmount();

    expect(unsubscribe).toHaveBeenCalledTimes(1);
  });
});
