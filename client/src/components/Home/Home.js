import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {axiosPublic} from '../../redux/axiosPublic';
import ProductCard from '../Product/ProductCard';
import {getCategories, selectAllCategories} from '../../redux/features/categorySlice';
import './home.css'

import {Box, Typography} from '@mui/material';
import HeroSlider,{Slide} from '@mui/material/hero-slider';
//Image
const bananaLeaf = 'client/src/images/20 Idli Varieties - Different Types Of Idli Recipes.jpeg';
const bananaLeaf1 = 'client/src/images/Chinese Noodle Salad.jpeg';
const bananaLeaf2 = 'client/src/images/palte.jpeg';
const bananaLeaf3 = 'client/src/images/20 Idli Varieties - Different Types Of Idli Recipes.jpeg';


const App = () => {
    return (
        <HeroSlider
        slidingAnimation = 'left_to_right'
        arientation = 'horizontal'
        initialslide = {1}
        onBeforeChane = {(previousSlide,nextSlide)=>console.log('onBeforeChange',previousSlide,nextSlide)}
        onChange = {nextSlide => console.log('onChange',nextSlide)}
        onAfterChange = {nextSlide => console.log('onAfterChange',nextSlide)}
        style = {{
            backgroundColor:'rgba(0,0,0,0.33)'
        }}
        settings = {{
            slidingDuration: 250,
            slideingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            autoplayDuration: 3000,
            height: '100vh'
        }}
        >
            <Slide
            background={{
                backgroundImage: bananaLeaf,
                backgroundAttachment: 'fixed'
            }}
            />
            <Slide
            background={{
                backgroundImage: bananaLeaf1,
                backgroundAttachment: 'fixed'
            }}
            />
            <Slide
            background={{
                backgroundImage: bananaLeaf2,
                backgroundAttachment: 'fixed'
            }}
            />
            <Slide
            background={{
                backgroundImage: bananaLeaf3,
                backgroundAttachment: 'fixed'
            }}
            />
            
        </HeroSlider>
    )
} 
   





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
    <Box className='container'>
        <Typography variant='div'
                    component='h3'
                    sx={{m:10,p:1,background:"#89D555",color:'#1F6415',textShadow:'1px 1px 1px #555'}}>
                        Top rated products 
        </Typography>
        <Box className='card-container'>
            {topRatedProduct && topRatedProduct?.products.map(product=>(
                <ProductCard product={product} key={product._id}/>
            ))}
        </Box>

        {categories && categories.map((cat,i)=>
        <Box key={cat._id}>
            <Typography variant='div'
                    component='h3'
                    sx={{m:10,p:1,background:'#89D555',color:'#1F6415',textShadow:'1px 1px 1px #555'}}>
                        {cat.title} 
            </Typography>
            <Box className='card-container'>
                {categoryProducts && categoryProducts[i]?.products.map(product=>
                    <ProductCard product={product} key={product._id}/>
                )}
            </Box>
        </Box>
        )}

    </Box>

    
  )
}

export default Home