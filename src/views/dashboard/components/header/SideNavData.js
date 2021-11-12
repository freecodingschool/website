import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CourseIcon from '@mui/icons-material/CastForEducation';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountsIcon from '@mui/icons-material/ManageAccounts';
import { NavLink } from 'react-router-dom';

export default function SideNavData() {
    const listItemData = [
        { label: "Dashboard", link: "dashboard", icon: <DashboardIcon /> },
        { label: "Courses", link: "courses", icon: <CourseIcon /> },
        { label: "Account", link: "account", icon: <AccountsIcon /> },
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
