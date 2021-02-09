import React,{useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Grid,Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({  
  gridContainer: { 
   padding:'50px',
  }, 
  bannerTitle:{
    textAlign:'center'
  } ,
  homeBtn:{
    padding: theme.spacing(1.5),
    width:200
  },
}));

 const News = () => {
  const classes = useStyles();
  return ( 
      <Fragment>
        <Grid className={classes.gridContainer} container direction="row" justify="center" spacing={3} > 
            <Grid item xs={12} sm={8} md={9}> 
                <Typography className={classes.bannerTitle} variant="h2">
                    Really to become a FreeCodingSchool Volunteer?
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3} > 
                <Button variant="contained" color="primary" size="large" className={classes.homeBtn}
                    href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
                    Join US
                </Button> 
            </Grid>
         </Grid>
    </Fragment>
  );
}
export default News;