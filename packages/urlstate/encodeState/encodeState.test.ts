import { decodeState, encodeState } from './encodeState';
import { type JSONCompatible } from '../utils';

describe('encodeState', () => {
  test('should encode a simple state object', () => {
    const state = { str: 'test', num: 123, bool: true };
    const expected = 'str=%27test%27&num=123&bool=true';
    expect(decodeState(encodeState(state))).toStrictEqual(state);
    expect(encodeState(state)).toEqual(expected);
  });

  test('should encode a nested state object', () => {
    const state = {
      str: 'test',
      num: 123,
      nested: { bool: true, arr: [1, 2, 3] },
    };
    expect(decodeState(encodeState(state))).toStrictEqual(state);

    const expected =
      'str=%27test%27&num=123&nested=%7B%27bool%27%3Atrue%2C%27arr%27%3A%5B1%2C2%2C3%5D%7D';
    expect(encodeState(state)).toEqual(expected);
  });

  test('should encode a state object with default values', () => {
    const state = { str: 'test', num: 123, bool: true, arr: [111, 'str'] };
    const defaults = { str: '', num: 0, bool: false };

    expect(decodeState(encodeState(state, defaults))).toEqual(state);

    const expected =
      'str=%27test%27&num=123&bool=true&arr=%5B111%2C%27str%27%5D';
    expect(encodeState(state, defaults)).toStrictEqual(expected);

    expect(encodeState({ ...state, bool: false }, defaults)).toEqual(
      'str=%27test%27&num=123&arr=%5B111%2C%27str%27%5D',
    );
    expect(encodeState({ ...state, bool: false, str: '' }, defaults)).toEqual(
      'num=123&arr=%5B111%2C%27str%27%5D',
    );
  });

  test('should preserve existing params', () => {
    const state = { str: 'test', num: 123, bool: true };
    const existing = new URLSearchParams('key1=value1&key2=value2');
    const defaults = { str: '', num: 0, bool: false };

    expect(encodeState(state, defaults, existing)).toEqual(
      'key1=value1&key2=value2&str=%27test%27&num=123&bool=true',
    );
    expect(
      encodeState(state, null as unknown as typeof state, existing),
    ).toEqual('key1=value1&key2=value2&str=%27test%27&num=123&bool=true');
    expect(
      encodeState(state, defaults, null as unknown as URLSearchParams),
    ).toEqual('str=%27test%27&num=123&bool=true');
  });

  test('should drop a param that is back at its default', () => {
    expect(encodeState({ str: '' }, { str: '' }, 'str=%27a%27&k=1')).toEqual(
      'k=1',
    );
  });

  test('should not mutate the URLSearchParams it was given', () => {
    const existing = new URLSearchParams('key1=value1');

    encodeState({ str: 'test' }, { str: '' }, existing);

    expect(existing.toString()).toEqual('key1=value1');
  });

  test('should return an empty string for an empty state object', () => {
    expect(encodeState({})).toEqual('');
    expect(encodeState(undefined as unknown as JSONCompatible)).toEqual('');
    expect(encodeState(null as unknown as JSONCompatible)).toEqual('');
  });
});

describe('decodeState', () => {
  test('should decode a simple state object', () => {
    const uriString = 'key1=%27value1%27&key2=%27value2%27';
    const expected = { key1: 'value1', key2: 'value2' };
    const result = decodeState(uriString, { key1: '', key2: '' });
    expect(result).toEqual(expected);
  });

  test('should decode a state object with nested values', () => {
    const uriString =
      'key1=%27value1%27&key2=%7B%27nestedKey%27%3A%27nestedValue%27%7D';
    const expected = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };
    const result = decodeState<typeof expected>(uriString);
    expect(result).toEqual(expected);
  });

  test('should decode a state object with default values', () => {
    const expected = { key1: 'value1', key2: 'value2' };
    const defaults = { key1: '1', key2: '2' };
    expect(decodeState('', defaults)).toEqual(defaults);
    expect(decodeState('key1=%27value1%27', defaults)).toEqual({
      ...expected,
      key2: defaults.key2,
    });
  });

  test('should decode when one nested value invalid and parse invalid object as standard JSON', () => {
    const state = { str: 'test', num: 123, bool: true, arr: [1, 'str'] };
    const defaults2 = { str: '', num: 0, bool: false, arr: [0, ''] };
    expect(
      decodeState(
        'str=%27test%27&num=123&bool=true&arr=%5B1%2C%27str%27%5D',
        defaults2,
      ),
    ).toStrictEqual(state);
  });

  describe('invalid values(trimmed url string)', () => {
    test('when one nested value invalid and replace with defaults', () => {
      const state = { str: 'test', num: 123, bool: true, arr: [1, 'str'] };
      const defaults2 = { str: '', num: 0, bool: false, arr: [0, ''] };

      expect(
        decodeState('str=%27test%27&num=123&bool=true&arr=%5B1%2', defaults2),
      ).toStrictEqual({ ...state, arr: defaults2.arr });
    });

    test('when 2 values invalid and replace with defaults', () => {
      const state = { str: 'test', num: 123, bool: true, arr: [1, 'str'] };
      const defaults2 = { str: '', num: 0, bool: false, arr: [0, ''] };

      expect(
        decodeState('str=%27test%27&bool=true&arr=%5B1%2C%2&num=', defaults2),
      ).toStrictEqual({ ...state, arr: defaults2.arr, num: defaults2.num });
    });
  });

  test('should return an empty object for an empty URI string', () => {
    expect(decodeState('')).toEqual({});
    expect(decodeState(undefined as unknown as string)).toEqual({});
    expect(decodeState(null as unknown as string)).toEqual({});
  });

  // encodeState encodes per top-level key, so a Date sitting directly on the
  // state — a `{ from, to }` range is the common shape — goes through `encode`
  // as the whole payload rather than as a value inside one
  describe('top-level Date', () => {
    const from = new Date('2024-06-28T09:10:38.763Z');
    const defaults = { from: undefined as Date | undefined, note: '' };

    test('round trips as a Date', () => {
      const encoded = encodeState({ ...defaults, from }, defaults);
      expect(encoded).toContain('%E2%8F%B2');

      const decoded = decodeState(encoded, defaults);
      expect(decoded.from).toBeInstanceOf(Date);
      expect((decoded.from as Date).toISOString()).toStrictEqual(
        from.toISOString(),
      );
    });

    test('an ISO string stays a string', () => {
      const state = { from: from.toISOString(), note: '' };
      const decoded = decodeState(encodeState(state, { from: '', note: '' }), {
        from: '',
        note: '',
      });

      expect(decoded.from).toStrictEqual(from.toISOString());
      expect(decoded.from).not.toBeInstanceOf(Date);
    });
  });
});
