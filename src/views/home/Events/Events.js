import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography,
  Container,
  Paper
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  titleWrapper:{
    alignItems:'center',
    textAlign:'center'
  },
  title:{
    lineHeight:'1.5em',
  },
  subtitle:{
    fontWeight:'400',
    color:'#333'
  },
  section:{
    backgroundColor:'#efefef',
    padding: theme.spacing(2),
  },
  paper:{
    minHeight:'200px',
    padding: theme.spacing(2),
  },
  eventHead:{
    display:'inline-flex',
    width:'100%'
  },
  dateBox:{
    padding:'6px 16px',
    marginRight: theme.spacing(2),
    borderRadius:4,
    backgroundColor:'#d5d8fc',
    height: '60px',
    fontSize:20    
  },
  paperTitle:{
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  learnMoreBtn:{
    marginTop: theme.spacing(2)
  }
}));


const Programs = () => {
  const classes = useStyles();
  const data = [    
  {
    index:2,
    title:"Introduction to Scratch Programming",
    date:'23',
    month:'Dec',
    time:'10 AM - 2 PM',
    desc:"Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit",
  },
  {
    index:1,
    title:"Python for High School Students",
    date:'23',
    month:'Dec',
    desc:"Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit",
  },
  {
    index:3,
    date:'23',
    month:'Dec',
    time:'10 AM - 2 PM',
    title:"HTML",
    desc:"Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit",
  },
  {
    index:4,
    date:'23',
    month:'Dec',
    title:"Basics",
    time:'10 AM - 2 PM',
    desc:"Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit",
  }];
  const [events] = useState(data);
  return (
    <div className={classes.section}>
      <Container maxWidth="lg">       
        <div className={classes.titleWrapper}>
            <Typography className={classes.title} variant="h4">
              Upcoming Freecoding School Events
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              Freecoding School is powered by collaboration of students, teachers and technology professionals.
            </Typography>
        </div>
        <Grid container direction="row" justify="space-between" alignItems="center">
          {
            events.map((event,index) => (
              <Grid item lg={3} xs={12} key={index} className={classes.paper}>
                <Paper elevation={0} className={classes.paper}>
                  <div className={classes.eventHead}>
                    <div className={classes.dateBox}>
                      <div>{event.date}</div>
                      <div>{event.month}</div>
                    </div>
                    <div className={classes.eventHead}>
                      <Typography variant="h5" className={classes.paperTitle}>{event.title}</Typography>
                    </div>
                  </div>                 
                  <Typography variant="subtitle1"  className={classes.subtitle}>{event.desc}</Typography>
                  <Grid item xs={12} container direction="row" justify="center" alignItems="center">
                    <Grid item xs={6}>
                      <Button color="primary" size="large" className={classes.learnMoreBtn}
                      href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank" >
                        Learn more
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" className={classes.paperTitle}>{event.time}</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))
          } 
       </Grid>
    </Container>
    </div>
  );
};
export default Programs;
