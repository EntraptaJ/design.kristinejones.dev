// UI/ui/Components/Forms/RegisterForm/index.tsx
import React, { FunctionComponent } from 'react';
import useForm from 'react-hook-form';
import { FieldStyle, BoxStyle } from 'ui/lib/Styles';
import Button from '@material-ui/core/Button';
import REGISTER_GQL from './registerUser.graphql';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { navigate } from '@reach/router';
import { Form } from 'ui/Components/Styles/Form';

type RegisterFormType = FunctionComponent;

interface FormData {
  fullName: string;
  username: string;
  password: string;
  email: string;
  secret: string;
}

interface RegisterUserResponse {
  username: string;
}

export const RegisterForm: RegisterFormType = () => {
  const [loginUser] = useMutation<{ registerUser: RegisterUserResponse }, { user: FormData }>(REGISTER_GQL);
  const { cache } = useApolloClient();

  const onSubmit = async (data: FormData) => {
    const response = await loginUser({ variables: { user: { ...data } } });
    if (response && response.data && response.data.registerUser.username) {
      await cache.reset();
      await navigate('/Login');
    }
  };

  return (
    <Form<FormData>
      title='Register'
      onSubmit={onSubmit}
      Fields={[
        { label: 'Full Name', name: 'fullName', type: 'Text', autoComplete: 'name', inputType: 'text' },
        { label: 'Username', name: 'username', type: 'Text', inputType: 'text' },
        { label: 'Secret', name: 'secret', type: 'Text', inputType: 'text' },
        { label: 'Email', name: 'email', type: 'Text', autoComplete: 'email', inputType: 'email' },
        { label: 'Password', name: 'password', type: 'Text', autoComplete: 'new-password', inputType: 'password' }
      ]}
    />
  );
};
