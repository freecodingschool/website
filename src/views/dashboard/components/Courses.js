import React, { useState, Fragment,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import Course from 'src/components/Course';
import axios from 'src/axios';
import { useSelector } from "react-redux";
import useWindowSize from 'src/utils/WindowSize'
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
    const {courses} = useSelector(state => state.home);
    const width = useWindowSize();
    const showArrows =  width < 720;
    const breakPoints = [
      {
        width: 360,
        itemsToShow: 1,
        itemsToScroll: 1,
        pagination: courses?.length > 1,
      },
      {
        width: 762,
        itemsToShow: 4,
        itemToScroll: 4,
        pagination: courses?.length > 4,
      },
      {
        width: 1024,
        itemsToShow: 5,
        itemToScroll: 5,
        pagination: courses?.length > 4,
      },
    ]; 
    return (
        <Fragment>
            <Container maxWidth="lg" style={{ minHeight: "calc(100vh - 65px)" }}>
            {courses?.length > 0 && (
            <div className={`section-5 ${classes.primarySection}`}>
                <Typography className={`section-title`} variant="h2">
                Popular Courses
                </Typography>
                <Box component="div" m={1} className={`${classes.courseWrapper}`}>
                <Carousel breakPoints={breakPoints} showArrows={showArrows}  itemPadding={[6,8,8,8]}>
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