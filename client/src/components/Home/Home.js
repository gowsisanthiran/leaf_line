// // import React,{useEffect,useState} from 'react'
// // import {useDispatch,useSelector} from 'react-redux';
// // import {toast} from 'react-toastify';
// // import {axiosPublic} from '../../redux/axiosPublic';
// // import ProductCard from '../Product/ProductCard';
// // import {getCategories, selectAllCategories} from '../../redux/features/categorySlice';
// // import './home.css'
// // // [import Carousel from 'react-material-ui-carousel'
// // // import sl1 from '../../images/land06.jpeg'
// // // import sl2 from '../../images/land02.png'
// // // import sl3 from '../../images/land03.jpeg'
// // // import sl4 from '../../images/land04.jpeg'
// // // import sl5 from '../../images/land05.jpeg']
// // import sl6 from '../../images/picc.png'

// // import { makeStyles } from '@mui/styles';
// // import {Box, Typography} from '@mui/material';




// const Home = () => {
  
//     const limit=4;
//     const dispatch=useDispatch();
//     const {categories}=useSelector(selectAllCategories);
    
//     useEffect(() => {
      

//       dispatch(getCategories({toast}));
//     }, [dispatch]);
    
//     const [topRatedProduct,setTopRatedProduct]=useState();
//     useEffect(() => {
//       const getProducts=async()=>{
//         try{
//             const response=await axiosPublic.get(`/products?&limit=${limit}&sort_by_ratings=${true}`)
//             setTopRatedProduct(response.data);
//         }catch(error){
//             console.log(error);
//         }
//       }
//       getProducts();
//     }, [])

//     const [categoryProducts,setCategoryProducts]=useState([]);
//     const [catProductsLoading,setCatProductsLoading]=useState(false);

//     useEffect(() => {
//       if(categories){
//         setCatProductsLoading(true);
//         const getProducts=async()=>{
//             try{
//                 const response=categories.map(async (category)=>
//                     await axiosPublic.get(`/products?&limit=${limit}&category=${category._id}`))
//                     Promise.all(response).then((values)=>{
//                         setCategoryProducts([...categoryProducts,...values.map(value=>value.data)])
//                     })
//             }catch(error){
//                 console.log(error);
//                 setCatProductsLoading(false);
//             }finally{
//                 setCatProductsLoading(false);
//             }
//         }
//         getProducts();

//       }

//     }, [categories,catProductsLoading]);


//  return (
  
    
//     <Box >
//       <Box className = 'container1'>
//       {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}
//       <Typography>
//       <Box sx={{ 
//   display: 'flex', 
//   justifyContent: 'center', 
//   alignItems: 'center',
//   backgroundImage: "url('sl4')",
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   height: '100vh',
//   width: '100%',
//   backgroundRepeat: 'no-repeat',
//   backgroundAttachment: 'fixed',
  
//   }}>
//     <img src={sl6} className='bgImg7' />
    
//         <Typography variant='div' component='h1' sx={{m:10,p:1,background:"#C7F2A4",color:'#1F6415',textShadow:'1px 1px 1px #555'}}>
//           'NATURAL FINE DINING'
//           <Typography variant='div' component='h4' sx={{m:5,background:"#C7F2A4",color:'#1F6415',textShadow:'1px 1px 1px #555'}}>
//           Natural Fine Dining is not only about the food but the entire experience of dining, which includes the ambiance, service, and attention to detail.
//           </Typography>

         
//         </Typography>
//       </Box>
//       </Typography>
//       {/* rest of the code... */}
//     </Box>
   
        
//        {/* <Box sx={{ background: '#', height: '100%' ,weight: '500%', position: 'fixed' }}>
//         <Carousel></Carousel>
//         <div className='banner'>
//         <Carousel>
//             <img src={sl1} className='bgImg' />
//             <img src={sl2} className='bgImg' />
//             <img src={sl3} className='bgImg' />
//             <img src={sl4} className='bgImg' />
//             <img src={sl5} className='bgImg' />
//         </Carousel>
//       </div>
//         </Box>  */}
       
//         <Box className='container'>
//             <Typography variant='div' component='h3' sx={{m:10,p:1,background:"#0B4619",color:'#A6CF98',textShadow:'1px 1px 1px #555'}}>
//                 Top rated products 
//             </Typography>
//             <Box className='card-container'>
//                 {topRatedProduct && topRatedProduct?.products.map(product=>(
//                     <ProductCard product={product} key={product._id}/> ))}

