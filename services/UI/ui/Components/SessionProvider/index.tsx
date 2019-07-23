// UI/ui/Components/SessionProvider/index.tsx
import React, { createContext, ReactNode, useContext, FunctionComponent } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import ISAUTHEDGQL from 'ui/lib/GraphQL/isAuthed.graphql';
import LOGINGQL from 'ui/lib/GraphQL/loginUser.graphql';
import { useCookies } from 'react-cookie';
import { navigate } from '@reach/router';
import { MutationResult } from '@apollo/react-common';

export interface Session {
  isAuthed: boolean;
  recheck: () => Promise<any>;
}

const SessionContext = createContext<Session>({
  isAuthed: false,
  recheck: async () => {}
});

interface SessionProviderProps {}

type useIsAuthedType = () => { isAuthed: boolean; recheck: () => Promise<any> };

export const useIsAuthed: useIsAuthedType = () => {
  const { data, loading, refetch } = useQuery<{ isAuthed: boolean }>(ISAUTHEDGQL);
  const client = useApolloClient();
  const isAuthed = !loading && data ? data.isAuthed : false;
  const recheck = async () => {
    await client.cache.reset();
    await refetch();
  };
  return { isAuthed, recheck };
};

export const SessionProvider: FunctionComponent<SessionProviderProps> = ({ children }) => {
  const { isAuthed, recheck } = useIsAuthed();
  const sessionValue: Session = { isAuthed, recheck };
  return <SessionContext.Provider value={sessionValue}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  return useContext(SessionContext);
};

interface User {
  username: string;
  password: string;
}

interface LoginUserResponse {
  success: boolean;
  token: string;
}

type LoginType = (user: User) => Promise<boolean>;

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

type setToken = (token?: string) => void;
type deleteToken = () => void;

export const useToken = (): [string, setToken, deleteToken] => {
  const [token, setCookieToken, deleteCookieToken] = useCookies();
  const setToken = (token?: string) => setCookieToken('token', token, { path: '/' });
  const deleteToken = () => deleteCookieToken('token');
  return [token['token'], setToken, deleteToken];
};

export const useLogin = (): [LoginType, MutationResult] => {
  const [, setToken] = useToken();
  const [loginUser, { data, ...extra }] = useMutation<{ loginUser: LoginUserResponse }, User>(LOGINGQL);
  const LoginFN: LoginType = async ({ username, password }) => {
    const response = await loginUser({ variables: { username, password } });
    if (response && response.data && response.data.loginUser.success) {
      setToken(response.data.loginUser.token);
      return true;
    } else return false;
  };
  return [LoginFN, { ...extra }];
};

export const useLogout = () => {
  const [, , deleteToken] = useToken();
  const LogoutFN = async () => {
    await deleteToken();
    window.location.href = '/';
  };
  return [LogoutFN];
};
