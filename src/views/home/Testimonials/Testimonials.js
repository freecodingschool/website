import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Container,
  Paper
} from '@material-ui/core';
import testimonialImg from './testmonial.png';
const useStyles = makeStyles(theme => ({
  titleWrapper:{
    alignItems:'center',
    padding:'20px 0',
    textAlign:'center'
  },
  title:{
    lineHeight:'1.5em',
  },
  subtitle:{
    fontWeight:'400',
    color:'#333'
  },
  section:{
    backgroundColor:'#fff',
    padding: theme.spacing(2),
  },
  paper:{
    minHeight:'200px',
    padding: theme.spacing(2),
  },
  eventHead:{
    display:'inline-flex',
    width:'100%'
  },
  dateBox:{
    // padding:'6px 16px', 
     marginRight: theme.spacing(2),
    // borderRadius:4,
    // backgroundColor:'#d5d8fc',
    // height: '60px',
    // fontSize:20   
  },
  paperTitle:{
    color:"#333",
    marginBottom: '0.5px',
    marginTop: theme.spacing(2)
  }
}));

  const Testimonials = () => {
  const classes = useStyles();
  const data = [    
  {
    title:"Mohit R",  
    designation:"Student",  
    desc:`Aut consectetur voluptas. Voluptatem minus quo voluptas in nulla iste. Fugiat alias sit sed dolorem quo. Qui praesentium et doloribus 
    minima neque. Facere debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur ex.Torquem detraxit hosti et quidem faciunt, ut et negent satis esse appetendum, alterum. Si sine causa? quae fuerit causa, mox videro; interea hoc epicurus in liberos.`
  },
  {
    title:"Mohit R",  
    designation:"Student",  
    desc:`Aut consectetur voluptas. Voluptatem minus quo voluptas in nulla iste. Fugiat alias sit sed dolorem quo. Qui praesentium et doloribus 
    minima neque. Facere debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur ex.Torquem detraxit hosti et quidem faciunt, ut et negent satis esse appetendum, alterum. Si sine causa? quae fuerit causa, mox videro; interea hoc epicurus in liberos.`
  },
  {
    title:"Mohit R",  
    designation:"Student",  
    desc:`Aut consectetur voluptas. Voluptatem minus quo voluptas in nulla iste. Fugiat alias sit sed dolorem quo. Qui praesentium et doloribus 
    minima neque. Facere debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur ex.Torquem detraxit hosti et quidem faciunt, ut et negent satis esse appetendum, alterum. Si sine causa? quae fuerit causa, mox videro; interea hoc epicurus in liberos.`
  }
];
  
  
  const [testimonials] = useState(data);
  return (
    <div className={classes.section}>
      <Container maxWidth="lg">       
        <div className={classes.titleWrapper}>
            <Typography className={classes.title} variant="h4">
            Testimonial
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              minima neque. Facere debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur ex.Torquem detraxit hosti et quidem faciunt, ut et negent satis esse appetendum, alterum. Si sine causa? quae fuerit causa, mox videro; interea hoc epicurus in liberos.
            </Typography>
        </div>
        <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
          {
            testimonials.map((testimonial,index) => (
              <Grid item lg={4} xs={12} key={index} className={classes.paper}>
                <Paper elevation={1} className={classes.paper}>
                  <div className={classes.eventHead}>
                    <div className={classes.dateBox}>
                      <img src={testimonialImg} />
                    </div>
                    <div>
                      <Typography variant="h4" className={classes.paperTitle}>{testimonial.title}</Typography>
                      <Typography variant="h6">{testimonial.designation}</Typography>
                    </div>
                  </div>                 
                  <Typography variant="subtitle1"  className={classes.subtitle}>{testimonial.desc}</Typography>
                </Paper>
              </Grid>
            ))
          } 
       </Grid>
    </Container>
    </div>
  );
};

export default Testimonials;
