import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link,Grid ,Container,IconButton} from '@material-ui/core';
import {Twitter,Instagram,Facebook} from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
  root: {
    display:'flex',
    backgroundColor:'#6962ff',
    color:'#fff',
    padding: theme.spacing(4)
  }, 
  footerTitle:{
    letterSpacing:'0.5em',
    marginBottom: theme.spacing(1),
    fontSize:'1em'
  },
  footerLinks:{
    padding: theme.spacing(1)
  },
  footerLinkItem:{
    color:'#6a859c'
  },
  footerIcon:{
    marginRight:'10px',
    position: 'relative',
    top: '5px'
  },
  mediaLinks:{
    color:'#fff',
    justifyContent:'flex-end',
    display:'flex'
  },
  btnColor:{
    color:'#fff'
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">       
        <Grid container>
          <Grid item lg={12} xs={12} container direction="row" justifyContent="space-evenly">
           <Grid item lg={4} sm={6} xs={12}>
              <Grid container direction="column" >
                <Typography variant="body1">San Fransico, USA</Typography>
                <Typography variant="body1">Bangalore, India</Typography>
              </Grid>
           </Grid>
           <Grid item lg={4} sm={6} xs={12}>
              <Grid container >
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">About Us</Link>
                </Grid>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Volunteers</Link>
                </Grid>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Teachers</Link>
                </Grid>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Organizers</Link>
                </Grid>
              </Grid>
           </Grid>
           <Grid item lg={4} sm={6} xs={12}>
              <Grid container >
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Partnered Schools</Link>
                </Grid>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Sponsored Compaines</Link>
                </Grid>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Privacy Policy </Link>
                </Grid>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Terms of Service</Link>
                </Grid>
              </Grid>
           </Grid>
           <Grid item lg={12} xs={12}>
              <Grid container direction="row" justifyContent="space-evenly">
                  <Grid item md={6} xs={12} >
                    <Typography variant="body1">
                      &copy;{' '} 2021 Freecoding School Not for Profit Organization
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <div className={classes.mediaLinks}>
                    <IconButton aria-label="facebook" className={classes.btnColor}  href="https://facebook.com/Freecodingschool-100491288733049" target="_blank">
                      <Facebook/>
                    </IconButton>                
                      <IconButton aria-label="twitter" className={classes.btnColor} href="https://twitter.com/freecodingsch?s=11" target="_blank">
                        <Twitter/>
                      </IconButton>
                      <IconButton aria-label="instagram" className={classes.btnColor} href="https://www.instagram.com/freecoding_school/" target="_blank">
                        <Instagram  />
                      </IconButton>
                    </div>
                  </Grid>
              </Grid>  
            </Grid>
       </Grid>      
        </Grid>
      </Container>    
   </div>
  );
};
export default Footer;
