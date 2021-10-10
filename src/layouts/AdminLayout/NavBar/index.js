import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';
import { Book, BookOpen } from '@material-ui/icons/Book';
  
// AlertCircle as AlertCircleIcon,
// BarChart as BarChartIcon,
// Lock as LockIcon,
// Settings as SettingsIcon,
// ShoppingBag as ShoppingBagIcon,
// User as UserIcon,
// UserPlus as UserPlusIcon,
//Users as UsersIcon
import NavItem from './NavItem';
const useStyles = makeStyles((theme) => ({
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  mobileNav:{
    width: 256
  }
}));
const items = [
  {
    href: '/admin/course',
    icon: Book,
    title: 'All Courses'
  },
  {
    href: '/admin/new-course',
    icon: BookOpen,
    title: 'New Course'
  }
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
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box  p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
        <Box
          m={2}
          p={2}
        >
      </Box>
    </Box>
  );

  return (
    <>    
    <Hidden smUp>
      <Drawer
        anchor="left"
        onClose={onMobileClose}
        open={openMobile}
        variant="temporary"
        classes={{ paper:classes.desktopDrawer}}>
        {content}
      </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          open
          variant="persistent" classes={{ paper: classes.desktopDrawer }}>
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;