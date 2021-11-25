import React from 'react'
import Page from 'src/components/Page';
import { Box, Container, Grid, Typography, makeStyles
} from '@material-ui/core';
import AccountProfile from './account/account-profile';
import AccountProfileDetails from './account/account-profile-details';


const useStyles = makeStyles((theme) => ({
    root:{
      backgroundColor: theme.palette.background.dark,
      height: '100%',    
      padding:theme.spacing(2)
    },

    heading: {
        fontSize: '25px',
        fontWeight: '500'
    }
  }));

const Account = (props) => {
    const classes = useStyles();

    return (
    <Page
        className={classes.root}
        title="Freecoding School - Account">
        <Box component="main" sx={{flexGrow: 1, py: 8}}>
            <Container maxWidth="lg">
                <Typography className={classes.heading}>Account</Typography>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={6} xs={12}>
                        <AccountProfile />
                    </Grid>
                    <Grid item lg={8} md={6} xs={12}>
                        <AccountProfileDetails />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Page>
    )
}

export default Account;
