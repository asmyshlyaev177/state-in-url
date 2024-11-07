import { getParams, typeOf, assignValue, filterUnknownParamsClient } from './utils';

describe('typeOf', () => {
  it('string', () => {
    expect(typeOf('')).toEqual('string');
    expect(typeOf('str')).toEqual('string');
    expect(typeOf('5')).toEqual('string');
  });

  describe('date', () => {
    it('instance', () => {
      const d = new Date();
      expect(typeOf(d)).toEqual('date');
    });

    it('iso string (from JSON.stringify replacer)', () => {
      const d = new Date();
      expect(typeOf(d.toISOString())).toEqual('string');
    });
  });

  it('number', () => {
    expect(typeOf(5)).toEqual('number');
    expect(typeOf(3.14567)).toEqual('number');
  });

  it('array', () => {
    expect(typeOf([])).toEqual('array');
  });

  it('object', () => {
    expect(typeOf({})).toEqual('object');
  });

  it('boolean', () => {
    expect(typeOf(false)).toEqual('boolean');
    expect(typeOf(true)).toEqual('boolean');
  });

  it('null', () => {
    expect(typeOf(null)).toEqual('null');
  });

  it('undefined', () => {
    expect(typeOf(undefined)).toEqual('undefined');
  });

  it('symbol', () => {
    expect(typeOf(Symbol('a'))).toEqual('symbol');
  });

  it('bigInt', () => {
    expect(typeOf(1n)).toEqual('bigint');
  });

  it('function', () => {
    expect(typeOf(() => {})).toEqual('function');
  });
});

describe('getParams', () => {
  it('should return URLSearchParams instance', () => {
    expect(getParams('')).toBeInstanceOf(URLSearchParams);
  });

  it('from string', () => {
    const url = 'key1=value1&key2=value2';
    const url2 = `?${url}`;
    expect(getParams(url).toString()).toStrictEqual(url);
    expect(getParams(url2).toString()).toStrictEqual(url);
  });

  it('from URLSearchParams', () => {
    const url = 'key1=value1&key2=value2';
    const url2 = `?${url}`;
    const params = new URLSearchParams(url);
    const params2 = new URLSearchParams(url2);
    expect(getParams(params).toString()).toStrictEqual(url);
    expect(getParams(params2).toString()).toStrictEqual(url);
  });

  it('should extract query params from full path', () => {
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

  it('should assign a value', () => {
    expect(clone(assignValue(shape, { a1: 2 }, { ...shape, a1: 3 }))).toStrictEqual(clone({
        ...shape,
        a1: 3,
      }))
  })

  it('should return a new instance of object', () => {
    const curr = structuredClone(shape)
    const newVal = {}
    const result = assignValue(shape, curr, newVal)
    expect(result === shape).toBeFalsy()
    expect(result === curr).toBeFalsy()
    expect(result === newVal).toBeFalsy()
  })

  it('should override curr value with newValue', () => {
      expect(clone(assignValue(shape, { a1: 2 }, { a1: 3 }))).toStrictEqual(clone({ ...shape, a1: 3 }))
  })

  it('should use value from shape as default', () => {
      expect(clone(assignValue(shape, { a1: 2 }, {}))).toStrictEqual(clone({ ...shape, a1: shape.a1 }))
  })
})

const clone = (obj: object) => JSON.parse(JSON.stringify(obj))

describe('filterUnknownParamsClient', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  it('should include only the keys that exist in the shape', () => {
    const originalLocation = window.location;
    jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=bar&baz=qux",
    }));
    const result = filterUnknownParamsClient({ foo: '', dummy: '' });
    expect(result).toBe("foo=bar");
  });

  it('should return an empty string if no keys match the shape', () => {
    const originalLocation = window.location;
    jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=bar&baz=qux",
    }));
    const result = filterUnknownParamsClient({ noKey: '' });
    expect(result).toBe("");
  });

  it('should handle an empty URL search string returning an empty string', () => {
    const originalLocation = window.location;
    jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "",
    }));
    const result = filterUnknownParamsClient({ someKey: '' });
    expect(result).toBe("");
  });

  it('should handle an empty shape returning an empty string', () => {
    const originalLocation = window.location;
    jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=bar&baz=qux",
    }));
    const result = filterUnknownParamsClient({});
    expect(result).toBe("");
  });

  it('should handle special characters correctly', () => {
    const originalLocation = window.location;
    jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=bar%20baz&baz=qux",
    }));
    const result = filterUnknownParamsClient({ foo: '' });
    expect(result).toBe("foo=bar+baz");
  });

  it('should manage repeated keys and take the last one', () => {
    const originalLocation = window.location;
    jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
      ...originalLocation,
      search: "?foo=first&foo=second",
    }));
    const result = filterUnknownParamsClient({ foo: '' });
    expect(result).toBe("foo=second");
  });
});
