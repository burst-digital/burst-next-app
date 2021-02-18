import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';
import { isServer } from './is-environment';

let apolloClient: ApolloClient<unknown> | undefined;

function createApolloClient(url: URL) {
  const server = isServer();

  return new ApolloClient({
    ssrMode: isServer(),
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: url.href,
      useGETForQueries: !server,
    }),
  });
}

export function initializeApollo(url: URL, initialState: any = null) {
  // eslint-disable-next-line
  const _apolloClient = apolloClient ?? createApolloClient(url);

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({
      ...(existingCache as any),
      ...initialState,
    } as InMemoryCache & NormalizedCacheObject);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }
  return _apolloClient;
}

/**
 * React hook that initializes Apollo when a href can be created.
 *
 * @param props an object containing a page href and initial apollo state.
 */
export function useApollo<P extends { url: URL; initialApolloState: any }>(
  props: P,
) {
  const client = useMemo(
    () => initializeApollo(props.url, props.initialApolloState),
    [props.initialApolloState, props.url],
  );
  return client;
}
