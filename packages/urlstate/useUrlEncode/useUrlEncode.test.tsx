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
      } = renderHook(() => useUrlEncode(state));

      expect(state).toStrictEqual(parse(stringify(state)));
      expect(state).toStrictEqual(parse(new URLSearchParams(stringify(state))));
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
      'str=%E2%97%96string1&num=%E2%88%933333&float=%E2%88%933.14&bool2=%F0%9F%97%B5true&obj=%7B%27test%27%3A%27%E2%88%93123%27%7D&arr=%5B%27%E2%88%931%27%2C%27%E2%88%932%27%2C%27%E2%88%933%27%5D';

    describe('stringify', () => {
      it('should return nothing if initial state not changed', () => {
        const { result } = renderHook(() => useUrlEncode(stateShape));

        expect(result.current.stringify(stateShape)).toEqual('');
      });

      it('should return stringify changed keys', () => {
        const { result } = renderHook(() => useUrlEncode(stateShape));

        expect(result.current.stringify(state)).toEqual(stateStr);
        expect(
          result.current.stringify({ ...stateShape, str: 'my string %' }),
        ).toEqual('str=%E2%97%96my%2520string%2520%2525');
      });
    });

    it('parse', () => {
      const { result } = renderHook(() => useUrlEncode(stateShape));

      const expected = result.current.parse(stateStr);
      expect(expected).toStrictEqual(state);
    });
  });

  it('invalid string', () => {
    const invalidStr =
      '?tags=%5B%7B%27id%27%3A%273%27%2C%27value%27%3A%7B%27text%27%3A%27Tailwi';
    const shape: {
      tags?: { id: string; value: { text: string; time: Date } }[];
    } = { tags: [] };
    const { result } = renderHook(() => useUrlEncode(shape));

    const expected = result.current.parse(invalidStr);
    expect(expected).toStrictEqual({ tags: [] });
  });

  describe('preserving existing queryParams', () => {
    it('should return new string', () => {
      const params = new URLSearchParams();
      params.set('key', 'value');
      const { result } = renderHook(() => useUrlEncode(stateShape));

      const expected = 'key=value&str=%E2%97%96some%2520string';
      expect(
        result.current.stringify({ ...stateShape, str: 'some string' }, params),
      ).toEqual(expected);
      expect(
        result.current.stringify(
          { ...stateShape, str: 'some string' },
          params.toString(),
        ),
      ).toEqual(expected);
    });
  });
});
