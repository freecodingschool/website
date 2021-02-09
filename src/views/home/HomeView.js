import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Community from './Community';
// import FreeCoding from './FreeCoding';
// import Programs from './Programs';
import Courses from './Courses';
import News from './News';
import Volunteers from './Volunteers';
// import Introduction from './Introduction';
import JoinUs from './JoinUs';
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
      {/* <Volunteers /> */}
      {/* <FreeCoding /> */}
      <News />
      {/* <Programs /> */}
      {/* <Introduction /> */}
      <JoinUs />
    </div>
  );
};
export default Home;
