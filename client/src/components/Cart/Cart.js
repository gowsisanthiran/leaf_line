import React from 'react';
import { formatCurrency } from '../../utility/formatCurrency';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';

import { Button, Box, Typography, IconButton, Tooltip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { addItemsToCart, selectCartItems, removeItem } from '../../redux/features/cartSlice';
import './Cart.css';
import CartItemCard from './CartItemCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header2 from '../Layout/Header2';
const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products } = useSelector(selectCartItems);

    const deleteCartItems = (_id) => {
        dispatch(removeItem(_id));
    }
    const decreaseQuantity=(_id,qty)=>{
        const quantity=qty-20;
        if(qty<=1) return;
        dispatch(addItemsToCart({_id,quantity}));
      }
      const increaseQuantity=(_id,qty,stock)=>{
        const quantity=qty+20;
        if(stock<=qty) return;
        dispatch(addItemsToCart({_id,quantity}));
      }
      const checkOutHandler=()=>{
        navigate('/auth',{state:{path:'/shipping'}});
      }
      
    return (
      <>
      <Header2/>
      <section class="banner productpage">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                  <div class="text-center">
                      <h2 class="banner-title">Cart</h2>
                      <nav aria-label="breadcrumb" class="d-flex justify-content-center fast-breadcrumb">
                          <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/'><HomeIcon/> Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Cart</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  </section>
        <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    textAlign: 'center',
    boxShadow: '0 2px 4px #285430',
    borderRadius: '4px',
    backgroundColor: '#fff',
    padding: '55px',
    justifyContent: 'center',
    marginLeft: '170px',
    marginTop: '30px'
  }}
>
  {products.length > 0 ? (
    
    <Box className='cart-items'>
      <Box className='cart-header'>
        <Typography variant='button' display='block' color='#1b5e20'>Product</Typography>
        <Typography variant='button' display='block' color='#1b5e20' sx={{ textAlign: 'center' }}>Quantity</Typography>
        <Typography variant='button' display='block' color='#1b5e20' sx={{ textAlign: 'right' }}>Subtotal</Typography>
      </Box>
      {products.map((item) => (
        <Box className='cart-body' key={item._id}>
          <CartItemCard item={item} deleteCartItems={deleteCartItems} />

          <Box sx={{ textAlign: 'center' }}>
            <Box className='btn-quantity' sx={{ m: 0 }}>
              <Tooltip title='Decrease quantity' placement='top'>
                <IconButton color='error' component='span' onClick={() => decreaseQuantity(item._id, item.quantity)}>
                  <RemoveCircleIcon style={{ height: '40px', width: '40px' }} />
                </IconButton>
              </Tooltip>
              <label>{item.quantity}</label>
              <Tooltip title='Increase quantity' placement='top'>
                <IconButton color='success' component='span' onClick={() => increaseQuantity(item._id, item.quantity, item.stock)}>
                  <AddCircleIcon style={{ height: '40px', width: '40px' }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Typography variant='button' display='block' className='item-subtotal'>
            {formatCurrency(item.quantity * item.price)}
          </Typography>
        </Box>
      ))}

      <Box className='cart-total-price'>
        <Typography variant='button' display='block' className='item-subtotal'>
          Total: {formatCurrency(products.reduce((acc, item) => acc + item.quantity * item.price, 0))}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant='contained'
          sx={{ backgroundColor: '#617A55 ','&:hover': { backgroundColor: '#CCD5AE' }}}
          startIcon={<ShoppingCartCheckoutIcon />}
          onClick={checkOutHandler}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  ) : (
    <Box sx={{ marginTop:'5rem',padding:'5rem'}}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center', fontFamily: 'Open Sans , sans-serif' }}>
      <Typography variant='h4' component='div' gutterBottom>
        Cart is Empty
      </Typography>
      <Typography variant='h4' component='div' gutterBottom>
        Add something to make me happy :)
      </Typography>
        <img src="https://st2.depositphotos.com/4060975/9124/v/600/depositphotos_91240944-stock-illustration-remove-cart-colored-vector-illustration.jpg" alt="banner-img" style={{width:'150px'
}} />
      {/* <ShoppingCartIcon sx={{ width: '100px', height: '100px', color: '#355e3b' }} /> */}
      <Typography sx={{ mt: 4 }}>
        <Link to='/'style={{color:'#609966',textDecoration: 'none',fontFamily: 'Poppins, sans-serif',fontSize:'20px'}}>Back to home</Link>
      </Typography>
    </Box>
    </Box>
  )}
</Box>
</>
    )
}

export default Cart