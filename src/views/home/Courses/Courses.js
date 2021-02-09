import React,{useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Avatar,CardHeader,CardContent ,CardActions} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import python from './images/img-python.png';
import scratch from './images/img-scratch.jpg';
import HTML from './images/img-html.png';
import Basics from './images/img-basics.jpg';

const useStyles = makeStyles((theme) => ({
  
  gridContainer: {
     padding:'50px',
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
  const tilte = '';
  const data = [{
    index:1,
    title:"Python",
    desc:"Learn the most trending language Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
    image:python
  },
{
  index:2,
  title:"Scratch",
  desc:"Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
  image:scratch,
},
{
  index:3,
  title:"HTML",
  desc:"Help you make some cool websites Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
  image:HTML,
},
{
  index:4,
  title:"Basics",
  desc:"Get involved into some interesting classes one per week Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
  image:Basics,
},
];


  const [courses] = useState(data);
  return (
    <Fragment>
      <div className={classes.root}>
        <Typography className={classes.title} variant="h4"> 
            Popular Courses
        </Typography>     
        <Grid className={classes.gridContainer} container spacing={3} >   
          
          {
          
            courses.map((course,index) =>(    
            <Grid item xs={12} sm={4} md={3}   key={index} >
              <Card className={classes.Card1} variant="elevation" >
              <CardHeader
                  avatar={
                   <Avatar aria-label="recipe" className={classes.avatar}>
                    {/* <img url={course.image} /> */}
                    {course.title.substr(0,1).toUpperCase()}
                    </Avatar>
                  }
                  title={course.title}
                /> 
                <CardContent>
                    <Typography variant="body2" color="inherit">
                        {course.desc}
                    </Typography>
                </CardContent>    
                <CardActions>
                      <Button variant="contained" color="primary" href="#contained-buttons">
                        Learn More
                      </Button>
                </CardActions>            
              </Card>
              
                  
          </Grid>
                ))
          }
        
        
    </Grid>
    </div>
    </Fragment>
  );
}
export default Courses;