import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Grid,Typography,Paper,Container} from '@material-ui/core';
import Chennai from './images/Chennai.png';
import Pune from './images/Pune.png';
import Bangalore from './images/Bangalore.png';
const useStyles = makeStyles(theme => ({
  title:{
    lineHeight:'1.5em'
  },
  subtitle:{
    margin: theme.spacing(2),
    color:'#333',
  },
  section:{
    background:'#efefef',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',    
    padding: theme.spacing(2),
  },
  paperWrapper:{
    padding: theme.spacing(2)
  },
  imgWidth:{
    width:'100%'
  },
  paper:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    minHeight:'200px',
    borderRadius:20
  },
  paperTitle:{
    marginBottom: theme.spacing(2)
  }
}));
const OurCommunities = () => {
  const classes = useStyles();
  const data = [{
    desc:"quia voluptas sit, aspernatur aut odit aut fugit, sed quia learn the most trending language Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
    image:Chennai
  },
{
  desc:"quia voluptas sit, aspernatur aut odit aut fugit, sed quia learn the most trending language Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
  image:Pune,
},
{
  desc:"quia voluptas sit, aspernatur aut odit aut fugit, sed quia learn the most trending language Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
  image:Bangalore,
}];
  const [news] = useState(data);  
  return (
    <div className={classes.section}>
      <Container maxWidth="lg">       
        <div className={classes.titleWrapper}>
            <Typography className={classes.title} variant="h4">
              Our Communities
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
            Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima.
            Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.
            </Typography>
        </div>
          <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center" spacing={2}>    
            {                
              news.map((newsObj,index) =>(    
                <Grid item xs={12} md={4} key={index} >
                    <Paper className={classes.paper} elevation={0}>
                      <img src={newsObj.image} className={classes.imgWidth} alt={newsObj.image} />
                      <div className={classes.paperWrapper}>
                        <Typography variant="subtitle1">{newsObj.desc}</Typography>
                      </div>
                  </Paper>
                </Grid>
              ))
            }
        </Grid>
      </Container>
    </div>    
  );
};
export default OurCommunities;
