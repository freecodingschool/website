import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'src/axios';
import { ArrowRightAlt } from '@material-ui/icons';
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
    margin: '0px 0px 0px 10px',
    fontWeight: '700',

},

course_enroll_btn: {
    backgroundColor: '#5d5fef',
    border: 'none',
    borderRadius: '3px',
    color: 'white',
    //padding: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '20px',
    //margin: '20px 10px 0px 10px'
    marginLeft:'450px',
    padding : theme.spacing(1.5),
    width:'180',
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
      <>
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
      </>           
    );
}