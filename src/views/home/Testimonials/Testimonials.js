import React,{useEffect, useState} from 'react';
import Carousel from "react-elastic-carousel";
import {
  Grid,
  Typography,
  Container,
  Paper,
  Button,
  Box,
  makeStyles
} from '@material-ui/core';
import TextMore from 'src/components/TextMore'
import { useNavigate } from 'react-router';
import axios from 'src/axios';
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
  },
  reviewWrapper:{
    display:'flex',
    alignItems:'center',
    marginTop:18,
    justifyContent: 'center',
  },
  reviewBtn:{
    display: 'flex',
    marginLeft:18,
    [theme.breakpoints.down("md")]: {
      alignItems:'center',
      justifyContent: 'center',
    }
  },
  
}));

const Testimonials = () => {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews();
  },[])
  const getReviews = async() => {
    const response = await axios({
      method:"GET",
      url:"/review"
    })
    setReviews(response.data.data)
  }
  //   //const width = useWindowSize();
  const showArrows = true;// width < 720;
  const breakPoints = [  
    { width: 360,itemsToShow: 1, itemsToScroll: 1, pagination: (reviews.length > 1) },
    { width: 762 ,itemsToShow: 2, itemToScroll: 2,pagination:(reviews.length > 2) },
    { width: 1024 ,itemsToShow: 3, itemToScroll: 3,pagination:(reviews.length > 3)},
  ];
  return(
    <div className={`section-5`} style={{minHeight: 'calc(100vh - 65px)'}}>
      <Container max-width="lg">
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
              reviews.map((row,i) => (
                  <Paper elevation={2} className={classes.paper}  key={i}>
                      <Grid container justifyContent="space-between" alignItems="center" spacing={2} >
                        <Grid item xs={2}>
                          <img src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e" alt={row.name} width="100%"/>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="h5" className={classes.paperTitle}>{row.name}</Typography>
                          <Typography variant="body2" className={classes.paperTitle}>{row.role}</Typography>
                          <Typography variant="body2">{row.designation}</Typography>
                           
                        </Grid>
                        <Grid item xs={10}>
                          {/* {
                            row.review.split(" ").length && */}
                            <TextMore data={row.review} />
                          {/* } */}
                        </Grid>
                      </Grid>    
                  </Paper>
              ))
          } 
          </Carousel>
        </Box>
      </Container>
      <Container max-width="md">
        <div className={classes.reviewWrapper}> 
              <Typography  className={classes.subtitle} variant="h5"> 
              Please help us with what so you think  </Typography>
              <Button color="primary" size="large" className={classes.reviewBtn} href="/feedback">Review</Button>
        </div>
      </Container>
    </div>
  )
}

export default Testimonials;