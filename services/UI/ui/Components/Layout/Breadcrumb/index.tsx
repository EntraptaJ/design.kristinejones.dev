// UI/ui/Components/Layout/Breadcrumb/index.tsx
import React, { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ReachLink } from '@reach/router';
import { Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  breadcrumbBar: {
    zIndex: 1202
  },
  breadcrumbPaper: {
    zIndex: 1202
  }
}));

export interface Path {
  label: string;
  to: string;
  final?: boolean;
}

type BreadcrumbType = FunctionComponent<Path>;

export const Breadcrumb: BreadcrumbType = ({ to, label, final = false }) => {
  if (final) return <Typography color='textPrimary'>{label}</Typography>;

  return (
    <Link color='inherit' component={ReachLink} to={to}>
      {label}
    </Link>
  );
};

interface BreadCrumbBarProps {
  path: Path[];
}

type BreadCrumbBarType = FunctionComponent<BreadCrumbBarProps>;

export const BreadcrumbBar: BreadCrumbBarType = ({ path }) => {
  const classes = useStyles();
  const theme = useTheme<Theme>();

  return (
    <Paper elevation={0} id='BreadcrumbBar' style={{ zIndex: theme.zIndex.appBar + 1, maxWidth: '100%' }}>
      <Breadcrumbs className={classes.breadcrumbBar} separator={<NavigateNextIcon fontSize='small' />} aria-label='Breadcrumb'>
        {path.map((props, index) => (
          <Breadcrumb key={index} {...props} final={index === path.length - 1} />
        ))}
      </Breadcrumbs>
    </Paper>
  );
};
