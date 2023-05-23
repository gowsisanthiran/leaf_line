import React, { useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders, selectAllOrders } from '../../redux/features/orderSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { Box, Typography, Tooltip } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import BoxShadowLoader from '../Skeletons/BoxShadowLoader';

const MyOrders = () => {
  const dispatch = useDispatch();
  const { loading, orders } = useSelector(selectAllOrders);

  const columns = [
    { field: 'id', headerName: 'Order ID', headerClassName: 'gridHeader', flex: 1, maxWidth: 90 },
    { field: 'status', headerName: 'Status', headerClassName: 'gridHeader', flex: 1, minWidth: 100 },
    { field: 'itemsQty', headerName: 'Quantity', headerClassName: 'gridHeader', flex: 1, minWidth: 100, type: 'number' },
    { field: 'amount', headerName: 'Amount', headerClassName: 'gridHeader', flex: 1, minWidth: 80, type: 'number' },
    {
      field: 'details',
      headerName: 'Details',
      headerClassName: 'gridHeader',
      flex: 0.5,
      minWidth: 80,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.getValue(params.id, 'id')}`}>
              <Tooltip title='View Details' placement='top'>
                <LaunchIcon sx={{ width: '30px', height: '30px', color: '#1976d2' }} />
              </Tooltip>
            </Link>
          </>
        );
      },
    },
  ];

  const rows = orders?.map((order) => ({
    id: order._id,
    status: order.orderStatus,
    itemsQty: order.orderItems.length,
    amount: order.totalPrice,
  }));

  useEffect(() => {
    dispatch(getMyOrders({ toast }));
  }, [dispatch]);

  return (
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
        height: "100% !important",
        width: "80%",
        marginLeft: "160px",
        marginRight:"0px"

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
  );
};

export default MyOrders;
