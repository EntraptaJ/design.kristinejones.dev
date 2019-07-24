// UI/ui/Components/DesignExamples/Lists.tsx
import React, { FunctionComponent } from 'react';
import { Box } from 'ui/Components/Styles/Box';
import { Slider } from 'ui/Components/Layout/Slider';
import { BaseList } from 'ui/Components/Layout/Lists/BaseList';
import { BaseListItem } from 'ui/Components/Layout/Lists/ListItems/BaseListItem';
import { LabelListItem } from 'ui/Components/Layout/Lists/ListItems/LabelListItem';
import { LinkListItem } from 'ui/Components/Layout/Lists/ListItems/LinkListItem';

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
      <Slider title='Label Link List'>
        <BaseList>
          <LinkListItem label='Home' to='/' />
          <LinkListItem label='Users' to='/Users/' />
        </BaseList>
      </Slider>
    </Box>
  );
};
