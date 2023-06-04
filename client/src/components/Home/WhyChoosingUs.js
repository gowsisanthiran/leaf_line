// import React, { useEffect } from 'react';
// import { makeStyles } from '@mui/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import sl9 from '../../images/image1.jpeg';
// import sl10 from '../../images/image02.jpeg';
// import sl11 from '../../images/image03.jpeg';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './WhyChoosingUs.css';

// const useStyles = makeStyles((theme) => ({
//   background: {
//     background: '#DAE2B6',
//     // Add your custom styles for the background container
//     marginTop:'0.5rem',
//     padding:'20px',
//     paddingLeft:'50px',
//     paddingRight:'50px',
//   },
//   container: {
//     margin: '0 auto',
//     // marginTop: '3px',
//     textAlign: 'left',
    
//   },
//   title: {
//     fontFamily: 'Jack Rooney , sans-serif',
//     marginTop: '0rem',
//     textAlign: 'center',
//   },
//   subtitle: {
//     textAlign: 'center',
//     fontFamily: 'cursive',
//   },
//   cardContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     // marginTop: '1.5rem',
//   },
//   imageCard: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '250px',
//     width: '300px',
//     margin: '18px',
//     position: 'relative',
//     cursor: 'pointer',
//     transition: 'transform 0.3s ease',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     overflow: 'hidden',
//     '&:hover': {
//       transform: 'scale(1.05)',
//     },
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     color: '#fff',
//     padding: '8px',
//     textAlign: 'center',
//   },
//   description: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     marginTop: '3rem',
//     textAlign: 'center',
//     padding: '0 2rem 2rem',
//   },
// }));

// const WhyChoosingUs = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);
//   const classes = useStyles();

//   return (


//     <Box className={classes.background}>


//       <Box className={classes.container} textAlign="left" style={{ margin: '0 auto', marginTop: '15px' }} data-aos="fade-up">
//         <Typography variant="h6" className={classes.title} sx={{fontFamily: 'Jack Rooney , sans-serif', fontSize:'30px', paddingTop: '30px'}}>
//           <span style={{color: '#7eaf6c'}}>Why Choosing </span> Us!
//         </Typography>
//         <Box mt={4} data-aos="fade-up" data-aos-delay="100">
//           <Typography style={{textAlign: 'center',fontFamily: 'Poppins, sans-serif', fontSize:'15px',color: '#555'}}>Few Reasons Why People Choose Us!</Typography>

//           <Grid container className={classes.cardContainer} data-aos="fade-up" data-aos-delay="200">
//             <div className={classes.imageCard } style={{ padding:'50px',height: '400px', width: '350px'} }>
//               <img src={sl9} style={{ height: '500px', width: '350px', margin: '0px' }} alt="Image" />
//               <div className={classes.overlay}>
//                 <Typography variant="body1">Image 1</Typography>
//               </div>
//             </div>

//             <div className={classes.imageCard}style={{padding:'50px',height: '400px', width: '350px'} }>
//               <img src={sl10} style={{ height: '500px', width: '350px', margin: '0px' }} alt="Image" />
//               <div className={classes.overlay}>
//                 <Typography variant="body1">Image 2</Typography>
//               </div>
//             </div>

//             <div className={classes.imageCard}style={{padding:'50px',height: '400px', width: '350px'} }>
//               <img src={sl10} style={{ height: '500px', width: '350px', margin: '0px' }} alt="Image" />
//               <div className={classes.overlay}>
//                 <Typography variant="body1">Image 2</Typography>
//               </div>
//             </div>
//           </Grid>

//           <Grid>
//             <Grid item className={classes.description} data-aos="fade-up" data-aos-delay="300">
//               <Typography variant="body1" style={{fontFamily: 'Poppins, sans-serif', lineHeight: '1.2', width: '',paddingLeft:'350px',
//     paddingRight:'350px',textAlign:'justify' ,paddingTop:'-60px',paddingBottom:'60px'}}>
//                 Banana leaf plates are an eco-friendly alternative to traditional disposable plates. They are made from
//                 the leaves of the banana plant, which are biodegradable and renewable. 
//               </Typography>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default WhyChoosingUs;


import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import sl9 from '../../images/image1.jpeg';
import sl10 from '../../images/pic06.png';
import sl11 from '../../images/pic07.jpeg';
import sl12 from '../../images/land04.jpeg';
import sl13 from '../../images/land05.jpeg';
import sl14 from '../../images/land06.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WhyChoosingUs.css';


const useStyles = makeStyles((theme) => ({
  background: {
    background: '#DAE2B6',
    // Add your custom styles for the background container
    marginTop:'0.5rem',
    padding:'20px',
    paddingLeft:'50px',
    paddingRight:'50px',
    boxShadow: '0 0 10px rgba(0, 100, 0, 0.5)' ,
  },
  container: {
    margin: '0 auto',
    // marginTop: '3px',
    textAlign: 'left',
  },
  title: {
    fontFamily: 'Jack Rooney , sans-serif',
    marginTop: '0rem',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'cursive',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
    boxSizing:'border-box'
  },
  imageCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '250px',
    width: '300px',
    margin: '18px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    border: '1px solid #ddd',
    borderRadius: '4px',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: '8px',
    textAlign: 'center',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '3rem',
    textAlign: 'center',
    padding: '0 2rem 2rem',
  },
}));

const WhyChoosingUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const classes = useStyles();

  const carouselSettings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box className={classes.background}>
      <Box className={classes.container} textAlign="left" style={{ margin: '10 auto', marginTop: '10px' }} data-aos="fade-up">
        <Typography variant="h6" className={classes.title} sx={{ fontFamily: 'Open Sans , sans-serif', fontSize: '40px', paddingTop: '30px' ,fontWeight: 'bold'}}>
          <span style={{ color: 'green' }}>Why Choosing </span> Us!
        </Typography>
        <Box mt={4} data-aos="fade-up" data-aos-delay="100">
          <Typography style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '20px', color: 'green', marginTop: '5px'  }}>
            Few Reasons Why People Choose Us!
          </Typography>

          <Slider {...carouselSettings}style={{paddingLeft:'0px',paddingRight:'0px' ,paddingTop:'10px',alignItems:'center',padding:'10px'}}>
            
            {/* <div className={classes.imageCard} >
              <img src={sl9} style={{  width: '500px', margin: '0px'}} alt="Image" />
             
            </div> */}
       <div className="swiper-slide item col-lg-4 col-sm-4 swiper-slide-active" style={{ width: '400px' }}>
      <a href="/shop/" className="photo" style={{ position: 'relative' }}>
        <img src={sl9} style={{ width: '500px', margin: '0px' }} alt="Image" />
        <div style={{ position: 'absolute', top: '200px', left: '45%', transform: 'translate(-50%, 50%)', width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.5)' ,alignItems:'center'}}>
          <article id="post-5091" className="post-5091 services type-services status-publish has-post-thumbnail hentry services-category-assortment" data-mh="ltx-services-1359732677">
            <div className="descr" style={{color:'#232423',fontWeight: 'bold',fontFamily: 'Poppins, sans-serif' }}>
              <h5 className="header">Packaging</h5>
              <p>Leafline banana leaf packages are sturdy and can hold a variety of hot and cold dishes.
              </p>
            </div>
          </article>
        </div>
      </a>
    </div>

    

    <div className="swiper-slide item col-lg-4 col-sm-4 swiper-slide-active" style={{ width: '400px' }}>
      <a href="/shop/" className="photo" style={{ position: 'relative' }}>
        <img src={sl12} style={{ width: '500px', margin: '0px' }} alt="Image" />
        <div style={{ position: 'absolute', top: '200px', left: '45%', transform: 'translate(-50%, 50%)', width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.5)' ,alignItems:'center'}}>
          <article id="post-5091" className="post-5091 services type-services status-publish has-post-thumbnail hentry services-category-assortment" data-mh="ltx-services-1359732677">
            <div className="descr" style={{color:'#232423',fontWeight: 'bold',fontFamily: 'Poppins, sans-serif' }}>
              <h5 className="header">Plates</h5>
              <p>Leafline banana leaf plates are eco-friendly alternatives to traditional disposable plates.
              </p>
            </div>
          </article>
        </div>
      </a>
    </div>

    <div className="swiper-slide item col-lg-4 col-sm-4 swiper-slide-active" style={{ width: '400px' }}>
      <a href="/shop/" className="photo" style={{ position: 'relative' }}>
        <img src={sl13} style={{ width: '500px', margin: '0px' }} alt="Image" />
        <div style={{ position: 'absolute', top: '200px', left: '45%', transform: 'translate(-50%, 50%)', width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.5)' ,alignItems:'center'}}>
          <article id="post-5091" className="post-5091 services type-services status-publish has-post-thumbnail hentry services-category-assortment" data-mh="ltx-services-1359732677">
            <div className="descr" style={{color:'#232423',fontWeight: 'bold',fontFamily: 'Poppins, sans-serif' }}>
              <h5 className="header">packages</h5>
              <p>Using Leafline banana leaf plates helps reduce plastic waste and promotes a greener lifestyle
              </p>
            </div>
          </article>
        </div>
      </a>
    </div>
    <div className="swiper-slide item col-lg-4 col-sm-4 swiper-slide-active" style={{ width: '400px' }}>
      <a href="/shop/" className="photo" style={{ position: 'relative' }}>
        <img src={sl14} style={{ width: '500px', margin: '0px' }} alt="Image" />
        <div style={{ position: 'absolute', top: '200px', left: '45%', transform: 'translate(-50%, 50%)', width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.5)' ,alignItems:'center'}}>
          <article id="post-5091" className="post-5091 services type-services status-publish has-post-thumbnail hentry services-category-assortment" data-mh="ltx-services-1359732677">
            <div className="descr" style={{color:'#232423',fontWeight: 'bold',fontFamily: 'Poppins, sans-serif' }}>
              <h5 className="header">Packs</h5>
              <p>Leafline banana leaf packs are lightweight and easy to handle, making them convenient for both hosts and guests.
              </p>
            </div>
          </article>
        </div>
      </a>
    </div>
          </Slider>

         
          
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChoosingUs;

