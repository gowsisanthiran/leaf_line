// import React, { useEffect } from 'react'
// import './aboutUs.css'

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
// import { Container, Typography, Button } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { spacing } from '@mui/system'; // Import the spacing function separately
// import sl17 from '../../images/pic05.jpeg';
// import sl18 from '../../images/image1.jpeg';
// import sl19 from '../../images/img1.jpeg';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Block, FormatAlignJustify } from '@mui/icons-material';


// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#000000', // Replace with your desired primary color
//             contrastText: '#ffffff', // Replace with your desired text color
//         },
//         secondary: {
//             main: '#ff0000', // Replace with your desired secondary color
//             contrastText: '#ffffff', // Replace with your desired text color
//         },
//     },
// });

// const useStyles = makeStyles((theme) => ({
//     shopBanner: {
//         backgroundColor: '#000000',
//         color: '#ffffff',
//         padding: spacing(3),
//         textAlign: 'start',
//     },
//     orangeText: {
//         color: 'black',
//     },
//     salePercent: {
//         marginTop: spacing(2),
//         fontSize: '1.5rem',
//         fontWeight: 'bold',
//     },
//     cartBtn: {
//         marginTop: spacing(3),
//         backgroundColor: 'green',
//         color: 'white',
//         '&:hover': {
//             backgroundColor: 'blue',
//         },
//     },
//     largeImage: {
//         width: '100%',
//         height: '600px',
//         borderRadius: '20px',
//         borderTopLeftRadius: '20px',
//         marginLeft: '15px',
//         boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)',
//         },
//         smallImage: {
//         width: '175px',
//         height: '175px',
//         borderRadius: '20px',
//         borderTopLeftRadius: '20px',
//         marginTop: '5px',
//         boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)',
//         cursor: 'pointer',
//         },

// }));

// function AboutUs2() {
//     useEffect(() => {
//         AOS.init();
//     }, []);
//     const classes = useStyles();
//     const [selectedImage, setSelectedImage] = useState(null);

// const handleImageClick = (image) => {
// setSelectedImage(image);
// };

//     return (
//         <>
//             <div style={{ backgroundColor: '#fff' }}>

//                 <ThemeProvider theme={theme}>

//                     <section className='bg' style={{ marginTop: '100px', marginBottom: '50px' }}>
//                         <Container>
//                             <Typography variant="h3" style={{ fontFamily: 'Open Sans, sans-serif', paddingTop: '100px', paddingBottom: '20px', color: "white",fontWeight: 'bold' }}>
//                                 December sale is on! <br />
//                                 with big <span className={classes.orangeText} style={{ fontFamily: 'Jack Rooney, sans-serif' }}> Discount...</span>
//                             </Typography>
//                             <div className={classes.salePercent} style={{ fontFamily: 'Poppins, sans-serif' }}>
//                                 <span>Sale! <br /> Upto</span> 50% <span>off</span>
//                             </div>
//                             <Button
//                                 href="shop.html"
//                                 className={classes.cartBtn}
//                                 variant="contained"
//                                 size="large"
//                                 startIcon={<ShoppingCartIcon />}
//                                 sx={{ marginBottom: '50px', color:"#D2FBA4",backgroundColor: '#1A2902',borderRadius:'15px' }}
//                             >
//                                 Shop Now
//                             </Button>
//                         </Container>
//                     </section>
//                 </ThemeProvider>

//                 <div class="container" style={{ paddingBottom: '20px' }} data-aos="fade-up">
//                     <div class="row" >




//                         <section className="latest section">
//                             <div className="container">
//                                 <h2 class="pb-3" style={{ fontFamily: 'Open Sans' }}>Why <span class="orange-text" style={{ color: 'green' }}>LEAFLINE</span></h2>
//                                 <h5 style={{ fontFamily: ' sans-serif',color: 'green' }}>Welcome to our banana leaf plate e-commerce website!</h5>
//                                 <div className="latest_wrapper d-flex flex-column-reverse flex-lg-row">

