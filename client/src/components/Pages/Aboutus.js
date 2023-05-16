import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, Divider, Button, Link } from '@mui/material';
import bananaLeafImage from '../../images/pic04.jpeg';
import farmImage from '../../images/parallax1.jpg';
import compostImage from '../../images/parallax2.jpeg';
import '@fontsource/montserrat';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
  },
  heading: {
    marginBottom: '20px',
    fontFamily: 'Montserrat',
  },
  divider: {
    marginTop: '40px',
    marginBottom: '40px',
    paddingBottom: '20px'
  },
  description: {
    padding: '30px',
    marginTop: '40px',
    marginBottom: '40px',
  },
  image: {
    float: 'left',
    marginRight: '20px',
    marginBottom: '20px',
    width: '300px',
    height: '200px',
    objectFit: 'cover',
  },
  button: {
    marginTop: '20px',
  },
  link: {
    margin: '8px 12px', 
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.heading} fontFamily="Montserrat">
        About Us
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" fontFamily="Montserrat">Our Mission</Typography>
          <Typography variant="body1" className={classes.description} fontFamily="Montserrat">
            At Banana Leaf Plates, our mission is to provide sustainable and eco-friendly alternatives to disposable tableware. We believe in the power of natural materials and their positive impact on the environment. Our goal is to make it easy for individuals and businesses to adopt eco-friendly practices in their daily lives. We strive to promote awareness about the harmful effects of single-use plastic and inspire positive change.
          </Typography>
          <Button variant="contained" color="primary" className={classes.button}>
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" fontFamily="Montserrat">Our Products</Typography>
          <Typography variant="body1" className={classes.description}fontFamily="Montserrat">
            All our plates are made from biodegradable and compostable banana leaves. We source these leaves from local farmers who practice sustainable agriculture. Our plates are not only eco-friendly but also sturdy and suitable for various occasions, from casual picnics to elegant parties. By choosing our products, you contribute to reducing plastic waste and promoting a healthier planet. Explore our wide range of sizes and designs to find the perfect fit for your eco-conscious lifestyle.
          </Typography>
            <Button variant="contained" color="primary" className={classes.button}conClick='/product' >
            Shop Now
          </Button>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item xs={12} sm={6} md={2}>
        <img src={bananaLeafImage} alt="Banana Leaf" className={classes.image} />
        <img src={farmImage} alt="Sustainable Farming" className={classes.image} />
        <img src={compostImage} alt="Compost" className={classes.image} />
        <Typography variant="body1" className={classes.description}fontFamily="Montserrat">
          Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us in our journey towards a more sustainable future.
        </Typography>

      </Grid>
    </div>
  );
};

export default AboutUs;

// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import { Typography, Grid, Divider, Button, Link } from '@mui/material';
// import bananaLeafImage from '../../images/pic04.jpeg';
// import farmImage from '../../images/parallax1.jpg';
// import compostImage from '../../images/parallax2.jpeg';
// import '@fontsource/montserrat';
// import AboutUs from './components/Pages/Aboutus';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: '20px',
//   },
//   heading: {
//     marginBottom: '20px',
//     fontFamily: 'Montserrat',
//   },
//   divider: {
//     marginTop: '40px',
//     marginBottom: '40px',
//     paddingBottom: '20px'
//   },
//   description: {
//     padding: '30px',
//     marginTop: '40px',
//     marginBottom: '40px',
//   },
//   image: {
//     float: 'left',
//     marginRight: '20px',
//     marginBottom: '20px',
//     width: '300px',
//     height: '200px',
//     objectFit: 'cover',
//   },
//   button: {
//     marginTop: '20px',
//   },
//   link: {
//     margin: '8px 12px', 
//   },
// }));

// const AboutUs = () => {
//   const classes = useStyles();

//   const handleLearnMore = () => {
//     // Add code for handling "Learn More" button click
//   };

//   const handleShopNow = () => {
//     // Add code for handling "Shop Now" button click
//   };

//   return (
//     <div className={classes.root}>
//       <Typography variant="h3" className={classes.heading} fontFamily="Montserrat">
//         About Us
//       </Typography>
//       <Divider className={classes.divider} />
//       <Grid container spacing={4}>
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h4" fontFamily="Montserrat">Our Mission</Typography>
//           <Typography variant="body1" className={classes.description} fontFamily="Montserrat">
//             At Banana Leaf Plates, our mission is to provide sustainable and eco-friendly alternatives to disposable tableware. We believe in the power of natural materials and their positive impact on the environment. Our goal is to make it easy for individuals and businesses to adopt eco-friendly practices in their daily lives. We strive to promote awareness about the harmful effects of single-use plastic and inspire positive change.
//           </Typography>
//           <Button variant="contained" color="primary" className={classes.button} onClick={handleLearnMore}>
//             Learn More
//           </Button>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h4" fontFamily="Montserrat">Our Products</Typography>
//           <Typography variant="body1" className={classes.description}fontFamily="Montserrat">
//             All our plates are made from biodegradable and compostable banana leaves. We source these leaves from local farmers who practice sustainable agriculture. Our plates are not only eco-friendly but also sturdy and suitable for various occasions, from casual picnics to elegant parties. By choosing our products, you contribute to reducing plastic waste and promoting a healthier planet. Explore our wide range of sizes and designs to find the perfect fit for your eco-conscious lifestyle.
//           </Typography>
//           <Button variant="contained" color="primary" className={classes.button} onClick={handleShopNow}>
//             Shop Now
//           </Button>
//         </Grid>
//       </Grid>
//       <Divider className={classes.divider} />
//       <Grid item xs={12} sm={6} md={2}>
//         <img src={bananaLeafImage} alt="Banana Leaf" className={classes.image} />
// <img src={farmImage} alt="Sustainable Farming" className={classes.image} />
// <img src={compostImage} alt="Compost" className={classes.image} />
// <Typography variant="body1" className={classes.description}fontFamily="Montserrat">
// Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
// </Typography>
// </Grid>
// </div>
// );
// };


// export default AboutUs;









