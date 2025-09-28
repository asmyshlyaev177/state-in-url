import { getParams, typeOf, assignValue, filterUnknownParamsClient, filterUnknown, filterUnknownParams, isPrimitive, getSearch } from './utils';

describe('typeOf', () => {
  test('string', () => {
    expect(typeOf('')).toEqual('string');
    expect(typeOf('str')).toEqual('string');
    expect(typeOf('5')).toEqual('string');
  });

  describe('date', () => {
    test('instance', () => {
      const d = new Date();
      expect(typeOf(d)).toEqual('date');
    });

    test('iso string (from JSON.stringify replacer)', () => {
      const d = new Date();
      expect(typeOf(d.toISOString())).toEqual('string');
    });
  });

  test('number', () => {
    expect(typeOf(5)).toEqual('number');
    expect(typeOf(3.14567)).toEqual('number');
  });

  test('array', () => {
    expect(typeOf([])).toEqual('array');
  });

  test('object', () => {
    expect(typeOf({})).toEqual('object');
  });

  test('boolean', () => {
    expect(typeOf(false)).toEqual('boolean');
    expect(typeOf(true)).toEqual('boolean');
  });

  test('null', () => {
    expect(typeOf(null)).toEqual('null');
  });

  test('undefined', () => {
    expect(typeOf(undefined)).toEqual('undefined');
  });

  test('symbol', () => {
    expect(typeOf(Symbol('a'))).toEqual('symbol');
  });

  test('bigInt', () => {
    expect(typeOf(1n)).toEqual('bigint');
  });

  test('function', () => {
    expect(typeOf(() => {})).toEqual('function');
  });
});

describe('getParams', () => {
  test('should return URLSearchParams instance', () => {
    expect(getParams('')).toBeInstanceOf(URLSearchParams);
  });

  test('from string', () => {
    const url = 'key1=value1&key2=value2';
    const url2 = `?${url}`;
    expect(getParams(url).toString()).toStrictEqual(url);
    expect(getParams(url2).toString()).toStrictEqual(url);
  });

  test('from URLSearchParams', () => {
    const url = 'key1=value1&key2=value2';
    const url2 = `?${url}`;
    const params = new URLSearchParams(url);
    const params2 = new URLSearchParams(url2);
    expect(getParams(params).toString()).toStrictEqual(url);
    expect(getParams(params2).toString()).toStrictEqual(url);
  });

  test('should extract query params from full path', () => {
    const url1 = 'test=true';
    const url2 = `/?${url1}`;
    const url3 = `?${url1}`;
    const url4 = `/somepage?${url1}`;
    const url5 = `/somepage/other/?${url1}`;
    expect(getParams(url1).toString()).toStrictEqual(url1);
    expect(getParams(url2).toString()).toStrictEqual(url1);
    expect(getParams(url3).toString()).toStrictEqual(url1);
    expect(getParams(url4).toString()).toStrictEqual(url1);
    expect(getParams(url5).toString()).toStrictEqual(url1);
  });
});

describe('assignValue', () => {
  const shape = {
    a1: 1,
    a2: 2,
    a3: {
      a4: 'test'
    }
  }

  test('should assign a value', () => {
    expect(structuredClone(assignValue(shape, { ...shape, a1: 3 }))).toStrictEqual(structuredClone({
        ...shape,
        a1: 3,
      }))
  })

  test('should return a new instance of object', () => {
    const newVal = {}
    const result = assignValue(shape, newVal)
    expect(result === shape).toBeFalsy()
    expect(result === newVal).toBeFalsy()
  })

  test('should override curr value with newValue', () => {
    expect(structuredClone(assignValue(shape, { a1: 3 }))).toStrictEqual(structuredClone({ ...shape, a1: 3 }))
  })

  test('should use value from shape as default', () => {
    expect(structuredClone(assignValue(shape, {}))).toStrictEqual(structuredClone({ ...shape, a1: shape.a1 }))
  })
})

