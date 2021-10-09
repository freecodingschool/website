import React, {useState} from 'react';
import * as Yup from 'yup';
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
  Grid,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { useNavigate } from 'react-router';
import axios from 'axios';
import TextField from 'src/components/TextField';
import Page from 'src/components/Page';
import { Formik } from 'formik';

const useStyles = makeStyles(theme => ({
  root: {
      backgroundColor: theme.palette.background.dark,
      height: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },

  title:{
    fontSize:'30px'
  },

  subTitle:{
    fontSize:'18px'
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Feedback = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const designations = ["Student","Parent","Volunteer"];
  const initialValues ={
    name:'',
    designation:designations[0].toUpperCase(),
    org_or_school:'',
    review:'',
  };
  const validationSchema = Yup.object().shape({
    name:Yup.string().max(255).required('Please enter your name'),
    designation:Yup.string().max(255).required('Please select you role'),
    org_or_school:Yup.string().max(255).required('Please enter your organization name'),
    review:Yup.string().max(255).required('Please provide additional comments or suggestions...'),
  });
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const handleClose = (event, reason) => {
    if (reason == 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  const AddFeeback = async(data, { setSubmitting }) => {
    try{
      const response = await axios({
        method:"post",
        data,
        url:"/review"
      })
      navigate('/home');
    }
    catch(e){
      setOpen(true);
      setSubmitting(false);
      setMessage(e?.data?.message || 'Something went wrong')
    }
  }
  return (
    <Page className={classes.root} title="Freecoding School - Feedback Form">
      <Box display="flex" height="100%" justifyContent="center">
        <Container maxWidth="lg">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={AddFeeback}>
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
                  <Typography className={classes.title}>Feedback Form</Typography>
                  <Typography className={classes.subTitle}>"Please help us with what do you think about freecoding.</Typography>
                </Box>
                <TextField 
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                      label="Name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                    />
                    <FormControl>
                    <Grid container spacing={2}>
                        <Grid className={classes.grid1} item xs={3.5} lg={4.5}>
                        <FormLabel>Role</FormLabel>
                        </Grid>
                        <Grid item xs lg>
                        <RadioGroup row
                        error={Boolean(touched.designation && errors.designation)}
                        helperText={touched.designation && errors.designation}
                        label="Your Role"
                        name="designation"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={classes.radioBtn}
                        value={values.designation}> 
                        {
                          designations.map((designation,index) => (
                            <FormControlLabel key={index} value={designation.toUpperCase()} control={<Radio/>} label={designation}>{designation}</FormControlLabel>
                          ))
                        }
                            {/* <FormControlLabel value="student" control={ <Radio/> } label="Student"/>
                            <FormControlLabel value="volunteer" control={ <Radio/> } label="Volunteer"/>
                            <FormControlLabel value="parent" control={ <Radio/> } label="Parent"/> */}
                        </RadioGroup>
                    
                        </Grid>
                    </Grid>
                    </FormControl>
                    <TextField 
                      error={Boolean(touched.org_or_school && errors.org_or_school)}
                      helperText={touched.org_or_school && errors.org_or_school}
                      label="Organization or School"
                      name="org_or_school"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.org_or_school}
                    />
                    <TextField 
                      error={Boolean(touched.review && errors.review)}
                      helperText={touched.review && errors.review}
                      label="Please provide additional comments or suggestions..."
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
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">{message}</Alert>
          </Snackbar>
        </Container>
      </Box>
    </Page>
  )
}

export default Feedback;