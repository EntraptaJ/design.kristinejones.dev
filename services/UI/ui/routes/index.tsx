// UI/ui/routes/index.tsx
import { Router } from '@reach/router';
import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';
import { AppRoutes, NavItem } from 'ui/Components/AppRoutes';
import { useStyles } from 'ui/lib/Styles';
import { useNav } from 'ui/Components/Layout/Nav/useNav';

const HandleRoutes = (routes: NavItem[], parent: string = '/'): ReactNode[] => {
  let Routes: ReactNode[] = [];
  for (const Route of routes) {
    if (Route.children)
      Routes = [
        ...Routes,
        <Route.Loadable key={Route.path} path={`${parent}${Route.path}`} />,
        HandleRoutes(Route.children, `${parent}${Route.path}`)
      ];
    else Routes = [...Routes, <Route.Loadable key={Route.path} path={`${parent}${Route.path}`} />];
  }
  return Routes;
};

type RoutesType = FunctionComponent;

export const Routes: RoutesType = () => {
  const classes = useStyles();
  const isMobileState = typeof window === 'undefined' ? true : window.matchMedia('(max-width: 640px)').matches;
  const { navOpen } = useNav();

  return (
    <Router
      className={clsx(classes.content, {
        [classes.contentDesktop]: !navOpen && !isMobileState,
        [classes.contentShiftDesktop]: navOpen && !isMobileState
      })}
      id='app_content'
    >
      {HandleRoutes(AppRoutes)}
    </Router>
  );
};
