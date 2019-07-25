// UI/ui/Components/AppRoutes.tsx
import { RouteComponentProps } from '@reach/router';
import { ComponentClass, FunctionComponent } from 'react';
import Load, { LoadableComponent, OptionsWithoutRender } from 'react-loadable';
import { Loading } from 'ui/Components/LoadingComponent';

export const MyLoadable = (opts: Omit<OptionsWithoutRender<unknown>, 'loading' | 'delay' | 'timeout'>) =>
  Load(
    Object.assign(
      {
        loading: Loading
      },
      opts
    )
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
      modules: ['routes/Home/index.tsx']
    })
  },
  {
    path: '/Login',
    to: '/Login',
    label: 'Login',
    authMode: false,
    Loadable: MyLoadable({
      loader: () => import('ui/routes/Authentication/Login'),
      modules: ['routes/Authentication/Login.tsx']
    })
  },
  {
    path: '/Register',
    to: '/Register',
    label: 'Register',
    authMode: false,
    Loadable: MyLoadable({
      loader: () => import('ui/routes/Authentication/Register'),
      modules: ['routes/Authentication/Register.tsx']
    })
  },
  {
    path: '/Users',
    to: '/Users',
    label: 'Users',
    Loadable: MyLoadable({
      loader: () => import('ui/routes/Users'),
      modules: ['routes/Users/index.tsx']
    }),
    children: [
      {
        path: '/:id',
        to: '/Users/',
        label: 'User Profile',
        authMode: true,
        hidden: true,
        Loadable: MyLoadable({
          loader: () => import('ui/routes/Users/User'),
          modules: ['routes/Users/User.tsx']
        })
      },
      {
        path: '/Secret',
        to: '/Users/Secret',
        label: 'User Secret',
        authMode: true,
        Loadable: MyLoadable({
          loader: () => import('ui/routes/Users/Secret'),
          modules: ['routes/Users/Secret.tsx']
        })
      }
    ]
  },
  {
    path: '/Designs',
    to: '/Designs/',
    label: 'Design Examples',
    Loadable: MyLoadable({
      loader: () => import('ui/routes/DesignExamples'),
      modules: ['routes/DesignExamples/index.tsx']
    }),
    children: [
      {
        path: '/Inputs',
        to: '/Designs/Inputs/',
        label: 'Inputs',
        Loadable: MyLoadable({
          loader: () => import('ui/routes/DesignExamples'),
          modules: ['routes/DesignExamples/index.tsx']
        }),
        children: [
          {
            path: '/Buttons',
            to: '/Designs/Inputs/Buttons',
            label: 'Buttons',
            Loadable: MyLoadable({
              loader: () => import('ui/routes/DesignExamples/Buttons'),
              modules: ['routes/DesignExamples/Buttons.tsx']
            })
          },
          {
            path: '/Select',
            to: '/Designs/Inputs/Select',
            label: 'Selects',
            Loadable: MyLoadable({
              loader: () => import('ui/routes/DesignExamples/Select'),
              modules: ['routes/DesignExamples/Select.tsx']
            })
          }
        ]
      },

      {
        path: '/Breadcrumb',
        to: '/Designs/Breadcrumb',
        label: 'Breadcrumb',
        Loadable: MyLoadable({
          loader: () => import('ui/routes/DesignExamples/Breadcrumbs'),
          modules: ['routes/DesignExamples/Breadcrumbs.tsx']
        })
      },
      {
        path: '/Dialogs',
        to: '/Designs/Dialogs',
        label: 'Dialogs',
        Loadable: MyLoadable({
          loader: () => import('ui/routes/DesignExamples/Dialogs'),
          modules: ['routes/DesignExamples/Dialogs.tsx']
        })
      },
      {
        path: '/Forms',
        to: '/Designs/Forms',
        label: 'Forms',
        Loadable: MyLoadable({
          loader: () => import('ui/routes/DesignExamples/Form'),
          modules: ['routes/DesignExamples/Form.tsx']
        })
      },
      {
        path: '/Lists',
        to: '/Designs/Lists',
        label: 'Lists',
        Loadable: MyLoadable({
          loader: () => import('ui/routes/DesignExamples/Lists'),
          modules: ['routes/DesignExamples/Lists.tsx']
        })
      }
    ]
  }
];
