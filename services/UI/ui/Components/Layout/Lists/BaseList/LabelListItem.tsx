// UI/ui/Components/Layout/Lists/BaseList/LabelListItem.tsx
import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import { BaseListItem, BaseListItemProps } from './BaseListItem';

export interface LabelListItemProps extends BaseListItemProps {
  label: string;
}

type LabelListItemType = FunctionComponent<LabelListItemProps>;

export const LabelListItem: LabelListItemType = ({ label, children, ...props }) => {
  return (
    <BaseListItem {...props}>
      <ListItemText primary={label} />
    </BaseListItem>
  );
};
