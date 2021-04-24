import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Community from './Community';
import Events from './Events';
import Courses from './Courses';
import Curriculum from './Curriculum';
import OurCommunities from './OurCommunities';
import JoinUs from './JoinUs';
import Testimonials from './Testimonials'
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Community />
      <Courses />
      <Curriculum/>
      <Events />     
      <OurCommunities />
      <Testimonials/>
      <JoinUs />
    </div>
  );
};
export default Home;
