// UI/ui/Components/Forms/Button/LabelButton/index.tsx
import React, { FunctionComponent, CSSProperties } from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { useStyles } from 'ui/lib/Styles';

export interface BaseButtonProps extends ButtonProps {
  label: string;
  mainColor?: 'red' | 'green';
}

export type BaseButtonType = FunctionComponent<BaseButtonProps>;

export const BaseButton: BaseButtonType = ({ label, children, mainColor, ...props }) => {
  const classes = useStyles();

  const style: CSSProperties = { color: mainColor, marginTop: '1em' };

  return (
    <Button className={classes.button} {...props} style={{ ...props.style, ...style }}>
      {children}
      {label}
    </Button>
  );
};
