import { renderHook } from '@testing-library/react';

import { useUrlState } from './useUrlState';
import * as utils from '../../utils';

vi.mock('../../utils', { spy: true });
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}));

type State = { num: number };
const shape: State = { num: 0 };

const visit = (pathWithSearch: string) =>
  (
    window as unknown as { happyDOM: { setURL(url: string): void } }
  ).happyDOM.setURL(`http://localhost${pathWithSearch}`);

const firstRender = <T,>(hook: () => { urlState: T }) => {
  const renders: T[] = [];
  const rendered = renderHook(() => {
    const r = hook();
    renders.push(r.urlState);
    return r;
  });
  return { first: renders[0], result: rendered.result };
};

describe('next useUrlState', () => {
  // a fresh key per test: state is shared by the default-state object identity
  let state: State;

  beforeEach(() => {
    state = { ...shape };
    vi.mocked(utils).isSSR = false;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    visit('/');
  });

  // Next moves window.location only after the render of a navigation, so a hook reading it would seed
  // from the route it left; the sync after the first render is what corrects it.
  test('a remount without searchParams keeps the shared state, then follows the URL', () => {
    visit('/list?num=5');
    const previous = renderHook(() => useUrlState(state));
    expect(previous.result.current.urlState.num).toBe(5);
    previous.unmount();

    visit('/list?num=9');
    const { first, result } = firstRender(() => useUrlState(state));

    expect(first.num).toBe(5);
    expect(result.current.urlState.num).toBe(9);
  });

  test('a remount with searchParams starts from them', () => {
    visit('/list?num=5');
    const previous = renderHook(() =>
      useUrlState(state, { searchParams: { num: '5' } }),
    );
    previous.unmount();

    const { first } = firstRender(() =>
      useUrlState(state, { searchParams: { num: '9' } }),
    );

    expect(first.num).toBe(9);
  });
});
