import { act, fireEvent, renderHook } from '@testing-library/react';

// import { advanceTimersByTime } from '../../../tests/testUtils';
import { useUrlStateBase } from './useUrlStateBase';
import { parseSPObj } from '../parseSPObj';
import * as sharedState from '../useSharedState';
import * as urlEncode from '../useUrlEncode';
import * as utils from '../utils';

vi.mock('../utils', { spy: true });

type State = {
  str: string;
  num: number;
  float: number;
  bool1: boolean;
  bool2: boolean;
  obj: { test: number };
  'with space': boolean;
  arr: number[];
};

const stateShape: State = {
  str: '',
  num: 0,
  float: 0,
  bool1: false,
  bool2: false,
  obj: { test: 0 },
  'with space': false,
  arr: [],
};

describe('useUrlStateBase', () => {
  const router = {
    push: vi.fn(),
    replace: vi.fn(),
  };
  let shape: typeof stateShape;

  beforeEach(() => {
    shape = { ...stateShape };
  });

  afterEach(() => {
    router.push.mockReset();
    router.replace.mockReset();
    vi.resetModules()
    vi.restoreAllMocks()
    vi.useRealTimers()
    vi.unstubAllGlobals();
  })

  describe('pass state to useSharedState', () => {
    test('ssr with searchParams', () => {
      vi.mocked(utils).isSSR = true;
      const sharedStateSpy = vi.spyOn(sharedState, 'useSharedState');
      const sp = { num: 55, 'with space': true };
      renderHook(() =>
        useUrlStateBase(shape, router, () =>
          utils.isSSR ? { ...shape, ...sp } : shape,
        ),
      );

      expect(sharedStateSpy).toHaveBeenCalledTimes(1);
      expect(sharedStateSpy).toHaveBeenNthCalledWith(
        1,
        shape,
        expect.any(Function),
      );
      const fnArg = sharedStateSpy.mock.calls.slice(-1)[0][1];
      expect(fnArg?.()).toStrictEqual({
        ...shape,
        num: 55,
        'with space': true,
      });
    });

    test('ssr without searchParams', () => {
      vi.mocked(utils).isSSR = true;
      const sharedStateSpy = vi.spyOn(sharedState, 'useSharedState');
      renderHook(() => useUrlStateBase(shape, router));

      expect(sharedStateSpy).toHaveBeenCalledTimes(1);
      expect(sharedStateSpy).toHaveBeenNthCalledWith(
        1,
        shape,
        expect.any(Function),
      );
      const fnArg = sharedStateSpy.mock.calls.slice(-1)[0][1];
      expect(fnArg?.()).toStrictEqual(shape);
    });

    test('client with location.search', () => {
      vi.mocked(utils).isSSR = false;
      const search = '?num=55&with+space=true';
      const originalLocation = window.location;
      vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
      }));
      const sharedStateSpy = vi.spyOn(sharedState, 'useSharedState');
      renderHook(() =>
        useUrlStateBase(shape, router, ({ parse }) =>
          parse(window.location.search),
        ),
      );

      expect(sharedStateSpy).toHaveBeenCalledTimes(1);
      expect(sharedStateSpy).toHaveBeenNthCalledWith(
        1,
        shape,
        expect.any(Function),
      );
      const fnArg = sharedStateSpy.mock.calls.slice(-1)[0][1];
      expect(fnArg?.()).toStrictEqual({
        ...shape,
        num: 55,
        'with space': true,
      });
    });

    test('client empty state', () => {
      vi.mocked(utils).isSSR = false;
      const sharedStateSpy = vi.spyOn(sharedState, 'useSharedState');
      renderHook(() => useUrlStateBase(shape, router));

      expect(sharedStateSpy).toHaveBeenCalledTimes(1);
      expect(sharedStateSpy).toHaveBeenNthCalledWith(
        1,
        shape,
        expect.any(Function),
      );
      const fnArg = sharedStateSpy.mock.calls.slice(-1)[0][1];
      expect(fnArg?.()).toStrictEqual(shape);
    });

    describe('with existing queryParams', () => {
      describe('state contains only fields from stateShape', () => {
        test('ssr', () => {
          vi.mocked(utils).isSSR = true;
          const sharedStateSpy = vi.spyOn(sharedState, 'useSharedState');
          const { result } = renderHook(() => useUrlStateBase(shape, router));

          expect(result.current.state).toStrictEqual(shape);

          expect(sharedStateSpy).toHaveBeenCalledTimes(1);
          expect(sharedStateSpy).toHaveBeenNthCalledWith(
            1,
            shape,
            expect.any(Function),
          );
        });

        test('client', () => {
          vi.mocked(utils).isSSR = false;
          const search = '?key=value123';
          const originalLocation = window.location;
          vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
            ...originalLocation,
            search,
          }));
          const sharedStateSpy = vi.spyOn(sharedState, 'useSharedState');
          const { result } = renderHook(() => useUrlStateBase(shape, router));

          expect(result.current.state).toStrictEqual(shape);

          expect(sharedStateSpy).toHaveBeenCalledTimes(1);
          expect(sharedStateSpy).toHaveBeenNthCalledWith(
            1,
            shape,
            expect.any(Function),
          );
        });
      });
    });
  });

  describe('return state', () => {
    test('ssr with sp', () => {
      vi.mocked(utils).isSSR = true;
      const sp = { num: '55' };
      const { result } = renderHook(() =>
        useUrlStateBase(shape, router, () =>
          utils.isSSR ? parseSPObj(sp, shape) : shape,
        ),
      );

      const expected = { ...shape, num: 55 };
      expect(result.current.state).toStrictEqual(expected);
    });

    test('ssr', () => {
      vi.mocked(utils).isSSR = true;
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      expect(result.current.state).toStrictEqual(shape);
    });

    test('client', () => {
      vi.mocked(utils).isSSR = false;
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      expect(result.current.state).toStrictEqual(shape);
    });

    test('client with query params', () => {
      const search = '?num=55';
      const originalLocation = window.location;
      vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
      }));
      vi.mocked(utils).isSSR = false;
      const { result } = renderHook(() =>
        useUrlStateBase(shape, router, ({ parse }) =>
          parse(window.location.search),
        ),
      );

      const expected = { ...shape, num: 55 };
      expect(result.current.state).toStrictEqual(expected);
    });
  });

  describe('updateUrl', () => {
    afterEach(() => {
      vi.useRealTimers()
    })

    describe('object', () => {
      test('full shape', async () => {
        vi.useFakeTimers({
          toFake: ['setTimeout']
        });
        vi.mocked(utils).isSSR = false;
        const { result } = renderHook(() => useUrlStateBase(shape, router));

        act(() => {
          result.current.updateUrl({ ...shape, num: 50 });
        });

        await vi.advanceTimersByTime(700);

        expect(result.current.state).toStrictEqual({ ...shape, num: 50 });
        expect(router.push).toHaveBeenCalledTimes(1);
        expect(router.push).toHaveBeenNthCalledWith(1, '/?num=50', {});
      });

      test('partial shape', async () => {
        vi.useFakeTimers({
          toFake: ['setTimeout']
        });
        vi.mocked(utils).isSSR = false;
        const { result } = renderHook(() => useUrlStateBase(shape, router));

        act(() => {
          result.current.updateUrl({ num: 50 });
        });

        await vi.advanceTimersByTime(700);

        expect(result.current.state).toStrictEqual({ ...shape, num: 50 });
        expect(router.push).toHaveBeenCalledTimes(1);
        expect(router.push).toHaveBeenNthCalledWith(1, '/?num=50', {});
      });

      test('no arg, should reset', async () => {
        vi.useFakeTimers({
          toFake: ['setTimeout']
        });
        vi.mocked(utils).isSSR = false;
        const { result } = renderHook(() => useUrlStateBase(shape, router));

        act(() => {
          result.current.updateState({ num: 50 });
        });
        act(() => {
          result.current.updateUrl();
        });

        await vi.advanceTimersByTime(700);

        expect(result.current.state).toStrictEqual({ ...shape, num: 50 });
        expect(router.push).toHaveBeenCalledTimes(1);
        expect(router.push).toHaveBeenNthCalledWith(1, '/?num=50', {});
      });
    });

    test('update url with function', async () => {
      vi.useFakeTimers({
        toFake: ['setTimeout']
      });
      vi.mocked(utils).isSSR = false;
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      act(() => {
        result.current.updateUrl((curr) => ({ ...curr, num: 50 }));
      });

      await vi.advanceTimersByTime(700);

      expect(result.current.state).toStrictEqual({ ...shape, num: 50 });
      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenNthCalledWith(1, '/?num=50', {});
    });

    test('do not update if url same', () => {
      vi.mocked(utils).isSSR = false;
      const { result } = renderHook(() => useUrlStateBase(shape, router));
      const newState = { ...shape };
      act(() => {
        result.current.updateUrl(newState);
      });

      expect(router.push).not.toHaveBeenCalled();
    });

    test('should preserve hash', async () => {
      vi.useFakeTimers({
        toFake: ['setTimeout']
      });
      vi.mocked(utils).isSSR = false;
      const hash = '#test123';
      const originalLocation = window.location;
      vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        pathname: '/',
        hash,
      }));
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      expect(result.current.state).toStrictEqual(shape);

      const newState = { ...shape, num: 55 };
      act(() => {
        result.current.updateUrl(newState);
      });

      await vi.advanceTimersByTime(700);

      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenNthCalledWith(1, `/?num=55${hash}`, {});
    });

    test('replace and options', async () => {
      vi.useFakeTimers({
        toFake: ['setTimeout']
      });
      vi.mocked(utils).isSSR = false;
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      const newState = { ...shape, num: 50 };
      act(() => {
        result.current.updateUrl(newState, {
          replace: true,
          scroll: true,
          someOpt: 123,
        });
      });

      await vi.advanceTimersByTime(700);

      expect(result.current.state).toStrictEqual(newState);
      expect(router.replace).toHaveBeenCalledTimes(1);
      expect(router.replace).toHaveBeenNthCalledWith(1, '/?num=50', {
        scroll: true,
        someOpt: 123,
      });
    });

    describe('with existing queryParams', () => {
      test('should only update fields from stateShape', () => {
        vi.mocked(utils).isSSR = false;
        const sp = 'key=value123';
        const search = `?${sp}`;
        const originalLocation = window.location;
        vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
          ...originalLocation,
          search,
        }));
        const stringify = vi.fn().mockReturnValue('');
        vi.spyOn(urlEncode, 'useUrlEncode').mockImplementation(
          vi.fn().mockReturnValue({
            parse: () => ({ ...shape }),
            stringify,
          }),
        );
        const { result } = renderHook(() => useUrlStateBase(shape, router));

        const newState = { ...shape, num: 30 };
        act(() => {
          result.current.updateUrl(newState);
        });

        expect(stringify).toHaveBeenCalledTimes(1);
        const call = stringify.mock.calls[0];
        expect(call[0]).toStrictEqual(newState);
        expect(call[1].toString()).toStrictEqual(sp);
      });
    });
  });

  describe('updateState', () => {
    test('should call setState in useSharedState', () => {
      vi.mocked(utils).isSSR = false;
      const setState = vi.fn();
      vi.spyOn(sharedState, 'useSharedState').mockReturnValue({
        state: shape,
        getState: () => shape,
        setState,
      });
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      const newState = { ...shape, num: 30 };
      act(() => {
        result.current.updateState(newState);
      });

      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenNthCalledWith(1, newState);
    });
  });

  describe('reset', () => {
    afterEach(() => {
      vi.useRealTimers()
    })
    test('should reset after update', async () => {
      vi.useFakeTimers({
        toFake: ['setTimeout']
      });
      vi.mocked(utils).isSSR = false;


      const { result } = renderHook(() => useUrlStateBase(shape, router));

      act(() => {
        result.current.updateUrl({ num: 50 });
      });
      await vi.advanceTimersByTime(700);

      expect(router.push).toHaveBeenCalledTimes(1)
      expect(result.current.state).toStrictEqual({ ...shape, num: 50 });

      const originalLocation = window.location;
      vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search: 'num=50',
        pathname: '/',
        hash: '',
      }));

      act(() => {
        result.current.reset();
      })
      await vi.advanceTimersByTime(700);

      expect(router.replace).not.toHaveBeenCalled()
      expect(router.push).toHaveBeenCalledTimes(2)
      expect(router.push).toHaveBeenLastCalledWith('/', {})

      expect(result.current.state).toStrictEqual(shape);
    });

    test('from existing query params', async () => {
      vi.useFakeTimers({
        toFake: ['setTimeout']
      });
      vi.mocked(utils).isSSR = false;
      const search = '?num=51';
      const originalLocation = window.location;
      vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
        pathname: '/',
        hash: '',
      }));

      const { result } = renderHook(() => useUrlStateBase(shape, router));

      act(() => {
        result.current.reset();
      })
      await vi.advanceTimersByTime(700);

      expect(router.replace).not.toHaveBeenCalled()
      expect(router.push).toHaveBeenCalledTimes(1)
      expect(router.push).toHaveBeenLastCalledWith('/', {})
      expect(result.current.state).toStrictEqual(shape);
    });

    test('with replace', async () => {
      vi.useFakeTimers({
        toFake: ['setTimeout']
      });
      vi.mocked(utils).isSSR = false;
      const search = '?num=51';

      const originalLocation = window.location;
      vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
        pathname: '/',
        hash: '',
      }));

      const { result } = renderHook(() => useUrlStateBase(shape, router));

      act(() => {
        result.current.reset({ replace: true });
      })
      await vi.advanceTimersByTime(700);

      expect(router.push).not.toHaveBeenCalled()
      expect(router.replace).toHaveBeenCalledTimes(1)
      expect(router.replace).toHaveBeenLastCalledWith('/', {})
      expect(result.current.state).toStrictEqual(shape);
    });
  })

  describe('back/forward history navigation', () => {
    test('should update state on back/forward', () => {
      vi.mocked(utils).isSSR = false;
      const search = '?num=55';
      const originalLocation = window.location;
      vi
        .spyOn(window, 'location', 'get')
        .mockImplementationOnce(() => ({
          ...originalLocation,
        }))
        .mockImplementationOnce(() => ({
          ...originalLocation,
          search,
        }));
      const { result } = renderHook(() =>
        useUrlStateBase(shape, router, ({ parse }) =>
          parse(window.location.search),
        ),
      );

      expect(result.current.state).toStrictEqual(shape);

      act(() => {
        fireEvent.popState(window);
      });
      expect(result.current.state).toStrictEqual({ ...shape, num: 55 });
    });
  });
});
