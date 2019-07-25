// UI/ui/Components/Layout/Nav/index.tsx
import { UniversalPortal } from '@jesstelford/react-portal-universal';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@reach/router';
import React, { FunctionComponent, useState, Fragment } from 'react';
import { AppRoutes, LoadableType, NavItem } from 'ui/Components/AppRoutes';
import { useStyles } from 'ui/lib/Styles';
import { useNav } from './useNav';
import { useSession } from 'ui/Components/SessionProvider';
import { useTheme } from '@material-ui/styles';
import { useLocation } from 'ui/Components/Layout/useLocation';
import { ParentListItem } from '../Lists/ListItems/ParentListItem';
import { LinkListItem } from '../Lists/ListItems/LinkListItem';

interface NavMenuItemProps {
  to: string;
  label: string;
  Loadable: LoadableType;
  alignItems?: 'flex-start' | 'center';
  autoFocus?: boolean;
  ContainerComponent?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  ContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  focusVisibleClassName?: string;
  selected?: boolean;
}

const useListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  })
);

type NavMenuItemType = FunctionComponent<NavMenuItemProps>;

export type NavType = FunctionComponent;


const NavMenuItem: NavMenuItemType = ({ label, to, Loadable, ...props }) => {
  return (
    <ListItem button component={Link} {...{ to }} {...props}>
      <ListItemText primary={label} />
    </ListItem>
  );
};

const startOpen = (route: NavItem, path: string): boolean =>
  route.to === path ? true : route.children ? route.children.some(child => startOpen(child, path)) : false;

const Nav: NavType = props => {
  const Location = useLocation();
  const { isAuthed } = useSession();
  const { navOpen, toggleNav, closeNav } = useNav();
  const isMobileState = typeof window === 'undefined' ? true : window.matchMedia('(max-width: 640px)').matches;
  const theme = useTheme<Theme>();
  const classes = useStyles();

  const modal = (
    <UniversalPortal selector='#navActions'>
      <IconButton edge='start' id='navActions' onClick={toggleNav}>
        <MenuIcon />
      </IconButton>
    </UniversalPortal>
  );

  const handleNavItems = (routes: NavItem[]): JSX.Element[] =>
    routes.map(({ authMode, ...route }) =>
      route.hidden ? (
        <Fragment key={route.to}></Fragment>
      ) : route.children ? (
        typeof authMode === 'undefined' || authMode === isAuthed ? (
          <ParentListItem startOpen={startOpen(route, Location.pathname)} label={route.label} key={route.to}>
            <LinkListItem key={route.to} selected={route.to === Location.pathname} to={route.to} label={route.label} />
            {handleNavItems(route.children)}
          </ParentListItem>
        ) : (
          <Fragment key={route.to}></Fragment>
        )
      ) : typeof authMode === 'undefined' || authMode === isAuthed ? (
        <LinkListItem key={route.to} selected={route.to === Location.pathname} {...route} />
      ) : (
        <Fragment key={route.path}></Fragment>
      )
    );

  return (
    <>
      {modal}
      <Drawer
        className={classes.drawer}
        variant={isMobileState ? 'temporary' : 'persistent'}
        onClose={closeNav}
        open={navOpen}
        onOpen={() => toggleNav()}
        classes={{
          paper: classes.drawerPaper
        }}
        id={!isMobileState ? (!navOpen ? 'full-closed' : 'full-open') : undefined}
        style={{ zIndex: theme.zIndex.modal + 1 }}
      >
        <div className={classes.toolbar} />
        {handleNavItems(AppRoutes)}
      </Drawer>
    </>
  );
};

export default Nav;
