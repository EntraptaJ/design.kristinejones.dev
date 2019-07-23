// UI/ui/Components/User/useUser/index.tsx
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'
import USERS_GQL from 'ui/lib/GraphQL/Users.graphql'

interface User {
  username: string
  _id: string
}

interface LoadingResponse {
  loading: true;
  error: false;
  Users: undefined;
}

interface ValidResponse {
  loading: false;
  error: false;
  Users: User[]
}

interface InvalidResponse {
  loading: false
  error: true
  Users: undefined
}

type UseUsers = (search?: string) => ValidResponse | LoadingResponse | InvalidResponse

type Query = { users: User[] }

type Variables = { search?: string }

export const useUsers: UseUsers = (search) => {
  const opts: QueryHookOptions<Query, Variables> = { variables: { search }   }
  const { data, loading } = useQuery<Query, Variables>(USERS_GQL, opts);
  if (!data && loading) return { loading: true, error: false, Users: undefined }
  else if (data && !loading) return { loading: false, error: false, Users: data.users }
  return { loading: false, error: true, Users: undefined }
}