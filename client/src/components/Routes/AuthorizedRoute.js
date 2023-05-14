
import {useSelector} from 'react-redux';
import {useNavigate, Outlet, Navigate} from 'react-router-dom';

import {selectLoggedInUser} from '../../redux/features/authSlice';
import jwtDecode from 'jwt-decode';

import {Box,Typography} from '@mui/material';

import TreeMenu from './Menus/TreeMenu';
import './Authorized.css';
import DrawerTreeMenu from './Menus/DrawerTreeMenu';

const AuthorizedRoute = () => {
    const navigate=useNavigate();
    const {accessToken}=useSelector(selectLoggedInUser);
    let role;
    const {UserInfo}=jwtDecode(accessToken);
    role=UserInfo.roles[0].toString();
    if(role==='admin' || role==='seller'){
        return (
            
            <>
            <Box sx={{background:'#f9fbe7',  boxShadow: '2px 2px 10px #7b9c56', display:'flex', color:'#fff',p:1}}>
                <Box className='mTreeMenu' sx={{minWidth:'225px',mr:1}}>
                    <DrawerTreeMenu/>
                </Box>
                <Box sx={{flexGrow:1}}>
                    <Typography component='div' variant='h6' sx={{textAlign:"left" , color:"#1b5e20", textShadow:"1px 1px 1px #555"}}>Dashboard</Typography>
                </Box>
            </Box>
            <Box sx={{display:'flex',flexGrow:1}}>
                <Box className='dTreeMenu' sx={{background:'#132b03',boxShadow: '2px 2px 10px #7b9c56',minWidth:'225px',mr:1}}>
                    <TreeMenu/>                    
                </Box>
                <Box sx={{flexGrow:1}}>
                    <Box sx={{m:'0 auto',p:1}}>
                        <Outlet/>
                    </Box>
                </Box>
            </Box>
            </>
        )
    }else{
        return <Navigate to='/unauthorized'/>
    }
}

export default AuthorizedRoute