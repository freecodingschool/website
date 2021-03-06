import React,{useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, CardActionArea} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './img3.jpg';


const useStyles = makeStyles((theme) => ({
  
  gridContainer: { 
   padding:'50px',
  },
  card:{
    minWidth:200,
    minHeight:300,
  },
  media: {
    height:0,
   
    paddingTop: '56.25%', // 16:9
    
  },
  
  
}));

 const News = () => {
  const classes = useStyles();
  const data = [{
    desc:" quia voluptas sit, aspernatur aut odit aut fugit, sed quia learn the most trending language Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
    image:image1
  },
{
  desc:"quia voluptas sit, aspernatur aut odit aut fugit, sed quia learn the most trending language Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
  image:image2,
},
{
  desc:"quia voluptas sit, aspernatur aut odit aut fugit, sed quia learn the most trending language Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
  image:image3,
},

];


  const [news] = useState(data);
  return (
   
          
        <Grid className={classes.gridContainer} container direction="row" justify="center" >   
                
                 {
                
                    news.map((newsObj,index) =>(    
                    <Grid item xs={12} sm={4} md={3}   key={index} >
                    <Card className={classes.card}  variant="elevation" >
                        <CardActionArea>
                            <CardMedia
                                
                                className={classes.media}
                                image={newsObj.image}                        
                                
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="body2" >
                                    {newsObj.desc}
                            </Typography>
                        </CardContent>    
                                
                    </Card>
                    
                        
            </Grid>
                        ))
                }
                
                
         </Grid>
    
  );
}
export default News;