//                                     <div className="latest_promo aos-init aos-animate" data-aos="fade-right">
//                                         <picture>
//                                             <img src={sl17} alt="about something" style={{ width: '100%', height: '600px', borderRadius: '20px', borderTopLeftRadius: '20px', marginLeft: '15px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)' }} data-aos="fade-up" data-aos-delay="100" />

//                                         </picture>
//                                     </div>


//                                     <ul className="latest_list col-lg-7 col-xl-6">
//                                         <li className="list-item d-flex flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up">

//                                             <span className="latest_list-preview">

//                                                 <picture>
//                                                     <img src={sl18} alt="about something" style={{ width: '175px', height: '175px', borderRadius: '20px', borderTopLeftRadius: '20px',marginTop:'5px'  ,boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)' }} data-aos="fade-up" data-aos-delay="100" />
//                                                 </picture>


//                                             </span>

//                                             <div className="latest_list-main d-sm-flex flex-column justify-content-between flex-grow-1" style={{ textAlign: 'center', display: 'Block' ,marginLeft:'20px'}}>
//                                                 <span>
//                                                     <h3 className="title"  style={{ textAlign: 'center',color:'green',fontFamily: 'Open Sans',fontSize:'30px' }}>
//                                                     Environmentally Friendly
//                                                     </h3>
//                                                     <p className="text"style={{fontFamily: 'Poppins, sans-serif',textAlign: 'justify'}}>
//                                                     Banana leaf plates are a great choice for those looking to reduce their carbon footprint. 
//                                                     </p>
//                                                 </span>
//                                             </div>
//                                         </li>


//                                         <li className="list-item d-flex flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up">
//                                             <span className="latest_list-preview">
//                                                 <picture>
//                                                     <img src={sl19} alt="about something" style={{ width: '175px', height: '175px', borderRadius: '20px', marginTop: '35px', borderTopLeftRadius: '20px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)' }} data-aos="fade-up" data-aos-delay="100" />

//                                                 </picture>
//                                             </span>
//                                             <div className="latest_list-main d-sm-flex flex-column justify-content-between flex-grow-1"style={{ textAlign: 'center', display: 'Block' ,marginTop:'40px',marginLeft:'20px'}}>
//                                                 <span className="metadata">

//                                                 <h4 className="title"  style={{ textAlign: 'center',color:'green' ,fontFamily: 'Open Sans',fontSize:'30px' }}>
//                                                 Natural and Chemical-Free
//                                                     </h4>

//                                                 <p className="text"style={{fontFamily: 'Poppins, sans-serif',textAlign: 'justify'}}>
//                                                 Banana leaf plates are free from chemicals and additives, making them a safe and healthy option for serving food.
//                                                 </p>
//                                                 </span>
//                                             </div>
//                                         </li>
//                                         <li className="list-item d-flex flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up">
//                                             <span className="latest_list-preview">
//                                                 <picture>
//                                                     <img src={sl17} alt="about something" style={{ width: '175px', height: '175px', borderRadius: '20px', marginTop: '35px', borderTopLeftRadius: '20px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)' }} data-aos="fade-up" data-aos-delay="100" />

//                                                 </picture>
//                                             </span>
//                                             <div className="latest_list-main d-sm-flex flex-column justify-content-between flex-grow-1"style={{ textAlign: 'center', display: 'Block' ,marginTop:'40px',marginLeft:'20px'}}>
//                                                 <span className="metadata">
//                                                 <h4 className="title"  style={{ textAlign: 'center',color:'green',fontFamily: 'Open Sans' ,fontSize:'30px' }}>
//                                                 Cultural Significance
//                                                     </h4>

//                                                 <p className="text"style={{fontFamily: 'Poppins, sans-serif',textAlign: 'justify'}}>
//                                                 In many cultures, especially in South Asia, serving food on banana leaves is considered traditional and has cultural significance. 
//                                                 </p> 
//                                                 </span>


