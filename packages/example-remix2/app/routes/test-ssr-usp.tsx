import { form } from "../../../shared/form";
import { useUrlState } from "state-in-url/remix";

export default function TestSsrUsp() {
  const { urlState } = useUrlState(form);

  return <pre data-testid="parsed-usp">{JSON.stringify(urlState, null, 2)}</pre>;
}
