import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getProductsByAuthorizeRoles, selectAllProducts } from '../../../redux/features/productSlice';
import { deleteReview, getReviews, selectAllReviews, selectReviewMutationResult, resetMutationResult } from '../../../redux/features/reviewSlice';

import { Box, InputLabel, FormControl, MenuItem, Typography, Select, IconButton, Tooltip, Stack, Rating, Divider } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteForeeverIcon from '@mui/icons-material/DeleteForever';
import { IMAGE_BASEURL } from '../../../constants/baseURL';
import BoxShadowLoader from '../../Skeletons/BoxShadowLoader';

const ReviewList = () => {
    const [id, setId] = useState('');
    const dispatch = useDispatch();
    const { products } = useSelector(selectAllProducts);
    const { reviews, loading: revLoading } = useSelector(selectAllReviews);
    const { success } = useSelector(selectReviewMutationResult);
    console.log(reviews);

    const columns = [
        // {
        //     field: 'image', headerName: 'Avatar', headerClassName: 'gridHeader', flex: .4, minWidth: 60,
        //     renderCell: (params) => {
        //         return (
        //             params.value === '' ? '' :
        //                 <img src={params.value} height='100%' />
        //         )
        //     }
        // },
        { field: 'name', headerName: 'Name', headerClassName: 'gridHeader', flex: 1, minWidth: 150 },
        {
            field: 'rating',
            headerName: 'Rating',
            headerClassName: 'gridHeader',
            flex: .6,
            minWidth: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Stack spacing={1} sx={{ display: 'block' }}>
                            <Rating value={params.value} precision={0.1} readOnly />
                        </Stack>
                    </>
                )
            }
        },
        { field: 'review', headerName: 'Review', headerClassName: 'gridHeader', flex: 1.5, minWidth: 200 },
        {
            field: 'delete',
            headerName: 'Delete',
            headerClassName: 'gridHeader',
            flex: .5,
            minWidth: 80,
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Tooltip title='Delete' placement='top'>
                            <IconButton color='error'
                                component='span'
                                onClick={() => deleteHandler(params.getValue(params.id, 'id'))}>
                                <DeleteForeeverIcon sx={{ width: '30px', height: '30px' }} />
                            </IconButton>
                        </Tooltip>

                    </>
                )
            }
        }
    ]
    const rows = [];
    reviews && reviews.forEach(rev => {
        rows.push({
            id: rev._id,
            image:rev.user.avatar.url,
            name: rev.user.name,
            rating: rev.rating,
            review: rev.comment
        })
    });

    const handleChange = (id) => {
        setId(id);
        if (id !== '') {
            dispatch(getReviews({ id, toast }));
        }
    }

    const deleteHandler = (reviewId) => {
        let productId = id;
        dispatch(deleteReview({ reviewId, productId, toast }));

    }
    useEffect(() => {
        if (success) {
            dispatch(resetMutationResult());
            dispatch(getReviews({ id, toast }));
        }
        dispatch(getProductsByAuthorizeRoles({ toast }));
    }, [dispatch, success, id]);

    return (
        <>
        <Box
          className='dash-box'
          sx={{
            padding: '40px',
            minHeight: '100vh',
          }}
        >
        <>
            <Box sx={{ textAlign: 'center', boxShadow: '2px 2px 2px 2px #588157', borderRadius: '5px', padding: '20px', height: "100% !important", backgroundColor:"white" , marginTop:"45px", width:"1360px" , marginLeft:"110px"
 }}>
                <Box sx={{ maxWidth: "500px", m: '30px auto', textAlign: 'left', boxShadow: '0px 0px 5px #006400', borderRadius: '5px', padding: '20px'}} color='white' >
                    <FormControl fullWidth color='success'>
                        <InputLabel id='productList' fontFamily='poppins, sans-serif'>Product List</InputLabel>
                        <Select labelId='productList'
                            fontFamily='poppins, sans-serif'
                            id='productList'
                            value={id}
                            label='Product List'
                            onChange={((e) => handleChange(e.target.value))}>
                            {products && products.map((product) => (
                                <MenuItem key={product._id} value={product._id}>
                                    {product.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Divider />
                {revLoading ? <BoxShadowLoader /> :
                    id ?
                        (reviews && reviews.length > 0 ?
                            <>
                                <Typography sx={{ mt: 3 }}>{reviews.length} Review(s) found for this Product.</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', mt: 2, textAlign: 'center' }}>
                                    <DataGrid rows={rows}
                                        columns={columns}
                                        sx={{ m: 0, fontFamily: 'poppins, sans-serif' }}
                                        components={{ Toolbar: GridToolbar }}
                                        autoHeight
                                    />
                                </Box>
                            </>
                            :
                            <Typography sx={{ mt: 3, fontFamily: 'poppins, sans-serif' }}>No Reviews Found</Typography>
                        )
                        :
                        <Typography sx={{ mt: 3, fontFamily: 'poppins, sans-serif' }}>Select a product to view reviews.</Typography>
                }
            </Box>
        </>
        </Box>
        </>
    )
}

export default ReviewList

