import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import baseUrl from 'src/config'
const useStyles = makeStyles((theme) => ({ 
  title: {
    paddingTop: "20px",
    paddingLeft: "20px",
  },
  primaryBg: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff !important",
  },
  courseBody: {
    height: 110,
    padding: 8,
  },
  courseCard: {
    margin: 8,
    padding: 8,
    color: "#2F2F2F",
    width: "100%",
    height: 200,
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
      className={`${classes.courseCard} ${
        isPrimary ? classes.primaryBg : "secondary-bg"
      }`}
    >
      <div className={`${classes.courseCardHeader}`}>
        <img src={`${baseUrl}uploads/courses/${course.image_name}`} width="40" alt={course.course_name} />
      </div>
      <div className={classes.courseBody}>
        <Typography variant="subtitle1" color="inherit">
          {course.course_name}
        </Typography>
      </div>
    </Paper>
  );
};
export default Course;
