import { typeOf } from './utils';

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