describe('filterUnknownParamsClient', () => {
  afterAll(() => {
    vi.resetModules()
  })

  test('should include only the keys that exist in the shape', () => {
    const originalLocation = window.location;
    const result = filterUnknownParamsClient({ foo: '', dummy: '' }, "?foo=bar&baz=qux");
    expect(result).toBe("foo=bar");
  });

  test('should return an empty string if no keys match the shape', () => {
    const originalLocation = window.location;
    const result = filterUnknownParamsClient({ noKey: '' }, "?foo=bar&baz=qux");
    expect(result).toBe("");
  });

  test('should handle an empty URL search string returning an empty string', () => {
    const originalLocation = window.location;
    const result = filterUnknownParamsClient({ someKey: '' }, "");
    expect(result).toBe("");
  });

  test('should handle an empty shape returning an empty string', () => {
    const originalLocation = window.location;
    const result = filterUnknownParamsClient({}, "");
    expect(result).toBe("");
  });

  test('should handle special characters correctly', () => {
    const originalLocation = window.location;
    const result = filterUnknownParamsClient({ foo: '' }, "?foo=bar%20baz&baz=qux");
    expect(result).toBe("foo=bar+baz");
  });

  test('should manage repeated keys and take the last one', () => {
    const originalLocation = window.location;
    const result = filterUnknownParamsClient({ foo: '' }, "?foo=first&foo=second");
    expect(result).toBe("foo=second");
  });
});

describe('filterUnknown', () => {
  test('filters out entries with keys not present in the shape', () => {
    const shape = { a: '', b: '' };
    const entries: [string, string][] = [
      ['a', 'value1'],
      ['b', 'value2'],
      ['c', 'value3'],
    ];
    const result = filterUnknown(shape, entries);
    expect(result).toEqual([
      ['a', 'value1'],
      ['b', 'value2'],
    ]);
  });

  test('returns an empty array if no keys match the shape', () => {
    const shape = { x: '', y: '' };
    const entries: [string, string][] = [
      ['a', 'value1'],
      ['b', 'value2'],
    ];
    const result = filterUnknown(shape, entries);
    expect(result).toEqual([]);
  });

  test('handles an empty shape object gracefully', () => {
    const shape = {};
    const entries: [string, string][] = [
      ['a', 'value1'],
      ['b', 'value2'],
    ];
    const result = filterUnknown(shape, entries);
    expect(result).toEqual([]);
  });

  test('handles an empty entries array gracefully', () => {
    const shape = { a: '', b: '' };
    const entries: [string, string][] = [];
    const result = filterUnknown(shape, entries);
    expect(result).toEqual([]);
  });
});

describe('filterUnknownParams', () => {
  test('filters out properties not present in shape', () => {
    const shape = { name: '', age: 0 };
    const searchParams = { name: 'John', age: '30', unknown: 'value' };
    const result = filterUnknownParams(shape, searchParams);
    expect(result).toEqual({ name: 'John', age: '30' });
  });

  test('handles empty searchParams object', () => {
    const shape = { name: '', age: 0 };
    const searchParams = {};
    const result = filterUnknownParams(shape, searchParams);
    expect(result).toEqual({});
  });

  test('handles undefined searchParams', () => {
    const shape = { name: '', age: 0 };
    const result = filterUnknownParams(shape, undefined);
    expect(result).toEqual({});
  });

  test('handles empty shape object', () => {
    const shape = {};
    const searchParams = { name: 'John', age: '30' };
    const result = filterUnknownParams(shape, searchParams);
    expect(result).toEqual({});
  });

  test('preserves all properties that exist in shape', () => {
    const shape = { a: '', b: '', c: '' };
    const searchParams = { a: 'value1', b: 'value2', c: 'value3' };
    const result = filterUnknownParams(shape, searchParams);
    expect(result).toEqual({ a: 'value1', b: 'value2', c: 'value3' });
  });

  test('handles complex nested shape object', () => {
    const shape = { user: { name: '' }, settings: { theme: '' } };
    const searchParams = { 'user.name': 'John', 'settings.theme': 'dark', unknown: 'value' };
    const result = filterUnknownParams(shape, searchParams);
    expect(result).toEqual({});
  });

  test('handles shape with different value types', () => {
    const shape = { str: '', num: 0, bool: false, date: new Date(), obj: {} };
    const searchParams = { str: 'text', num: '42', bool: 'true', date: '2023-01-01', extra: 'remove' };
    const result = filterUnknownParams(shape, searchParams);
    expect(result).toEqual({ str: 'text', num: '42', bool: 'true', date: '2023-01-01' });
  });
});

