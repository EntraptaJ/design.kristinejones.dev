// UI/ui/Components/Forms/Button/LabelButton/index.tsx
import React, { FunctionComponent } from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { useStyles } from 'ui/lib/Styles';

export interface BaseButtonProps extends ButtonProps {
  label: string;
}

export type BaseButtonType = FunctionComponent<BaseButtonProps>;

export const BaseButton: BaseButtonType = ({ label, children, ...props }) => {
  const classes = useStyles()
  return (
    <Button className={classes.button} {...props} style={{ ...props.style, marginTop: '1em'  }}>
      {children}
      {label}
      
    </Button>
  );
};
