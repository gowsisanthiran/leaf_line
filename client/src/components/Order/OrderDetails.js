import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getOrderDetails, selectOrderDetails } from '../../redux/features/orderSlice';
import BoxShadowLoader from '../Skeletons/BoxShadowLoader';
import { formatCurrency } from '../../utility/formatCurrency';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import Header2 from '../Layout/Header2';

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, order } = useSelector(selectOrderDetails);

  useEffect(() => {
    dispatch(getOrderDetails({ id, toast }));
  }, [id, dispatch]);

  return (
    <>
      <Header2 />
      {/*Banner starts*/}
      <section className="banner productpage">
        <div className="container container2">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="text-center">
                <h2 className="banner-title">Order Details</h2>
                <nav aria-label="breadcrumb" className="d-flex justify-content-center fast-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <HomeIcon /> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Order Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Banner Ends*/}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 2px 4px #5F8D4E',
          borderRadius: '4px',
          padding: '50px',
          backgroundColor: '#fff',
          height: '100% !important',
          width: 'auto',
          marginBottom:"40px"
        }}
      >
        {loading ? (
          <BoxShadowLoader />
        ) : (
          <>
            <Typography component="h1" variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
              Order details
            </Typography>

            <Box sx={{ m: '20px 10px', display: 'flex', gap: '20px' }}>
              <Box className="title" sx={{ flex: '1 1 auto', minWidth: 0 }}>
                <Avatar
                  sx={{
                    mr: 1,
                    background: '#fff',
                    color: '#9c27b0',
                    width: 30,
                    height: 30,
                  }}
                >
                  <MonitorHeartIcon />
                </Avatar>
                <Typography variant="button" component="div" gutterBottom>
                  Order Status
                </Typography>
              </Box>
              <Box sx={{ flex: '1 1 auto', minWidth: 0 }}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AttachMoneyIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      {order?.paymentInfo?.status === 'succeeded' ? 'Paid' : 'Not Paid'}
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <TakeoutDiningIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={order?.orderStatus} />
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Box className="base-div4" sx={{ display: 'flex', gap: '20px' }}>
              <Box className="div3" sx={{ flex: '1 1 auto', minWidth: 0 }}>
                <Box className="title">
                  <Avatar
                    sx={{
                      mr: 1,
                      background: '#fff',
                      color: '#9c27b0',
                      width: 30,
                      height: 30,
                    }}
                  >
                    <LocalShippingIcon />
                  </Avatar>
                  <Typography variant="button" component="div" gutterBottom>
                    Shipping
                  </Typography>
                </Box>
                <Box>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PhoneIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>{order?.shippingInfo?.phone}</ListItemText>
                    </ListItem>

                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <LocationOnIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${order?.shippingInfo?.address}, ${order?.shippingInfo?.city}, ${order?.shippingInfo?.zipCode}, ${order?.shippingInfo?.state}, ${order?.shippingInfo?.country}`}
                      />
                    </ListItem>
                  </List>
                </Box>
              </Box>

              <Box className="div3" sx={{ flex: '1 1 auto', minWidth: 0 }}>
                <Box className="title">
                  <Avatar
                    sx={{
                      mr: 1,
                      background: '#fff',
                      color: '#9c27b0',
                      width: 30,
                      height: 30,
                    }}
                  >
                    <ShoppingCartIcon />
                  </Avatar>
                  <Typography component="div" variant="button" sx={{ textAlign: 'center' }}>
                    Cart Items Info
                  </Typography>
                </Box>
                <Box>
                  {order.orderItems &&
                    order.orderItems.map((item, i) => (
                      <Box key={item._id} sx={{ display: 'flex', width: '100%', mb: 2 }}>
                        <Box>
                          <img
                            src={item.product.images[0].url}
                            alt={item.title}
                            style={{ maxWidth: 100, marginRight: '5px' }}
                          />
                        </Box>
                        <Box>
                          <Typography component="div" variant="button">
                            <Link to={`/product/${item.product._id}`}>{item.product.title}</Link>
                          </Typography>
                          <Typography component="div" variant="button">
                            Price: {formatCurrency(item.price)} x {item.quantity} ={' '}
                            {formatCurrency(item.price * item.quantity)}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                </Box>
              </Box>

              <Box className="div3" sx={{ flex: '1 1 auto', minWidth: 0 }}>
                <Box className="title">
                  <Avatar
                    sx={{
                      mr: 1,
                      background: '#fff',
                      color: '#9c27b0',
                      width: 30,
                      height: 30,
                    }}
                  >
                    <FactCheckIcon />
                  </Avatar>
                  <Typography component="div" variant="button" sx={{ textAlign: 'center' }}>
                    Orders Info
                  </Typography>
                </Box>

                <Grid container>
                  <Grid item xs>
                    <Typography variant="button" component="div">
                      Subtotal:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="button" component="div">
                      {formatCurrency(order?.itemsPrice)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <Typography variant="button" component="div">
                      Shipping Charges:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="button" component="div">
                      {formatCurrency(order?.shippingPrice)}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs>
                    <Typography variant="button" component="div">
                      Tax:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="button" component="div">
                      {formatCurrency(order?.taxPrice)}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs>
                    <Typography variant="button" component="div">
                      Total:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="button" component="div">
                      {formatCurrency(order?.totalPrice)}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default OrderDetails;
