import TopAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { FunctionComponent, useState, MouseEvent } from 'react';
import { useStyles } from 'ui/lib/Styles';
import { Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { useSession, useLogout } from 'ui/Components/SessionProvider';

interface AppBarProps {
  appName: string;
}

type AppBarType = FunctionComponent<AppBarProps>;

const AppBar: AppBarType = ({ appName }) => {
  const theme = useTheme<Theme>();
  const { isAuthed } = useSession();
  const [logoutFN] = useLogout()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);

  const handleMenu = ({ currentTarget }: MouseEvent<HTMLElement>) => setAnchorEl(currentTarget);

  const handleClose = () => setAnchorEl(null);

  const onMenuItem = (option: string) => () => {
    if (option === 'Logout') logoutFN()
    handleClose();
  };

  return (
    <>
      <TopAppBar className={classes.appBar} style={{ zIndex: theme.zIndex.modal + 5 }} position='fixed' color='primary'>
        <Toolbar>
          <div id='navActions'>
            <></>
          </div>
          <Typography variant='h6' className={classes.appTitle}>
            {appName}
          </Typography>
          {isAuthed && (
            <div>
              <IconButton
                aria-label='Account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                style={{
                  zIndex: theme.zIndex.modal + 6
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                PaperProps={{
                  style: {
                    top: '4.05em'
                  }
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={onMenuItem('Logout')}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </TopAppBar>
      <div className={classes.toolbar} />
    </>
  );
};

export default AppBar;
