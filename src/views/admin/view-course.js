import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'src/axios';
import { useParams } from 'react-router-dom';
import { ArrowRightAlt } from '@material-ui/icons';
//import { MdWatchLater } from "react-icons/md";
//import { BiCalendar } from "react-icons/bi";
//import { BsFillPeopleFill,BsFillCameraVideoFill } from "react-icons/bs";
//import {
//  Grid,
//  Button,
//  Container,
//  Typography
//} from '@material-ui/core';
//import typography from 'src/styles/theme/typography';
const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.background.dark,
    height: '100%',    
    width:'100%',
  },
  // primarySection:{
  //   alignItems:'center',
  //   justifyContent:'center',
  //   marginLeft:'10px',
  //   marginRight:'40px',
  //   textAlign:'left',
  //   backgroundPosition: 'right',
  //   background:"url(https://i.pinimg.com/564x/d5/53/4b/d5534b4b82f4e2f06755b97f6c11cb0a.jpg) no-repeat",
  //   backgroundSize: '50% 40%',
  // },
  // table: {
  //   minWidth: 900,
  // },
  // container:{
  //   marginTop:'0px',
  // },
  // title:{
  //   fontSize:`2.3em`,
  //   marginTop:'0.1em',
  //   color:`#6760fe`,
  //   fontWeight:'600',
  // },
  // sub:{
  //   fontSize:`1.1em `,
  //   color:`#525252`,
  //   fontWeight:`400`,
  //   marginTop:'0em',
  // },
  // subtitle:{
  //   fontSize:`1.1em `,
  //   color:`#525252`,
  //   fontWeight:`400`,
  //   marginTop:'2em',
  // },
  // desc:{
  //   fontSize:'16px',
  //   color:'#141414',
  //   marginTop:'0.1em',
  //   marginBottom:'0.5em',
  //   fontWeight:`100`,
  //   marginRight:'400px',
  // },
  // days:{
  //   fontSize:`1em `,
  //   color:`#525252`,
  //   fontWeight:`600`,
  //   display:`flex`,
  //   marginTop:'0.1em',
  //   marginLeft:'10px',
  // },
  // enrollBtn:{
  //   marginTop:80,
  //   marginRight: theme.spacing(2),
  //   padding: theme.spacing(1.5),
  //   width:180
  // }, 
  // line:{
  //   fontSize:`1em `,
  //   color:`#525252`,
  //   fontWeight:`200`,
  //   borderRight:'1px solid #727376',
  //   display:`flex`,
  //   padding:'2px',
  //   marginLeft: '5px',
  //   marginRight:'10px',
  // },
  // last:{
  //   fontSize:`1.1em `,
  //   color:`#525252`,
  //   fontWeight:`200`,
  //   display:`flex`,
  //   marginLeft: '20px',
  // },
  // span:{
  //   marginTop:'10px',
  //   display:'flex',
  //   borderBottom:'1px solid #727376',
  //   width:'300px',
  // },
  // learn:{
  //   fontSize:'16px',
  //   color:'#141414',
  //   marginTop:'0.1em',
  //   marginBottom:'0.5em',
  //   fontWeight:`600`,
  // },
  // li:{
  //   marginLeft:'30px',
  //   color:'black',
  //   fontWeight:'100px',
  // }

  course_name :{
    margin: '10px 0px 0px 10px',
    color: '#5d5fef',
    fontSize: '2em',
    fontWeight: '600',
},

course_description: {
    margin: '10px 0px 0px 10px',
    fontSize: '1em',
    opacity: '0.8',
    position: 'relative',
},

course_image: {
    position: 'relative',
    width: '100%',
    height: '80%',
    objectFit: 'fill',
    border: '1px solid #5d5fef',
    borderRadius: '10px',
    marginTop: '15px',
},

course_schedule :{
    margin: '0px 0px 0px 10px',
    fontWeight: '700',

},

