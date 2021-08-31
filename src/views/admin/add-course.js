import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'src/axios';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Typography,
  FormControlLabel,
  Grid,
  FormGroup,makeStyles
} from '@material-ui/core';
import { useDispatch } from "react-redux";
import TextField from 'src/components/TextField';
import Page from 'src/components/Page';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  formControl:{
    width:'100%'
  }
}));
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday']
const CourseView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    course_name: '',
    description: '',
    days:[],
    start_time: '',
    end_time: ''
  };
  const validationSchema = Yup.object().shape({ 
    course_name: Yup.string().max(255).required('Please enter course name'),
    description: Yup.string().max(255).required('Please enter course description'),
    days:Yup.array().of(Yup.string()).required('Please select atleast a day'),
    time: Yup.boolean().oneOf([true], 'Please select time')
  });
  const AddCourse = async(data, { setSubmitting }) => {
    const response = await axios({
      method:"post",
      data,
      url:"/course"
    })      
    navigate('/admin/course', { replace: true });    
  }
  const handleCheckBox = (e) => {

  }
  return (
    <Page
      className={classes.root}
      title="Freecoding School - Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={AddCourse}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              setFieldValue
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Add new Course
                  </Typography>
                </Box>
              <TextField
                  error={Boolean(touched.course_name && errors.course_name)}
                  helperText={touched.course_name && errors.course_name}
                  label="Course name"
                  name="course_name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.course_name}
              />
              <TextField
                error={Boolean(touched.description && errors.description)}
                helperText={touched.description && errors.description}
                label="Course Description"
                name="description"
                multiline
                rows={4}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
              />
              <FormGroup row>
                {
                  days.map((day,i)=> (
                    <FormControlLabel key={i}
                      control={<Checkbox checked={values.days.includes(day)} 
                        onChange={() => {
                          if(!values.days.includes(day))
                            setFieldValue('days',[...values.days,day])
                          else 
                            setFieldValue('days',[...values.days.filter(d => d !== day)])
                        }} name="days" />}
                      label={day}
                    />
                  ))
                }               
              </FormGroup>
              <Grid container spacing={3}>
                  <Grid item sm={12} md={6}>
                    <TextField
                      error={Boolean(touched.start_time && errors.start_time)}
                      helperText={touched.start_time && errors.start_time}
                      label="Start Time"
                      name="start_time"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.start_time}
                    />
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <TextField
                      error={Boolean(touched.end_time && errors.end_time)}
                      helperText={touched.end_time && errors.end_time}
                      label="End Time"
                      name="end_time"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.end_time}
                    />
                    </Grid>
              </Grid>              
             
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Add
                  </Button>
                </Box>              
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default CourseView;
