import { useUrlState } from 'state-in-url/astro';

type State = { value: number; showForm: boolean };
const STATE: State = { value: 0, showForm: false };

export const useTestState = (searchParams?: Record<string, string>) =>
  useUrlState(STATE, { searchParams });
