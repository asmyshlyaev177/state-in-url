import { act, renderHook } from '@testing-library/react';

import { useState } from './state';
import * as subscribers from './subscribers';

describe('useState', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  it('should return state', () => {
    // need a new instance of state every test
    const state = { ...form };
    const { result } = renderHook(() => useState(state));

    expect(result.current.state).toStrictEqual(state);
    expect(result.current.getState()).toStrictEqual(state);
  });

  describe('with location.search', () => {
    const original = window.location;
    beforeEach(() => {
      Object.defineProperty(window, 'location', {
        value: {
          ...original,
          search: '?name=%E2%97%96MyName',
        },
      });
    });
    afterEach(() => {
      Object.defineProperty(window, 'location', {
        value: original,
      });
      jest.resetModules();
      jest.restoreAllMocks();
    });
    it('works', () => {
      const state = { ...form };
      const { result } = renderHook(() => useState(state));

      expect(result.current.state).toStrictEqual({ ...state, name: 'MyName' });
    });
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
    const { unmount } = renderHook(() => useState(state));

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
      const { result } = renderHook(() => useState(state));

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
      const { result } = renderHook(() => useState(state));
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
      const { result } = renderHook(() => useState(state));

      act(() => {
        result.current.setState((curr) => ({ ...curr, name }));
      });

      expect(result.current.state).toStrictEqual(expected);
      expect(result.current.getState()).toStrictEqual(expected);
      expect(result.current.state === result.current.getState()).toBeTruthy();
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
