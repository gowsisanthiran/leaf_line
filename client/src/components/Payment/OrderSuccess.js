import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Avatar, Typography } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import TopRatedProducts from '../Home/TopRatedProducts';
import Header2 from '../Layout/Header2';

const OrderSuccess = () => {
  return (
    <>
      <Header2 />
      {/*Banner starts*/}
      <section class="banner productpage">
        <div class="container container2">
          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
              <div class="text-center">
                <h2 class="banner-title">Detailed Product</h2>
                <nav aria-label="breadcrumb" class="d-flex justify-content-center fast-breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to='/'><HomeIcon/> Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Product</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Banner Ends*/}
      <Box sx={{ m: '20px auto', maxWidth: '550px', textAlign: 'center', minWidth: '500px' }}>
        <Avatar sx={{ bgcolor: 'primary.main', height: '80px', width: '80px', m: '0 auto', }} fontSize='4.5rem'>
          <DoneAllIcon fontSize='3.5rem' />
        </Avatar>
        <Typography variant='h5' component='h1' sx={{ color: 'green', mt: 1, mb: 1 }}>Your order has been placed successfully.</Typography>
        <Link to='/order' style={{ marginRight: '50px' }}>View orders</Link>
        <Link to='/'>Go Home</Link>
      </Box>

      <TopRatedProducts />
    </>
  )
}

export default OrderSuccess