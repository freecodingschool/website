import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from "react-redux";
import { setCourses } from 'src/redux/slicers/homeSlice';
import Community from './Community';
import Events from './Events';
import PopularCourses from 'src/views/home/PopularCourses';
import Curriculum from './Curriculum';
import OurCommunities from './OurCommunities';
import JoinUs from './JoinUs';
import Testimonials from './Testimonials'
import axios from 'src/axios';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  }
}));
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getCourses = async() => {
    try{
      const {data} = await axios({
        method:"get",
        url:"/course",
        params:{
          active:true
        }
      })
      dispatch(setCourses(data.data));
    }catch(e){
      dispatch(setCourses([]));
    }
  };
  useEffect(() => {
    getCourses()
  },[])
  return (
    <div className={classes.root}>
      <Community />
      <PopularCourses showSection={true}/>
      <Curriculum/>
      <Events />     
      <OurCommunities />
      <Testimonials/>
      <JoinUs />
    </div>
  );
};
export default Home;
