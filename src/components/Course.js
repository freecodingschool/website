import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper,Button } from "@material-ui/core";
import { ArrowRightAlt, AccessTime } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({ 
  title: {
    paddingTop: "20px",
    paddingLeft: "20px",
  },
  courseBody: {
    height: 80,
  },
  courseCard: {
    height: 160,
    padding:16,
    width: "100%",
    position: 'relative',
    '&::before' :{
      content: '" "',  
      background:'#ddd',
      position: 'absolute',
      top:0,
      left: 0,
      width: '100%',
      height: 4,
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,14,215,1) 30%, rgba(0,212,255,1) 70%)"
    }
  },
  courseCardHeader: {
    padding: theme.spacing(1),
  },
  image: {
    width: "90%",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      width: "calc(95%)",
    },
  },
}));
const Course = ({course,isPrimary}) => {
  const classes = useStyles();
  return (
      <Paper
      elevation={3}
      key={course._id}
      className={`${classes.courseCard}`}
    >
      {/* <div className={`${classes.courseCardHeader}`}>
        <img src={`${baseUrl}uploads/courses/${course.image_name}`} width="40" alt={course.course_name} />
      </div> */}
      <div className={classes.courseBody}>
        <Typography variant="subtitle1" color="inherit">
          {course.course_name}
        </Typography>        
      </div>
      <Button color="primary" size="large" 
      href={course?.enroll_link} target="_blank" >
        Enroll Now
        <ArrowRightAlt />
      </Button>
    </Paper>
  );
};
export default Course;
