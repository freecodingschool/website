import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Community from './Community';
import FreeCoding from './FreeCoding';
import Programs from './Programs';
import Introduction from './Introduction';
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
      <FreeCoding />
      <Programs />
      <Introduction />
    </div>
  );
};
export default Home;
