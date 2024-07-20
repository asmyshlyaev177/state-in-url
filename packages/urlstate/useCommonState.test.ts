import { act, renderHook } from '@testing-library/react';

import * as subscribers from './subscribers';
import { useCommonState } from './useCommonState';

jest.mock('./utils.ts', () => ({
  ...jest.requireActual('./utils.ts'),
  isSSR: jest.fn(),
}));

import { isSSR } from './utils';

describe('useCommonState', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  describe('initial value', () => {
    const initial = {};
    const getInitial = jest.fn().mockReturnValue(initial);

    describe('getInitial', () => {
      describe('on server', () => {
        it('always use getInitial', () => {
          const stateSpy = jest.spyOn(subscribers.stateMap, 'get');
          jest.mocked(isSSR).mockReturnValue(true);
          const state = { ...form };
          const hook1 = renderHook(() => useCommonState(state, getInitial));

          expect(hook1.result.current.state).toStrictEqual(initial);
          expect(stateSpy).toHaveBeenCalledTimes(0);
        });
      });

      describe('on client', () => {
        it('when value empty return value from _getInitial', () => {
          const stateMock = jest.fn() as unknown as void;
          const stateSpy = jest
            .spyOn(subscribers.stateMap, 'set')
            .mockReturnValue(stateMock);

          jest.mocked(isSSR).mockReturnValue(false);
          const state = { ...form };
          const hook1 = renderHook(() => useCommonState(state, getInitial));

          expect(hook1.result.current.state).toStrictEqual(initial);
          expect(stateSpy).toHaveBeenCalledTimes(1);
          expect(stateSpy).toHaveBeenNthCalledWith(1, state, initial);
        });
      });
    });
  });

  it('should return state', () => {
    // need a new instance of state every test
    const state = { ...form };
    const { result } = renderHook(() => useCommonState(state));

    expect(result.current.state).toStrictEqual(state);
    expect(result.current.getState()).toStrictEqual(state);
  });

  it('should set stateMap and subscribers', async () => {
    const unsubMock = jest.fn();
    const stateMock = jest.fn() as unknown as void;
    const subSpy = jest
      .spyOn(subscribers.subscribers, 'add')
      .mockReturnValue(unsubMock);
    const stateSpy = jest
      .spyOn(subscribers.stateMap, 'set')
      .mockReturnValue(stateMock);
    const state = { ...form };
    const { unmount } = renderHook(() => useCommonState(state));

    expect(subSpy).toHaveBeenCalledTimes(1);
    expect(subSpy).toHaveBeenNthCalledWith(1, state, expect.any(Function));

    expect(stateSpy).toHaveBeenCalledTimes(1);
    expect(stateSpy).toHaveBeenNthCalledWith(1, state, state);
    expect(unsubMock).toHaveBeenCalledTimes(0);

    unmount();
    expect(unsubMock).toHaveBeenCalledTimes(1);
  });

  describe('getState', () => {
    it('should return same instance', () => {
      const state = { ...form };
      const { result } = renderHook(() => useCommonState(state));

      const state1 = result.current.getState();
      const state2 = result.current.getState();
      expect(state1 === state2).toBeTruthy();
    });
  });

  describe('setState', () => {
    it('simple value', () => {
      const name = 'Name';
      const expected = { ...form, name };
      const state = { ...form };
      const { result } = renderHook(() => useCommonState(state));
      act(() => {
        result.current.setState(expected);
      });

      expect(result.current.state).toStrictEqual(expected);
      expect(result.current.getState()).toStrictEqual(expected);
      expect(result.current.state === result.current.getState()).toBeTruthy();
    });

    it('function', () => {
      const name = 'Name';
      const expected = { ...form, name };
      const state = { ...form };
      const { result } = renderHook(() => useCommonState(state));

      act(() => {
        result.current.setState((curr) => ({ ...curr, name }));
      });

      expect(result.current.state).toStrictEqual(expected);
      expect(result.current.getState()).toStrictEqual(expected);
      expect(result.current.state === result.current.getState()).toBeTruthy();
    });
  });

  describe('few components', () => {
    it('', () => {
      expect(true).toBeTruthy();
    });
  });
});

export const form: Form = {
  name: '',
  age: undefined,
  'agree to terms': false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  'agree to terms': boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
