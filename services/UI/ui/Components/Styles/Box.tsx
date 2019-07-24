// UI/ui/Components/Styles/Box.tsx
// KristianFJones
import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from 'ui/lib/Styles';
import Paper, { PaperProps } from '@material-ui/core/Paper';

interface BoxProps extends PaperProps {
  title: string;
  preTitle?: React.ReactNode;
}

type BoxType = FunctionComponent<BoxProps>;

export const Box: BoxType = ({ children, title, preTitle, ...props }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.box} elevation={7} {...props}>
      {preTitle}
      <Typography variant='h4'>{title}</Typography>
      {children}
    </Paper>
  );
};
