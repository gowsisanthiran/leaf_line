import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DrawerMenu from './DrawerMenu';
import AuthMenu from './AuthMenu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { Tooltip } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/features/cartSlice';
import '../Layout/Header.css';
import logo from '../../images/LOGO.png'
import logoo from '../../images/logoo.png'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 6,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {

  const { products } = useSelector(selectCartItems);
  

  return (

    <div class="container-fluid main">

      
      {/* <nav className="navbar navbar-expand navbar-light bg-transparent navbar navbar navbar-default"> */}
      <nav className="navbar navbar-expand navbar-light  navbar navbar navbar-default fixed-top navbar-transparent" style={{position: 'fixed'}}>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
       <Link to="/" className="navbar-brand">
          <img src={logoo} alt="Logo" className="logo" style={{ height: '100px', width: '100px', marginLeft:'50px'}} />
        </Link>
        <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link " activeClassName="active" style={{color:'white'}}>
                <HomeIcon /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link" activeClassName="active" style={{color:'white'}}>
                 Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" activeClassName="active" style={{color:'white'}}>
                <StyledBadge badgeContent={products.length} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <div className="auth-area text-left">
            <AuthMenu />
          </div>
        </div>
      </nav>

      <div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
        <div class="carousel-inner" role="listbox">
          <div class="item active background a"></div>
        </div>
      </div>

      <div class="covertext">
        <div class="col-lg-10" style={{ float: "none", margin: "0 auto" }}>
          <h1 class="title"><img src={logo} alt=''/></h1>
          <h3 class="subtitle">Fine Dinning</h3>
        </div>
        <div class="col-xs-12 explore">
          <Link to='/product'><button type="button" class="btn btn-lg explorebtn">EXPLORE</button></Link>
        </div>
      </div>

    </div>

    
  );
};

export default Header;