// {/* <ProductCard product={topRatedProduct} key={topRatedProduct._id}/> */}

              
//             </Box>
//       </Box>


//     </Box>

    
//   )
// }

// export default Home






// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { axiosPublic } from '../../redux/axiosPublic';
// import ProductCard from '../Product/ProductCard';
// import { getCategories, selectAllCategories } from '../../redux/features/categorySlice';
// import './home.css';
// import sl6 from '../../images/picc.png';

 //import { Box, Typography, Container, Row, Col, Carousel } from 'react-bootstrap';

// const Home = () => {
//   const limit = 4;
//   const dispatch = useDispatch();
//   const { categories } = useSelector(selectAllCategories);

//   useEffect(() => {
//     dispatch(getCategories({ toast }));
//   }, [dispatch]);

//   const [topRatedProduct, setTopRatedProduct] = useState();
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await axiosPublic.get(`/products?&limit=${limit}&sort_by_ratings=${true}`);
//         setTopRatedProduct(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getProducts();
//   }, []);

//   const [categoryProducts, setCategoryProducts] = useState([]);
//   const [catProductsLoading, setCatProductsLoading] = useState(false);

//   useEffect(() => {
//     if (categories) {
//       setCatProductsLoading(true);
//       const getProducts = async () => {
//         try {
//           const response = categories.map(async (category) => await axiosPublic.get(`/products?&limit=${limit}&category=${category._id}`));
//           Promise.all(response).then((values) => {
//             setCategoryProducts([...categoryProducts, ...values.map((value) => value.data)]);
//           });
//         } catch (error) {
//           console.log(error);
//           setCatProductsLoading(false);
//         } finally {
//           setCatProductsLoading(false);
//         }
//       };
//       getProducts();
//     }
//   }, [categories, catProductsLoading]);

//   return (
//     <div>
//       <section className="home-section">
//         <div className="home-banner">
//           <img src={sl6} alt="Banner" className="banner-image" />
//           <div className="banner-content">
//             <h1 className="banner-title">NATURAL FINE DINING</h1>
//             <p className="banner-description">
//               Natural Fine Dining is not only about the food but the entire experience of dining, which includes the ambiance, service, and attention to detail.
//             </p>
//           </div>
//         </div>
//       </section>

//       <Container>
//         <section className="top-rated-section">
//           <h3 className="section-title">Top Rated Products</h3>
//           <Row>
//             {topRatedProduct &&
//               topRatedProduct.products.map((product) => (
//                 <Col key={product._id} md={3} sm={6}>
//                   <ProductCard product={product} />
//                 </Col>
//               ))}
//           </Row>
//         </section>
//       </Container>

//       <section className="about-us-section">
//         <Container>
//           <h3 className="section-title">About Us</h3>
//           <Row>
//             <Col md={6}>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur turpis a fermentum finibus. Mauris et tincidunt
//                 lectus, vel dictum metus. In non massa vitae erat auctor venenatis ac at odio. Mauris ut urna elit. Donec a fermentum sem.
//               </p>
//             </Col>
//             <Col md={6}>
//               <p>
//                 Etiam eu bibendum ante. Nulla convallis turpis sed aliquam sagittis. Duis scelerisque sagittis tellus, eu efficitur erat
//                 lacinia nec. Proin feugiat, dui et feugiat lobortis, massa tortor aliquet mauris, nec blandit velit nunc at velit.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="contact-section">
//         <Container>
//           <h3 className="section-title">Contact Us</h3>
//           <Row>
//             <Col md={6}>
//               <form>
//                 <div className="form-group">
//                   <input type="text" className="form-control" placeholder="Name" />
//                 </div>
//                 <div className="form-group">
//                   <input type="email" className="form-control" placeholder="Email" />
//                 </div>
//                 <div className="form-group">
//                   <textarea className="form-control" rows="5" placeholder="Message"></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Send Message</button>
//               </form>
//             </Col>
//             <Col md={6}>
//               <div className="contact-info">
//                 <p><i className="fas fa-map-marker-alt"></i> 123 Main Street, City, Country</p>
//                 <p><i className="fas fa-phone"></i> +1 234 567890</p>
//                 <p><i className="fas fa-envelope"></i> info@example.com</p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { axiosPublic } from '../../redux/axiosPublic';
// import ProductCard from '../Product/ProductCard';
// import { getCategories, selectAllCategories } from '../../redux/features/categorySlice';
// import './home.css';
// import sl6 from '../../images/picc.png';

