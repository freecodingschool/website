import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'src/axios';
import { useParams } from 'react-router-dom'
import { ArrowRightAlt } from '@material-ui/icons';
import { GiSandsOfTime,GiWatch } from "react-icons/gi";
import { FaGlobe } from 'react-icons/fa';
import {
  Grid,
  Button,
  Container,
  Typography
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.background.dark,
    height: '100%',    
    width:'100%',
  },
  primarySection:{
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'10px',
    textAlign:'left',
    backgroundPosition: 'right',
    background:"url(https://png.pngtree.com/png-vector/20200610/ourlarge/pngtree-work-from-home-with-girl-working-with-laptop-computer-for-business-png-image_2225853.jpg) no-repeat",
    backgroundSize: '45% 80%',
  },
  table: {
    minWidth: 900,
  },
  title:{
    fontSize:`2.3em`,
    marginTop:'0.1em',
    color:`#6760fe`,
    fontWeight:'600',
  },
  sub:{
    fontSize:`1.1em `,
    color:`#525252`,
    fontWeight:`400`,
    marginTop:'0em',
  },
  subtitle:{
    fontSize:`1.1em `,
    color:`#525252`,
    fontWeight:`400`,
    marginTop:'1em',
  },
  desc:{
    fontSize:'20px',
    color:'#141414',
    marginTop:'0.1em',
    marginBottom:'0.5em',
    fontWeight:`600`,
    marginRight:'400px',
  },
  days:{
    fontSize:`1em `,
    color:`#525252`,
    fontWeight:`600`,
    display:`flex`,
    marginTop:'0.1em',
    marginLeft:'10px',
  },
  enrollBtn:{
    marginTop:80,
    marginRight: theme.spacing(2),
    padding: theme.spacing(1.5),
    width:180
  }, 
  line:{
    fontSize:`1.1em `,
    color:`#525252`,
    fontWeight:`400`,
    borderRight:'1px solid #727376',
    display:`flex`,
    padding:'2px',
    marginLeft: '20px',
    paddingLeft:'40px',
  },
  last:{
    fontSize:`1.1em `,
    color:`#525252`,
    fontWeight:`400`,
    marginRight:'40px',
    display:`flex`,
    marginLeft: '40px',
  },
  span:{
    marginTop:'10px',
    display:'flex',
    borderBottom:'1px solid #727376',
    width:'300px',
  },
}));
export default function viewCourse() {
  const classes = useStyles();
  const [course,setCourse] = useState({});  
  const { courseId } = useParams()
  useEffect(() =>{
    getCourses(); 
  },[])
  const getCourses = async() => {
    const response = await axios({
      method:"GET",
      url:`/course/${courseId}`,
    })      
    response.data.data.days = response.data.data.days.join();
    setCourse(response.data.data) 
  }
    return (
      <div className={classes.root}>
          <div className={`section-5 ${classes.primarySection}`} style={{minHeight: 'calc(100vh - 65px)'}}>
            <Typography className={`${classes.title}`} variant="h5">
              {course.course_name}
            </Typography>
            <Typography className={classes.sub}>
            Learn new skills with a flexible online course
            </Typography>
            <Button variant="contained" color="primary" size="large" className={classes.enrollBtn} target="_blank">
                      Enroll now <ArrowRightAlt />
            </Button> 
            <span className={classes.span}/>
            <Typography className={classes.subtitle} variant="h4">
                    About this course
            </Typography>
            <Typography className={`${classes.desc}`}>
                      {course.description}
             </Typography>       
          </div>
            <Container maxWidth="940px">
                <Grid container spacing={3}>
                  <Grid item xs={3} className={`${classes.line}`}>
                    <GiSandsOfTime size = '50px' />
                    <Typography className={`${classes.days}`}>
                      Days | <br /> 
                    </Typography>  
                  </Grid> 
                  <Grid item xs={4} className={`${classes.line}`}>
                    <GiWatch size = '50px' />
                    <Typography className={`${classes.days}`}>
                      Timing | <br/>
                      {course?.start_time} - {course?.end_time}
                    </Typography>  
                  </Grid>                 
                  <Grid item xs={3} className={`${classes.last}`}>
                    <FaGlobe size = '50px' />
                    <Typography className={`${classes.days}`}>
                     100% online: <br/> Learn at your own place 
                    </Typography>  
                  </Grid>          
              </Grid>  
            </Container>          
        </div>  
    );
}