import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from 'src/components/Logo';
import { useDispatch } from "react-redux";
import { authSlice } from 'src/redux/slicers';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    borderBottom:`1px solid ${theme.palette.background.default}`
  },
  avatar: {
    width: 60,
    height: 60
  },
  menuWrapper:{
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  active:{

  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const menus = [
    // { name:"Dashboard",href: "/app/dashboard"},
    // { name:"Progress",href: "/app/progress"},
    // { name:"Completed",href: "/app/completed"},
    // { name:"Rewards", href: "/app/account",},
    // { name:"Profile",href: "/app/profile"},
  ]
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(authSlice.actions.logOut());
    navigate('/login', { replace: true });
  }
  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            color="primary"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          {
            menus.map(({name,href},key) => (
              <div className={classes.menuWrapper} key={key}>
                <Button
                 color="primary" 
                 className={classes.active}
                 component={RouterLink}
                 to={href} >
                  {name}
                </Button>
              </div>            
            ))
          }
        <div className={classes.menuWrapper}>
          <Button color="primary" onClick={logout}>
           Logout
          </Button>
        </div>   
          {/* <IconButton color="primary">
            <Badge
              badgeContent={notifications.length}
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          {/* <IconButton color="primary" onClick={logout}>
            <InputIcon />
          </IconButton> */}
        </Hidden>       
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
