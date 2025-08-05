"use client";
import React from "react";
import { useUrlState } from "state-in-url/react-router";

import { stateShape } from "./stateShape";

export const Component = () => {
  const { urlState, setUrl } = useUrlState(stateShape, {
    replace: false,
  });

  return (
    <div className="flex gap-2 flex-col w-fit">
      <h2>Per page select</h2>
      <select
        value={urlState.perPage}
        onChange={(ev) =>
          setUrl((curr) => ({ ...curr, perPage: +ev.target.value }))
        }
        data-testid="select"
        className="block text-black"
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  );
};
