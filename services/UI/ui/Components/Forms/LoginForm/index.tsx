// UI/ui/Components/Forms/LoginForm/index.tsx
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLogin } from 'ui/Components/SessionProvider';
import { Form } from 'ui/Components/Styles/Form';

type LoginFormType = FunctionComponent;

interface FormData {
  username: string;
  password: string;
}

const AuthError = `GraphQL error: Access denied! You don't have permission for this action!`;


type Invalid = { Field: string; Text: string } | { Field: ''; Text: undefined };

export const LoginForm: LoginFormType = () => {
  const [loginUser, { error }] = useLogin();
  const [invalid, setInvalid] = useState<Invalid>({ Field: '', Text: undefined });

  const onSubmit = async (data: FormData) => {
    const response = await loginUser(data);
    if (response) window.location.href = '/';
  };

  useEffect(() => {
    if (typeof error !== 'undefined') {
      if (error.message === AuthError) setInvalid({ Field: 'password', Text: 'Password is Invalid' });
      else if (error.graphQLErrors[0].extensions && error.graphQLErrors[0].extensions.code === 'INVALID_USER')
        setInvalid({ Field: 'username', Text: 'Username is invalid' });
    }
  }, [error]);

  return (
    <Form<FormData>
      title='Login'
      invalid={invalid}
      onSubmit={onSubmit}
      Fields={[
        { label: 'Username', name: 'username', type: 'Text', inputType: 'text' },
        { label: 'Password', name: 'password', type: 'Text', inputType: 'password' }
      ]}
    />
  );
};
