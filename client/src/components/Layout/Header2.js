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
    top: -50,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header2 = () => {
  const { products } = useSelector(selectCartItems);
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
  
  return (
    

    <div className={`container-fluid main ${scrolled ? 'scrolled' : ''}`}>
      <nav className={`navbar navbar-expand navbar-dark fixed-top ${scrolled ? 'navbar-transparent' : ''}`} style={{ backgroundColor: scrolled ? 'rgba(8, 57, 43, 0.4)' : '' }}>
        <div className="container"style={{marginTop:'-70px',marginBottom:'-50px'}}>
          <NavLink to="/" className="navbar-brand">
            <img src={logoo} alt="Logo" className="logo" style={{ height: '200px' }} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto justify-content-center align-items-center "style={{marginRight:'20px'}}>
              <li className="nav-item"style={{marginLeft:'100px'}}>
                <NavLink to="/" className="nav-link" activeClassName="active" style={{ fontWeight: 'bold', fontFamily: 'Open Sans, sans-serif',color:'#BACC81' }}>
                  <HomeIcon /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link" activeClassName="active" style={{ fontWeight: 'bold', fontFamily: 'Open Sans, sans-serif',color:'#BACC81'  }}>
                  <Inventory2Icon/>Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" activeClassName="active" style={{ fontWeight: 'bold', fontFamily: 'Open Sans',color:'#BACC81'  }}>
                  <StyledBadge badgeContent={products.length}>
                    <ShoppingCartIcon />
                  </StyledBadge>
                  Cart
                </NavLink>
              </li>
            </ul>
            <div className="auth-area text-left">
            <AuthMenu />
          </div>
          </div>
          {/* <div className="d-flex align-items-center justify-content-end" style={{ marginTop: '80px',color:'#bdf890' }}>
          
        </div> */}
        </div>

      </nav>
      </div>

  )
}

export default Header2


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
// import bg from '../../images/png1.png';
// import bg1 from '../../images/picc.png';
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
   

   
//      <div className={`container-fluid main ${scrolled ? 'scrolled' : ''}`}>
//       <nav className={`navbar navbar-expand navbar-dark fixed-top ${scrolled ? 'navbar-transparent' : ''}`} style={{ backgroundColor: scrolled ? 'rgba(8, 57, 43, 0.4)' : '' }}>
//         <div className="container"style={{marginTop:'-70px',marginBottom:'-50px'}}>
//           <NavLink to="/" className="navbar-brand">
//             <img src={logoo} alt="Logo" className="logo" style={{ height: '200px' }} />
//           </NavLink>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto justify-content-center align-items-center "style={{marginRight:'20px'}}>
//               <li className="nav-item"style={{marginLeft:'100px'}}>
//                 <NavLink to="/" className="nav-link" activeClassName="active" style={{ fontWeight: 'bold', fontFamily: 'Open Sans, sans-serif',color:'#BACC81' }}>
//                   <HomeIcon /> Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/product" className="nav-link" activeClassName="active" style={{ fontWeight: 'bold', fontFamily: 'Open Sans, sans-serif',color:'#BACC81'  }}>
//                   <Inventory2Icon/>Product
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/cart" className="nav-link" activeClassName="active" style={{ fontWeight: 'bold', fontFamily: 'Open Sans',color:'#BACC81'  }}>
//                   <StyledBadge badgeContent={products.length}>
//                     <ShoppingCartIcon />
//                   </StyledBadge>
//                   Cart
//                 </NavLink>
//               </li>
//             </ul>
//             <div className="auth-area text-left">
//             <AuthMenu />
//           </div>
//           </div>
//           {/* <div className="d-flex align-items-center justify-content-end" style={{ marginTop: '80px',color:'#bdf890' }}>
          
//         </div> */}
//         </div>

//       </nav>
//       </div>
//        );
//       };
//       export default Header2;
