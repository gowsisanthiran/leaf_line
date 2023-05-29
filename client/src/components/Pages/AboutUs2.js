import React,{useEffect} from 'react'
import './aboutUs.css'
import { Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
// import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { spacing } from '@mui/system'; // Import the spacing function separately
import sl17 from '../../images/pic05.jpeg';
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
        color: 'green',
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
}));

function AboutUs2() {
    useEffect(() => {
        AOS.init();
      }, []);
    const classes = useStyles();

    return (
        <>
            <div style={{ backgroundColor: '#f5f5f5' }}>

                <ThemeProvider theme={theme}>

                    <section className='bg' style={{ marginTop: '150px', marginBottom: '150px' }}>
                        <Container>
                            <Typography variant="h3" style={{ fontFamily: 'Poppins, sans-serif', paddingTop: '100px', paddingBottom: '20px', color: "white" }}>
                                December sale is on! <br />
                                with big <span className={classes.orangeText} style={{ fontFamily: 'Jack Rooney, sans-serif' }}> Discount...</span>
                            </Typography>
                            <div className={classes.salePercent} style={{ fontFamily: 'Poppins, sans-serif' }}>
                                <span>Sale! <br /> Upto</span> 50% <span>off</span>
                            </div>
                            <Button
                                href="shop.html"
                                className={classes.cartBtn}
                                variant="contained"
                                size="large"
                                startIcon={<ShoppingCartIcon />}
                                sx={{ marginBottom: '50px', fontFamily: 'Jack Rooney, sans-serif' }}
                            >
                                Shop Now
                            </Button>
                        </Container>
                    </section>
                </ThemeProvider>

                <div class="container" style={{paddingBottom: '20px'}} data-aos="fade-up">
                    <div class="row" >
                        <div class="col-lg-5">
                            <img src={sl17} alt="about something" style={{width: '100%', borderBottomLeftRadius: '20px',borderTopLeftRadius: '20px',    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.9)'}} data-aos="fade-up" data-aos-delay="100"/>
                        </div>
                        <div class="col-lg-7"data-aos="fade-up" data-aos-delay="200">
                            <div class="featured-text">
                                <h2 class="pb-3" style={{ fontFamily: 'Jack Rooney, sans-serif' }}>Why <span class="orange-text" style={{ color: 'green' }}>LEAFLINE</span></h2>
                                <div class="row" data-aos="fade-up" data-aos-delay="300">
                                    <div class="col-lg-6 col-md-6 mb-4 mb-md-5">
                                        <div class="list-box d-flex">
                                            <div class="list-icon">
                                                <i class="fas fa-shipping-fast"></i>
                                            </div>
                                            <div class="content">
                                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '25px' }}>Home Delivery</h3>
                                                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: '#555' }}>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                                        <div class="list-box d-flex">
                                            <div class="list-icon">
                                                <i class="fas fa-money-bill-alt"></i>
                                            </div>
                                            <div class="content">
                                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '25px' }}>Best Price</h3>
                                                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: '#555',textAlign: 'justify' }}>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                                        <div class="list-box d-flex">
                                            <div class="list-icon">
                                                <i class="fas fa-briefcase"></i>
                                            </div>
                                            <div class="content">
                                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '25px' }}>Custom Box</h3>
                                                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: '#555',textAlign: 'justify' }}>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="list-box d-flex">
                                            <div class="list-icon">
                                                <i class="fas fa-sync-alt"></i>
                                            </div>
                                            <div class="content">
                                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '25px' }}>Quick Refund</h3>
                                                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: '#555' }}>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs2