// UI/ui/routes/TestForm/index.tsx
import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTitle } from 'ui/Components/HeadProvider';
import { BoxStyle, FieldStyle } from 'ui/lib/Styles';
import Button from '@material-ui/core/Button';
import useForm from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

type TestFormRouteType = FunctionComponent<RouteComponentProps>;

interface FormData {
  username: string;
  password: string;
}

const TestFormRoute: TestFormRouteType = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  useTitle('Example Login Form Page');

  const onSubmit = (data: FormData) => {
    console.log(`Username: ${data.username}\nPassword: ${data.password}`);
  };

  return (
    <form style={BoxStyle} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" gutterBottom>Example Form</Typography>

      <TextField style={FieldStyle} variant='outlined' label='Username' name='username' autoComplete='username' inputRef={register} />

      <TextField
        style={FieldStyle}
        label='Password'
        type='password'
        name='password'
        autoComplete='current-password'
        inputRef={register}
        variant='outlined'
      />

      <Button variant='contained' style={FieldStyle} type='submit'>Submit</Button>
    </form>
  );
};

export default TestFormRoute;
