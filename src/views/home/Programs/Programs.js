import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography
} from '@material-ui/core';
import exams from './exams.svg';
import student from './student.svg';
const useStyles = makeStyles(theme => ({
  title:{
    lineHeight:'1.5em',
    color:'#fff',
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
    backgroundColor:'#192024',
    padding: theme.spacing(2),
  },
  paper:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    minHeight:'200px',
    color:'#fff',
    padding: theme.spacing(4),
  },
  imgWidth:{
    width:'80%'
  },
  paperTitle:{
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  learnMoreBtn:{
    marginTop: theme.spacing(2)
  }
}));


const Programs = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.section} container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item xs={12} lg={12}>
            <Typography className={classes.title} variant="h4">
               PROGRAMS
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              Freecoding School is powered by collaboration of students, teachers and technology professionals.
            </Typography>
        </Grid>
        <Grid container direction="row" justifyContent="space-between" alignItems="center" >
            <Grid item lg={5} sm={6} xl={5} xs={12} className={classes.paper}>
                <img src={exams} className={classes.imgWidth} alt="Exams" />
                <Typography variant="h5" className={classes.paperTitle}>STUDENTS</Typography>
                <Typography variant="subtitle1">
                    Students who are interested in bringing CS classes to their school can become
                    advocatesto create change by sharing their interest with teachers,
                     administrators and parents, and introducing them to the Freecoding School.
                </Typography>
                <Button variant="contained" color="secondary" size="large" className={classes.learnMoreBtn}
                href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank" >
                  Learn more
                </Button>
            </Grid>
            <Grid item lg={5} sm={6} xl={5} xs={12} className={classes.paper}>
                <img src={student} className={classes.imgWidth} alt="Student" />
                <Typography variant="h5" className={classes.paperTitle}>PROFESSIONALS</Typography>
                <Typography variant="subtitle1">
                    Volunteers with a strong background in computer science and programming
                    form the backbone of this program. We welcome both computer science graduate
                    students and Tech professionals, and Academic professionals
                </Typography>
                <Button variant="contained" color="secondary" size="large" className={classes.learnMoreBtn}
                 href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
                  Learn more
                </Button>
            </Grid>
       </Grid>
    </Grid>
  );
};
export default Programs;