// import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
// import Carousel from 'react-material-ui-carousel';

// const Home = () => {
//   const limit = 4;
//   const dispatch = useDispatch();
//   const { categories } = useSelector(selectAllCategories);

//   useEffect(() => {
//     dispatch(getCategories({ toast }));
//   }, [dispatch]);

//   const [topRatedProduct, setTopRatedProduct] = useState();
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await axiosPublic.get(`/products?&limit=${limit}&sort_by_ratings=${true}`);
//         setTopRatedProduct(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getProducts();
//   }, []);

//   const [categoryProducts, setCategoryProducts] = useState([]);
//   const [catProductsLoading, setCatProductsLoading] = useState(false);

//   useEffect(() => {
//     if (categories) {
//       setCatProductsLoading(true);
//       const getProducts = async () => {
//         try {
//           const response = categories.map(async (category) => await axiosPublic.get(`/products?&limit=${limit}&category=${category._id}`));
//           Promise.all(response).then((values) => {
//             setCategoryProducts([...categoryProducts, ...values.map((value) => value.data)]);
//           });
//         } catch (error) {
//           console.log(error);
//           setCatProductsLoading(false);
//         } finally {
//           setCatProductsLoading(false);
//         }
//       };
//       getProducts();
//     }
//   }, [categories, catProductsLoading]);

//   return (
//     <div>
//       <section className="home-section">
//         <div className="home-banner">
//           <img src={sl6} alt="Banner" className="banner-image" />
//           <div className="banner-content">
//             <Typography variant="h1" className="banner-title">
//               NATURAL FINE DINING
//             </Typography>
//             <Typography variant="body1" className="banner-description">
//               Natural Fine Dining is not only about the food but the entire experience of dining, which includes the ambiance, service, and attention to detail.
//             </Typography>
//           </div>
//         </div>
//       </section>

//       <Container>
//         <section className="top-rated-section">
//           <Typography variant="h3" className="section-title">
//             Top Rated Products
//           </Typography>
//           <Grid container spacing={3}>
//             {topRatedProduct &&
//               topRatedProduct.products.map((product) => (
//                 <Grid item key={product._id} md={3} sm={6}>
//                   <ProductCard product={product} />
//                 </Grid>
//               ))}
//           </Grid>
//         </section>
//       </Container>

//       <section className="about-us-section">
//         <Container>
//           <Typography variant="h3" className="section-title">
//             About Us
//           </Typography>
//           <Grid container spacing={3}>
//             <Grid item md={6}>
//               <Typography variant="body1">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur turpis a fermentum finibus. Mauris et tincidunt
//                 lectus, vel dictum metus. In non massa vitae erat auctor venenatis ac at odio. Mauris ut urna elit. Donec a fermentum sem.
//               </Typography>
//             </Grid>
//             <Grid item md={6}>
//               <Typography variant="body1">
//                 Etiam eu bibendum ante. Nulla convallis turpis sed aliquam sagittis. Duis scelerisque sagittis tellus, eu efficitur erat
//                 lacinia nec. Proin feugiat, dui et feugiat lobortis, massa tortor aliquet mauris, nec blandit velit nunc at velit.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>

//       <section className="contact-section">
//         <Container>
//           <Typography variant="h3" className="section-title">
//             Contact Us
//           </Typography>
//           <Grid container spacing={3}>
//             <Grid item md={6}>
//               <form>
//                 <TextField type="text" label="Name" fullWidth />
//                 <TextField type="email" label="Email" fullWidth />
//                 <TextField type="textarea" label="Message" rows={5} fullWidth />
//                 <Button type="submit" variant="contained" color="primary">
//                   Send Message
//                 </Button>
//               </form>
//             </Grid>
//             <Grid item md={6}>
//               <div className="contact-info">
//                 <p>
//                   <i className="fas fa-map-marker-alt"></i> 123 Main Street, City, Country
//                 </p>
//                 <p>
//                   <i className="fas fa-phone"></i> +1 234 567890
//                 </p>
//                 <p>
//                   <i className="fas fa-envelope"></i> info@example.com
//                 </p>
//               </div>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Home;






