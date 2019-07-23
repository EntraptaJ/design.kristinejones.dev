// UI/ui/lib/initApollo.tsx
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { NormalizedCacheObject, InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from '../fragmentTypes.json';

interface InitClientParams {
  baseUrl: string;
  initialState?: NormalizedCacheObject;
  token?: string;
}

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

export const initApollo = ({ baseUrl, initialState, token }: InitClientParams) =>
  new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: createHttpLink({
      uri: `${baseUrl}/graphql`,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
    cache: new InMemoryCache({ fragmentMatcher }).restore(initialState || {}),
  });
