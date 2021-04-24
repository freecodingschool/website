import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Grid,Typography,Paper,Container} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  title:{
    lineHeight:'1.5em'
  },
  primarySection:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  },
  paperWrapper:{
    color:'#000',
    padding: theme.spacing(2),
  },
  imgWrapper:{
    position:'relative',
    maxHeight: 200,
    overflow: 'hidden'
  },
  imgWidth:{
    width:'100%',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  paper:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    minHeight:'415px',
    boxShadow:'0px 6px 42px #0000001A',
    borderRadius:20,
    marginTop:'25px'
  },
  paperTitle:{
    textAlign:'left',
    color:'#000',
    marginBottom: theme.spacing(2)
  },
  description:{
    textAlign:'left'
  }
}));
const Curriculum = () => {
  const classes = useStyles();
  const data = [{
    image: './static/images/curriculum/ComputerScience.jpg',    
    title:'Computer Science',
    desc:"We offer a full computer science curriculum for students ages 8-18. Our youngest students start with Scratch Programming, and our core curriculum in covers up to intermediate-level topics data structures and algorithms.",
  
  },
{
  image: './static/images/curriculum/Mathematics.jpeg',    
  title:'Mathematics',
  desc:"Our Mathematics course is designed for students to understand the power of critical thinking and give them part of the mathematical foundations required for computer science courses.",
 },
{
  image: './static/images/curriculum/Communication.jpg',    
  title:'Communication Skills',
  desc:"Communication Skills at FreecodingSchool is crafted around creating meaningful projects that help students learn how to read, write, and talk clearly.",
 }];
  const [news] = useState(data);  
  return (
    <div className={`section-5 secondary-bg ${classes.primarySection}`} style={{minHeight: 'calc(100vh - 65px)'}}>
      <Container maxWidth="lg">       
          <Typography className={`section-title`} variant="h2">
            Curriculum
          </Typography>           
          <Grid item xs={12} container justify="space-between" spacing={6}>    
            {                
              news.map((newsObj,index) =>(    
                <Grid item xs={12} md={4} key={index} >
                    <Paper className={classes.paper} elevation={0}>
                      <div className={classes.imgWrapper}>
                        <img src={newsObj.image} className={classes.imgWidth} alt={newsObj.image} />
                      </div>
                      <div className={classes.paperWrapper}>
                        <Typography variant="h4" className={classes.paperTitle}>{newsObj.title}</Typography>
                        <Typography variant="body2" className={`${classes.description} desc`}>{newsObj.desc}</Typography>
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
export default Curriculum;
