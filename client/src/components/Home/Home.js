
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
import sl3 from '../../images/land03.jpeg';
import sl4 from '../../images/land04.jpeg';
import sl5 from '../../images/land05.jpeg';
import sl6 from '../../images/land05.jpeg';
import sl7 from '../../images/home pic.jpg';
import sl8 from '../../images/bunch1.png';
import { alignPropType } from 'react-bootstrap/esm/types';

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
            textShadow: '1px 1px 1px #445',
            fontSize: '5px',
            fontWeight: 'bold',
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          <Typography variant="h1">'NATURAL FINE DINING'</Typography>
          <Typography variant="h6">L E A F L I N E</Typography>
        </Box>

        {/* <Box className="d-flex flex-column align-items-center mt-4">
          <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
            Find Express
          </Button>
        </Box> */}
      </Box>

      <Box className="container2">
  <Container>
    <Box>
    <Row>
      <Box>
    <Col sm={6} className="d-flex justify-content-start align-items-center order-sm-2">
<Typography
  variant="div"
  component="h1"
  className="content-box1"
>
  Why Choosing Us!
</Typography>
</Col>
</Box>
<Box>
    <Col sm={6} className="d-flex justify-content-start align-items-center order-sm-2">

<Typography
  variant="div"
  component="h6"
  className="content-box2"
>
choosing banana leaf plates aligns with the principles of sustainability, naturalness, and cultural appreciation. They provide a greener and more eco-friendly option for serving meals while adding a touch of tradition and visual appeal.
</Typography>

</Col>
</Box>
     <Box>
      <Col sm={6} className="d-flex justify-content-start align-items-center order-sm-1">
        <img src={sl8} className="bgImg7" alt="Background Image" />
        
     
      </Col>

      </Box>
      
     
      
    </Row>
    </Box>
  </Container>
</Box>


      <Box className="container">
        <Typography variant="h3" className="m-4 p-1 bg-dark text-light">
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
        <Typography variant="h3" className="m-4 p-1 bg-dark text-light">
          Carousel
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
            <img src={sl3} className="bgImg" alt="Carousel Image" />
            
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

