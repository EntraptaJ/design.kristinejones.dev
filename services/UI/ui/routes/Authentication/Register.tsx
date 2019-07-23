// UI/ui/routes/Authentication/Register.tsx
import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTitle } from 'ui/Components/HeadProvider';
import { RegisterForm } from 'ui/Components/Forms/RegisterForm';

type RegisterRoute = FunctionComponent<RouteComponentProps>;

const RegisterRoute: RegisterRoute = () => {
  useTitle('Project Manager Register');
  return <RegisterForm />;
};

export default RegisterRoute;
