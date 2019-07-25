// UI/ui/Components/DesignExamples/Select/index.tsx
import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { Box } from 'ui/Components/Styles/Box';
import { Slider } from 'ui/Components/Layout/Slider';
import { BaseSelect, SelectChange } from 'ui/Components/Styles/Select/BaseSelect';
import { string } from 'prop-types';
import { QuerySelect } from 'ui/Components/Styles/Select/QuerySelect';
import Query from './getUsers.graphql'

interface SelectDesignExampleProps {}

type SelectDesignExampleType = FunctionComponent<SelectDesignExampleProps>;

interface Value {
  HelloWorld: string;
}



export const SelectDesignExample: SelectDesignExampleType = () => {
  const [value, setValue] = useState<Value>({ HelloWorld: '' });

  const getValue = (valueName: keyof Value) => value[valueName];

  const handleChange = (valueName: keyof Value) => ({ target }: SelectChange) =>
    setValue({ ...value, [valueName]: target.value as string });

  return (
    <Box title='Select'>
      <Slider title='Playground'>
        <BaseSelect
          label='Hello World'
          items={[{ label: 'Hello' }, { label: 'Goodbye' }]}
          value={getValue('HelloWorld')}
          onChange={handleChange('HelloWorld')}
        />
      </Slider>

      <Slider title='Query Select'>
        <QuerySelect
          label='Test'
          query={Query}
          value={getValue('HelloWorld')}
          onChange={handleChange('HelloWorld')}
        />
      </Slider>
    </Box>
  );
};
