import {
  decode,
  decodePrimitive,
  encodePrimitive,
  encode,
  parseJSON,
} from './encoder';
import { parseSPObj } from '../parseSPObj';
import { type JSONCompatible } from '../utils';

describe('encoder', () => {
  describe('object', () => {
    describe('simple', () => {
      const obj1 = { num: 123, float: 1.55, bool1: false, und: undefined, date: new Date(2024, 10, 1) };
      const enc1 = "{'num':123,'float':1.55,'bool1':false,'und':'∙undefined','date':'⏲2024-10-31T20:00:00.000Z'}"

      test('encode', () => {
        expect(encode(obj1)).toEqual(
          enc1,
        );
      })

      test('decode', () => {
        const obj = { ...obj1 }
        delete obj.und
        const decoded = decode<typeof obj>(enc1)
        expect(decoded.date).toBeInstanceOf(Date)
        const isoString = obj.date.toISOString()
        expect(decoded.date.toISOString()).toStrictEqual(isoString)
        expect(decoded).toEqual(obj)
      })

    });

    describe('nested', () => {
      const obj2 = {
        dateStr: '2020-01-01T00:00:00.000Z',
        dateObj: new Date(2019, 1, 1),
        nub: 3,

        prop: {
          dateStr: '2020-01-01T00:00:00.000Z',
          dateObj: new Date(2021, 1, 1),
          num: 4,
          und: undefined,
          prop2: [1, '2', true]
        }
      }
      const enc2 = "{'dateStr':'2020-01-01T00:00:00.000Z','dateObj':'⏲2019-01-31T20:00:00.000Z','nub':3,'prop':{'dateStr':'2020-01-01T00:00:00.000Z','dateObj':'⏲2021-01-31T20:00:00.000Z','num':4,'und':'∙undefined','prop2':[1,'2',true]}}"

      test('encode', () => {
        expect(encode(structuredClone(obj2))).toStrictEqual(enc2)
      })
      test('decode', () => {
        const decoded = decode(enc2) as typeof obj2;
        expect(decoded).toEqual(obj2)
      })

    })

    describe('nested all types', () => {
      const obj3 = {
        num: 123,
        num2: 3.14,
        b1: true,
        b2: false,
        str: 'test string',
        n: null,
        obj1: {
          obj2: {
            str: 'my_str',
            n: 123,
            n2: -12.3,
            b: false,
            b1: true,
            dateIso: '2020-01-01T00:00:00.000Z',
          },
        },
        dateIso: '2022-01-01T00:00:00.000Z',
      };
      const enc3 = "{'num':123,'num2':3.14,'b1':true,'b2':false,'str':'test string','n':null,'obj1':{'obj2':{'str':'my_str','n':123,'n2':-12.3,'b':false,'b1':true,'dateIso':'2020-01-01T00:00:00.000Z'}},'dateIso':'2022-01-01T00:00:00.000Z'}"

      test('encode', () => {
        expect(encode(structuredClone(obj3))).toStrictEqual(
          enc3
        );
      })
      test('decode', () => {
        expect(structuredClone(obj3)).toStrictEqual(decode(enc3))
      })

    });
  });

  describe('array', () => {
    test('simple', () => {
      const obj = [123, 1.55, false];
      const expected = '[123,1.55,false]';
      expect(encode(obj)).toStrictEqual(expected);
    });

    test('nested', () => {
      const obj = [123, [45, true, { arr: [1, 2, { test: true }, null] }]];

      expect(encode(obj)).toStrictEqual(
        "[123,[45,true,{'arr':[1,2,{'test':true},null]}]]",
      );
    });

    test('array with invalid value', () => {
      const expected = [1, 'str'];
      expect(decode("[1,'str']", expected)).toStrictEqual(expected);
      expect(decode("[1,'str']")).toStrictEqual(expected);
    });
  });

  describe('string', () => {
    test('simple', () => {
      expect(encode('')).toStrictEqual("''");
      expect(encode('test')).toStrictEqual("'test'");
    });

    test('special characters', () => {
      const str = '"test #?\t=\n[]{}()%.';
      expect(encode(str)).toStrictEqual("'\\'test #?\\t=\\n[]{}()%.'");
    });

    test('single quote', () => {
      const str = "'";
      expect(encode(str)).toStrictEqual("'%27'");
    });
  });

  describe('number', () => {
    test('integer and float', () => {
      expect(encode(5)).toStrictEqual("5");

      expect(encode(5.55)).toStrictEqual("5.55");
    });
  });

  describe('date', () => {
    test('instance', () => {
      const d = new Date('2024-06-28T09:10:38.763Z');
      expect(encode(d)).toStrictEqual("'2024-06-28T09:10:38.763Z'");
    });

    test('iso string', () => {
      const d = '2024-06-28T09:10:38.763Z';
      expect(encode(d)).toStrictEqual("'2024-06-28T09:10:38.763Z'");
    });
  });

  test('boolean', () => {
    expect(encode(true)).toStrictEqual('true');
    expect(encode(false)).toStrictEqual('false');
  });

  test('null', () => {
    expect(encode(null)).toStrictEqual('null');
  });

  test('undefined', () => {
    expect(encode(undefined)).toStrictEqual("'∙undefined'");
  });

  // no sense to handle this
  test('function', () => {
    expect(encode(() => { })).toStrictEqual("");
  });

  test('symbol', () => {
    expect(encode(Symbol('a'))).toStrictEqual("");
  });
});

