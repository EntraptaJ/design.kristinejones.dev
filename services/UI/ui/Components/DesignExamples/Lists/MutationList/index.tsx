// UI/ui/Components/DesignExamples/Lists/MutationList/index.tsx
import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CREATE_ITEMS_GQL from './createItems.graphql';
import { Slider } from 'ui/Components/Layout/Slider';
import { FieldStyle } from 'ui/lib/Styles';
import { BaseList } from 'ui/Components/Layout/Lists/BaseList';
import { LabelListItem } from 'ui/Components/Layout/Lists/ListItems/LabelListItem';
import { BaseButton } from 'ui/Components/Forms/Button/BaseButton';
import { Alert } from 'ui/Components/Styles/Alert';

type MutationListExampleType = FunctionComponent;

interface Item {
  name: string;
}

interface Alert {
  message: string;
  success: boolean;
}

export const MutationListExample: MutationListExampleType = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [createItemsFN] = useMutation<{ createItems: Item[] }, { items: Item[] }>(CREATE_ITEMS_GQL);
  const [value, setValue] = useState<string>('');
  const [alert, setAlert] = useState<Alert>();

  const addItem = (item: Item) => setItems([...items, item]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value);

  const createItems = async () => {
    const response = await createItemsFN({ variables: { items } });
    if (response && response.data) setAlert({ success: true, message: 'Items created successfully' });
    else setAlert({ success: false, message: 'An error has occurred' });
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addItem({ name: value });
      setValue('');
    }
  };

  return (
    <Slider title='Mutation List'>
      <Typography variant='body1'>
        This is an example of a list which can be submitted as a mutation to the API to create multiple items.
      </Typography>
      <BaseList>
        {items.map(({ name }, index) => (
          <LabelListItem key={index} label={name} />
        ))}

        <TextField
          style={FieldStyle}
          variant='outlined'
          value={value}
          label='Name'
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </BaseList>
      {items.length > 2 && <BaseButton onClick={createItems} color='primary' variant='contained' label='Submit Items' />}
      {alert && <Alert open={true} {...alert} />}
    </Slider>
  );
};
