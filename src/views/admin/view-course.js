import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'src/axios';
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
export default function viewCourse() {
  const classes = useStyles();
  const [courses,setCourses] = useState([]);  
  useEffect(() =>{
    getCourses(); 
  },[])
  const getCourses = async() => {
    const response = await axios({
      method:"GET",
      url:`/course`,
    })      
    setCourses(response.data.data) 
  }
    return (
       <div className={classes.root}>
        <div>
          <div>
            <h1 style={{ color:'#6962ff' }}>About this course</h1>
          </div>
          {courses.map((row,i) => (
            <><div style={{ padding: '10px 10px' }}>
                <div className="course_title">
                  <h3 style={{ color:'#5c0099'}}>{div.course_name}</h3>
                </div>
                      <p style={{ color:'#B8860B' }}>&#x2605;&#x2605;&#x2605;&#x2605;&#x2606;</p>
                  <p style={{ marginTop:'10px'}}>{row.description}</p>
                  <p>Behind every mouse click and touch-screen tap, there is a computer program that makes things happen.</p>
                  <p>This course introduces the fundamental building blocks of programming and teaches you how to write fun and useful programs using the Python language.</p>
              </div><div style={{ padding: '10px 10px' }}>
                      <h3 style={{ color:'#5c0099'}}>What you will Learn</h3>
                      <ul style={{ padding: '10px 10px' }}>
                          <li>Understand and use the fundamentals of the SAS programming language</li>
                          <li>Access different types of data (SAS, Excel, or text),then explore and prepare the data </li>
                          <li>Analyze and report on data and export results to common formats (HTML, PDF, Excel)</li>
                          <li>Apply SAS programming principles in practical examples</li>
                      </ul>
                  </div><div style={{ padding: '10px 10px' }}>
                      <h3 style={{ color:'#5c0099'}}>Particular days for this course</h3>
                      <p>{div.days.join()}</p>
                  </div><div style={{ padding: '10px 10px' }}>
                      <h3 style={{ color:'#5c0099'}}>Timing of this course</h3>
                      <p>{div.start_time} - {div.end_time}</p>
                  </div></>
              ))}
        </div>
      </div>  
          
    );
}