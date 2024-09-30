import { parseSPObj } from './parseSPObj';

describe('should decode server components searchParams', () => {
  it('without errors', () => {
    const sp = {
      'agree to terms': 'true',
      tags: "[{'id':'3','value':{'text':'TailwindCSS','time':'2024-07-07T13:51:18.069Z'}}]",
    };
    const expected = {
      ...form,
      'agree to terms': true,
      tags: [
        {
          id: '3',
          value: { text: 'TailwindCSS', time: '2024-07-07T13:51:18.069Z' },
        },
      ],
    };

    expect(parseSPObj(sp, form)).toStrictEqual(expected);
  });

  it('invalid string', () => {
    const sp = {
      'agree to terms': 'true',
      tags: "[{'id':'3','value':{'text':'TailwindC",
    };
    const expected = {
      ...form,
      'agree to terms': true,
      tags: [],
    };

    expect(parseSPObj(sp, form)).toStrictEqual(expected);
  });
});

const form: Form = {
  name: '',
  age: undefined,
  'agree to terms': false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  'agree to terms': boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
