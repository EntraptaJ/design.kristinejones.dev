// UI/ui/routes/Users/Secret.tsx
import React, { FunctionComponent, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import GET_SECRET_GQL from './getSecret.graphql';
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/react-hooks';
import { PasswordEntry } from 'ui/Components/User/Secret/PasswordEntry';
import { Box } from 'ui/Components/Styles/Box';

const UserSecret: FunctionComponent<RouteComponentProps> = () => {
  const { refetch, data } = useQuery<{ getSecret: string }, { password: string }>(GET_SECRET_GQL);

  const onPassword = async (password: string) => refetch({ password });

  return (
    <Box title='User Secret'>
      {!data || !data.getSecret ? <PasswordEntry onPassword={onPassword} /> : <Typography variant='body1'>{data.getSecret}</Typography>}
    </Box>
  );
};

export default UserSecret;