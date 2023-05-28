import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { axiosPublic } from '../../redux/axiosPublic';

import ProductCard from '../Product/ProductCard';
import { Grid, Box, Typography } from '@mui/material';

import { getCategories, selectAllCategories } from '../../redux/features/categorySlice';

function TopRatedProducts() {

  const limit = 3;
  const dispatch = useDispatch();
 

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

  return (
    <div style={{display: 'block'}}>
      <div className='col-lg-12   text-center'style={{marginTop:'150px', marginBottom: '150px'}}>
        <Box className="containerx col-lg-8 offset-lg-2 text-center" sx={{ textAlign: 'center', fontFamily: 'serif' }}>
          <Typography variant="h5" className="m-4 p-1 text-dark text-center" sx={{fontFamily: 'Jack Rooney , sans-serif'}}>
            <span style={{color:'green'}}>Top-Rated</span><span>&nbsp;&nbsp;</span>  Products
          </Typography>
          <Typography variant="" className="m-4 p-1 text-dark text-center"sx={{ textAlign: 'center',}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita pariatur recusandae, tempora voluptas repellat exercitationem. Nesciunt vitae obcaecati earum possimus est quis iure ducimus necessitatibus, dolores velit suscipit itaque.          </Typography>
          <Grid container spacing={5} justifyContent="center"sx={{paddingTop:'20px'}}>
            {topRatedProduct &&
              topRatedProduct.products.map((product) => (
                <Grid item key={product._id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default TopRatedProducts