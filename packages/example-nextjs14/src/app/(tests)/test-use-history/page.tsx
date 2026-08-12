import { HistoryDemo } from '../../History-for-test';

export default async function Page({
  searchParams,
}: {
  searchParams: object;
}) {
  return (
    <HistoryDemo
      pathname="/test-use-history"
      useHistory
      searchParams={searchParams}
    />
  );
}
