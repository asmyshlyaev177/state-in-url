import { getParams, typeOf, assignValue, filterUnknownParamsClient, filterUnknown } from './utils';

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
    vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=bar&baz=qux",
    }));
    const result = filterUnknownParamsClient({ foo: '', dummy: '' });
    expect(result).toBe("foo=bar");
  });

  test('should return an empty string if no keys match the shape', () => {
    const originalLocation = window.location;
    vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=bar&baz=qux",
    }));
    const result = filterUnknownParamsClient({ noKey: '' });
    expect(result).toBe("");
  });

  test('should handle an empty URL search string returning an empty string', () => {
    const originalLocation = window.location;
    vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "",
    }));
    const result = filterUnknownParamsClient({ someKey: '' });
    expect(result).toBe("");
  });

  test('should handle an empty shape returning an empty string', () => {
    const originalLocation = window.location;
    vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=bar&baz=qux",
    }));
    const result = filterUnknownParamsClient({});
    expect(result).toBe("");
  });

  test('should handle special characters correctly', () => {
    const originalLocation = window.location;
    vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=bar%20baz&baz=qux",
    }));
    const result = filterUnknownParamsClient({ foo: '' });
    expect(result).toBe("foo=bar+baz");
  });

  test('should manage repeated keys and take the last one', () => {
    const originalLocation = window.location;
    vi.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=first&foo=second",
    }));
    const result = filterUnknownParamsClient({ foo: '' });
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