//                                             </div>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </section>





//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AboutUs2





import React, { useEffect, useState } from 'react';
import './aboutUs.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { spacing } from '@mui/system';
import sl17 from '../../images/pic05.jpeg';
import sl18 from '../../images/image1.jpeg';
import sl19 from '../../images/img1.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const theme = createTheme({
    palette: {
        primary: {
            main: '#000000', // Replace with your desired primary color
            contrastText: '#ffffff', // Replace with your desired text color
        },
        secondary: {
            main: '#ff0000', // Replace with your desired secondary color
            contrastText: '#ffffff', // Replace with your desired text color
        },
    },
});

const useStyles = makeStyles((theme) => ({
    shopBanner: {
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: spacing(3),
        textAlign: 'start',
    },
    orangeText: {
        color: 'black',
    },
    salePercent: {
        marginTop: spacing(2),
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    cartBtn: {
        marginTop: spacing(3),
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
            backgroundColor: 'blue',
        },
    },
    largeImage: {
        width: '100%',
        height: '600px',
        borderRadius: '20px',
        borderTopLeftRadius: '20px',
        marginLeft: '15px',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)',
    },
    smallImage: {
        width: '175px',
        height: '175px',
        borderRadius: '20px',
        borderTopLeftRadius: '20px',
        marginTop: '5px',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)',
        cursor: 'pointer',
    },
}));

