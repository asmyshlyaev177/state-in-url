import { Form } from '../Form';
import { Status } from '../Status';

export default async function Home() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br
     from-orange-400 to-orange-600 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="font-mono">state-in-url</span> Demo
          </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <Form
            className="flex max-h-[450px] flex-col md:flex-row gap-8 basis-1/2"
            delay={400}
          />
          <Status
            className="flex-1 max-h-[450px] bg-gray-100
             rounded-lg p-4 flex flex-col shadow-md border border-grey
              basis-1/2 grow-0"
          />
        </div>
      </div>
    </main>
  );
}