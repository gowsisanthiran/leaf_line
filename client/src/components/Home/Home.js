import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { axiosPublic } from '../../redux/axiosPublic';
import ProductCard from '../Product/ProductCard';
import { getCategories, selectAllCategories } from '../../redux/features/categorySlice';
import './home.css'
// import Carousel from 'react-material-ui-carousel'
// import sl1 from '../../images/land06.jpeg'
// import sl2 from '../../images/land02.png'
// import sl3 from '../../images/land03.jpeg'
// import sl4 from '../../images/land04.jpeg'
// import sl5 from '../../images/land05.jpeg'
import sl6 from '../../images/pic05.jpeg'

import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';




const Home = () => {

  const limit = 4;
  const dispatch = useDispatch();
  const { categories } = useSelector(selectAllCategories);

  useEffect(() => {


    dispatch(getCategories({ toast }));
  }, [dispatch]);

  // const [topRatedProduct, setTopRatedProduct] = useState();
  const [topRatedProduct, setTopRatedProduct] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axiosPublic.get(`/products?&limit=${limit}&sort_by_ratings=${true}`)
        setTopRatedProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [])

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [catProductsLoading, setCatProductsLoading] = useState(false);

  useEffect(() => {
    if (categories) {
      setCatProductsLoading(true);
      const getProducts = async () => {
        try {
          const response = categories.map(async (category) =>
            await axiosPublic.get(`/products?&limit=${limit}&category=${category._id}`))
          Promise.all(response).then((values) => {
            setCategoryProducts([...categoryProducts, ...values.map(value => value.data)])
          })
        } catch (error) {
          console.log(error);
          setCatProductsLoading(false);
        } finally {
          setCatProductsLoading(false);
        }
      }
      getProducts();

    }

  }, [categories, catProductsLoading]);


  return (


    <Box >
      <Box className='container1'>
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}
        <Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: "url('sl4')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',

          }}>
            <img src={sl6} className='bgImg7' />

            <Typography variant='div' component='h1' sx={{ m: 10, p: 1, background: "#C7F2A4", color: '#1F6415', textShadow: '1px 1px 1px #555' }}>
              'NATURAL FINE DINING'
              <Typography variant='div' component='h4' sx={{ m: 5, background: "#C7F2A4", color: '#1F6415', textShadow: '1px 1px 1px #555' }}>
                Natural Fine Dining is not only about the food but the entire experience of dining, which includes the ambiance, service, and attention to detail.
              </Typography>


            </Typography>
          </Box>
        </Typography>
        {/* rest of the code... */}
      </Box>


      {/* <Box sx={{ background: '#', height: '100%', weight: '500%', position: 'fixed' }}>
        <Carousel></Carousel>
        <div className='banner'>
          <Carousel>
            <img src={sl1} className='bgImg' />
            <img src={sl2} className='bgImg' />
            <img src={sl3} className='bgImg' />
            <img src={sl4} className='bgImg' />
            <img src={sl5} className='bgImg' />
          </Carousel>
        </div>
      </Box> */}

      <Box className='container'>
        <Typography variant='div' component='h3' sx={{ m: 10, p: 1, background: "#0B4619", color: '#A6CF98', textShadow: '1px 1px 1px #555' }}>
          Top rated products
        </Typography>
        <Box className='card-container'>
          {/* {topRatedProduct && topRatedProduct?.products.map(product => ( */}
          {topRatedProduct && topRatedProduct.products && topRatedProduct.products.map(product => (

            <ProductCard product={product} key={product._id} />
          ))}
        </Box>
      </Box>


    </Box>


  )
}

export default Home

