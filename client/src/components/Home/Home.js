// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { axiosPublic } from '../../redux/axiosPublic';
// import ProductCard from '../Product/ProductCard';
// import { getCategories, selectAllCategories } from '../../redux/features/categorySlice';
// import { Box, Typography } from '@mui/material';
// import { Carousel, Container, Row, Col } from 'react-bootstrap';
// import AboutUs from '../Pages/Aboutus';
// import ContactUs from '../Pages/Contactus';
// import Button from '@mui/material/Button';
// import '../Home/home.css'

// import sl1 from '../../images/bunch2.jpeg';
// import sl2 from '../../images/land02.png';
// import sl3 from '../../images/land03.jpeg';
// import sl4 from '../../images/land04.jpeg';
// import sl5 from '../../images/land05.jpeg';
// import sl6 from '../../images/land05.jpeg';
// import sl7 from '../../images/home pic.jpg';

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
//           const response = categories.map(async (category) => {
//             return await axiosPublic.get(`/products?&limit=${limit}&category=${category._id}`);
//           });
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
//     <Box>


// <Box className="container1">
//   <Box
//     className="d-flex justify-content-center align-items-center flex-column" // Added 'flex-column' to center align content vertically
//     style={{
//       backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sl1})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       width: '100%',
//       backgroundRepeat: 'no-repeat',
//       backgroundAttachment: 'fixed',
//       padding: '10px',
//     }}
//   >
//     <Box
//       className="m-10 p-1 text"
//       style={{
//         color: '#fefae0',
//         textShadow: '1px 1px 1px #445',
//         fontSize: '5px',
//         fontWeight: 'bold',
//         fontFamily: '"Times New Roman", Times, serif',
//       }}
//     >
//       <Typography variant="h4">'NATURAL FINE DINING'</Typography>
//       <Typography variant="h6">L E A F L I N E</Typography>
//     </Box>

//     <Box className="d-flex flex-column align-items-center mt-4">
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           style={{ marginTop: '20px' }}
//         //   onClick={handleFindExpressClick}
//          >
//           Find Express
//         </Button>
//       </Box>
//   </Box>
// </Box>

//       <Box className="container2">
//       <Container>






//             <Row>
//               <Col sm={6} className="d-flex justify-content-center align-items-center">
//                 <img src={sl7} className="bgImg7" alt="Background Image" />
//               </Col>
//               <Col sm={6} className="d-flex justify-content-center align-items-center">
//                 <Typography
//                   variant="div"
//                   component="h1"
//                   sx={{
//                     m: 5,
//                     p: 1,
//                     background: '#C7F2A4',
//                   }}
//                 >
//                   Your small paragraph content here
//                 </Typography>
//               </Col>
//             </Row>
//           </Container>
//           </Box>

//       <Box className="container">
//         <Typography variant="h3" className="m-4 p-1 bg-dark text-light">
//           Top rated products
//         </Typography>
//         <Box className="card-container">
//           {topRatedProduct &&
//             topRatedProduct.products.map((product) => (
//               <ProductCard product={product} key={product._id} />
//             ))}
//         </Box>
//       </Box>


//        <Box className="container">
//       <Typography variant="h3" className="m-4 p-1 bg-dark text-light">
//         Carousel
//       </Typography>
//       <Carousel
//         interval={3000} // Set the interval between slides (in milliseconds)
//         pause="hover" // Pause the carousel on mouse hover
//         indicators={true} // Show slide indicators
//         navButtonsAlwaysVisible={true} // Show navigation buttons always
//       >
//         <Carousel.Item>
//           <img src={sl1} className="bgImg" alt="Carousel Image" />
//           <Carousel.Caption>
//                 <p className="carousel-content">
//                   Another carousel content slide...
//                 </p>
//               </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={sl2} className="bgImg" alt="Carousel Image" />
//           <Carousel.Caption>
//                 <p className="carousel-content">
//                   Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
//                 </p>
//               </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={sl3} className="bgImg" alt="Carousel Image" />
//           <Carousel.Caption>
//                 <p className="carousel-content">
//                   Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
//                 </p>
//               </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={sl4} className="bgImg" alt="Carousel Image" />
//           <Carousel.Caption>
//                 <p className="carousel-content">
//                   Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
//                 </p>
//               </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={sl5} className="bgImg" alt="Carousel Image" />
//           <Carousel.Caption>
//                 <p className="carousel-content">
//                   Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
//                 </p>
//               </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </Box>

