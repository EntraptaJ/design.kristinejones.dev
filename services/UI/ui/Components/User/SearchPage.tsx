// UI/ui/Components/User/SearchPage.tsx
import React, { FunctionComponent, useState } from 'react';
import { useUsers, User, useUserAvatar } from './useUser';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import { Box } from 'ui/Components/Styles/Box';
import { FieldStyle } from 'ui/lib/Styles';
import { AvatarListItem } from '../Layout/Lists/ListItems/AvatarListItem';

interface SearchPageProps {}

type SearchPageType = FunctionComponent<SearchPageProps>;

const UserListItem: FunctionComponent<User> = ({ email, username, _id }) => {
  const avatarSRC = useUserAvatar(email);

  return <AvatarListItem link to={`/Users/${_id}`} src={avatarSRC} label={username} />;
};

export const UserSearchPage: SearchPageType = () => {
  const [filter, setFilter] = useState<string>();
  const Users = useUsers(filter);
  return (
    <Box title='Users'>
      <TextField
        style={FieldStyle}
        variant='outlined'
        label='Username'
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
      {Users.Users ? (
        <List>
          {Users.Users.map(user => (
            <UserListItem key={user._id} {...user} />
          ))}
        </List>
      ) : Users.error ? (
        <div>TODO: ERROR</div>
      ) : Users.loading ? (
        <></>
      ) : (
        <div>TODO: ERROR</div>
      )}
    </Box>
  );
};
