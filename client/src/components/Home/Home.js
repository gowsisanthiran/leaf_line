import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {axiosPublic} from '../../redux/axiosPublic';
import ProductCard from '../Product/ProductCard';
import {getCategories, selectAllCategories} from '../../redux/features/categorySlice';
import './home.css'
import Carousel from 'react-material-ui-carousel'
import sl1 from '../../images/pic01.jpeg'
import sl2 from '../../images/sl1.jpg'


import {Box, Typography} from '@mui/material';

const Home = () => {
    const limit=4;
    const dispatch=useDispatch();
    const {categories}=useSelector(selectAllCategories);
 
    useEffect(() => {
      dispatch(getCategories({toast}));
    }, [dispatch]);
    
    const [topRatedProduct,setTopRatedProduct]=useState();
    useEffect(() => {
      const getProducts=async()=>{
        try{
            const response=await axiosPublic.get(`/products?&limit=${limit}&sort_by_ratings=${true}`)
            setTopRatedProduct(response.data);
        }catch(error){
            console.log(error);
        }
      }
      getProducts();
    }, [])

    const [categoryProducts,setCategoryProducts]=useState([]);
    const [catProductsLoading,setCatProductsLoading]=useState(false);

    useEffect(() => {
      if(categories){
        setCatProductsLoading(true);
        const getProducts=async()=>{
            try{
                const response=categories.map(async (category)=>
                    await axiosPublic.get(`/products?&limit=${limit}&category=${category._id}`))
                    Promise.all(response).then((values)=>{
                        setCategoryProducts([...categoryProducts,...values.map(value=>value.data)])
                    })
            }catch(error){
                console.log(error);
                setCatProductsLoading(false);
            }finally{
                setCatProductsLoading(false);
            }
        }
        getProducts();
      }
    }, [categories,catProductsLoading]);




    
    
  return (
    <Box >
        <div className='banner'>
        <Carousel>
            <img src={sl1} className='bgImg' />
            <img src={sl2} className='bgImg' />
            <img src={sl2} className='bgImg' />
            <img src={sl2} className='bgImg' />
        </Carousel>
        </div>
        <Box className='container'>
            <Typography variant='div' component='h3' sx={{m:10,p:1,background:"#89D555",color:'#1F6415',textShadow:'1px 1px 1px #555'}}>
                Top rated products 
            </Typography>
            <Box className='card-container'>
                {topRatedProduct && topRatedProduct?.products.map(product=>(
                    <ProductCard product={product} key={product._id}/>
                ))}
            </Box>
      </Box>


    </Box>

    
  )
}

export default Home