import { renderHook } from '@testing-library/react';

import { useUrlEncode } from './useUrlEncode';

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

describe('useUrlEncode', () => {
  describe('just state obj', () => {
    const state: State = {
      str: 'string1',
      num: 3333,
      float: 3.14,
      bool1: false,
      bool2: true,
      obj: { test: 123 },
      arr: [1, 2, 3],
    };

    it('stringify/parse', () => {
      const {
        result: {
          current: { stringify, parse },
        },
      } = renderHook(() => useUrlEncode<object>());

      expect(state).toStrictEqual(parse(stringify(state)));
    });
  });

  describe('with state shape (default values)', () => {
    const state: State = {
      str: 'string1',
      num: 3333,
      float: 3.14,
      bool1: false,
      bool2: true,
      obj: { test: 123 },
      arr: [1, 2, 3],
    };
    // no bool1 here because it is false here and in stateShape
    const stateStr =
      // eslint-disable-next-line max-len
      'str=string1&num=%E2%88%933333&float=%E2%88%933.14&bool2=%F0%9F%97%B5true&obj=%7B%27test%27%3A%27%E2%88%93123%27%7D&arr=%5B%27%E2%88%931%27%2C%27%E2%88%932%27%2C%27%E2%88%933%27%5D';
    describe('stringify', () => {
      it('should return nothing if initial state not changed', () => {
        const { result } = renderHook(() => useUrlEncode(stateShape));

        expect(result.current.stringify(stateShape)).toEqual('');
      });

      it('should return stringify changed keys', () => {
        const { result } = renderHook(() => useUrlEncode(stateShape));

        expect(
          result.current.stringify({ ...stateShape, str: 'my string %' }),
        ).toEqual('str=my%2520string%2520%2525');
        expect(result.current.stringify(state)).toEqual(stateStr);
      });
    });

    it('parse', () => {
      const { result } = renderHook(() => useUrlEncode(stateShape));

      expect(result.current.parse(stateStr)).toStrictEqual(state);
    });
  });

  it('invalid string', () => {
    const { result } = renderHook(() => useUrlEncode());

    expect(result.current.parse('1key_!=val&&0=val1&->=>{}')).toStrictEqual({
      '->': '>{}',
      '0': 'val1',
      '1key_!': 'val',
    });
  });

  describe('preserving existing queryParams', () => {
    it('should return new string', () => {
      const params = new URLSearchParams();
      params.set('key', 'value');
      const { result } = renderHook(() => useUrlEncode(stateShape));

      expect(
        result.current.stringify({ ...stateShape, str: 'some string' }, params),
      ).toEqual('key=value&str=some%2520string');
      expect(
        result.current.stringify(
          { ...stateShape, str: 'some string' },
          params.toString(),
        ),
      ).toEqual('key=value&str=some%2520string');
    });
  });
});
