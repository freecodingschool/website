import React,{useEffect} from "react";
import { Container, Typography, Grid, Paper, Box,   makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
    root: {
      height: "calc(60vh)",
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(10)
    },
    rightWrapper:{
        height:250,
        padding: theme.spacing(3),
        border:'1px solid #efefef',        
    },
    title:{
        paddingTop:theme.spacing(4)
    }
  }));
const Introduction = () => {
    const classes = useStyles();    
    const  {first_name, last_name} = useSelector((store) => store.auth);
    return(
        <Container maxWidth="lg" className={classes.root}>
            <Grid container alignItems="center">
                <Grid item md={6} sm={12}>
                    <Typography variant="h1">Welcome {first_name} {last_name}</Typography>
                    <Typography variant="h4">Let's start learning, {first_name}</Typography>
                </Grid>
                <Grid item md={6} sm={12}>
                    <div className={classes.rightWrapper}>
                        <Typography variant="body1" className={classes.title}>Students Stats</Typography>
                        <Grid container  spacing={3}>
                            <Grid item md={4}>
                                <div>Rewards</div>
                                <div>0</div>
                            </Grid>
                            <Grid item md={4}>
                                <div>Courses</div>
                                <div>0</div>
                            </Grid>
                            <Grid item md={4}>
                                <div>Hours</div>
                                <div>0</div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Introduction;