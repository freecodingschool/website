import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography
} from '@material-ui/core';
import banner from './images/banner.png';
import vit from './images/vit.png';
import illinois from './images/illinois.png';
import comcast from './images/comcast.png';
import cts from './images/cts.png';
const useStyles = makeStyles(theme => ({
  title:{
    fontSize:'3.2em',
    lineHeight:'1.2em'  
  },
  leftSection:{
    paddingLeft:50
  },
  volunteerTitle:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    padding: theme.spacing(1.5),
  },
  subtitle:{
    fontSize:'1.2em',
    lineHeight:'1.5em',
    margin: theme.spacing(2),
    fontWeight:'400',
    color:'#333',
  },
  section:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'left',
    color:'#333'
  },
  learnMoreBtn:{
    fontSize:'2em',
    padding: theme.spacing(1.5),
    width:'175px'
  },
  homeBtn:{
    marginTop:50,
    marginRight: theme.spacing(2),
    padding: theme.spacing(1.5),
    width:200
  },
  imgWrapper:{
    width:'80%',
    margin: '0 auto'
  }
}));
const Community = () => {
  const classes = useStyles();
  const volunteers = [
    {
      image:vit
    }, 
    {
      image:illinois
    }, 
    {
      image:cts
    }, 
    {
      image:comcast
    }
  ]
  return (
    <Fragment>
      <Grid
        className={classes.section} container style={{minHeight: 'calc(100vh - 65px)'}}>
        <Grid item xs={12} md={8} className={classes.leftSection} >
          <Typography className={classes.title} variant="h2">
            Creating A Local Community <br/> To Empower High
            School Students <br/>To Learn Programming
          </Typography>
          <Typography className={classes.subtitle} variant="h5">
            A Simple Mission To Close The Computer Science Gap In High Schools And <br/>Local Communities.
          </Typography>
          <Grid item xs={12}>
              <Button variant="contained" color="primary" size="large" className={classes.homeBtn}
                href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
                Learn More 
              </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={banner} width="100%"/>
        </Grid>
    </Grid>
    <Grid className={classes.section} container>
      <Typography className={classes.volunteerTitle} variant="h3">WE ARE FROM</Typography>
      <Grid item xs={12} container>
        {
          volunteers.map((volunteer,i) => (
            <Grid item xs={12} md={3} key={i}>
              <div className={classes.imgWrapper}>
                <img src={volunteer.image} width="100%" height="100"/>
              </div>
            </Grid>
          ))       
        }
       </Grid>
    </Grid>
    </Fragment>
  );
};
export default Community;
