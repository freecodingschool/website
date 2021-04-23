import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Container,
  Paper
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  titleWrapper:{
    alignItems:'center',
    padding:'20px 0',
    textAlign:'center'
  },
  paper:{
    minHeight:'200px',
    padding: theme.spacing(3),
    borderRadius: 20,
    boxShadow:'0px 0px 77px #0000000F'
  },
  eventHead:{
    display:'inline-flex',
    width:'100%'
  },
  dateBox:{
    // padding:'6px 16px', 
     marginRight: theme.spacing(2),
    borderRadius:4,
    // backgroundColor:'#d5d8fc',
    height: '60px',
    fontSize:20   
  },
  description:{
    maxHeight:140,
    overflow:'hidden'
  },
  paperTitle:{
    color:"#333",
    marginBottom: '0.5px',
    marginTop: theme.spacing(2)
  }
}));

  const Testimonials = () => {
  const classes = useStyles();
  const data = [    
  {
    title:"Roshini",  
    designation:"Computer Science Professor", 
    image: './static/images/avatars/avatar_2.png',      
    desc:`Our son had  been with FreecodingSchool for a few months now and absolutely enjoys it. He has advanced basic coding skills using Scratch  Programming  quickly and is  now about to start  Python.  The instructors at FreecodingSchool are incredibly talented, kind, and so patient with the students. Its been an amazing experience for my family seeing my 10 years old son skillfully building logical blocks and games that he enjoys playing in his free time. I also like FreecodingSchool empowering message for high school students and their effort to teach high-quality coding classes for free in local schools and communities.
    Thank you FreecodingSchool!`
  },
  {
    title:"Kusuma",  
    image: './static/images/testmonials/kusuma.png',   
    designation:"Software Engineer at Cognizant",  
    desc:`I’ve been volunteering here for a year now, I find this is an amazing platform to help kids learn to code. Teaching high school students to study computer science is always challenging, but the amazing co-volunteers have made my life easy by helping with well-designed course content and sharing interesting ideas to ignite kids’ curiosity. I am impressed with the team and how everyone is here motivated to help high school students in local communities by creating a fun, engaging, and safe environment. I’m happy to see students in my class using GitHub, GoogleColoborate, Online learning platforms like KhanAcademy, Coursera, and more, which are used by CS grads or professional software engineers in their daily work. I wish I had the same opportunity when I was a kid!`
  },
  {
    title:"Rakhib",  
    image: './static/images/testmonials/mohit.png',   
    designation:"Student, Grade 5",  
    desc:`FreecodingSchool opened up a new world of what I can do when I grow up. I think I can be part of this digital change and help to improve the lives of people with digital transformation across my country.`
  }
];
  
  
  const [testimonials] = useState(data);
  return (
    <div className={`section-5`} style={{minHeight: 'calc(100vh - 65px)'}}>
      <Container maxWidth="lg">       
        <div className={classes.titleWrapper}>
            <Typography  className={`section-title`} variant="h2">
            Testimonial
            </Typography>
            <Typography className={`secondary-color section-2 desc ${classes.subtitle}`} variant="h5">
            FreecodingSchool provides a network of volunteers from top companies and universities to help high schools create sustainable CS and digital education programs in their local community. We connect claasroom teachers with our generous volunteers, through remote and classroom learning.
            </Typography>
        </div>
        <Grid container direction="row" justify="space-between" spacing={6}>
          {
            testimonials.map((testimonial,index) => (
              <Grid item lg={4} xs={12} key={index}>
                <Paper elevation={1} className={classes.paper}>
                  {/* <div className={classes.eventHead}>
                    <div className={classes.dateBox}>
                      <img src={testimonial.image} width="100%"/>
                    </div>
                    <div> */}
                      <Typography variant="h4" className={classes.paperTitle}>{testimonial.title}</Typography>
                      <Typography variant="h6">{testimonial.designation}</Typography>
                    {/* </div>
                  </div>                  */}
                  <Typography  variant="body2" className={`desc secondary-color ${classes.description}`}>{testimonial.desc}</Typography>
                </Paper>
              </Grid>
            ))
          } 
       </Grid>
    </Container>
    </div>
  );
};

export default Testimonials;
