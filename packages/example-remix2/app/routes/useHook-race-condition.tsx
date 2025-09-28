import React from 'react';
import { useNavigate, useLocation } from '@remix-run/react';
import { UseStateComp } from './useHook-race-condition/UseStateComp';
import { useTestState } from './useHook-race-condition/useTestState';

export default function Page() {
  const { urlState } = useTestState();
  const navigate = useNavigate();
  const location = useLocation();

  const updates = React.useRef<boolean[]>([]);

  React.useLayoutEffect(() => {
    updates.current.push(urlState.showForm);
  }, [urlState]);

  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Test for multiple useState hook instances and setUrl race condition
        </h1>
      </header>

      <button onClick={() => {
        navigate(location.pathname);
      }}>Reload</button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: "12px" }}>
        <UseStateComp />

        {urlState.showForm && <UseStateComp showCheckbox={false} />}
      </div>

      <div data-testid="updates-array">
        {JSON.stringify(updates.current)}
      </div>

    </div>
  );
}