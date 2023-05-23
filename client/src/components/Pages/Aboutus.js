

import React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Grid from '@mui/material/Grid';


import bananaLeafImage from '../../images/pic04.jpeg';
 import farmImage from '../../images/parallax1.jpg';
 import compostImage from '../../images/parallax2.jpeg';
 import sl1 from '../../images/bunch2.jpeg';
import sl2 from '../../images/land02.png';

const LandingPage = () => {
  const carouselItems = [
    {
      image:bananaLeafImage ,
      title: 'Product 1',
    },
    {
      image:farmImage,
      title: 'Product 2',
    },
    {
      image: bananaLeafImage ,
      title: 'Product 3',
    },
  ];

  return (
    <Box textAlign="center">
      <Typography variant="h4" sx={{ fontFamily: 'Your Custom Font', marginTop: '2rem' }}>
        Welcome to Leafline
      </Typography>

    

      {/* <Carousel>
        {carouselItems.map((item, index) => (
          <Box key={index} display="flex" justifyContent="center">
            <img src={item.image} alt={item.title} style={{ height: '200px' }} />
          </Box>
        ))}
      </Carousel> */}

      <Box mt={4}>
        <Typography variant="h5">About Us</Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit nunc eget mauris tincidunt
          convallis. Morbi rhoncus, libero nec condimentum interdum, lorem est maximus ipsum, nec laoreet justo ex
          eu sem.
        </Typography>
      </Box>

      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor="#f1f1f1">
            <Typography variant="h6">Product 1</Typography>
            <Typography><img src={sl2}style={{ height: '400px', width: '400px' }} alt="Image" /> </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam ut justo interdum aliquam
              eget ut risus.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor="#f1f1f1">
            <Typography variant="h6">Bowl</Typography>
            <Typography><img src={sl1} style={{ height: '400px', width: '400px' }} alt="Image" /> </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam ut justo interdum aliquam
              eget ut risus.
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default LandingPage;


