import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { makeStyles, Hidden } from '@material-ui/core';
import { useDispatch } from "react-redux";
import axios from 'src/axios';
import NavBar from './NavBar';
import TopBar from './TopBar';
import { authSlice } from 'src/redux/slicers';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#fff",
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 256
    // }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUser = async()=> {
    try{
      const response = await axios({
        method:"get",
        url:"/user"
      });
      dispatch(authSlice.actions.userSuccess(response.data.user));
    }catch(e){
      dispatch(authSlice.actions.hasError(e.data.message))
    }
  };
  useEffect(() => {
    if(!localStorage.getItem("_ut")){
      navigate('/login', { replace: true });
    }else
    getUser();

  },[])
  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Hidden mdUp>
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
      </Hidden>    
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
