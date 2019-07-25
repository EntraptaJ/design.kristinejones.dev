// UI/ui/Components/DesignExamples/Dialogs/ConfirmDialogDemo/index.tsx
import React, { FunctionComponent, useState, ChangeEvent } from 'react';

import { Slider } from 'ui/Components/Layout/Slider';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { ConfirmDialog, ButtonTypes } from 'ui/Components/Dialogs/ConfirmDialog';
import TextField from '@material-ui/core/TextField';
import { FieldStyle } from 'ui/lib/Styles';

type ConfirmDialogDemoType = FunctionComponent;

interface Dialog {
  title?: string;
  body?: string;
  open: boolean;
  progress?: ButtonTypes;
}

export const ConfirmDialogDemo: ConfirmDialogDemoType = () => {
  const [dialog, setDialog] = useState<Dialog>({ open: false });

  const handleChange = (fieldName: keyof Dialog) => ({ target }: ChangeEvent<HTMLInputElement>) =>
    setDialog({ ...dialog, [fieldName]: target.value });

  const toggleDialog = () => setDialog({ ...dialog, open: !dialog.open });

  const onSelection = (action: ButtonTypes) => () => {
    if (dialog) {
      if (action === 'cancel') return toggleDialog();
      setDialog({ ...dialog, progress: action });
      setTimeout(() => {
        setDialog({ ...dialog, progress: undefined });
        toggleDialog();
      }, 2500);
    }
  };

  return (
    <>
      <Slider title='Confirmation Dialogs'>
        <TextField
          style={FieldStyle}
          variant='outlined'
          label='Dialog Title'
          value={dialog.title}
          onChange={handleChange('title')}
        />
        <TextField
          style={FieldStyle}
          variant='outlined'
          label='Dialog Body'
          value={dialog.body}
          onChange={handleChange('body')}
        />

        <BaseButton label='Show Dialog' color='primary' onClick={toggleDialog} />
      </Slider>
      <ConfirmDialog open={dialog.open} onClose={() => toggleDialog()} onSelection={onSelection} {...dialog} />
    </>
  );
};
