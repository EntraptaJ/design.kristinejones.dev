// UI/ui/Components/Forms/LoginForm/index.tsx
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { FunctionComponent, useEffect, useState } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import useForm from 'react-hook-form';
import { BoxStyle, FieldStyle } from 'ui/lib/Styles';
import { useLogin } from 'ui/Components/SessionProvider';

type LoginFormType = FunctionComponent;

interface FormData {
  username: string;
  password: string;
}

const AuthError = `GraphQL error: Access denied! You don't have permission for this action!`;

type Fields = 'Username' | 'Password'

type Invalid = { field: Fields; message: string } | { field: undefined; message: undefined }

export const LoginForm: LoginFormType = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [loginUser, { error }] = useLogin();
  const [invalid, setInvalid] = useState<Invalid>({ field: undefined, message: undefined });

  const onSubmit = async (data: FormData) => {
    const response = await loginUser(data);
    if (response) window.location.href = '/';
  };

  const isInvalid = (field: Fields) => invalid.field === field;

  useEffect(
    () => {
      if (typeof error !== 'undefined') {
        if (error.message === AuthError) setInvalid({ field: 'Password', message: 'Password is Invalid' });
        else if (error.graphQLErrors[0].extensions && error.graphQLErrors[0].extensions.code === 'INVALID_USER')
          setInvalid({ field: 'Username', message: 'Username is invalid' });
      }
    },
    [error],
  );

  return (
    <form style={BoxStyle} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h4' gutterBottom>
        Login
      </Typography>

      {invalid.field && (
          <FormHelperText error style={{ color: '#b00020' }}>
            {invalid.message}
          </FormHelperText>
        )}

      <TextField
        style={FieldStyle}
        error={isInvalid('Username')}
        variant='outlined'
        label='Username'
        name='username'
        autoComplete='username'
        inputRef={register}
      />

      <TextField
        style={FieldStyle}
        error={isInvalid('Password')}
        label='Password'
        type='password'
        name='password'
        autoComplete='current-password'
        inputRef={register}
        variant='outlined'
      />

      <Button color='primary' variant='contained' style={FieldStyle} type='submit'>
        Login
      </Button>
    </form>
  );
};
