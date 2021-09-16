import React, { useState, Fragment,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Paper, Box } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import PanToolIcon from "@material-ui/icons/PanTool";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Carousel from "react-elastic-carousel";
import Course from 'src/components/Course';
import axios from 'src/axios';
const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    alignItems: "center",
    textAlign: "center",
    paddingBottom: "20px",
  },
  primarySection: {
    backgroundColor: "#fff",
  },
  media: {
    margin: "0 auto",
  },
  title: {
    paddingTop: "20px",
    paddingLeft: "20px",
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
  },
  studentCard: {
    padding: 0,
  },
  voluteerCard: {
    padding: theme.spacing(2),
  },
  imgWrapper: {
    textAlign: "center",
  },
  image: {
    width: "90%",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      width: "calc(95%)",
    },
  },
}));
const item = [
  {
    index: 1,
    title: "STUDENTS",
    desc: " Become a FreecodingSchool Student to learn how to code.",
  },
  {
    index: 2,
    title: "VOLUNTEERS",
    desc: " Make an impact while continuing your studies/day job.",
  },
  {
    index: 3,
    title: "SCHOOLS",
    desc: " Bring computer science to your school and community.",
  },
];
const Courses = () => {
  const classes = useStyles();
  const [courses,setCourses] = useState([]);
  const showArrows = false;
  const [cards] = useState(item);  
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
        <div className={`section-2`}>
        <Grid
          className={`${classes.gridContainer} ${classes.gridItem}`}
          container
          alignItems="center"
          justify="center"
          spacing={5}
        >
          <Grid item md={7} sm={12} className={classes.imgWrapper}>
            <img
              src="/static/images/course-teaching.png"
              className={classes.image}
              alt="course teaching"
            />
          </Grid>
          <Grid item md={5} sm={12}>
            <Grid
              container
              direction="column"
              justify="space-between"
              spacing={2}
            >
              {cards.map((card, index) => (
                <Grid item md={12} key={index}>
                  <Paper
                    elevation={3}
                    className={`${classes.studentCard} ${
                      index === 1 ? classes.primaryBg : "secondary-bg"
                    } ${classes.voluteerCard}`}
                  >
                    <Grid container>
                      <Grid item xs={2}>
                        .
                        {index === 0 ? (
                          <SchoolIcon style={{ fontSize: 32 }} />
                        ) : index === 1 ? (
                          <PanToolIcon style={{ fontSize: 32 }} />
                        ) : (
                          <LocationCityIcon style={{ fontSize: 32 }} />
                        )}
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="h4">{card.title}</Typography>
                        <Typography
                          variant="subtitle1"
                          className={`secondary-color section-4 ${
                            index === 1 ? classes.primaryBg : "desc"
                          }`}
                        >
                          {card.desc}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        </div>
      </Container>
    </Fragment>
  );
};
export default Courses;
