import React from 'react';
import { Avatar, Box, Button, ListItem, ListItemIcon, Menu, MenuItem, makeStyles } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import profileImage from 'https://trendsinusa.com/wp-content/uploads/2018/01/Anonymous-hacker-profile-picture.jpg';

const useStyles = makeStyles((theme) => ({
    root:{
      backgroundColor: theme.palette.background.dark,
      height: '100%',    
      padding:theme.spacing(2)
    },

    navAvatar: {
        width: "35px",
        height: "35px"
    }
  }));


export default function Profile() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dropDownData =[
        {label: "Setting", icon: <SettingsIcon />},
        {label: "Logout", icon: <ExitToAppIcon />}
    ]

    return (
        <Box>
            <Button
                aria-controls="Profile"
                aria-haspopup="true"
                onClick={handleClick}
                startIcon={<Avatar src="https://trendsinusa.com/wp-content/uploads/2018/01/Anonymous-hacker-profile-picture.jpg" className={classes.navAvatar}></Avatar>}
                >
            </Button>
            <Menu
                id="Profile"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    {dropDownData.map((item, i) => (
                        <MenuItem key={i} component={ListItem} onClick={handleClose}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemIcon>{item.label}</ListItemIcon>
                        </MenuItem>
                    ))}
            </Menu>
        </Box>
    )
}
