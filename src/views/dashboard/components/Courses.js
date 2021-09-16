import React, { useState, Fragment,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Paper, Box } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import Course from 'src/components/Course';
import axios from 'src/axios';
const useStyles = makeStyles((theme) => ({
    primarySection: {
    //   backgroundColor: "#fff",
    },
    primaryBg: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff !important",
    },
    courseWrapper: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
      },
    }
  }));
const Courses = () => {
    const classes = useStyles();
    const [courses,setCourses] = useState([]);
    const showArrows = false;
    const breakPoints = [
        {
          width: 360,
          itemsToShow: 1,
          itemsToScroll: 1,
          pagination: false,
        },
        {
          width: 762,
          itemsToShow: 4,
          itemToScroll: 4,
          pagination: false,
        },
        {
          width: 1024,
          itemsToShow: 5,
          itemToScroll: 5,
          pagination: false,
        },
    ];
    const getCourses = async() => {
    try{
        const {data} = await axios({
        method:"get",
        url:"/course",        
        params:{
          active:true
        }
        })
        setCourses(data.data);
        breakPoints[0].pagination = data.data.length > 1;
        breakPoints[1].pagination = data.data.length > 4;
        breakPoints[2].pagination = data.data.length > 4;
    }catch(e){
        setCourses([]);
    }
    };
    useEffect(() => {
    getCourses()
    },[])
    return (
        <Fragment>
            <Container maxWidth="lg" style={{ minHeight: "calc(100vh - 65px)" }}>
            {courses?.length > 0 && (
            <div className={`section-5 ${classes.primarySection}`}>
                <Typography className={`section-title`} variant="h2">
                Popular Courses
                </Typography>
                <Box component="div" m={1} className={`${classes.courseWrapper}`}>
                <Carousel breakPoints={breakPoints} showArrows={showArrows}>
                    {courses.map((course, index) => (
                    <Course course={course} key={index} isPrimary={index ===1} />
                    ))}
                </Carousel>
                </Box>
            </div>)
            }
            </Container>
        </Fragment>
    );
};
export default Courses;