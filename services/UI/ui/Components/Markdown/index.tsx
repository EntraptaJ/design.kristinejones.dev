// UI/ui/Components/Markdown/index.tsx
import React, { FunctionComponent, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

interface MarkdownProps {
  text: string;
}

type MarkdownType = FunctionComponent<MarkdownProps>;

type HLevels = 1 | 2 | 3 | 4 | 5 | 6;
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const HeadingComponent: FunctionComponent<{ level: HLevels }> = stuff => {
  const { level, children } = stuff;
  // @ts-ignore
  return <Typography variant='h3'>{children[0].props.children}</Typography>;
};

const TextComponent: FunctionComponent<{ value: string }> = ({ value, ...props }) => {
  return (
    <Typography variant='body1' {...props}>
      {value}
    </Typography>
  );
};

const LinkComponent: FunctionComponent<{ href: string }> = ({ href, children }) => {
  return (
    <Typography>
      <Link href={href}>{children}</Link>
    </Typography>
  );
};

const ListComponent: FunctionComponent<{ ordered: boolean }> = props => {
  return (
    <List
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      component={props.ordered ? 'ol' : 'ul'}
    >
      {props.children}
    </List>
  );
};

const ListItemComponent: FunctionComponent = props => {
  return (
    <ListItem component='li' style={{ display: 'list-item', listStyleType: 'initial', width: '90%' }}>
      {props.children}
    </ListItem>
  );
};

export const Markdown: MarkdownType = ({ text }) => {
  return (
    <>
      <ReactMarkdown
        source={text}
        renderers={{
          text: TextComponent,
          heading: HeadingComponent,
          link: LinkComponent,
          list: ListComponent,
          listItem: ListItemComponent
        }}
      />
    </>
  );
};
