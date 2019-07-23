// UI/ui/Components/User/SearchPage.tsx
import React, { FunctionComponent, useState } from 'react';
import { useUsers } from './useUser';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import { Box } from 'ui/Components/Styles/Box';
import { FieldStyle } from 'ui/lib/Styles';

interface SearchPageProps {}

type SearchPageType = FunctionComponent<SearchPageProps>;

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
      {!Users.loading ? (
        !Users.error ? (
          <List>{Users.Users.map(({ username, _id }) => <ListItem button style={{ width: '100%' }}>{username}</ListItem>)}</List>
        ) : (
          <></>
        )
      ) : (
        <div>Create Error Screen</div>
      )}
    </Box>
  );
};
