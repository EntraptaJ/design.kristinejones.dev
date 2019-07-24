// UI/ui/Components/Dialogs/FormDialog/index.tsx
import React, { FunctionComponent } from 'react';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { BaseDialog, BaseDialogProps } from 'ui/Components/Dialogs/DialogBase';

interface FormDialogProps extends BaseDialogProps {
  onAction: (action: 'cancel' | 'submit') => () => any;
}

type FormDialogType = FunctionComponent<FormDialogProps>;

export const FormDialog: FormDialogType = ({ title, body, open, children, onAction, ...props }) => {
  return (
    <BaseDialog
      open={open}
      title={title}
      body={body}
      actions={[
        <BaseButton onClick={onAction('cancel')} mainColor='red' label='Cancel' />,
        <BaseButton onClick={onAction('submit')} mainColor='green' label='Submit' />
      ]}
      {...props}
    >
      {children}
    </BaseDialog>
  );
};
