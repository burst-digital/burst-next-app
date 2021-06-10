import { useEffect, useState } from 'react';
import { isClient } from '../../misc/is-environment';

export function useClientSideState<P>(
  initialState: P | null,
  clientState: () => P | null,
) {
  const state = useState(initialState);

  useEffect(() => {
    if (isClient()) {
      state[1](clientState);
    }
  }, [clientState, state]);

  return state;
}
