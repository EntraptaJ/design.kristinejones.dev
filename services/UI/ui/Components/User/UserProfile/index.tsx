// UI/ui/Components/User/UserProfile/index.tsx
import React, { FunctionComponent } from 'react'
import { useUser } from '../useUser';
import { Box } from 'ui/Components/Styles/Box';

interface UserProfileProps {
  id: string
}

type UserProfileType = FunctionComponent<UserProfileProps>

export const UserProfile: UserProfileType = ({ id }) => {
  const user = useUser(id)
  if (user.error) return <div>TODO Error Page</div>
  return (
    <Box title={user.loading ? 'Loading' : user.User.username}>

    </Box>
  )
}