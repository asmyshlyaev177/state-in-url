import { getParams, typeOf } from './utils';

describe('typeOf', () => {
  it('string', () => {
    expect(typeOf('')).toEqual('string');
    expect(typeOf('str')).toEqual('string');
    expect(typeOf('5')).toEqual('string');
  });

  it('date', () => {
    const d = new Date();
    expect(typeOf(d)).toEqual('date');
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
});
