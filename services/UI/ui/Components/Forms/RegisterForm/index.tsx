// UI/ui/Components/Forms/RegisterForm/index.tsx
import React, { FunctionComponent } from 'react';
import useForm from 'react-hook-form';
import { FieldStyle, BoxStyle } from 'ui/lib/Styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import REGISTERGQL from './registerUser.graphql';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { navigate } from '@reach/router';
import { Form } from 'ui/Components/Styles/Form';

type RegisterFormType = FunctionComponent;

interface FormData {
  username: string;
  password: string;
}

interface RegisterUserResponse {
  username: string;
}

export const RegisterForm: RegisterFormType = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [loginUser] = useMutation<{ registerUser: RegisterUserResponse }, FormData>(REGISTERGQL);
  const { cache } = useApolloClient();

  const onSubmit = async (data: FormData) => {
    const response = await loginUser({ variables: data });
    if (response && response.data && response.data.registerUser.username) {
      await cache.reset();
      await navigate('/Login');
    }
  };

  return (
    <Form title='Register' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        style={FieldStyle}
        variant='outlined'
        label='Username'
        name='username'
        autoComplete='username'
        inputRef={register}
      />

      <TextField
        style={FieldStyle}
        label='Password'
        type='password'
        name='password'
        autoComplete='current-password'
        inputRef={register}
        variant='outlined'
      />

      <Button color='primary' variant='contained' style={FieldStyle} type='submit'>
        Register
      </Button>
    </Form>
  );
};
