// UI/ui/Components/DesignExamples/Breadcrumbs
import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { Box } from 'ui/Components/Styles/Box';
import { BreadcrumbBar, Path } from 'ui/Components/Layout/Breadcrumb';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { FormDialog } from 'ui/Components/Dialogs/FormDialog';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

type BreadcrumbsDesignExampleType = FunctionComponent;

type DialogType = 'AddCrumb';

interface Value {
  to: string;
  label: string;
}

export const BreadcrumbsDesignExample: BreadcrumbsDesignExampleType = () => {
  const [dialog, setDialog] = useState<DialogType>();
  const [breadcrumbs, setBreadcrumbs] = useState<Path[]>([{ label: `Home`, to: '/' }, { label: `Designs`, to: '/Designs' }]);
  const [value, setValue] = useState<Value>({ to: '', label: '' });

  const openDialog = (name: DialogType) => () => setDialog(name);

  const handleChange = (prop: keyof Value) => ({ target }: ChangeEvent<HTMLInputElement>) =>
    setValue({ ...value, [prop]: target.value });

  const getValue = (prop: keyof Value) => value[prop];

  const closeDialog = () => setDialog(undefined);

  const onAction = (action: 'submit' | 'cancel') => () => {
    if (action === 'submit') addCrumb(value);

    closeDialog();
  };

  const filterCrumb = (item: Path) => breadcrumbs.filter(path => path !== item);

  const addCrumb = (path: Path) => setBreadcrumbs([...breadcrumbs, path]);

  const dialogOpen = (name: DialogType) => dialog === name;

  return (
    <>
      <Box title='Breadcrumbs'>
        <BreadcrumbBar path={breadcrumbs} />
        <List dense style={{ width: '100%' }}>
          {breadcrumbs.map(path => (
            <ListItem key={path.to}>
              <ListItemText primary={path.label} secondary={path.to} />{' '}
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='Delete' onClick={() => setBreadcrumbs([...filterCrumb(path)])}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        <BaseButton onClick={openDialog('AddCrumb')} label='Add Crumb' />
      </Box>
      <FormDialog
        title='Add Breadcrumb'
        body='Add Breadcrumb'
        open={dialogOpen('AddCrumb')}
        onClose={closeDialog}
        onAction={onAction}
      >
        <TextField label='Path' fullWidth value={getValue('to')} onChange={handleChange('to')} />
        <TextField label='Label' fullWidth value={getValue('label')} onChange={handleChange('label')} />
      </FormDialog>
    </>
  );
};
