import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography,
  Box
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight:"60vh"
  },
  learnMoreBtn:{
    marginTop: theme.spacing(2),
    display:"flex",
    width:"200px"
  }
}));

const Events = () => {
  const classes = useStyles();
  return (
    <Grid  container 
            direction="row"
            justify="space-evenly"
            alignContent = "center"
            className={classes.root} 
          >
        <Grid item lg={3} xs={12} >
            <Box p={2}>
                <Typography variant="h4">Current Events</Typography>
                <Typography variant="h6">Scratch Programming</Typography>              
                <Typography variant="body1">Mon - SAT 4:30 pm - 5.30 pm IST.</Typography>   
                <Typography variant="h6">Introduction Programming</Typography>              
                <Typography variant="body1">SUN 3:00 pm - 4.00 pm IST.</Typography>   
                <Typography variant="body2">please send an email for password at support@freecodingschool.org</Typography>  
            </Box>
        </Grid>
        <Grid item lg={3} xs={12} >
        <Box p={2}>
                <Typography variant="h4">Upcoming Events</Typography>
                <Typography variant="body1">New Batch Starts On Nov 1st, 2020</Typography>                              
                <Button variant="contained" color="secondary" size="large" className={classes.learnMoreBtn}
                    href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
                    register now
                </Button>        
            </Box>
        </Grid>
    </Grid>
  );
};
export default Events;
