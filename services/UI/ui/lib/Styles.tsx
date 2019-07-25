// UI/ui/lib/Styles.tsx
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from 'react';
import { red } from '@material-ui/core/colors';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    appTitle: {
      flexGrow: 1
    },
    button: {
      marginTop: '1em'
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    box: {
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      maxWidth: '325px',
      borderRadius: '1em',
      padding: '1em',
      margin: '1.5rem'
    },
    drawer: {
      // Good
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      // Good
      width: drawerWidth
    },
    content: {
      // Good
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      justifyContent: 'center',
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      willChange: 'margin-left',
      width: '100%'
    },
    contentDesktop: {
      marginLeft: -drawerWidth
    },
    contentShiftDesktop: {
      // Good
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    toolbar: theme.mixins.toolbar, // Good,
    redButton: {
      color: red['A700']
    }
  })
);

export const BoxStyle: CSSProperties = {
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '325px',
  borderRadius: '1em',
  padding: '1em',
  boxShadow: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
  margin: '1.5rem'
};

export const FieldStyle: CSSProperties = { marginTop: '1em', width: '100%' };
