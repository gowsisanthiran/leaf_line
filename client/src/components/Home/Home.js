

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
import WhyWorkWithUs from './WhyWorkWithUs'
import WhyChoosingUs from './WhyChoosingUs';
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
import logo from '../../images/logo.png';
import home from '../../images/home1.png';
import { alignPropType } from 'react-bootstrap/esm/types';
import MainHeader from '../Layout/MainHeader'
import Header from '../Layout/Header';

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
    <Box className='fullDiv'>
      <Header/>      

      {/*div02  */}

      <WhyWorkWithUs/>

      {/* end div 2 */}

      <WhyChoosingUs/>
      {/* div 3 */} 

      <Box className="containerx" style={{ textAlign: 'center', fontFamily: 'serif' }}>
        <Typography variant="h5" className="m-4 p-1 text-dark text-center">
          Top rated products
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          {topRatedProduct &&
            topRatedProduct.products.map((product) => (
              <Grid item key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Box>
      {/* end div 3 */}

      <AboutUs />
      <ContactUs />
    </Box>
  );
};

export default Home;

