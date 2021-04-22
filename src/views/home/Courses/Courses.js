import React,{useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography,Grid,Button,Paper, Box} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  titleWrapper:{
    alignItems:'center',
    textAlign:'center',
    paddingBottom:'20px'
  },
  primarySection:{
    backgroundColor:'#fff'
  },
  media: {
    margin:'0 auto'
  },
  title:{
    paddingTop: '20px',
    paddingLeft:'20px',
  },
  courseWrapper:{
    display: 'flex',
    width: '100%',
    flexDirection: 'row'
  },
  courseBody:{
    height:110,
    padding:8
  },
  courseCard:{
    margin:8,
    padding:8,
    color:'#2F2F2F',
    width:'calc(25% - 8px)',
    [theme.breakpoints.between("sm", "xs")]: {
      width:'calc(100%)',
    }
  },  
  courseCardHeader:{
    padding:theme.spacing(1)
  },
  voluteerCard:{
    padding:theme.spacing(2)
  },
  imgWrapper:{
    textAlign:'center'
  }
}));
const Courses = () => {
  const classes = useStyles();
  const data = [{
    title:"Introduction to Computer Science",
    image:'./static/images/courses/img-python.png'
  },
  {
    title:"Introduction to Scratch Programming",
    image:'./static/images/courses/img-scratch.jpg'
  },
  {
    title:"Introduction to Python",
    image:'./static/images/courses/img-html.png'
  },
  {
    title:"Mathematics for Computer Science",
    image:'./static/images/courses/img-math.jpg'
  },{
    title:'Communication Skills',
    image:'./static/images/courses/kidoo.jpg'
  }
];
const item = [{
    index:1,
    title:"STUDENTS",
    desc:" Become a FreecodingSchool Student to learn how to code.",
    
  },
{
  index:2,
  title:"VOLUNTEERS",
  desc:" Make an impact while continuing your studies/day job.",
  
},
{
  index:3,
  title:"SCHOOLS",
  desc:" Bring computer science to your school and community.",
  
}];

const [cards] = useState(item);
  const [courses] = useState(data);
  return (
    <Fragment>
      <Container maxWidth="lg" style={{minHeight: 'calc(100vh - 65px)'}}>
        <div className={`section-5 ${classes.primarySection}`}>
            <Typography className={`section-title`} variant="h2">
              Popular Courses
            </Typography>
            <Box component="div" m={1} className={`${classes.courseWrapper}`}>
              {
                courses.map((course,index) =>(
                  <Paper elevation={3} key={index} className={`secondary-bg ${classes.courseCard}`}>    
                      <div className={`${classes.courseCardHeader}`}>                        
                        <img src={course.image} width="50" alt={course.title}/>
                      </div> 
                      <div className={classes.courseBody}>
                        <Typography variant="body2" color="inherit">
                            {course.title}
                        </Typography>                      
                      </div>         
                      <Button href="#contained-buttons" color="inherit">
                        Course
                      </Button>
                  </Paper>
                ))
              }
            </Box>
        </div>
        <div  className={`section-2`}>        
        <Grid className={`${classes.gridContainer} ${classes.gridItem}`}  container
             direction="row" alignItems="center" justify="center"> 
            <Grid item md={7} sm={12}  className={classes.imgWrapper}>            
              <img src="./static/images/course-teaching.png" width="70%" alt="course teaching"/>          
            </Grid>
            <Grid item md={5} sm={12} container direction="column" justify="space-between" spacing={2}>        
              {cards.map((card,index) =>(    
                <Grid item md={12} key={index} 
                  direction="column" justify="center" spacing={1}>
                    <Paper elevation={3} className={`secondary-bg ${classes.voluteerCard}`}>
                        <Grid container>
                          <Grid item xs={2}>
                            <SchoolIcon/>   
                          </Grid>
                          <Grid item xs={10}>
                            <Typography variant="h4">
                                {card.title}
                            </Typography>
                            <Typography variant="body1" className={`secondary-color section-4 desc`}>
                                {card.desc}
                            </Typography>
                          </Grid>
                        </Grid>
                    </Paper>
                </Grid>
              )) }
            </Grid>
        </Grid>
  </div>
      </Container>        
      
    </Fragment>
  );
}
export default Courses;