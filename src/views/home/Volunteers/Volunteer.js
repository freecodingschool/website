import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, IconButton, Avatar,CardHeader,
  CardActions,Container,Typography,Grid,
  Button} from '@material-ui/core';
import Image from 'material-ui-image';
import SchoolIcon from '@material-ui/icons/School';
const useStyles = makeStyles((theme) => ({  
    gridContainer: {
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
    }}));
  const Volunteers = () => {
    const classes = useStyles();
    const data = [{
      index:1,
      title:"STUDENTS",
      desc:" Become a FreecodingSchool Student to learn how to code.",
      
    },
  {
    index:2,
    title:"VOLUNTEERS",
    desc:" Make an impact while continuing your studies/day job.",
    
  },
  {
    index:3,
    title:"SCHOOLS",
    desc:" Bring computer science to your school and community.",
    
  }];
  
  const [cards] = useState(data);
  return (
    <div  className={`section-2 secondary-bg`}>

        <Grid className={classes.gridContainer} 
        container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} className={classes.gridItem}> 
        <Grid item sm={3} direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
            
            <Image src="https://ounews.co/wp-content/uploads/2017/11/shutterstock_259018115-e1510570774920.jpg"/>  
        
        </Grid> 
      
        {
      
            cards.map((card,index) =>(    

        <Grid item md={6} key={cards.index} direction="column" justifyContent="center" alignItems="baseline" spacing={1} className={classes.gridItem}>
            <Card className={classes.Card1} variant="elevation" >
                <CardContent>
                    <IconButton >
                    <SchoolIcon/>
                    </IconButton>

                    <Typography variant="h4"  >
                        {card.title}
                    </Typography>
                    <Typography variant="body1" >
                        {card.desc}
                    </Typography>
                </CardContent> 
                  
            </Card>
                    
        </Grid>
      
            ))
      }
    </Grid>
  </div>
 
);
}
export default Volunteers;