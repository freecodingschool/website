import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, CardActionArea} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
  
    gridContainer: {
     // padding: '20px 0',  
     padding:'50px',
    },
    Card1:{
      width:'300px',
      height:'100px',
    },
    media: {
      height:0,
      
      paddingTop: '56.25%', // 16:9
      
    },
    gridItem:{
        alignItems:'center',
        justify:'center',
    },
    
    
  }));
  const Volunteers = () => {
    const classes = useStyles();
    const data = [{
      index:1,
      title:"Python",
      desc:"Learn the most trending language Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
      
    },
  {
    index:2,
    title:"Scratch",
    desc:"Explore the entire scratch programming Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
    
  },
  {
    index:3,
    title:"HTML",
    desc:"Help you make some cool websites Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam",
    
  },
 
  ];
  
  const [cards] = useState(data);
  return (

    <Grid md={6} className={classes.gridContainer} 
        container direction="row" justify="space-between" alignItems="center" spacing={2} className={classes.gridItem}> 
        <Grid item md={12} direction="column" spacing={2}>
            <Image src="https://ounews.co/wp-content/uploads/2017/11/shutterstock_259018115-e1510570774920.jpg"/>  
        </Grid> 
      
        {
       
            cards.map((card,index) =>(    

        <Grid item md={12} key={cards.index} direction="column" spacing={2} className={classes.gridItem}>
            <Card className={classes.Card1} variant="elevation" >
                <CardContent>
                    <Typography variant="h4"  >
                         {card.title}
                    </Typography>
                    <Typography variant="body2" >
                         {card.desc}
                    </Typography>
                </CardContent>    
            </Card>
                
                    
        </Grid>
       
            ))
      }
    </Grid>
 
);
}
export default Volunteers;