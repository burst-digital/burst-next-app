// @ts-ignore
import { getSdk } from '@generated/graphql-request';
import { GraphQLClient } from 'graphql-request';

export function createGraphqlRequestSdk(url: URL) {
  const client = new GraphQLClient(url.href);

  return getSdk(client);
}
