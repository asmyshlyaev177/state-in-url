import { encodeState, decodeState } from './encodeState';

describe('encodeState', () => {
  it('should encode a simple state object', () => {
    const state = { str: 'test', num: 123, bool: true };
    const expected = 'str=test&num=%E2%88%93123&bool=%F0%9F%97%B5true';
    expect(encodeState(state)).toEqual(expected);
  });

  it('should encode a nested state object', () => {
    const state = {
      str: 'test',
      num: 123,
      nested: { bool: true, arr: [1, 2, 3] },
    };
    const expected =
      'str=test&num=%E2%88%93123&nested=%7B%27bool%27%3A%27%F0%9F%97%B5true%27%2C%27arr%27%3A%5B%27%E2%88%931%27%2C%27%E2%88%932%27%2C%27%E2%88%933%27%5D%7D';
    expect(encodeState(state)).toEqual(expected);
  });

  it('should encode a state object with default values', () => {
    const state = { str: 'test', num: 123, bool: true };
    const defaults = { str: '', num: 0, bool: false };
    const expected = 'str=test&num=%E2%88%93123&bool=%F0%9F%97%B5true';

    expect(encodeState(state, defaults)).toEqual(expected);
    expect(encodeState({ ...state, bool: false }, defaults)).toEqual(
      'str=test&num=%E2%88%93123',
    );
    expect(encodeState({ ...state, bool: false, str: '' }, defaults)).toEqual(
      'num=%E2%88%93123',
    );
  });

  it('should preserve existing params', () => {
    const state = { str: 'test', num: 123, bool: true };
    const existing = new URLSearchParams('key1=value1&key2=value2');
    const defaults = { str: '', num: 0, bool: false };

    expect(encodeState(state, defaults, existing)).toEqual(
      'key1=value1&key2=value2&str=test&num=%E2%88%93123&bool=%F0%9F%97%B5true',
    );
    expect(
      encodeState(state, null as unknown as typeof state, existing),
    ).toEqual(
      'key1=value1&key2=value2&str=test&num=%E2%88%93123&bool=%F0%9F%97%B5true',
    );
    expect(
      encodeState(state, defaults, null as unknown as URLSearchParams),
    ).toEqual('str=test&num=%E2%88%93123&bool=%F0%9F%97%B5true');
  });

  it('should return an empty string for an empty state object', () => {
    expect(encodeState({})).toEqual('');
    expect(encodeState(undefined as unknown as object)).toEqual('');
    expect(encodeState(null as unknown as object)).toEqual('');
  });
});

describe('decodeState', () => {
  it('should decode a simple state object', () => {
    const uriString = 'key1=value1&key2=value2';
    const expected = { key1: 'value1', key2: 'value2' };
    expect(decodeState(uriString)).toEqual(expected);
  });

  it('should decode a state object with nested values', () => {
    const uriString = 'key1=value1&key2={"nestedKey":"nestedValue"}';
    const expected = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };
    expect(decodeState(uriString)).toEqual(expected);
  });

  it('should decode a state object with default values', () => {
    const expected = { key1: 'value1', key2: 'value2' };
    const defaults = { key1: '', key2: '' };
    expect(decodeState('', defaults)).toEqual(defaults);
    expect(decodeState('key1=value1', defaults)).toEqual({
      ...expected,
      key2: defaults.key2,
    });
  });

  it('should return an empty object for an empty URI string', () => {
    expect(decodeState('')).toEqual({});
    expect(decodeState(undefined as unknown as string)).toEqual({});
    expect(decodeState(null as unknown as string)).toEqual({});
  });
});