import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography,
  Container,
  Paper
} from '@material-ui/core';
import moment from 'moment';
import { ArrowRightAlt, AccessTime } from '@material-ui/icons';
import Carousel from "react-elastic-carousel";
import { useSelector } from "react-redux";
import useWindowSize from 'src/utils/WindowSize'
const useStyles = makeStyles(theme => ({
  titleWrapper:{
    alignItems:'center',
    textAlign:'center',
    padding:'20px 0'
  },
  title:{
    lineHeight:'1.5em',
  },
  subtitle:{
    fontWeight:'400',
    marginTop:'20px',
    color:'#333'
  },
  primarySection:{

  },
  paper:{
    // minHeight:360,
    padding: theme.spacing(2)
  },
  eventHead:{
    display:'inline-flex',
    width:'100%'
  },
  dateBox:{
    padding:'15px 16px',
    marginRight: theme.spacing(2),
    borderRadius:11,
    backgroundColor:'#d5d8ff',
    textAlign:'center',
    height:70,
    width:140,
    fontSize:'1.2rem',
    display: 'flex',
    alignItems: 'center'    
  },
  paperTitle:{
    marginBottom: theme.spacing(2),
    color:'#333',
    marginTop: theme.spacing(2),
  },
  eventTimeWrapper:{
    marginTop: theme.spacing(2),
    justifyContent:'flex-end',
    alignItems:'flex-end',
    display:'flex',
    '& p' :{
      fontWeight:600,
      marginLeft:3
    }
  },
  carouselWrapper :{
    width: '100%'
  },  
  enrollNowBtn:{
    marginTop: theme.spacing(2)
  }
}));

const Programs = () => {
  const classes = useStyles();
  const width = useWindowSize();
  const showArrows =  width < 720;  
  const {courses} = useSelector(state => state.home);
  const breakPoints = [
    {
      width: 360,
      itemsToShow: 1,
      itemsToScroll: 1,
      pagination: courses?.length > 1,
    },
    {
      width: 762,
      itemsToShow:2,
      itemToScroll:2,
      pagination: courses?.length > 4,
    },
    {
      width: 1024,
      itemsToShow:3,
      itemToScroll:3,
      pagination: courses?.length > 4,
    },
  ];
  return (
    <div  className={`section-5 ${classes.primarySection}`} style={{minHeight: 'calc(100vh - 65px)'}}>
      <Container maxWidth="lg">       
        <div className={classes.titleWrapper}>
            <Typography className={`section-title`} variant="h2">
              Freecoding School Calendar
            </Typography>
            <Typography className={`secondary-color section-2 desc ${classes.subtitle}`} variant="h5">
            This calendar applies to those who are attending our classes.
            If you are attending our classes from your school, then we follow the school calendar.
            </Typography>
        </div>
        <div className={classes.carouselWrapper}>
          <Carousel breakPoints={breakPoints} showArrows={showArrows} itemPadding={[6,8,8,8]}>  
              {
              courses.map((course,index) => (
                  <Paper elevation={1} className={classes.paper} key={index} >
                      <div className={classes.eventHead}>
                        <div className={classes.dateBox}>
                          <div>{course?.days[0].substr(0,3)} - {course?.days[course?.days.length - 1].substr(0,3) }</div>
                        </div>
                        <div className={classes.eventHead}>
                          <Typography variant="h5" className={classes.paperTitle}>{course?.course_name}</Typography>
                        </div>
                      </div>                 
                      <Typography variant="body1"  className={classes.subtitle}>{course?.description}</Typography>
                      <Grid item xs={12} container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={6}>
                          <Button color="primary" size="large" className={classes.enrollNowBtn}
                          href={course?.enroll_link} target="_blank" >
                            Enroll Now
                            <ArrowRightAlt />
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <div className={classes.eventTimeWrapper}>
                              <AccessTime /> 
                              <Typography variant="body2">{ moment(course?.start_time, ["h:mm"]).format("h:mm A") } - { moment(course?.end_time, ["h:mm"]).format("h:mm A") } </Typography>
                          </div>                                
                        </Grid>
                      </Grid>
                  </Paper>
              ))
            } 

          </Carousel>
        </div>
    </Container>
    </div>
  );
};

export default Programs;
