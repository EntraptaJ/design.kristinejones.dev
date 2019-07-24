// UI/ui/Components/Styles/Form.tsx
import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from 'ui/lib/Styles';
import Paper, { PaperProps } from '@material-ui/core/Paper';

interface FormProps extends PaperProps {
  title: string;
}

type FormType = FunctionComponent<FormProps>;

export const Form: FormType = ({ title, children, ...props }) => {
  const classes = useStyles();
  return (
    <Paper component='form' className={classes.box} elevation={7} {...props}>
      <Typography variant='h4'>{title}</Typography>
      {children}
    </Paper>
  );
};
