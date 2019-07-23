// UI/ui/Components/AppRoutes.tsx
import { RouteComponentProps } from '@reach/router';
import { ComponentClass, FunctionComponent } from 'react';
import Load, { LoadableComponent, OptionsWithoutRender } from 'react-loadable';
import { Loading } from 'ui/Components/LoadingComponent';

export const MyLoadable = (opts: Omit<OptionsWithoutRender<unknown>, 'loading' | 'delay' | 'timeout'>) =>
  Load(
    Object.assign(
      {
        loading: Loading,
        delay: 200,
        timeout: 10000,
      },
      opts,
    ),
  );

export type LoadableType =
  | ComponentClass<RouteComponentProps> & LoadableComponent
  | FunctionComponent<RouteComponentProps> & LoadableComponent;

export interface NavItem {
  /**
   * Label to use in the UI
   */
  label: string;

  /**
   * Path for the router to use
   */
  path: string;

  /**
   * Auth Mode. False to show only when user is logged out, 
   * True shows only when logged in.
   * Undefined shows for any state.
   */
  authMode?: boolean;

  /**
   * Path for Links and Navigates to use
   */
  to: string;

  /**
   * Wether or not to hide the route from the UI
   * @default false
   */
  hidden?: boolean;

  /**
   * Wether or not to hide main UI elements when route is active
   * @default false
   */
  hideUI?: boolean;

  /**
   * Loadable Component for the Route
   */
  Loadable: LoadableType;

  /**
   * Sub routes
   */
  children?: NavItem[];
}

export const AppRoutes: NavItem[] = [
  {
    path: '/',
    to: '/',
    label: 'Home',
    Loadable: MyLoadable({
      loader: () => import('ui/routes/Home'),
      modules: ['routes/Home/index.tsx'],
    }),
  },
  {
    path: '/Login',
    to: '/Login',
    label: 'Login',
    authMode: false,
    Loadable: MyLoadable({
      loader: () => import('ui/routes/Authentication/Login'),
      modules: ['routes/Authentication/Login.tsx'],
    }),
  },
  {
    path: '/Register',
    to: '/Register',
    label: 'Register',
    authMode: false,
    Loadable: MyLoadable({
      loader: () => import('ui/routes/Authentication/Register'),
      modules: ['routes/Authentication/Register.tsx'],
    }),
  },
  {
    path: '/Users',
    to: '/Users',
    label: 'Users',
    Loadable: MyLoadable({
      loader: () => import('ui/routes/Users'),
      modules: ['routes/Users/index.tsx'],
    })
  },
  {
    path: '/Buttons',
    to: '/Buttons',
    label: 'Buttons',
    Loadable: MyLoadable({
      loader: () => import('ui/Components/DesignExamples/Buttons'),
      modules: ['Components/DesignExamples/Buttons/index.tsx'],
    }),
  },
];
