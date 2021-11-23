import React, { useState } from 'react';
import { makeStyles, Box, Drawer, Paper, Typography } from '@material-ui/core';
import SideNavData from './SideNavData';

const useStyles = makeStyles((theme) => ({
    root:{
      backgroundColor: theme.palette.background.dark,
      height: '100%',    
      padding:theme.spacing(2)
    },

    drawerPaper: {
        width: "250px",
        marginTop: "65px",
    }
  }));

export default function SideNav() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
        <Box
        component="nav"
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          classes={{
              paper: classes.drawerPaper,
          }}
        >
        s<SideNavData />
        </Drawer>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
            }}
          open
        >
        <SideNavData />
        </Drawer>
      </Box>
    )
}
