import { decodeState, encodeState } from './encodeState';
import { type JSONCompatible } from '../utils';

describe('encodeState', () => {
  it('should encode a simple state object', () => {
    const state = { str: 'test', num: 123, bool: true };
    const expected = 'str=%E2%97%96test&num=%E2%88%93123&bool=%F0%9F%97%B5true';
    expect(state).toStrictEqual(decodeState(encodeState(state)));
    expect(encodeState(state)).toEqual(expected);
  });

  it('should encode a nested state object', () => {
    const state = {
      str: 'test',
      num: 123,
      nested: { bool: true, arr: [1, 2, 3] },
    };
    const expected =
      'str=%E2%97%96test&num=%E2%88%93123&nested=%7B%27bool%27%3A%27%F0%9F%97%B5true%27%2C%27arr%27%3A%5B%27%E2%88%931%27%2C%27%E2%88%932%27%2C%27%E2%88%933%27%5D%7D';
    expect(state).toStrictEqual(decodeState(encodeState(state)));
    expect(encodeState(state)).toEqual(expected);
  });

  it('should encode a state object with default values', () => {
    const state = { str: 'test', num: 123, bool: true, arr: [111, 'str'] };
    const defaults = { str: '', num: 0, bool: false };
    const expected =
      'str=%E2%97%96test&num=%E2%88%93123&bool=%F0%9F%97%B5true&arr=%5B%27%E2%88%93111%27%2C%27%E2%97%96str%27%5D';

    expect(encodeState(state, defaults)).toEqual(expected);
    expect(encodeState({ ...state, bool: false }, defaults)).toEqual(
      'str=%E2%97%96test&num=%E2%88%93123&arr=%5B%27%E2%88%93111%27%2C%27%E2%97%96str%27%5D',
    );
    expect(encodeState({ ...state, bool: false, str: '' }, defaults)).toEqual(
      'num=%E2%88%93123&arr=%5B%27%E2%88%93111%27%2C%27%E2%97%96str%27%5D',
    );
  });

  it('should preserve existing params', () => {
    const state = { str: 'test', num: 123, bool: true };
    const existing = new URLSearchParams('key1=value1&key2=value2');
    const defaults = { str: '', num: 0, bool: false };

    expect(encodeState(state, defaults, existing)).toEqual(
      'key1=value1&key2=value2&str=%E2%97%96test&num=%E2%88%93123&bool=%F0%9F%97%B5true',
    );
    expect(
      encodeState(state, null as unknown as typeof state, existing),
    ).toEqual(
      'key1=value1&key2=value2&str=%E2%97%96test&num=%E2%88%93123&bool=%F0%9F%97%B5true',
    );
    expect(
      encodeState(state, defaults, null as unknown as URLSearchParams),
    ).toEqual('str=%E2%97%96test&num=%E2%88%93123&bool=%F0%9F%97%B5true');
  });

  it('should return an empty string for an empty state object', () => {
    expect(encodeState({})).toEqual('');
    expect(encodeState(undefined as unknown as JSONCompatible)).toEqual('');
    expect(encodeState(null as unknown as JSONCompatible)).toEqual('');
  });
});

describe('decodeState', () => {
  it('should decode a simple state object', () => {
    const uriString = 'key1=%E2%97%96value1&key2=%E2%97%96value2';
    const expected = { key1: 'value1', key2: 'value2' };
    const result = decodeState(uriString, { key1: '', key2: '' });
    expect(result).toEqual(expected);
  });

  it('should decode a state object with nested values', () => {
    const uriString =
      'key1=%E2%97%96value1&key2={"nestedKey":"%E2%97%96nestedValue"}';
    const expected = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };
    const result = decodeState<typeof expected>(uriString);
    expect(result).toEqual(expected);
  });

  it('should decode a state object with default values', () => {
    const expected = { key1: 'value1', key2: 'value2' };
    const defaults = { key1: '', key2: '' };
    expect(decodeState('', defaults)).toEqual(defaults);
    expect(decodeState('key1=%E2%97%96value1', defaults)).toEqual({
      ...expected,
      key2: defaults.key2,
    });
  });

  it('should decode when one nested value invalid and parse invalid object as standard JSON', () => {
    const state = { str: 'test', num: 123, bool: true, arr: [1, 'str'] };
    const defaults2 = { str: '', num: 0, bool: false, arr: [0, ''] };
    expect(
      decodeState(
        'str=%E2%97%96test&num=%E2%88%93123&bool=%F0%9F%97%B5true&arr=%5B%27%E2%88%931%27%2C%27str%27%5D',
        defaults2,
      ),
    ).toStrictEqual(state);
  });

  describe('invalid values(trimmed url string)', () => {
    it('when one nested value invalid and replace with defaults', () => {
      const state = { str: 'test', num: 123, bool: true, arr: [1, 'str'] };
      const defaults2 = { str: '', num: 0, bool: false, arr: [0, ''] };
      expect(
        decodeState(
          'str=%E2%97%96test&num=%E2%88%93123&bool=%F0%9F%97%B5true&arr=%57str%27%5D',
          defaults2,
        ),
      ).toStrictEqual({ ...state, arr: defaults2.arr });
    });

    it('when 2 values invalid and replace with defaults', () => {
      const state = { str: 'test', num: 123, bool: true, arr: [1, 'str'] };
      const defaults2 = { str: '', num: 0, bool: false, arr: [0, ''] };
      expect(
        decodeState(
          'str=%E2%97%96test&num=%E23123&bool=%F0%9F%97%B5true&arr=%57str%27%5D',
          defaults2,
        ),
      ).toStrictEqual({ ...state, arr: defaults2.arr, num: defaults2.num });
    });
  });

  it('should return an empty object for an empty URI string', () => {
    expect(decodeState('')).toEqual({});
    expect(decodeState(undefined as unknown as string)).toEqual({});
    expect(decodeState(null as unknown as string)).toEqual({});
  });
});
