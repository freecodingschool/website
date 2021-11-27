import React, { useState } from 'react'
import Page from 'src/components/Page';
import {
    Avatar, Box, Button, Card, CardHeader, CardContent, Divider, Grid, TextField
} from '@material-ui/core';

const states = [
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

const AccountProfileDetails = (props) => {

    const [values, setValues] = useState({
        firstName: 'Akash',
        lastName: 'Soni',
        email: 'akash.soni.3101@gmail.com',
        phone: '7400296867',
        state: 'Maharashtra',
        country: 'India',
    });

    
    const handdleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]:event.target.value
        });
    };

    return (
        <form autoComplete="off" noValidate {...props}>
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
                            name="firstName"
                            onChange={handdleChange}
                            required
                            value={values.firstName}
                            variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            helperText="Please specify the last name" 
                            label="Last name"
                            name="lastName"
                            onChange={handdleChange}
                            required
                            value={values.lastName}
                            variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            label="Email Address"
                            name="email"
                            onChange={handdleChange}
                            required
                            value={values.email}
                            variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            label="Phone Number"
                            name="phone"
                            onChange={handdleChange}
                            required
                            value={values.phone}
                            variant="outlined" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            label="Select State"
                            name="state"
                            onChange={handdleChange}
                            required
                            select
                            SelectProps={{native:true}}
                            value={values.state}
                            variant="outlined" >
                                {
                                    states.map((option) => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))
                                }
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            fullWidth 
                            label="Country"
                            name="country"
                            onChange={handdleChange}
                            required
                            value={values.country}
                            variant="outlined" />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box sx={{display: 'flex', justifyContent: 'flex-end', p:2}}>
                    <Button color="primary" variant="contained">Save Details</Button>
                </Box>
            </Card>
        </form>
    );
}

export default AccountProfileDetails;
