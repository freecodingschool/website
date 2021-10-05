import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Carousel from "react-elastic-carousel";
import {
  Grid,
  Typography,
  Container,
  Paper,
  Box
} from '@material-ui/core';
import TextMore from 'src/components/TextMore'
// import useWindowSize from 'src/utils/WindowSize'
const useStyles = makeStyles(theme => ({
  titleWrapper:{
    alignItems:'center',
    padding:'20px 0',
    textAlign:'center'
  },
  paper:{
    minHeight:'200px',
    padding: theme.spacing(3)
  },
  eventHead:{
    display:'inline-flex',
    width:'100%'
  },
  dateBox:{
    marginRight: theme.spacing(2),
    borderRadius:4,
    height: '60px',
    fontSize:20   
  },
  
  paperTitle:{
    color:"#333",
    marginBottom: '0.5px'
  }
}));

  const Testimonials = () => {
  const classes = useStyles();
  //const width = useWindowSize();
  const showArrows = true;// width < 720;
  const data = [    
  {
    title:"Roshini",  
    role:"Parent",
    designation:"Computer Science Professor", 
    image: '/static/images/avatar_6.png',      
    desc:`Our son had  been with FreecodingSchool for a few months now and absolutely enjoys it. He has advanced basic coding skills using Scratch  Programming  quickly and is  now about to start  Python.  The instructors at FreecodingSchool are incredibly talented, kind, and so patient with the students. Its been an amazing experience for my family seeing my 10 years old son skillfully building logical blocks and games that he enjoys playing in his free time. I also like FreecodingSchool empowering message for high school students and their effort to teach high-quality coding classes for free in local schools and communities.
    Thank you FreecodingSchool!`
  },
  {
    title:"Kusuma",  
    role:"Lead Volunteer",
    image: '/static/images/testmonials/kusuma.png',   
    designation:"Software Engineer, Cognizant",  
    desc:`I’ve been volunteering here for a year now, I find this is an amazing platform to help kids learn to code. Teaching high school students to study computer science is always challenging, but the amazing co-volunteers have made my life easy by helping with well-designed course content and sharing interesting ideas to ignite kids’ curiosity. I am impressed with the team and how everyone is here motivated to help high school students in local communities by creating a fun, engaging, and safe environment. I’m happy to see students in my class using GitHub, GoogleColoborate, Online learning platforms like KhanAcademy, Coursera, and more, which are used by CS grads or professional software engineers in their daily work. I wish I had the same opportunity when I was a kid!`
  },
  {
    title:"Mohit R A", 
    role:"Student, Grade 4", 
    image: '/static/images/testmonials/mohit.png',   
    designation:"Emmaus Swiss High School",  
    desc:`FreecodingSchool opened up a new world of what I can do when I grow up. I think I can be part of this digital change and help to improve the lives of people with digital transformation across my country.`
  }
];
  const [testimonials] = useState(data);
  const breakPoints = [  
    { width: 360,itemsToShow: 1, itemsToScroll: 1, pagination: (data.length > 1) },
    { width: 762 ,itemsToShow: 2, itemToScroll: 2,pagination:(data.length > 2) },
    { width: 1024 ,itemsToShow: 3, itemToScroll: 3,pagination:(data.length > 3)},
  ];
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
        <Box component="div">
          <Carousel breakPoints={breakPoints} showArrows={showArrows} itemPadding={[6,8,8,8]}>
            {
              testimonials.map((testimonial,index) => (
                  <Paper elevation={2} className={classes.paper}  key={index}>
                      <Grid container justifyContent="space-between" alignItems="center" spacing={2} >
                        <Grid item xs={2}>
                          <img src={testimonial.image} alt={testimonial.title} width="100%"/>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="h5" className={classes.paperTitle}>{testimonial.title}</Typography>
                          <Typography variant="body2" className={classes.paperTitle}>{testimonial.role}</Typography>
                          <Typography variant="body2">{testimonial.designation}</Typography>
                           
                        </Grid>
                        <Grid item xs={10}>
                          {
                            testimonial.desc.split(" ").length &&
                            <TextMore data={testimonial} />
                          }
                        </Grid>
                      </Grid>    
                      
                  </Paper>
              ))
            } 
           </Carousel>
        </Box>
    </Container>
    </div>
  );
};

export default Testimonials;
