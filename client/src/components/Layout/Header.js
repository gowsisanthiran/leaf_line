


// import React, { useState, useEffect } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import DrawerMenu from './DrawerMenu';
// import AuthMenu from './AuthMenu';
// import HomeIcon from '@mui/icons-material/Home';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Inventory2Icon from '@mui/icons-material/Inventory2';
// import { Tooltip } from '@mui/material';
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import { useSelector } from 'react-redux';
// import { selectCartItems } from '../../redux/features/cartSlice';
// import '../Layout/Header.css';
// import logo from '../../images/LOGO.png';
// import logoo from '../../images/logoo.png';

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: 6,
//     top: 5,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   const handleScroll = () => {
//     const isScrolled = window.scrollY > 0;
//     setScrolled(isScrolled);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const { products } = useSelector(selectCartItems);

//   return (
  

// <div className={`container-fluid main ${scrolled ? 'scrolled' : ''}`}>
//     <nav className={`navbar navbar-expand navbar-dark fixed-top ${scrolled ? 'navbar-transparent' : ''}`} style={{ backgroundColor: scrolled ? '#899D60' : '' }}>
//       <div className="container">
//         <NavLink to="/" className="navbar-brand">
//           <img src={logo} alt="Logo" className="logo" style={{ width: '150px', display: 'block', marginTop: '10px', textAlign:'center',
//     padding: '22px 0 34px'
// }} />
//         </NavLink>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mx-auto">
//             <li className="nav-item">
//               <NavLink to="/" className="nav-link" activeClassName="active">
//                 <HomeIcon /> Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/product" className="nav-link" activeClassName="active">
//                 Product
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/cart" className="nav-link" activeClassName="active">
//                 <StyledBadge badgeContent={products.length}>
//                   <ShoppingCartIcon />
//                 </StyledBadge>
//                 Cart
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//      </nav>
    
   
   


    
  

// <div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
//   <div class="carousel-inner" role="listbox">
//     <div class="item active background a zoom-effect">
//       {/* <img src="your-image-url.jpg" alt="Image" /> */}
//     </div>
   
//   </div>
// </div>

// <div class="covertext zoom-effect">
//   <div class="col-lg-10" style={{ float: "none", margin: "0 auto", marginTop: '10rem', fontFamily: 'NunitoSans,Verdana', color: '#fff', border: '2px ' }}>
//     <h1 class="title">BIO-DEGRADABLE PLATES FOR A</h1>
//     <h1 class="title">CLEANER PLANET</h1>
//   </div>
//   <div class="col-xs-12 explore">
//     <a href="/product"><button type="button" class="btn btn-lg explorebtn">EXPLORE</button></a>
//   </div>
// </div>

// </div>


    


//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
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
import logo from '../../images/LOGO.png';
import logoo from '../../images/logoo.png';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 6,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { products } = useSelector(selectCartItems);

  return (
    <div className={`container-fluid main ${scrolled ? 'scrolled' : ''}`}>
      <nav className={`navbar navbar-expand navbar-dark navbar navbar navbar-default fixed-top ${scrolled ? 'navbar-transparent' : ''}`} style={{ position: 'fixed', marginTop: '-100px', backgroundColor: scrolled ? '#899D60' : '' }}>
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

      <div className="navbar-logo">
        <a className="logo" href="http://chaitan.like-themes.com/">
          <img
            width="254"
            height="258"
            src={logoo} 
            className="attachment-full size-full"
            alt="Logo" 
            loading="lazy"
            //srcSet="http://chaitan.like-themes.com/wp-content/uploads/2018/06/logo_01.png 254w, http://chaitan.like-themes.com/wp-content/uploads/2018/06/logo_01-24x24.png 24w, http://chaitan.like-themes.com/wp-content/uploads/2018/06/logo_01-48x48.png 48w"
            sizes="(max-width: 254px) 100vw, 254px"
          />
        </a>
      </div>
      
        
        {/* <Link to="/" className="navbar-brand">
          <img src={logoo} alt="Logo" className="logo" style={{  width: '350px', marginLeft: '150px',marginTop:'20px',marginBottom:'-40px',textAlign: 'center' }} />
        </Link > */}
        <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav"style={{marginTop:'40px',marginBottom:'-40px'}}>
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
        <div className="d-flex align-items-center justify-content-end" style={{ marginTop: '80px',color:'#bdf890' }}>
          <div className="auth-area text-left">
            <AuthMenu />
          </div>
        </div>
      </nav>

<div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="3000">
  <div class="carousel-inner" role="listbox">
    <div class="item active background a zoom-effect">
      {/* <img src="your-image-url.jpg" alt="Image" /> */}
    </div>
   
  </div>
</div>

<div class="covertext zoom-effect">
  <div class="col-lg-10" style={{ float: "none", margin: "0 auto", marginTop: '10rem', fontFamily: 'NunitoSans,Verdana', color: '#fff', border: '2px ' }}>
    <h1 class="title">BIO-DEGRADABLE PLATES FOR A</h1>
    <h1 class="title">CLEANER PLANET</h1>
  </div>
  <div class="col-xs-12 explore">
    <a href="/product"><button type="button" class="btn btn-lg explorebtn">EXPLORE</button></a>
  </div>
</div>



    </div>


  );
};

export default Header;



