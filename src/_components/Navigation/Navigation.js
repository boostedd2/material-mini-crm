import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ClickAwayListener
} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/_context/AuthContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const menuItems = [
  {id: 1, text: 'Dashboard', icon: <SpaceDashboardIcon/>, link: '/dashboard'},
  {id: 2, text: 'Stats', icon: <BarChartIcon/>, link: '/stats'},
  {id: 3, text: 'Settings', icon: <SettingsIcon/>, link: '/settings'},
];

const LogoutButton = styled(ListItemButton)(({theme}) => ({
  '&:hover': {
    backgroundColor: theme.palette.error.main,
  },
}));

export default function MiniDrawer() {
  const {logout} = useContext(AuthContext);

  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogoutConfirmationOpen = () => {
    setLogoutConfirmationOpen(true);
  };

  const handleLogoutConfirmationClose = () => {
    setLogoutConfirmationOpen(false);
  };

  const handleLogout = () => {
    logout();
    handleLogoutConfirmationClose();
  };


  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box sx={{display: 'flex'}}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                color: '#ffffff',
                ...(open && {display: 'none'}),
              }}
            >
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>


        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Avatar
              sx={{bgcolor: theme.palette.primary.main}}
              alt="Admin"
              src="/broken-image.jpg"
            />
            <Typography variant="span" sx={{fontFamily: 'Roboto', marginRight: 'auto', marginLeft: 1}}>
              Admin
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
            </IconButton>
          </DrawerHeader>

          <Divider/>

          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding sx={{display: 'block'}}>
                <ListItemButton
                  component="a"
                  href={item.link}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{opacity: open ? 1 : 0}}/>
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem key={'logout'} disablePadding sx={{display: 'block'}}>
              <LogoutButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={handleLogoutConfirmationOpen}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PowerSettingsNewIcon/>
                </ListItemIcon>
                <ListItemText primary={'Logout'} sx={{opacity: open ? 1 : 0}}/>
              </LogoutButton>
            </ListItem>
          </List>
        </Drawer>


        <Dialog open={logoutConfirmationOpen} onClose={handleLogoutConfirmationClose}>
          <DialogTitle>Logout Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLogoutConfirmationClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleLogout} autoFocus>
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ClickAwayListener>
  );
}
