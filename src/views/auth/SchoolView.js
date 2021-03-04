import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Grid,
  InputLabel,
  MenuItem,
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
   // height: '100%',
    paddingBottom: theme.spacing(3),
   // paddingTop: theme.spacing(3)
   paddingTop:"10px",
  }
}));
const yes_or_no = [
  {
    value: "yes",
    label: "Yes"
  },
  {
    value: "no",
    label: "No"
  }
];

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="New School Application"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              schoolname: '',
              email: '',
              phoneNumber: '',
              address: '',
              city: '',
              state: '',
              postalCode: '',
              website: '',
              publicPrivate: '',
              yesno: '',
              courses: '',
              computerLab: '',
              accessToComputersOutsideTheClass: '',
              accessToInternetOutsideTheClass: '',
              coordinatorName: '',
              designation: '',
              coordinatoremail: '',
              coordinatorPhoneNumber: '',
              timingSupportedForFreecoding: '',
              firstName: '',
              lastName: '',
              password: '',
              policy: false
            }}
            validationSchema={
              
              Yup.object().shape({
                schoolname: Yup.string().required('School Name is required'),
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                phoneNumber:  Yup.string().matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone number is not valid").required("Phone Number is required"),
                address: Yup.string().required('School address is required'),
                city: Yup.string().required('City is required'),
                state: Yup.string().required('State is required'),
                postalCode: Yup.string().required('PostalCode is required'),
                website: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,'Enter correct url!').required('Please enter website'),
                publicPrivate: Yup.string().required('Sector is required'),
                yesno: Yup.string().required('Required'),
                courses: Yup.string().required('Courses are required'),
                computerLab: Yup.string().required('This field is required'),
                accessToComputersOutsideTheClass: Yup.string().required('This field is required'),
                accessToInternetOutsideTheClass: Yup.string().required('This field is required'),
                coordinatorName: Yup.string().required('This field is required'),
                designation: Yup.string().required('This field is required'),
                coordinatoremail: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                coordinatorPhoneNumber:  Yup.string().matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone number is not valid").required("Phone Number is required"),
                timingSupportedForFreecoding:Yup.string().required('Timing is required'),
                firstName: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
                password: Yup.string().max(255).required('password is required'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
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
                    New School Application
                  </Typography>
                </Box>
                <Grid container spacing={2} className={classes.card}>
          <Grid item container xs={12} className={classes.grid}>
            
          </Grid>
          <Grid
            item
            container
            lg={3}
            sm={3}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <InputLabel margin="dense" fullWidth>
              School Name
            </InputLabel>
          </Grid>
          <Grid
            item
            container
            lg={9}
            sm={9}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <TextField
              id="schoolname"
              value={values.schoolname}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.schoolname ? errors.schoolname : ""}
              error={touched.schoolname && Boolean(errors.schoolname)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">Email Address</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="stretch"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">Contact Number</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.phoneNumber ? errors.phoneNumber : ""}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            lg={3}
            sm={3}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <InputLabel margin="dense">School Address</InputLabel>
          </Grid>
          <Grid
            item
            container
            lg={9}
            sm={9}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <TextField
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.address ? errors.address : ""}
              error={touched.address && Boolean(errors.address)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">City</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.city ? errors.city : ""}
              error={touched.city && Boolean(errors.city)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">State</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.state ? errors.state : ""}
              error={touched.state && Boolean(errors.state)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">Postal Code</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="postalCode"
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.postalCode ? errors.postalCode : ""}
              error={touched.postalCode && Boolean(errors.postalCode)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">State</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.state ? errors.state : ""}
              error={touched.state && Boolean(errors.state)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">School Website</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="website"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.website ? errors.website : ""}
              error={touched.website && Boolean(errors.website)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">Type</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="publicPrivate"
              label="Private/Public"
              value={values.publicPrivate}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.publicPrivate ? errors.publicPrivate : ""}
              error={touched.publicPrivate && Boolean(errors.publicPrivate)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xs={12}>
            <Typography>Courses</Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={9}
            sm={9}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <InputLabel margin="dense">
              Does your school offer any computer science courses?
            </InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={3}
            sm={3}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <TextField
              select
              id="yesno"
              value={values.yesno}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.yesno ? errors.yesno : ""}
              error={touched.yesno && Boolean(errors.yesno)}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {yes_or_no.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={5}
            sm={6}
            xl={6}
            xs={12}
            className={classes.grid}
          >
            <InputLabel margin="dense">
              If yes, what courses does your school offer?
            </InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={7}
            sm={6}
            xl={6}
            xs={12}
            className={classes.grid}
          >
            <TextField
              id="courses"
              value={values.courses}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.courses ? errors.courses : ""}
              error={touched.courses && Boolean(errors.courses)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={6}
            sm={5}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <InputLabel margin="dense">
              Does your school have computer lab and access to internet?
            </InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={6}
            sm={7}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <TextField
              id="computerLab"
              value={values.computerLab}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.computerLab ? errors.computerLab : ""}
              error={touched.computerLab && Boolean(errors.computerLab)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={8}
            sm={9}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <InputLabel margin="dense">
              Estimate % students who have access to computer outside of class?
            </InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={4}
            sm={3}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <TextField
              id="accessToComputersOutsideTheClass"
              value={values.accessToComputersOutsideTheClass}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.accessToComputersOutsideTheClass
                  ? errors.accessToComputersOutsideTheClass
                  : ""
              }
              error={
                touched.accessToComputersOutsideTheClass &&
                Boolean(errors.accessToComputersOutsideTheClass)
              }
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={8}
            sm={9}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <InputLabel margin="dense">
              Estimate % students who have access to internet outside of class?
            </InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={4}
            sm={3}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <TextField
              id="accessToInternetOutsideTheClass"
              value={values.accessToInternetOutsideTheClass}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.accessToInternetOutsideTheClass
                  ? errors.accessToInternetOutsideTheClass
                  : ""
              }
              error={
                touched.accessToInternetOutsideTheClass &&
                Boolean(errors.accessToInternetOutsideTheClass)
              }
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item container xs={12} className={classes.grid}>
            <Typography margin="dense">Number of Students</Typography>
          </Grid>
          {/*<Grid container spacing={2}>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <InputLabel margin="dense">Grade 6</InputLabel>
            </Grid>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <TextField
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                margin="dense"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <InputLabel margin="dense">Grade 7</InputLabel>
            </Grid>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <TextField
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                margin="dense"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <InputLabel margin="dense">Grade 8</InputLabel>
            </Grid>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <TextField
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                margin="dense"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <InputLabel margin="dense">Grade 9</InputLabel>
            </Grid>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <TextField
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                margin="dense"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <InputLabel margin="dense">Grade10</InputLabel>
            </Grid>
            <Grid
              item
              container
              direction="row"
              lg={1}
              spacing={2}
              className={classes.grid}
            >
              <TextField
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                margin="dense"
                variant="outlined"
              />
            </Grid>
          </Grid>
            */}

          <Grid item container xs={12} className={classes.grid}>
            <Typography margin="dense">
              School Contact Person/Partnership Co-ordinator
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">Coordinator Name</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="coordinatorName"
              value={values.coordinatorName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.coordinatorName ? errors.coordinatorName : ""}
              error={touched.coordinatorName && Boolean(errors.coordinatorName)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">Designation</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="designation"
              value={values.designation}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.designation ? errors.designation : ""}
              error={touched.designation && Boolean(errors.designation)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">Coordinator Email</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="coordinatoremail"
              value={values.coordinatoremail}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.coordinatoremail ? errors.coordinatoremail : ""
              }
              error={
                touched.coordinatoremail && Boolean(errors.coordinatoremail)
              }
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={3}
            md={3}
            className={classes.grid}
          >
            <InputLabel margin="dense">Coordinator Contact Number</InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            sm={5}
            md={3}
            className={classes.grid}
          >
            <TextField
              id="coordinatorPhoneNumber"
              value={values.coordinatorPhoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.coordinatorPhoneNumber
                  ? errors.coordinatorPhoneNumber
                  : ""
              }
              error={
                touched.coordinatorPhoneNumber &&
                Boolean(errors.coordinatorPhoneNumber)
              }
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={8}
            sm={9}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <InputLabel margin="dense">
              Is your school able to accomodate the tools necessary to support
              connecting your students to remote volunteers (E.g., Classroom
              cameras, conference speaker, microphones and individual student
              headset)?
            </InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={4}
            sm={3}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <TextField
              select
              id="yesno"
              value={values.yesno}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.yesno ? errors.yesno : ""}
              error={touched.yesno && Boolean(errors.yesno)}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {yes_or_no.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={8}
            sm={9}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <InputLabel margin="dense">
              What time are you proposing for the FreecodingSchool supported
              classes?
            </InputLabel>
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={4}
            sm={3}
            xl={5}
            xs={12}
            className={classes.grid}
          >
            <TextField
              id="timingSupportedForFreecoding"
              value={values.timingSupportedForFreecoding}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.timingSupportedForFreecoding
                  ? errors.timingSupportedForFreecoding
                  : ""
              }
              error={
                touched.timingSupportedForFreecoding &&
                Boolean(errors.timingSupportedForFreecoding)
              }
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item container spacing={2} className={classes.actions}>
          <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    SUBMIT
                  </Button>
           
          </Grid>
        </Grid>
         
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
