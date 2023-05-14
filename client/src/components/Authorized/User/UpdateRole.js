import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import { getUserDetails,selectUserDetails, updateUserRole,selectMutationResult, resetMutationResult } from '../../../redux/features/authSlice';
import { IMAGE_BASEURL } from '../../../constants/baseURL';

import {Box, Typography, Grid, Divider, FormControl, InputLabel, Select,MenuItem, Button} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

const UpdateRole = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    const [role,setRole]=useState('');
    const [blocked,setBlocked]=useState('');
    const {user}=useSelector(selectUserDetails);

    const {success}=useSelector(selectMutationResult);

    const submitHandler = (e) => {
        e.preventDefault();
      
        let updatedRoles = [];
        let updatedBlocked = false;
      
        if (role === 'admin') {
          updatedRoles = ['admin']; // Change the user's roles to "admin"
          updatedBlocked = false; // Update the block status as desired
        } else {
          updatedRoles = ['user']; // Change the user's roles to "user"
          updatedBlocked = true; // Update the block status as desired
        }
      
        const jsonData = {
          roles: updatedRoles,
          blocked: updatedBlocked,
        };
      
        dispatch(updateUserRole({ id, jsonData, toast }));
      };
      

      useEffect(() => {
        if (success) {
          dispatch(resetMutationResult());
        }
        dispatch(getUserDetails({ id, toast }));
      }, [id, dispatch, success]);
      
      useEffect(() => {
        setRole(user?.roles);
        setBlocked(user?.blocked);
      
        if (user?.roles && user.roles.length > 1 && user.roles[1] === 'admin') {
          setRole('admin');
          setBlocked(false);
        } else {
          setRole('user');
          setBlocked(true);
        }
      }, [user]);
      
  return (
    <Box sx={{maxWidth:'550px', m:'0 auto', display:'flex', flexGrow:1, alignItems:'center'}}>
        <Box>
            <Box sx={{textAlign:'center'}}>
            <Typography component='h1' 
                        variant='h6'>Account Deatil's
            </Typography>
            <img src={IMAGE_BASEURL+user?.avatar?.url} 
                    alt={user.name} 
                    style={{width:80,height:80,borderRadius:'50%', margin:'0 auto'}}
            />
            </Box>


            <Grid container sx={{alignItems:'center',mt:1}}>

            <Grid item xs={6}><Typography variant='button' component='div'>User's Name</Typography></Grid>
            <Grid item xs={6}><Typography variant='button' component='div'>{user?.name}</Typography></Grid>

            <Grid item xs={6}><Typography variant='button' component='div'>User's Email</Typography></Grid>
            <Grid item xs={6}><Typography variant='button' component='div'>{user?.email}</Typography></Grid>

            <Grid item xs={6}><Typography variant='button' component='div'>Joined date:</Typography></Grid>
            <Grid item xs={6}><Typography variant='button' component='div'>{String(user?.createdAt).substr(0,10)}</Typography></Grid>

            <Grid item xs={6}><Typography variant='button' component='div'>User's Role</Typography></Grid>
            <Grid item xs={6}><Typography variant='button' component='div'>{user?.roles}</Typography></Grid>

            <Grid item xs={6}><Typography variant='button' component='div'>User's Status</Typography></Grid>
            <Grid item xs={6}><Typography variant='button' component='div'>{user?.blocked?'Blocked':'Active'}</Typography></Grid>

            </Grid>

            <Divider/>

            <Grid container sx={{alignItems:'center', mt:3}}>

            <Grid item xs={6}><Typography variant='button' component='div'>Change User's Status</Typography></Grid>

            <Grid item xs={6}>
                <FormControl sx={{width:'100%'}}>
                    <InputLabel id='status'>Status</InputLabel>
                    <Select required
                            labelId='status'
                            id='status'
                            value={blocked}
                            label='Status'
                            onChange={(e=>setBlocked(e.target.value))}>

                                <MenuItem value='true'>Block</MenuItem>
                                <MenuItem value='false'>Active</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            </Grid>

            <Grid container sx={{alignItems:'center', mt:3}}>

            <Grid item xs={6}><Typography variant='button' component='div'>Change User's Role</Typography></Grid>

            <Grid item xs={6}>
                <FormControl sx={{width:'100%'}}>
                    <InputLabel id='status'>Role</InputLabel>
                    <Select required
                            labelId='role'
                            id='role'
                            value={role || ''}
                            label='Role'
                            onChange={(e=>setRole(e.target.value))}>

                                <MenuItem value='admin'>Admin</MenuItem>
                                <MenuItem value='user'>User</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            </Grid>

            
            
            <Button variant='contained'
                    fullWidth
                    startIcon={<UpdateIcon/>}
                    sx={{mt:3,mb:2}}
                    onClick={submitHandler}>Change
            </Button>
        </Box>
    </Box>
  )
}

export default UpdateRole