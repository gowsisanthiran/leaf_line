
import { useSelector } from 'react-redux';
import { useNavigate, Outlet, Navigate, Link, NavLink } from 'react-router-dom';
import { selectLoggedInUser } from '../../redux/features/authSlice';
import jwtDecode from 'jwt-decode';
import { Box, Typography } from '@mui/material';
import TreeMenu from './Menus/TreeMenu';
import './Authorized.css';
import DrawerTreeMenu from './Menus/DrawerTreeMenu';
import AdminDashboard from '../Authorized/Dashboard/AdminDashboard';
import AuthMenu from '../Layout/AuthMenu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { selectCartItems } from '../../redux/features/cartSlice';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 6,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const AuthorizedRoute = () => {
    const { products } = useSelector(selectCartItems);
    const navigate = useNavigate();
    const { accessToken } = useSelector(selectLoggedInUser);
    let role;
    const { UserInfo } = jwtDecode(accessToken);
    role = UserInfo.roles[0].toString();
    if (role === 'admin') {
        return (
            <>
                <Box
                    sx={{
                        backgroundColor: "#E9EDC9",
                        transition: ".4s all",
                        overflow: "visible",
                        top: "0",
                        left: "0",
                        width: "100%",
                        zIndex: "100",
                        position: "fixed",
                        boxShadow: '2px 2px 10px #7b9c56',
                        display: 'flex',
                        color: '#fff',
                        p: 1,
                        // borderRadius: '8px',
                        // marginLeft: "20px",
                        // marginRight: "20px",
                        // paddingTop:"5px"
                    }}
                >
                    <Box className='mTreeMenu' sx={{ minWidth: '225px', mr: 1 }}>
                        <DrawerTreeMenu/>
                    </Box>
                    <Box sx={{ flexGrow: 1, paddingTop: '10px' }}>
                        <Link to="dashboard" className="link-no-underline">
                         <Typography
                                component='div'
                                variant='h6'
                                // marginTop={"50px"}
                                sx={{
                                    textAlign: 'left',
                                    color: '#132a13',
                                    textShadow: '1px 1px 1px #555',
                                    marginLeft: "20px",
                                    marginTop: "25px"
                                }}
                            >
                                Dashboard
                            </Typography>
                        </Link>





                    </Box>
                    <div className="d-flex align-items-center justify-content-end">
                        <NavLink to="/product" className="nav-link" activeClassName="active" style={{ color: '#263A29' }}>
                            <Inventory2Icon />
                        </NavLink>
                        <NavLink to="/cart" className="nav-link" activeClassName="active" style={{ color: '#263A29' }}>
                            <StyledBadge badgeContent={products.length} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>

                        </NavLink>

                        <div className="auth-area text-left">
                            <AuthMenu />
                        </div>
                    </div>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        marginTop: '90px',
                        // marginLeft: "20px",
                        // borderRadius: '8px',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        className='dTreeMenu'
                        sx={{
                            backgroundColor: '#263A29',
                            boxShadow: '2px 2px 15px #7b9c56',
                            minWidth: '240px',
                            maxHeight: '100%',
                            mr: 1,

                            // borderRadius: '10px',
                        }}
                    >
                        <TreeMenu />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{}}>
                            <Outlet />
                        </Box>
                    </Box>
                </Box>
            </>
        );
    } else {
        return <Navigate to='/unauthorized' />;
    }
};

export default AuthorizedRoute;
