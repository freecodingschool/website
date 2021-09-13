import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';
import axios from 'src/axios';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Link} from '@material-ui/core';
import Alert from 'src/components/Alert'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.background.dark,
    height: '100%',    
    padding:theme.spacing(2)
  },
  table: {
    minWidth: 650,
  },
}));

export default function Courses() {
  const classes = useStyles();
  const [courses,setCourses] = useState([]);  
  const [loading,setLoading] = useState(false);
  const [message,setMsg] = useState('');
  const [alertType,setAlertType] = useState('success');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() =>{
    getCourses(); 
  },[])
  const getCourses = async() => {
    const response = await axios({
      method:"GET",
      url:"/course"
    })      
    setCourses(response.data.data) 
  }
  const getviewCourse = async(row) => {
    const response = await axios({
      method:"GET",
      url:`/course/${row._id}`,
      data:{
        title:row.course_name
      }
    })
  }
  const setStatus = async(row) => {
    setLoading(true)
    try{
      row.active = !row.active;
      await axios({
        method:"PATCH",
        url:`/course/${row._id}`,
        data:{
          active:row.active
        }      
      })
      setMsg("Updated Successfully")
      setLoading(false)
      setOpen(true)
      setAlertType('success');
    }catch(e){
      setLoading(false)
      setAlertType('success');
      setMsg("Something went wrong")
    }        
   }
  return (
    <div className={classes.root}>
      <Button onClick={() => navigate('/admin/new-course')}>Add Course</Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="course table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Days</TableCell>
            <TableCell>Start time</TableCell>
            <TableCell>End time</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((row,i) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row" onClick={getviewCourse}>
                <Link href={`/course/${row._id}`}>
                {row.course_name}
                </Link>
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.days.join()}</TableCell>
              <TableCell>{row.start_time}</TableCell>
              <TableCell>{row.end_time}</TableCell>
              <TableCell>{ <Switch color='primary' onChange={() => setStatus(row)} checked={row.active} disabled={loading}/> }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={alertType || "info"}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}