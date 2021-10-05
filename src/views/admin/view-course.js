import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'src/axios';
import { useParams } from 'react-router-dom'
import { AccessTime } from '@material-ui/icons';
import {
  Grid,
  Typography,
  Container
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.background.dark,
    height: '100%',    
    padding:theme.spacing(2)
  },
  table: {
    minWidth: 650,
  },
  title:{
    marginTop:'0.5em',
    marginBottom:'0.5em',
  },
  about:{
    fontWeight:`400`,
    marginTop:'0.5em',
    marginBottom:'0.2em',
  },
  description:{
    marginTop:'0.1em',
    marginBottom:'0.5em',
  },
  label:{
    marginTop:'1.5em',
    marginBottom:'0.1em',
  },
  days:{
    display:`flex`,
    marginTop:'0.1em',
    '& icon': {
      fontSize:14
    }
  }
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
      <div className={classes.root}>
        <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className={`${classes.title}`} variant="h5">
                     {course.course_name}
                    </Typography>
                    <Typography className={classes.about} variant="subtitle1">
                    About this course
                    </Typography>
                    <Typography className={`${classes.description}`}>
                      {course.description}
                    </Typography>
                    <Typography className={`${classes.label}`} variant="subtitle1">
                      Date 
                    </Typography>
                    <Typography className={`${classes.days}`}>
                      | {course.days} |
                    </Typography>
                    <Typography className={`${classes.label}`} variant="subtitle1">
                      Timing
                    </Typography>             
                    <Typography className={`${classes.days}`}>
                     <AccessTime />{course?.start_time} - {course?.end_time}
                    </Typography>
                  </Grid>                  
              </Grid>  
            </Container>          
        </div>  
          
    );
}