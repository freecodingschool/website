import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  Hidden,
  List,
  makeStyles,
} from "@material-ui/core";
import {
  User as UserIcon,
  Users as UsersIcon,
} from "react-feather";
import NavItem from "./NavItem";

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const navs = [
    {
      title:'Registration',
      key:"Registration",
      href:'/register',
      icon: UserIcon,
    },
    {
      title:'Events',
      key:'Events',
      href:'/events',
      icon: UsersIcon,
    },
];
const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box p={2}>
        <List>
          {navs.map(({title,icon,href}) => (
            <NavItem
              href={href}
              key={title}
              title={title}
              icon={icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden smUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