describe('isPrimitive', () => {
  test('returns true for string values', () => {
    expect(isPrimitive('')).toBe(true);
    expect(isPrimitive('hello')).toBe(true);
    expect(isPrimitive('123')).toBe(true);
  });

  test('returns true for number values', () => {
    expect(isPrimitive(0)).toBe(true);
    expect(isPrimitive(42)).toBe(true);
    expect(isPrimitive(-1)).toBe(true);
    expect(isPrimitive(3.14)).toBe(true);
    expect(isPrimitive(Infinity)).toBe(true);
    expect(isPrimitive(NaN)).toBe(true);
  });

  test('returns true for boolean values', () => {
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
  });

  test('returns true for null', () => {
    expect(isPrimitive(null)).toBe(true);
  });

  test('returns true for undefined', () => {
    expect(isPrimitive(undefined)).toBe(true);
  });

  test('returns true for symbol values', () => {
    expect(isPrimitive(Symbol('test'))).toBe(true);
    expect(isPrimitive(Symbol.for('global'))).toBe(true);
  });

  test('returns true for bigint values', () => {
    expect(isPrimitive(1n)).toBe(true);
    expect(isPrimitive(BigInt(123))).toBe(true);
  });

  test('returns true for Date objects', () => {
    expect(isPrimitive(new Date())).toBe(true);
    expect(isPrimitive(new Date('2023-01-01'))).toBe(true);
  });

  test('returns true for function values', () => {
    expect(isPrimitive(() => {})).toBe(true);
    expect(isPrimitive(function() {})).toBe(true);
    expect(isPrimitive(Math.max)).toBe(true);
  });

  test('returns false for plain objects', () => {
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive({ key: 'value' })).toBe(false);
    expect(isPrimitive({ a: 1, b: 2 })).toBe(false);
  });

  test('returns false for arrays', () => {
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive([1, 2, 3])).toBe(false);
    expect(isPrimitive(['a', 'b', 'c'])).toBe(false);
    expect(isPrimitive([{}])).toBe(false);
  });

  test('returns false for complex objects', () => {
    expect(isPrimitive(new Map())).toBe(false);
    expect(isPrimitive(new Set())).toBe(false);
    expect(isPrimitive(/regex/)).toBe(false);
    expect(isPrimitive(new Error())).toBe(false);
  });

  test('handles edge cases', () => {
    expect(isPrimitive(Object.create(null))).toBe(false);
    expect(isPrimitive(new String('test'))).toBe(false);
    expect(isPrimitive(new Number(42))).toBe(false);
    expect(isPrimitive(new Boolean(true))).toBe(false);
  });
});

describe('getSearch', () => {
  test('should return window.location.search in browser environment', () => {
    const originalLocation = window.location;

    Object.defineProperty(window, 'location', {
      value: { search: '?test=true&foo=bar' },
      writable: true
    });

    expect(getSearch()).toBe('?test=true&foo=bar');

    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true
    });
  });

  test('should return empty string when no search parameters', () => {
    const originalLocation = window.location;

    Object.defineProperty(window, 'location', {
      value: { search: '' },
      writable: true
    });

    expect(getSearch()).toBe('');

    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true
    });
  });
});