course_enroll_btn: {
    backgroundColor: '#5d5fef',
    border: 'none',
    borderRadius: '3px',
    color: 'white',
    //padding: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '20px',
    //margin: '20px 10px 0px 10px'
    marginLeft:'450px',
    padding : theme.spacing(1.5),
    width:'180',
},

about_course: {
    fontSize: '24px',
    textTransform: 'uppercase',
    color: '#5d5fef',
    fontWeight: '600',
    paddingBottom: '4px',
    borderBottom: '4px solid #5d5fef',
},

heading : {
    fontSize: '20px',
    textTransform: 'uppercase',
    color: '#797984',
    fontWeight: '600',
    paddingTop: '5px',
},

point1 : {
    fontSize: '16px',
    color: '#5d5fef',
    marginTop: '10px',
    textTransform: 'none',
},

point2 : {
    fontSize: '16px',
    color: '#81818a',
    marginTop: '10px',
    textTransform: 'none',
}

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
      <>
      <div className={classes.root}>
        <div className="container">
        <div className="col">
        <div className="container p-3">
         <h1 className={classes.course_name}>{course.course_name}</h1>
         <div className="row">
           <div className="col-md-6">
             <p className={classes.course_description} style={{ letterSpacing: 1}}>
               {course.description}
             </p>
            </div>
        <div className="col-md-6">
          <img src="https://freecodingschool.org/static/images/curriculum/ComputerScience.jpg"  className={classes.course_image} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <p className={classes.course_schedule}>Instructors :  Naveen / Harshith</p>
          <p className={classes.course_schedule}>Days:{course.days}</p>
          <p className={classes.course_schedule}>Timings :{course?.start_time} - {course?.end_time}</p>
          <p className={classes.course_schedule}>Platform : Zoom</p>
        </div>
        <div className="col-md-8">
          <button type="button" className={classes.course_enroll_btn}>
            Enroll Now <ArrowRightAlt />
          </button>
        </div>
      </div>
    </div>
    <div className="container p-3 bg-white" >
      <div className={classes.about_course}>About</div>
    </div>
    <div className="container p-3 bg-white" >
      <div className={classes.heading}>WHAT YOU WILL LEARN ?
        <div>
          <ul className={classes.point1}>
            <li>Create your own basic programs with python.</li>
            <li>Gaming basics using Turtle Library.</li>
            <li>Developing important computational thinking skills, which are useful for problem solving across many disciplinary areas.</li>
            <li>Through this course you create animations using turtle on your own. But what makes this course truly unique is the teaching method.</li>
            <li>Through this course we will  engage your kids through live sessions and make them think creative and logically where they will be invloving in learning best practices of coding and logic building.</li>
            <li>We will be teaching a variety of computer science topics. This will help you quickly master the basics. And after this we will be driving into the main concepts of coding.</li>
          </ul>
        </div>
      </div>
      <div className={classes.heading}>WHO THIS COURSE IS FOR?
        <div>
          <ul className={classes.point2}>
            <li>Create your own basic programs with python.</li>
            <li>Gaming basics using Turtle Library.</li>
            <li>Developing important computational thinking skills, which are useful for problem solving across many disciplinary areas.</li>
            <li>Through this course you create animations using turtle on your own. But what makes this course truly unique is the teaching method.</li>
            <li>Through this course we will  engage your kids through live sessions and make them think creative and logically where they will be invloving in learning best practices of coding and logic building.</li>
            <li>We will be teaching a variety of computer science topics. This will help you quickly master the basics. And after this we will be driving into the main concepts of coding.</li>
          </ul>
        </div>
      </div>
      <div className={classes.heading}>COURSE CONTENT
        <div>
          <ul className={classes.point1}>
            <li>Create your own basic programs with python.</li>
            <li>Gaming basics using Turtle Library.</li>
            <li>Developing important computational thinking skills, which are useful for problem solving across many disciplinary areas.</li>
            <li>Through this course you create animations using turtle on your own. But what makes this course truly unique is the teaching method.</li>
            <li>Through this course we will  engage your kids through live sessions and make them think creative and logically where they will be invloving in learning best practices of coding and logic building.</li>
            <li>We will be teaching a variety of computer science topics. This will help you quickly master the basics. And after this we will be driving into the main concepts of coding.</li>
          </ul>
        </div>
      </div>
      <div className={classes.heading}>READINGS
        <div>
          <ul className={classes.point2}>
            <li>Create your own basic programs with python.</li>
            <li>Gaming basics using Turtle Library.</li>
          </ul>
        </div>
      </div>
      <div className={classes.heading}>REQUIREMENTS
        <div>
          <ul className={classes.point1}>
            <li>Create your own basic programs with python.</li>
            <li>Gaming basics using Turtle Library.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
        </div>
      </div>
 </>




      /*<div className={classes.root}>
          <div className={`section-5 ${classes.primarySection}`} style={{minHeight: 'calc(80vh - 40px)'}}>
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
                    ABOUT THIS COURSE
            </Typography>
            <Typography className={`${classes.desc}`} style={{ letterSpacing: 1}}>
                      {course.description}
             </Typography>       
          </div>
            <Container maxWidth="940px" className={classes.container}>      
            <Grid container spacing={3}>
              <Grid item xs={2.5} className={`${classes.line}`}>
                <BsFillPeopleFill size = '40px' color='black'/>
                  <Typography className={`${classes.days}`}>
                   Instructor: <br/> Naveen/ Harshith 
                  </Typography>  
              </Grid>
              <Grid item xs={2.5} className={`${classes.line}`}>
                <BiCalendar size = '40px' color='black'/>
                  <Typography className={`${classes.days}`}>
                    Days: <br /> Mon,Tue, wed <br/> thur, fri, sat
                  </Typography>  
              </Grid> 
              <Grid item xs={3} className={`${classes.line}`}>
                <MdWatchLater size = '40px' color='black'/>
                  <Typography className={`${classes.days}`}>
                    Timing: <br/>
                    {course?.start_time} - {course?.end_time}
                  </Typography>  
                </Grid>                 
                <Grid item xs={2} className={`${classes.last}`}>
                  <BsFillCameraVideoFill size = '40px' color='black'/>
                    <Typography className={`${classes.days}`}>
                     Platform:<br/> ZOOM
                    </Typography>  
                </Grid>          
              </Grid>  
            </Container>  
            <Grid item xs={12}>
              <Typography className={classes.subtitle} variant="h4">
              WHAT YOU WILL LEARN ?
              </Typography>
              <Typography  className={classes.li} style={{ letterSpacing: 1}}>
                <ul>
                  <li>Create animations and cool visual effects, Create smart and fun games.</li>
                  <li>Developing important computational thinking skills, which are useful for problem solving across many disciplinary areas.</li>
                  <li>Through this course we will  engage your kids through live sessions and make them think creative where they will be invloving in  creative storytelling, games, and animation.</li>
                  <li>Kids can collaborate on projects through the use of Scratch, and share their projects online.</li>
                  <li>Through this course you create games and applications on your own. But what makes this course truly unique is the teaching method.</li>
                  <li>We will be learning a variety of computer science topics. This will help you quickly master the basics. After this you will learn how to create games and write logics using various CS concepts.</li>
                </ul>
              </Typography>
              <Typography className={classes.subtitle} variant="h4">
                WHO THIS COURSE IS FOR?
              </Typography>
              <Typography className={classes.li} style={{ letterSpacing: 1}}>
                <ul>
                  <li>Kids and beginners who want to learn to code games.</li>
                  <li>Anyone new to programming who doesn't know where to start.</li>
                  <li>Absolute beginners in programming and computer science.</li>
                </ul>
              </Typography>
            </Grid>          
    </div>  */
    );
}