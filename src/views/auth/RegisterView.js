import React,{useEffect} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'src/axios';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Container,
  FormHelperText,
  Link,
  Typography,
  MenuItem,  makeStyles
} from '@material-ui/core';
import { useDispatch } from "react-redux";
import TextField from 'src/components/TextField';
import Page from 'src/components/Page';
import { authSlice } from 'src/redux/slicers';
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

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roles = ["Student","Parent","Volunteer"];
  const initialValues = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    role:roles[0].toUpperCase(),
    policy: false
  };
  const validationSchema = Yup.object().shape({ 
    email: Yup.string().email('Please enter valid email').max(255).required('Please enter email'),
    first_name: Yup.string().max(255).required('Please enter first name'),
    last_name: Yup.string().max(255),
    password: Yup.string().max(255).required('Please enter password'),
    role:Yup.string().required('Please eelect your role'),
    policy: Yup.boolean().oneOf([true], 'Please agree to our terms and conditions')
  });
  useEffect(() => {
    if(localStorage.getItem("_ut")){
      navigate('/app/dashboard', { replace: true });
    }
  },[])
  const Signup = async(data, { setSubmitting }) => {
    try{
      const response = await axios({
        method:"post",
        data,
        url:"/user"
      })
      dispatch(authSlice.actions.authSuccess(response.data.token))
      navigate('/app/dashboard', { replace: true });
    }catch(e){
      setSubmitting(false);
      dispatch(authSlice.actions.hasError(e.data.message))
    }
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
        <Container maxWidth="sm">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={Signup}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item sm={12} md={7}>
                      <TextField
                      error={Boolean(touched.first_name && errors.first_name)}
                      helperText={touched.first_name && errors.first_name}
                      label="First name"
                      name="first_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.first_name}
                    />
                  </Grid>
                  <Grid item sm={12} md={5}>
                    <TextField
                          error={Boolean(touched.last_name && errors.last_name)}
                          helperText={touched.last_name && errors.last_name}
                          label="Last name"
                          name="last_name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.last_name}
                        />
                    </Grid>
                </Grid>
              <TextField
                error={Boolean(touched.role && errors.role)}
                name="role"
                helperText={touched.role && errors.role}
                select
                value={values.role}
                onBlur={handleBlur}
                onChange={handleChange}
                label="Role Type">
                {                  
                  roles.map((role,index) =>(
                    <MenuItem key={index} value={role.toUpperCase()}>{role}</MenuItem>
                  ))
                }
              </TextField>
              <TextField
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                label="Email Address"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
              />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    checked={values.policy}
                    
                    color="primary"
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
