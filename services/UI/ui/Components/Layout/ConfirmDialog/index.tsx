// UI/ui/Components/Layout/ConfirmDialog/index.tsx
import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from 'ui/lib/Styles';

interface ConfirmDialogProps {
  open: boolean;
  message: string;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

type ConfirmDialogType = FunctionComponent<ConfirmDialogProps>;

export const ConfirmDialog: ConfirmDialogType = ({ title, open, message, onCancel, onConfirm }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} className={classes.redButton}>
          Cancel
        </Button>
        <Button onClick={onConfirm} color='primary' autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
