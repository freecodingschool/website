import React,{useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography,Grid,Button,Paper, Box} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import PanToolIcon from '@material-ui/icons/PanTool';
import LocationCityIcon from '@material-ui/icons/LocationCity';
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
  primaryBg:{
    backgroundColor:theme.palette.primary.main,
    color:'#fff !important'
  },
  courseWrapper:{
    [theme.breakpoints.up("sm")]: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row'
    }
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
    [theme.breakpoints.down("md")]: {
      width:'calc(100%)',
    }
  },  
  studentCard:{
    padding:0
  },
  courseCardHeader:{
    padding:theme.spacing(1)
  },
  voluteerCard:{
    padding:theme.spacing(2)
  },
  imgWrapper:{
    textAlign:'center'
  },
  image:{
    width:'100%',
    [theme.breakpoints.down("md")]: {
      width:'calc(100%)',
    }
  }
}));
const Courses = () => {
  const classes = useStyles();
  const data = [{
    title:"Introduction to Computer Science",
    image:'./static/images/courses/icon-code.png'
  },
  {
    title:"Introduction to Scratch Programming",
    image:'./static/images/courses/computer-programming.png'
  },
  {
    title:"Introduction to Python",
    image:'./static/images/courses/icon-python.png'
  },
  {
    title:"Mathematics for Computer Science",
    image:'./static/images/courses/icon-mathworks.png'
  },{
    title:'Communication Skills',
    image:'./static/images/courses/icon-communication.png'
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
                  <Paper elevation={3} key={index} className={`${classes.courseCard} ${index === 1 ? classes.primaryBg : 'secondary-bg'}`}>    
                      <div className={`${classes.courseCardHeader}`}>                        
                        <img src={course.image} width="40" alt={course.title}/>
                      </div> 
                      <div className={classes.courseBody}>
                        <Typography variant="subtitle1" color="inherit">
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
             alignItems="center" justify="center" spacing={5}> 
            <Grid item md={6} sm={12}  className={classes.imgWrapper}>            
              <img src="./static/images/course-teaching.png" className={classes.image} alt="course teaching"/>          
            </Grid>
            <Grid item md={6} sm={12}>   
              <Grid container direction="column" justify="space-between" spacing={2}>     
                  {
                    cards.map((card,index) =>(    
                      <Grid item md={10} key={index}>
                          <Paper elevation={3}  className={`${classes.studentCard} ${index === 1 ? classes.primaryBg : 'secondary-bg'} ${classes.voluteerCard}`}>
                              <Grid container>
                                <Grid item xs={2}>.
                                  {(index === 0)? <SchoolIcon style={{ fontSize: 32 }} />:(index === 1)?<PanToolIcon style={{ fontSize: 32 }} />:<LocationCityIcon style={{ fontSize: 32 }} />}
                                </Grid>
                                <Grid item xs={10}>
                                  <Typography variant="h4">
                                      {card.title}
                                  </Typography>
                                  <Typography variant="subtitle1" className={`secondary-color section-4 ${index === 1 ? classes.primaryBg : 'desc'}`}>
                                      {card.desc}
                                  </Typography>
                                </Grid>
                              </Grid>
                          </Paper>
                      </Grid>
                    )) 
                  }
                </Grid>
            </Grid>
        </Grid>
  </div>
      </Container>        
      
    </Fragment>
  );
}
export default Courses;