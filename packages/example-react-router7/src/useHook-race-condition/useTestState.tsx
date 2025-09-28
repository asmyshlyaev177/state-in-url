import { useSearchParams } from "react-router";
import { useUrlState } from "state-in-url/react-router";

type State = { value: number; showForm: boolean };
const STATE: State = { value: 0, showForm: false };

export const useTestState = () => {
  const [searchParams] = useSearchParams();
  return useUrlState(STATE, { searchParams });
};
