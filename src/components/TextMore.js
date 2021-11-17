import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from '@material-ui/styles';
import {Typography,Dialog,DialogContent,DialogTitle} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles(theme => ({
  description:{
    height:100,
    padding:0,
    display:'inline-flex',
    overflow: 'hidden'
  },
  showMoreBtn:{
    display:'flex',
    padding:'0 4px',
    position:'relative',
    fontSize:14,
    fontWeight:400,
    color:theme.palette.primary.main,
    top:-20,
    backgroundColor:'#fff',
    opacity:1,
    cursor:'pointer',
    left: -5,
    height: 35
  },
  title:{
    color:"#333",
    marginBottom: '0.5px'
  }
}));

const TextMore = ({data}) => {
  const [open, setOpen] = React.useState(false);
  const description = data.split(" ");
  const classes = useStyles();
  const [value] = React.useState(4);
  const showMore = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return(
    <>
      {
        (description.length > 20) ? (
          <>
          <Typography component="span" variant="body2" className={`secondary-color`}>       
              <span className={classes.description}>{data}</span> 
          </Typography>
          <span onClick={showMore} className={classes.showMoreBtn}>Show more</span>
          </>
        ):(
          <div className={`${classes.description} desc secondary-color`}>       
              <span>{data}</span> 
          </div>
        )
      }
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>
          <Typography variant="h4" className={classes.name}>{data.name}</Typography>
          <Typography variant="body1" className={classes.title}>{data.role}</Typography>
          <Typography variant="body1">{data.designation}</Typography>
        </DialogTitle>
        <DialogContent>          
          <Typography variant="body1" className={classes.name}>
            {data.review}
          </Typography>         
        </DialogContent>
      
      </Dialog>
  </>
  )
}

TextMore.defaultProps = {
  data:{}
};

TextMore.propTypes = {
  data: PropTypes.object.isRequired
};

export default TextMore;