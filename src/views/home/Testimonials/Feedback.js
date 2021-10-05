import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'src/axios';
import { Formik } from 'formik';
import {
    Typography,
    Container,
    Button,
    Box,
    makeStyles,
    FormLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid
  } from '@material-ui/core';
  import TextField from 'src/components/TextField';
  import Page from 'src/components/Page';

  const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        height: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
      },

    cancelBtn:{
      marginLeft:'20px',
      color:'#fff'
    },

    label: {
        paddingTop: theme.spacing(3),
    },

    radioBtn: {
        display:'block'
    },
    grid1:{
      marginTop:'10px',
      width:'auto'
    }
  
  }));

const Feedback = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        designation: '',
        org_or_school: '',
        review: '',
      };
      const validationSchema = Yup.object().shape({ 
        name: Yup.string().max(255).required('Please enter your name'),
        designation: Yup.string().required('Please select your role'),
        org_or_school: Yup.string().max(255).required('Please enter your organization name'),
        review: Yup.string().required('Please brief yourslef'),
      });
      const AddTestimonial =async(values, {setSubmitting}) => {
        const data = new FormData();
        data.append('name', values.name);
        data.append('designation', values.designation);
        data.append('org_or_school', values.org_or_school);
        data.append('review', values.review);
      
        console.log(data)
        setSubmitting(true)
        await axios({
          method:"POST",
          url:"/review",
          data
        })
        navigate('/home');
      }
      

    return(
        <Page className={classes.root} title="Freecoding School - Feedback Form">
            <Box display="flex" height="100%" justifyContent="center">
            <Container maxWidth="lg">
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={AddTestimonial}>
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box>
                      <Typography variant="h2">Feedback Form</Typography>
                      <Typography variant="h5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</Typography>
                    </Box>
                    <TextField 
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                      label="Your Name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                    />
                    <FormControl>
                    <Grid container spacing={2}>
                        <Grid className={classes.grid1} item xs={3.5} lg={4.5}>
                        
                        <FormLabel>Your Designation</FormLabel>
                        </Grid>
                        <Grid item xs lg>
                        <RadioGroup row
                        error={Boolean(touched.designation && errors.designation)}
                        helperText={touched.designation && errors.designation}
                        label="Your Designation"
                        name="designation"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={classes.radioBtn}
                        value={values.designation}>
                            <FormControlLabel value="student" control={ <Radio/> } label="Student"/>
                            <FormControlLabel value="volunteer" control={ <Radio/> } label="Volunteer"/>
                            <FormControlLabel value="parent" control={ <Radio/> } label="Parent"/>
                        </RadioGroup>
                    
                        </Grid>
                    </Grid>
                    </FormControl>
                    <TextField 
                      error={Boolean(touched.org_or_school && errors.org_or_school)}
                      helperText={touched.org_or_school && errors.org_or_school}
                      label="Your Organization or School"
                      name="org_or_school"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.org_or_school}
                    />
                    <TextField 
                      error={Boolean(touched.review && errors.review)}
                      helperText={touched.review && errors.review}
                      label="Your Review"
                      name="review"
                      multiline
                      rows={4}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.review}
                    />
                    <Box my={2}>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Submit
                      </Button>
                      <Button
                        color="secondary"
                        size="large"
                        type="reset"
                        variant="contained"
                        href="/home"
                        className={classes.cancelBtn}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Container>
          </Box>
        </Page>
    )
}

export default Feedback;