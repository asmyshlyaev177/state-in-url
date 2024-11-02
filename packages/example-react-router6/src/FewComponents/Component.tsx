"use client";
import React from "react";
import { useUrlState } from "state-in-url/react-router";

import { stateShape } from "./stateShape";

export const Component = () => {
  const { urlState, setUrl } = useUrlState({
    defaultState: stateShape,
    replace: false,
  });

  return (
    <div className="flex gap-2">
      <h2>Per page select</h2>
      <select
        value={urlState.perPage}
        onChange={(ev) =>
          setUrl((curr) => ({ ...curr, perPage: +ev.target.value }))
        }
        className=""
        data-testid="select"
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  );
};
