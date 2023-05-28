import React from 'react'
import './aboutUs.css'
import { Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
// import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { spacing } from '@mui/system'; // Import the spacing function separately

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

    const classes = useStyles();

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="featured-text">
                            <h2 class="pb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Why <span class="orange-text">LEAFLINE</span></h2>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mb-4 mb-md-5">
                                    <div class="list-box d-flex">
                                        <div class="list-icon">
                                            <i class="fas fa-shipping-fast"></i>
                                        </div>
                                        <div class="content">
                                            <h3>Home Delivery</h3>
                                            <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                                    <div class="list-box d-flex">
                                        <div class="list-icon">
                                            <i class="fas fa-money-bill-alt"></i>
                                        </div>
                                        <div class="content">
                                            <h3>Best Price</h3>
                                            <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                                    <div class="list-box d-flex">
                                        <div class="list-icon">
                                            <i class="fas fa-briefcase"></i>
                                        </div>
                                        <div class="content">
                                            <h3>Custom Box</h3>
                                            <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="list-box d-flex">
                                        <div class="list-icon">
                                            <i class="fas fa-sync-alt"></i>
                                        </div>
                                        <div class="content">
                                            <h3>Quick Refund</h3>
                                            <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ThemeProvider theme={theme}>

                <section className='bg'>
                    <Container>
                        <Typography variant="h3">
                            December sale is on! <br />
                            with big <span className={classes.orangeText}>Discount...</span>
                        </Typography>
                        <div className={classes.salePercent}>
                            <span>Sale! <br /> Upto</span> 50% <span>off</span>
                        </div>
                        <Button
                            href="shop.html"
                            className={classes.cartBtn}
                            variant="contained"
                            size="large"
                            startIcon={<ShoppingCartIcon />}
                        >
                            Shop Now
                        </Button>
                    </Container>
                </section>
            </ThemeProvider>

            <div className="mt-150">
                <Container>
                    <Row>
                        <Col lg={8} md={{ span: 8, offset: 2 }} className="text-center">
                            <div className="section-title">
                                <h3>Our <span className={classes.orangeText}>Team</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className="single-team-item">
                                <div className="team-bg team-bg-1"></div>
                                <h4>Jimmy Doe <span>Farmer</span></h4>
                                <ul className="social-link-team">
                                    <li><a href="#" target="_blank"><Facebook /></a></li>
                                    <li><a href="#" target="_blank"><Twitter /></a></li>
                                    <li><a href="#" target="_blank"><Instagram /></a></li>
                                </ul>
                            </div>
                        </Col>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-1"></div>
                                <h4>Jimmy Doe <span>Farmer</span></h4>
                                <ul className="social-link-team">
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-1"></div>
                                <h4>Jimmy Doe <span>Farmer</span></h4>
                                <ul className="social-link-team">
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                </Row>
            </Container>
        </div >
        </>
    )
}

export default AboutUs2