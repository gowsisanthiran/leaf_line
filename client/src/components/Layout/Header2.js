import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { NavLink, Link } from 'react-router-dom';
import AuthMenu from './AuthMenu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/features/cartSlice';
import logoo from '../../images/logoo.png'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 6,
        top: -50,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header2 = () => {
    const { products } = useSelector(selectCartItems);

    return (
        // <nav className="navbar navbar-expand   navbar-default" style={{marginTop:'-20px'}}>
        //     <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-toggle="collapse"
        //         data-target="#navbarNav"
        //         aria-controls="navbarNav"
        //         aria-expanded="false"
        //         aria-label="Toggle navigation"
        //     >
        //         <span className="navbar-toggler-icon" style={{marginTop:'-10px'}}></span>
        //     </button>
        //     <Link to="/" className="navbar-brand">
        //     <img src={logoo} alt="Logo" className="logo" style={{  width: '150px', marginLeft:'50px',marginTop:'40px',marginBottom:'-40px'}} />
        //     </Link>
        //     <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <NavLink to="/" className="nav-link" activeClassName="active">
        //                     <HomeIcon /> Home
        //                 </NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink to="/product" className="nav-link" activeClassName="active">
        //                     Product
        //                 </NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink to="/cart" className="nav-link" activeClassName="active">
        //                     <StyledBadge badgeContent={products.length} color="secondary">
        //                         <ShoppingCartIcon />
        //                     </StyledBadge>
        //                     Cart
        //                 </NavLink>
        //             </li>
        //         </ul>
        //     </div>
        //     <div className="d-flex align-items-center justify-content-end">
        //         <div className="auth-area text-left">
        //             <AuthMenu />
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand   navbar-default" style={{marginTop:'-20px',backgroundColor:'#899D60'}}>
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
          <img src={logoo} alt="Logo" className="logo" style={{  width: '50px', marginLeft: '150px',marginTop:'5px' }} />
        </Link >
        <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav"style={{}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link " activeClassName="active" style={{ color: '#654E30' }}>
                <HomeIcon /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link" activeClassName="active" style={{ color: '#654E30' }}>
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" activeClassName="active" style={{ color: '#654E30' }}>
                <StyledBadge badgeContent={products.length}>
                  <ShoppingCartIcon />
                </StyledBadge>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-end" style={{ color:'#bdf890' }}>
          <div className="auth-area text-left">
            <AuthMenu />
          </div>
        </div>
      </nav>

    )
}

export default Header2