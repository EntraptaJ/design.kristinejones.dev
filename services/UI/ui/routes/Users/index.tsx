// UI/ui/routes/Users/index.tsx
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router';
import { UserSearchPage } from 'ui/Components/User/SearchPage';

const UsersRoute: FunctionComponent<RouteComponentProps> = () => {
  return <UserSearchPage />
}

export default UsersRoute;
