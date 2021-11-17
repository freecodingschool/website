import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography,IconButton,
  Container
} from '@material-ui/core';
import {Twitter,Instagram,ArrowRightAlt,Facebook} from '@material-ui/icons';
import Carousel from "react-elastic-carousel";
const useStyles = makeStyles(theme => ({
  primarySection:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'left',
    backgroundPosition: 'right bottom',
    background:"url(./static/images/banner.png) no-repeat",
    backgroundSize: '45% 80%',
    [theme.breakpoints.down("md")]: {
      backgroundSize: '100%'
    }
  },
  title:{
    fontSize:'2.5em',
    lineHeight:'1.52m'  
  },
  volunteerTitle:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    textTransform:'uppercase',
    padding: theme.spacing(4),
    opacity: 0.7
  },
  subtitle:{
    fontSize:'1.2em',
    lineHeight:'1.5em',
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    fontWeight:'400',
    color:'#7D7D7D',
  },
  learnMoreBtn:{
    fontSize:'2em',
    padding: theme.spacing(1.5),
    width:'175px'
  },
  homeBtn:{
    marginTop:30,
    marginRight: theme.spacing(2),
    padding: theme.spacing(1.5),
    width:200
  },
  imgWrapper:{
      display:'flex',
      [theme.breakpoints.down("md")]: {
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        alignItems:'center',
    }
  },
  iconWrapper:{
    marginTop:10,
    width:200
  }
}));
const Community = () => {
  const classes = useStyles();
  const showArrows =  true//width < 720;  
  
  const volunteers = [
    './static/images/volunteers/illinois.png',
    './static/images/volunteers/vit.png',
    './static/images/volunteers/cts.png',
    './static/images/volunteers/comcast.png',
    './static/images/volunteers/Oracle.png',
    './static/images/volunteers/UCBerkeley.png',
    './static/images/volunteers/IITTirupati.png',
    './static/images/volunteers/ATT.png',
  ]
  const breakPoints = [
    {
      width: 360,
      itemsToShow: 1,
      itemsToScroll: 1,
      pagination: volunteers?.length > 1,
    },
    {
      width: 762,
      itemsToShow:2,
      itemToScroll:2,
      pagination: volunteers?.length > 4,
    },
    {
      width: 1024,
      itemsToShow:3,
      itemToScroll:3,
      pagination: volunteers?.length > 8,
    },
  ];
  return (
    <Fragment>
        <div className={`section-5 ${classes.primarySection}`} style={{minHeight: 'calc(100vh - 65px)'}}>  
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                    <Typography className={classes.title} variant="h1">
                      Creating A Local Community To Empower High
                      School Students To Learn Programming
                    </Typography>
                    <Typography className={`${classes.subtitle} section-4`} variant="h5">
                      A Simple Mission To Close The Computer Science Gap In High Schools And <br/>Local Communities.
                    </Typography>
                    <Button variant="contained" color="primary" size="large" className={classes.homeBtn}
                      href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
                      Learn More <ArrowRightAlt />
                    </Button> 
                    <div className={`${classes.iconWrapper} section-2`}>
                      <IconButton aria-label="facebook" color="secondary" 
                        href="https://facebook.com/Freecodingschool-100491288733049" target="_blank">
                        <Facebook/>
                      </IconButton>     
                      <IconButton aria-label="twitter" color="secondary"
                       href="https://twitter.com/freecodingsch?s=11" target="_blank">
                        <Twitter/>
                      </IconButton>
                      <IconButton aria-label="instagram" color="secondary" href="https://www.instagram.com/freecoding_school/" target="_blank">
                        <Instagram  />
                      </IconButton>
                    </div>                
                </Grid>                  
              </Grid>  
            </Container>          
        </div>   
        <div  className={`section-2 secondary-bg`}>
          <Container maxWidth="lg">
            <Typography className={`secondary-color ${classes.volunteerTitle}`} variant="h3">We are from</Typography>
              <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
              <Carousel breakPoints={breakPoints} showArrows={showArrows} itemPadding={[6,8,8,8]}>
                {
                  volunteers.map((volunteer,i) => (
                    <Grid item xs={12} md={3} key={i}>
                      <div className={classes.imgWrapper}>
                        <img src={volunteer} width="200px" alt={volunteer.image}/>
                      </div>
                    </Grid>
                  ))       
                }
                </Carousel>
              </Grid>
          </Container>
        </div> 
    </Fragment>
  );
};
export default Community;
