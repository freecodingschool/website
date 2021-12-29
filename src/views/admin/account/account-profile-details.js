import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'src/axios';
import Page from 'src/components/Page';
import {
Avatar, 
Box, 
Button, 
Card, 
CardHeader, 
CardContent, 
Divider, 
Grid, 
TextField, 
makeStyles
} from '@material-ui/core';
import { useDispatch } from "react-redux";

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
    }
  }));
/*const states = [
    {
        value: 'maharashtra',
        label: 'Maharashtra',
    },
    {
        value: 'chennai',
        label: 'Chennai',
    },
    {
        value: 'varanasi',
        label: 'Varanasi',
    },
];
*/
//const AccountProfileDetails = (props) => {

   /* const [values, setValues] = useState({
        firstName: 'Akash',
        lastName: 'Soni',
        email: 'akash.soni.3101@gmail.com',
        phone: '7400296867',
        state: 'Maharashtra',
        country: 'India',
    });*/
    const states = ["Andhra Pradesh", "Tamil Nadu", "Kerala", "Maharastra"]
    const countries = ["India","USA","France"]
    const UserEdit = () => {
        const classes = useStyles();
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const [user, setUser] = useState({});
        //const { userId } = useParams()
        useEffect(() =>{
            getUser();
        },[])
        const getUser = async() => {
            const response = await axios({
                
                method:"GET",
                url:`/user`,
            })
            console.log(response)
            setUser(response.data.data)
        }
        const initialValues = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            state: '',
            country: '',
        };
        const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

        const validationSchema = Yup.object().shape({
            first_name: Yup.string().max(255).required("Please give your FirstName"),
            last_name: Yup.string().max("Please enter your lastName"),
            email: Yup.string().email('Invalid email format').required('Required'),
            phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
            state: Yup.array().of(Yup.string()).required("Please select your state"),
            country: Yup.array().of(Yup.string()).required("Please select your country")
        });

        const EditUser = async(values, {setSubmitting}) => {


            const data = new FormData();
            data.append("file", values.file);
            data.append("firstName", values.first_name);
            data.append("lastName", values.last_name);
            data.append("email", values.email);
            data.append("phone", values.phone);
            data.append("state",values.states.join());
            data.append("country",values.countries.join());

            console.log(values.file)
            console.log(data)
            setSubmitting(true)
            await axios({
                method:"post",
                url:"/user",
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data
            })
            navigate('/user');
        }

    

  /*  
    const handdleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]:event.target.value
        });
    };*/

    return (
        <Page
        className={classes.root}
        title="Freecoding School - Edit Profile"
      >
        <Formik
           /* enableReinitialize={true}/* initialValues={this.props.user}*/
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={EditUser}
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
        <form /*autoComplete="off" noValidate {...props}*/ onSubmit={handleSubmit}>
            <Card>
                <CardHeader subheader="The information can be edited." title="Profile" />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            helperText="Please specify the first name" 
                            label="First name"
                            name="first_name"
                            onChange={handleChange}
                            required
                            value={values.first_name}
                            variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            helperText="Please specify the last name" 
                            label="Last name"
                            name="last_name"
                            onChange={handleChange}
                            required
                            value={values.last_name}
                            variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            label="Email Address"
                            name="email"
                            onChange={handleChange}
                            required
                            value={values.email}
                            variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            label="Phone Number"
                            name="phone"
                            onChange={handleChange}
                            required
                            value={values.phone}
                            variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            label="Select State"
                            name="state"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{native:true}}
                            value={values.state}
                            variant="outlined" >
                                {
                                    states.map((index,option) => (
                                        <option key={index} value={option.value}>{option}</option>
                                    ))
                                }
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            label=" Select Country"
                            name="country"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{native:true}}
                            value={values.country}
                            variant="outlined" > 
                            {
                                countries.map((index,option) => (
                                    <option key={index} value={option.value}>{option}</option>
                                ))
                            }
                            </TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box sx={{display: 'flex', justifyContent: 'flex-end', p:2}}>
                    <Button color="primary" variant="contained" type="submit" disabled={isSubmitting}>Save Details</Button>
                </Box>
            </Card>
        </form>
            )}
            </Formik>
        </Page>
    );
}

export default UserEdit;
