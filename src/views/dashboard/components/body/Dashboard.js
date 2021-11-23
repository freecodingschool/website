import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
      backgroundColor: theme.palette.background.dark,
      height: '100%',    
      padding:theme.spacing(2)
    },
    
  }));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.wrapper}>
                <h1>Dashboard</h1>
            </Box>
        </div>
    )
}
