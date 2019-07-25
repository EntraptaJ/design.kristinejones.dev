// UI/ui/Components/DesignExamples/Form/index.tsx
import React, { FunctionComponent, useState } from 'react';
import { Form, Field, FieldTypes, HTMLInputTypes, HTMLInputTypesENUM } from 'ui/Components/Styles/Form';
import { FormDialog } from 'ui/Components/Dialogs/FormDialog';
import TextField from '@material-ui/core/TextField';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { FABButton } from 'ui/Components/Forms/Button/FABButton';
import { BaseSelect, SelectChange } from 'ui/Components/Styles/Select/BaseSelect';
import { FieldStyle } from 'ui/lib/Styles';

type FormDesignExampleType = FunctionComponent;

interface FormData {}

interface undefinedDialogValues {
  type?: undefined;
  name?: undefined
  label?: undefined
  inputType?: undefined
}

interface definedDialogValues {
  type: FieldTypes;
  name: string
  label: string
  inputType: HTMLInputTypes
}

type DialogValues = definedDialogValues | undefinedDialogValues;

export const FormDesignExample: FormDesignExampleType = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [dialogValues, setDialogValues] = useState<DialogValues>({  });

  const [fields, setFields] = useState<Field[]>([]);

  const openDialog = (state: boolean = false) => () => setOpen(state);

  const closeDialog = openDialog()

  const onAction = (action: 'submit' | 'cancel') => () => {
    if (action === 'submit') {
      if (dialogValues.inputType) {
        setFields([...fields, dialogValues])
        setDialogValues({ })
      }
    }
    
    closeDialog()
  }

  const handleDialogChange = (field: keyof DialogValues) => ({ target }: SelectChange) =>
    setDialogValues({ ...dialogValues, [field]: target.value as any });

  const getDialogValue = (field: keyof DialogValues) => dialogValues[field];

  const onSubmit = (data: FormData) => {};

  return (
    <>
      <Form<FormData> title='Form Sandbox' Fields={fields} onSubmit={onSubmit} noSubmit>
        <FABButton onClick={openDialog(true)} color='primary' />
      </Form>
      <FormDialog title='New Form Element' open={open} onClose={openDialog()} onAction={onAction}>
        <BaseSelect
          value={getDialogValue('type')}
          onChange={handleDialogChange('type')}
          fullWidth
          label='Field Type'
          items={[{ label: 'Text' }, { label: 'Select' }]}
        />
        <TextField
          label='Field Name'
          fullWidth
          variant='outlined'
          style={{ marginTop: '1em' }}
          onChange={handleDialogChange('name')}
          value={getDialogValue('name')}
          />
          <TextField
            label='Field Label'
            fullWidth
            variant='outlined'
            style={{ marginTop: '1em' }}
            onChange={handleDialogChange('label')}
            value={getDialogValue('label')}
          />
          <BaseSelect
            label='Field Type'
            fullWidth
            value={getDialogValue('inputType')}
            onChange={handleDialogChange('inputType')}
            controlProps={{
              style: {
                marginTop: '1em'
              }
            }}
            items={Object.entries(HTMLInputTypesENUM).sort().map(([string]) => ({ label: string }))}
            />

      </FormDialog>
    </>
  );
};
