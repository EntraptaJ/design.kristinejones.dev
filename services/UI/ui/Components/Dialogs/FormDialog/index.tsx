// UI/ui/Components/Dialogs/FormDialog/index.tsx
import React, { FunctionComponent } from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';

interface FormDialogProps extends DialogProps {
  title: string;
  body: string;
  onAction: (action: 'cancel' | 'submit') => () => any;
}

type FormDialogType = FunctionComponent<FormDialogProps>;

export const FormDialog: FormDialogType = ({ title, body, open, onClose, children, onAction }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{body}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <BaseButton onClick={onAction('cancel')} mainColor='red' label='Cancel' />
        <BaseButton onClick={onAction('cancel')} mainColor='green' label='Submit' />
      </DialogActions>
    </Dialog>
  );
};
