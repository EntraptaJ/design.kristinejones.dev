// UI/ui/Components/Layout/Lists/ListItems/AvatarListItem/index.tsx
import React, { FunctionComponent } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { LabelListItem, LabelListItemProps } from 'ui/Components/Layout/Lists/ListItems/LabelListItem';
import { LinkListItem } from 'ui/Components/Layout/Lists/ListItems/LinkListItem';

interface BaseAvatarListItemProps extends LabelListItemProps {
  link: false;
  src: string;
}

interface AvatarLinkListItemProps extends LabelListItemProps {
  link: true;
  src: string;
  to: string;
}

export type AvatarListItemProps = BaseAvatarListItemProps | AvatarLinkListItemProps;

type AvatarListItemType = FunctionComponent<AvatarListItemProps>;

export const AvatarListItem: AvatarListItemType = ({ link, src, ...props }) => {
  const ListItemComponent = link === true ? LinkListItem : LabelListItem;

  return (
    // @ts-ignore
    <ListItemComponent
      preLabel={
        <ListItemAvatar>
          <Avatar src={src} />
        </ListItemAvatar>
      }
      {...props}
    ></ListItemComponent>
  );
};
