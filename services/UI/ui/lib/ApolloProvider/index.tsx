// UI/ui/lib/ApolloProvider/index.tsx
import React, { FunctionComponent } from 'react';
import { ApolloProvider as HookApolloProvider } from '@apollo/react-hooks';
import { useToken } from 'ui/Components/SessionProvider';
import { initApollo } from '../initApollo';
import { useConfig } from 'ui/Components/ConfigProvider';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

interface ApolloProviderProps {
  state?: NormalizedCacheObject;
  client?: ApolloClient<NormalizedCacheObject>
}

type ApolloProviderType = FunctionComponent<ApolloProviderProps>;

export const ApolloProvider: ApolloProviderType = ({ children, client, state }) => {
  const [token] = useToken();
  const { baseUrl } = useConfig();
  if (!client) client = initApollo({ baseUrl, token, initialState: state });

  return <HookApolloProvider client={client}>{children}</HookApolloProvider>;
};