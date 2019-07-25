// UI/ui/Components/Dialogs/ConfirmDialog/index.tsx
import React, { FunctionComponent } from 'react';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { BaseDialog, BaseDialogProps } from 'ui/Components/Dialogs/DialogBase';
import { ProgressButton } from 'ui/Components/Forms/Button/ProgressButton';

export type ButtonTypes = 'confirm' | 'cancel';

interface ConfirmDialogProps extends BaseDialogProps {
  onSelection: (selection: ButtonTypes) => () => any;
  progress?: ButtonTypes;
}

type ConfirmDialogType = FunctionComponent<ConfirmDialogProps>;

export const ConfirmDialog: ConfirmDialogType = ({ onSelection, progress, ...props }) => {
  const isLoading = (button: ButtonTypes) => progress === button;

  return (
    <BaseDialog
      {...props}
      actions={
        <>
          <ProgressButton loading={isLoading('cancel')} onClick={onSelection('cancel')} mainColor='red' label='Cancel' />
          <ProgressButton loading={isLoading('confirm')} onClick={onSelection('confirm')} mainColor='green' label='Submit' />
        </>
      }
    />
  );
};
