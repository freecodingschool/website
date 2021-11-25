import React from 'react';
import { Avatar, Box, Badge, IconButton, ListItem, ListItemIcon, ListItemText, Menu, List, makeStyles } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root:{
      backgroundColor: theme.palette.background.dark,
      height: '100%',    
      padding:theme.spacing(2)
    },

    navlist: {
        minWidth: "250px",
        maxWidth: "300px",
    }, 

    ulAvatar: {
        backgroundColor: orange["A200"],
        color: "white"
    }
  }));

export default function Notifications() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dropDownData =[
        {label: "North", desc:"FreecodingSchool..."},
        {label: "South", desc:"FreecodingSchool..."},
        {label: "East", desc:"FreecodingSchool..."},
        {label: "West", desc:"FreecodingSchool..."},
    ]

    return (
        <Box>
            <IconButton
                aria-controls="Notifications"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                >
                <Badge badgeContent={4} color="secondary">
                    <NotificationsActiveIcon />
                </Badge>
            </IconButton>
            <Menu
                id="Notifications"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <List className={classes.navlist}>
                    {dropDownData.map((item, i) => (
                        <ListItem key={i} onClick={handleClose}>
                            <ListItemIcon>
                                <Avatar className={classes.ulAvatar}>{item.label[0].toUpperCase()}</Avatar>
                            </ListItemIcon>
                            <ListItemText primary={item.label} secondary={item.desc}></ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Menu>
        </Box>
    )
}
