import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {useNavigate,useLocation} from 'react-router-dom';

import {login,selectLoggedInUser,persistLogin} from '../../redux/features/authSlice';

import {Box, Avatar, Typography, TextField, Button, Grid, FormGroup, FormControlLabel, Checkbox, Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const Login = () => {
    const navigate=useNavigate();
    const location=useLocation();
    let path='/';
    if(location.state){
        path=location.state.path;
    }
    const dispatch=useDispatch();
    const {accessToken}=useSelector(selectLoggedInUser);
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [checked, setChecked]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();

        const jsonData={
            email,
            password
        }
        dispatch(login({jsonData,toast}));
    }
    const handleKeepMeLoggedIn=async(e)=>{
        setChecked(!checked);
        dispatch(persistLogin(!checked));
    }
    useEffect(() => {
      if(accessToken){
       navigate(path) ;
      }
    }, [accessToken,navigate,path])
    
    const glassmorphismStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the opacity as desired
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Adjust the shadow properties as desired
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)', // Adjust the border color and opacity as desired
        padding: '10px',
        margin: '0 auto',
        maxWidth: 500,
      };
  return (
    <>
    <Box sx={{marginTop:2, display:'flex',flexDirection:'column',alignItems:'center',}}>
        <Avatar sx={{m:1,bgcolor:"green"}}>
            <LockOutlinedIcon/>
        </Avatar>
        <Typography component='div' variant='h5'  color="#1b5e20">Login</Typography>

        <Box component='form' onSubmit={handleSubmit}>
            <TextField type='email'
                        id='email'
                        label='Email'
                        name='email'
                        margin='normal'
                        required
                        fullWidth
                        autoComplete='email'
                        color="success"
                        autoFocus
                        value={email}
                        onChange={(e=>setEmail(e.target.value))}
            />
            <TextField type='password'
                        id='password'
                        label='Password'
                        name='password'
                        margin='normal'
                        required
                        fullWidth
                        color="success"
                        autoFocus
                        value={password}
                        onChange={(e=>setPassword(e.target.value))}
            />
            <Button type='submit'
                        fullWidth
                        color="success"
                        variant='contained'
                        sx={{mt:3,mb:2}}
            >Login</Button>

            <Grid container style={{}}>
                <Grid item xs>
                    <FormGroup>
                        <FormControlLabel   control={<Checkbox/>}
                                            label='Keep me logged in.'
                                            checked={checked}
                                            onChange={handleKeepMeLoggedIn}
                        />
                    </FormGroup>
                </Grid>
            </Grid>
        </Box>  
    </Box>
    </>
  )
}

export default Login