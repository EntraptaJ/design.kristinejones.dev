// UI/ui/Components/Styles/Box.tsx
// KristianFJones
import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles, BoxStyle } from 'ui/lib/Styles'
import Paper from '@material-ui/core/Paper';

interface BoxProps {
  title: string;
}

type BoxType = FunctionComponent<BoxProps>;

export const Box: BoxType = ({ children, title }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.box} elevation={7} style={BoxStyle} >
      <Typography variant='h4'>{title}</Typography>
      {children}
    </Paper>
  );
};
