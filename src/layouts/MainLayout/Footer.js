import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link,Grid } from '@material-ui/core';
import {Twitter,Instagram} from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
  root: {
    display:'flex'
  },
  lightFooter:{
    backgroundColor:'#edeff2',
    padding: theme.spacing(4),
    color:'#6a859c',
    marginBottom: "10px"
  },
  darkFooter:{
    backgroundColor:'#383838',
    padding: theme.spacing(4),
    color:'#edeff2'
  },
  footerTitle:{
    color:'#676770',
    letterSpacing:'0.5em',
    marginBottom: theme.spacing(1),
    fontSize:'1em'
  },
  footerLinks:{
    borderBottom:'1px solid #ccc'
  },
  footerLinkItem:{
    color:'#6a859c'
  },
  footerIcon:{
    marginRight:'10px',
    position: 'relative',
    top: '5px'
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <Grid>
       <Grid item lg={12} xs={12} className={classes.lightFooter} container direction="row" justify="space-evenly">
           <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Grid container >
                <Typography variant="subtitle1" className={classes.footerTitle}>ABOUT US</Typography>
                <Typography variant="body1">We are a group of passionate individuals who are dedicated to making technical education more accessible to local communities.</Typography>
              </Grid>
           </Grid>
           <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Grid container >
                <Typography variant="subtitle1" className={classes.footerTitle}>COMMUNITY</Typography>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Help Center</Link>
                </Grid>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Services</Link>
                </Grid>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Curriculum</Link>
                </Grid>
                <Grid item xs={12} className={classes.footerLinks}>
                  <Link color="inherit" variant="body1" to="/blog">Partnered Schools</Link>
                </Grid>
              </Grid>
           </Grid>
           <Grid item lg={3} sm={6} xl={3} xs={12}>
               <Grid container >
                 <Typography variant="subtitle1" className={classes.footerTitle}>SOCIAL</Typography>
                 <Grid item xs={12} className={classes.footerLinks}>
                    <a className={classes.footerLinkItem} href="https://twitter.com/freecodingscho1?s=11" 
                    rel="noopener noreferrer" target="_blank">
                      <span className={classes.footerIcon}><Twitter /></span>Twitter
                    </a>
                 </Grid>
                 {/* <Grid item xs={12} className={classes.footerLinks}>
                   <Link  color="inherit" variant="body1" to="/blog">
                      <span className={classes.footerIcon}><Facebook /></span>Facebook
                   </Link>
                 </Grid> */}
                 <Grid item xs={12} className={classes.footerLinks}>
                    <a className={classes.footerLinkItem} href="https://www.instagram.com/freecoding_school/?igshid=150l6cbvhr30j" 
                    rel="noopener noreferrer"  target="_blank">
                      <span className={classes.footerIcon}><Instagram /></span>Instagram
                    </a>
                 </Grid>

               </Grid>
           </Grid>
       </Grid>
       <Grid item lg={12} xs={12} className={classes.darkFooter}>
           <Grid container direction="column" justify="space-evenly" alignItems="center">
               <Typography variant="body1">
                 &copy;{' '}
                   Copyright Freecoding School. 2020
               </Typography>
               <Typography variant="caption">
                 All rights reserved.
               </Typography>
           </Grid>
       </Grid>
     </Grid>
   </div>
  );
};
export default Footer;
