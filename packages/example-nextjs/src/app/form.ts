export const form: Form = {
  name: '',
  age: '',
  'agree to terms': false,
  tags: [],
};

type Form = {
  name: string;
  age: number | string;
  'agree to terms': boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
