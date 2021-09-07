import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';
import axios from 'src/axios';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Link} from '@material-ui/core';
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
  const setStatus = (event, value) => {
    if (value = true){
      
    }
  }
  return (
    <div className={classes.root}>
      <Button component={Link}  href="new-course" >Add Course</Button>
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
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.course_name}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.days.join()}</TableCell>
              <TableCell>{row.start_time}</TableCell>
              <TableCell>{row.end_time}</TableCell>
              <TableCell>{ <Switch color='primary' onChange={setStatus} /> }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
}