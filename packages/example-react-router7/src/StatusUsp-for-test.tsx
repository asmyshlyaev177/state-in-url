import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/react-router';

export function StatusUsp() {
  const { urlState } = useUrlState(form);

  return (
    <pre data-testid="parsed-usp">{JSON.stringify(urlState, null, 2)}</pre>
  );
}
