// UI/ui/Components/User/UserProfile/index.tsx
import React, { FunctionComponent } from 'react';
import { useUser, useUserAvatar } from '../useUser';
import { Box } from 'ui/Components/Styles/Box';
import Avatar from '@material-ui/core/Avatar';
import { Loading } from 'ui/Components/LoadingComponent';

interface UserProfileProps {
  id: string;
}

type UserProfileType = FunctionComponent<UserProfileProps>;

export const UserProfile: UserProfileType = ({ id }) => {
  const user = useUser(id);
  if (user.loading) return <Loading />;
  if (user.error) return <div>TODO Error Page</div>;

  console.log(user);
  const avatarURL = useUserAvatar(user.User ? user.User.email : '');
  return (
    <Box
      title={user.loading ? 'Loading' : user && user.User ? user.User.fullName : 'Error'}
      preTitle={<Avatar src={avatarURL} style={{ margin: 10, width: 60, height: 60 }} />}
    ></Box>
  );
};
