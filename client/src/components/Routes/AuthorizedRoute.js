
import { useSelector } from 'react-redux';
import { useNavigate, Outlet, Navigate, Link } from 'react-router-dom';
import { selectLoggedInUser } from '../../redux/features/authSlice';
import jwtDecode from 'jwt-decode';
import { Box, Typography } from '@mui/material';
import TreeMenu from './Menus/TreeMenu';
import './Authorized.css';
import DrawerTreeMenu from './Menus/DrawerTreeMenu';
import AdminDashboard from '../Authorized/Dashboard/AdminDashboard';


const AuthorizedRoute = () => {
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
                        background: '#f9fbe7',
                        boxShadow: '2px 2px 10px #7b9c56',
                        display: 'flex',
                        color: '#fff',
                        p: 1,
                        borderRadius: '8px',
                        marginLeft: "20px",
                        marginRight: "20px"
                    }}
                >
                    <Box className='mTreeMenu' sx={{ minWidth: '225px', mr: 1 }}>
                        <DrawerTreeMenu />
                    </Box>
                    <Box sx={{ flexGrow: 1 ,paddingTop: '10px'}}>
                        <Link to="dashboard" className="link-no-underline">
                            <Typography
                                component='div'
                                variant='h6'
                                sx={{
                                    textAlign: 'left',
                                    color: '#132a13',
                                    textShadow: '1px 1px 1px #555',
                                    marginLeft: "20px",
                                }}
                            >
                                Dashboard
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        marginTop: '16px',
                        marginLeft: "20px",
                        // borderRadius: '8px',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        className='dTreeMenu'
                        sx={{
                            backgroundImage: 'linear-gradient(to right, #143a0d, #c0dca5)',
                            boxShadow: '2px 2px 15px #7b9c56',
                            minWidth: '240px',
                            maxHeight: '100px',
                            mr: 1,
                            borderRadius: '10px',
                        }}
                    >
                        <TreeMenu />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ m: '0 auto', p: 1 }}>
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
