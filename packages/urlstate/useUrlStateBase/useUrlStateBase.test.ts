import { act, fireEvent, renderHook } from '@testing-library/react';

import { useUrlStateBase } from '.';
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
  arr: number[];
};

const stateShape: State = {
  str: '',
  num: 0,
  float: 0,
  bool1: false,
  bool2: false,
  obj: { test: 0 },
  arr: [],
};

describe('useUrlStateBase', () => {
  const router = {
    push: jest.fn(),
    replace: jest.fn(),
  };
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
    router.push.mockReset();
    router.replace.mockReset();
  });

  describe('pass state to useSharedState', () => {
    it('ssr with searchParams', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(true);
      const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
      const sp = { num: '∓55' };
      renderHook(() => useUrlStateBase(stateShape, router, sp));

      expect(sharedStateSpy).toHaveBeenCalledTimes(1);
      expect(sharedStateSpy).toHaveBeenNthCalledWith(
        1,
        stateShape,
        expect.any(Function),
      );
      const fnArg = sharedStateSpy.mock.calls.slice(-1)[0][1];
      expect(fnArg?.()).toStrictEqual({ ...stateShape, num: 55 });
    });

    it('ssr without searchParams', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(true);
      const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
      renderHook(() => useUrlStateBase(stateShape, router));

      expect(sharedStateSpy).toHaveBeenCalledTimes(1);
      expect(sharedStateSpy).toHaveBeenNthCalledWith(
        1,
        stateShape,
        expect.any(Function),
      );
      const fnArg = sharedStateSpy.mock.calls.slice(-1)[0][1];
      expect(fnArg?.()).toStrictEqual(stateShape);
    });

    it('client with location.search', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const search = '?num=∓55';
      const originalLocation = window.location;
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
      }));
      const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
      renderHook(() => useUrlStateBase(stateShape, router));

      expect(sharedStateSpy).toHaveBeenCalledTimes(1);
      expect(sharedStateSpy).toHaveBeenNthCalledWith(
        1,
        stateShape,
        expect.any(Function),
      );
      const fnArg = sharedStateSpy.mock.calls.slice(-1)[0][1];
      expect(fnArg?.()).toStrictEqual({ ...stateShape, num: 55 });
    });

    it('client empty state', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
      renderHook(() => useUrlStateBase(stateShape, router));

      expect(sharedStateSpy).toHaveBeenCalledTimes(1);
      expect(sharedStateSpy).toHaveBeenNthCalledWith(
        1,
        stateShape,
        expect.any(Function),
      );
      const fnArg = sharedStateSpy.mock.calls.slice(-1)[0][1];
      expect(fnArg?.()).toStrictEqual(stateShape);
    });

    describe('with existing queryParams', () => {
      describe('state contains only fields from stateShape', () => {
        it('ssr', () => {
          jest.spyOn(utils, 'isSSR').mockReturnValue(true);
          const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
          const { result } = renderHook(() =>
            useUrlStateBase(stateShape, router, { key: 'value123' }),
          );

          expect(result.current.state).toStrictEqual(stateShape);

          expect(sharedStateSpy).toHaveBeenCalledTimes(1);
          expect(sharedStateSpy).toHaveBeenNthCalledWith(
            1,
            stateShape,
            expect.any(Function),
          );
        });

        it('client', () => {
          jest.spyOn(utils, 'isSSR').mockReturnValue(false);
          const search = '?key=value123';
          const originalLocation = window.location;
          jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
            ...originalLocation,
            search,
          }));
          const sharedStateSpy = jest.spyOn(sharedState, 'useSharedState');
          const { result } = renderHook(() =>
            useUrlStateBase(stateShape, router),
          );

          expect(result.current.state).toStrictEqual(stateShape);

          expect(sharedStateSpy).toHaveBeenCalledTimes(1);
          expect(sharedStateSpy).toHaveBeenNthCalledWith(
            1,
            stateShape,
            expect.any(Function),
          );
        });
      });
    });
  });

  describe('return state', () => {
    it('ssr with sp', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(true);
      const sp = { num: '∓55' };
      const { result } = renderHook(() =>
        useUrlStateBase(stateShape, router, sp),
      );

      const expected = { ...stateShape, num: 55 };
      expect(result.current.state).toStrictEqual(expected);
    });

    it('ssr', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(true);
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      expect(result.current.state).toStrictEqual(stateShape);
    });

    it('client', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      expect(result.current.state).toStrictEqual(stateShape);
    });

    it('client with query params', () => {
      const search = '?num=∓55';
      const originalLocation = window.location;
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        search,
      }));
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      const expected = { ...stateShape, num: 55 };
      expect(result.current.state).toStrictEqual(expected);
    });
  });

  describe('updateUrl', () => {
    it('update url', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      act(() => {
        result.current.updateUrl({ ...stateShape, num: 50 });
      });

      expect(result.current.state).toStrictEqual({ ...stateShape, num: 50 });
      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenNthCalledWith(1, '/?num=%E2%88%9350', {});
    });

    it('update url with function', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      act(() => {
        result.current.updateUrl((curr) => ({ ...curr, num: 50 }));
      });

      expect(result.current.state).toStrictEqual({ ...stateShape, num: 50 });
      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenNthCalledWith(1, '/?num=%E2%88%9350', {});
    });

    it('do not update if url same', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      const newState = { ...stateShape };
      act(() => {
        result.current.updateUrl(newState);
      });

      expect(router.push).not.toHaveBeenCalled();
    });

    it('should preserve hash', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const hash = '#test123';
      const originalLocation = window.location;
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
        ...originalLocation,
        hash,
      }));
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      expect(result.current.state).toStrictEqual(stateShape);

      const newState = { ...stateShape, num: 55 };
      act(() => {
        result.current.updateUrl(newState);
      });

      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenNthCalledWith(
        1,
        `/?num=%E2%88%9355${hash}`,
        {},
      );
    });

    it('replace and options', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      const newState = { ...stateShape, num: 50 };
      act(() => {
        result.current.updateUrl(
          newState,
          // @ts-expect-error for test
          { replace: true, scroll: true, someOpt: 123 },
        );
      });

      expect(result.current.state).toStrictEqual(newState);
      expect(router.replace).toHaveBeenCalledTimes(1);
      expect(router.replace).toHaveBeenNthCalledWith(1, '/?num=%E2%88%9350', {
        scroll: true,
        someOpt: 123,
      });
    });

    describe('with existing queryParams', () => {
      it('should only update fields from stateShape', () => {
        jest.spyOn(utils, 'isSSR').mockReturnValue(false);
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
            parse: () => stateShape,
            stringify,
          }),
        );
        const { result } = renderHook(() =>
          useUrlStateBase(stateShape, router),
        );

        const newState = { ...stateShape, num: 30 };
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
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const setState = jest.fn();
      jest.spyOn(sharedState, 'useSharedState').mockReturnValue({
        state: stateShape,
        getState: () => stateShape,
        setState,
      });
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      const newState = { ...stateShape, num: 30 };
      act(() => {
        result.current.updateState(newState);
      });

      expect(setState).toHaveBeenCalledTimes(1);
      expect(setState).toHaveBeenNthCalledWith(1, newState);
    });
  });

  describe('back/forward history navigation', () => {
    it('should update state on back/forward', () => {
      jest.spyOn(utils, 'isSSR').mockReturnValue(false);
      const search = '?num=∓55';
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
      const { result } = renderHook(() => useUrlStateBase(stateShape, router));

      expect(result.current.state).toStrictEqual(stateShape);

      act(() => {
        fireEvent.popState(window);
      });
      expect(result.current.state).toStrictEqual({ ...stateShape, num: 55 });
    });
  });
});