import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { axiosPublic } from '../../redux/axiosPublic';
import ProductCard from '../Product/ProductCard';
import { getCategories, selectAllCategories } from '../../redux/features/categorySlice';
import { Box, Typography } from '@mui/material';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import AboutUs from '../Pages/Aboutus';
import ContactUs from '../Pages/Contactus';
import '../Home/home.css'

import sl1 from '../../images/bunch2.jpeg';
import sl2 from '../../images/land02.png';
import sl3 from '../../images/land03.jpeg';
import sl4 from '../../images/land04.jpeg';
import sl5 from '../../images/land05.jpeg';
import sl6 from '../../images/land05.jpeg';
import sl7 from '../../images/home pic.jpg';

const Home = () => {
  const limit = 4;
  const dispatch = useDispatch();
  const { categories } = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(getCategories({ toast }));
  }, [dispatch]);

  const [topRatedProduct, setTopRatedProduct] = useState();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axiosPublic.get(`/products?&limit=${limit}&sort_by_ratings=${true}`);
        setTopRatedProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [catProductsLoading, setCatProductsLoading] = useState(false);

  useEffect(() => {
    if (categories) {
      setCatProductsLoading(true);
      const getProducts = async () => {
        try {
          const response = categories.map(async (category) => {
            return await axiosPublic.get(`/products?&limit=${limit}&category=${category._id}`);
          });
          Promise.all(response).then((values) => {
            setCategoryProducts([...categoryProducts, ...values.map((value) => value.data)]);
          });
        } catch (error) {
          console.log(error);
          setCatProductsLoading(false);
        } finally {
          setCatProductsLoading(false);
        }
      };
      getProducts();
    }
  }, [categories, catProductsLoading]);

  return (
    <Box>
      <Box className="container1">
        <Box
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sl1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            padding: '10px'
          }}
        >
          <Box
            className="m-10 p-1 text"
            style={{
            // background: '#C7F2A4',
              color: '#fefae0',
              textShadow: '1px 1px 1px #445',
              fontSize: '5px',
              fontWeight: 'bold',
              fontFamily: '"Times New Roman", Times, serif'
              

            }}
          >
            <Typography variant="h4">'NATURAL FINE DINING'</Typography>
            <Typography variant="h6" >
              L E A F L I N E
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="container2">
      <Container>
            <Row>
              <Col sm={6} className="d-flex justify-content-center align-items-center">
                <img src={sl7} className="bgImg7" alt="Background Image" />
              </Col>
              <Col sm={6} className="d-flex justify-content-center align-items-center">
                <Typography
                  variant="div"
                  component="h1"
                  sx={{
                    m: 5,
                    p: 1,
                    background: '#C7F2A4',
                  }}
                >
                  Your small paragraph content here
                </Typography>
              </Col>
            </Row>
          </Container>
          </Box>

      <Box className="container">
        <Typography variant="h3" className="m-4 p-1 bg-dark text-light">
          Top rated products
        </Typography>
        <Box className="card-container">
          {topRatedProduct &&
            topRatedProduct.products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
        </Box>
      </Box>

   
       <Box className="container">
      <Typography variant="h3" className="m-4 p-1 bg-dark text-light">
        Carousel
      </Typography>
      <Carousel
        interval={3000} // Set the interval between slides (in milliseconds)
        pause="hover" // Pause the carousel on mouse hover
        indicators={true} // Show slide indicators
        navButtonsAlwaysVisible={true} // Show navigation buttons always
      >
        <Carousel.Item>
          <img src={sl1} className="bgImg" alt="Carousel Image" />
          <Carousel.Caption>
                <p className="carousel-content">
                  Another carousel content slide...
                </p>
              </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={sl2} className="bgImg" alt="Carousel Image" />
          <Carousel.Caption>
                <p className="carousel-content">
                  Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
                </p>
              </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={sl3} className="bgImg" alt="Carousel Image" />
          <Carousel.Caption>
                <p className="carousel-content">
                  Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
                </p>
              </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={sl4} className="bgImg" alt="Carousel Image" />
          <Carousel.Caption>
                <p className="carousel-content">
                  Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
                </p>
              </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={sl5} className="bgImg" alt="Carousel Image" />
          <Carousel.Caption>
                <p className="carousel-content">
                  Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
                </p>
              </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Box>

      <AboutUs />
      <ContactUs />
    </Box>
  );
};

export default Home;