//       <AboutUs />
//       <ContactUs />
//     </Box>
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
import Button from '@mui/material/Button';
import '../Home/home.css';
import {selectProductDetails,productDetails} from '../../redux/features/productSlice';
import ProductDetailsInfoCard from '../Product/ProductDetailsInfoCard';


import sl1 from '../../images/bunch2.jpeg';
import sl2 from '../../images/land02.png';
// import sl3 from '../../images/land03.jpeg';
import sl4 from '../../images/land04.jpeg';
import sl5 from '../../images/land05.jpeg';
import sl6 from '../../images/land05.jpeg';
import sl7 from '../../images/home pic.jpg';
import sl8 from '../../images/bunch1.png';
import sl9 from '../../images/image1.jpeg';
import sl10 from '../../images/image02.jpeg';
import sl11 from '../../images/image03.jpeg';
import logo from '../../images/logo.png';
import home from '../../images/home1.png';
import { alignPropType } from 'react-bootstrap/esm/types';
import Header from '../Layout/Header'

import { Grid } from '@mui/material';


const Home = () => {
  const limit = 4;
  const dispatch = useDispatch();
  const { categories } = useSelector(selectAllCategories);
  // const {loading,product}=useSelector(selectProductDetails);/
  const [product , setProduct]= useState([])

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
  console.log(product)

  return (
    <Box className='fullDiv'>
      {/* <Header/> */}
      <Box
        className="container1"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          // padding: '10px',
        }}
      >
        <Box
          className="m-10 p-1 text"
          style={{
            color: '#D7E9B9',
            textShadow: '1px 0px 0px #B6E2A1',
            fontSize: '2px',
            fontWeight: 'bold'
          }}
        >
          <Typography variant="h4" className='tagLine'><img src={logo} /></Typography>
          <Typography variant="h6" className='tagLine'></Typography>
        </Box>

        {/* <Box className="d-flex flex-column align-items-center mt-4">
          <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
            Find Express
          </Button>
        </Box> */}
      </Box>

      {/* secound container */}

      {/*div02  */}
      <div class="da-section da-work bg-secondary" id="learn">
        <div class="container">
          <div class="h3 pb-3 text-center text-white" data-aos="fade-up">Why Work With Us?</div>
          <p class="px-5 pb-5 text-center text-white" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-3" data-aos="flip-left">
                <div class="card-body mt-4 mb-1 text-center"><i class="pb-3 text-primary fas fa-briefcase fa-3x"></i>
                  <div class="h4 pb-3">Experience</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-3" data-aos="zoom-in-up">
                <div class="card-body mt-4 mb-1 text-center"><i class="pb-3 text-primary fas fa-sliders-h fa-3x"></i>
                  <div class="h4 pb-3">Flexibility</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-3" data-aos="flip-right">
                <div class="card-body mt-4 mb-1 text-center"><i class="pb-3 text-primary fas fa-trophy fa-3x"></i>
                  <div class="h4 pb-3">Results</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end div 2 */}

      <Box className='background'>
        <Box className='container' textAlign="left" style={{ margin: '0 auto', marginTop: '10px' }}>
          <Typography variant="h6" sx={{ fontFamily: 'cursive', marginTop: '0rem', textAlign: 'center' }}>
            Why Choosing Us!
          </Typography>
          <Box mt={4} style={{ textAlign: 'center', fontFamily: 'cursive' }}>
            <Typography variant="h4">Few Reasons Why People Choosing Us!</Typography>

            <Grid className='card-container' style={{ marginLeft: '40px' }}>
              <div className="image-card">
                <img src={sl9} style={{ height: '250px', width: '300px', margin: '18px' }} alt="Image" />
                <div className="overlay">
                  <Typography variant="body1">Product 01</Typography>
                </div>
              </div>

              <div className="image-card">
                <img src={sl10} style={{ height: '250px', width: '300px', margin: '18px' }} alt="Image" />
                <div className="overlay">
                  <Typography variant="body1">Product 2</Typography>
                </div>
              </div>

              <div className="image-card">
                <img src={sl11} style={{ height: '250px', width: '300px', margin: '20px' }} alt="Image" />
                <div className="overlay">
                  <Typography variant="body1">Product 3</Typography>
                </div>
              </div>
            </Grid>
            <Grid>
              <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '3rem' }}>
                <Typography variant="body1">
                  Banana leaf plates are an eco-friendly alternative to traditional disposable plates. They are made from
                  the leaves of the banana plant, which are biodegradable and renewable. In our Leafline, it's very clean.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>


      </Box>





      {/* ----------- */}

      
        <Box className="containerx" style={{ textAlign: 'center', fontFamily: 'serif' }}>
        <div class="container noselect">
        <div class="canvas">
          <div class="tracker tr-1"></div>
          <div class="tracker tr-2"></div>
          <div class="tracker tr-3"></div>
          <div class="tracker tr-4"></div>
          <div class="tracker tr-5"></div>
          <div class="tracker tr-6"></div>
          <div class="tracker tr-7"></div>
          <div class="tracker tr-8"></div>
          <div class="tracker tr-9"></div>
          <div class="tracker tr-10"></div>
          <div class="tracker tr-11"></div>
          <div class="tracker tr-12"></div>
          <div class="tracker tr-13"></div>
          <div class="tracker tr-14"></div>
          <div class="tracker tr-15"></div>
          <div class="tracker tr-16"></div>
          <div class="tracker tr-17"></div>
          <div class="tracker tr-18"></div>
          <div class="tracker tr-19"></div>
          <div class="tracker tr-20"></div>
          <div class="tracker tr-21"></div>
          <div class="tracker tr-22"></div>
          <div class="tracker tr-23"></div>
          <div class="tracker tr-24"></div>
          <div class="tracker tr-25"></div>
          <div id="card">
            {/* <img src={}/> */}
            <div class="title">
            {/* <Typography variant='h6' component='div'>{product.title}</Typography> */}
        
          
              <div class="subtitle">
                mouse hover tracker
              </div>

            </div>
          </div>
        </div>
        </div>
          {/* <Typography variant="h5" className="m-4 p-1  text-dark text-center">
            Top rated products
          </Typography>
          <Box className="card-container">
            {topRatedProduct &&
              topRatedProduct.products.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
          </Box> */}
        </Box>


        {/* <Box className="container">
        <Typography variant="h3" className="m-4 p-1  text-light">
          Our Designs
        </Typography>
        <Carousel
          interval={3000} // Set the interval between slides (in milliseconds)
          pause="hover" // Pause the carousel on mouse hover
          indicators={true} // Show slide indicators
          navButtonsAlwaysVisible={true} // Show navigation buttons always
        >
          <Carousel.Item>
            <img src={sl1} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
          <Carousel.Item>
            <img src={sl2} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
          <Carousel.Item>
            <img src={sl2} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
          <Carousel.Item>
            <img src={sl4} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
          <Carousel.Item>
            <img src={sl5} className="bgImg" alt="Carousel Image" />

          </Carousel.Item>
        </Carousel>
      </Box> */}

        <AboutUs />
        <ContactUs />
    </Box>
  );
};

export default Home;

