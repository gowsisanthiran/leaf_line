import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { NavLink, Link } from 'react-router-dom';
import AuthMenu from './AuthMenu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/features/cartSlice';
import logoo from '../../images/logoo.png'
import React, { useState, useEffect } from 'react';
import Inventory2Icon from '@mui/icons-material/Inventory2';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 6,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    background:'#609a33',
    padding: '0 4px',
  },
}));

const Header2 = () => {
  const { products } = useSelector(selectCartItems);

  
  return (
    

    <div className='' style={{}}>
      <nav className={`navbar navbar-expand navbar-dark fixed-top`} style={{ backgroundColor:'',maxHeight:'80px'}}>
        <div className="container" >
          <NavLink to="/" className="navbar-brand">
            <img src={logoo} alt="Logo" className="logo" style={{height:'100px',overflow: 'hidden' }} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto justify-content-center align-items-center" style={{ marginRight: '20px' }}>
              <li className="nav-item" style={{ marginLeft: '100px',marginRight: '15px' }}>
                <NavLink to="/" className="" activeClassName="active" style={{ color: '#9DC183' }}>
                  <HomeIcon />
                </NavLink>
              </li>
              <li className="nav-item mr-sm-2">
                <NavLink to="/product" className="" activeClassName="active" style={{ color: '#9DC183',marginRight: '15px' }}>
                  <Inventory2Icon />
                </NavLink>
              </li>
              <li className="nav-item mr-sm-2">
              <NavLink to="/cart" className="" activeClassName="active" style={{ color: '#9DC183' ,marginRight: '5px'}}>
                  <StyledBadge badgeContent={products.length}>
                    <ShoppingCartIcon />
                  </StyledBadge>
                </NavLink>
              </li>
              <li className="nav-item mr-sm-2">
                <NavLink className="" activeClassName="active" style={{ fontWeight: 'bold', fontFamily: 'Open Sans', color: '#9DC183' }}>
                </NavLink>
              </li>
            </ul>

            <AuthMenu style={{ color: '#9DC183' ,marginRight: '5px'}}/>
            
          </div>
        </div>

      </nav>
      </div>

  )
}

export default Header2

