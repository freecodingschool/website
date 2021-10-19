import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'src/axios';
import RichTextEditor from 'src/components/RichTextEditor';
  import {
  Box,
  Button,
  Checkbox,
  Container,
  Typography,
  FormControlLabel,
  FormLabel,
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
  },
  fileName:{
    marginTop:10
  },
  formLabel:{
    fontWeight:'0.1em',
    marginTop:'20px',
    color:'grey',
    fontSize:'1em',
  }
}));

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday',"Saturday","Sunday"]
const CourseView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    course_name: '',
    description: '',
    instructor: '',
    days:[],
    start_time: '19:00',
    end_time: '20:00',
    enroll_link:'',
    readings: '',
    content: '',
    requirements:'',
    learning:'',
    about:'',
  };
  const validationSchema = Yup.object().shape({ 
    course_name: Yup.string().max(255).required('Please enter course name'),
    description: Yup.string().required('Please enter course description'),
    instructor: Yup.string().max(255).required('Please enter instructor name'),
    days:Yup.array().of(Yup.string()).required('Please select atleast a day'),
    start_time: Yup.string().required('Please select time'),
    end_time:Yup.string().required('Please select time'),
    enroll_link:Yup.string().required('Please select time'),
    readings: Yup.string().required('Please enter Readings'),
    content: Yup.string().required('Please enter content'),
    requirements: Yup.string().required('Please enter requirements'),
    learning: Yup.string().required('Please enter learning'),
    about: Yup.string().required('Please enter about '),
    file:Yup.string().max(255).required('Please select course image')
  });
  const AddCourse = async(values, { setSubmitting }) => {

    const data = new FormData();
    data.append('file', values.file);
    data.append('course_name', values.course_name);
    data.append('description', values.description);
    data.append('instructor', values.instructor);
    data.append('days', values.days.join());
    data.append('start_time', values.start_time);
    data.append('end_time', values.end_time);
    data.append('enroll_link', values.enroll_link);
    data.append('readings', values.readings);
    data.append('content', values.content);
    data.append('requirements', values.requirements);
    data.append('learning', values.learning);
    data.append('about', values.about);
    
    console.log(values.file)
    console.log(data)
    setSubmitting(true)
    await axios({
      method:"post",
      data, 
      url:"/course",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data
    })      
    navigate('/admin/course');    
  }
  return ( 
    <Page
      className={classes.root}
      title="Freecoding School - Add Course"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="lg">
          <Formik
            initialValues={initialValues}
            validateOnBlur={validationSchema}
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
                    variant="h5"
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
              <TextField
                  error={Boolean(touched.instructor && errors.instructor)}
                  helperText={touched.instructor && errors.instructor}
                  label="Instructor Name"
                  name="instructor"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.instructor}
              />
              <TextField
                error={Boolean(touched.enroll_link && errors.enroll_link)}
                helperText={touched.enroll_link && errors.enroll_link}
                label="Enroll Link"
                name="enroll_link"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.enroll_link}
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
                     type="time"
                      error={Boolean(touched.start_time && errors.start_time)}
                      helperText={touched.start_time && errors.start_time}
                      label="Start Time"
                      name="start_time"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.start_time}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <TextField
                     type="time"
                      error={Boolean(touched.end_time && errors.end_time)}
                      helperText={touched.end_time && errors.end_time}
                      label="End Time"
                      name="end_time"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.end_time}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                    </Grid>
              </Grid> 
              <Typography className={classes.formLabel}>What you will learn?</Typography>
              <RichTextEditor
                  error={Boolean(touched.learning && errors.learning)}
                  helperText={touched.learning && errors.learning}
                  label="What you will learn?"
                  name="learning"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.learning}
              />
              <Typography className={classes.formLabel}>Who this course is for?</Typography>
              <RichTextEditor
                  error={Boolean(touched.about && errors.about)}
                  helperText={touched.about && errors.about}
                  label="Who this course is for?"
                  name="about"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.about}
              />
              <Typography className={classes.formLabel}>Course Content</Typography>
              <RichTextEditor
                  error={Boolean(touched.content && errors.content)}
                  helperText={touched.content && errors.content}
                  label="Course Content"
                  name="content"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.content}
              />
              <Typography className={classes.formLabel}>Reading</Typography>
              <RichTextEditor
                  error={Boolean(touched.readings && errors.readings)}
                  helperText={touched.readings && errors.readings}
                  label="Readings"
                  name="Readings"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.readings}
              />
              <Typography className={classes.formLabel}>Requirements</Typography>
              <RichTextEditor
                  error={Boolean(touched.requirements && errors.requirements)}
                  helperText={touched.requirements && errors.requirements}
                  label="Requirements"
                  name="Requirements"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.requirements}
              />

              <Button
                variant="contained"
                component="label"
              >
                Upload File
                <input
                  type="file"
                  onChange={({target:{files}}) => {
                    setFieldValue("file", files[0]);
                  }}  
                  hidden
                />
              </Button>
              {values.file && (<div className={classes.fileName}>{values?.file?.name}</div>)}
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