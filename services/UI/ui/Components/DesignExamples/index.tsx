// UI/ui/Components/DesignExamples/index.tsx
import React, { FunctionComponent } from 'react';
import { Box } from 'ui/Components/Styles/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { AppRoutes, NavItem } from '../AppRoutes';
import { Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import { ParentListItem } from '../Layout/Lists/ListItems/ParentListItem';
import { LinkListItem } from '../Layout/Lists/ListItems/LinkListItem';

type DesignExample = FunctionComponent;

const handleNavItems = (routes: NavItem[]): JSX.Element[] =>
  routes.map(({ authMode, ...route }) =>
    route.children ? (
      <ParentListItem label={route.label} key={route.to}>
        <LinkListItem key={route.to} to={route.to} label={route.label} />
        {handleNavItems(route.children)}
      </ParentListItem>
    ) : (
      <LinkListItem key={route.to} {...route} />
    )
  );

export const DesignExample = () => {
  const DesignRoute = AppRoutes.find(({ path }) => path === '/Designs');
  return (
    <Box title='Design Examples'>
      {DesignRoute ? (
        <>
          <Typography variant='body1'>Check out these examples</Typography>

          <List>{DesignRoute.children ? handleNavItems(DesignRoute.children) : <ListItem>Error has Occurred</ListItem>}</List>
        </>
      ) : (
        <>
          <div>TODO: Create Error Design</div>
        </>
      )}
    </Box>
  );
};
