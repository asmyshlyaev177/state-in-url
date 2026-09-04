import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/astro';

export function StatusUsp({
  searchParams,
}: {
  searchParams?: Record<string, string>;
}) {
  const { urlState } = useUrlState(form, { searchParams });

  return (
    <pre data-testid="parsed-usp">{JSON.stringify(urlState, null, 2)}</pre>
  );
}
