// UI/ui/App.tsx
import React, { FunctionComponent } from 'react';
import { Routes } from 'ui/routes';
import Loadable from 'react-loadable';
import { Loading } from './Components/LoadingComponent';
import { NavContext, useNavContext } from 'ui/Components/Layout/Nav/useNav';
import { SessionProvider } from 'ui/Components/SessionProvider';

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

const App: AppType = () => {
  const navContext = useNavContext(false);

  return (
    <SessionProvider>
      <AppBar appName='Project Management' />
      <NavContext.Provider value={navContext}>
        <div className='main-content' style={{ display: 'flex', flex: '1 1', position: 'relative' }}>
          <Nav />
          <Routes />
        </div>
      </NavContext.Provider>
    </SessionProvider>
  );
};

export default App;
