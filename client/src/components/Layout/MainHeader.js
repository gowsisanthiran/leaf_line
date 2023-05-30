import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { spacing } from '@mui/system'; // Import the spacing function separately

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'right',
    padding: spacing(2),
    backgroundColor: 'transparent',
    fixed:top,
    zIndex: 1,
    
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: "",
    textDecoration: 'none',
  },
  navbarNav: {
    display: 'flex',
    alignItems: 'right ',
   
  },
  navItem: {
    marginRight: spacing(2),
    '& .nav-link': {
      color: "",
      display: 'flex',
      alignItems: 'right',
      textDecoration: 'none',
      '&.active': {
        color: "",
      },
    },
  },
  carousel: {
    position: 'relative',
    width: '100%',
    height: '500px',
    '& .carousel-inner': {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    '& .carousel-item': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      transition: 'opacity 0.5s ease',
      opacity: 0,
      '&.active': {
        opacity: 1,
      },
    },
  },
  coverText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    marginBottom: spacing(1),
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: spacing(3),
  },
  exploreButton: {
    color: '#fff',
    backgroundColor: "",
    '&:hover': {
      backgroundColor: "dark",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.logo}>
        LEAFLINE
      </Link>
      <div className={classes.navbarNav}>
        <ul className="navbar-nav">
          <li className={classes.navItem}>
            <Link to="/" className="nav-link">
              <HomeIcon /> Home
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/product" className="nav-link">
              Product
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/cart" className="nav-link">
              {/* <Badge badgeContent={products.length} color="secondary"> */}
                <ShoppingCartIcon />
              {/* </Badge> */}
              Cart
            </Link>
          </li>
        </ul>
        <div className="auth-area text-left">
          {/* <AuthMenu /> */}
        </div>
      </div>
    </nav>
  );
};

const Carousel = () => {
  const classes = useStyles();

  return (
    <div id="myCarousel" className={classes.carousel} data-ride="carousel" data-interval={3000}>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active" style={{ backgroundImage: 'url(https://example.com/image-a.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(https://example.com/image-b.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(https://example.com/image-c.jpg)' }}></div>
      </div>
    </div>
  );
};

const CoverText = () => {
  const classes = useStyles();

  return (
    <div className={classes.coverText}>
      <div className="col-lg-10" style={{ float: 'none', margin: '0 auto' }}>
        <h1 className={classes.title}></h1>
        <h3 className={classes.subtitle}>Fine Dining</h3>
      </div>
      <div className="col-xs-12 explore">
        <Button variant="contained" size="large" className={classes.exploreButton}>
          EXPLORE
        </Button>
      </div>
    </div>
  );
};

const MainContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Navbar />
      <Carousel />
      <CoverText />
    </div>
  );
};

export default MainContainer;
