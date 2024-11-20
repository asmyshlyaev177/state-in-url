import { act, fireEvent, renderHook } from '@testing-library/react';

import { advanceTimersByTime } from '../../../tests/testUtils';
import { useUrlStateBase } from './useUrlStateBase';
import { parseSPObj } from '../parseSPObj';
import * as sharedState from '../useSharedState';
import * as urlEncode from '../useUrlEncode';
import * as utils from '../utils';


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
    push: jest.fn(),
    replace: jest.fn(),
  };
  let shape: typeof stateShape;

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
    router.push.mockReset();
    router.replace.mockReset();
    shape = { ...stateShape };
  });

  describe('pass state to useSharedState', () => {
    it('ssr with searchParams', () => {
      Object.defineProperty(utils, 'isSSR', { value: true })
      const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
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

    it('ssr without searchParams', () => {
      Object.defineProperty(utils, 'isSSR', { value: true })
      const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
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

    it('client with location.search', () => {
      Object.defineProperty(utils, 'isSSR', { value: false })
      const search = '?num=55&with+space=true';
      const originalLocation = window.location;
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
      }));
      const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
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

    it('client empty state', () => {
      Object.defineProperty(utils, 'isSSR', { value: false })
      const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
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
        it('ssr', () => {
          Object.defineProperty(utils, 'isSSR', { value: true })
          const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
          const { result } = renderHook(() => useUrlStateBase(shape, router));

          expect(result.current.state).toStrictEqual(shape);

          expect(sharedStateSpy).toHaveBeenCalledTimes(1);
          expect(sharedStateSpy).toHaveBeenNthCalledWith(
            1,
            shape,
            expect.any(Function),
          );
        });

        it('client', () => {
          Object.defineProperty(utils, 'isSSR', { value: false })
          // jest.spyOn(utils, 'isSSR').mockReturnValue(false);
          const search = '?key=value123';
          const originalLocation = window.location;
          jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
            ...originalLocation,
            search,
          }));
          const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
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
    it('ssr with sp', () => {
      Object.defineProperty(utils, 'isSSR', { value: true })
      const sp = { num: '55' };
      const { result } = renderHook(() =>
        useUrlStateBase(shape, router, () =>
          utils.isSSR ? parseSPObj(sp, shape) : shape,
        ),
      );

      const expected = { ...shape, num: 55 };
      expect(result.current.state).toStrictEqual(expected);
    });

    it('ssr', () => {
      Object.defineProperty(utils, 'isSSR', { value: true })
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      expect(result.current.state).toStrictEqual(shape);
    });

    it('client', () => {
      Object.defineProperty(utils, 'isSSR', { value: false })
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      expect(result.current.state).toStrictEqual(shape);
    });

    it('client with query params', () => {
      const search = '?num=55';
      const originalLocation = window.location;
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
      }));
      Object.defineProperty(utils, 'isSSR', { value: false })
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
      jest.useRealTimers()
    })

    describe('object', () => {
      it('full shape', async () => {
        jest.useFakeTimers({
          doNotFake: ['nextTick', 'setImmediate', 'setInterval'],
        });
        Object.defineProperty(utils, 'isSSR', { value: false })
        const { result } = renderHook(() => useUrlStateBase(shape, router));

        act(() => {
          result.current.updateUrl({ ...shape, num: 50 });
        });

        await advanceTimersByTime(700);

        expect(result.current.state).toStrictEqual({ ...shape, num: 50 });
        expect(router.push).toHaveBeenCalledTimes(1);
        expect(router.push).toHaveBeenNthCalledWith(1, '/?num=50', undefined);
      });

      it('partial shape', async () => {
        jest.useFakeTimers({
          doNotFake: ['nextTick', 'setImmediate', 'setInterval'],
        });
        Object.defineProperty(utils, 'isSSR', { value: false })
        const { result } = renderHook(() => useUrlStateBase(shape, router));

        act(() => {
          result.current.updateUrl({ num: 50 });
        });

        await advanceTimersByTime(700);

        expect(result.current.state).toStrictEqual({ ...shape, num: 50 });
        expect(router.push).toHaveBeenCalledTimes(1);
        expect(router.push).toHaveBeenNthCalledWith(1, '/?num=50', undefined);
      });

      it('no arg, should reset', async () => {
        jest.useFakeTimers({
          doNotFake: ['nextTick', 'setImmediate', 'setInterval'],
        });
        Object.defineProperty(utils, 'isSSR', { value: false })
        const { result } = renderHook(() => useUrlStateBase(shape, router));

        act(() => {
          result.current.updateState({ num: 50 });
        });
        act(() => {
          result.current.updateUrl();
        });

        await advanceTimersByTime(700);

        expect(result.current.state).toStrictEqual({ ...shape, num: 50 });
        expect(router.push).toHaveBeenCalledTimes(1);
        expect(router.push).toHaveBeenNthCalledWith(1, '/?num=50', undefined);
      });
    });

    it('update url with function', async () => {
      jest.useFakeTimers({
        doNotFake: ['nextTick', 'setImmediate', 'setInterval'],
      });
      Object.defineProperty(utils, 'isSSR', { value: false })
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      act(() => {
        result.current.updateUrl((curr) => ({ ...curr, num: 50 }));
      });

      await advanceTimersByTime(700);

      expect(result.current.state).toStrictEqual({ ...shape, num: 50 });
      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenNthCalledWith(1, '/?num=50', undefined);
    });

    it('do not update if url same', () => {
      Object.defineProperty(utils, 'isSSR', { value: false })
      const { result } = renderHook(() => useUrlStateBase(shape, router));
      const newState = { ...shape };
      act(() => {
        result.current.updateUrl(newState);
      });

      expect(router.push).not.toHaveBeenCalled();
    });

    it('should preserve hash', async () => {
      jest.useFakeTimers({
        doNotFake: ['nextTick', 'setImmediate', 'setInterval'],
      });
      Object.defineProperty(utils, 'isSSR', { value: false })
      const hash = '#test123';
      const originalLocation = window.location;
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        hash,
      }));
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      expect(result.current.state).toStrictEqual(shape);

      const newState = { ...shape, num: 55 };
      act(() => {
        result.current.updateUrl(newState);
      });

      await advanceTimersByTime(700);

      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenNthCalledWith(1, `/?num=55${hash}`, undefined);
    });

    it('replace and options', async () => {
      jest.useFakeTimers({
        doNotFake: ['nextTick', 'setImmediate', 'setInterval'],
      });
      Object.defineProperty(utils, 'isSSR', { value: false })
      const { result } = renderHook(() => useUrlStateBase(shape, router));

      const newState = { ...shape, num: 50 };
      act(() => {
        result.current.updateUrl(newState, {
          replace: true,
          scroll: true,
          someOpt: 123,
        });
      });

      await advanceTimersByTime(700);

      expect(result.current.state).toStrictEqual(newState);
      expect(router.replace).toHaveBeenCalledTimes(1);
      expect(router.replace).toHaveBeenNthCalledWith(1, '/?num=50', {
        scroll: true,
        someOpt: 123,
      });
    });

    describe('with existing queryParams', () => {
      it('should only update fields from stateShape', () => {
        Object.defineProperty(utils, 'isSSR', { value: false })
        const sp = 'key=value123';
        const search = `?${sp}`;
        const originalLocation = window.location;
        jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
          ...originalLocation,
          search,
        }));
        const stringify = jest.fn().mockReturnValue('');
        jest.spyOn(urlEncode, 'useUrlEncode').mockImplementation(
          jest.fn().mockReturnValue({
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
    it('should call setState in useSharedState', () => {
      Object.defineProperty(utils, 'isSSR', { value: false })
      const setState = jest.fn();
      jest.spyOn(sharedState, 'useSharedState').mockReturnValue({
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
      jest.useRealTimers()
    })
    it('should reset after update', async () => {
      jest.useFakeTimers({
        doNotFake: ['nextTick', 'setImmediate', 'setInterval'],
      });
      Object.defineProperty(utils, 'isSSR', { value: false })


      const { result } = renderHook(() => useUrlStateBase(shape, router));

      act(() => {
        result.current.updateUrl({ num: 50 });
      });
      await advanceTimersByTime(700);

      expect(router.push).toHaveBeenCalledTimes(1)
      expect(result.current.state).toStrictEqual({ ...shape, num: 50 });

      const originalLocation = window.location;
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search: 'num=50',
      }));


      act(() => {
        result.current.reset();
      })
      await advanceTimersByTime(700);

      expect(router.replace).not.toHaveBeenCalled()
      expect(router.push).toHaveBeenCalledTimes(2)
      expect(router.push).toHaveBeenLastCalledWith('/', undefined)

      expect(result.current.state).toStrictEqual(shape);
    });

    it('from existing query params', async () => {
      jest.useFakeTimers({
        doNotFake: ['nextTick', 'setImmediate', 'setInterval'],
      });
      Object.defineProperty(utils, 'isSSR', { value: false })
      const search = '?num=51';
      const originalLocation = window.location;
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
      }));

      const { result } = renderHook(() => useUrlStateBase(shape, router));

      act(() => {
        result.current.reset();
      })
      await advanceTimersByTime(700);

      expect(router.replace).not.toHaveBeenCalled()
      expect(router.push).toHaveBeenCalledTimes(1)
      expect(router.push).toHaveBeenLastCalledWith('/', undefined)
      expect(result.current.state).toStrictEqual(shape);
    });

    it('with replace', async () => {
      jest.useFakeTimers({
        doNotFake: ['nextTick', 'setImmediate', 'setInterval'],
      });
      Object.defineProperty(utils, 'isSSR', { value: false })
      const search = '?num=51';
      const originalLocation = window.location;
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
      }));

      const { result } = renderHook(() => useUrlStateBase(shape, router));

      act(() => {
        result.current.reset({ replace: true });
      })
      await advanceTimersByTime(700);

      expect(router.push).not.toHaveBeenCalled()
      expect(router.replace).toHaveBeenCalledTimes(1)
      expect(router.replace).toHaveBeenLastCalledWith('/', {})
      expect(result.current.state).toStrictEqual(shape);
    });
  })

  describe('back/forward history navigation', () => {
    it('should update state on back/forward', () => {
      Object.defineProperty(utils, 'isSSR', { value: false })
      const search = '?num=55';
      const originalLocation = window.location;
      jest
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
