// UI/ui/Components/Layout/List/ListItems/ParentListItem/index.tsx
import React, { FunctionComponent, useState } from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { LabelListItem, LabelListItemProps } from '../LabelListItem';
import { BaseList } from '../../BaseList';
import { LinkListItem, LinkListItemProps } from '../LinkListItem';


interface ParentListItemProps  extends LabelListItemProps {
  label: string;
  startOpen?: boolean
}

export type ParentListItemType = FunctionComponent<ParentListItemProps>;

export const ParentListItem: ParentListItemType = ({ label, children, startOpen = false, ...props }) => {
  const theme = useTheme<Theme>();
  const [open, setOpen] = useState<boolean>(startOpen);

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <LabelListItem label={label} onClick={toggleOpen} {...props}>
        {open ? <ExpandLess /> : <ExpandMore />}
      </LabelListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <BaseList disablePadding style={{ paddingLeft: theme.spacing(4) }}>
          {children}
        </BaseList>
      </Collapse>
    </>
  );
};
