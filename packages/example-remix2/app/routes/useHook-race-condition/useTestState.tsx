import { useSearchParams } from '@remix-run/react';
import { useUrlState } from 'state-in-url/remix';

type State = { value: number; showForm: boolean };
const STATE: State = { value: 0, showForm: false};

export const useTestState = () => {
 const [searchParams] = useSearchParams();
 const result = useUrlState(STATE, { searchParams });

 return result;
}