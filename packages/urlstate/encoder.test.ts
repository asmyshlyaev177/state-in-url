import {
  encode,
  decode,
  decodePrimitive,
  parseJSON,
  errorSym,
} from './encoder';
import { type JSONCompatible } from './utils';

describe('encoder', () => {
  describe('string', () => {
    it('simple', () => {
      expect('').toStrictEqual(decode(encode('')));
      expect('test').toStrictEqual(decode(encode('test')));
    });

    it('special characters', () => {
      const str = '"test #?\t=\n[]{}()%.';
      expect(str).toStrictEqual(decode(encode(str)));
    });
  });

  describe('number', () => {
    it('integer and float', () => {
      const num1 = 5;
      const num2 = 5.55;
      expect(encode(num1)).toStrictEqual('∓5');
      expect(num1).toStrictEqual(decode(encode(num1)));
      expect(encode(num2)).toStrictEqual('∓5.55');
      expect(num2).toStrictEqual(decode(encode(num2)));
    });
  });

  it('date', () => {
    const d = new Date('2024-06-28T09:10:38.763Z');
    expect(encode(d)).toStrictEqual('⏲2024-06-28T09:10:38.763Z');
    expect(d).toStrictEqual(decode(encode(d)));
  });

  it('boolean', () => {
    expect(encode(true)).toStrictEqual('🗵true');
    expect(true).toStrictEqual(decode(encode(true)));
    expect(encode(false)).toStrictEqual('🗵false');
    expect(false).toStrictEqual(decode(encode(false)));
  });

  it('null', () => {
    expect(encode(null)).toStrictEqual('∙null');
    expect(null).toStrictEqual(decode(encode(null)));
  });

  it('undefined', () => {
    expect(encode(undefined)).toStrictEqual('∙undefined');
    expect(undefined).toStrictEqual(decode(encode(undefined)));
  });

  describe('object', () => {
    it('simple', () => {
      const obj = { num: 123, float: 1.55, bool1: false };
      expect(encode(obj)).toStrictEqual(
        "{'num':'∓123','float':'∓1.55','bool1':'🗵false'}",
      );
      expect(obj).toStrictEqual(decode(encode(obj)));
    });

    it('nested', () => {
      const obj = {
        num: 123,
        num2: 3.14,
        b1: true,
        b2: false,
        str: 'test string',
        n: null,
        obj1: { obj2: { str: 'my_str' } },
      };
      expect(encode(obj)).toStrictEqual(
        "{'num':'∓123','num2':'∓3.14','b1':'🗵true','b2':'🗵false','str':'◖test%20string','n':'∙null','obj1':{'obj2':{'str':'◖my_str'}}}",
      );
      expect(obj).toStrictEqual(decode(encode(obj)));
    });
  });

  describe('array', () => {
    it('simple', () => {
      const obj = [123, 1.55, false];
      const expected = "['∓123','∓1.55','🗵false']";
      expect(encode(obj)).toStrictEqual(expected);
      expect(obj).toStrictEqual(decode(expected));
    });

    it('nested', () => {
      const obj = [123, [45, true, { arr: [1, 2, { test: true }, null] }]];
      expect(encode(obj)).toStrictEqual(
        "['∓123',['∓45','🗵true',{'arr':['∓1','∓2',{'test':'🗵true'},'∙null']}]]",
      );
      expect(obj).toStrictEqual(decode(encode(obj)));
    });

    it('array with invalid value', () => {
      const expected = [1, 'str'];
      expect(decode("['∓1','str']", expected)).toStrictEqual(expected);
      expect(decode("['∓1','str']")).toStrictEqual(expected);
    });
  });

  // no sense to handle this
  it('function', () => {
    expect(encode(() => {})).toStrictEqual('');
  });

  it('symbol', () => {
    expect(encode(Symbol('a'))).toStrictEqual('');
  });
});

