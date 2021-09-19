import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Grid,Typography,Paper,Container} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  subtitle:{
    margin: theme.spacing(0)
  },
  titleWrapper:{
    padding:4% 0,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',  
  },
  paperWrapper:{
    padding: `${theme.spacing(2)}px`,
    textAlign:'left'
  },
  imgWidth:{
    width:'100%'
  },
  paper:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    minHeight:'220px',
    borderRadius:20,
     background: 'inherit'
  }, 
  paperTitle:{
    textAlign:'left',
    color:'#000',
    marginBottom:`${theme.spacing(1)}px`
  }
}));
const OurCommunities = () => {
  const classes = useStyles();
  const data = [{
    title:'Volunteers',
    desc:"Volunteers with a strong background in computer science and programming build sustainable CS courses at their local school and community. We welcome both computer science graduate students and Tech professionals, and Academic professionals to help foster the next generation of innovators and programmers.",
    image:'/static/images/communities/volunteer.png'
    },
  {
    title:'Teachers and Schools',
    desc:"We help high schools to build CS courses for free. FreecodingSchool works with teachers and students at their school to offer two levels of engagement based on each school’s requirements: co-teach model, technical course content support",
    image:'/static/images/communities/teacher.png',
  },
  {
    title:'Students and Parents',
    desc:"Students who are interested in bringing CS classes to their school can become advocates to create change by sharing their interest with teachers, administrators and parents, and introducing them to the FreecodingSchool.",
    image:'/static/images/communities/students.png'
  }];
  const [news] = useState(data);  
  return (
    <div className={`section-5 secondary-bg ${classes.primarySection}`} style={{minHeight: 'calc(100vh - 65px)'}}>
      <Container maxWidth="lg">       
        <div className={classes.titleWrapper}>
            <Typography className={`section-title`} variant="h2">
                Bring Computer Science to your local schools and community
            </Typography>
            <Typography className={`secondary-color section-2 ${classes.subtitle}`} variant="h5">
            FreecodingSchool is powered by collaboration of students, teachers and technology professionals.
            </Typography>
        </div>
        <Grid container direction="row" justifyContent="space-evenly" spacing={6}>    
            {                
              news.map((newsObj,index) =>(    
                <Grid item xs={12} md={4} key={index} >
                    <Paper className={classes.paper} elevation={0} >
                      <img src={newsObj.image} className={classes.imgWidth} alt={newsObj.image} />
                      <div className={classes.paperWrapper}>
                        <Typography variant="h4" className={classes.paperTitle}>{newsObj.title}</Typography>
                        <Typography variant="body2" className={`desc secondary-color`}>{newsObj.desc}</Typography>
                      </div>
                  </Paper>
                </Grid>
              ))
            }
        </Grid>
      </Container>
    </div>    
  );
};
export default OurCommunities;
