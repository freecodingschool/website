import React,{useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Avatar,CardHeader,CardContent ,
  CardActions,Container,Typography,Grid,
  Button} from '@material-ui/core';
import python from './images/img-python.png';
import scratch from './images/img-scratch.jpg';
import HTML from './images/img-html.png';
import Basics from './images/img-basics.jpg';

const useStyles = makeStyles((theme) => ({
  titleWrapper:{
    alignItems:'center',
    textAlign:'center',
    paddingBottom:'20px'
  },
  primarySection:{
    backgroundColor:'#fff'
  },
  Card1:{
    minWidth:200,
  },
  media: {
    height:0,
    paddingTop: '56.25%', // 16:9

  },
  title:{
    paddingTop: '20px',
    paddingLeft:'20px',
  },

}));

 const Courses = () => {
  const classes = useStyles();
  const data = [{
    title:"Python",
    desc:"Introduction to Computer Science",
    image:python
  },
{
  title:"Scratch",
  desc:"Introduction to Scratch Programming",
  image:scratch,
},
{
  title:"HTML",
  desc:"Introduction to Python",
  image:HTML,
},
{
  title:"Basics",
  desc:"Mathematics for Computer Science",
  image:Basics,
},
//  {
//    title:"Basics",
//    desc:"Communication Skills",
//    image:Basics,
//  }
];
  const [courses] = useState(data);
  return (
    <Fragment>
      <div className={`section-5 ${classes.primarySection}`} style={{minHeight: 'calc(100vh - 65px)'}}>
        <Container maxWidth="lg">
          <Typography className={`section-title`} variant="h2">
            Popular Courses
          </Typography>
          <Grid className={classes.gridContainer} container direction="row" justify="space-evenly" alignItems="center"  spacing={2}>
            {
              courses.map((course,index) =>(
                <Grid item sm={4} md={3} key={index} >
                  <Card className={classes.Card1} variant="elevation" >
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          {course.title.substr(0,1).toUpperCase()}
                          </Avatar>
                        }
                      />
                      <CardContent>
                          <Typography variant="body2" color="inherit">
                              {course.desc}
                          </Typography>
                      </CardContent>
                      <CardActions>
                            <Button variant="contained" color="primary" href="#contained-buttons">
                              Course
                            </Button>
                      </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
export default Courses;