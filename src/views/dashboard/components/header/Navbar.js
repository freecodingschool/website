import React, {} from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Box, Hidden, IconButton } from '@material-ui/core';
import Profile from './navtabs/Profile';
import Notifications from './navtabs/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
    root:{
      backgroundColor: theme.palette.background.dark,
      height: '100%',    
      padding:theme.spacing(2)
    },

    toolbar: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
    },

    toolbarIcon: {
      display: "flex",
    }
  }));

export default function Navbar() {
  const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Logo />
          </Typography>
          <Hidden smDown>
          <Box className={classes.toolbarIcon}>
            <Notifications />
            <Profile />
          </Box>
          </Hidden>
          <Hidden mdUp>
          <IconButton color="inherit" onClick={() => console.log("FCS")}>
            <MenuIcon />
          </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
}
