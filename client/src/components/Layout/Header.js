


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
import logoo from '../../images/logoo.png';
import bg from '../../images/png1.png';
import bg1 from '../../images/picc.png';
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
      <nav className={`navbar navbar-expand navbar-dark fixed-top ${scrolled ? 'navbar-transparent' : ''}`} style={{ backgroundColor: scrolled ? 'rgba(8, 57, 43, 0.4)' : '' }}>
        <div className="container" style={{ marginTop: '-40px', marginBottom: '-40px' }}>
          <NavLink to="/" className="navbar-brand">
            <img src={logoo} alt="Logo" className="logo" style={{ height: 'auto', aspectRatio: '3/2', width: '50%' }} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto justify-content-center align-items-center" style={{ marginRight: '20px' }}>
              <li className="nav-item" style={{ marginLeft: '100px' }}>
                <NavLink to="/" className="" activeClassName="active" style={{ color: '#008000' }}>
                  <HomeIcon />
                </NavLink>
              </li>
              <li className="nav-item mr-sm-2">
                <NavLink to="/product" className="" activeClassName="active" style={{ color: '#008000' }}>
                  <Inventory2Icon />
                </NavLink>
              </li>
              <li className="nav-item mr-sm-2">
                <NavLink to="/cart" className="" activeClassName="active" style={{ color: '#008000' }}>
                  <StyledBadge badgeContent={products.length}>
                    <ShoppingCartIcon />
                  </StyledBadge>
                </NavLink>
              </li>
              <li className="nav-item mr-sm-2">
                <NavLink className="" activeClassName="active" style={{ fontWeight: 'bold', fontFamily: 'Open Sans', color: '#008000' }}>
                </NavLink>
              </li>
            </ul>

            <AuthMenu />

          </div>
          {/* <div className="d-flex align-items-center justify-content-end" style={{ marginTop: '80px',color:'#bdf890' }}>
          
        </div> */}
        </div>

      </nav>


      <div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="3000" style={{ backgroundImage: `url(${bg})` }}>
        <div class="carousel-inner" role="listbox" >
          <div class="item active background a zoom-effect">
            <img src={bg} alt="Image" style={{ opacity: 0.2 }} />

          </div>

        </div>

      </div>
      {/* <div className="item active background a zoom-effect" style={{ backgroundColor: '#5E8862', overflow: 'hidden',paddingTop:'100px',paddingBottom:'100px' }}>
  <img src={bg} alt="Image" style={{ textAlign: 'center', paddingRight: '100px', paddingTop:'10px',paddingBottom:'100px' }} />
</div> */}

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



