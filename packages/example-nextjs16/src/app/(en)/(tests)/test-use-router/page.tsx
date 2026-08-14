import { HistoryDemo } from '../../../History-for-test';

import { type SearchParamsProm } from 'shared/types';

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParamsProm;
}) {
  const params = await searchParams;

  return (
    <HistoryDemo
      pathname="/test-use-router"
      useHistory={false}
      searchParams={params}
    />
  );
}
