import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Typography, Box, Grid, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserList, getAllUsers } from '../../../redux/features/authSlice';
import { selectAllProducts, getProductsByAuthorizeRoles } from '../../../redux/features/productSlice';
import { getAllOrders, selectAllOrders } from '../../../redux/features/orderSlice';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import './Admin.css';
import { Link } from 'react-router-dom';

import Chart from 'chart.js/auto';
import { LinearScale, LogarithmicScale } from 'chart.js';

Chart.register(LinearScale, LogarithmicScale);


const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(selectAllProducts);
  const { users } = useSelector(selectUserList);
  const { orders } = useSelector(selectAllOrders);
  const chartRef = useRef(null); // Create a reference for the chart

  let outOfStock = 0;
  products && products.forEach((item) => {
    if (item.stock === 0) {
      outOfStock += 1;
    }
  });

  let totalAmount = 0;
  orders && orders.forEach((item) => {
    totalAmount += item.totalPrice;
  });

  useEffect(() => {
    dispatch(getProductsByAuthorizeRoles({ toast }));
    dispatch(getAllOrders({ toast }));
    dispatch(getAllUsers({ toast }));

    // Create the chart instance
    const chartInstance = chartRef.current;
    if (chartInstance) {
      const ctx = chartInstance.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: products.map((product) => product.name),
          datasets: [
            {
              label: 'Stock',
              data: products.map((product) => product.stock),
              backgroundColor: 'rgba(175, 198, 234, 0.6)',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              precision: 0,
            },
          },
        },
      });
    }
  }, [dispatch]);

  return (
    <>
      <Box
        className='dash-box'
        sx={{
          borderRadius: '8px',
          marginLeft: '10px',
          marginRight: '11px',
          padding: '50px',
          boxShadow: '0px 3px 5px 0px #415d43',
          height: '100%',
          minHeight: '100vh',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              className='box'
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the opacity for the glass effect
                backdropFilter: 'blur(10px)', // Apply blur effect for glass
                color: 'black',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0px 3px 5px 0px #415d43',
              }}
            >
              
                <ShoppingCartOutlinedIcon />
                <Typography variant='h6' textAlign='center'>
                  Products
                </Typography>
                <Divider />
                <Typography variant='subtitle1' fontWeight='bold' textAlign='center'>
                  {products && products.length}
                </Typography>
            </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            className='box'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 3px 5px 0px #415d43',
            }}
          >

            <GroupOutlinedIcon />
            <Typography variant='h6' textAlign='center'>
              Users
            </Typography>
            <Divider />
            <Typography variant='subtitle1' fontWeight='bold' textAlign='center'>
              {users && users.length}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            className='box'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 3px 5px 0px #415d43',
            }}
          >
            <ListAltOutlinedIcon />
            <Typography variant='h6' textAlign='center'>
              Orders
            </Typography>
            <Divider />
            <Typography variant='subtitle1' fontWeight='bold' textAlign='center'>
              {orders && orders.length}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            className='box'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 3px 5px 0px #415d43',
            }}
          >
            <MonetizationOnOutlinedIcon />
            <Typography variant='h6' textAlign='center'>
              Ordered Amount
            </Typography>
            <Divider />
            <Typography variant='subtitle1' fontWeight='bold' textAlign='center'>
              {orders && totalAmount}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '30px' }}>
        <canvas ref={chartRef} />
      </Box>
    </Box>
    </>
  );
};

export default AdminDashboard;
