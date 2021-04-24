import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Button,Typography} from '@material-ui/core';
import {ArrowRightAlt} from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({  
  section:{
    backgroundColor:'#efefef'
  },
  gridContainer: { 
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
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
     <div  className={`section-5 secondary-bg`}>
        <Container maxWidth="lg" className={classes.gridContainer}>
        <Typography variant="h2">
            Really to become a FreeCodingSchool Volunteer ?
        </Typography>
        <Button variant="contained" color="primary" size="large" className={classes.homeBtn}
            href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
            Join US
            <ArrowRightAlt />
        </Button> 
      </Container>
      </div>
    </Fragment>
  );
}
export default News;