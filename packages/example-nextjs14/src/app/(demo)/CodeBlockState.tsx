import { File } from '../components/File';

export const CodeBlockState = () => {
  return (
      <File
        name="state"
        content={`export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

// use \`Type\` not \`Interface\`!
type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};`}
      />
  );
};
