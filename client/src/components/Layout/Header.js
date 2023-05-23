import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DrawerMenu from './DrawerMenu';
import AuthMenu from './AuthMenu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Tooltip } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { selectCartItems } from '../../redux/features/cartSlice';
import '../Layout/Header.css';

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
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      document.querySelector('.navbar').classList.add('active');
    } else {
      document.querySelector('.navbar').classList.remove('active');
    }
  });

  return (
    <header className="bg-transparent headers fixed-top">
      <div className="container justify-content-between header">
        <nav className="navbar navbar-expand navbar-light bg-transparent navbar">
          <Link to="/" className="navbar-brand">
            <span className="logo">LEAFLINE</span>
          </Link>
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
          <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active">
                  <HomeIcon /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link" activeClassName="active">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" activeClassName="active">
                  <ShoppingCartIcon /> Cart
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
      </div>
    </header>
  );
};

export default Header;
