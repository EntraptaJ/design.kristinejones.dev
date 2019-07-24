// UI/ui/Components/Layout/Lists/ListItems/LinkListItem/index.tsx
import React, { FunctionComponent } from 'react';
import { LabelListItem, LabelListItemProps } from 'ui/Components/Layout/Lists/ListItems/LabelListItem'
import { Link } from '@reach/router';

interface LinkListItemProps extends LabelListItemProps {
  to: string
}

type LinkListItemType = FunctionComponent<LinkListItemProps>

export const LinkListItem: LinkListItemType = (props) => {
  return <LabelListItem component={Link} {...props}/>

}