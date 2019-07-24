// UI/ui/Components/User/UserProfile/index.tsx
import React, { FunctionComponent } from 'react';
import { useUser, useUserAvatar } from '../useUser';
import { Box } from 'ui/Components/Styles/Box';
import Avatar from '@material-ui/core/Avatar';

interface UserProfileProps {
  id: string;
}

type UserProfileType = FunctionComponent<UserProfileProps>;

export const UserProfile: UserProfileType = ({ id }) => {
  const user = useUser(id);
  if (user.error) return <div>TODO Error Page</div>;
  const avatarURL = useUserAvatar(user.loading ? '' : user.User.email);
  return (
    <Box title={user.loading ? 'Loading' : user.User.fullName} preTitle={<Avatar src={avatarURL} style={{     margin: 10,
      width: 60,
      height: 60, }} />}>
      
    </Box>
  );
};
