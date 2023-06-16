import React, { useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders, selectAllOrders } from '../../redux/features/orderSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import { Box, Typography, Tooltip } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import BoxShadowLoader from '../Skeletons/BoxShadowLoader';
import Header2 from '../Layout/Header2';

const MyOrders = () => {
  const dispatch = useDispatch();
  const { loading, orders } = useSelector(selectAllOrders);

  const columns = [
    // { field: 'id', headerName: 'Order ID', headerClassName: 'gridHeader', flex: 1, maxWidth: 90 },
      // { field: 'orderId', headerName: 'Order ID', headerClassName: 'gridHeader', flex: 1, maxWidth: 90 },
    { field: 'status', headerName: 'Status', headerClassName: 'gridHeader', flex: 1, maxWidth: 200 },
    { field: 'itemsQty', headerName: 'Quantity', headerClassName: 'gridHeader', flex: 1, maxWidth: 200, type: 'number',},
    { field: 'amount', headerName: 'Amount', headerClassName: 'gridHeader', flex: 1, maxWidth: 200, type: 'number' },
    {
      field: 'details',
      headerName: 'Details',
      headerClassName: 'gridHeader',
      flex: 1,
      maxWidth: 200,
      type: 'number',
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.getValue(params.id,'id')}`}>
              <Tooltip title='View Details' placement='top'>
                <LaunchIcon sx={{ width: '40px', height: '40px', color: 'green' }} />
              </Tooltip>
            </Link>
          </>
        );
      },
    },
  ];

  const rows = orders?.map((order) => ({
    id: order._id,
    orderId: order.shortId,
    status: order.orderStatus,
    itemsQty: order.orderItems.length,
    amount: 'LKR' + '.' + order.totalPrice,
  }));

  useEffect(() => {
    dispatch(getMyOrders({ toast }));
  }, [dispatch]);

  return (
    <>
      <Header2 />
      <section class="banner productpage">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
              <div class="text-center">
                <h2 class="banner-title">My Orders</h2>
                <nav aria-label="breadcrumb" class="d-flex justify-content-center fast-breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">
                        <HomeIcon /> Home
                      </Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      My Orders
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="text-center">
                <h2 class="banner-title">My Orders</h2>
                <nav aria-label="breadcrumb" class="d-flex justify-content-center fast-breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to='/'><HomeIcon /> Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">My Orders</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 2px 4px green',
          borderRadius: '4px',
          padding: '50px',
          backgroundColor: '#fff',
          height: '100% !important',
          width: '60%',
          marginLeft: '360px',
          marginRight: '0px',
          marginBottom:"50px"
        }}
      >
        <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '15px', textAlign: 'center' }}>
          {loading ? (
            <BoxShadowLoader />
          ) : (
            <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} autoHeight />
          )}
        </Box>
      </Box>
    </>
  );
};

export default MyOrders;
