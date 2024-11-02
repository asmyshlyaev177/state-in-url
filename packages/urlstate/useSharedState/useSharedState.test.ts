import { act, renderHook } from '@testing-library/react';

import { useSharedState } from './useSharedState';
import * as subscribers from '../subscribers';

jest.mock('../utils.ts', () => ({
  ...jest.requireActual('../utils.ts'),
  isSSR: jest.fn(),
}));

import { isSSR, JSONCompatible } from '../utils';

describe('useSharedState', () => {
  let state: typeof form;
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
    state = { ...form };
  });

  describe('initial value', () => {
    const initial = {};
    const getInitial = jest.fn().mockReturnValue(initial);

    describe('getInitial', () => {
      describe('on server', () => {
        it('always use getInitial', () => {
          const stateSpy = jest.spyOn(subscribers.stateMap, 'get');
          const stateSpySet = jest.spyOn(subscribers.stateMap, 'set');
          jest.mocked(isSSR).mockReturnValue(true);
          const hook1 = renderHook(() => useSharedState(state, getInitial));

          expect(hook1.result.current.state).toStrictEqual(initial);
          expect(stateSpy).toHaveBeenCalledTimes(0);
          expect(stateSpySet).toHaveBeenCalledTimes(0);
        });
      });

      describe('on client', () => {
        it('when value empty return value from _getInitial', () => {
          const stateMock = jest.fn() as unknown as void;
          const stateSpy = jest
            .spyOn(subscribers.stateMap, 'set')
            .mockReturnValue(stateMock);

          jest.mocked(isSSR).mockReturnValue(false);
          const hook1 = renderHook(() => useSharedState(state, getInitial));

          expect(hook1.result.current.state).toStrictEqual(initial);
          expect(stateSpy).toHaveBeenCalledTimes(1);
          expect(stateSpy).toHaveBeenNthCalledWith(1, state, initial);
        });

        it('should get value from stateMap without getInitial', () => {
          const stateMock = jest.fn() as unknown as void;
          const init = { test: true };
          const stateSpyGet = jest
            .spyOn(subscribers.stateMap, 'get')
            .mockReturnValue(init);
          const stateSpySet = jest
            .spyOn(subscribers.stateMap, 'set')
            .mockReturnValue(stateMock);

          jest.mocked(isSSR).mockReturnValue(false);
          const hook1 = renderHook(() => useSharedState(state));

          expect(stateSpyGet).toHaveBeenCalledTimes(1);
          expect(stateSpyGet).toHaveBeenNthCalledWith(1, state);

          expect(stateSpySet).toHaveBeenCalledTimes(0);
          expect(hook1.result.current.state).toStrictEqual(init);
        });

        it('should set value if not in stateMap', () => {
          const stateMock = jest.fn() as unknown as void;
          const stateSpyGet = jest
            .spyOn(subscribers.stateMap, 'get')
            .mockReturnValue(undefined as unknown as JSONCompatible);
          const stateSpySet = jest
            .spyOn(subscribers.stateMap, 'set')
            .mockReturnValue(stateMock);

          jest.mocked(isSSR).mockReturnValue(false);
          const hook1 = renderHook(() => useSharedState(state));

          expect(stateSpyGet).toHaveBeenCalledTimes(1);
          expect(stateSpyGet).toHaveBeenNthCalledWith(1, state);

          expect(stateSpySet).toHaveBeenCalledTimes(1);
          expect(stateSpySet).toHaveBeenNthCalledWith(1, state, state);
          expect(hook1.result.current.state).toStrictEqual(state);
        });
      });
    });
  });

  it('should return state', () => {
    // need a new instance of state every test
    const { result } = renderHook(() => useSharedState(state));

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
    const { unmount } = renderHook(() => useSharedState(state));

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
      const { result } = renderHook(() => useSharedState(state));

      const state1 = result.current.getState();
      const state2 = result.current.getState();
      expect(state1 === state2).toBeTruthy();
    });
  });

  describe('setState', () => {
    describe('simple value', () => {
      it('full shape', () => {
        const name = 'Name';
        const expected = { ...form, name };
        const { result } = renderHook(() => useSharedState(state));
        act(() => {
          result.current.setState(expected);
        });

        expect(result.current.state).toStrictEqual(expected);
        expect(result.current.getState()).toStrictEqual(expected);
        expect(result.current.state === result.current.getState()).toBeTruthy();
      });

      it('partial shape', () => {
        const name = 'Name';
        const expected = { ...form, name };
        const { result } = renderHook(() => useSharedState(state));
        act(() => {
          result.current.setState({ name });
        });

        expect(result.current.state).toStrictEqual(expected);
        expect(result.current.getState()).toStrictEqual(expected);
        expect(result.current.state === result.current.getState()).toBeTruthy();
      });
    });

    it('function', () => {
      const name = 'Name';
      const expected = { ...form, name };
      const { result } = renderHook(() => useSharedState(state));

      act(() => {
        result.current.setState((curr) => ({ ...curr, name }));
      });

      expect(result.current.state).toStrictEqual(expected);
      expect(result.current.getState()).toStrictEqual(expected);
      expect(result.current.state === result.current.getState()).toBeTruthy();
    });
  });

  it('should notify subscribers when state changes', () => {
    const defaultState = { count: 0 };
    const { result } = renderHook(() => useSharedState(defaultState));
    const mockSubscriber = jest.fn();

    subscribers.subscribers.add(defaultState, mockSubscriber);

    act(() => {
      result.current.setState({ count: 5 });
    });

    expect(mockSubscriber).toHaveBeenCalledTimes(1);
  });

  describe('few instances', () => {
    it('should set initial value only 1 time', () => {
      const defaultState = { count: 0 };
      const stateSpySet = jest.spyOn(subscribers.stateMap, 'set');
      const hook1 = renderHook(() => useSharedState(defaultState));
      const hook2 = renderHook(() => useSharedState(defaultState));
      const hook3 = renderHook(() => useSharedState(defaultState));

      expect(stateSpySet).toHaveBeenCalledTimes(1);
      expect(stateSpySet).toHaveBeenNthCalledWith(
        1,
        defaultState,
        defaultState,
      );

      const result = hook1.result.current.state;

      expect(hook1.result.current.state).toStrictEqual(result);
      expect(hook2.result.current.state).toStrictEqual(result);
      expect(hook3.result.current.state).toStrictEqual(result);
      expect(
        hook1.result.current.state === hook2.result.current.state &&
          hook1.result.current.state === hook3.result.current.state,
      ).toBeTruthy();
    });

    it('should update value only 1 time', () => {
      const defaultState = { count: 0 };
      const stateSpySet = jest.spyOn(subscribers.stateMap, 'set');
      const hook1 = renderHook(() => useSharedState(defaultState));
      const hook2 = renderHook(() => useSharedState(defaultState));
      const hook3 = renderHook(() => useSharedState(defaultState));

      const newState = { count: 5 };
      act(() => {
        hook1.result.current.setState(newState);
      });

      expect(stateSpySet).toHaveBeenCalledTimes(2);
      expect(stateSpySet).toHaveBeenNthCalledWith(
        1,
        defaultState,
        defaultState,
      );
      expect(stateSpySet).toHaveBeenNthCalledWith(2, defaultState, newState);

      const result = hook1.result.current.state;
      expect(result).toStrictEqual(newState);

      expect(hook1.result.current.state).toStrictEqual(result);
      expect(hook2.result.current.state).toStrictEqual(result);
      expect(hook3.result.current.state).toStrictEqual(result);
      expect(
        hook1.result.current.state === hook2.result.current.state &&
          hook1.result.current.state === hook3.result.current.state,
      ).toBeTruthy();
    });
  });
});

export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
