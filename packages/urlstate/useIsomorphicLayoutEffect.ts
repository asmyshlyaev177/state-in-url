import React from 'react';

// subscribe before paint; useLayoutEffect warns on the server
export const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
