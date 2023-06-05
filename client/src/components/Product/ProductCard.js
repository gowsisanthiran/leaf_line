import React, { useEffect, useState } from 'react';
import { formatCurrency } from '../../utility/formatCurrency';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Box, Stack, Rating } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import { addItemsToCart, selectCartItems, removeItem } from '../../redux/features/cartSlice';
import { Opacity } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';



const ProductCard = React.forwardRef(({ product }, ref) => {
  const dispatch = useDispatch();
  const [exist, setExist] = useState(false);
  const [color, setColor] = useState('info');
  const [icon, setIcon] = useState(<AddShoppingCartIcon />);
  const [text, setText] = useState('Add to cart');

  const { products } = useSelector(selectCartItems);

  const remove = () => {
    setExist(true);
    setColor('error');
    setIcon(<DeleteIcon />);
    setText('Remove from cart');
  }

  const add = () => {
    setExist(false);
    setColor('info');
    setIcon(<AddShoppingCartIcon />);
    setText('Add to cart');
  }

  const cartHandler = () => {
    const _id = product._id;
    const quantity = 1;

    if (exist) {
      dispatch(removeItem(_id));
      toast.error('Item remove from cart');
      add();
      return;
    }
    if (!exist) {
      dispatch(addItemsToCart({ _id, quantity, toast }))
      toast.success('Item added to cart');
      remove();
      return;
    }

  }

  const getExist = () => {
    if (products) {
      const e = products.some(p => p._id === product._id);
      if (e === true) {
        remove();
      }
    }
  }
  useEffect(() => {
    getExist();
  }, [])
  const navigate = useNavigate();
  const linkToDetails = () => { navigate(`/product/${product._id}`); }

  return (
   

  

    <Box className='' sx={{backgroundColor:"white"}}>
      <CardActionArea>
        <Card onClick={linkToDetails} className='box-shadow' sx={{ position: 'relative', overflow: 'hidden', minHeight: '250px', borderRadius: '10px' ,backgroundColor:'#DAE2B6',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <CardMedia
            component="img"
            height="180px"
            image={product && product.images && product.images.length > 0 ? product.images[0].url || 'placeholder.jpg' : ''}
            alt={product && product.title}
            style={{ padding: '5px', Opacity: '1.5' }}
          />
          {product.discount > 0 ?
            <Typography variant='button' display='block' className='sale'>Sale</Typography>
            :
            ''
          }
          <CardContent>
            <Typography gutterBottom variant='button' component='h3'>
              {product?.title && product.title.length > 15 ? product.title.slice(0, 14) : product.title}
            </Typography>
            {product.discount > 0 ?
              <Typography sx={{ display: 'block', textDecoration: 'line-through', color: 'red' }} variant='caption'>
                Price: {formatCurrency(product.price)}
              </Typography>
              :
              <Typography sx={{ display: 'block' }} variant='caption'>
                Price: {formatCurrency(product.price)}
              </Typography>
              
            }
             <div className="star-rating">
            <StarIcon fontSize="small" color="primary" />
            <StarIcon fontSize="small" color="primary" />
            <StarIcon fontSize="small" color="primary" />
            <StarIcon fontSize="small" color="primary" />
            <StarIcon fontSize="small" color="disabled" />
          </div>
         
          </CardContent>
        </Card>
      </CardActionArea>







      {/* <CardActionArea onClick={linkToDetails} className='box-shadow'>
      <Card sx={{ position: 'relative', overflow: 'hidden', minHeight: '20px', borderRadius: '10px', backgroundColor: '#DAE2B6',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'  }}>
        <CardMedia
          component="img"
          height="180"
          width='10'
          image={product && product.images && product.images.length > 0 ? product.images[0].url || 'placeholder.jpg' : ''}
          alt={product && product.title}
          style={{ padding: '5px', opacity: '1.5' }}
          
        />
        {product.discount > 0 ? (
          <Typography variant='button' display='block' className='sale'>
            Sale
          </Typography>
        ) : null}
        <CardContent>
          <Typography gutterBottom variant='button' component='h3'>
            {product?.title && product.title.length > 15 ? product.title.slice(0, 14) : product.title}
          </Typography>
          {product.discount > 0 ? (
            <Typography sx={{ display: 'block', textDecoration: 'line-through', color: 'red' }} variant='caption'>
              Price: {formatCurrency(product.price)}
            </Typography>
          ) : (
            <Typography sx={{ display: 'block' }} variant='caption'>
              Price: {formatCurrency(product.price)}
            </Typography>
          )}
          <div className="star-rating">
            <StarIcon fontSize="small" color="primary" />
            <StarIcon fontSize="small" color="primary" />
            <StarIcon fontSize="small" color="primary" />
            <StarIcon fontSize="small" color="primary" />
            <StarIcon fontSize="small" color="disabled" />
          </div>
          {/* Additional content */}
          {/* <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </CardContent>
      </Card>
    </CardActionArea> */} 
      <Box sx={{ mt: 2 }} >
              {ref ?
                <Button variant='outlined'
                  ref={ref}
                  fullWidth
                  // color="primary"
                  startIcon={icon}
                  onClick={cartHandler}
                  sx={{ color:"#D2FBA4",backgroundColor: '#1A2902',borderRadius:'15px' }}
                >{text}</Button>
                :
                <Button variant='outlined'
                  fullWidth
                  // color="#D2FBA4"
                  startIcon={icon}
                  onClick={cartHandler}
                  sx={{ color:"#D2FBA4",backgroundColor: '#1A2902',borderRadius:'15px' }}
                >{text}</Button>
              }
            </Box>
    </Box>
    
  )
})

export default ProductCard




