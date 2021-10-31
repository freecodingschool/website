import React,{useState,useEffect} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from "react-redux";
import TopBar from './TopBar';
import NavBar from './NavBar';
import axios from 'src/axios';
import { userSuccess, hasError} from 'src/redux/slicers/userSlice';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
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

const MainLayout = () => {
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
      dispatch(userSuccess(response.data.user));
    }catch(e){
      dispatch(hasError(e.data.message))
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
      <NavBar
         onMobileClose={() => setMobileNavOpen(false)}
         openMobile={isMobileNavOpen}
      />
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

export default MainLayout;
