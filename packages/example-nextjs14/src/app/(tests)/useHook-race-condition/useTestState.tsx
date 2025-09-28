'use client';

import { useSearchParams } from 'next/navigation';
import { useUrlState } from 'state-in-url/next';

type State = { value: number; showForm: boolean };
const STATE: State = { value: 0, showForm: false};

export const useTestState = () => {
 const searchParams = useSearchParams();
 const result = useUrlState(STATE, { searchParams });

 return result;
}
