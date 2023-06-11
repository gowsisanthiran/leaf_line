import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { selectProductDetails, productDetails } from '../../redux/features/productSlice';
import { toast } from 'react-toastify';
import BoxShadowLoader from '../Skeletons/BoxShadowLoader';
import ProductDetailsImageCarouselCard from './ProductDetailsImageCarouselCard';
import ProductDetailsInfoCard from './ProductDetailsInfoCard';
import './ProductDetails.css';
import { newReview, selectAllReviews, selectReviewMutationResult, resetMutationResult, getReviews } from '../../redux/features/reviewSlice';
import ReviewListCard from './ReviewListCard';
import { formatCurrency } from '../../utility/formatCurrency';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addItemsToCart } from '../../redux/features/cartSlice';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Dialog, IconButton, Tooltip, DialogActions, DialogContent, DialogTitle, TextareaAutosize, Stack, Rating, Typography } from '@mui/material';
import Header2 from '../Layout/Header2';

const ProductDetails = () => {
    const [submitRating, setSubmitRating] = useState(5);
    const [submitReview, setSubmitReview] = useState('');
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const decreaseQuantity = () => {
        if (1 === quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);
    }
    const increaseQuantity = () => {
        if (product.stock <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
    }
    const addToCartHandler = () => {
        const _id = product._id;
        dispatch(addItemsToCart({ _id, quantity, toast }))
        toast.success('Item added to cart');
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, product } = useSelector(selectProductDetails);
    const { reviews } = useSelector(selectAllReviews);
    const { success } = useSelector(selectReviewMutationResult);


    useEffect(() => {
        if (success) {
            toast.success('Thank for your valuable review.');
            dispatch(resetMutationResult());
        }
        dispatch(productDetails({ id, toast }));
        dispatch(getReviews({ id, toast }));
    }, [dispatch, id, success]);

    const handleSubmitReviewRating = () => {
        setOpen(false);

        const jsonData = {
            rating: submitRating,
            comment: submitReview,
            productId: product._id
        }
        dispatch(newReview({ jsonData, toast }));
    }

    return (
        <>
            {loading ? <BoxShadowLoader /> :
                <>
                <Header2/>
                    {/*Banner starts*/}
                    <section class="banner productpage">
                        <div class="container container2">
                            <div class="row">
                                <div class="col-lg-12 d-flex justify-content-center">
                                    <div class="text-center">
                                        <h2 class="banner-title">Detailed Product</h2>
                                        <nav aria-label="breadcrumb" class="d-flex justify-content-center fast-breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><Link to='/'> Home</Link></li>
                                                <li class="breadcrumb-item active" aria-current="page">Product</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Banner Ends*/}
                    <main>
                        <div class="container3">
                            <div class="card__title">
                                <div class="icon">
                                    <a href="/product"><ArrowBackIcon /></a>
                                </div>
                                <h3>Our products</h3>
                            </div>
                            <div class="card__body">
                                <div class="half">
                                    <div class="featured_text">
                                        <h1>{product && product.title && product.title.length > 15
                                            ? product.title.slice(0, 14)
                                            : product && product.title}</h1>
                                        <p class="sub">{product && product.category.title}</p>
                                        <p class="price">{product && formatCurrency(product.price - product.discount)}
                                        </p>
                                    </div>
                                    <div class="image">
                                        <img src={
                                            product && product.images && product.images.length > 0
                                                ? product.images[0].url || 'placeholder.jpg'
                                                : ''
                                        } alt="" />
                                    </div>
                                </div>
                                <div class="half">
                                    <div class="description">
                                        <p>{product && product.description}</p>
                                    </div>
                                    <div className='ratingsDiv'>
                                        {product && product.stock > 0 ?
                                            <span class="stock"> In stock</span>
                                            :
                                            <span class="stock"> Out Of stock</span>
                                        }
                                        <div class="reviews">
                                            <ul class="stars">
                                                <li>
                                                    <Stack spacing={1} className='rating-review' >
                                                        <Rating value={product && product.ratings} precision={0.1} readOnly />
                                                    </Stack>
                                                </li>
                                            </ul><br />
                                            <span>Reviews : ({product && product.numOfReviews})</span>
                                        </div>
                                    </div>
                                    <div id="quantity">QUANTITY
                                        <button class="arrow" onclick={decreaseQuantity}>&#8249;</button>
                                        <span id="number">{quantity}</span>
                                        <button class="arrow" onclick={increaseQuantity}>&#8250;</button>
                                    </div>


                                </div>

                            </div>
                            <div class="card__footer">
                                <div class="recommend">
                                    <p>Produced by</p>
                                    <h3>Leaf Line</h3>
                                </div>
                                <div class="action">
                                    <button type="button" onClick={addToCartHandler}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Box className='product-reviews' style={{ marginTop: '50px' }}>
                        <Box className='reviews' spacing={10} style={{ textAlign: 'center', marginRight: "0px" }} >
                            <Button variant="outlined" onClick={handleClickOpen} color="success" >Submit Review</Button>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle sx={{ backgroundImage: 'linear-gradient(to right, #143a0d, #c0dca5)', color: '#fff', mb: 2 }}>Review &#38; Rating</DialogTitle>
                                <DialogContent sx={{ minWidth: '350px' }} fullWidth>
                                    <Stack spacing={1} sx={{ display: 'block' }}>
                                        <Rating value={submitRating}
                                            precision={0.1}
                                            onChange={((e, newValue) => setSubmitRating(newValue))}
                                        />
                                    </Stack>
                                    <TextareaAutosize
                                        id="review"
                                        style={{ width: '100%', margin: '10px 0', padding: "10px", borderRadius: "20px" }}
                                        minRows={5}
                                        value={submitReview}
                                        variant="standard"
                                        onChange={(e => setSubmitReview(e.target.value))}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleSubmitReviewRating} color="success" >Submit</Button>
                                </DialogActions>
                            </Dialog>

                            {product?.reviews && product.reviews[0] ?
                                <Box className='review'>
                                    {product?.reviews && product.reviews.map(review =>
                                        <ReviewListCard review={review} />
                                    )}
                                </Box>
                                :
                                <Typography variant='button' spacing={10} marginLeft="20px">No reviews yet</Typography>
                            }

                        </Box>
                    </Box>

                    {/* <div class="container3">
                        <nav>
                            Back
                        </nav>
                        <div class="photo">
                            <img src={
                                product && product.images && product.images.length > 0
                                    ? product.images[0].url || 'placeholder.jpg'
                                    : ''
                            } />
                        </div>
                        <div class="cover">
                            <h2>{product?.title && product.title.length > 15
                                ? product.title.slice(0, 14)
                                : product.title}</h2>
                            <h4>Popular House Plant</h4>
                            <h1>{formatCurrency(product.price - product.discount)}</h1>
                            <p><Stack spacing={1} className='rating-review' display='block'>
                                <Rating value={product.ratings} precision={0.1} readOnly />
                            </Stack>
                                <Typography gutterBottom
                                    sx={{ display: 'block' }}
                                    component='span'>Reviews : ({product.numOfReviews})
                                </Typography></p>
                            <p>{product.stock > 0 ?
                                <span style={{ color: 'green' }}>InStock</span>
                                :
                                <span style={{ color: 'green' }}>Out of Stock</span>
                            }</p>
                            <Box className='btn-quantity'>
                                <Tooltip title='Decrease quantity' placement='top'>
                                    <IconButton color='error' component='span' onClick={decreaseQuantity}>
                                        <RemoveCircleIcon style={{ height: '40px', width: '40px' }} />
                                    </IconButton>
                                </Tooltip>
                                <label>{quantity}</label>
                                <Tooltip title='Increase quantity' placement='top'>
                                    <IconButton color='success' component='span' onClick={increaseQuantity}>
                                        <AddCircleIcon style={{ height: '40px', width: '40px' }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            {product.stock > 1 ?
                                <Button variant='contained'
                                    className='productAddtoCart'
                                    color='success'
                                    startIcon={<AddShoppingCartIcon />}
                                    onClick={addToCartHandler}>Add to cart</Button>
                                :
                                <Button variant='contained'
                                    className='productAddtoCart'
                                    // disabled
                                    color='success'
                                    startIcon={<AddShoppingCartIcon />}
                                    onClick={addToCartHandler}>Add to cart</Button>
                            }  </div>
                    </div>
                    <Box className='product-reviews' style={{ marginTop: '50px' }}>
                        <Box className='reviews' spacing={10} style={{ textAlign: 'center', marginRight: "0px" }} >
                            <Button variant="outlined" onClick={handleClickOpen} color="success" >Submit Review</Button>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle sx={{ backgroundImage: 'linear-gradient(to right, #143a0d, #c0dca5)', color: '#fff', mb: 2 }}>Review &#38; Rating</DialogTitle>
                                <DialogContent sx={{ minWidth: '350px' }} fullWidth>
                                    <Stack spacing={1} sx={{ display: 'block' }}>
                                        <Rating value={submitRating}
                                            precision={0.1}
                                            onChange={((e, newValue) => setSubmitRating(newValue))}
                                        />
                                    </Stack>
                                    <TextareaAutosize
                                        id="review"
                                        style={{ width: '100%', margin: '10px 0', padding: "10px", borderRadius: "20px" }}
                                        minRows={5}
                                        value={submitReview}
                                        variant="standard"
                                        onChange={(e => setSubmitReview(e.target.value))}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleSubmitReviewRating} color="success" >Submit</Button>
                                </DialogActions>
                            </Dialog>

                            {product?.reviews && product.reviews[0] ?
                                <Box className='review'>
                                    {product?.reviews && product.reviews.map(review =>
                                        <ReviewListCard review={review} />
                                    )}
                                </Box>
                                :
                                <Typography variant='button' spacing={10} marginLeft="20px">No reviews yet</Typography>
                            }

                        </Box>
                    </Box> */}



                    {/* <Box className='product-details'style={{marginTop:'5rem'}}>
                    <Box className='product-image-carousel'>
                        {product?.images && <ProductDetailsImageCarouselCard images={product.images}/>}
                    </Box>
                    <Box className='product-info'>
                        {product && <ProductDetailsInfoCard product={product}/>}
                    </Box>
                </Box>



                <Box className='product-reviews' style={{marginTop:'50px'}}>
                    <Box className='reviews' spacing={10} style={{textAlign:'center', marginRight:"0px"}} >
                        <Button variant="outlined" onClick={handleClickOpen}color="success" >Submit Review</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle sx={{backgroundImage:'linear-gradient(to right, #143a0d, #c0dca5)', color:'#fff',mb:2}}>Review &#38; Rating</DialogTitle>
                            <DialogContent sx={{minWidth:'350px'}} fullWidth>
                            <Stack spacing={1} sx={{display:'block'}}>
                                    <Rating value={submitRating} 
                                            precision={0.1} 
                                            onChange={((e,newValue)=>setSubmitRating(newValue))}
                                    />
                            </Stack>
                            <TextareaAutosize                            
                                id="review"
                                style={{width:'100%',margin:'10px 0',padding:"10px", borderRadius:"20px"}}
                                minRows={5}
                                value={submitReview}
                                variant="standard"
                                onChange={(e=>setSubmitReview(e.target.value))}
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleSubmitReviewRating} color="success" >Submit</Button>
                            </DialogActions>
                        </Dialog>   

                        {product?.reviews && product.reviews[0] ? 
                        <Box className='review'>
                            {product?.reviews && product.reviews.map(review=>
                                <ReviewListCard review={review} />
                            )}
                        </Box>
                         :                        
                        <Typography variant='button' spacing={10} marginLeft="20px">No reviews yet</Typography>                        
                        }

                    </Box>                
                </Box> */}
                </>
            }
        </>
    )
}

export default ProductDetails