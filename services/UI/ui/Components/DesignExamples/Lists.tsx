// UI/ui/Components/DesignExamples/Lists.tsx
import React, { FunctionComponent } from 'react';
import { Box } from 'ui/Components/Styles/Box';
import { Slider } from 'ui/Components/Layout/Slider';
import { BaseList } from 'ui/Components/Layout/Lists/BaseList';
import { BaseListItem } from '../Layout/Lists/BaseList/BaseListItem';
import { LabelListItem } from '../Layout/Lists/BaseList/LabelListItem';

type ListsDesignExampleType = FunctionComponent;

export const ListsDesignExample: ListsDesignExampleType = () => {
  return (
    <Box title='Lists'>
      <Slider title='Base List'>
        <BaseList>
          <BaseListItem>Hello World</BaseListItem>
        </BaseList>
      </Slider>
      <Slider title='Label Base List'>
        <BaseList>
          <LabelListItem label='Hello World' />
        </BaseList>
      </Slider>
    </Box>
  );
};
