// UI/ui/routes/Authentication/Login.tsx
import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { LoginForm } from 'ui/Components/Forms/LoginForm';
import { useTitle } from 'ui/Components/HeadProvider';

type LoginRoute = FunctionComponent<RouteComponentProps>;

const LoginRoute: LoginRoute = () => {
  useTitle('Login');
  return <LoginForm />;
};

export default LoginRoute;
