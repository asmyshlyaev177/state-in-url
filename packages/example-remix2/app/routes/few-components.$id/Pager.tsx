import React from "react";
import { useUrlState } from "state-in-url/remix";

import { pagerShape } from "./stateShape";

export const Pager = () => {
  const { urlState, setUrl } = useUrlState(pagerShape, {
    replace: false,
  });
  // the first render's value: a remount must start from the URL, not from what the hook held before
  const [firstRenderPage] = React.useState(urlState.page);

  return (
    <div className="flex gap-2 flex-col w-fit">
      <h2>Page select</h2>
      <select
        value={urlState.page}
        onChange={(ev) => setUrl({ page: +ev.target.value })}
        data-testid="page-select"
        className="block text-black"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <span data-testid="page-first-render">{firstRenderPage}</span>
    </div>
  );
};
