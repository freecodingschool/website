import React from 'react'
import Page from 'src/components/Page';
import {
    Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography, makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
      backgroundColor: theme.palette.background.dark,
      height: '100%',    
      padding:theme.spacing(2)
    },

    avatar: {
        maxWidth: '100%',
        height: '100%',
        width: '200px',
        marginBottom: '10px'
    }
  }));

const user = {
    avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123155116/original/ada692539ed9ea12a2d20bf054ab5316d211254b/create-illustrative-instagram-twitch-and-youtube-profile-pictures.jpg',
    city: 'Mumbai',
    country: 'India',
    jobTitle: 'Software Developer',
    name: 'Akash Soni',
    timezone: 'IST + 5:30'
};

const AccountProfile = (props) => {
    const classes = useStyles();

    return (
        <Card {...props}>
            <CardContent>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                    <Avatar src={user.avatar} className={classes.avatar} />
                    <Typography color="textPrimary" gutterBottom variant="h4">{user.name}</Typography>
                    <Typography color="textSecondary" variant="body2">
                        {`${user.city} ${user.country}`}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">{user.timezone}</Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Box sx={{display: 'flex', justifyContent: 'center', p:0.5, width:'100%'}}>
                    <Button color="primary" variant="text">Upload Picture</Button>
                </Box>
            </CardActions>
        </Card>
    );
}

export default AccountProfile;
