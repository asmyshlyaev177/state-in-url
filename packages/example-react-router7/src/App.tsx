import { Link } from "react-router";

import { Form } from "./Form-for-test";
import { Status } from "./Status-for-test";

function App() {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full h-[1250px]">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="font-mono">state-in-url</span> Demo
        </h1>
      </header>

      <div className="flex flex-col md:flex-row gap-8 text-black">
        <Form className="flex max-h-[650px] flex-col md:flex-row gap-8 basis-1/2" />
        <Status
          className="flex-1 max-h-[650px] bg-gray-100
             rounded-lg p-4 flex flex-col shadow-md border border-grey
              basis-1/2 grow-0"
        />
      </div>
      <Link to="/few-components/1" className="text-black">
        Few components
      </Link>
      <Link to="/useHook-race-condition" className="text-black ml-4">
        Race Condition Test
      </Link>
    </div>
  );
}

export default App;
