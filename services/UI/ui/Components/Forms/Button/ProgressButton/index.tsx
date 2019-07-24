// UI/ui/Components/Forms/Button/ProgressButton/index.tsx
import React, { FunctionComponent, CSSProperties } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BaseButton, BaseButtonProps } from 'ui/Components/Forms/Button/BaseButton';
import { useStyles } from 'ui/lib/Styles';

interface ProgressButtonProps extends BaseButtonProps {
  loading: boolean;
}

type ProgressButtonType = FunctionComponent<ProgressButtonProps>;

export const ProgressButton: ProgressButtonType = ({ label, loading, ...props }) => {
  const classes = useStyles();

  return (
    <BaseButton label={label} {...props}>
      {loading === true && <CircularProgress size={18} className={classes.leftIcon} />}
    </BaseButton>
  );
};
