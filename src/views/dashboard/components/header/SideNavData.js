import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CourseIcon from '@material-ui/icons/CastForEducation';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom';

export default function SideNavData() {
    const listItemData = [
        { label: "Dashboard", link: "dashboard", icon: <DashboardIcon /> },
        { label: "Courses", link: "courses", icon: <CourseIcon /> },
        { label: "Account", link: "account", icon: <AccountCircleIcon /> },
        { label: "Notification", link: "notification", icon: <NotificationsIcon /> },
        { label: "Logout", link: "logout", icon: <ExitToAppIcon /> },
    ]
    return (
        <List>
            {listItemData.map((item, i) => (
                <ListItem component={NavLink} to={item.link} key={i}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}
