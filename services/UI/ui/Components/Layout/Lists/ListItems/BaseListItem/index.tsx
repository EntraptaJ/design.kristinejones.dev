// UI/ui/Components/Layout/Lists/BaseList/BaseListItem/index.tsx
import React, { PropsWithChildren, FunctionComponent } from 'react';
import ListItem, { ListItemTypeMap } from '@material-ui/core/ListItem';
import { ExtendButtonBase } from '@material-ui/core/ButtonBase'
import { OverridableComponent, OverrideProps } from '@material-ui/core/OverridableComponent'

export type BaseListItemProps = OverrideProps<ListItemTypeMap<{ button?: true, component?: React.ReactNode }, 'div'>, 'div'>

type BaseListItemType = FunctionComponent<BaseListItemProps>

export const BaseListItem: BaseListItemType = ({ children, ...props }) => {
  return (
    <ListItem button {...props}>
      {children}
    </ListItem>
  );
};