function AboutUs2() {
    useEffect(() => {
        AOS.init();
    }, []);
    const classes = useStyles();
    const [selectedImage, setSelectedImage] = useState(sl18);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <>
            <div style={{ backgroundColor: '#fff' }}>

                <ThemeProvider theme={theme}>

                    <section className='bg' style={{ marginTop: '100px', marginBottom: '50px' }}>
                        <Container>
                            <Typography variant="h3" style={{ fontFamily: 'Open Sans, sans-serif', paddingTop: '100px', paddingBottom: '20px', color: "#D1E2C4", fontWeight: 'bold' }}>
                                December sale is on! <br />
                                with big <span className={classes.orangeText} style={{
                                    fontFamily: 'Jack Rooney, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                    outline: '2px solid #ffffff', outlineOffset: '-2px',fontFamily: 'Jack Rooney, sans-serif',
                                    textShadow: '5px 5px 5px #fff',
                                    border: '2px solid white',
                                    padding: '5px 10px',
                                    display: 'inline-block',
                                    borderRadius: '5px'
                                }}> Discount...</span>
                            </Typography>
                            <div className={classes.salePercent} style={{ fontFamily: 'Poppins, sans-serif' }}>
                                <span>Sale! <br /> Upto</span> 50% <span>off</span>                             </div>
                            <Button
                                href="shop.html"
                                className={classes.cartBtn}
                                variant="contained"
                                size="large"
                                startIcon={<ShoppingCartIcon />}
                                sx={{ marginBottom: '50px', color: "#D2FBA4", backgroundColor: '#1A2902', borderRadius: '15px' }}
                            >
                                Shop Now
                            </Button>
                        </Container>
                    </section>
                </ThemeProvider>

                <div className="container" style={{ paddingBottom: '20px' }} data-aos="fade-up">
                    <div className="row">
                        <section className="latest section">
                            <div className="container">
                            
                                <h2 className="pb-3" style={{ fontFamily: 'Open Sans',fontSize:'40px',fontWeight:'bold',color: '#008000' }}>
                                    About <span className="orange-text" style={{ color:'#212529'  }}>us</span>
                                </h2>
                                <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Welcome to our banana leaf plate e-commerce website!
                                </p>
                                <div className="latest_wrapper d-flex flex-column-reverse flex-lg-row">
                                    <div className="latest_promo aos-init aos-animate" data-aos="fade-right">
                                        <picture>
                                            <img
                                                src={selectedImage}
                                                alt="about something"
                                                className={classes.largeImage}
                                                data-aos="fade-up"
                                                data-aos-delay="100"
                                                style={{ width: '600px', borderRadius: '20px', borderTopLeftRadius: '20px', marginLeft: '15px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)' }} />
                                        </picture>
                                    </div>
                                    <ul className="latest_list col-lg-7 col-xl-6">
                                        <li className="list-item d-flex flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up">
                                            <span className="latest_list-preview">
                                                <pictur>
                                                    <img
                                                        src={sl17}
                                                        alt="about something"
                                                        className={classes.smallImage}
                                                        data-aos="fade-up"
                                                        data-aos-delay="100"
                                                        onClick={() => handleImageClick(sl17)}
                                                        style={{ width: '175px', height: '175px', borderRadius: '20px', marginTop: '5px', borderTopLeftRadius: '20px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)' }}

                                                    />
                                                </pictur>
                                            </span>
                                            {/* Rest of the code */}
                                            <div className="latest_list-main d-sm-flex flex-column justify-content-between flex-grow-1" style={{ textAlign: 'center', display: 'Block', marginLeft: '20px' }}>
                                                <span>
                                                    <h3 className="title" style={{ textAlign: 'center', color: 'green', fontFamily: 'Open Sans', fontSize: '30px' }}>
                                                        Environmentally Friendly
                                                    </h3>
                                                    <p className="text" style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify' }}>
                                                        Banana leaf plates are a great choice for those looking to reduce their carbon footprint. It helps in preserving the environment.
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="list-item d-flex flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up">
                                            <span className="latest_list-preview">
                                                <picture>
                                              
                                                    <img
                                                        src={sl18}
                                                        alt="about something"
                                                        className={classes.smallImage}
                                                        data-aos="fade-up"
                                                        data-aos-delay="100"
                                                        onClick={() => handleImageClick(sl18)}
                                                        style={{ width: '175px', height: '175px', borderRadius: '20px', marginTop: '35px', borderTopLeftRadius: '20px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)' }}

                                                    />
                                                </picture>
                                            </span>
                                            {/* Rest of the code */}
                                            <div className="latest_list-main d-sm-flex flex-column justify-content-between flex-grow-1" style={{ textAlign: 'center', display: 'Block', marginTop: '40px', marginLeft: '20px' }}>
                                                <span className="metadata">
                                                    <h4 className="title" style={{ textAlign: 'center', color: 'green', fontFamily: 'Open Sans', fontSize: '30px' }}>
                                                        Natural and Chemical-Free
                                                    </h4>
                                                    <p className="text" style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify' }}>
                                                        Banana leaf plates are free from chemicals and additives, making them a safe and healthy option for serving food.
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="list-item d-flex flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up">
                                            <span className="latest_list-preview">
                                                <picture>
                                                    <img
                                                        src={sl19}
                                                        alt="about something"
                                                        className={classes.smallImage}
                                                        data-aos="fade-up"
                                                        data-aos-delay="100"
                                                        onClick={() => handleImageClick(sl19)}
                                                        style={{ width: '175px', height: '175px', borderRadius: '20px', marginTop: '35px', borderTopLeftRadius: '20px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)' }}
                                                    />
                                                </picture>
                                            </span>
                                            {/* Rest of the code */}
                                            <div className="latest_list-main d-sm-flex flex-column justify-content-between flex-grow-1" style={{ textAlign: 'center', display: 'Block', marginTop: '40px', marginLeft: '20px' }}>
                                                <span className="metadata">
                                                    <h4 className="title" style={{ textAlign: 'center', color: 'green', fontFamily: 'Open Sans', fontSize: '30px' }}>
                                                        Cultural Significance
                                                    </h4>
                                                    <p className="text" style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'justify' }}>
                                                        In many cultures, especially in South Asia, serving food on banana leaves is considered traditional and has cultural significance.
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </section>
                        {/* Rest of the code */}
                    </div>
                </div>
                <div>


                </div>

            </div>
        </>
    );
}

export default AboutUs2;

