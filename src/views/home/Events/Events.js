import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography,
  Container,
  Paper
} from '@material-ui/core';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { ArrowRightAlt, AccessTime } from '@material-ui/icons';
import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles(theme => ({
  titleWrapper:{
    alignItems:'center',
    textAlign:'center',
    padding:'20px 0'
  },
  title:{
    lineHeight:'1.5em',
  },
  subtitle:{
    fontWeight:'400',
    marginTop:'20px',
    color:'#333'
  },
  primarySection:{

  },
  paper:{
    minHeight:'200px',
    padding: theme.spacing(2),
    // boxShadow:'0px 6px 42px #0000001A',
    marginRight:theme.spacing(2)
  },
  eventHead:{
    display:'inline-flex',
    width:'100%'
  },
  dateBox:{
    padding:'10px 16px',
    marginRight: theme.spacing(2),
    borderRadius:11,
    backgroundColor:'#d5d8ff',
    textAlign:'center',
    height: '76px',
    width:'76px',
    fontSize:23    
  },
  paperTitle:{
    marginBottom: theme.spacing(2),
    color:'#333',
    marginTop: theme.spacing(2),
  },
  eventTime:{
    marginBottom: theme.spacing(2),
    color:'#333',
    marginTop: theme.spacing(2),
    textALign:'right'
  },
  eventTimeWrapper:{
    display:'inline-flex'
  },
  learnMoreBtn:{
    marginTop: theme.spacing(2)
  }
}));

const Programs = () => {
  const classes = useStyles();
  const data = [    
  {
    title:"Introduction to Scratch Programming",
    date:'23',
    month:'Dec',
    time:'10 AM - 2 PM',
    desc:`Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit`,
  },
  {
    title:"Introduction to Scratch Programming",
    date:'23',
    month:'Dec',
    time:'10 AM - 2 PM',
    desc:`Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit`,
  },
  {
    title:"Introduction to Scratch Programming",
    date:'23',
    month:'Dec',
    time:'10 AM - 2 PM',
    desc:`Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit`,
  },{
    title:"Introduction to Scratch Programming",
    date:'23',
    month:'Dec',
    time:'10 AM - 2 PM',
    desc:`Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit
    Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit`,
  }];  
  const [events] = useState(data);
  const [slideToShow] = useState(2); 
  return (
    <div  className={`section-5 ${classes.primarySection}`} style={{minHeight: 'calc(100vh - 65px)'}}>
      <Container maxWidth="lg">       
        <div className={classes.titleWrapper}>
            <Typography className={`section-title`} variant="h2">
              Upcoming Freecoding School Events
            </Typography>
            <Typography className={`secondary-color section-2 desc ${classes.subtitle}`} variant="h5">
              Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. 
              Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.
            </Typography>
        </div>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item xs={12} lg={12}>
            <CarouselProvider
              naturalSlideWidth={200}
              naturalSlideHeight={120}
              totalSlides={events.length}
              visibleSlides={slideToShow}
              interval="5000"
              isPlaying="false"
              step={slideToShow}>
              <Slider className="eventsUl">
                  {
                    events.map((event,index) => (
                      <Slide key={index}>
                        <Paper elevation={2} className={classes.paper}>
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
                                  <ArrowRightAlt />
                                </Button>
                              </Grid>
                              <Grid item xs={6}  className={classes.eventTime}>
                                <div className={classes.eventTimeWrapper}>
                                    <AccessTime /> 
                                    <Typography variant="h5">{event.time}</Typography>
                                </div>                                
                              </Grid>
                            </Grid>
                        </Paper>
                      </Slide>
                    ))
                  } 
              </Slider>
            </CarouselProvider>
          </Grid>
        </Grid>
    </Container>
    </div>
  );
};

export default Programs;
