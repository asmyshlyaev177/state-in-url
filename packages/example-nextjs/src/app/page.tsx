import { File } from './components/File';
import { GithubLink } from './components/GithubLink';
import { UrlBox } from './components/UrlBox';
import { Form } from './Form';
import { Logo } from './Logo';
import { Status } from './Status';

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <main
      className="min-h-screen bg-gradient-to-b
     from-orange-300 to-orange-500 p-4"
    >
      <div className="flex flex-col items-center container ml-auto mr-auto">
        <div className="flex flex-col items-center bg-gradient-to-t from-stone-50 to-white w-full p-2 xl:max-w-[80%] lg:p-[4em] rounded-lg lg:pt-6">
          <div className="text-center min-h-[35vh] md:min-h-[25vh] flex flex-col justify-center mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-1">
              <div className="text-center md:text-left ml-4 flex flex-col items-center min-[800px]:items-left min-[800px]:flex-row gap-6">
                <Logo className="relative block min-w-[200px] max-w-[200px] drop-shadow-xl hover:drop-shadow-2xl transition ease-in duration-150" />

                <div>
                  <h1 className="text-6xl font-semibold tracking-wide text-neutral-700 mb-2 drop-shadow-sm">
                    State in url
                  </h1>
                  <p className="text-2xl max-w-[700px] font-light text-neutral-700 mb-2 drop-shadow-sm">
                    State management and deep links
                  </p>
                  <p className="text-3xl tracking-wide text-neutral-800 max-w-[700px] mt-2  drop-shadow-sm">
                    Share complex state between unrelated React.js components
                    and sync it to the URL
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
            <header className="mb-2 flex justify-between items-center flex-wrap gap-2">
              <h2 className="text-3xl font-bold text-gray-800">
                Demo with Next.js
              </h2>
              <GithubLink className="ml-auto" />
            </header>

            <div className="mb-3">
              <UrlBox />
            </div>

            <div className="flex flex-col md:flex-row gap-8 relative">
              <Form
                className="flex max-h-[550px] flex-col md:flex-row gap-8 basis-1/2"
                searchParams={searchParams}
              />
              <Status
                className="flex-1 w-full max-h-[550px] bg-gray-100
             rounded-lg p-4 flex flex-col shadow-md border border-grey
              basis-1/2 grow-1"
                sp={searchParams}
              />
            </div>
          </div>

          <div className="mt-14">
            <CodeBlocks />
          </div>
        </div>
      </div>

      <footer className="text-gray-700 text-right mt-4">
        © asmyshlyaev177 {new Date().getFullYear()}
      </footer>
    </main>
  );
}

const CodeBlocks = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-black text-center text-xl mt-2">
        1. Define the state
      </h2>
      <File
        name="state"
        content={`export const form: Form = {
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
};`}
      />

      <h2 className="text-black text-center text-xl mt-2">
        2. Use it in any components
      </h2>
      <File
        name="ComponentA"
        content={`'use client';
import { useUrlState } from 'state-in-url/next';

export const ComponentA = () => {
  const { state, updateUrl } = useUrlState({ defaultState: form });

  return <input
    id="name"
    value={state.name}
    onChange={(ev) => updateUrl({ name: ev.target.value }) }
    />
};`}
      />
      <File
        name="ComponentB"
        content={`'use client';
import { useUrlState } from 'state-in-url/next';

// for SSR
// const Home = async ({ searchParams }: { searchParams: object }) => {
// <ComponentB searchParams={searchParams} />

export const ComponentB = ({ searchParams }: { searchParams?: object }) => {
  const { state } = useUrlState({ defaultState: form, searchParams });

  return <div>name: {state.name}</div>
};`}
      />
    </div>
  );
};