describe('real life example', () => {
  const bigObj = {
    emails: {
      sha1: [
        'f37224933f5e906904ef1f9aeca3486941664555',
        '8a3c1b25c63e3a402e5e3a8e981054ddfec20a18',
      ],
      sha256: [
        '9d67f9cab3b2775dbe38e9f6521c23d20037391c0879e4700fea9e9a7672a79e',
        '65c4bbea793b0ac3d5adb86beac555294df2aac05c932374d1d2e382bfd3ea4c',
      ],
    },
    client: {
      deviceType: 'Personal computer',
      browserLanguage: 'en-GB',
      isUserLoggedIn: true,
      countryCode: 'ge',
      isInternalRequest: false,
    },
    id: { dmp: 'AT56sgZZhNi6E_vvdRIAFf-HXftr&v=2' },
    numb1: 100500,
    numb2: 100.12345,
    compliance: {
      isCCPAOptIn: true,
      isLinkedInEmployee: false,
      isFunctionalOptIn: true,
      isGeoOptIn: true,
      isGDPROptIn: true,
      isAdvertisingOptIn: true,
      isAnalyticsAndResearchOptIn: true,
    },
    primaryEmail: {
      sha1: 'f37224933f5e906904ef1f9aeca3486941664555',
      sha256:
        '9d67f9cab3b2775dbe38e9f6521c23d20037391c0879e4700fea9e9a7672a79e',
    },
    preference: { language: 'en-us' },
  };
  it('encode/decode', () => {
    const a1 = performance.now();
    const result = decode(encode(bigObj));
    const a2 = performance.now();
    console.log('encode time', a2 - a1 + ' milliseconds');
    expect(bigObj).toStrictEqual(result);
  });
});

describe('decodePrimitive', () => {
  it('null', () => {
    expect(decodePrimitive('∙null')).toStrictEqual(null);
  });

  it('undefined', () => {
    expect(decodePrimitive('∙undefined')).toStrictEqual(undefined);
  });

  it('boolean', () => {
    expect(decodePrimitive('🗵false')).toStrictEqual(false);
    expect(decodePrimitive('🗵true')).toStrictEqual(true);
  });

  it('number', () => {
    expect(decodePrimitive('∓3')).toStrictEqual(3);
    expect(decodePrimitive('∓3.14')).toStrictEqual(3.14);
  });

  it('date', () => {
    const date = new Date('2024-06-28T09:10:38.763Z');
    expect((decodePrimitive(`⏲${date}`) as Date).toString()).toStrictEqual(
      date.toString(),
    );
  });

  it('string', () => {
    expect(decodePrimitive('◖test%20string')).toStrictEqual('test string');
  });

  it('invalid string', () => {
    expect(decodePrimitive('')).toStrictEqual(errorSym);
    expect(decodePrimitive('invalid')).toStrictEqual(errorSym);
    const date = new Date('2024-06-28T09:10:38.763Z');
    expect(decodePrimitive(` ⏲${date}`) as Date).toStrictEqual(errorSym);
    expect(decodePrimitive(' ∙null')).toStrictEqual(errorSym);
    expect(decodePrimitive(' ∙undefined')).toStrictEqual(errorSym);
    expect(decodePrimitive(' 🗵false')).toStrictEqual(errorSym);
    expect(decodePrimitive(' 🗵true')).toStrictEqual(errorSym);
    expect(decodePrimitive(' ∓3')).toStrictEqual(errorSym);
    expect(decodePrimitive(' ∓3.14')).toStrictEqual(errorSym);
    expect(decodePrimitive(' ◖test%20string')).toStrictEqual(errorSym);
  });
});

describe('parseJSON', () => {
  const state = {
    age: 30,
    terms: true,
    terms2: false,
    n: null,
    u: undefined,
    arr: [],
    obj: {},
    arr1: [1, 2],
    obj1: { t: 123 },
  };

  it('standard JSON without strings', () => {
    // undefined stripped out in default JSON too, toStrictEqual preserves undefined
    expect(parseJSON(JSON.stringify(state))).toEqual(state);
  });

  it('standard JSON', () => {
    expect(parseJSON(JSON.stringify({ ...state, str: 'string' }))).toEqual({
      ...state,
      str: 'string',
    });
  });

  it('with encoded values', () => {
    expect(parseJSON(encode(state).replace(/'/g, '"'))).toEqual(state);
  });

  it('should return fallback for invalid JSON', () => {
    expect(parseJSON('invalid', '' as unknown as JSONCompatible)).toEqual('');
    expect(parseJSON('invalid')).toEqual(undefined);
  });
});
