// UI/ui/Components/Layout/Lists/BaseList/BaseListItem/index.tsx
import React, { FunctionComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';

export interface BaseListItemProps {
  alignItems?: 'flex-start' | 'center';
  autoFocus?: boolean;
  ContainerComponent?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  ContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  focusVisibleClassName?: string;
  selected?: boolean;
}

type BaseListItemType = FunctionComponent<BaseListItemProps>;

export const BaseListItem: BaseListItemType = ({ children, ...props }) => {
  return (
    <ListItem button {...props}>
      {children}
    </ListItem>
  );
};
