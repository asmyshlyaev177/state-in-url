export const form: Form = {
  name: "",
  age: undefined,
  "agree to terms": false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  "agree to terms": boolean;
  tags: { id: string; value: { text: string; time: Date; iso?: string } }[];
};
