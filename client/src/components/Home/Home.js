

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { axiosPublic } from '../../redux/axiosPublic';
import ProductCard from '../Product/ProductCard';
import { getCategories, selectAllCategories } from '../../redux/features/categorySlice';
import { Box, Typography } from '@mui/material';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import AboutUs from '../Pages/Aboutus';
import ContactUs from '../Pages/Contactus';
import Button from '@mui/material/Button';
import '../Home/home.css';

import sl1 from '../../images/bunch2.jpeg';
import sl2 from '../../images/land02.png';
// import sl3 from '../../images/land03.jpeg';
import sl4 from '../../images/land04.jpeg';
import sl5 from '../../images/land05.jpeg';
import sl6 from '../../images/land05.jpeg';
import sl7 from '../../images/home pic.jpg';
import sl8 from '../../images/bunch1.png';
import sl9 from '../../images/image1.jpeg';
import sl10 from '../../images/image02.jpeg';
import sl11 from '../../images/image03.jpeg';
import { alignPropType } from 'react-bootstrap/esm/types';


import { Grid } from '@mui/material';


const Home = () => {
  const limit = 4;
  const dispatch = useDispatch();
  const { categories } = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(getCategories({ toast }));
  }, [dispatch]);

  const [topRatedProduct, setTopRatedProduct] = useState();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axiosPublic.get(`/products?&limit=${limit}&sort_by_ratings=${true}`);
        setTopRatedProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [catProductsLoading, setCatProductsLoading] = useState(false);

  useEffect(() => {
    if (categories) {
      setCatProductsLoading(true);
      const getProducts = async () => {
        try {
          const response = categories.map(async (category) => {
            return await axiosPublic.get(`/products?&limit=${limit}&category=${category._id}`);
          });
          Promise.all(response).then((values) => {
            setCategoryProducts([...categoryProducts, ...values.map((value) => value.data)]);
          });
        } catch (error) {
          console.log(error);
          setCatProductsLoading(false);
        } finally {
          setCatProductsLoading(false);
        }
      };
      getProducts();
    }
  }, [categories, catProductsLoading]);

  return (
    <Box>
      <Box
        className="container1"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sl1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          padding: '10px',
        }}
      >
        <Box
          className="m-10 p-1 text"
          style={{
            color: '#D7E9B9',
            textShadow: '1px 0px 0px #B6E2A1',
            fontSize: '2px',
            fontWeight: 'bold'
          }}
        >
          <Typography variant="h4" className='tagLine'>'NATURAL FINE DINING'</Typography>
          <Typography variant="h6" className='tagLine'>L E A F L I N E</Typography>
        </Box>

        {/* <Box className="d-flex flex-column align-items-center mt-4">
          <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
            Find Express
          </Button>
        </Box> */}
      </Box>

      {/* secound container */}

      <Box className='container' textAlign="left" style={{ margin: '0 auto', marginTop: '20px' }}>
      <Typography variant="h6" sx={{ fontFamily: 'Your Custom Font', marginTop: '5rem', textAlign: 'center' }}>
        Why Choosing Us!
      </Typography>
      <Box mt={4} style={{ textAlign: 'center' }}>
        <Typography variant="h4">Few Reasons Why People Choosing Us!</Typography>

        <Grid className='card-container' style={{ marginLeft: '40px' }}>
          <div className="image-card">
            <img src={sl9} style={{ height: '250px', width: '300px', margin: '18px' }} alt="Image" />
            <div className="overlay">
              <Typography variant="body1">Product 01</Typography>
            </div>
          </div>

          <div className="image-card">
            <img src={sl10} style={{ height: '250px', width: '300px', margin: '18px' }} alt="Image" />
            <div className="overlay">
              <Typography variant="body1">Product 2</Typography>
            </div>
          </div>

          <div className="image-card">
            <img src={sl11} style={{ height: '250px', width: '300px', margin: '20px' }} alt="Image" />
            <div className="overlay">
              <Typography variant="body1">Product 3</Typography>
            </div>
          </div>
        </Grid>
        <Grid>
          <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop:'3rem' }}>
            <Typography variant="body1">
              Banana leaf plates are an eco-friendly alternative to traditional disposable plates. They are made from
              the leaves of the banana plant, which are biodegradable and renewable. In our Leafline, it's very clean.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>





      {/* ----------- */}


      <Box className="containerx">
  <Typography variant="h3" className="m-4 p-1  text-dark text-center">
    Top rated products
  </Typography>
  <Box className="card-container">
    {topRatedProduct &&
      topRatedProduct.products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
  </Box>
</Box>


      <Box className="container">
        <Typography variant="h3" className="m-4 p-1  text-light">
          Our Designs
        </Typography>
        <Carousel
          interval={3000} // Set the interval between slides (in milliseconds)
          pause="hover" // Pause the carousel on mouse hover
          indicators={true} // Show slide indicators
          navButtonsAlwaysVisible={true} // Show navigation buttons always
        >
          <Carousel.Item>
            <img src={sl1} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
          <Carousel.Item>
            <img src={sl2} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
          <Carousel.Item>
            <img src={sl2} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
          <Carousel.Item>
            <img src={sl4} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
          <Carousel.Item>
            <img src={sl5} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
        </Carousel>
      </Box>

      <AboutUs />
      <ContactUs />
    </Box>
  );
};

export default Home;

