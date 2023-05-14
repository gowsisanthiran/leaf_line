import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, Divider } from '@mui/material';
import Img from '../../images/Bg2.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
  },
  heading: {
    marginBottom: '20px',
  },
  divider: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  description: {
    padding: '30px',
    marginTop: '100px',
    marginBottom: '100px',
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.heading}>
        About Us
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Our Mission</Typography>
          <Typography variant="body1" className={classes.description}>
            At Eco Plates, our mission is to provide eco-friendly alternatives to single-use plastic plates. We believe that small changes can make a big impact on the environment, and we're committed to making it easy for people to make those changes in their daily lives.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Our Products</Typography>
          <Typography variant="body1" className={classes.description}>
            All of our plates are made from sustainable materials like bamboo and sugarcane, which are biodegradable and compostable. We offer a variety of sizes and styles to meet your needs, whether you're hosting a party or just enjoying a meal at home.
          </Typography>
        </Grid>
      </Grid >
      <Divider className={classes.divider} />
      <Grid item xs={12} sm={6} md={2}>
      <img src={Img} alt='' style={{float:'left'}} />
      <Typography variant="body1" className={classes.description}>
        Thank you for choosing Eco Plates. By choosing our products, you're helping to reduce waste and protect the planet for future generations.
      </Typography>
      </Grid>
    </div>
  );
};

export default AboutUs;
