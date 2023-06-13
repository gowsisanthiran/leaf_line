import React, { useEffect, useState } from 'react';
import { formatCurrency } from '../../utility/formatCurrency';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Box, Stack, Rating } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import './productCart.css'
import { addItemsToCart, selectCartItems, removeItem } from '../../redux/features/cartSlice';
import { Opacity } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';



const ProductCard = React.forwardRef(({ product }, ref) => {
  const dispatch = useDispatch();
  const [exist, setExist] = useState(false);
  const [color, setColor] = useState('info');
  const [icon, setIcon] = useState(<AddShoppingCartIcon />);
  const [text, setText] = useState('Add to cart');
  const [isHovered, setIsHovered] = useState(false);


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
    setText('Add to Cart');
  }

  const cartHandler = () => {
    const _id = product._id;
    const quantity = 1;

    if (exist) {
      dispatch(removeItem(_id));
      toast('Item remove from cart',{
        className: 'custom-toast', // Add the custom class here
        bodyClassName: 'custom-toast-body', // Add a separate class for the toast body if needed
      });
      add();
      return;
    }
    if (!exist) {
      dispatch(addItemsToCart({ _id, quantity, toast }))
      toast('Item added to cart',{
        className: 'custom-toast', // Add the custom class here
        bodyClassName: 'custom-toast-body', // Add a separate class for the toast body if needed
      });
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

  // Add event handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
   

  

    // <Box className='' sx={{backgroundColor:"white"}}>
    //   <CardActionArea>
    //     <Card onClick={linkToDetails} className='box-shadow' sx={{ position: 'relative', overflow: 'hidden', minHeight: '250px',borderRadius: '10px' }}>
    //       <CardMedia
    //         component="img"
    //         height="140"
    //         image={product && product.images && product.images.length > 0 ? product.images[0].url || 'placeholder.jpg' : ''}
    //         alt={product && product.title}
    //         style={{ padding: '5px', Opacity: '0.5' }}
    //       />
    //       {product.discount > 0 ?
    //         <Typography variant='button' display='block' className='sale'>Sale</Typography>
    //         :
    //         ''
    //       }
    //       <CardContent>
    //         <Typography gutterBottom variant='button' component='h3'>
    //           {product?.title && product.title.length > 15 ? product.title.slice(0, 14) : product.title}
    //         </Typography>
    //         {product.discount > 0 ?
    //           <Typography sx={{ display: 'block', textDecoration: 'line-through', color: 'red' }} variant='caption'>
    //             Price: {formatCurrency(product.price)}
    //           </Typography>
    //           :
    //           <Typography sx={{ display: 'block' }} variant='caption'>
    //             Price: {formatCurrency(product.price)}
    //           </Typography>
    //         }
    //       </CardContent>
    //     </Card>
    //   </CardActionArea>
    //   <Box sx={{ mt: 2 }} >
    //           {ref ?
    //             <Button variant='outlined'
    //               ref={ref}
    //               fullWidth
    //               // color="primary"
    //               startIcon={icon}
    //               onClick={cartHandler}
    //               sx={{ color:"#D2FBA4",backgroundColor: '#1A2902',borderRadius:'15px' }}
    //             >{text}</Button>
    //             :
    //             <Button variant='outlined'
    //               fullWidth
    //               // color="#D2FBA4"
    //               startIcon={icon}
    //               onClick={cartHandler}
    //               sx={{ color:"#D2FBA4",backgroundColor: '#1A2902',borderRadius:'15px' }}
    //             >{text}</Button>
    //           }
    //         </Box>
    // </Box>

    // <li className="post-4820 product type-product status-publish has-post-thumbnail product_cat-black-tea product_tag-organic instock shipping-taxable purchasable product-type-simple">
    //   <div className="item">
    //     <a href="http://chaitan.like-themes.com/product/wu-yi-rou-gui/">
    //       <div className="image">
    //         <img
    //           width="340"
    //           height="227"
    //           src={
    //                     product && product.images && product.images.length > 0
    //                       ? product.images[0].url || 'placeholder.jpg'
    //                       : ''
    //                    }
    //           className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
    //           alt=""
    //           loading="lazy"
    //         />
    //       </div>
    //       <div className="star-rating">
    //         <span style={{ width: '100%' }}>
    //         <Stack spacing={1} sx={{display:'block'}}>
    //              <Rating name="half-rating-read" value={product.ratings} precision={0.1} readOnly />
    //          </Stack>
    //          <Typography gutterBottom
    //                      sx={{display:'block'}}
    //                    variant='caption'
    //                      component='span'>Reviews : ({product.numOfReviews})
    //          </Typography>            </span>
    //       </div>
    //       <h2 className="woocommerce-loop-product__title">Wu Yi Rou Gui</h2>
    //     </a>
    //     <a
    //       onClick={linkToDetails}
    //       className="btn btn-white btn-more"
    //     >
    //       More info
    //     </a>
    //     <div className="post_content entry-content">
    //       Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, ...
    //     </div>
    //     <span className="price">
    //       <span className="woocommerce-Price-amount amount">
    //         <span className="woocommerce-Price-currencySymbol">$</span>3.99
    //       </span>
    //     </span>
    //     <a
    //       href="/shop/?add-to-cart=4820"
    //       data-quantity="1"
    //       className="product_type_simple add_to_cart_button ajax_add_to_cart btn"
    //       data-product_id="4820"
    //       data-product_sku=""
    //       aria-label="Add “Wu Yi Rou Gui” to your cart"
    //       rel="nofollow"
    //     >
    //       Add to cart
    //     </a>
    //   </div>
    // </li>

    //   <Box className="productCard">
    //   <CardActionArea>
    //     <Card
    //       className={`box-shadow ${isHovered ? 'flipped' : ''}`}
    //       onClick={linkToDetails}
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       <div className="card-inner">
    //         <div className="card-front">
    //           <CardMedia
    //             component="img"
    //             height="140"
    //             image={
    //               product && product.images && product.images.length > 0
    //                 ? product.images[0].url || 'placeholder.jpg'
    //                 : ''
    //             }
    //             alt={product && product.title}
    //             style={{
    //               padding: '5px',
    //               height: '200px',
    //               borderRadius: '20%',
    //             }}
    //           />
    //           {product.discount > 0 ? (
    //             <Typography variant="button" display="block" className="sale">
    //               Sale
    //             </Typography>
    //           ) : (
    //             ''
    //           )}
    //           <CardContent>
    //             <Typography gutterBottom variant="button" component="h1">
    //               {product?.title && product.title.length > 15
    //                 ? product.title.slice(0, 14)
    //                 : product.title}
    //             </Typography>
    //             <Stack spacing={1} sx={{ display: 'block' }}>
    //               <Rating
    //                 name="half-rating-read"
    //                 value={product.ratings}
    //                 precision={0.1}
    //                 readOnly
    //               />
    //             </Stack>
    //             <Typography
    //               gutterBottom
    //               sx={{ display: 'block' }}
    //               variant="caption"
    //               component="span"
    //             >
    //               Reviews: ({product.numOfReviews})
    //             </Typography>
    //             {product.discount > 0 ? (
    //               <Box>
    //                 <Typography
    //                   sx={{ display: 'block', textDecoration: 'line-through', color: 'red' }}
    //                   variant="caption"
    //                 >
    //                   Price: ({formatCurrency(product.price)})
    //                 </Typography>
    //                 <Typography sx={{ display: 'block' }} variant="caption">
    //                   Price: ({formatCurrency(product.price - product.discount)})
    //                 </Typography>
    //               </Box>
    //             ) : (
    //               <Typography sx={{ display: 'block' }} variant="caption">
    //                 Price: {formatCurrency(product.price)}
    //               </Typography>
    //             )}
    //             {product.localShipmentPolicy === 'free' ? (
    //               <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //                 <LocalShippingIcon sx={{ mr: 1, color: '#458a6f' }} />
    //                 <Typography variant="caption">Free Shipping</Typography>
    //               </Box>
    //             ) : (
    //               <br />
    //             )}
    //             <Typography sx={{ display: 'block' }} variant="button">
    //               View details & buy.
    //             </Typography>
    //           </CardContent>
    //         </div>
    //         <div className="card-back">
    //           <Box sx={{ mt: 2 }}>
    //             {ref ? (
    //               <Button
    //                 variant="outlined"
    //                 ref={ref}
    //                 fullWidth
    //                 color="primary"
    //                 startIcon={icon}
    //                 onClick={cartHandler}
    //                 style={{ backgroundColor: 'rgb(225,225,222)' }}
    //               >
    //                 {text}
    //               </Button>
    //             ) : (
    //               <Button
    //                 variant="outlined"
    //                 fullWidth
    //                 color="primary"
    //                 startIcon={icon}
    //                 onClick={cartHandler}
    //                 style={{ backgroundColor: 'rgb(225,225,222)' }}
    //               >
    //                 {text}
    //               </Button>
    //             )}
    //           </Box>
    //         </div>
    //       </div>
    //     </Card>
    //   </CardActionArea>
    // </Box>

    //     <div class="container page-wrapper">
    //   <div class="page-inner">
    //     <div class="">
    //       <div class="el-wrapper" onClick={linkToDetails}>
    //         <div class="box-up">
    //           <img class="img" src={
    //                    product && product.images && product.images.length > 0
    //                      ? product.images[0].url || 'placeholder.jpg'
    //                      : ''
    //                  } alt=""/>
    //           <div class="img-info">
    //             <div class="info-inner">
    //               <span class="p-name">{product?.title && product.title.length > 15
    //                      ? product.title.slice(0, 14)
    //                      : product.title}</span>
    //               <span class="p-company"></span>
    //             </div>
    //             <div class="a-size"><Stack spacing={1} sx={{ display: 'block' }}>
    //                    <Rating
    //                      name="half-rating-read"
    //                      value={product.ratings}
    //                      precision={0.1}
    //                      readOnly
    //                    />
    //                  </Stack><span class="size">Reviews: ({product.numOfReviews})</span></div>
    //           </div>
    //         </div>

    //         <div class="box-down">
    //           <div class="h-bg">
    //             <div class="h-bg-inner"></div>
    //           </div>

    //           <a class="cart" onClick={cartHandler} style={{cursor: 'pointer'}}>
    //             <span class="price">{product.discount > 0 ? (
    //                    <Box>
    //                      <Typography
    //                        sx={{ display: 'block', textDecoration: 'line-through', color: 'red' }}
    //                        variant="caption"
    //                      >
    //                         ({formatCurrency(product.price)})
    //                      </Typography>
    //                      <Typography sx={{ display: 'block' }} variant="caption">
    //                         ({formatCurrency(product.price - product.discount)})
    //                      </Typography>
    //                    </Box>
    //                  ) : (
    //                    <Typography sx={{ display: 'block' }} variant="caption">
    //                       {formatCurrency(product.price)}
    //                    </Typography>
    //                  )}</span>
    //             <span class="add-to-cart">
    //               <span class="txt">Add in cart</span>
    //             </span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div class="card" >
    //   <div class="imgBox" onClick={linkToDetails}>
    //     <img src={
    //       product && product.images && product.images.length > 0
    //         ? product.images[0].url || 'placeholder.jpg'
    //         : ''
    //     } alt="mouse corsair" class="mouse" />
    //   </div>

    //   <div class="contentBox">
    //     <h3>{product?.title && product.title.length > 15
    //       ? product.title.slice(0, 14)
    //       : product.title}</h3>
    //     <h2><Stack spacing={1} sx={{ display: 'block', color: 'white' }}>
    //       <Rating
    //         name="half-rating-read"
    //         value={product.ratings}
    //         precision={0.1}
    //         readOnly
    //       />
    //     </Stack>
    //     </h2>
    //     <h2 class="price">{product.discount > 0 ? (
    //       <Box>
    //         <Typography
    //           sx={{ display: 'block', textDecoration: 'line-through', color: 'red' }}
    //           variant="caption"
    //         >
    //           Price: ({formatCurrency(product.price)})
    //         </Typography>
    //         <Typography sx={{ display: 'block' }} variant="caption">
    //           Price: ({formatCurrency(product.price - product.discount)})
    //         </Typography>
    //       </Box>
    //     ) : (
    //       <Typography sx={{ display: 'block' }} variant="caption">
    //         Price: {formatCurrency(product.price)}
    //       </Typography>
    //     )}</h2>
    //     <p>{product.localShipmentPolicy === 'free' ? (
    //       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //         <LocalShippingIcon sx={{ mr: 1, color: '#458a6f' }} />
    //         <Typography variant="caption" style={{ color: 'white' }}>Free Shipping</Typography>
    //       </Box>
    //     ) : (
    //       <br />
    //     )}</p>
    //     {ref ? (
    //       <a class="buy" ref={ref} onClick={cartHandler}>{icon}</a>
    //     ) : (
    //       <a class="buy" onClick={cartHandler}>{icon}</a>
    //     )}

    //   </div>

    // </div>



    <div class="card">
      
      <div class="price-corner"></div>
      <div class="img-wrapper"  >
        <img src={
          product && product.images && product.images.length > 0
            ? product.images[0].url || 'placeholder.jpg'
            : ''
        } alt=""  style={{height: '100px',width: '100px', objectFit: 'cover'}}/>
      </div>
      <div class="content-wrapper">
        <h3 class="title productCardTitle" onClick={linkToDetails}>{product?.title && product.title.length > 15
          ? product.title.slice(0, 14)
          : product.title}</h3>

        <p class="price" data-price={product.price}>{product.discount > 0 ? (
          <Box>
            <Typography
              sx={{ display: 'block', textDecoration: 'line-through', color: 'red' }}
              variant="caption"
            >
              Price: ({formatCurrency(product.price)})
            </Typography>
            <Typography sx={{ display: 'block' }} variant="caption">
              Price: ({formatCurrency(product.price - product.discount)})
            </Typography>
          </Box>
        ) : (
          <Typography sx={{ display: 'block' }} variant="caption">
            Price: {formatCurrency(product.price)}
          </Typography>
        )}</p>
        <div class="inner-content-wrapper">
          <p class="about">
          {product.localShipmentPolicy === 'free' ? (
                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     <LocalShippingIcon sx={{ mr: 1, color: '#458a6f' }} />
                     <Typography variant="caption">Free Shipping</Typography>
                   </Box>
                 ) : (
                   <br />
                 )}
          </p>
          <p class= "about">
          <Stack spacing={1} sx={{ display: 'block' }}>
                   <Rating
                     name="half-rating-read"
                     value={product.ratings}
                     precision={0.1}
                     readOnly
                   />
                 </Stack>
          </p>

          <div class="icons">
          {ref ? (
            <span class="icon icon1"ref={ref} onClick={cartHandler}>{icon}</span>
            ) : (
              <span class="icon icon1"ref={ref} onClick={cartHandler}>{icon}</span>
              )}
          </div>
        </div>
      </div>
    </div>





    //   <div class="card">
    //   <div class="content">
    //     <div class="back">
    //       <div class="back-content">
    //         <img src={
    //                  product && product.images && product.images.length > 0
    //                    ? product.images[0].url || 'placeholder.jpg'
    //                    : ''
    //                }
    //                alt={product && product.title}/>
    //       </div>
    //     </div>
    //     <div class="front">

    //       <div class="img">
    //         <div class="circle">
    //         </div>
    //         <div class="circle" id="right">
    //         </div>
    //         <div class="circle" id="bottom">
    //         </div>
    //       </div>

    //       <div class="front-content">
    //         <small class="badge">{product?.title && product.title.length > 15
    //                    ? product.title.slice(0, 14)
    //                    : product.title}</small>
    //         <div class="description">
    //           <div class="title">
    //             <p class="title">
    //             <Stack spacing={1} sx={{ display: 'block' }}>
    //                  <Rating
    //                    name="half-rating-read"
    //                    value={product.ratings}
    //                    precision={0.1}
    //                    readOnly
    //                  />
    //                </Stack>
    //                <Typography
    //                  gutterBottom
    //                  sx={{ display: 'block' }}
    //                  variant="caption"
    //                  component="span"
    //                >
    //                  Reviews: ({product.numOfReviews})
    //                </Typography>
    //               <strong>Spaguetti Bolognese</strong>
    //             </p>
    //           </div>
    //           <p class="card-footer">
    //             30 Mins &nbsp; | &nbsp; 1 Serving
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    // <div className="card">
    //   {product.discount > 0 ? (
    //     <Typography variant="button" display="block" className="sale">
    //       Sale
    //     </Typography>
    //   ) : (
    //     ''
    //   )}
    //   <div className="card-img"><img className='productImg' src={
    //     product && product.images && product.images.length > 0
    //       ? product.images[0].url || 'placeholder.jpg'
    //       : ''
    //   } alt="" /></div>
    //   <div className="card-info">
    //     <p className="text-title">{product?.title && product.title.length > 15
    //       ? product.title.slice(0, 14)
    //       : product.title}</p>
    //     <p className="text-body">{product.localShipmentPolicy === 'free' ? (
    //       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //         <LocalShippingIcon sx={{ mr: 1, color: '#458a6f' }} />
    //         <Typography variant="caption">Free Shipping</Typography>
    //       </Box>
    //     ) : (
    //       <br />
    //     )}
    //       <Typography sx={{ display: 'block' }} variant="button">
    //         View details & buy.
    //       </Typography></p>
    //   </div>
    //   <div className="card-footer">
    //     <span className="text-title">
    //       {product.discount > 0 ? (
    //         <Box>
    //           <Typography
    //             sx={{ display: 'block', textDecoration: 'line-through', color: 'red' }}
    //             variant="caption"
    //           >
    //             ({formatCurrency(product.price)})
    //           </Typography>
    //           <Typography sx={{ display: 'block' }} variant="caption">
    //             ({formatCurrency(product.price - product.discount)})
    //           </Typography>
    //         </Box>
    //       ) : (
    //         <Typography sx={{ display: 'block' }} variant="caption">
    //           {formatCurrency(product.price)}
    //         </Typography>
    //       )}</span>
    //     <div className="card-button">
    //       <svg className="svg-icon" viewBox="0 0 20 20" onClick={cartHandler}>
    //       <ShoppingCartIcon/>
    //       </svg>
    //     </div>
    //   </div>
    // </div>
    // <>
    //   <div class="card">
    //     <div class="heading">UltraFlex</div>
    //     <div class="details">Beste Design till date.<br />Flex it up as you wish,<br /> but you can't break it.</div>
    //     <div class="price">$299</div>
    //     <button class="btn1">Buy</button>
    //     <button class="btn2">Add to Cart</button>
    //   </div>
    //   <svg viewBox="0 0 100 100" height="100px" width="100px" id="Layer_1" className="glasses">
    //       <image
    //         href={
    //           product && product.images && product.images.length > 0
    //             ? product.images[0].url || 'placeholder.jpg'
    //             : ''
    //         }
    //         height="100"
    //         width="100"
    //         id="image0"
    //       />
    //     </svg>
    // </>

    //     <div class="card">
    //   <div class="GameImg">

    //     <div class="Gfooter">
    //       <div class="SmallIcon"></div>
    //       <span class="Stars"><Stack spacing={1} sx={{ display: 'block' }}>
    //                    <Rating
    //                      name="half-rating-read"
    //                      value={product.ratings}
    //                      precision={0.1}
    //                      readOnly
    //                    />
    //                  </Stack></span>
    //       <span class="Descripion">This is Descripion of The Game</span>
    //     </div>

    //     <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 50.000000 50.000000" height="50.000000pt" width="50.000000pt" version="1.0" xmlns="http://www.w3.org/2000/svg" class="GameIcon">
    //     <g stroke="none" fill="#ff5858" transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)">
    //     <path d="M427 471 c-2 -11 -36 -35 -78 -57 -62 -33 -77 -46 -94 -81 -14 -30 -24 -41 -35 -36 -64 25 -90 27 -117 7 -58 -42 -115 -185 -99 -248 19 -76 81 -73 195 9 19 14 41 25 50 25 9 0 43 -18 75 -40 33 -22 70 -43 83 -46 64 -16 101 30 89 113 -7 56 -62 159 -99 187 -28 20 -56 18 -121 -9 -16 -7 -17 -5 -11 16 12 39 36 60 102 90 56 25 83 50 83 78 0 18 -17 12 -23 -8z m-41 -252 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-236 -14 c0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m196 -26 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m80 0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-40 -40 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"></path></g></svg>
    //     <span class="Name">Game Name</span>
    //   </div>
    // </div>
  )
})

export default ProductCard




