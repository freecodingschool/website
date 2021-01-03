import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  title:{
    lineHeight:'1.5em'
  },
  subtitle:{
    fontSize:'1.5em',
    lineHeight:'1.5em',
    margin: theme.spacing(2),
    fontWeight:'400',
    color:'#ccc',
  },
  section:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    backgroundColor: '#596ec0',
    color:'#fff'
  },
  learnMoreBtn:{
    fontSize:'2em',
    padding: theme.spacing(1.5),
    width:'175px'
  },
  homeBtn:{
    marginRight: theme.spacing(2),
    padding: theme.spacing(1.5),
    width:200
  }
}));
const Community = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.section} container style={{height: 'calc(100vh - 65px)'}}>
          <Grid item xs={12}>
              <Typography className={classes.title} variant="h2">
                  Creating A Local Community To Empower High <br/>
                  School Students To Learn Programming
               </Typography>
               <Typography className={classes.subtitle} variant="h5">
                  A Simple Mission To Close The Computer Science Gap In High Schools And <br/>Local Communities.
                </Typography>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" size="large" className={classes.homeBtn}
                      href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
                      Learn More 
                    </Button>
                </Grid>
          </Grid>
    </Grid>
  );
};
export default Community;
