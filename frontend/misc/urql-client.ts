import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
  Client,
  Exchange,
} from 'urql';
import { useMemo } from 'react';
import { isClient, isServer } from './is-environment';

let urqlClient: [Client, Exchange] | null = null;

export function createUrqlClient(
  url: URL,
  initialState: any = {},
): [Client, Exchange] {
  const ssr = ssrExchange({
    isClient: isClient(),
    initialState,
  });

  return [
    createClient({
      url: url.href,
      suspense: false,
      exchanges: [
        dedupExchange,
        cacheExchange,
        ssr, // Add `ssr` in front of the `fetchExchange`
        fetchExchange,
      ],
    }),
    ssr,
  ];
}

export function initializeUrqlClient(
  url: URL,
  initialState = {},
): [Client, Exchange] {
  if (isServer()) {
    return createUrqlClient(url);
  }

  // eslint-disable-next-line
  const _urqlClient = urqlClient ?? createUrqlClient(url, initialState);

  if (!urqlClient) {
    urqlClient = _urqlClient;
  }

  return urqlClient;
}

/**
 * React hook that initializes Urql when a href can be created.
 *
 * @param props an object containing a page href and initial apollo state.
 */
export function useUrql<P extends { url: URL; initialUrqlState: any }>(
  props: P,
) {
  const client = useMemo(
    () => initializeUrqlClient(props.url, props.initialUrqlState),
    [props.initialUrqlState, props.url],
  );
  return client;
}
