// UI/ui/Components/DesignExamples/index.tsx
import React, { FunctionComponent } from 'react';
import { Box } from 'ui/Components/Styles/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { AppRoutes } from '../AppRoutes';
import { Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';

type DesignExample = FunctionComponent;

export const DesignExample = () => {
  const DesignRoute = AppRoutes.find(({ path }) => path === '/Designs');
  return (
    <Box title='Design Examples'>
      {DesignRoute ? (
        <>
          <Typography variant='body1'>Check out these examples</Typography>

          <List>
            {DesignRoute.children ? (
              DesignRoute.children.map(({ label, to }) => (
                <ListItem key={to} button component={Link} {...({ to: to } as any)}>
                  <Typography variant='body1'>{label}</Typography>
                </ListItem>
              ))
            ) : (
              <ListItem>Error has Occurred</ListItem>
            )}
          </List>
        </>
      ) : (
        <>
          <div>TODO: Create Error Design</div>
        </>
      )}
    </Box>
  );
};