describe('encodePrimitive', () => {
  describe('string', () => {
    test('simple', () => {
      expect(encodePrimitive('')).toStrictEqual("");
      expect(encodePrimitive('test')).toStrictEqual("test");
    });

    test('special characters', () => {
      const str = '"test #?\t=\n[]{}()%.';
      expect(encodePrimitive(str)).toStrictEqual('"test #?\t=\n[]{}()%.');
    });

    test('single quote', () => {
      const str = "'";
      expect(encodePrimitive(str)).toStrictEqual("'");
    });
  });

  describe('number', () => {
    test('integer and float', () => {
      expect(encodePrimitive(5)).toStrictEqual(5);
      expect(encodePrimitive(5.55)).toStrictEqual(5.55);
    });
  });

  describe('date', () => {
    test('instance', () => {
      const d = new Date('2024-06-28T09:10:38.763Z');
      expect(encodePrimitive(d)).toStrictEqual('⏲2024-06-28T09:10:38.763Z');
    });

    test('iso string', () => {
      const d = '2024-06-28T09:10:38.763Z';
      expect(encodePrimitive(d)).toStrictEqual("2024-06-28T09:10:38.763Z");
    });
  });

  test('boolean', () => {
    expect(encodePrimitive(true)).toStrictEqual(true);
    expect(encodePrimitive(false)).toStrictEqual(false);
  });

  test('null', () => {
    expect(encodePrimitive(null)).toStrictEqual(null);
  });

  test('undefined', () => {
    expect(encodePrimitive(undefined)).toStrictEqual("∙undefined");
  });
})

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

  test('encode/decode', () => {
    const a1 = performance.now();
    const result = decode(encode(bigObj));
    const a2 = performance.now();
    console.log('encode time', a2 - a1 + ' milliseconds');
    expect(result).toStrictEqual(bigObj);
  });
});

describe('decodePrimitive', () => {
  test('should encode with specia symbols', () => {
    expect(decodePrimitive('∙undefined')).toStrictEqual(undefined);

    const date = new Date('2024-06-28T09:10:38.763Z');
    expect((decodePrimitive(`⏲${date}`) as Date).toString()).toStrictEqual(
      date.toString(),
    );
  });

  test('should value for other types', () => {
    expect(decodePrimitive(null as unknown as string)).toStrictEqual(null);
    expect(decodePrimitive(false as unknown as string)).toStrictEqual(false);
    expect(decodePrimitive(true as unknown as string)).toStrictEqual(true);
    expect(decodePrimitive(3 as unknown as string)).toStrictEqual(3);
    expect(decodePrimitive([] as unknown as string)).toStrictEqual([]);
    expect(decodePrimitive({ test: 1 } as unknown as string)).toStrictEqual({test: 1});
    expect(decodePrimitive('test%20string')).toStrictEqual('test%20string');
  })
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

  test('standard JSON without strings', () => {
    // undefined stripped out in default JSON too, toStrictEqual preserves undefined
    expect(parseJSON(JSON.stringify(state))).toEqual(state);
  });

  test('standard JSON', () => {
    expect(parseJSON(JSON.stringify({ ...state, str: 'string' }))).toEqual({
      ...state,
      str: 'string',
    });
  });

  test('with encoded values', () => {
    const exp = JSON.parse(JSON.stringify(state))
    delete exp.u

    expect(parseJSON(encode(state).replace(/'/g, '"'))).toEqual(exp);
  });

  test('should return fallback for invalid JSON', () => {
    expect(parseJSON('invalid', '' as unknown as JSONCompatible)).toEqual('');
    expect(parseJSON('invalid')).toEqual(undefined);
  });
});

describe('parseSPObj', () => {
  const stateShape = { perPage: 10 };

  test('should parse params to object', () => {
    expect(parseSPObj({}, stateShape)).toStrictEqual(stateShape);
    expect(parseSPObj({ perPage: '20' }, stateShape)).toStrictEqual({
      perPage: 20,
    });

    expect(
      parseSPObj(undefined as unknown as object, stateShape),
    ).toStrictEqual(stateShape);
    expect(parseSPObj(null as unknown as object, stateShape)).toStrictEqual(
      stateShape,
    );
  });
});
