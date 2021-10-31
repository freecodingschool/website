import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'src/axios';
import { ArrowRightAlt } from '@material-ui/icons';
import { useParams } from 'react-router-dom'
import {
  Grid,
  Button,
  Typography,
  Container
} from '@material-ui/core';
import Courses from './course';
const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.background.dark,
    height: '100%',    
    width:'100%',
  },
  course_name :{
    margin: '10px 0px 0px 10px',
    color: '#5d5fef',
    fontSize: '2em',
    fontWeight: '600',
},

course_description: {
    margin: '10px 0px 0px 10px',
    fontSize: '1em',
    opacity: '0.8',
    position: 'relative',
},

course_image: {
    position: 'relative',
    width: '100%',
    height: '80%',
    objectFit: 'fill',
    border: '1px solid #5d5fef',
    borderRadius: '10px',
    marginTop: '15px',
},

course_schedule :{
    marginLeft: '20px',
    fontWeight: '700',

},
about_course: {
    fontSize: '24px',
    textTransform: 'uppercase',
    color: '#5d5fef',
    fontWeight: '600',
    paddingBottom: '4px',
    borderBottom: '4px solid #5d5fef',
},

  heading : {
      fontSize: '20px',
      textTransform: 'uppercase',
      color: '#797984',
      fontWeight: '600',
      paddingTop: '5px',
  },

  point1 : {
      fontSize: '16px',
      color: '#5d5fef',
      marginTop: '10px',
      textTransform: 'none',
  },

  point2 : {
      fontSize: '16px',
      color: '#81818a',
      marginTop: '10px',
      textTransform: 'none',
  },
  course_background:{
    background:'#C6C7F6',
  },
  enrollBtn:{
    margin:'3em 6em',
    width:180,
    float:'right', 
 },
}));
export default function viewCourse() {
  const classes = useStyles();
  const [course,setCourse] = useState({});  
  const { courseId } = useParams()
  useEffect(() =>{
    getCourses(); 
  },[])
  const getCourses = async() => {
    const response = await axios({
      method:"GET",
      url:`/course/${courseId}`,
    })      
    response.data.data.days = response.data.data.days.join();
    setCourse(response.data.data) 
  }
    return (
      <>
      <div className={classes.root}>
        <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item md={12} className={`${classes.course_background}`}>
                    <Typography className={`${classes.course_name}`} variant="h5">
                     {course.course_name}
                    </Typography>
                    <Grid container spacing={3}>
                    <Grid item md={7}>
                    <Typography className={classes.course_description} variant="subtitle1">
                    {course.description}
                    </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <img width="300px">{course.course_image}</img>
                    </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                    <Grid item md={6}>
                    <Grid item md={12}>
                    <Typography className={`${classes.course_schedule}`} variant="subtitle1">
                      Instructor : {course.instructor} 
                    </Typography>
                    </Grid>
                    <Grid item md={12}>
                    <Typography className={`${classes.course_schedule}`} variant="subtitle1">
                      Timing : {course?.start_time} - {course?.end_time}
                    </Typography>             
                    </Grid> 
                    <Grid item md={12}>
                    <Typography className={`${classes.course_schedule}`} variant="subtitle1">
                      Platform : ZOOM 
                    </Typography>             
                    </Grid></Grid>  
                    <Grid item md={6}>
                    <Grid item md={12}>
                    <Button variant="contained" color="primary" size="large" className={`${classes.enrollBtn}`} href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
                        Enroll now <ArrowRightAlt />
                    </Button>              
                    </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12}>                  
                  <Typography className={classes.about_course}>
                    About
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography className={`${classes.heading}`}>
                    WHAT YOU'LL LEARN?                  
                  </Typography>
                    <Typography className={`${classes.point1}`}>
                      {course.learning}
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography className={`${classes.heading}`} variant="subtitle1">
                      WHO THIS COURSE IS FOR? 
                    </Typography>
                    <Typography className={`${classes.point2}`}>
                       {course.about} 
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography className={`${classes.heading}`} variant="subtitle1">
                      COURSE CONTENT
                    </Typography>             
                    <Typography className={`${classes.point1}`}>
                      {course.content}
                    </Typography>
                </Grid>     
                <Grid item md={12}>
                    <Typography className={`${classes.heading}`} variant="subtitle1">
                      REQUIREMENTS  
                    </Typography>             
                    <Typography className={`${classes.point2}`}>
                      {course.requirements}
                    </Typography>
                </Grid>               
                <Grid item md={12}>
                    <Typography className={`${classes.heading}`} variant="subtitle1">
                      READINGS 
                    </Typography>             
                    <Typography className={`${classes.point1}`}>
                      {course.readings}
                    </Typography>
                </Grid>               
                        
              </Grid>  
            </Container>          
        </div> 
      </>           
    );
}