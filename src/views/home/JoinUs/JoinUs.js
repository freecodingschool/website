import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Button,Typography} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({  
  gridContainer: { 
   padding:'50px',
   display:'flex',
   backgroundColor:'inherit'
  }, 
  bannerTitle:{
    textAlign:'center'
  } ,
  homeBtn:{
    width:200,
    marginLeft:20,
    padding: theme.spacing(1.5)
  },
}));

 const News = () => {
  const classes = useStyles();
  return ( 
      <Fragment>
        <Container maxWidth="lg"  className={classes.gridContainer}>
          <Typography className={classes.bannerTitle} variant="h1">
              Really to become a FreeCodingSchool Volunteer?
          </Typography>
          <Button variant="contained" color="primary" size="large" className={classes.homeBtn}
              href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
              Join US
          </Button> 
        </Container>
    </Fragment>
  );
}
export default News;