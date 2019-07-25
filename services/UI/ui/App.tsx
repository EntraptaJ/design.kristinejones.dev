// UI/ui/App.tsx
import React, { FunctionComponent, useMemo } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Routes } from 'ui/routes';
import Loadable from 'react-loadable';
import { Loading } from './Components/LoadingComponent';
import { NavContext, useNavContext } from 'ui/Components/Layout/Nav/useNav';
import { SessionProvider, useSession } from 'ui/Components/SessionProvider';
import { useLocation } from 'ui/Components/Layout/useLocation';
import { AppRoutes, NavItem } from './Components/AppRoutes';
import { Redirect } from '@reach/router';

type AppType = FunctionComponent;

const AppBar = Loadable({
  loader: () => import('ui/Components/Layout/AppBar'),
  modules: ['Components/Layout/AppBar/index.tsx'],
  loading: Loading
});

const Nav = Loadable({
  loader: () => import('ui/Components/Layout/Nav'),
  modules: ['Components/Layout/Nav/index.tsx'],
  loading: Loading
});

const findRoute = (routes: NavItem[], path: string): NavItem | undefined => {
  for (const route of routes) {
    if (route.to === path) return route;
    else if (route.children) return findRoute(route.children, path);
  }
};

const MainBody: FunctionComponent = () => {
  const Location = useLocation();
  const { isAuthed } = useSession();
  const route = useMemo(() => findRoute(AppRoutes, Location.pathname), [Location.pathname]);
  const navContext = useNavContext(false);
  const isAuthorized = !route || typeof route.authMode === 'undefined' || route.authMode === isAuthed;

  return (
    <NavContext.Provider value={navContext}>
      <div className='main-content' style={{ display: 'flex', flex: '1 1', position: 'relative' }}>
        <Nav />
        {isAuthorized ? <Routes /> : <Redirect to={!isAuthed ? '/Login' : '/'} />}
      </div>
    </NavContext.Provider>
  );
};

const App: AppType = () => {
  return (
    <>
      <CssBaseline />
      <AppBar appName={`Kristian's Design`} />
      <MainBody />
    </>
  );
};

export default App;
