// UI/ui/routes/Users/User.tsx
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'
import { UserProfile } from 'ui/Components/User/UserProfile';

type UserRouteType = FunctionComponent<RouteComponentProps<{ id: string }>>

const UserRoute: UserRouteType = ({ id }) => {
  if (!id) return <div>TODO ERROR</div>
  return <UserProfile id={id} />
}

export default UserRoute;