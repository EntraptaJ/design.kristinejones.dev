// UI/ui/Components/DesignExamples/Dialogs/index.tsx
import React, { FunctionComponent, useState } from 'react';
import { Box } from 'ui/Components/Styles/Box';
import { Slider } from 'ui/Components/Layout/Slider';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { ConfirmDialog, ButtonTypes } from 'ui/Components/Dialogs/ConfirmDialog';
import TextField from '@material-ui/core/TextField';
import { ConfirmDialogDemo } from './ConfirmDialogDemo';

type DialogsDesignExampleType = FunctionComponent;

type DialogType = 'confirmDeletion';

interface DialogDetails {
  type: DialogType;
  title: string;
  body: string;
  progress?: ButtonTypes;
}

export const DialogsDesignExample: DialogsDesignExampleType = () => {
  const [dialog, setDialog] = useState<DialogDetails>();
  const open = Boolean(dialog);

  const Dialogs: DialogDetails[] = [
    { type: 'confirmDeletion', title: 'Confirm Deletion of User?', body: 'Are you sure you want to delete XYZ?' }
  ];

  const openDialog = (dialogType?: DialogType) => () => setDialog(Dialogs.find(({ type }) => dialogType === type));

  const onSelection = (action: ButtonTypes) => () => {
    if (dialog) {
      setDialog({ ...dialog, progress: action });
      setTimeout(() => {
        setDialog({ ...dialog, progress: undefined });
        openDialog()();
      }, 2500);
    }
  };

  return (
    <>
      <Box title='Dialogs Demo'>
        <ConfirmDialogDemo />
      </Box>
      <ConfirmDialog open={open} onClose={openDialog()} onSelection={onSelection} {...dialog} />
    </>
  );
};
